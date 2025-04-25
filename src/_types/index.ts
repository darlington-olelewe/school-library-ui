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

export type action = {
    type: string;
    payload?: any;
};

export type LoginPayload = {
    email: string;
    password: string;
};