import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  AutocompleteOptions,
  AutocompleteState,
  createAutocomplete,
} from "@algolia/autocomplete-core";
import { getAlgoliaResults } from "@algolia/autocomplete-preset-algolia";
import { Hit } from "@algolia/client-search";
import algoliasearch from "algoliasearch/lite";
import { Box, Button, TextField, Typography, useTheme, useMediaQuery } from "@mui/material";
import classnames from "classnames";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SearchOutlined } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import { SearchResults, MobileSearchCategories } from "@forkfacts/components";
import { SearchResultItemType, AutoCompleteSearchProps } from "@forkfacts/models";
import CloseIcon from "@mui/icons-material/Close";
import { ForLoops } from "@forkfacts/helpers";
import { navigate } from "gatsby";
import {
  useStyles,
  mobileInputStyles,
  desktopInputStyles,
  inputStyles,
  noResultInputStyles,
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
  const {
    spacing,
    shadows,
    palette: { grey, common, primary },
    breakpoints,
  } = useTheme();
  const { query, collections, isOpen, status } = autocompleteState;
  const mobile = useMediaQuery(breakpoints.down("md"));
  const desktop = useMediaQuery(breakpoints.up("md"));
  const classes = useStyles({ isOpen });
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
                        hitsPerPage: 6,
                      },
                    },
                  ],
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

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);

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
    autocomplete.refresh();
  };

  const onClosePage = () => {
    autocomplete.setIsOpen(false);
    autocomplete.setQuery("");
  };
  const noResultInput = mobile && !isOpen && query && !desktop;

  return (
    <Box
      component="div"
      className={classnames(
        desktop ? classes.root : isOpen || (query && mobile) ? classes.rootOpen : ""
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
      >
        <TextField
          size="medium"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {(mobile && isOpen) || (query && mobile) ? (
                  <ArrowBackIcon className={classes.icon} color="primary" onClick={onClosePage} />
                ) : (
                  <SearchOutlined />
                )}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                <Box
                  sx={{
                    position: "absolute",
                    top: spacing(1.875),
                    right: spacing(1.25),
                    width: spacing(4.375),
                    height: spacing(4.375),
                    bgcolor: common.white,
                  }}
                >
                  {query && (
                    <CloseIcon
                      onClick={onClearSearch}
                      sx={{ cursor: "pointer", color: !desktop ? primary.dark : grey[600] }}
                    />
                  )}
                </Box>
              </InputAdornment>
            ),
          }}
          sx={
            noResultInput
              ? noResultInputStyles(spacing, shadows, noResultInput)
              : desktop
              ? desktopInputStyles(spacing, shadows, isOpen)
              : mobile && !isOpen && !desktop
              ? mobileInputStyles(spacing, isOpen, grey[300])
              : inputStyles(spacing)
          }
          ref={inputRef}
          {...autocomplete.getInputProps({ inputElement: inputRef.current })}
        />
      </Box>
      {isOpen && desktop && (
        <Box
          style={{
            backgroundColor: grey[300],
            width: "100%",
            height: spacing(0.125),
          }}
        />
      )}
      {isOpen && (
        <Box
          component="div"
          ref={panelRef}
          {...autocomplete.getPanelProps({})}
          sx={{ mt: spacing(2), width: "100%" }}
        >
          {!query && status === "idle" ? (
            <Box
              sx={{
                mb: spacing(1.5),
                width: "100%",
                paddingLeft: spacing(2),
                paddingRight: spacing(3.9),
              }}
              component="div"
            >
              <Typography color="text.secondary" variant="body2">
                I???m searching for
              </Typography>
            </Box>
          ) : status === "stalled" ? (
            <Box />
          ) : (
            query &&
            status === "idle" && (
              <Box
                sx={{
                  mb: spacing(1.5),
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingLeft: spacing(2),
                  paddingRight: spacing(3.9),
                }}
                component="div"
              >
                <Typography color="text.secondary" variant="subtitle2">
                  Recent search
                </Typography>
                <Button
                  color="primary"
                  variant="text"
                  className={classes.clearBtn}
                  onClick={onClearSearch}
                >
                  Clear all
                </Button>
              </Box>
            )
          )}
          {!query && mobile && (
            <MobileSearchCategories
              onSelectCategory={props.onSelectCategory}
              categoryOptions={props.categoryOptions}
            />
          )}
          {query || (desktop && !query) ? (
            <Box>
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
            </Box>
          ) : (
            <Box>
              <ForLoops each={collections}>
                {(collection, index) => {
                  const { source, items } = collection;
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
          )}
        </Box>
      )}
    </Box>
  );
}

export default AutoCompleteSearch;
