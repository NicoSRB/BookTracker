using Backend_api.Models;
using HotChocolate.Types;

public class BookType : ObjectType<Book>
{
    protected override void Configure(IObjectTypeDescriptor<Book> descriptor)
    {
        descriptor.Field(b => b.Id);
        descriptor.Field(b => b.Title);
        descriptor.Field(b => b.Status)
                  .Type<EnumType<BookStatus>>();
    }
}