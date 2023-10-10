export const createFadeAnimation = (name: string, from: string, to: string) => `
  @keyframes ${name} {
    0% {
      opacity: ${from};
    }
    100% {
      opacity: ${to};
      will-change: opacity;
    }
  }
`;

export const createTransformAnimation = (name: string, fnStart: string, fnStop: string) => `
  @keyframes ${name} {
    0% {
      opacity: 1;
      backface-visibility: hidden;
      -webkit-transform: ${fnStart};
      transform: ${fnStart};
    }
    100% {
      opacity: 1;
      -webkit-transform: ${fnStop};
      transform: ${fnStop};
      will-change: transform;
    }
  }
`;
