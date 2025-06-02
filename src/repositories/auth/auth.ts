
import { firebaseAuth } from "@src/firebase/BaseConfig";
// import { ISignup } from "@src/types/components/pages/signup";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export interface ISignup {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const AuthApi = {
  login: async (email: string, password: string) => {
    const data = await signInWithEmailAndPassword(firebaseAuth, email, password);

    return data.user;
  },
  register: async (data: ISignup) => {
    try {
      const response = await createUserWithEmailAndPassword(firebaseAuth, data.email, data.password);
      const user = response.user;

      if (user) {
        await updateProfile(user, { displayName: data.username });
      }

      return user;
    } catch (error) {
      throw new Error("Erro ao cadastrar-se.");
    }
  }
}