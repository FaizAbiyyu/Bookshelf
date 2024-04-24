const {
    addBookHandler,
    getAllBooksHandler,
    getBookHandlerById,
    editBookHandlerById,
    deleteBookHandlerById,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookHandlerById,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookHandlerById,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookHandlerById,
    },
];

module.exports = routes;