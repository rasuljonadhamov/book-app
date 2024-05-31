import { useState, useEffect } from "react";
import axios from "axios";

const ItemForm = ({ collectionId }) => {
  const [name, setName] = useState("");
  const [tags, setTags] = useState("");
  const [customStringValues, setCustomStringValues] = useState(["", "", ""]);
  const [customIntValues, setCustomIntValues] = useState([null, null, null]);
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await axios.get(`/api/collections/${collectionId}`);
        setCollection(response.data);
      } catch (error) {
        console.error("Failed to fetch collection:", error);
      }
    };

    fetchCollection();
  }, [collectionId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/items`, {
        collectionId,
        name,
        tags,
        customStringValues,
        customIntValues,
      });
      console.log("Item created:", response.data);
    } catch (error) {
      console.error("Failed to create item:", error);
    }
  };

  return (
    collection && (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags"
        />
        {collection.custom_string1_state && (
          <input
            type="text"
            value={customStringValues[0]}
            onChange={(e) =>
              setCustomStringValues([
                e.target.value,
                customStringValues[1],
                customStringValues[2],
              ])
            }
            placeholder={collection.custom_string1_name}
          />
        )}
        {collection.custom_string2_state && (
          <input
            type="text"
            value={customStringValues[1]}
            onChange={(e) =>
              setCustomStringValues([
                customStringValues[0],
                e.target.value,
                customStringValues[2],
              ])
            }
            placeholder={collection.custom_string2_name}
          />
        )}
        {collection.custom_string3_state && (
          <input
            type="text"
            value={customStringValues[2]}
            onChange={(e) =>
              setCustomStringValues([
                customStringValues[0],
                customStringValues[1],
                e.target.value,
              ])
            }
            placeholder={collection.custom_string3_name}
          />
        )}
        {collection.custom_int1_state && (
          <input
            type="number"
            value={customIntValues[0]}
            onChange={(e) =>
              setCustomIntValues([
                parseInt(e.target.value, 10),
                customIntValues[1],
                customIntValues[2],
              ])
            }
            placeholder={collection.custom_int1_name}
          />
        )}
        {collection.custom_int2_state && (
          <input
            type="number"
            value={customIntValues[1]}
            onChange={(e) =>
              setCustomIntValues([
                customIntValues[0],
                parseInt(e.target.value, 10),
                customIntValues[2],
              ])
            }
            placeholder={collection.custom_int2_name}
          />
        )}
        {collection.custom_int3_state && (
          <input
            type="number"
            value={customIntValues[2]}
            onChange={(e) =>
              setCustomIntValues([
                customIntValues[0],
                customIntValues[1],
                parseInt(e.target.value, 10),
              ])
            }
            placeholder={collection.custom_int3_name}
          />
        )}
        <button type="submit">Create Item</button>
      </form>
    )
  );
};

export default ItemForm;
