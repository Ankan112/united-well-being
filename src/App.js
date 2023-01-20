import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: ([
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        }
      ])
    }
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
