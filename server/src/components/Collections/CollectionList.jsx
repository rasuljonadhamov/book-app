import { useEffect, useState } from "react";
// import { getCollections } from "../services/collectionService";
// import { getItems } from "../services/itemService";
import { getCollections } from "../../services/collectionService";
import { getItems } from "../../services/itemService";

const CollectionList = () => {
  const [collections, setCollections] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await getCollections();
        setCollections(data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  useEffect(() => {
    if (collections.length > 0) {
      const fetchItems = async () => {
        try {
          const data = await getItems(collections[0].id);
          setItems(data);
        } catch (error) {
          console.error("Error fetching items:", error);
        }
      };

      fetchItems();
    }
  }, [collections]);

  return (
    <div>
      <h1>Collections</h1>
      <ul>
        {collections.map((collection) => (
          <li key={collection.id}>{collection.name}</li>
        ))}
      </ul>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionList;
