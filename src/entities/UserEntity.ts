export interface UserEntityCollection {
  user: UserEntityCollection;
}

export interface UserEntity {
  id: string;
  username: string;
  name: string;
  photo_url?: string;
}
