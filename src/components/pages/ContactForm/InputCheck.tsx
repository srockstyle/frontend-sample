import React from "react";
import { InputCheckTemplate } from "../../templates/ContactForm/InputCheck";
import * as H from "history";

export type History = {
  history: H.History;
};

export const InputCheck: React.FC = () => {
  //  const history: History = {
  //    history: H.History,
  //  };
  return <InputCheckTemplate />;
};
