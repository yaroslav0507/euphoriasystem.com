import styled from "styled-components";
import { Button, ButtonProps } from "react-bootstrap";
import { device, size } from "./breakpoints";

export const SiteButton = styled(Button)<ButtonProps>`
  && {
    border-radius: 10px;
    padding: 12px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ variant }) => (variant === "outline-primary" ? "#FFF" : "#000")};
    border: ${({ variant }) =>
      variant === "outline-primary" ? "1px solid #FFF" : "none"};
    background: ${({ variant }) =>
      variant === "outline-primary" ? "transparent" : "#FFC700"};
    outline: none;
    width: 100%;
    max-width: 450px;
    
    ${device.xs} {
      font-size: 18px;
    }

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

const containers = [
  // [size.sm, 540],
  // [size.md, 720],
  [size.lg, 960],
  [size.xl, 1140],
  [size.xxl, 1320],
];

export const SectionTextWrapper = styled.div<{ direction: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  padding: 24px 0;

  ${({ direction }) => containers.map(([size, width]) => `
    @media (min-width: ${size}) {
      padding-${direction}: calc((100vw - ${width}px + 12px) / 2);
    }
  `)}

  button {
    margin: 12px 0;

    ${device.md} {
      margin: 24px 0 12px;
    }
  }
`;

export const ImageSection = styled.div<{ 
  url: string;
  direction: 'left' | 'right';
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

    ${device.md} {
      ${({ direction }) => direction === 'left' ? `
        left: -1px;
      ` : `
        right: -1px;
      `}

      top: 0;
      height: 100%;
      width: 10%;
      transform: ${({ direction }) => direction === 'left' ? 'scaleY(-1)' : ' '};
    }
  }
`;