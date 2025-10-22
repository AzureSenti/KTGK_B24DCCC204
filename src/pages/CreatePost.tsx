import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Post} from "../types/Post";
import {PostForm} from "../components/PostForm";

interface CreatePostProps {
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export const CreatePost: React.FC<CreatePostProps> = ({ setPosts }) => {
    const navigate = useNavigate();
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (formData: Omit<Post, 'id' | 'createdAt'>) => {
        const newPost: Post = {
            ...formData,
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
        };

        setPosts((prev) => [newPost, ...prev]);

        setShowSuccess(true);
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="page-container">
            <h2>Viết bài mới</h2>
            {showSuccess && (
                <div className="notification success">Đăng bài thành công!</div>
            )}
            {!showSuccess && (
                <PostForm
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                    submitText="Đăng bài"
                />
            )}
        </div>
    );
};
