import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { ILogin } from '@/domain/interface';
import { FirebaseAuth } from './config';
import {
   AuthRepository,
   ILoginWithEmailPassord
} from '@/domain/repository';

export class AuthProvidorFirebase extends AuthRepository {

   loginWithEmailPassord = async ({ email, password }: ILoginWithEmailPassord): Promise<ILogin> => {
      const res = await signInWithEmailAndPassword(FirebaseAuth, email, password);

      return {
         uid: res.user.uid,
         email: res.user.email || 'Not email',
         displayName: res.user.displayName || 'Not name',
         photoURL: res.user.photoURL || undefined,
      }
   }

   logout = async (): Promise<void> => {
      await FirebaseAuth.signOut();
   }

   checkStatus = async (): Promise<ILogin> => {
      return await new Promise((resolve, reject) => {
         onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return reject('No user');
            resolve({
               uid: user.uid,
               email: user.email || 'Not email',
               displayName: user.displayName || 'Not name',
               photoURL: user.photoURL || undefined,
            });
         })

      });
   }
}