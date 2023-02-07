import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  AutocompleteOptions,
  AutocompleteState,
  createAutocomplete,
} from "@algolia/autocomplete-core";
import { getAlgoliaResults } from "@algolia/autocomplete-preset-algolia";
import { Hit } from "@algolia/client-search";
import algoliasearch from "algoliasearch/lite";
import { Box, TextField, useTheme, useMediaQuery, Button, Typography } from "@mui/material";
import classnames from "classnames";
import { SearchOutlined } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import {
  SearchResults,
  SearchCategories,
  SearchRecommendations,
  NoSearchResults,
} from "@forkfacts/components";
import { SearchResultItemType, AutoCompleteSearchProps } from "@forkfacts/models";
import CloseIcon from "@mui/icons-material/Close";
import { ForLoops } from "@forkfacts/helpers";
import { navigate } from "gatsby";
import {
  useStyles,
  mobileInputStyles,
  desktopInputStyles,
  inputStyles,
} from "./autocompleteSearchStyles";
import "../../styles/styles.css";

const appId = process.env.GATSBY_SEARCH_APP_ID as string;
const apiKey = process.env.GATSBY_SEARCH_API_KEY as string;
const searchClient = algoliasearch(apiKey, appId);
const INDEX_NAMES = ["ff_index", "sr_index"];

type AutocompleteItem = Hit<{
  image: string;
  name: string;
  objectID: string;
  url: string;
}>;

function AutoCompleteSearch(
  props: Partial<AutocompleteOptions<AutocompleteItem>> & AutoCompleteSearchProps
) {
  const [autocompleteState, setAutocompleteState] = useState<AutocompleteState<AutocompleteItem>>({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: "",
    activeItemId: null,
    status: "idle",
  });
  const theme = useTheme();
  const { query, collections, isOpen, status } = autocompleteState;
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const [isSearchFound, setIsSearchFound] = useState<any>([]);
  const classes = useStyles({ isOpen });
  console.log("isSearchFound", isSearchFound);
  const autocomplete = useMemo(
    () =>
      createAutocomplete<
        AutocompleteItem,
        React.BaseSyntheticEvent,
        React.MouseEvent,
        React.KeyboardEvent
      >({
        onStateChange({ state }) {
          setAutocompleteState(state);
        },
        getSources() {
          return [
            {
              sourceId: props.sourceId,
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: query ? INDEX_NAMES[1] : INDEX_NAMES[0],
                      query,
                      params: {
                        hitsPerPage: 4,
                      },
                    },
                  ],
                  transformResponse: ({ hits }) => {
                    setIsSearchFound(hits[0]?.length);
                    return hits;
                  },
                });
              },
              getItemUrl({ item }) {
                return item.url;
              },
            },
          ];
        },
        ...props,
      }),
    [props]
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const { getEnvironmentProps } = autocomplete;

  useEffect(() => {
    if (!formRef.current || !panelRef.current || !inputRef.current) {
      return undefined;
    }
    const { onTouchStart, onTouchMove, onMouseDown } = getEnvironmentProps({
      formElement: formRef.current,
      inputElement: inputRef.current,
      panelElement: panelRef.current,
    });
    if (desktop) {
      window.addEventListener("mousedown", onMouseDown);
      window.addEventListener("touchstart", onTouchStart);
      window.addEventListener("touchmove", onTouchMove);
    }
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [getEnvironmentProps, autocompleteState.isOpen]);

  const onSelectItem = (item: SearchResultItemType) => {
    navigate(item.url);
  };

  const onClearSearch = () => {
    autocomplete.setQuery("");
  };

  const onClosePage = () => {
    autocomplete.setIsOpen(false);
    autocomplete.setQuery("");
  };

  const noResultInput = mobile && !isOpen && query && !desktop;

  return (
    <div className={classes.root}>
      <Box
        component="div"
        className={classnames(
          desktop
            ? classes.closedSearchContainer
            : (isOpen && !query) || (query && mobile && isOpen) || noResultInput
            ? classes.openedSearchContainer
            : ""
        )}
        boxShadow={isOpen ? 2 : 0}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Box
          component="form"
          ref={formRef}
          {...autocomplete.getFormProps({ inputElement: inputRef.current })}
          sx={{ display: "flex", p: (mobile && isOpen) || (mobile && noResultInput) ? "10px" : 0 }}
        >
          <TextField
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  <Box
                    sx={{
                      position: "absolute",
                      top: theme.spacing(1.175),
                      right: theme.spacing(0.25),
                      width: theme.spacing(4.375),
                      height: theme.spacing(4.375),
                      bgcolor: theme.palette.common.white,
                    }}
                  >
                    {query && (
                      <CloseIcon
                        onClick={onClearSearch}
                        sx={{ cursor: "pointer", color: theme.palette.common.black }}
                      />
                    )}
                  </Box>
                </InputAdornment>
              ),
            }}
            sx={
              desktop
                ? desktopInputStyles(
                    theme.spacing,
                    theme.shadows,
                    isOpen,
                    theme.palette.primary,
                    theme.palette.customGray
                  )
                : mobile && !isOpen && !desktop
                ? mobileInputStyles(
                    theme.spacing,
                    isOpen,
                    theme.palette.primary,
                    theme.palette.customGray
                  )
                : inputStyles(isOpen, theme.palette.primary, theme.spacing)
            }
            ref={inputRef}
            {...autocomplete.getInputProps({ inputElement: inputRef.current })}
          />
          {(isOpen && mobile) || noResultInput ? (
            <Button
              onClick={onClosePage}
              sx={{
                fontWeight: theme.typography.fontWeightBold,
                fontSize: theme.typography.subtitle2.fontSize,
                textTransform: "lowercase",
              }}
            >
              Close
            </Button>
          ) : null}
        </Box>
        {isOpen && desktop && (
          <Box
            style={{
              backgroundColor: theme.palette.grey[300],
              width: "100%",
              height: theme.spacing(0.125),
            }}
          />
        )}

        {isOpen && (desktop || mobile) ? (
          <Box
            component="div"
            ref={panelRef}
            {...autocomplete.getPanelProps({})}
            sx={{ width: "100%" }}
          >
            {!query && mobile && (
              <Box sx={{ mb: theme.spacing(2), width: "100%" }}>
                <SearchCategories
                  onSelectCategory={props.onSelectCategory}
                  categoryOptions={props.categoryOptions}
                />
              </Box>
            )}
            {!query && status === "idle" && (mobile || desktop) && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingLeft: theme.spacing(2),
                  paddingRight: theme.spacing(2),
                }}
                component="div"
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: theme.typography.fontWeightBold,
                    fontSize: theme.typography.subtitle2.fontSize,
                  }}
                >
                  Recently viewed
                </Typography>
                <Button
                  color="primary"
                  variant="text"
                  sx={{
                    fontWeight: theme.typography.fontWeightBold,
                    fontSize: theme.typography.subtitle2.fontSize,
                    textTransform: "lowercase",
                  }}
                  onClick={onClearSearch}
                >
                  Clear
                </Button>
              </Box>
            )}
            {!query && (mobile || desktop) ? (
              <Box
                sx={{
                  width: "100%",
                  paddingLeft: theme.spacing(1),
                  paddingRight: theme.spacing(1),
                }}
              >
                <ForLoops each={collections}>
                  {(collection, index) => {
                    const { source, items } = collection;
                    return (
                      <Box component="section" key={`source-${index}`}>
                        {items.length > 0 && (
                          <SearchResults collectionListsItems={items} onSelectItem={onSelectItem} />
                        )}
                      </Box>
                    );
                  }}
                </ForLoops>
                <SearchRecommendations recommendations={props.recommendations} />
              </Box>
            ) : query && (desktop || mobile) ? (
              <Box
                sx={{
                  width: "100%",
                  paddingLeft: theme.spacing(1),
                  paddingRight: theme.spacing(1),
                }}
              >
                <ForLoops each={collections}>
                  {(collection, index) => {
                    const { items } = collection;
                    return (
                      <Box component="section" key={`source-${index}`}>
                        {items.length > 0 && (
                          <SearchResults
                            collectionGroupedItems={props.collectionGroupedItems}
                            onSelectItem={onSelectItem}
                            multiple={true}
                          />
                        )}
                      </Box>
                    );
                  }}
                </ForLoops>
              </Box>
            ) : null}
          </Box>
        ) : (noResultInput && !isSearchFound && mobile && query) ||
          (desktop && !isSearchFound && query) ? (
          <NoSearchResults />
        ) : null}
      </Box>
    </div>
  );
}

export default AutoCompleteSearch;
