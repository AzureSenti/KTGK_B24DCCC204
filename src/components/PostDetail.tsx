import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Post } from '../types/Post';


interface PostDetailProps {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export const PostDetail: React.FC<PostDetailProps> = ({ posts, setPosts }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [isDeleting, setIsDeleting] = useState(false);
    const [showDeletedMessage, setShowDeletedMessage] = useState(false);

    const post = posts.find((p) => p.id === id);

    if (!post) {
        return (
            <div className="post-detail-page">
                <h2>Không tìm thấy bài viết</h2>
                <button className="btn btn-secondary" onClick={() => navigate('/')}>
                    Quay lại
                </button>
            </div>
        );
    }

    // Xử lý xóa
    const handleDelete = () => {
        setPosts((prev) => prev.filter((p) => p.id !== id));
        setShowDeletedMessage(true);
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    if (showDeletedMessage) {
        return (
            <div className="post-detail-page">
                <div className="notification success">Đã xóa bài viết thành công!</div>
            </div>
        );
    }

    const formattedDate = new Date(post.createdAt).toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <div className="post-detail-page">
            <h1 className="post-detail-title">{post.title}</h1>
            <div className="post-detail-meta">
                <span>Tác giả: {post.author}</span>
                <span>Ngày đăng: {formattedDate}</span>
                <span>Thể loại: {post.category}</span>
            </div>
            <img
                src={post.thumbnailUrl}
                alt={post.title}
                className="post-detail-img"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x400/ccc/999?text=Image+Error')}
            />
            <div
                className="post-detail-content"

                style={{ whiteSpace: 'pre-wrap' }}
            >
                {post.content}
            </div>

            <div className="post-detail-actions">
                <button className="btn btn-secondary" onClick={() => navigate('/')}>
                    Quay lại
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/posts/edit/${id}`)}
                >
                    Chỉnh sửa
                </button>

                {isDeleting ? (
                    <div className="confirm-delete-detail">
                        <span>Bạn có chắc?</span>
                        <button onClick={handleDelete} className="btn btn-danger btn-sm">
                            Xác nhận Xóa
                        </button>
                        <button onClick={() => setIsDeleting(false)} className="btn btn-secondary btn-sm">
                            Hủy
                        </button>
                    </div>
                ) : (
                    <button className="btn btn-danger" onClick={() => setIsDeleting(true)}>
                        Xóa bài viết
                    </button>
                )}
            </div>
        </div>
    );
};
