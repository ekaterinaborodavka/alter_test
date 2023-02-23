export interface IPost {
  id: number;
  userId: number;
  body: string;
  title: string;
}

export interface IAuthState {
  auth: boolean;
}

export interface IPostsState {
  posts: IPost[];
  loading: boolean;
  error: boolean;
  deleteError: boolean;
}
