import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [items, setItems] = useState([]);
  const [collections, setCollections] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios.get("/api/items/latest").then((response) => setItems(response.data));
    axios
      .get("/api/collections/top")
      .then((response) => setCollections(response.data));
    axios.get("/api/tags").then((response) => setTags(response.data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Latest Items</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} (Collection: {item.collection})
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Top Collections</h2>
        <ul>
          {collections.map((collection) => (
            <li key={collection.id}>
              {collection.name} (Items: {collection.itemsCount})
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Tag Cloud</h2>
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="mr-2 mb-2 p-2 bg-gray-300 rounded">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
