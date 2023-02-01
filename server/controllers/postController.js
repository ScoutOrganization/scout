const db = require('../models/model.js');

const postController = {};

postController.getAllPosts = async (req, res, next) => {
  try {
    const getPostsQuery = 'SELECT * FROM posts';
    //use our previously stated getPostsQuery to query all posts from the data base, destructuring out the key
    const { rows } = await db.query(getPostsQuery);
    //save the first index of rows to res.locals.allPosts
    res.locals.allPosts = rows;
    return next();
  } catch (err) {
    return next({
      log: 'Error found in postController.getPosts',
      message: `Error when trying to get posts from DB: ${err}`,
    });
  }
};

postController.createPost = async (req, res, next) => {
  try {
    //deconstruct information from req.body
    const {
      email,
      first_name,
      last_name,
      item_lost,
      item_description,
      location,
    } = req.body;
    const createPostQuery = {
      text: 'INSERT INTO posts(email, first_name, last_name, item_lost, item_description, location) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      values: [
        email,
        first_name,
        last_name,
        item_lost,
        item_description,
        location,
      ],
    };
    const { rows } = await db.query(createPostQuery);
    console.log(rows);
    res.locals.allPosts = rows[0];
    return next();
  } catch (err) {
    return next({
      log: 'Error found in postController.createPost',
      message: `Error when trying to create post in DB: ${err}`,
    });
  }
};

postController.getUserPosts = async (req, res, next) => {
  try {
    const { email } = req.query;
    const values = [email];
    const getUserPostsQuery = `SELECT * FROM posts WHERE(email = $1)`;
    const { rows } = await db.query(getUserPostsQuery, values);

    res.locals.userPosts = rows;
    return next();
  } catch (err) {
    return next({
      log: 'Error found in postController.getUserPost',
      message: `Error when trying to get user's posts in DB: ${err}`,
    });
  }
};

postController.deletePost = async (req, res, next) => {
  try {
    //check to see that the username of the user currently trying to delete the post, matches user
    //who created that post
    const { postID } = req.body;
    const deletePostQuery = {
      text: `DELETE FROM posts WHERE(_id = $1)`,
      values: [postID],
    };
    await db.query(deletePostQuery);
    return next();
  } catch (err) {
    return next({
      log: 'Error found in postController.deletePost',
      message: `Error when trying to delete post in DB: ${err}`,
    });
  }
};

postController.updateStatus = async(req, res, next) => {
  try {
    const { _id } = req.body;
    //first check current status of _id row element 
    //if status is true, change it to false, vice vera 
    const checkStatus = {
      text: `SELECT status FROM posts WHERE(_id = $1)`,
      values: [_id]
    };
    const { rows } = await db.query(checkStatus)
    const statusUpdateQuery = {
      text: `UPDATE posts SET status = ${!rows[0].status} WHERE(_id = $1)`,
      values: [_id],
    };
    await db.query(statusUpdateQuery)
    res.locals.status = !rows[0].status
    return next()
  } catch(err) {
    return({
      log: 'Error found in postController.updateStatus',
      message: `Error when trying to update status: ${err}`
    })
  }
}

module.exports = postController;
