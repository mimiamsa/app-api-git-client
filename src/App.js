import React from 'react';
import "./styles/styles.css"
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core';
// import { faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faFolderOpen, faCommentDots, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faFolderOpen, faCommentDots, faSignOutAlt)

// library.add(faUserCircle, faHeart, faMapMarkerAlt, faLinkedin, faTwitter, faSearch, faComment, faAngleRight, faChevronRight, faEllipsisV)

const theme = {
  font: 'Source Sans Pro',
  textColor: 'white',
  bodyBg: '#0A131D'
}

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700&display=swap');    
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.bodyBg};
    margin:0;
    padding:0;
  }
  a{
    text-decoration: none;
    color: inherit; 
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3 {
    margin: 0;
    padding:0;
  }
  p {
    margin: 0;
  }
  `
// import ProtectedRoute from "./auth/ProtectedRoute";
// import { AuthConsumer } from "./auth/Guard"


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavMain />
        <GlobalStyles />
        <Switch>
          <Route path="/about" render={() => <About />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </div>
    </ThemeProvider>

  );
}

export default App;
