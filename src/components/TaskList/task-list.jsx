import { useSelector } from 'react-redux'
import Task from 'components/Task/task'
import { getTasks } from '.././../redux/selectors'
import css from './task-list.module.css'

const TaskList = () => {
  const tasks = useSelector(getTasks)
  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  )
}

export default TaskList
