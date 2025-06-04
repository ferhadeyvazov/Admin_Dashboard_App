export type initialType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export type loginType = Omit<initialType, "firstName" | "lastName">;

type loadingType = 'idle' | 'pending' | 'succeeded' | 'failed';

export type initialLoginType =
    loginType &
    { status?: loadingType } &
    { error?: any }
