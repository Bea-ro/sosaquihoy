import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private router: Router) {}

  private permissionSubject = new BehaviorSubject<boolean>(false);

  public getPermissionStatus(): Observable<boolean> {
    return this.permissionSubject.asObservable();
  }

  public getLocation(): void {
    navigator.geolocation?.getCurrentPosition(
      (position) => {
        console.log(position);
        this.permissionSubject.next(true);
        localStorage.setItem('lat', position.coords.latitude.toString());
        localStorage.setItem('lon', position.coords.longitude.toString());
        this.router.navigateByUrl('/necesito');
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          this.permissionSubject.next(false);
        }
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
