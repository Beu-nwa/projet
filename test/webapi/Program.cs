using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using webapi.Datas;

var builder = WebApplication.CreateBuilder(args);

#region add dbcontext with sqlServrer and local server to builder service

// Add services to the container.
string connectionString = builder.Configuration.GetConnectionString("DefaultConnection")!;
builder.Services.AddDbContext<DataDbContext>(options => options.UseSqlServer(connectionString));

#endregion
// Add services to the container.

#region To ignore data cycle

builder.Services.AddControllers().AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

#endregion

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseHttpsRedirection();

#region cors

app.UseCors(option =>
{
    option.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
});

#endregion

app.UseAuthorization();

app.MapControllers();

app.Run();
