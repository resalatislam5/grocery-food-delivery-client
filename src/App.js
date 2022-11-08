import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Router/Routes/Routes';
import 'react-photo-view/dist/react-photo-view.css';
function App() {
  return (
    <div className='max-w-[1920px] mx-auto '>
      <Toaster
            position="top-center"
            reverseOrder={false}
          />
      <RouterProvider router={routes} ></RouterProvider>
    </div>
  );
}

export default App;
