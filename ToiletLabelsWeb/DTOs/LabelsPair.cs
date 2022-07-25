namespace ToiletLabelsWeb.DTOs
{
    public class LabelsPair
    {
        public string PlaceName { get; set; }
        public string MalePictureLink { get; set; }
        public string FemalePictureLink { get; set; }

        public static LabelsPair GetRandom() {
            var rand = new Random();
            var pairNo = rand.Next(1, 100);
            return new LabelsPair()
            {
                PlaceName = $"Place {pairNo}",
                MalePictureLink = $"Male{pairNo}",
                FemalePictureLink = $"Female{pairNo}"
            };
        }
    }

}
