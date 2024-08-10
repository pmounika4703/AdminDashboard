import React, { createContext, useState, useEffect } from 'react';
import { posts as initialPosts, users as initialUsers } from '../../dummyData';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [posts, setPosts] = useState(initialPosts);
    const [users, setUsers] = useState(initialUsers);

    useEffect(() => {
        // Sync state with local storage can be done if neccessary
    }, [posts, users]);

    return (
        <AppContext.Provider value={{ posts, setPosts, users, setUsers }}>
            {children}
        </AppContext.Provider>
    );
};
