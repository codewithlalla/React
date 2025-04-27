import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import { DashboardContextProvider } from './contexts/DashbordContext';

function App() {
  return (
    <BrowserRouter>
    <DashboardContextProvider>
    <AppRoutes />
    <ToastContainer />
    </DashboardContextProvider>
    </BrowserRouter>
  );
}

export default App;
