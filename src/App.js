import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';
import GlobalStyle from'./styles/global';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';
import store from './store';

const App = () => (

  /* da o acesso aos componentes para informações q estão
  contidas na url, como, parametros querystrings..
  qualquer informação q venha da url */
  <Provider store={store}>
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
  </Provider>    
)

export default App;
