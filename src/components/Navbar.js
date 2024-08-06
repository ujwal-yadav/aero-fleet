import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeProvider';
import { LogOut, MoonIcon, PlaneTakeoff, SunIcon, User } from 'lucide-react';

export const NavBar = ({ logOut }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-20 bg-background">
      <Link
        to="/"
        className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
      >
        <PlaneTakeoff className="w-8 h-8" />
        <span className="text-xl font-bold">Aero Fleet</span>
      </Link>

      <div className="ml-auto space-x-4">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full"
          onClick={toggleTheme}
        >
          {theme === 'light' ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <User className="w-5 h-5" />
              <span className="sr-only">Settings</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-fit" align="end">
            <DropdownMenuItem onClick={logOut}>
              <LogOut className="mr-2 h-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
