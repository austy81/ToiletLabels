using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Mvc;
using ToiletLabelsWeb.DTOs;

namespace ToiletLabelsWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LabelsDataController : ControllerBase
    {
        private BlobServiceClient blobServiceClient;

        public LabelsDataController()
        {
            var connectionString = Environment.GetEnvironmentVariable("AZURE_STORAGE_CONNECTION_STRING") ?? "unknown";
            blobServiceClient = new BlobServiceClient(connectionString);
        }

        [HttpGet]
        public IEnumerable<LabelsPair> Get()
        {
            var labels = new List<LabelsPair>();

            string containerName = "toiletlabels";
            var blobsContainer = blobServiceClient.GetBlobContainerClient(containerName);
            var labelBlobs = blobsContainer.GetBlobs();
            foreach (var blob in labelBlobs)
            {
                labels.Add(new LabelsPair() { PlaceName = blob.Name });
            }

            return labels;
        }

    }
}
