using Backend_api.Models;
using Backend_api.Service;
using HotChocolate;

namespace Backend_api.GraphQL
{
    public class Mutation
    {
        public Book CreateBook(string title, BookStatus status, [Service] BookService service) => service.CreateBook(title, status);
    }
}
