# Recipe Realm - PHP & MySQL Interactive Web Application

This project is Phase 3 of the Mini Project: Interactive Web Application Development for the module **ICT 2204 / COM 2303 – Web Design and Technologies**. It has been upgraded to include complete backend functionality using PHP and MySQL.

## Setup Instructions

### 1. How to Import the Database

1. Open XAMPP or WAMP and start both the **Apache** and **MySQL** services.
2. Open your web browser and navigate to phpMyAdmin (e.g., `http://localhost/phpmyadmin`).
3. Create a new database named exactly `recipe_realm` (ensure Collation is set to `utf8mb4_unicode_ci` or standard).
4. Select the newly created `recipe_realm` database.
5. Click on the **"Import"** tab at the top.
6. Click "Choose File" and select the `database.sql` file provided in this repository along with the source code.
7. Scroll down and click **"Import"** (or "Go"). This will create the `users`, `recipes`, and `messages` tables automatically.

### 2. How to Run the Project using XAMPP/WAMP

1. Move or clone the entire project folder (e.g., `RecipeRealm`) into your local server's root directory:
   - For XAMPP: the directory is `C:\xampp\htdocs\RecipeRealm\`
   - For WAMP: the directory is `C:\wamp64\www\RecipeRealm\`
2. Open your web browser.
3. Type `http://localhost/RecipeRealm/` into the address bar.
4. You will be greeted by the home page. Try creating a new account from the "Login / Signup" button, adding a new customized recipe, exploring your profile dashboard, or submitting a form on the Contact Us page!

### 3. Submission Reminder

- Push all project files including the `database.sql` and this `README.md` to your GitHub Repository.
- After updating your GitHub repository, **make sure to copy the publicly accessible link and paste it into the text field in the LMS submission page** to avoid losing marks!

## Project Structure Highlights

- `/auth/`: Contains separate `register.php`, `login.php`, and `logout.php` to handle secure session endpoints.
- `index.php`: The main Single Page Application hub that uses asynchronous JavaScript (Fetch API) to seamlessly communicate with the backend.
- `api.php`: Handles complex requests and queries for loading recipes securely using Prepared Statements to prevent SQL injection.
- `contact.php`: Processed through the backend to store user queries into the `messages` table within the database.
- `dashboard.php`: Manages user endpoint redirections seamlessly securing authenticated areas.
