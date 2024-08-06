import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Toaster } from './components/ui/toaster';
import { AuthProvider } from './context/AuthProvider';
import { ThemeProvider } from './context/ThemeProvider';
import { ProtectedRoute } from './layout/ProtectedRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DroneDetails } from './pages/DroneDetails/DroneDetails';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <div className="flex flex-col justify-center w-full min-h-screen bg-background">
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/drones/:id" element={<DroneDetails />} />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
