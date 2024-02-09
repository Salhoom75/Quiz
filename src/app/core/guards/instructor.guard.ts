import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

export const instructorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService= inject(AuthService);

  if (localStorage.getItem('userToken') !== null && localStorage.getItem('role') == 'Instructor') {

    return true;
  } else {
    authService.getUserToken();
    router.navigate(['/dashboard']);
    return true;
  } 
};
