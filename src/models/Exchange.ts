import mongoose, { Document, Schema } from "mongoose";

interface Exchange extends Document {
  user1: Schema.Types.ObjectId;
  user2: Schema.Types.ObjectId;
  skill1: string;
  skill2: string;
  status: string;
  rating1?: number;
  rating2?: number;
}

const ExchangeSchema = new Schema<Exchange>({
  user1: { type: Schema.Types.ObjectId, ref: "User", required: true },
  user2: { type: Schema.Types.ObjectId, ref: "User", required: true },
  skill1: { type: String, required: true },
  skill2: { type: String, required: true },
  status: { type: String, required: true },
  rating1: { type: Number },
  rating2: { type: Number },
});

export default mongoose.model<Exchange>("Exchange", ExchangeSchema);
