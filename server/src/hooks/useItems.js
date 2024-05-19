import { useState, useEffect } from "react";
import {
  getItems,
  createItem as apiCreateItem,
  deleteItem as apiDeleteItem,
  updateItem as apiUpdateItem,
  getItem,
  addItemComment,
  likeItem as apiLikeItem,
} from "../services/itemService";

export const useItems = (collectionId) => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, [collectionId]);

  const fetchItems = async () => {
    const items = await getItems(collectionId);
    console.log("Fetched ite,s " + items);
    setItems(items);
  };

  const fetchItem = async (itemId) => {
    const fetchedItem = await getItem(itemId);
    console.log("Fetched " + fetchedItem);
    setItem(fetchedItem);
  };

  const createItem = async (item) => {
    const newItem = await apiCreateItem(collectionId, item);
    setItems([...items, newItem]);
  };

  const deleteItem = async (itemId) => {
    await apiDeleteItem(itemId);
    setItems(items.filter((item) => item.id !== itemId));
  };

  const updateItem = async (itemId, updatedItem) => {
    const updated = await apiUpdateItem(itemId, updatedItem);
    setItems(items.map((item) => (item.id === itemId ? updated : item)));
  };

  const addComment = async (itemId, comment) => {
    const updatedItem = await addItemComment(itemId, comment);
    setItem(updatedItem);
  };

  const likeItem = async (itemId) => {
    const updatedItem = await apiLikeItem(itemId);
    setItem(updatedItem);
  };

  return {
    items,
    item,
    createItem,
    deleteItem,
    updateItem,
    fetchItem,
    addComment,
    likeItem,
  };
};
