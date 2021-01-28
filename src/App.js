import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Countries from "./pages/Countries";
import Details from "./pages/Details";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#112d4e",
    },
    secondary: {
      main: "#3f72af",
    },
    background: {
      default: "#dbe2ef",
    },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Router>
        <Switch>
          <Route path="/:country/details" component={Details} />
          <Route path="/:region" component={Countries} />
          <Redirect from="/" to="/All" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
