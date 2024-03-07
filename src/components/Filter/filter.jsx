/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux'
import Button from 'components/Button/button'
import { statusFilters } from '.././../redux/constants'
import { getFilter } from '.././../redux/selectors'
import { setFilter } from '.././../redux/filter-slice'
import css from './filter.module.css'

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(getFilter)

  const handleFilterChange = (newFilter) => dispatch(setFilter(newFilter))

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  )
}

export default Filter
