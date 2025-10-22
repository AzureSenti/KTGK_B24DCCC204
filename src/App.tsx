import React, { useState, useEffect} from 'react';
import {
    HashRouter,
    Routes,
    Route,

} from 'react-router-dom';

import { Post } from './types/Post';
import { INITIAL_POSTS } from './data/initialData';
import { Navbar } from './components/Navbar';
import { PostList } from './components/PostList';
import { PostDetail } from './components/PostDetail';
import { CreatePost } from './pages/CreatePost';
import { EditPost } from './pages/EditPost';
import { EmbeddedStyles } from './EmbeddedStyles';




const App: React.FC = () => {

    const [posts, setPosts] = useState<Post[]>(() => {
        try {
            const storedPosts = localStorage.getItem('blogPosts');
            return storedPosts ? JSON.parse(storedPosts) : INITIAL_POSTS;
        } catch (error) {
            console.error("Failed to parse posts from localStorage", error);
            return INITIAL_POSTS;
        }
    });

    useEffect(() => {
        localStorage.setItem('blogPosts', JSON.stringify(posts));
    }, [posts]);

    return (
        <HashRouter>
            <EmbeddedStyles /> {}
            <div className="app-container">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route
                            path="/"
                            element={<PostList posts={posts} setPosts={setPosts} />}
                        />
                        <Route
                            path="/create"
                            element={<CreatePost setPosts={setPosts} />}
                        />
                        <Route
                            path="/posts/:id"
                            element={<PostDetail posts={posts} setPosts={setPosts} />}
                        />
                        <Route
                            path="/posts/edit/:id"
                            element={<EditPost posts={posts} setPosts={setPosts} />}
                        />
                        {/* Route dự phòng cho trang chủ */}
                        <Route
                            path="/posts"
                            element={<PostList posts={posts} setPosts={setPosts} />}
                        />
                    </Routes>
                </main>
            </div>
        </HashRouter>
    );
};

export default App;
