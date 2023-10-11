/**
 * Button Component
 *
 * @component
 * @param {string} title - The text to be displayed on the button. (Required)
 * @param {boolean} [disabled=false] - Whether the button should be disabled. (Optional)
 *
 * @example
 * <Button title="Click Me" disabled={true} />
 *
 * @returns {JSX.Element} Rendered Button Component.
 */

import MaterialUIButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";

type Props = {
  title: string;
  disabled?: boolean;
};

export const Button = ({ title, disabled }: Props) => {
  console.log("rendering button", disabled);

  return (
    <StyledButton
      variant="contained"
      color="secondary"
      type="submit"
      disabled={!!disabled}
    >
      {title}
    </StyledButton>
  );
};

const StyledButton = styled(MaterialUIButton)({
  textTransform: "none",
  fontWeight: "bold",
});
