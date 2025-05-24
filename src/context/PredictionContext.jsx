// src/context/PredictionContext.jsx
import React, { createContext, useState } from 'react';

// 1. Create the context
export const PredictionContext = createContext(null);

// 2. Create the provider component
export const PredictionProvider = ({ children }) => {
  const [predictionResults, setPredictionResults] = useState([]); // State to hold your prediction results

  return (
    <PredictionContext.Provider value={{ predictionResults, setPredictionResults }}>
      {children}
    </PredictionContext.Provider>
  );
};