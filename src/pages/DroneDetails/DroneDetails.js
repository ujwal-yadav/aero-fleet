import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../../components/ui/table';
import { useDroneDetails } from './DroneDetails.hooks';
import { Progress } from '../../components/ui/progress';

export const DroneDetails = () => {
  const { selectedDroneDetails, location, batteryPercentage } =
    useDroneDetails();

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="max-w-6xl w-full mx-auto grid gap-2">
        <h1 className="font-semibold text-3xl">Drone Details</h1>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>Drone1</span>
        </div>
      </div>
      <div className="grid gap-6 max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Total Flight Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">
                {selectedDroneDetails.flight_hours}
              </div>
              <div className="text-muted-foreground">hours</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Battery Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-4xl font-bold">
                    {selectedDroneDetails.battery_status}
                  </div>
                </div>
              </div>
              <Progress
                value={batteryPercentage}
                aria-label="Battery level"
                className="mt-4 h-3"
                indicatorColor={
                  batteryPercentage <= 20 ? 'bg-red-500' : 'bg-primary'
                }
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`text-3xl font-bold ${
                  selectedDroneDetails.status === 'Available'
                    ? 'text-green-600'
                    : selectedDroneDetails.status === 'In-flight'
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}
              >
                {selectedDroneDetails.status}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Last Known Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-medium">{location || 'Not Available'}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <div className="font-medium">Mission Type</div>
                  <div>{selectedDroneDetails.current_mission}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="max-w-6xl w-full mx-auto grid gap-2 mt-4">
            <h1 className="font-semibold text-3xl">Maintenance Logs</h1>
          </div>

          <Card className="col-span-1 md:col-span-2 lg:col-span-3">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="p-6 font-bold text-xl bg-background/60 rounded-tl-lg">
                    Date
                  </TableHead>
                  <TableHead className="p-6 font-bold text-xl bg-background/60">
                    Description
                  </TableHead>
                  <TableHead className="p-6 font-bold text-xl bg-background/60 rounded-tr-lg">
                    Technician
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {selectedDroneDetails.maintenance_logs.map(
                  (droneMaintenanceLog) => (
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="p-6 text-lg">
                        {droneMaintenanceLog.date}
                      </TableCell>
                      <TableCell className="p-6 text-lg">
                        {droneMaintenanceLog.description}
                      </TableCell>
                      <TableCell className="p-6 text-lg">
                        {droneMaintenanceLog.technician}
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
};
