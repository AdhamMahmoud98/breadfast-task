import type { RouteProp } from '@react-navigation/native';

export interface Post {
  id: string;
  user_id: string;
  title: string;
  body: string;
  avatarUrl?: string
}

export interface PostListItem {
  item: {
      extraData?: any;
      index: number;
      item: Post;
      target: string;
  };
}

export interface Comment {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}


// Assuming you have a Stack Navigator named 'RootStack'
type RootStackParamList = {
  // Define types for other screens in your navigator
  Post: Post;
};

export type PostScreenProps = RouteProp<RootStackParamList, 'Post'>;