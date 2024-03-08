/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux'
import { Formik, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
import Button from 'components/Button/button'
import { addTask } from '.././../redux/tasks-slice'
import css from './task-form.module.css'

const initialValues = {
  'task': '',
}

const maxLength = 20

const taskSchema = Yup.object().shape({
  'task': Yup.string()
    .max(maxLength, `Entry length must not exceed ${maxLength} characters`)
    .required('Enter text'),
})

const TaskForm = () => {
  const dispatch = useDispatch()

  const handleFormSubmit = (formikValues, formikHelpers) => {
    dispatch(addTask(formikValues.task))
    formikHelpers.resetForm()
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={taskSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, errors, touched }) => (
        <>
          {' '}
          <form className={css.form} onSubmit={handleSubmit}>
            <Field
              className={`${css.field} ${
                touched.task && errors.task ? css.error_field : ''
              }`}
              type="text"
              name="task"
              placeholder="Enter task text..."
            />

            <Button type="submit">Add task</Button>
          </form>
          <ErrorMessage name="task" component="div" className={css.error} />
        </>
      )}
    </Formik>
  )
}

export default TaskForm
