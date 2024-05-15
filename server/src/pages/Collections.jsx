import { useEffect, useState } from "react";
import axios from "axios";

const Collections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios
      .get("/api/collections")
      .then((response) => setCollections(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Collections</h1>
      <div className="row">
        {collections.map((collection) => (
          <div key={collection.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{collection.name}</h5>
                <p className="card-text">{collection.description}</p>
                <a
                  href={`/collections/${collection.id}`}
                  className="btn btn-primary"
                >
                  View Collection
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
