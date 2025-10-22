export type Category = 'Công nghệ' | 'Du lịch' | 'Ẩm thực' | 'Đời sống' | 'Khác';

export interface Post {
    id: string;
    title: string;
    author: string;
    content: string;
    thumbnailUrl: string;
    category: Category;
    createdAt: string;
}