import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./components/pages/HomePage";
import OverViewPage from "./components/pages/WorldPage";
import GalleryPage from "./components/pages/GalleryPage";
import CharacterPage from "./components/pages/CharacterPage";
import SystemPage from "./components/pages/SystemPage";
import FormPage from "./components/pages/FormPage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/world" component={OverViewPage} exact />
        <Route path="/character" component={CharacterPage} exact />
        <Route path="/system" component={SystemPage} exact />
        <Route path="/gallery" component={GalleryPage} exact />
        <Route path="/form" component={FormPage} exact />
      </Switch>
    </Router>
  );
};

export default App;
