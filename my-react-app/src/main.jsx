import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import Signup from './pages/Signup.jsx';
import './index.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import React,{useState} from 'react';


function Root(){
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  }


  const router= createBrowserRouter([
  {
  path:"/",
  element:<App users={users}/>,
  errorElement:<div>404 Not Found</div>,
  },

  {
  path:"/Signup",
  element:<Signup addUser={addUser}/>,

  },
  ]);

  return <RouterProvider router={router}/>;
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Root/>
  </React.StrictMode>,
)
