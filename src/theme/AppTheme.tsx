import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

interface AuxProps {
  children: JSX.Element | JSX.Element[];
}

/* high order component */
export const AppTheme = ({ children }: AuxProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
