export interface UserCreate {
  name: string;
  email: string;
  password: string;
}

export interface UserFindBy {
  name?: string;
  email?: string;
}
