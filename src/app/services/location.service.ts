import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocationData } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  lat: string = '';
  lon: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  private permissionSubject = new BehaviorSubject<boolean>(false);

  public getPermissionStatus(): Observable<boolean> {
    return this.permissionSubject.asObservable();
  }

  public getLocation() {
    navigator.geolocation?.getCurrentPosition(
      (position) => {
        console.log(position);
        this.permissionSubject.next(true);
        this.lat = position.coords.latitude.toString();
        this.lon = position.coords.longitude.toString();
        localStorage.setItem('lat', this.lat);
        localStorage.setItem('lon', this.lon);
        this.router.navigateByUrl('/necesito');
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          this.permissionSubject.next(false);
        }
      }
    );
  }

  public getLocationData(lat: string, lon: string) {
    return this.http.get<LocationData>(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// getCurrentPosition(): Promise<GeolocationPosition> {
//   return new Promise((resolve, reject) => {
//     if (!navigator.geolocation) {
//       reject('La geolocalización no está soportada por este navegador');
//     } else {
//       navigator.geolocation.getCurrentPosition((position) => resolve(position), (error) => reject(error));
//     }
//   });
// }
