import { Redirect, Route, Switch, useParams } from "react-router-dom";
import Document from "./views/Document";
import Home from "./views/Home";

const DocumentChild = () => <Document section={useParams().section} />

export default function Routes() {
  return (
    <Switch>
      <Route path="/document/:section" children={<DocumentChild />} />
      <Route exact path="/document">
        <Redirect to="/document/installation" />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
}
