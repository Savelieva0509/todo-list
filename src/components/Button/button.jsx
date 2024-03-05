import css from './button.module.css'

const Button = ({ type, children }) => {
  return (
    <button className={css.btn} type={type}>
      {children}
    </button>
  )
}

export default Button
