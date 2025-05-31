import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App()
{
    const BackgroundImage = 'https://assets.upstox.com/content/assets/images/news/foreign-investments.webp'
    
    const [fromAmount, setFromAmount] = useState(0)
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toAmount, setToAmount] = useState(0)
    const [toCurrency, setToCurrency] = useState('INR')

    const currencyInfo = useCurrencyInfo(fromCurrency)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);

        const tempAmount = fromAmount;
        setFromAmount(toAmount);
        setToAmount(tempAmount);
    }

    const convert = () => {setToAmount(fromAmount * currencyInfo[toCurrency]);}

    return (
      <div
              className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
              style={{
                  backgroundImage: `url('${BackgroundImage}')`,
              }}
          >
              <div className="w-full">
                  <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                      <form
                          onSubmit={(e) => {
                              e.preventDefault();
                                convert();
                          }}
                      >
                          <div className="w-full mb-1">
                              <InputBox
                                  label="From"
                                    amount={fromAmount}
                                    currencyList={options}
                                    onAmountChange={(amount) => setFromAmount(amount)}
                                    onCurrencyChange={(currency) => setFromCurrency(currency)}
                                    selectedCurrency={fromCurrency}
                                    canChangeAmmount={true}
                              />
                          </div>
                          <div className="relative w-full h-0.5">
                              <button
                                  type="button"
                                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                    onClick={swap}
                              >
                                  swap
                              </button>
                          </div>
                          <div className="w-full mt-1 mb-4">
                              <InputBox
                                  label="To"
                                    amount={toAmount}
                                    currencyList={options}
                                    onAmountChange={(amount) => setToAmount(amount)}
                                    onCurrencyChange={(currency) => setToCurrency(currency)}
                                    selectedCurrency={toCurrency}
                                    canChangeAmmount={false}
                              />
                          </div>
                          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                              Convert {fromCurrency} to {toCurrency}
                          </button>
                      </form>
                  </div>
              </div>
          </div>
  )
}

export default App
