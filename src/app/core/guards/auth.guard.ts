import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = ( state) => {
  const route = inject(Router);
  if (localStorage.getItem('userToken') !== null) {
    return true;
  } else {
    route.navigate(['auth'])
    return false
  }
};
