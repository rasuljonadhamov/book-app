import { useState, useEffect } from "react";
import {
  getComments,
  addComment as apiAddComment,
  deleteComment as apiDeleteComment,
} from "../services/commentService";

export const useComments = (itemId) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, [itemId]);

  const fetchComments = async () => {
    const comments = await getComments(itemId);
    setComments(comments);
  };

  const addComment = async (comment) => {
    const newComment = await apiAddComment(itemId, comment);
    setComments([...comments, newComment]);
  };

  const deleteComment = async (commentId) => {
    await apiDeleteComment(commentId);
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  return {
    comments,
    addComment,
    deleteComment,
  };
};
