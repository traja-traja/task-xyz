/** DataPreview Component */

import { ContactFormDataType } from "../types/ContactFormData";
import { styled } from "@mui/material/styles";
import { contactFormLanguages } from "../constants/constants";

export const DataPreview = ({ data }: { data: ContactFormDataType }) => {
  return (
    <>
      <DataRow>
        <DataLabel>Jméno</DataLabel>
        <DataValue>{data.name}</DataValue>
      </DataRow>
      <DataRow>
        <DataLabel>Telefon</DataLabel>
        <DataValue>{data.phone}</DataValue>
      </DataRow>
      <DataRow>
        <DataLabel>E-mail</DataLabel>
        <DataValue>{data.email}</DataValue>
      </DataRow>
      <DataRow>
        <DataLabel>Hlavní jazyk</DataLabel>
        <DataValue>
          {
            contactFormLanguages.find(
              (language) => language.value === data.language
            )?.label
          }
        </DataValue>
      </DataRow>
    </>
  );
};

const DataRow = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "24px",
});

const DataLabel = styled("div")({
  flex: 1,
  marginRight: "24px",
  fontWeight: "bold",
});

const DataValue = styled("div")({
  flex: 1,
});
