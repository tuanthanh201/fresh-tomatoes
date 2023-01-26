## CS348 Group Project
Start by cloning the repository `git clone https://git.uwaterloo.ca/a368gupt1/cs348-project.git cs348`. Make sure you have [Node.js](https://nodejs.org/en/download/) installed

### To run the frontend locally:
1. Run `cd cs348/client`.
2. Run `npm i`.
3. Run `npm run start`. This will run the app in the development mode.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### To run the backend locally:
1. Download and install MySQL on your computer. Instructions can be found [here](https://dev.mysql.com/doc/refman/8.0/en/installing.html).
2. After installing MySQL, create an username, password, and a database.
3. Run `cd cs348`.
4. Run `npm i`.
5. Create a file named `.env` in the source directory. Then paste the following lines into that file, replacing username, password, and database with your database credentials.
```
MYSQL_USERNAME="username"
MYSQL_PASSWORD="password"
MYSQL_DATABASE="database"
```
6. Run `npm run start`.

#### Notes:
- Currently, if you follow all the steps to run the backend locally, the app will create 3 tables inside the chosen database, which are movies, genres, and movieGenre. After that, it will populate the 2 tables movies and genres with some dummy data.
- You can check the dummy data by either using MySQL or checking the files in the `data` directory.
