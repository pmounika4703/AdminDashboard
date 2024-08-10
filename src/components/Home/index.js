import React, { useContext } from 'react';
import KPIBox from '../KPIBox';
import { AppContext } from '../../context/AppContext';
import Navbar from '../Navbar';
import './index.css';

const Home = () => {
    const { users, posts } = useContext(AppContext);

    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const activeUsers = users.filter(user => new Date(user.last_active) >= twentyFourHoursAgo).length;
    const recentPosts = posts.filter(post => new Date(post.timestamp) >= twentyFourHoursAgo).length;

    return (
        <div className="container">
            <Navbar />
            <div className="homeContainer">
                <h1 className="homeHead">Admin Dashboard</h1>
                <div className="kpi-container">
                    <KPIBox title="Total Users" value={users.length} />
                    <KPIBox title="Total Posts" value={posts.length} />
                    <KPIBox title="Active Users in Last 24 Hours" value={activeUsers} />
                    <KPIBox title="Posts in Last 24 Hours" value={recentPosts} />
                </div>
            </div>
        </div>
    );
};

export default Home;
