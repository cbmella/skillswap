import mongoose, { Document, Schema } from "mongoose";

interface User extends Document {
  name: string;
  location: string;
  skillsCanTeach: string[];
  skillsWantToLearn: string[];
}

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  location: { type: String, required: true },
  skillsCanTeach: { type: [String], required: true },
  skillsWantToLearn: { type: [String], required: true },
});

export default mongoose.model<User>("User", UserSchema);
