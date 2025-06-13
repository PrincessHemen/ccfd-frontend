// src/services/api.js
import axios from 'axios';

// Base URL for your backend API
// IMPORTANT: This should exactly match the address your FastAPI server reports.
const API_BASE_URL = 'https://ccfd-fyp-backend-1.onrender.com' || 'http://127.0.0.1:8000'; 

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json', // Default content type
  },
});

/**
 * Uploads a CSV file to the backend for fraud detection.
 * @param {File} file - The CSV file object to upload.
 * @returns {Promise<Object>} - A promise that resolves with the backend's response.
 */
export const uploadCsv = async (file) => {
  if (!(file instanceof File)) {
    throw new Error('Invalid file provided. Expected a File object.');
  }

  const formData = new FormData();
  formData.append('file', file); // Field name 'file' matches your FastAPI `predict_fraud` function

  try {
    const response = await api.post('/predict/', formData, { // Endpoint is '/predict/'
      headers: {
        'Content-Type': 'multipart/form-data', // Essential for file uploads!
      },
    });
    console.log("Backend response data received by api.js:", response.data);
    return response.data;
  } catch (error) {
    console.error('API Error during CSV upload:', error);
    if (error.response) {
      throw new Error(error.response.data.detail || 'Server error during upload.');
    } else if (error.request) {
      throw new Error('No response from server. Please check your network connection.');
    } else {
      throw new Error('Failed to send request. ' + error.message);
    }
  }
};