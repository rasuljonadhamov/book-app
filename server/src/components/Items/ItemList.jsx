import { useItems } from "../../hooks/useItems";

const ItemList = ({ collectionId }) => {
  const { items, deleteItem } = useItems(collectionId);
  console.log("itemlist " + items);

  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className="item">
          <h3>{item.name}</h3>
          <p>Tags: {item.tags.join(", ")}</p>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
