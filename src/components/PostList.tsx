import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types/Post';
import {PostCard} from './PostCard';


interface PostListProps {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export const PostList: React.FC<PostListProps> = ({ posts, setPosts }) => {
    const [filter, setFilter] = useState('');
    const [deletingId, setDeletingId] = useState<string | null>(null); // State cho confirm xóa

    // Lọc bài viết
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(filter.toLowerCase())
    );

    // Xử lý xóa
    const handleDelete = (id: string) => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        setDeletingId(null); // Đóng confirm sau khi xóa
    };

    return (
        <div className="post-list-page">
            <div className="post-list-header">
                <h2>Tổng số bài viết: {filteredPosts.length}</h2>
                <input
                    type="text"
                    placeholder="Lọc theo tiêu đề..."
                    className="filter-input"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <Link to="/create" className="btn btn-primary">
                    Viết bài mới
                </Link>
            </div>

            <div className="post-list-grid">
                {filteredPosts.map((post) => (
                    <PostCard
                        key={post.id}
                        post={post}
                        isDeleting={deletingId === post.id}
                        requestDelete={() => setDeletingId(post.id)}
                        confirmDelete={() => handleDelete(post.id)}
                        cancelDelete={() => setDeletingId(null)}
                    />
                ))}
            </div>
        </div>
    );
};
