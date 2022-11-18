export interface TweetsEntityCollection {
  tweets?: TweetsEntity[] | null;
}
export interface TweetsEntity {
  id: string;
  user: User;
  createdAt: string;
  content: string;
  image: string;
  number_of_comments: number;
  number_of_retweets: number;
  number_of_likes: number;
}
export interface User {
  id: string;
  username: string;
  name: string;
  photo_url: string;
}
