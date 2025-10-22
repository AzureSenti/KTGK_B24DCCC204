import React, {ChangeEvent, FormEvent, useState} from "react";
import { Post, Category } from "../types/Post";

type FormErrors = {
    [key in keyof Omit<Post, 'id' | 'createdAt' | 'thumbnailUrl'>]?: string;
};

interface PostFormProps {
    onSubmit: (post: Omit<Post, 'id' | 'createdAt'>) => void;
    onCancel: () => void;
    initialData?: Post;
    submitText: string;
}

export const PostForm: React.FC<PostFormProps> = ({ onSubmit, onCancel, initialData, submitText }) => {
    // State cho dữ liệu form
    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        author: initialData?.author || '',
        thumbnailUrl: initialData?.thumbnailUrl || '',
        content: initialData?.content || '',
        category: initialData?.category || ('Công nghệ' as Category),
    });

    // State cho lỗi validation
    const [errors, setErrors] = useState<FormErrors>({});

    // Xử lý thay đổi input
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Xóa lỗi khi người dùng bắt đầu nhập
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }));
        }
    };

    // Hàm validate
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (formData.title.trim().length < 10) {
            newErrors.title = 'Tiêu đề phải có ít nhất 10 ký tự';
        }
        if (formData.author.trim().length < 3) {
            newErrors.author = 'Tác giả phải có ít nhất 3 ký tự';
        }
        if (formData.content.trim().length < 50) {
            newErrors.content = 'Nội dung phải có ít nhất 50 ký tự';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Xử lý submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    const categories: Category[] = ['Công nghệ', 'Du lịch', 'Ẩm thực', 'Đời sống', 'Khác'];

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Tiêu đề</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                {errors.title && <span className="error-text">{errors.title}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="author">Tác giả</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                />
                {errors.author && <span className="error-text">{errors.author}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="thumbnailUrl">URL ảnh thumbnail</label>
                <input
                    type="text"
                    id="thumbnailUrl"
                    name="thumbnailUrl"
                    value={formData.thumbnailUrl}
                    onChange={handleChange}
                />
                {/* Validation cho URL ảnh là không bắt buộc */}
            </div>

            <div className="form-group">
                <label htmlFor="category">Thể loại</label>
                <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="content">Nội dung bài viết</label>
                <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    rows={10}
                />
                {errors.content && <span className="error-text">{errors.content}</span>}
            </div>

            <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                    {submitText}
                </button>
                <button type="button" className="btn btn-secondary" onClick={onCancel}>
                    Hủy
                </button>
            </div>
        </form>
    );
};
