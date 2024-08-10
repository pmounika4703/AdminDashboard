# Admin Dashboard for Social Media App

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   ```
   Replace `<repository-url>` with the URL of the repository.

2. **Navigate to the Project Directory**
   ```bash
   cd admin-dashboard
   ```

3. **Install Dependencies**
   Install the necessary dependencies using npm:
   ```bash
   npm install
   ```

4. **Run the Application**
   Start the development server:
   ```bash
   npm start
   ```

5. **Access the Application**
   Open your web browser and navigate to [http://localhost:3000/login](http://localhost:3000/login) to view the dashboard.

## Features

- **Home Page**:
  - Displays Key Performance Indicators (KPIs):
    - **Total Users**: Shows the total number of users.
    - **Total Posts**: Shows the total number of posts.
    - **Active Users in the Last 24 Hours**: Displays the count of users active in the past 24 hours.
    - **Posts Published in the Last 24 Hours**: Displays the count of posts made in the past 24 hours.

- **Users Listing Page**:
  - Displays KPIs:
    - **Total Users**: Shows the total number of users.
    - **Active Users in the Last 24 Hours**: Displays the count of users active in the past 24 hours.
  - Lists all users with details such as:
    - User ID
    - Username
    - Name
    - Email
  - Provides actions:
    - **Edit**: Modify user details.
    - **Ban**: Restrict or deactivate the user.

- **Posts Listing Page**:
  - Displays KPIs:
    - **Total Posts**: Shows the total number of posts.
    - **Posts in Last 24 Hours**: Displays the count of posts made in the past 24 hours.
  - Lists all posts with details such as:
    - Post ID
    - Caption
    - Media URL
  - Provides actions:
    - **Delete**: Remove a post.
    - **Hide**: Hide a post from view.

- **Login Page**:
  - Allows authentication with any email and password.

- **Logout Functionality**:
  - Provides the option to log out from the dashboard.

## Dependencies

- **React.js**: A JavaScript library for building user interfaces.
- **react-router-dom**: A library for handling routing and navigation in React applications.
- **axios**: A promise-based HTTP client for making API requests.
- **styled-components**: A library for styling components using tagged template literals.

## Troubleshooting

- **Invalid Hook Call Error**: Ensure that the versions of React and React DOM match and check for multiple copies of React.
- **Module Not Found**: Verify that all files and paths are correctly referenced.
- **Empty or Overlapping Content**: Review CSS for layout and positioning issues.

Feel free to reach out with any questions or issues you encounter during setup or development.
```
