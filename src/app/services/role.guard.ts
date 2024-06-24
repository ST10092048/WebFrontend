import { CanActivateFn, Router } from '@angular/router';
import { RoleService } from './role.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  const roleService =  inject(RoleService);
  const router: Router = inject(Router);
  const requiredRole = route.data['expectedRole'] ;
  
  if (roleService.hasRole(requiredRole)) {
    return true;
  } else {
    // Redirect to unauthorized page or handle accordingly
    router.navigate(['/UnAuthorizedPage']);
    return false;
  }
  
};
