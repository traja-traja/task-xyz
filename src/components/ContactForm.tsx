/** ContactForm Coponent */

import { useForm } from "react-hook-form";
import { TextInput } from "./TextInput";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "./Button";
import { ContactFormDataType, LanguageType } from "../types/ContactFormData";
import { styled } from "@mui/material/styles";
import { useMemo } from "react";

type Props = {
  onSubmit: (data: ContactFormDataType) => void;
  options: { languages: LanguageType[] };
};

export const ContactForm = ({ onSubmit, options }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<ContactFormDataType>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      language: "",
    },
    mode: "onTouched",
  });

  const languages = useMemo(
    () => [
      {
        label: "Vyberte hodnotu",
        value: "",
      },
      ...options.languages,
    ],
    [options.languages]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput control={control} name="name" label="Jméno" hideAsterisk />

      <TextInput
        control={control}
        name="phone"
        label="Telefon"
        rules={{
          required: true,
          pattern: {
            value: /^[0-9]+$/i,
            message: "Telefonní číslo není ve správném formátu",
          },
        }}
        hideAsterisk
      />

      <TextInput
        control={control}
        name="email"
        label="E-mail"
        rules={{
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "E-mailová adresa není ve správném formátu",
          },
        }}
        hideAsterisk
      />

      <TextInput control={control} name="language" label="Hlavní jazyk" select>
        {languages.map((language) => (
          <MenuItem key={language.value} value={language.value}>
            {language.label}
          </MenuItem>
        ))}
      </TextInput>

      <ButtonContainer>
        <Button title="Submit" disabled={!isValid} />
      </ButtonContainer>
    </form>
  );
};

const ButtonContainer = styled("div")({
  textAlign: "right",
});
