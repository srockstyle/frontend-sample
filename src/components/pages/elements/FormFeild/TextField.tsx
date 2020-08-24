import { FormControl, FormHelperText, makeStyles } from "@material-ui/core";
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@material-ui/core/TextField";
import { Field, FieldProps, getIn } from "formik";
import React from "react";

export type Props = {
  name: string;
  fieldStyle: "nomal";
};

export const TextField: React.FC<Props> = ({ name, fieldStyle }) => {
  const classes = useStyles();
  return (
    <Field
      name="firstName"
      render={({ field, form, meta }) => (
        <div>
          <input type="text" {...field} placeholder="First Name" />
          {meta.touched && meta.error && meta.error}
        </div>
      )}
    />
  );
};

const useStyles = makeStyles(() => ({
  errorMessage: {
    textAlign: "right",
  },
}));
