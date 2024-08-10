import React from 'react';
import './index.css';
import Modal from '../Modal';

const UsersTable = ({ users, onEdit, onDelete }) => {
    const [editingUser, setEditingUser] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);

    const handleEditClick = (user) => {
        setEditingUser(user);
        setShowModal(true);
    };

    const handleSave = (updatedUser) => {
        onEdit(editingUser.user_id, updatedUser);
        setShowModal(false);
        setEditingUser(null);
    };

    const handleCancel = () => {
        setShowModal(false);
        setEditingUser(null);
    };

    const handleDeleteClick = (userId) => {
        onDelete(userId);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="user-id">User ID</th>
                        <th className="user-name">Username</th>
                        <th className='name'>Name</th>
                        <th className='email'>Email</th>
                        <th className='actions'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.user_id}>
                            <td>{user.user_id}</td>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleEditClick(user)}>Edit</button>
                                <button onClick={() => handleDeleteClick(user.user_id)}>Ban</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && (
                <Modal
                    user={editingUser}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

export default UsersTable;
