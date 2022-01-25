export interface user {
  id?: number;
  name: string;
  email: string;
  username: string;
}

export interface usersList {
  users: Array<user>;
}

export const users: usersList = {
  users: [],
};
