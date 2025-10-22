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
            id: crypto.randomUUID(), // Tạo ID ngẫu nhiên
            createdAt: new Date().toISOString(), // Đặt ngày đăng là hiện tại
        };

        setPosts((prev) => [newPost, ...prev]); // Thêm bài mới lên đầu danh sách

        // Hiển thị thông báo thành công và chuyển hướng
        setShowSuccess(true);
        setTimeout(() => {
            navigate('/');
        }, 2000); // Chờ 2 giây rồi về trang chủ
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
            {!showSuccess && ( // Ẩn form sau khi đăng thành công
                <PostForm
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                    submitText="Đăng bài"
                />
            )}
        </div>
    );
};
