import React, { useState, useEffect } from "react";
import Toggle from "./components/Toggle";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import  { useDarkMode } from "./components/useDarkMode"
import { GlobalStyles } from "./components/globalStyles";
import Card from "./components/Card"
import { lightTheme, darkTheme } from "./components/Themes";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
        <StyledContainer>
          {/* {theme and themeToggler are required props for Toggle Component} */}
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Card name="Will" />
        </StyledContainer>
    </ThemeProvider>

  );
}

export default App;
