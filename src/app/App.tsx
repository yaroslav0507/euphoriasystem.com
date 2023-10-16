import { useEffect, useLayoutEffect } from 'react';
import { Layout } from './components/Layout';
import { reveal } from './animate';

const fetchCurrencyRate = async () => (await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json`)).json();

function App() {
  useEffect(() => {
    fetchCurrencyRate()
      .then((usd) => {
        console.log(usd)
      });

    window.addEventListener("scroll", reveal);
    reveal();
  }, []);

  return (
    <Layout />
  );
}

export default App;
