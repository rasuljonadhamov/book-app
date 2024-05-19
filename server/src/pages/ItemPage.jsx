import { useParams } from "react-router-dom";
import { useItems } from "../hooks/useItems";

const ItemPage = () => {
  const { itemId } = useParams();
  const { item, addComment, likeItem } = useItems();

  return (
    <div className="item-page">
      <h2>{item.name}</h2>
      <p>Tags: {item.tags.join(", ")}</p>
      <button onClick={() => likeItem(item.id)}>Like</button>
      <div className="comments-section">
        <h3>Comments</h3>
        {item.comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
          </div>
        ))}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addComment(item.id, e.target.comment.value);
          }}
        >
          <textarea name="comment" placeholder="Add a comment"></textarea>
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </div>
  );
};

export default ItemPage;
