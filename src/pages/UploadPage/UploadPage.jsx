// src/pages/UploadPage/UploadPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { uploadCsv } from '../../services/api';
import { toast } from 'react-toastify'; // <--- Import toast
import './UploadPage.css';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [message, setMessage] = useState(''); // No longer directly used for display
  // const [isSuccess, setIsSuccess] = useState(false); // No longer directly used for display
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    // setMessage(''); // Remove
    // setIsSuccess(false); // Remove
    const file = event.target.files[0];
    if (file) {
      if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
        setSelectedFile(file);
        toast.info(`File selected: ${file.name}`, { autoClose: 2000 }); // Optional: show info toast
      } else {
        setSelectedFile(null);
        toast.error('Please select a valid CSV file (.csv).'); // <--- Use toast.error
      }
    } else {
      setSelectedFile(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.warn('Please select a file to upload.'); // <--- Use toast.warn
      return;
    }

    setIsLoading(true);
    toast.info('Uploading and processing...', { autoClose: false, closeButton: false }); // <--- Use toast.info for loading

    try {
      const response = await uploadCsv(selectedFile);
      console.log("Response object in UploadPage.jsx after API call:", response);
      toast.dismiss(); // Dismiss the loading toast
      toast.success(response.message || 'File uploaded and processed successfully!'); // <--- Use toast.success
      setSelectedFile(null);

      setTimeout(() => {
        navigate('/results', {
          state: {
            predictions: response.predictions,
            transactionIds: response.transaction_ids || [],
          },
        });
      }, 2000);

    } catch (error) {
      toast.dismiss(); // Dismiss the loading toast
      console.error('Upload failed:', error);
      toast.error(error.message || 'File upload failed. Please try again.'); // <--- Use toast.error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="upload-section">
      <div className="upload-container">
        <h1 className="upload-title">Upload Transaction Data</h1>
        <p className="upload-description">
          Please upload your CSV file containing transaction data. Refer to the
          <Link to="/docs" className="docs-link"> Documentation </Link>
          page for required formatting.
        </p>

        <div className="file-input-wrapper">
          <input
            type="file"
            id="csvFile"
            accept=".csv"
            onChange={handleFileChange}
            className="file-input"
          />
          <label htmlFor="csvFile" className="file-input-label">
            {selectedFile ? selectedFile.name : 'Choose CSV File'}
          </label>
        </div>

        <button
          onClick={handleUpload}
          className="upload-button"
          disabled={!selectedFile || isLoading}
        >
          {isLoading ? 'Processing...' : 'Analyze CSV'}
        </button>

        {/* Remove the old message display, Toastify handles it */}
        {/* {message && (
          <p className={`upload-message ${isSuccess ? 'success' : 'error'}`}>
            {message}
            {isLoading && <span className="loading-spinner"></span>}
          </p>
        )} */}
      </div>
    </section>
  );
};

export default UploadPage;