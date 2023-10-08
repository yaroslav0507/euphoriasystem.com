import { Button, ButtonProps } from "react-bootstrap";
import styled from "styled-components";

export const SiteButton = styled(Button)<ButtonProps>`
  border-radius: 10px;
  padding: 12px;
  font-size: 18px;
  text-transform: uppercase;
  color: ${({ variant }) => (variant === "outline-primary" ? "#FFF" : "#000")};
  border: ${({ variant }) =>
    variant === "outline-primary" ? "1px solid #FFF" : "none"};
  background: ${({ variant }) =>
    variant === "outline-primary" ? "transparent" : "#FFC700"};
  outline: none;
  width: 100%;
`;
