import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css'
import Login from './pages/Login';
import Tasks from './pages/Tasks';

const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Login} />
      <Route path="/tasks" Component={Tasks} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;