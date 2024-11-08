import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { LocationService } from '../../services/location.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent implements OnInit {
  public permission: boolean = false;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locationService.getLocation();
    this.listenPermission();
  }

  public listenPermission() {
    this.locationService
      .getPermissionStatus()
      .subscribe((permission: boolean) => (this.permission = permission));
  }
}
