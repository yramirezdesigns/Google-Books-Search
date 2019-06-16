const express = require('express');
const router = express.Router();
const booksController = require('../../controllers/books');

router
  .route('/')
  .get(booksController.findAll)
  .post(booksController.create);

router
  .route('/:id')
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
