export const createTableQuery = `CREATE TABLE posts (_id serial PRIMARY KEY,email VARCHAR ( 100 ) 
    NOT NULL,first_name VARCHAR(50) NOT NULL,last_name VARCHAR(50) NOT NULL, 
    item_lost VARCHAR(50) NOT NULL,
    item_description VARCHAR(280) NOT NULL,
    location VARCHAR(5) NOT NULL
 );
 
    INSERT INTO posts (email, first_name, last_name, item_lost, item_description, location)
    VALUES ('123@gmail.com', 'Juliana', 'Morrelli', 'iphone', 'iphone 12 blue case', '11779');

    INSERT INTO posts (email, first_name, last_name, item_lost, item_description, location)
    VALUES ('345@gmail.com', 'Josh', 'Paynter', 'computer', 'macbook', '12759');

    INSERT INTO posts (email, first_name, last_name, item_lost, item_description, location)
    VALUES ('678@gmail.com', 'Jacob', 'Martin', 'sweatshirt', 'grey', '32567');
 `

export const dropTableQuery=`DROP TABLE posts`





