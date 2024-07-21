using API.Data;
using API.Interface;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection service, IConfiguration configure)
        {
            service.AddControllers();
            service.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(configure.GetConnectionString("DafaultConnection"));
            });
            service.AddCors();
            service.AddScoped<ITokenService, TokenService>();

            return service;
        }
    }
}