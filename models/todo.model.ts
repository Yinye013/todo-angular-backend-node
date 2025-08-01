import mongoose, { Document, Schema } from "mongoose";

export interface ITodo extends Document {
  text: string;
  completed: boolean;
  createdAt: Date;
}

const todoSchema: Schema<ITodo> = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Text is required"],
      trim: true,
      maxlength: [200, "Text cannot exceed 200 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model<ITodo>("Todo", todoSchema);

export default Todo;
