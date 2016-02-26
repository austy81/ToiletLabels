using Microsoft.Data.Entity;

namespace ToiletLabels.Models
{
    public class ToiletContext : DbContext
    {
        public DbSet<ToiletLabel> ToiletLabels { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite($"Filename=ToiletLabels.db");
        }

    }

    public class ToiletLabel
    {
        public int Id { get; set; }
        public byte[] LabelImageLaidies { get; set; }
        public byte[] LabelImageGentleman { get; set; }
        public string Uploader { get; set; }
        public string UploaderEmail {get; set; }
        public string PlaceUrl { get; set; }
        public string PlaceName { get; set; }
        public decimal PlaceLat { get; set; }
        public decimal placeLng { get; set; }
    }
}
