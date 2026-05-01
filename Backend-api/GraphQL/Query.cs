using Backend_api.Models;
using Backend_api.Service;
using HotChocolate;

namespace Backend_api.GraphQL
{
    public class Query
    {

        [GraphQLName("books")]
        public IEnumerable<Book> GetBooks([Service] BookService service)
        => service.GetBooks();

        [GraphQLName("booksByStatus")]
        public IEnumerable<Book> GetBooksByStatus(
            BookStatus status,
            [Service] BookService service)
            => service.GetByStatus(status);
    }
}
