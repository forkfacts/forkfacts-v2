import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#8D9287",
          },
          "& label.Mui-focused": {
            color: "#8D9287",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#8D9287",
            borderWidth: "1px",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#8D9287",
              borderWidth: "1px",
            },
            "&:hover fieldset": {
              borderColor: "#8D9287",
              borderWidth: "1px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#8D9287",
              borderWidth: "1px",
            },
          },
        },
      },
    },
  },
  // palette: {
  //   mode: "light",
  //   primary: {
  //     main: "#356A1E",
  //   },
  //   secondary: {
  //     main: "#f50057",
  //   },
  // },
});
