import React from 'react';
import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { AppRoutes } from './components/AppRoutes/AppRoutes';
import { Content } from './components/Content/Content';
import './App.css';

function App() {
  return (
    <Container className="appContainer">
      <Header />

      <Content>
        <AppRoutes />
      </Content>

      <Footer />
    </Container>
  );
}

export default App;
