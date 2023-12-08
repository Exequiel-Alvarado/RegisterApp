import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Implement your authentication logic here
    // Return true if the user is authenticated, false otherwise
    if (/* user is authenticated */"") {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
