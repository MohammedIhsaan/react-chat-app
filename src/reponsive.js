import { css } from "styled-components";

export const Desktop2 = (props) => {
  return css`
    @media only screen and (max-width: 1390px) {
      ${props}
    }
  `;
};
export const Mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};
export const Mobile375 = (props) => {
  return css`
    @media only screen and (max-width: 375px) {
      ${props}
    }
  `;
};
