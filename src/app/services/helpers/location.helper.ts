import { LocationData } from '../../models/models';

export function transformLocationData(locationData: LocationData): string {
  return locationData.display_name;
}
