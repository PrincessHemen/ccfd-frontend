import React from 'react'
import './Docs.css'
import { Link } from 'react-router-dom';

const Docs = () => {

    const columns = [
        { name: 'trans_date_time', description: 'Date and time of the transaction', format: 'YYYY-MM-DD HH:MM:SS' },
        { name: 'cc_num', description: 'Masked Credit Card Number', format: 'String/Numeric' },
        { name: 'merchant_category', description: 'Category of the merchant (e.g., `grocery_pos`, `shopping_net`)', format: 'String' },
        { name: 'amt', description: 'Transaction amount', format: 'Decimal (e.g., 250.98)' },
        { name: 'first', description: 'Customer\'s first name', format: 'String' },
        { name: 'last', description: 'Customer\'s last name', format: 'String' },
        { name: 'gender', description: 'Customer\'s gender', format: 'M or F' },
        { name: 'street', description: 'Customer\'s street address', format: 'String' },
        { name: 'city', description: 'Customer\'s city', format: 'String' },
        { name: 'state', description: 'Customer\'s state (2-letter abbreviation)', format: 'String' },
        { name: 'zip', description: 'Customer\'s zip code', format: 'Integer' },
        { name: 'lat', description: 'Latitude of customer\'s address', format: 'Decimal' },
        { name: 'long', description: 'Longitude of customer\'s address', format: 'Decimal' },
        { name: 'city_pop', description: 'Population of the customer\'s city', format: 'Integer' },
        { name: 'job', description: 'Customer\'s occupation (e.g. `Engineer, water` or `Software engineer`)', format: 'String' },
        { name: 'dob', description: 'Customer\'s date of birth', format: 'YYYY-MM-DD' },
        { name: 'trans_num', description: 'Unique transaction identifier', format: 'String/Numeric' },
        { name: 'unix_time', description: 'Unix timestamp of the transaction', format: 'Integer' },
        { name: 'merch_lat', description: 'Latitude of the merchant', format: 'Decimal' },
        { name: 'merch_long', description: 'Longitude of the merchant', format: 'Decimal' },
      ];

  return (
    <section className="docs-section">
      <div className="docs-container">
        <h1 className="docs-title">CSV Data Requirements</h1>
        <p className="docs-intro">
          To ensure accurate fraud detection, please ensure your CSV file adheres to the following format.
          The first row of your CSV must contain the exact column headers listed below.
        </p>

        <div className="table-wrapper">
          <table className="docs-table">
            <thead>
              <tr>
                <th>Column Name</th>
                <th>Description</th>
                <th>Expected Format</th>
              </tr>
            </thead>
            <tbody>
              {columns.map((col, index) => (
                <tr key={index}>
                  <td className="column-name">{col.name}</td>
                  <td>{col.description}</td>
                  <td className="column-format">{col.format}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="docs-outro">
          For any discrepancies or issues with your data format, please refer to the <Link to="/contact">Contact Us</Link> page.
        </p>
      </div>
    </section>
  )
}

export default Docs