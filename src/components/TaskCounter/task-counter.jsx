import { useSelector } from 'react-redux'
import { getTasks } from '.././../redux/selectors'
import css from './task-counter.module.css'

const TaskCounter = () => {
  const tasks = useSelector(getTasks)
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1
      } else {
        acc.active += 1
      }
      return acc
    },
    { active: 0, completed: 0 }
  )
  return (
    <div>
      <p className={css.text}>
        Active: <span className={css.number}>{count.active}</span>
      </p>
      <p className={css.text}>
        Comleted: <span className={css.number}>{count.completed}</span>
      </p>
    </div>
  )
}

export default TaskCounter
