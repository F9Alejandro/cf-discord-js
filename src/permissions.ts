import { PermissionType } from './types';

/**
 * Permissions class to compute permission uint based on permission enum
 */
export class Permissions {
  constructor(private types: PermissionType[]) {}

  compute() {
    let permission = 0;
    this.types.forEach((type) => (permission += type));
    return String(permission);
  }
}
