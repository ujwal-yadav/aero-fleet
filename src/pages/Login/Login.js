import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from '../../components/ui/card';
import { useLogin } from './Login.hooks';
import { PlaneTakeoff } from 'lucide-react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

export const Login = () => {
  const { username, password, errors, handleChange, handleLogin } = useLogin();

  return (
    <div className="mx-auto max-w-md p-4 space-y-6">
      <Card>
        <CardHeader className="space-y-1 text-center">
          <div className="flex flex-col items-center justify-center space-y-2">
            <PlaneTakeoff className="h-12 w-12 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Aero Fleet
            </h1>
          </div>
          <CardDescription>
            Enter your username and password below to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={handleChange}
              className={errors.username ? 'border-red-500' : ''}
            />
            {errors.username && (
              <p className="text-sm text-red-500">This is required</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
              className={errors.password ? 'border-red-500' : ''}
            />
            {errors.password && (
              <p className="text-sm text-red-500">This is required</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleLogin}>
            Log in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
