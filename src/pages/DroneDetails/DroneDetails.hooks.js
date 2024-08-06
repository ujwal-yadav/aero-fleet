import axios from 'axios';
import DroneData from '../../db.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useDroneDetails = () => {
  const { id } = useParams();

  const selectedDroneDetails = DroneData.drones.find(
    (drone) => drone.id === id
  );

  const batteryPercentage = Number(
    selectedDroneDetails.battery_status.split('%')[0]
  );

  const [location, setLocation] = useState('');

  const getGeoLocation = async (lat, lng) => {
    const apiKey = 'ee2bf507cafe4aa1b30dd465ad08afd5';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${selectedDroneDetails.last_known_location[0]}%2C${selectedDroneDetails.last_known_location[1]}&key=${apiKey}`;

    try {
      const response = await axios.get(url);

      const results = response.data.results;

      if (results.length > 0) {
        setLocation(results[0].formatted);
      }
    } catch (err) {
      console.log('Error fetching location');
    }
  };

  useEffect(() => {
    getGeoLocation();
  }, []);

  return { selectedDroneDetails, location, batteryPercentage };
};
