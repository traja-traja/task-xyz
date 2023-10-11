/** Contact Page.
 *
 * This page is used to demonstrate the ContactForm component.
 * It shows either the ContactForm or the DataPreview component, depending on whether the form has been submitted.
 */

import { useState } from "react";
import { ContactForm } from "../components/ContactForm";
import { ContactFormDataType } from "../types/ContactFormData";
import { contactFormLanguages } from "../constants/constants";
import { DataPreview } from "../components/DataPreview";

export const ContactPage = () => {
  const [contactFormData, setContactFormData] =
    useState<ContactFormDataType | null>(null);

  const handleFormSubmit = (data: ContactFormDataType) => {
    setContactFormData(data);
  };

  if (contactFormData) {
    return <DataPreview data={contactFormData} />;
  }

  return (
    <ContactForm
      options={{
        languages: contactFormLanguages,
      }}
      onSubmit={handleFormSubmit}
    />
  );
};
