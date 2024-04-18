import { useEffect } from 'react';
import { Footer } from './components/Footer';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
const App = () => {
  useEffect(() => {
    document.body.setAttribute('data-mode', 'light-mode');
    document.body.setAttribute('data-color', 'blue');
  }, []);

  return (
    <>
      <NavigationBar />
      <div style={{ backgroundColor: 'black' }}>
        The start of something great
      </div>
      <Footer />
    </>
  );
};

export default App;
