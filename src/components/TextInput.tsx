/**
 * TextInput (Custom Text Field Component).
 *
 * A component to render either a text field input or a select input, depending on the select prop passed.
 *
 * @component
 * @param {Control} control - The control object from react-hook-form. (Required)
 * @param {string} name - The name of the field. (Required)
 * @param {string} label - The label of the field. (Required)
 * @param {Object} [rules] - The rules (required, pattern etc.) of the field. (Optional)
 * @param {boolean} [hideAsterisk] - Whether the required asterix should be shown next to label. (Optional)
 * @param {boolean} [select] - Whether the field should be rendered as a select input. (Optional)
 * @param {JSX.Element} [children] - Items to be displayed in the select options. (Optional)
 *
 * @example
 * <TextInput
 *   control={control}
 *   name="email"
 *   label="E-mail"
 *   rules={{
 *     required: true,
 *     pattern: {
 *       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
 *       message: "Wrong email format",
 *     },
 *   }}
 * />
 *
 * @returns {JSX.Element} Rendered Text Field Component.
 */

import MaterialUITextField from "@mui/material/TextField";
import { useController, UseControllerProps } from "react-hook-form";
import { styled } from "@mui/material/styles";
import { ContactFormDataType } from "../types/ContactFormData";

type Props = UseControllerProps<ContactFormDataType> & {
  label: string;
  hideAsterisk?: boolean;
  select?: boolean;
  children?: JSX.Element | JSX.Element[];
};

const commonProps = {
  required: true,
  fullWidth: true,
};

export const TextInput = ({
  control,
  name,
  label,
  rules,
  hideAsterisk,
  select,
  children,
}: Props) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: rules ? rules : { required: true },
  });

  return (
    <StyledTextField
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      // inputRef={field.ref}
      label={label}
      helperText={
        invalid ? error?.message || `Pole "${label}" je povinné` : null
      }
      error={!!invalid}
      select={select}
      InputLabelProps={{
        shrink: true,
        required: !hideAsterisk,
      }}
      {...commonProps}
    >
      {children}
    </StyledTextField>
  );
};

const StyledTextField = styled(MaterialUITextField)({
  marginBottom: "24px",
  "& .MuiFormLabel-root": {
    top: "-2px",
  },
  "& .MuiInputBase-root": {
    backgroundColor: "white",
  },
  "& .MuiFormHelperText-root": {
    marginLeft: 0,
  },
});
