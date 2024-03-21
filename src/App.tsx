// import React from 'react';
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Container, css, useTheme } from "@mui/material";
import Page from "./page";
import { Global } from "@emotion/react";
import '@twa-dev/sdk';

function App() {
  //@ts-ignore
  const theme = useTheme();
 
   
  const generateGlobalStyles = (props: any) => css`
    body {
      background-color: ${props ||
      "#f0f0f0"}; 
    }
  `;


  return (
    <>
      <Global
        styles={generateGlobalStyles(
          theme.palette.mode === "dark"
            ? theme.palette.grey[700]
            : theme.palette.grey[100]
        )}
      />
      <Container maxWidth="lg" sx={{pb:10}}>
        <Header />
        <Page />
        <Footer />
      </Container>
    </>
  );
}

export default App;
