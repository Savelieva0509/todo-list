import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom/client' // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux' // eslint-disable-line no-unused-vars
import { store } from './redux/store' // eslint-disable-line no-unused-vars
import App from 'components/app' // eslint-disable-line no-unused-vars
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(  
<Provider store={store}>  
<App />  
</Provider>
)
