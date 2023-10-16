import { useLayoutEffect } from 'react';
import { Layout } from './components/Layout';
import { reveal } from './animate';

function App() {
  useLayoutEffect(() => {
    window.addEventListener("scroll", reveal);
    reveal();
  }, []);

  return (
    <Layout />
  );
}

export default App;
