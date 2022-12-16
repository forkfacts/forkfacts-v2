import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  AutocompleteOptions,
  AutocompleteState,
  createAutocomplete,
} from "@algolia/autocomplete-core";
import { getAlgoliaResults } from "@algolia/autocomplete-preset-algolia";
import { Hit } from "@algolia/client-search";
import algoliasearch from "algoliasearch/lite";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import { SearchResults } from "@forkfacts/components";
import { SearchResultItemType, AutoCompleteSearchProps } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
import { navigate } from "gatsby";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TypingSearchScreen, RecentSearchScreen } from "@forkfacts/screens";
import { useStyles } from "./autocompleteSearchStyles";

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

function mobileInputStyles<T, U>(spacing: (type: number) => T, isOpen: U) {
  return {
    "& fieldset": {
      paddingLeft: spacing(2.5),
      borderRadius: spacing(1.25),
      width: "100%",
      borderColor: "grey[100] !important",
      "&:hover": {
        borderColor: "grey[100] !important",
        outlineColor: "grey[100] !important",
      },
    },
    "&:focus fieldset": {
      borderColor: "grey[100] !important",
    },
  };
}

function desktopInputStyles<T, U, V>(spacing: (type: number) => T, shadows: U[], isOpen: V) {
  return {
    "& fieldset": {
      border: "none",
    },
    borderRadius: spacing(1.25),
    boxShadow: isOpen ? shadows[0] : shadows[2],
    py: spacing(1.2),
    paddingLeft: spacing(2),
    paddingRight: spacing(3.9),
  };
}

function AutoCompleteSearch({
  sourceId,
  categoryOptions,
  collectionGroupedItems,
  handleViewMore,
  onSelectCategory,
  ...props
}: Partial<AutocompleteOptions<AutocompleteItem>> & AutoCompleteSearchProps) {
  const [autocompleteState, setAutocompleteState] = useState<AutocompleteState<AutocompleteItem>>({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: "",
    activeItemId: null,
    status: "idle",
  });
  const { spacing, shadows, palette, breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down("md"));
  console.log(mobile);
  const desktop = useMediaQuery(breakpoints.up("md"));
  const { query, collections, isOpen, status } = autocompleteState;
  const classes = useStyles();
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
              sourceId: sourceId,
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: INDEX_NAMES[1],
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
  };

  return (
    <Box
      component="div"
      {...autocomplete.getRootProps({})}
      sx={{
        width: "100%",
        py: desktop ? spacing(3) : spacing(0),
        px: desktop ? spacing(1.375) : spacing(0),
        borderRadius: isOpen && desktop ? spacing(1.25) : spacing(0),
        position: "absolute",
        backgroundColor: palette.common.white,
      }}
      boxShadow={isOpen && desktop ? 2 : 0}
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
                <SearchOutlined />
              </InputAdornment>
            ),
          }}
          ref={inputRef}
          {...autocomplete.getInputProps({ inputElement: inputRef.current })}
        />
      </Box>
      {isOpen && (
        <Box
          style={{
            backgroundColor: palette.grey[500],
            width: "100%",
            height: spacing(0.125),
          }}
        />
      )}
      {isOpen && desktop && (
        <Box
          component="div"
          ref={panelRef}
          {...autocomplete.getPanelProps({})}
          sx={{ mt: spacing(2), width: "100%" }}
        >
          {!query && desktop && status === "idle" ? (
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
                I’m searching for
              </Typography>
            </Box>
          ) : status === "stalled" && desktop ? (
            <Box />
          ) : (
            !query &&
            status === "idle" &&
            desktop && (
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
          {desktop && (
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
          )}
          {/* {desktop && !query && (
            <TypingSearchScreen
              onClearSearch={onClearSearch}
              onSelectItem={onSelectItem}
              onClosePage={onClosePage}
              {...autocomplete.getInputProps({ inputElement: inputRef.current })}
              categoryOptions={categoryOptions}
              collectionGroupedItems={collectionGroupedItems}
              handleViewMore={handleViewMore}
              multiple={true}
              onSelectCategory={onSelectCategory}
            />
          )} */}
        </Box>
      )}
      {/* {isOpen && mobile && (
        <Box
          sx={{
            position: "fixed",
            top: 100,
            left: 0,
            right: 0,
            bottom: 0,
            height: "100%",
            width: "100%",
            background: "#fff",
          }}
        >
          <TextField
            size="medium"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
            ref={inputRef}
            {...autocomplete.getInputProps({ inputElement: inputRef.current })}
          />
          <ForLoops each={collections}>
            {(collection, index) => {
              const { source, items } = collection;
              return (
                <Box component="section" key={`source-${index}`}>
                  {items.length > 0 && (
                    <RecentSearchScreen
                      onClosePage={onClosePage}
                      handleViewMore={handleViewMore}
                      collectionListsItems={items}
                      onClearSearch={onClearSearch}
                      onSelectItem={onSelectItem}
                      getInputProps={autocomplete}
                      setIsOpen={autocomplete.setIsOpen}
                      inputRef={inputRef}
                    />
                  )}
                </Box>
              );
            }}
          </ForLoops>
        </Box>
      )} */}
    </Box>
  );
}

export default AutoCompleteSearch;
