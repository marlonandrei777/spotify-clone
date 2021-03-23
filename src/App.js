import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from'./styles/global';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';

const App = () => (
  /* da o acesso aos componentes para informações q estão
  contidas na url, como, parametros querystrings..
  qualquer informação q venha da url */
  <BrowserRouter>
    <Wrapper> 
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
      <Player />
      <GlobalStyle />
    </Wrapper>
  </BrowserRouter>  
)

export default App;
