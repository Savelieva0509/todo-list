import Button from 'components/Button/button'
import css from './filter.module.css'

const Filter = () => {
  return (
    <div className={css.wrapper}>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </div>
  )
}

export default Filter
