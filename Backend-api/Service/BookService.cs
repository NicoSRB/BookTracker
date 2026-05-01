using Backend_api.Models;

namespace Backend_api.Service
{
    public class BookService
    {
        private readonly List<Book> _books = new();
        private int _nextId = 1;
        
        private readonly ILogger<BookService> _logger;

        public BookService(ILogger<BookService> logger)
        {
            _logger = logger;
        }
        public Book CreateBook(string title, BookStatus status)
        {
            var book = new Book
            {
                Id = _nextId,
                Title = title,
                Status = status
            };

            _logger.LogInformation("Creating book: title='{Title}', status='{Status}'", title, status);
            _books.Add(book);
            _nextId++;
            return book; 
        }

        public Book UpdateBook(int id, BookStatus status)
        {
            var book = _books.FirstOrDefault(b => b.Id == id);
            if (book == null)
                throw new Exception("Book not found");

            book.Status = status;
            return book;
        }
        public IEnumerable<Book> GetBooks() => _books;

        public IEnumerable<Book> GetByStatus(BookStatus status)
        => _books.Where(b => b.Status == status);  

    }
}
