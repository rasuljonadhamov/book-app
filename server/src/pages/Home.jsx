import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [latestItems, setLatestItems] = useState([]);
  const [topCollections, setTopCollections] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios
      .get("/api/items/latest")
      .then((response) => setLatestItems(response.data))
      .catch((error) => console.error(error));

    axios
      .get("/api/collections/top")
      .then((response) => setTopCollections(response.data))
      .catch((error) => console.error(error));

    axios
      .get("/api/tags")
      .then((response) => setTags(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Latest Items</h1>
      <div className="row">
        {latestItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Collection: {item.collectionName}</p>
                <p className="card-text">Author: {item.author}</p>
                <a
                  href={`/collections/${item.collectionId}/items/${item.id}`}
                  className="btn btn-primary"
                >
                  View Item
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="mb-4">Top Collections</h1>
      <div className="row">
        {topCollections.map((collection) => (
          <div key={collection.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{collection.name}</h5>
                <p className="card-text">
                  Number of items: {collection.itemsCount}
                </p>
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

      <h1 className="mb-4">Tags</h1>
      <div>
        {tags.map((tag) => (
          <span
            key={tag}
            className="badge bg-secondary me-2"
            onClick={() => (window.location.href = `/search?tag=${tag}`)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Home;
