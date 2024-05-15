import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const CollectionDetails = () => {
  const { id } = useParams();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/collections/${id}`)
      .then((response) => setCollection(response.data));
  }, [id]);

  if (!collection) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{collection.name}</h2>
      <ReactMarkdown>{collection.description}</ReactMarkdown>
      <h3 className="text-xl font-bold mt-4">Items</h3>
      <ul>
        {collection.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionDetails;
