import React, { useContext } from 'react';
import UsersTable from '../UsersTable';
import Navbar from '../Navbar';
import KPIBox from '../KPIBox';
import { AppContext } from '../../context/AppContext';
import './index.css';

const Users = () => {
    const { users, setUsers } = useContext(AppContext);

    const handleEdit = (userId, updatedUser) => {
        const updatedUsers = users.map(user =>
            user.user_id === userId ? { ...user, ...updatedUser } : user
        );
        setUsers(updatedUsers);
    };

    const handleDelete = (userId) => {
        const updatedUsers = users.filter(user => user.user_id !== userId);
        setUsers(updatedUsers);
    };

    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const activeUsers = users.filter(user => new Date(user.last_active) >= twentyFourHoursAgo).length;

    return (
        <div className="container">
            <Navbar />
            <div className="usersContainer">
                <h1 className="usersHead">Users</h1>
                <div className="kpi-container">
                    <KPIBox title="Total Users" value={users.length} />
                    <KPIBox title="Active Users in Last 24 Hours" value={activeUsers} />
                </div>
                <UsersTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
        </div>
    );
};

export default Users;
