import { useState, useEffect } from "react";
import {
  getCollections,
  createCollection as apiCreateCollection,
  deleteCollection as apiDeleteCollection,
  updateCollection as apiUpdateCollection,
} from "../services/collectionService";

export const useCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {
    const collections = await getCollections();
    console.log('ccc : ' + collections);
    setCollections(collections);
  };

  const createCollection = async (collection) => {
    const newCollection = await apiCreateCollection(collection);
    setCollections([...collections, newCollection]);
  };

  const deleteCollection = async (collectionId) => {
    await apiDeleteCollection(collectionId);
    setCollections(
      collections.filter((collection) => collection.id !== collectionId)
    );
  };

  const updateCollection = async (collectionId, updatedCollection) => {
    const updated = await apiUpdateCollection(collectionId, updatedCollection);
    setCollections(
      collections.map((collection) =>
        collection.id === collectionId ? updated : collection
      )
    );
  };

  return {
    collections,
    createCollection,
    deleteCollection,
    updateCollection,
  };
};
