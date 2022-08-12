using Azure.Storage.Blobs;

namespace ToiletLabelsWeb.Init
{
    public static class BlobServiceProvider
    {
        public static BlobServiceClient InitializeBlobServiceClientInstance()
        {
            var connectionString = Environment.GetEnvironmentVariable("AZURE_STORAGE_CONNECTION_STRING") ??
            "DefaultEndpointsProtocol=https;AccountName=toiletlabelsstorage;AccountKey=;EndpointSuffix=core.windows.net";
            return new BlobServiceClient(connectionString);
        }
    }
}
