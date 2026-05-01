using Backend_api.Models;
using System.Security.Cryptography.X509Certificates;

namespace Backend_api.Service
{
    public class BookService
    {
        private readonly List<Book> _books = new();
        private int _nextId = 1; 

        public Book CreateBook(string title, BookStatus status)
        {
            var book = new Book
            {
                Id = _nextId,
                Title = title,
                Status = status
            }; 

        }
        public IEnumerable<Book> GetALl() => _books;

        public IEnumerable<Book> GetByStatus(BookStatus status)
        => _books.Where(b => b.Status == status);  

    }
}
