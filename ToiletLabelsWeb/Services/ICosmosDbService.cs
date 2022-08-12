using ToiletLabelsWeb.DTOs;

namespace ToiletLabelsWeb.Services
{
    public interface ICosmosDbService
    {
        Task AddUserResponsesAsync(IEnumerable<LabelResponse> UserResponses);

    }
}