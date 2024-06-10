// src/components/QuoteCard.js
import React from 'react';

const QuoteCard = ({ quote, saveQuote }) => {
  return (
    <div style={styles.card}>
      <p>{quote}</p>
      <button onClick={() => saveQuote(quote)} style={styles.button}>Save</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  button: {
    marginTop: '10px',
    padding: '5px 10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
};

export default QuoteCard;
