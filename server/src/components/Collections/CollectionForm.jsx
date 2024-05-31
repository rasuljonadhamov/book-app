import React, { useState } from "react";
import axios from "axios";

const CollectionForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [customFields, setCustomFields] = useState([
    { state: false, name: "" },
    { state: false, name: "" },
    { state: false, name: "" },
    { state: false, name: "" },
    { state: false, name: "" },
    { state: false, name: "" },
  ]);

  const handleCustomFieldChange = (index, field, value) => {
    const updatedCustomFields = [...customFields];
    updatedCustomFields[index][field] = value;
    setCustomFields(updatedCustomFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/collections", {
        name,
        description,
        category,
        image,
        customFields,
      });
      console.log("Collection created:", response.data);
    } catch (error) {
      console.error("Failed to create collection:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
      {customFields.map((field, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={field.state}
            onChange={(e) =>
              handleCustomFieldChange(index, "state", e.target.checked)
            }
          />
          <input
            type="text"
            value={field.name}
            onChange={(e) =>
              handleCustomFieldChange(index, "name", e.target.value)
            }
            placeholder={`Custom Field ${index + 1} Name`}
          />
        </div>
      ))}
      <button type="submit">Create Collection</button>
    </form>
  );
};

export default CollectionForm;
