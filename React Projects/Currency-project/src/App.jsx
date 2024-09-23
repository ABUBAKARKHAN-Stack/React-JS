import React, { useState, useEffect } from 'react';
import Converter from './components/Converter';

const App = () => {
  const [rateList, setRateList] = useState({});
  const [errorShow, setErrorShow] = useState(false);
  const [toAmount, setToAmount] = useState(0);
  const [fromAmount, setFromAmount] = useState('');
  const [toCurrency, setToCurrency] = useState('PKR');
  const [fromCurrency, setFromCurrency] = useState('USD');

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch('https://v6.exchangerate-api.com/v6/053b9e0bddd21e7b091ec39c/latest/USD');
        const fetchedData = await res.json();
        setRateList(fetchedData.conversion_rates);
      } catch (error) {
        setErrorShow(error.message);
      }
    };
    fetchRates();
  }, []);

  const handleSwapButton = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleConversionButton = () => {
    if (rateList[fromCurrency] && rateList[toCurrency]) {
      const conversionRate = rateList[toCurrency] / rateList[fromCurrency];
      setToAmount(parseFloat((fromAmount * conversionRate).toFixed(4)));
    } 
  };

  if (errorShow) {
    return (
      <div className="h-screen w-screen grid font-[arial] justify-center items-center bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-400">
        <h1 className="text-4xl text-center font-bold tracking-widest text-red-800">{`OPS! ${errorShow}`}</h1>
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-400">
      <div className="overflow-hidden  bg-white shadow-xl rounded-lg px-4 py-2 sm:w-full w-[95vw] sm:max-w-xl max-w-md">
      <img src="./currency-exchange.svg" className='w-20 h-20 block mx-auto'/>
      <h1 className="sm:text-4xl xs:text-3xl text-2xl font-bold mb-6 text-black text-center">Currency Converter</h1>
        <Converter
          rateList={rateList}
          amount={fromAmount}
          onCurrencyChange={setFromCurrency}
          onAmountChange={setFromAmount}
          selectedCurrency={fromCurrency}
          toFrom={"From"}
        />
        <button
          onClick={handleSwapButton}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded mt-8 block mx-auto transition-all hover:scale-90 duration-300"
        >
          Swap
        </button>
        <Converter
          rateList={rateList}
          amount={toAmount}
          onCurrencyChange={setToCurrency}
          onAmountChange={setToAmount}
          selectedCurrency={toCurrency}
          toFrom={"To"}
        />
        <button
          className="block bg-green-600 hover:bg-green-800 text-white font-semibold py-4 px-3 text-xs 400px:text-[16px] w-full rounded mx-auto transition-colors duration-300"
          onClick={handleConversionButton}
        >
          Convert From {fromCurrency} To {toCurrency}
        </button>
      </div>
    </div>
  );
};

export default App;
