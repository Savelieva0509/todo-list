import { createSlice, nanoid } from '@reduxjs/toolkit'

const tasksInitialState = [
  { 'id': 0, 'text': 'Do the dishes', 'completed': true },
  { 'id': 1, 'text': 'Take out the trash', 'completed': true },
  { 'id': 2, 'text': 'Clean the house', 'completed': false },
  { 'id': 3, 'text': 'Organize the closet', 'completed': false },
  { 'id': 4, 'text': 'Cook a delicious meal', 'completed': false },
]

const tasksSlice = createSlice({
  'name': 'tasks',
  'initialState': tasksInitialState,
  'reducers': {
    'addTask': {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(text) {
        return {
          'payload': {
            text,
            'id': nanoid(),
            'completed': false,
          },
        }
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload)
      state.splice(index, 1)
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed
          break
        }
      }
    },
  },
})

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer
