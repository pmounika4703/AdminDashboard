import React from 'react';
import './index.css';

const PostsTable = ({ posts, onDelete, onHide }) => {
    const handleDeleteClick = (postId) => {
        onDelete(postId);
    };

    const handleHideClick = (postId) => {
        onHide(postId);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Post ID</th>
                        <th>Caption</th>
                        <th>Media URL</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.post_id} style={{ display: post.hidden ? 'none' : 'table-row' }}>
                            <td>{post.post_id}</td>
                            <td>{post.caption}</td>
                            <td>{post.media_url}</td>
                            <td>
                                <button onClick={() => handleDeleteClick(post.post_id)}>Delete</button>
                                <button onClick={() => handleHideClick(post.post_id)}>
                                    {post.hidden ? 'Unhide' : 'Hide'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PostsTable;
