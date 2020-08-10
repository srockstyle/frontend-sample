import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css'

import HomePage from "./components/pages/HomePage";
import OverViewPage from "./components/pages/OverviewPage";
import AuthorsPage from "./components/pages/AuthorsPage";
import RegurationPage from "./components/pages/RegulationPage";
import AppllicationFormPage from "./components/pages/ApplicationFormPage";
import FormPage from "./components/pages/FormPage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/overview" component={OverViewPage} exact />
        <Route path="/authors" component={AuthorsPage} exact />
        <Route path="/reguration" component={RegurationPage} exact />
        <Route path="/applicationform" component={AppllicationFormPage} exact />
        <Route path="/form" component={FormPage} exact />
      </Switch>
    </Router>
  );
};

export default App;