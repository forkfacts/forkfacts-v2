import {
  AutocompleteOptions,
  AutocompleteState,
  createAutocomplete,
} from "@algolia/autocomplete-core";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import { getAlgoliaResults } from "@algolia/autocomplete-preset-algolia";
import { Hit } from "@algolia/client-search";
import algoliasearch from "algoliasearch/lite";
import React from "react";
import { SearchResults } from "@forkfacts/components";
import { SearchResultItemType } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
import { useStyles } from "./searchInputStyles";

const searchClient = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");

type AutocompleteItem = Hit<{
  brand: string;
  categories: string[];
  image: string;
  name: string;
  objectID: string;
  url: string;
}>;

function SearchInputField(props: Partial<AutocompleteOptions<AutocompleteItem>>) {
  const [autocompleteState, setAutocompleteState] = React.useState<
    AutocompleteState<AutocompleteItem>
  >({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: "",
    activeItemId: null,
    status: "idle",
  });
  const { spacing, shadows } = useTheme();
  const classes = useStyles();
  const autocomplete = React.useMemo(
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
              sourceId: "products",
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: "instant_search",
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
  const inputRef = React.useRef<HTMLInputElement>(null);
  const formRef = React.useRef<HTMLFormElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const { getEnvironmentProps } = autocomplete;

  React.useEffect(() => {
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

  const onSelectItem = (item: SearchResultItemType) => {};

  const { query, collections, isOpen } = autocompleteState;

  return (
    <Box
      component="div"
      {...autocomplete.getRootProps({})}
      sx={{
        width: "100%",
        py: spacing(3),
        px: spacing(1.375),
        borderRadius: autocompleteState.isOpen ? spacing(1.25) : spacing(0),
      }}
      boxShadow={autocompleteState.isOpen ? 2 : 0}
    >
      <Box
        component="form"
        ref={formRef}
        className="aa-Form"
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
              width: "100%",
              border: "none",
            },
            borderRadius: spacing(1.25),
            py: spacing(1),
            boxShadow: isOpen ? shadows[0] : shadows[2],
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
          {query === "" ? (
            <Box
              sx={{
                mb: spacing(4),
                width: "100%",
                py: spacing(1.2),
                paddingLeft: spacing(2),
                paddingRight: spacing(3.9),
              }}
              component="div"
            >
              <Typography color="text.secondary" variant="body2">
                I’m searching for
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                mb: spacing(4),
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: spacing(1.2),
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
                onClick={() => {}}
              >
                Clear all
              </Button>
            </Box>
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

export default SearchInputField;
