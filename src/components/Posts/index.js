import React, { useContext } from 'react';
import PostsTable from '../PostsTable';
import Navbar from '../Navbar';
import KPIBox from '../KPIBox';
import { AppContext } from '../../context/AppContext';
import './index.css';

const Posts = () => {
    const { posts, setPosts } = useContext(AppContext);

    const handleDelete = (postId) => {
        const updatedPosts = posts.filter(post => post.post_id !== postId);
        setPosts(updatedPosts);
    };

    const handleHide = (postId) => {
        const updatedPosts = posts.map(post =>
            post.post_id === postId ? { ...post, hidden: !post.hidden } : post
        );
        setPosts(updatedPosts);
    };

    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const recentPosts = posts.filter(post => new Date(post.timestamp) >= twentyFourHoursAgo).length;

    return (
        <div className="container">
            <Navbar />
            <div className="postsContainer">
                <h1 className="postsHead">Posts</h1>
                <div className="kpi-container">
                    <KPIBox title="Total Posts" value={posts.length} />
                    <KPIBox title="Posts in Last 24 Hours" value={recentPosts} />
                </div>
                <PostsTable posts={posts} onDelete={handleDelete} onHide={handleHide} />
            </div>
        </div>
    );
};

export default Posts;
