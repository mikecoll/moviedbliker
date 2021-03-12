/// <reference types="@emotion/react/types/css-prop" />

import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        color: {
            primary: string;
            positive: string;
            negative: string;
        };
    }
}