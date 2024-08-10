// Posts Data
export const posts = [
    // Posts within the last 24 hours
    { post_id: 1, caption: 'Beautiful sunset', media_url: 'https://example.com/sunset.jpg', timestamp: new Date().toISOString() }, // Recent
    { post_id: 2, caption: 'Delicious pasta', media_url: 'https://example.com/pasta.jpg', timestamp: new Date(new Date().getTime() - 10 * 60 * 60 * 1000).toISOString() }, // Recent
    { post_id: 3, caption: 'City lights', media_url: 'https://example.com/city.jpg', timestamp: new Date(new Date().getTime() - 20 * 60 * 60 * 1000).toISOString() }, // Recent
    { post_id: 4, caption: 'Morning coffee', media_url: 'https://example.com/coffee.jpg', timestamp: new Date(new Date().getTime() - 5 * 60 * 60 * 1000).toISOString() }, // Recent
    { post_id: 5, caption: 'A day in the park', media_url: 'https://example.com/park.jpg', timestamp: new Date(new Date().getTime() - 15 * 60 * 60 * 1000).toISOString() }, // Recent
    { post_id: 6, caption: 'Weekend getaway', media_url: 'https://example.com/getaway.jpg', timestamp: new Date(new Date().getTime() - 22 * 60 * 60 * 1000).toISOString() }, // Recent
    // Posts older than 24 hours
    { post_id: 7, caption: 'Old post', media_url: 'https://example.com/old.jpg', timestamp: new Date(new Date().getTime() - 25 * 60 * 60 * 1000).toISOString() }, // Not recent
    { post_id: 8, caption: 'Another old post', media_url: 'https://example.com/another-old.jpg', timestamp: new Date(new Date().getTime() - 30 * 60 * 60 * 1000).toISOString() }, // Not recent
];

// Users Data
export const users = [
    // Active users within the last 24 hours
    { user_id: 1, username: 'john_doe', name: 'John Doe', email: 'john@example.com', last_active: new Date(Date.now() - 1000 * 60 * 10).toISOString() }, // Active 10 minutes ago
    { user_id: 2, username: 'jane_smith', name: 'Jane Smith', email: 'jane@example.com', last_active: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() }, // Active 2 hours ago
    { user_id: 3, username: 'robert_brown', name: 'Robert Brown', email: 'robert@example.com', last_active: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString() }, // Active 5 hours ago
    { user_id: 4, username: 'lucy_martin', name: 'Lucy Martin', email: 'lucy@example.com', last_active: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString() }, // Active 12 hours ago
    // Non-active users (not active within the last 24 hours)
    { user_id: 5, username: 'mary_jones', name: 'Mary Jones', email: 'mary@example.com', last_active: new Date(Date.now() - 1000 * 60 * 60 * 25).toISOString() }, // Active 25 hours ago
    { user_id: 6, username: 'charlie_davis', name: 'Charlie Davis', email: 'charlie@example.com', last_active: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString() }, // Active 2 days ago
    { user_id: 7, username: 'emma_clark', name: 'Emma Clark', email: 'emma@example.com', last_active: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString() }, // Active 3 days ago
    { user_id: 8, username: 'david_lee', name: 'David Lee', email: 'david@example.com', last_active: new Date(Date.now() - 1000 * 60 * 60 * 100).toISOString() }, // Active 100 hours ago

];
