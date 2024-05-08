import User from "../models/userModel.js";

export const Create = async (req, res) => {
  try {
    const userData = new User(req.body);
    if (!userData) {
      return res.status(404).json({ msg: "user data not found" });
    }

    const saveData = await userData.save();
    res.status(200).json(saveData);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getAll = async (req, res) => {
  try {
    const userData = await User.find();

    if (!userData) {
      return res.status(404).json({ msg: "user data not found" });
    }

    res.status(200).json(userData);
  } catch (err) {}
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ msg: "user data not found" });
    }
    res.status(200).json(userExist);
  } catch (err) {}
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ msg: "user data not found" });
    }

    const updateData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateData);
  } catch (err) {}
};

export const deletUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ msg: "user data not found" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted success " });
  } catch (err) {}
};
