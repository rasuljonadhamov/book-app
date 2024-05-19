import CollectionList from "../components/Collections/CollectionList";
import ItemList from "../components/Items/ItemList";

const Home = () => {
  return (
    <div className="home-page">
      <h2>Latest Items</h2>
      <ItemList collectionId={1} />
      <h2>Top 5 Largest Collections</h2>
      <CollectionList />
    </div>
  );
};

export default Home;
