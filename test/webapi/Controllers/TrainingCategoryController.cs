using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using webapi.Datas;
using System.Data;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using System.Text.Json;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TrainingCategoryController : Controller
    {
        private readonly DataDbContext _db;
        public TrainingCategoryController(DataDbContext db)
        {
            _db = db;
        }

        #region get all training categories with training categorie Name optional parameter

        [HttpGet("/trainingCategory")]
        [AllowAnonymous]
        public IActionResult GetAll()
        {
            return Ok(_db.Categories.Include(t => t.Trainings).ToList());
        }

        #endregion
    }
}
