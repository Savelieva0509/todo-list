import { useSelector } from 'react-redux'
import Task from 'components/Task/task'
import { getTasks, getFilter } from '.././../redux/selectors'
import { statusFilters } from '.././../redux/constants'
import css from './task-list.module.css'

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed)
    case statusFilters.completed:
      return tasks.filter((task) => task.completed)
    default:
      return tasks
  }
}


const TaskList = () => {
  const tasks = useSelector(getTasks)
  const filter = useSelector(getFilter)
  const visibleTasks = getVisibleTasks(tasks, filter)

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  )
}

export default TaskList
