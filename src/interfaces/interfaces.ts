import { User } from 'firebase/auth'; //type User import

export interface LoginFormValues {
    email: string;
    password: string;
}
   
export interface UserFormValues {
    email: string;
    password: string;
    displayName: string;
}

//IAuth context
export interface IAuth {
    user: User | null;
    loading: boolean;
    isAuthLoading: boolean;
    signIn: (creds: LoginFormValues, onSuccess?: () => void) => void;
    signUp: (creds: UserFormValues) => void;
    signOut: () => void;
}
  