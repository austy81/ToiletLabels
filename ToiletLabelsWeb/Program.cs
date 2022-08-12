using Azure.Storage.Blobs;
using System.Configuration;
using ToiletLabelsWeb.Init;
using ToiletLabelsWeb.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

var CosmosDB = builder.Configuration.GetSection("CosmosDb");
builder.Services.AddSingleton<ICosmosDbService>(CosmosClientInit.InitializeCosmosClientInstanceAsync(CosmosDB).GetAwaiter().GetResult());
builder.Services.AddSingleton<BlobServiceClient>(BlobServiceProvider.InitializeBlobServiceClientInstance());

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
