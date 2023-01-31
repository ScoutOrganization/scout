const db = require('../models/model.js');

const postController = {};

postController.getPosts = async (req, res, next) => {
  console.log('in postcontroller middleware');
  try {
    const getPostsQuery = 'SELECT * FROM posts';
    db.query(getPostsQuery, (err, data) => {
      res.locals.allPosts = data.rows;
      console.log(res.locals.allPosts);
      return next();
    });
  } catch (err) {
    return next({
      log: 'Error found in messageController.getPosts',
      message: `Error when trying to get posts from DB: ${err}`,
    });
  }
};

module.exports = postController;
