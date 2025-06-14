import { User } from "@/types/userTypes";

const users: User[] = [];

export function addUser(user: User) {
    users.push(user);
}

export function findUserByEmail(email: string): User | undefined {
    return users.find((u) => u.email === email);
}
