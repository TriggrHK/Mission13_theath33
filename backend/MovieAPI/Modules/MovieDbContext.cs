using Microsoft.EntityFrameworkCore;

namespace MovieAPI.Modules
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }

        public DbSet<HiltonMovie> Movies { get; set; }
    }
}
