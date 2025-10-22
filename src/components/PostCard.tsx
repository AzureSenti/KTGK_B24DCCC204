import { Link } from "react-router-dom";

import { Post } from "../types/Post";

interface PostCardProps {
    post: Post;
    requestDelete: (id: string) => void; // Hàm yêu cầu xóa
    confirmDelete: () => void; // Hàm xác nhận xóa
    cancelDelete: () => void; // Hàm hủy xóa
    isDeleting: boolean; // Trạng thái đang chờ xác nhận xóa
}

export const PostCard: React.FC<PostCardProps> = ({
                                               post,
                                               requestDelete,
                                               confirmDelete,
                                               cancelDelete,
                                               isDeleting,
                                           }) => {
    // Rút gọn mô tả
    const shortDescription = post.content.length > 100
        ? post.content.substring(0, 100) + '...'
        : post.content;

    // Định dạng ngày
    const formattedDate = new Date(post.createdAt).toLocaleDateString('vi-VN');

    return (
        <div className="post-card">
            <img
                src={post.thumbnailUrl}
                alt={post.title}
                className="post-card-img"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/ccc/999?text=Image+Error')}
            />
            <div className="post-card-content">
                <span className="post-card-category">{post.category}</span>
                <h3 className="post-card-title">{post.title}</h3>
                <div className="post-card-meta">
                    <span>By {post.author}</span>
                    <span>{formattedDate}</span>
                </div>
                <p className="post-card-desc">{shortDescription}</p>
                <div className="post-card-actions">
                    <Link to={`/posts/${post.id}`} className="btn btn-secondary">
                        Đọc thêm
                    </Link>
                    {isDeleting ? (
                        <div className="confirm-delete">
                            <span className="confirm-text">Xóa?</span>
                            <button onClick={confirmDelete} className="btn btn-danger btn-sm">
                                Có
                            </button>
                            <button onClick={cancelDelete} className="btn btn-secondary btn-sm">
                                Không
                            </button>
                        </div>
                    ) : (
                        <button onClick={() => requestDelete(post.id)} className="btn btn-danger">
                            Xóa
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
