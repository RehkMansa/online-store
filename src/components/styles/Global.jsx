import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 10px;
    --fs-default: 1.8rem;
    --fw-regular: 400;
    --fw-header: 500;
    --fw-bold: 600;
    --lh-regular: 1;
    --ff-body: 'Source Sans Pro', sans-serif;
    --ff-header: 'Kanit', sans-serif;
    --default-color: #000;
    --secondary-color: #fff;
  }
  :root,
  body {
    height: 100%;
  }
  body {
    font-family: var(--ff-body);
    font-size: var(--fs-default);
    line-height: var(--lh-regular);
    font-weight: var(--fw-regular);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--ff-header);
    font-weight: var(--fw-header);
  }
  h1{
    font-weight: var(--fw-bold);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    list-style: none;
  }
  button {
    padding: 3px 24px;
    font-size: var(--ff-body);
    font-family: var(--ff-header);
    font-weight: 500;
    background-color: var(--default-color);
    color: var(--secondary-color);
    border: 2px solid var(--default-color);
    outline: none;
    border-radius: 24px;
    text-transform: capitalize;
  }
  button:hover {
    background-color: var(--secondary-color);
    color: var(--default-color);
    border: 2px solid var(--default-color);
  }
  button:hover,
  a:hover {
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
`;
export default GlobalStyles;
