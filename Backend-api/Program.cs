using Backend_api.Service;
using Backend_api.GraphQL;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<BookService>();

builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>(); 


var app = builder.Build();

app.MapGraphQL();

app.Run();
