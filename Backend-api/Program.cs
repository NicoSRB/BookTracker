using Backend_api.GraphQL;
using Backend_api.Models;
using Backend_api.Service;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddSingleton<BookService>();

builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>()
    .AddType<BookType>()         
    .AddEnumType<BookStatus>();


var app = builder.Build();

app.UseCors();
app.MapGraphQL();

app.Run();
