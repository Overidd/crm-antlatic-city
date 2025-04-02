import { ILogin } from '../interface';

export interface ILoginWithEmailPassord {
   email: string;
   password: string
}

export abstract class AuthRepository {
   abstract loginWithEmailPassord({ email, password }: ILoginWithEmailPassord): Promise<ILogin>;

   abstract logout(): Promise<void>;

   abstract checkStatus(): Promise<ILogin>;
}