import {} from "formik";
import React, { useState } from "react";
import { ChontactFormTemplate } from "../../templates/ContactForm";

export type FormValues = {
  firstName: string;
};

export const ContactForm: React.FC = () => {
  // stateの初期化;
  const [firstName, setFirstName] = useState("");
  const [isContactComplete, setIsContactComplete] = useState(false);
  return <ChontactFormTemplate />;
};
