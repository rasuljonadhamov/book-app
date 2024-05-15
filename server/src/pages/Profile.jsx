import  { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios
      .get("/api/user/collections")
      .then((response) => setCollections(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/api/collections/${id}`)
      .then(() => {
        setCollections(
          collections.filter((collection) => collection.id !== id)
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">My Collections</h1>
      <a href="/collections/new" className="btn btn-primary mb-4">
        Create New Collection
      </a>
      <div className="row">
        {collections.map((collection) => (
          <div key={collection.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{collection.name}</h5>
                <p className="card-text">{collection.description}</p>
                <Link
                  to={`/collections/${collection.id}`}
                  className="btn btn-primary"
                >
                  View Collection
                </Link>
                <Link
                  to={`/collections/${collection.id}/edit`}
                  className="btn btn-secondary ms-2"
                >
                  Edit Collection
                </Link>
                <button
                  onClick={() => handleDelete(collection.id)}
                  className="btn btn-danger ms-2"
                >
                  Delete Collection
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
