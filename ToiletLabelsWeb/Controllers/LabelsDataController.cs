using Microsoft.AspNetCore.Mvc;
using ToiletLabelsWeb.DTOs;

namespace ToiletLabelsWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LabelsDataController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<LabelsPair> Get() => Enumerable.Range(1, 5).Select(index => LabelsPair.GetRandom()).ToArray();

    }
}
