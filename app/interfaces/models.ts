import type { Model } from 'model-one';

export interface UserDataI {
  id?: string
  name?: string
}

export interface UserI extends Model  {
  data: UserDataI
}