import { useNavigate } from 'react-router-dom';
import DroneData from '../db.json';
import { useToast } from '../components/ui/use-toast';
import { cn } from '../utils/utils';
import { TriangleAlertIcon } from 'lucide-react';

export const useAuthProvider = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const isAuthenticated = localStorage.getItem('isAuth');

  const logIn = async (data) => {
    const users = DroneData.users;

    const filteredUser = users.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );

    if (filteredUser) {
      localStorage.setItem('isAuth', true);
      navigate('/');
    } else {
      toast({
        variant: 'destructive',
        title: (
          <div className="flex items-center">
            <TriangleAlertIcon className="mr-2" />
            <span className="mt-1">Username or Password is wrong!</span>
          </div>
        ),
        className: cn(
          'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
        ),
      });
    }
  };

  const logOut = () => {
    localStorage.removeItem('isAuth');
    navigate('/login');
  };

  return { isAuthenticated, logIn, logOut };
};
