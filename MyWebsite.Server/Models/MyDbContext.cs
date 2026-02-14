using Microsoft.EntityFrameworkCore;

namespace MyWebsite.Server.Models;

public class MyDbContext(DbContextOptions<MyDbContext> options) : DbContext(options)
{
    public DbSet<User> Users { get; set; }
}

public class User
{
    public int Id { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public DateTime CreatedDate { get; set; }
    public bool IsActive { get; set; }
}