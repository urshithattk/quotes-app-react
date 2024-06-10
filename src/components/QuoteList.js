// src/components/QuoteList.js
import React from 'react';

const QuoteList = ({ quotes }) => {
  return (
    <div style={styles.list}>
      {quotes.length === 0 ? (
        <p>No quotes saved yet.</p>
      ) : (
        quotes.map((quote, index) => (
          <div key={index} style={styles.item}>
            <p>{quote}</p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  list: {
    marginTop: '20px',
  },
  item: {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
};

export default QuoteList;
