import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import SEO from "./seo";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #161719;
  }

  a {
    text-decoration: none;
    color: #B566FF;
  }

  body {
    font-family: "Nunito", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    color: #F5F5F5;
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <SEO title="Gary Li" />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
