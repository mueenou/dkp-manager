import { Schema, model } from "mongoose";

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dkp: {
    type: Number,
    default: 0,
  },
  class: {
    type: [String],
  },
});

export const Player = model<any>("Player", PlayerSchema);
