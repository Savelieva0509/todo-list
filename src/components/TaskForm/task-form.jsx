import Button from 'components/Button/button'
import css from './task-form.module.css'

const handleSubmit = (event) => {
  event.preventDefault()
  const form = event.target
  form.reset()
}

const TaskForm = () => {
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  )
}

export default TaskForm
