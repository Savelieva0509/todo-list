import TaskForm from './components/TaskForm/task-form'
import Layout from './components/Layout/layout'
import AppBar from './components/AppBar/app-bar'
import TaskList from './components/TaskList/task-list'

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
