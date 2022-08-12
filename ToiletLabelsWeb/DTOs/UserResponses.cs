namespace ToiletLabelsWeb.DTOs
{
    public class UserResponses
    {
        public string UserId { get; set; } = string.Empty;
        public IEnumerable<LabelResponse> Responses { get; set; } = new List<LabelResponse>();
    }

    public class LabelResponse
    {
        public string Id { get; set; } = string.Empty;
        public bool Voted { get; set; }
        public long VoteDuration { get; set; }
    }
}
