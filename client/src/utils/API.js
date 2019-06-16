import axios from 'axios';

const ajax = axios.create({
  headers: {
    'Content-type': 'application/json'
  }
});

export default {

  searchBooks: function(query) {
    return ajax.get('/api/google', { params: { q: query } });
  },

  getSavedBooks: function() {
    return ajax.get('/api/books');
  },

  deleteBook: function(id) {
    return ajax.delete(`/api/books/${id}`);
  },

  saveBook: function(bookData) {
    return ajax.post('/api/books', bookData);
  }
};
