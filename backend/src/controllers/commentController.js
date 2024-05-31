import * as commentService from "../services/commentService.js";

export const getComments = async (req, res) => {
  try {
    const comments = await commentService.getComments(req.params.itemId);
    res.send(comments);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const createComment = async (req, res) => {
  try {
    const comment = await commentService.createComment(req.body);
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    await commentService.deleteComment(req.params.id);
    res.send({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const postComment = async (req, res) => {
};
