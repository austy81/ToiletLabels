using Azure.Storage.Blobs.Models;
using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Mvc;
using ToiletLabelsWeb.DTOs;
using ToiletLabelsWeb.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToiletLabelsWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserResponseController : ControllerBase
    {
        private readonly ICosmosDbService _cosmosDbService;
        public UserResponseController(ICosmosDbService cosmosDbService)
        {
            _cosmosDbService = cosmosDbService;
        }

        [HttpGet]
        public string Get()
        {
            return "uiiii";
        }

        [HttpPost]
        public async Task Post([FromBody] IEnumerable<LabelResponse> value)
        {
            await _cosmosDbService.AddUserResponsesAsync(value);
        }
    }
}
