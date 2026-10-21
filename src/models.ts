export interface User {
  id: string;
  name: string;
  role: 'student' | 'mentor';
}

export interface Post {
  id: string;
  authorId: string;
  title: string;
}
