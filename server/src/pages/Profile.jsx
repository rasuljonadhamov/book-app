import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios
      .get("/api/user/collections")
      .then((response) => setCollections(response.data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Collections</h2>
      <ul>
        {collections.map((collection) => (
          <li key={collection.id}>{collection.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
