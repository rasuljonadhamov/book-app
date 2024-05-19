import { useCollections } from "../../hooks/useCollections";

const CollectionList = () => {
  const { collections, deleteCollection } = useCollections();

  return (
    <div className="collection-list">
      {collections.map((collection) => (
        <div key={collection.id} className="collection-item">
          <h3>{collection.name}</h3>
          <p>{collection.description}</p>
          <button onClick={() => deleteCollection(collection.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CollectionList;
