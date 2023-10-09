import styled from "styled-components";
import { Button, ButtonProps } from "react-bootstrap";

export const SiteButton = styled(Button)<ButtonProps>`
  && {
    border-radius: 10px;
    padding: 12px;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ variant }) => (variant === "outline-primary" ? "#FFF" : "#000")};
    border: ${({ variant }) =>
      variant === "outline-primary" ? "1px solid #FFF" : "none"};
    background: ${({ variant }) =>
      variant === "outline-primary" ? "transparent" : "#FFC700"};
    outline: none;
    width: 100%;

    &:hover {
      background: ${({ variant }) => (variant === "outline-primary" ? "rgba(255, 255, 255, 0.07)" : "#FFCC17")};
    }

    &:active {
      background: ${({ variant }) => (variant === "outline-primary" ? "rgba(255, 255, 255, 0.21)" : "#DEAD00")};
    }

    &:hover, &:active {
      border-color: inherit;
      color: ${({ variant }) => (variant === "outline-primary" ? "#FFF" : "#000")};
    }
  }
`;

export const SectionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`;

export const ImageSection = styled.div<{ 
    url: string;
    direction?: 'left' | 'right';
    bgSize?: string;
    bgColor?: string;
    bgPosition?: string;
 }>`
  width: calc(100% + 24px);
  margin-left: -12px;
  height: 100%;
  min-height: 570px;
  background: url(${({ url }) => url });
  background-size: ${({ bgSize }) => bgSize || 'cover' };
  background-position: ${({ bgPosition }) => bgPosition || 'center' };
  position: relative;

  &:after {
    content: "";
    bottom: -1px;
    width: 100%;
    height: 15%;
    position: absolute;

    background: linear-gradient(
      to bottom ${({ direction }) => direction || 'left'},
      transparent 0%,
      transparent 50%,
      ${({ bgColor }) => bgColor || '#031837'} 50%,
      ${({ bgColor }) => bgColor || '#031837'} 100%
    );
  }
`;