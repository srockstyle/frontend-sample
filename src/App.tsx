import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
// {}で囲んであげる
// ファイル名と一致するように
import { Home } from "./components/pages/Home";
import { World } from "./components/pages/World";
import { Gallery } from "./components/pages/Gallery";
import { Character } from "./components/pages/Character/index";
import { System } from "./components/pages/System";
import { ContactForm } from "./components/pages/ContactForm";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/world" component={World} exact />
        <Route path="/character" component={Character} exact />
        <Route path="/system" component={System} exact />
        <Route path="/gallery" component={Gallery} exact />
        <Route path="/form" component={ContactForm} exact />
      </Switch>
    </Router>
  );
};

export default App;
