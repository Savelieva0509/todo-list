import css from './button.module.css'

const Button = ({ type }) => {
  return <button className={css.btn} type={type}></button>
}

export default Button
