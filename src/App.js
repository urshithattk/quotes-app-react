// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';

function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const saveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} saveQuote={saveQuote} />
      <button onClick={fetchRandomQuote} style={styles.newQuoteButton}>Get New Quote</button>
      <QuoteList quotes={savedQuotes} />
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  newQuoteButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default App;
