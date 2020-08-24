import React from "react";
import { ChontactFormTemplate } from "../../templates/ContactForm";

//historyの型がなにかわからん;
export type History = {
  history: History;
};

export const ContactForm: React.FC = () => {
  return <ChontactFormTemplate />;
  //return <ChontactFormTemplate history={history} />;
};
