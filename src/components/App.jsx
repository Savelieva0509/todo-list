import TaskForm from 'components/TaskForm/task-form'
import Layout from 'components/Layout/layout'
import AppBar from './AppBar/app-bar'
import TaskList from './TaskList/task-list'

const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  )
}

export default App
