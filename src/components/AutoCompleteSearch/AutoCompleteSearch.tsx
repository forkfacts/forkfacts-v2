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
import { SearchResultItemType } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
import { navigate } from "gatsby";
import { useStyles } from "./autocompleteSearchStyles";

const searchClient = algoliasearch("JVO84ADVS3", "7d08c3e6a7bc49e0857cf459b47a6381");

type AutocompleteItem = Hit<{
  image: string;
  name: string;
  objectID: string;
  url: string;
}>;

function AutoCompleteSearch(props: Partial<AutocompleteOptions<AutocompleteItem>>) {
  const [autocompleteState, setAutocompleteState] = useState<AutocompleteState<AutocompleteItem>>({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: "",
    activeItemId: null,
    status: "idle",
  });
  const { spacing, shadows, palette, zIndex } = useTheme();
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
          console.log(state);
        },
        getSources() {
          return [
            {
              sourceId: "forkfact-v2",
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: "sr_index",
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

  const { query, collections, isOpen, status } = autocompleteState;

  const onClearSearch = () => {
    autocomplete.setQuery("");
    autocomplete.refresh();
  };

  return (
    <Box
      component="div"
      {...autocomplete.getRootProps({})}
      sx={{
        width: "100%",
        py: spacing(3),
        px: spacing(1.375),
        borderRadius: autocompleteState.isOpen ? spacing(1.25) : spacing(0),
        position: "absolute",
        backgroundColor: palette.common.white,
      }}
      boxShadow={autocompleteState.isOpen ? 2 : 0}
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
          sx={{
            "& fieldset": {
              border: "none",
            },
            borderRadius: spacing(1.25),
            boxShadow: isOpen ? shadows[0] : shadows[2],
            py: spacing(1.2),
            paddingLeft: spacing(2),
            paddingRight: spacing(3.9),
          }}
          ref={inputRef}
          {...autocomplete.getInputProps({ inputElement: inputRef.current })}
        />
      </Box>
      {isOpen && (
        <Box
          component="div"
          ref={panelRef}
          {...autocomplete.getPanelProps({})}
          sx={{ mt: spacing(2), width: "100%" }}
        >
          {query === "" && status === "idle" ? (
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
          ) : status === "stalled" ? (
            <Box />
          ) : (
            query !== "" &&
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
        </Box>
      )}
    </Box>
  );
}

export default AutoCompleteSearch;
