import Container from 'react-bootstrap/Container';
import { Footer } from './components/Footer';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
const App = () => {
  return (
    <>
      <NavigationBar />
      <Container>The start of something great</Container>
      <Footer />
    </>
  );
};

export default App;
