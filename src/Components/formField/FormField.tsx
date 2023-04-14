import { ErrorMessage, Field } from "formik";
import { FieldContainer } from "./FormFiled.style";

type FielsFormProps = {
  shouldShowError?: boolean;
  name: string;
  value?: string;
  errorLabel?: string;
  as?: string;
  options?: string[];
  placeholder?: String;
};

const FormField = ({
  value,
  name,
  as,
  options,
  placeholder,
}: FielsFormProps) => {
  return as === "select" && options ? (
    <FieldContainer>
      <Field value={value} as="select" name={name} placeholder="Title">
        {options.map((title, i) => (
          <option key={i} value={title}>
            {title}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} />
    </FieldContainer>
  ) : (
    <FieldContainer>
      <Field
        as="input"
        value={value}
        type="text"
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} />
    </FieldContainer>
  );
};

export default FormField;
