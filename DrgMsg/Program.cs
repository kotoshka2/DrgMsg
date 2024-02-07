namespace DrgMsg
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var services = builder.Services;
            services.AddSignalRCore();
            services.AddCors(options =>
            {
                options.AddPolicy("ClientPermission", policy =>
                {
                    policy.AllowAnyHeader()
                        .AllowAnyMethod()
                        .WithOrigins("http://localhost:3000")
                        .AllowCredentials();
                });
            });

            var app = builder.Build();

            app.MapGet("/", () => "Hello World!");
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseCors("ClientPermission");
            app.UseRouting();
            
            
            app.Run();
        }
    }
}