export interface NotificationModel {
    id: string;
    title: string;
    sub: string;
    type: "OK" | "BAD";
}

export interface AppUser {
    id: number | null;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: "ADMIN" | "STUDENT";
}

export interface LoggedInState{
    "requestId": string,
    "firstName": string,
    "lastName": string,
    "email": string,
    "password": string,
    "role": "STUDENT" | "ADMIN",
    "enabled": boolean,
};


export type action = {
    type: string;
    payload?: any;
};

export type LoginPayload = {
    email: string;
    password: string;
};
export type UserInfo = {
    "requestId": string,
    "firstName": string,
    "lastName": string,
    "email": string,
    "password": string,
    "role": "STUDENT" | "ADMIN",
    "enabled": boolean,
}
export type BooksDetail = {
    id: number;
    "title": string;
    "authors": string;
    "isbn": string;
    "review": string;
    "year": number;
    "pages": number;
    "availableBookCount": number;
    "totalBookCount": number;
    "difference": number;
}