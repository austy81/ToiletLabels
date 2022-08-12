using Azure;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.AspNetCore.Mvc;
using ToiletLabelsWeb.DTOs;

namespace ToiletLabelsWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LabelsDataController : ControllerBase
    {
        private BlobServiceClient blobServiceClient;

        public LabelsDataController(BlobServiceClient _blobServiceClient)
        {
            blobServiceClient = _blobServiceClient;
        }

        [HttpGet]
        public IEnumerable<LabelsPair> Get()
        {
            string containerName = "toiletlabels";
            var blobsContainer = blobServiceClient.GetBlobContainerClient(containerName);
            var labelBlobs = blobsContainer.GetBlobs(BlobTraits.All);
            return GetPairs(labelBlobs);
        }

        private IEnumerable<LabelsPair> GetPairs(Pageable<BlobItem> labelBlobs)
        {
            var labelPairs = new List<LabelsPair>();
            foreach (var maleBlob in labelBlobs.Where(blob => blob.Metadata["gender"] == "male"))
            {
                var blobId = maleBlob.Metadata["id"];
                var femaleBlob = labelBlobs.First(b => b.Metadata["id"] == blobId);
                
                var place = "unknown";
                if (!femaleBlob.Metadata.TryGetValue("place", out place))
                    maleBlob.Metadata.TryGetValue("place", out place);

                var url = "unknown";
                if (!femaleBlob.Metadata.TryGetValue("url", out url))
                    maleBlob.Metadata.TryGetValue("url", out url);

                labelPairs.Add(new LabelsPair() { Id = blobId, PlaceName = place, FemalePictureLink = femaleBlob.Name, MalePictureLink = maleBlob.Name, url = url });
            }
            return labelPairs;
        }
    }
}
