import mongoose from "mongoose";
const schema = new mongoose.Schema({
  firstName: "string",
  lastName: "string",
  mail: "string",
  number: "string",
  message: "string",
});

const Users = mongoose.model('users', schema);
export default Users