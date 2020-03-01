import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SidebarMenuService {

  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);
  
  constructor(private router: Router) { }
}
