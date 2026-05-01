using Backend_api.Models;
using Backend_api.Service;
using HotChocolate;

namespace Backend_api.GraphQL
{
    public class Query
    {
        public IEnumerable<Book> GetBooks([Service] BookService service) => service.GetALl();
        public IEnumerable<Book> GetBooksByStatus(BookStatus status, [Service] BookService service) => service.GetByStatus(status);
    }
}
