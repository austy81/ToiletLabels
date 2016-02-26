using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using ToiletLabels.Models;
using Microsoft.Extensions.Logging;
using System.Linq;

namespace ToiletLabels.Controllers
{
    [Route("api/[controller]")]
    public class ToiletLabelsController : Controller
    {
        private readonly ILogger<ToiletLabelsController> _logger;
        private readonly ToiletContext _dataContext;

        public ToiletLabelsController(ILogger<ToiletLabelsController> logger, ToiletContext dataContext)
        {
            _logger = logger;
            _dataContext = dataContext;
            _dataContext.Database.EnsureCreated();
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<ToiletLabel> Get()
        {
            return _dataContext.ToiletLabels.ToList();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]ToiletLabel value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]ToiletLabel toiletLabel)
        {

        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _dataContext.ToiletLabels.Remove(new ToiletLabel { Id = id });
            _dataContext.SaveChanges();
        }
    }
}
