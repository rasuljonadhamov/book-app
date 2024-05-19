import { useState } from "react";
import { useCollections } from "../../hooks/useCollections";

const CollectionForm = ({ onSubmit }) => {
  const { createCollection } = useCollections();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCollection = { name, description };
    await createCollection(newCollection);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Create Collection</button>
    </form>
  );
};

export default CollectionForm;
