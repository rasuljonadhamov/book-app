import { useParams } from "react-router-dom";
import ItemList from "../components/Items/ItemList";
import CollectionForm from "../components/Collections/CollectionForm";

const CollectionPage = () => {
  const { collectionId } = useParams();

  return (
    <div className="collection-page">
      <h2>Collection</h2>
      <ItemList collectionId={collectionId} />
      <CollectionForm />
    </div>
  );
};

export default CollectionPage;
