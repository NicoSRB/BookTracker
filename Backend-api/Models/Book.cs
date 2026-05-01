namespace Backend_api.Models
{
    public enum BookStatus
    {
        WantToRead, 
        Reading, 
        Completed
    }
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public BookStatus Status { get; set; }
    }
}
