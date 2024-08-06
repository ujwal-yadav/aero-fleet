import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '../../components/ui/card';
import DroneData from '../../db.json';
import { Link } from 'react-router-dom';
import { PlaneTakeoff } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { isBatteryLow } from '../../utils/utils';

export const Home = () => {
  return (
    <div className="flex  flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="max-w-6xl w-full mx-auto grid gap-2">
        <h1 className="font-semibold text-3xl">Fleet Overview</h1>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>{DroneData.drones.length} Drones</span>
        </div>
      </div>
      <div className="grid gap-6 max-w-6xl w-full mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {DroneData.drones.map((drone) => (
          <Card key={drone.id}>
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PlaneTakeoff className="w-5 h-5" />
                <span className="font-medium">{drone.id}</span>
              </div>
              <div className="space-x-1 pt-2">
                <span
                  className={`inline-flex w-3 h-3 rounded-full ${
                    drone.status === 'Available'
                      ? 'bg-green-500'
                      : drone.status === 'In-flight'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                ></span>
                <span className="font-medium">{drone.status}</span>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Flight Hours</span>
                <span>{drone.flight_hours}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Battery</span>
                <span
                  className={
                    isBatteryLow(drone.battery_status) ? 'text-red-400' : ''
                  }
                >
                  {drone.battery_status}
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Link to={`/drones/${drone.id}`} className="w-full">
                <Button
                  variant="outline"
                  className="w-full bg-primary text-secondary hover:bg-primary/80 hover:text-secondary"
                >
                  View More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
