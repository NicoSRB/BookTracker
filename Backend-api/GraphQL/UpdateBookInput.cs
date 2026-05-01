using Backend_api.Models;

namespace Backend_api.GraphQL
{
    public record UpdateBookInput(int Id, BookStatus Status);
}
