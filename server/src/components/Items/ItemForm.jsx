import { useState } from "react";
import { useItems } from "../../hooks/useItems";
import TagInput from "../Shared/TagInput";
import ImageUploader from "../Shared/ImageUploader";

const ItemForm = ({ collectionId, onSubmit }) => {
  const { createItem } = useItems(collectionId);
  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, tags, image };
    await createItem(newItem);
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
      <TagInput tags={tags} setTags={setTags} />
      <ImageUploader setImage={setImage} />
      <button type="submit">Create Item</button>
    </form>
  );
};

export default ItemForm;
