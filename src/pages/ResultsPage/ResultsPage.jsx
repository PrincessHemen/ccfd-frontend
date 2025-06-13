// src/pages/ResultsPage/ResultsPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom'; 
import './ResultsPage.css'; 

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate for potential redirection
  const [results, setResults] = useState([]); // Stores combined trans ID and prediction
  const [dataLoaded, setDataLoaded] = useState(false); // To track if data has been processed

  useEffect(() => {
    if (location.state && location.state.predictions && location.state.transactionIds) {
      const { predictions, transactionIds } = location.state;

      // Combine transaction IDs and predictions for easier rendering
      const combinedResults = transactionIds.map((id, index) => ({
        transactionId: id,
        prediction: predictions[index], // 0 or 1
      }));
      setResults(combinedResults);
      setDataLoaded(true); // Indicate data has been loaded
    } else {
      // If no state data (e.g., direct navigation or page refresh),
      // inform the user and suggest going back to upload.
      console.warn("No prediction data found in location state. Redirecting to upload page.");
      // Optionally show a toast message here if you want before redirecting
      // toast.warn("No results found. Please upload a file to get predictions.");
      setTimeout(() => {
        navigate('/upload'); // Redirect back to the upload page
      }, 3000); // Redirect after a short delay
    }
  }, [location.state, navigate]); // Depend on location.state and navigate

  if (!dataLoaded) {
    // Show a loading/redirecting message while checking data or waiting to redirect
    return (
      <section className="results-section">
        <div className="results-container">
          <h1 className="results-title">Loading Results...</h1>
          <p className="results-description">
            If results do not load, please upload a file from the <Link to="/upload" className="docs-link">Upload Page</Link>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="results-section">
      <div className="results-container">
        <h1 className="results-title">Fraud Detection Results</h1>
        <p className="results-description">
          Here are the predictions for your uploaded transactions.
        </p>

        {results.length > 0 ? (
          <div className="table-responsive"> {/* Wrapper for horizontal scroll on small screens */}
            <table className="results-table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Transaction ID</th>
                  <th>Prediction</th>
                </tr>
              </thead>
              <tbody>
                {results.map((item, index) => (
                  <tr key={item.transactionId || index}> {/* Use transactionId as key, fallback to index */}
                    <td>{index + 1}</td>
                    <td>{item.transactionId}</td>
                    <td className={item.prediction === 1 ? 'fraud-detected' : 'not-fraud'}>
                      {item.prediction === 1 ? 'Possible Fraud Detected' : 'No Fraud'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-results">
            <p>No transactions were processed or no results found.</p>
            <p>Please <Link to="/upload" className="docs-link">upload a new CSV file</Link> to get predictions.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResultsPage;