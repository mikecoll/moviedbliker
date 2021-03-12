import { css } from "@emotion/react";

export const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    .MuiFormControl-root {
      display: grid;
      grid-columns-template: repeat(2, 1fr);
      margin-bottom: 1rem;

      .MuiFormGroup-root {
        display: flex;
        flex-direction: row;
      }
    }
  `
};
