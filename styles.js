import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
  }

    body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: var(--white-background);
    }

    :root {
        --white-background: #E9E9E9;
        --white-color: #fffcff;
        --darkgrey-color: #4A4A4A;
        --beige-color: #c2b299;
        --darkorange-color: #f95738;
        --lightgreen-color: #CBD4C2;
        --font-size-header: 1.6rem;
        --font-size-subheader: 1.125rem;
        --font-size-description: 0.875rem;
        --font-size-icon-description: 0.75rem;
    }

`;
