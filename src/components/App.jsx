import TaskForm from 'components/TaskForm/task-form'
import Layout from 'components/Layout/layout'
import TaskList from './TaskList/task-list'

const App = () => {
  return (
    <Layout>
      <TaskForm />
      <TaskList />
    </Layout>
  )
}

export default App
