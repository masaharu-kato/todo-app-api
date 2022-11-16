import Mongoose from 'mongoose'

export interface Task {
  // id: Mongoose.ObjectId,
  text: string,
  done: boolean,
  created_at: Date,
  updated_at: Date,
}

const TaskSchema = new Mongoose.Schema<Task>({
  // id: Mongoose.Types.ObjectId,
  text: {type: String, require: true},
  done: Boolean,
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
})

export const TaskModel = Mongoose.model('Task', TaskSchema)
