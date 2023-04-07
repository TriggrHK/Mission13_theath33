using Microsoft.AspNetCore.Mvc;
using MovieAPI.Modules;

namespace MovieAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;

        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<HiltonMovie> Get()
        {
            //return context.Movies.ToArray();
            return context.Movies
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title)
                .ToArray();
        }
    }
}
