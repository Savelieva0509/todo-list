import Filter from 'components/Filter/filter'
import TaskCounter from 'components/TaskCounter/task-counter'
import css from './app-bar.module.css'

const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <Filter />
      </section>
    </header>
  )
}

export default AppBar
