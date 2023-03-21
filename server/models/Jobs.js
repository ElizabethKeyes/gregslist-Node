import mongoose from "mongoose";
const Schema = mongoose.Schema

export const JobsSchema = new Schema(
  {
    position: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
    salary: { type: Number, required: true }
  },
  { timestamps: true }
)