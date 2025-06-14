
export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
};

const users: User[] = [];

export function addUser(user: User) {
  users.push(user);
}

export function findUserByEmail(email: string): User | undefined {
  return users.find((u) => u.email === email);
}
