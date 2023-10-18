import './App.css'
import FormInput from "./components/Form/form.jsx";
import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set the submitted data
    setSubmittedData(formData);
  };

  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  return (
      <div className="app">
        <h2>Products</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
              label="Name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleInputChange(e, 'name')}
          />
          <FormInput
              label="Description"
              placeholder="Description"
              value={formData.description}
              onChange={(e) => handleInputChange(e, 'description')}
          />
          <FormInput
              label="Category"
              placeholder="Category"
              value={formData.category}
              onChange={(e) => handleInputChange(e, 'category')}
          />
          <FormInput
              label="Quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={(e) => handleInputChange(e, 'quantity')}
          />
          <FormInput
              label="Price"
              placeholder="Price"
              value={formData.price}
              onChange={(e) => handleInputChange(e, 'price')}
          />

          <button type="submit">Submit</button>
        </form>

        {submittedData && (
            <div className="submitted-data">
              <h2>Submitted Data:</h2>
              <p>Name: {submittedData.name}</p>
              <p>Description: {submittedData.description}</p>
              <p>Category: {submittedData.category}</p>
              <p>Quantity: {submittedData.quantity}</p>
              <p>Price: {submittedData.price}</p>
            </div>
        )}
      </div>
  );
};
export default App;
