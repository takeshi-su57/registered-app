export interface UserBody {
  name: string;
  email: string;
  password: string;
}

export interface UserFindBy {
  name?: string;
  email?: string;
}
