import { css } from "@emotion/react";

export const styles = {
  root: css`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 3fr 1fr;

    .MuiInputBase-root {
      padding: 0.5rem;
    }

    .MuiInputAdornment-root.MuiInputAdornment-positionStart {
      margin: 0;
      svg {
        color: white;
      }
    }
  `
};
