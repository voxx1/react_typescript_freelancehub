import { css } from "styled-components";

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 1100px) {
      ${props}
    }
  `;
}

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 750px) {
      ${props}
    }
  `;
}

export const smallmobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
}

