import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
const App = () => {
  return (
    <>
      <Navbar />
      <Container>The start of something great</Container>
      <Footer />
    </>
  );
};

export default App;
