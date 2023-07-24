export enum Roles {
  Admin = "admin",
  Viewer = "viewer",
}

export interface IUser {
  id: string;
  email: string;
  role: Roles;
  username: string;
  firstname?: string;
  lastname?: string;
  avatar?: string;
}
