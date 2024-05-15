import  { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Collections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios
      .get("/api/collections")
      .then((response) => setCollections(response.data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Collections</h2>
      <ul>
        {collections.map((collection) => (
          <li key={collection.id}>
            <Link to={`/collections/${collection.id}`}>{collection.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collections;
