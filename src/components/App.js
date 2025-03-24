import React, { useState } from "react";

const DynamicFieldsForm = () => {
  const [fields, setFields] = useState([{ id: Date.now(), name: "", age: "" }]);

  // Add a new empty field with a unique ID
  const addField = () => {
    setFields([...fields, { id: Date.now(), name: "", age: "" }]);
  };

  // Remove a field by ID
  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  // Handle input change
  const handleChange = (id, event) => {
    const { name, value } = event.target;
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, [name]: value } : field
      )
    );
  };

  // Form Submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data:", JSON.stringify(fields, null, 2)); 

  };

  return (
    <div className="container">
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id} className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={field.name}
              onChange={(e) => handleChange(field.id, e)}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              value={field.age}
              onChange={(e) => handleChange(field.id, e)}
              min="0"
              required
            />
            {fields.length > 1 && (
              <button type="button" onClick={() => removeField(field.id)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addField}>
          Add More..
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicFieldsForm;
