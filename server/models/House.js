import mongoose from "mongoose";
const Schema = mongoose.Schema

export const HousesSchema = new Schema(
  {
    squareFootage: { type: Number, required: true, min: 100 },
    price: { type: Number, required: true, min: 10000 },
    yearBuilt: { type: Number, required: true, max: 2023 },
    floors: { type: Number, required: true, min: 1 },
    description: { type: String, required: true, maxLength: 500 }
  },
  { timestamps: true }
)