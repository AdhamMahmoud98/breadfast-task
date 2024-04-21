export interface Post {
  id?: string;
  user_id: string;
  title: string;
  body: string;
}

export interface PostListItem {
  item: {
      extraData?: any;
      index: number;
      item: Post;
      target: string;
  };
}
