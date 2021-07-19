import './App.css';
import QuoteCard from './components/QuoteCard'
import axios from 'axios'
import React, {useState} from 'react'
import Button from './components/Button'




const SampleSimpsons = 
{
  "quote": "I don't want to sound like a killjoy, but becuase this is not to my taste I don't think anyone else should be allowed to enjoy it.",
  "character": "Marge Simpson",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
  "characterDirection": "Right"
  }
  ;



function App() {
  const [quote, setQuote] = useState(SampleSimpsons);

const getQuote = () => {
  axios
    .get("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then((response) => {setQuote(response.data[0])});
};
   console.log(quote)

  return (
        <>
            
          
          <QuoteCard  TheSimpsons={quote} />
          <Button getQuote={getQuote}/>
        </>
  );
}


export default App;
