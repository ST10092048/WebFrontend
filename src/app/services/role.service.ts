import { Injectable } from '@angular/core';
import { Roles } from '../classes/roles.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private userRoles: string[] = [];
  private role: String | null = null;

  constructor() { }

  // hasRole(role: string): boolean {
  //   return this.userRoles.includes(role);
  // }
  hasRole(expectedRole: String): boolean {
    return this.role === expectedRole;
  }

  // addRole(role: string){
  //   this.userRoles.push(role);
  // }
  setRole(role: String): void {
    this.role = role;
  }
  clearRole(): void {
    this.role = null;
  }
}
