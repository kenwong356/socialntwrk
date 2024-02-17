const { Thought, User, Reaction } = require("../models");
const { Types } = require("mongoose");

const thoughtController = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find({});
      return res.json(thoughts);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      if (!thought) {
        res.status(404).json({ message: "No thought found with this id!" });
      } else {
        res.json(thought);
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.status(200).json(thought);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete({
        _id: req.params.thoughtId,
      });
      res.status(200).json(thought);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  async updateThoughtById(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        req.body,
        {
          new: true,
        }
      );
      if (!thought) {
        res.status(404).json({ message: "Thought not found" });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { new: true }
      );
      thought ? res.json(thought) : res.status(404).json({ message: notFound });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );
      thought ? res.json(thought) : res.status(404).json({ message: notFound });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = thoughtController;