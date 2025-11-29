import mongoose from "mongoose"

const itemTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
})

export default mongoose.model("ItemType", itemTypeSchema)
