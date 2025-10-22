import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../types/Post";
import { PostForm } from "../components/PostForm";


interface EditPostProps {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export const EditPost: React.FC<EditPostProps> = ({ posts, setPosts }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [showSuccess, setShowSuccess] = useState(false);

    const postToEdit = posts.find((p) => p.id === id);

    const handleSubmit = (formData: Omit<Post, 'id' | 'createdAt'>) => {
        if (!postToEdit) return; // Không tìm thấy bài viết

        const updatedPost: Post = {
            ...postToEdit, // Giữ lại id và createdAt
            ...formData, // Cập nhật các trường còn lại
        };

        setPosts((prev) =>
            prev.map((p) => (p.id === id ? updatedPost : p))
        );

        setShowSuccess(true);
        setTimeout(() => {
            navigate(`/posts/${id}`);
        }, 2000);
    };

    const handleCancel = () => {
        navigate(`/posts/${id}`);
    };

    if (!postToEdit) {
        return (
            <div className="page-container">
                <h2>Không tìm thấy bài viết</h2>
                <button className="btn btn-secondary" onClick={() => navigate('/')}>
                    Quay lại
                </button>
            </div>
        );
    }

    return (
        <div className="page-container">
            <h2>Chỉnh sửa bài viết</h2>
            {showSuccess && (
                <div className="notification success">Cập nhật thành công!</div>
            )}
            {!showSuccess && (
                <PostForm
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                    initialData={postToEdit}
                    submitText="Cập nhật"
                />
            )}
        </div>
    );
};
