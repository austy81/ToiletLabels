using Microsoft.Azure.Cosmos;
using ToiletLabelsWeb.DTOs;

namespace ToiletLabelsWeb.Services
{
    public class CosmosDbService : ICosmosDbService
    {
        private Container _container;

        public CosmosDbService(
            CosmosClient dbClient,
            string databaseName,
            string containerName)
        {
            _container = dbClient.GetContainer(databaseName, containerName);
        }

        public async Task AddUserResponsesAsync(IEnumerable<LabelResponse> UserResponses)
        {
            await _container.CreateItemAsync(UserResponses, new PartitionKey("X"));
        }

        public async Task<IEnumerable<UserResponses>> GetUserResponsessAsync(string queryString)
        {
            var query = _container.GetItemQueryIterator<UserResponses>(new QueryDefinition(queryString));
            List<UserResponses> results = new List<UserResponses>();
            while (query.HasMoreResults)
            {
                var response = await query.ReadNextAsync();

                results.AddRange(response.ToList());
            }

            return results;
        }
    }
}
