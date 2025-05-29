import { User } from "firebase/auth";

export interface IUser {
  email: string;
  password: string;
}

export interface IAuthContextType {
  isAuthenticated: boolean;
  token: string | null; 
  login: (data: IUser, callback?: any) => Promise<User | undefined>;
  logout: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
}