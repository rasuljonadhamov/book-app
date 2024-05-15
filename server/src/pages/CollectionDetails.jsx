import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const CollectionDetails = () => {
  const { id } = useParams();
  const [collection, setCollection] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/collections/${id}`)
      .then((response) => setCollection(response.data))
      .catch((error) => console.error(error));

    axios
      .get(`/api/collections/${id}/items`)
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">{collection.name}</h1>
      <p>
        <ReactMarkdown>{collection.description}</ReactMarkdown>
      </p>

      <h2 className="mt-4">Items</h2>
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.tags.join(", ")}</p>
                <Link
                  to={`/collections/${id}/items/${item.id}`}
                  className="btn btn-primary"
                >
                  View Item
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionDetails;
