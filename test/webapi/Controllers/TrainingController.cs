using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Text.Json.Serialization;
using System.Text.Json;
using webapi.Datas;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    //[Authorize]
    public class TrainingController : ControllerBase
    {
        private readonly DataDbContext _db;
        public TrainingController(DataDbContext db)
        {
            _db = db;
        }

        #region get all trainings

        [HttpGet("/training")]
        [AllowAnonymous]
        public IActionResult GetAllTrainings()
        {
            return Ok(_db.Trainings.Include(t => t.Category).ToList());
        }

        #endregion


        #region get trainings with many filter with optional parameters startname and categoryId

        [HttpGet("/training/filter/{minPrice}&{maxPrice}&{minDuration}&{maxDuration}&{minDate}&{maxDate}&{isCertified}")]
        [AllowAnonymous]
        public IActionResult GetTrainingsByManyFilters(int minPrice, int maxPrice, int minDuration, int maxDuration, DateTime minDate, DateTime maxDate, bool isCertified, string? startName, int? categoryId)
        {
            if (startName != null && categoryId != null)
            {
                var trainings = _db.Trainings.Include(t => t.Category).Where(t =>
                    (
                    t.Name.StartsWith(startName) &&
                    t.TrainingCategoryId == categoryId &&
                    t.Price >= minPrice &&
                    t.Price <= maxPrice &&
                    t.DurationDay >= minDuration &&
                    t.DurationDay <= maxDuration &&
                    t.StartDate >= minDate &&
                    t.StartDate <= maxDate &&
                    t.IsCertified == isCertified
                    ));
                return Ok(trainings.ToList());
            }
            else if (startName != null)
            {
                var trainings = _db.Trainings.Include(t => t.Category).Where(t =>
                (
                    t.Name.StartsWith(startName) &&
                    t.Price >= minPrice &&
                    t.Price <= maxPrice &&
                    t.DurationDay >= minDuration &&
                    t.DurationDay <= maxDuration &&
                    t.StartDate >= minDate &&
                    t.StartDate <= maxDate &&
                    t.IsCertified == isCertified
                ));
                return Ok(trainings.ToList());
            }
            else if (categoryId != null)
            {
                var trainings = _db.Trainings.Include(t => t.Category).Where(t =>
                    (
                    t.TrainingCategoryId == categoryId &&
                    t.Price >= minPrice &&
                    t.Price <= maxPrice &&
                    t.DurationDay >= minDuration &&
                    t.DurationDay <= maxDuration &&
                    t.StartDate >= minDate &&
                    t.StartDate <= maxDate &&
                    t.IsCertified == isCertified
                    ));
                return Ok(trainings.ToList());
            }
            else
            {
                var trainings = _db.Trainings.Include(t => t.Category).Where(t =>
                    (
                    t.Price >= minPrice &&
                    t.Price <= maxPrice &&
                    t.DurationDay >= minDuration &&
                    t.DurationDay <= maxDuration &&
                    t.StartDate >= minDate &&
                    t.StartDate <= maxDate &&
                    t.IsCertified == isCertified
                    ));
                return Ok(trainings.ToList());
            }
        }

        #endregion

        //#region get all trainings with trainingName

        //[HttpGet("/training/{startTrainingName}")]
        //[AllowAnonymous]
        //public IActionResult GetTrainingsWithStartName(string startTrainingName)
        //{
        //    return Ok(_db.Trainings.Where(t => t.Name.StartsWith(startTrainingName)).Include(t => t.Category).ToList());
        //}

        //#endregion

        //#region get trainings by category

        //[HttpGet("/training/category/{categoryId}")]
        //[AllowAnonymous]
        //public IActionResult GetTrainingsByCategory(int categoryId)
        //{
        //    return Ok(_db.Trainings.Include(t => t.Category).Where(c => c.TrainingCategoryId == categoryId).ToList());
        //}
        //#endregion

        //#region get trainings by min or max price

        //[HttpGet("/training/price/{min}_{max}")]
        //[AllowAnonymous]
        //public IActionResult GetTrainingsByPrice(int min, int max)
        //{
        //    return Ok(_db.Trainings.Include(t => t.Category).Where(c => c.Price >= min && c.Price <= max).ToList());
        //}
        //#endregion

        //#region get trainings by min or max duration days

        //[HttpGet("/training/durationDays/{minDurationDay}_{maxDurationDay}")]
        //[AllowAnonymous]
        //public IActionResult GetTrainingsByDurationDays(int minDurationDay, int maxDurationDay)
        //{
        //    return Ok(_db.Trainings.Include(t => t.Category).Where(c => c.DurationDay >= minDurationDay && c.DurationDay <= maxDurationDay).ToList());
        //}
        //#endregion

        //#region get trainings by min or max date

        //[HttpGet("/training/startDate/{minDate}_{maxDate}")]
        //[AllowAnonymous]
        //public IActionResult GetTrainingsByDate(DateTime minDate, DateTime maxDate)
        //{
        //    return Ok(_db.Trainings.Include(t => t.Category).Where(c => c.StartDate >= minDate && c.StartDate <= maxDate).ToList());
        //}

        //#endregion

        //#region get trainings by certified bool

        //[HttpGet("/training/certified/{isCertified}")]
        //[AllowAnonymous]
        //public IActionResult GetTrainingsByCertifiedBool(bool isCertified)
        //{
        //    return Ok(_db.Trainings.Include(t => t.Category).Where(c => c.IsCertified == isCertified).ToList());
        //}

        //#endregion







        //#region tp

        //[HttpPost("/pizza")]
        //[Authorize(Roles = "Admin")]
        //public IActionResult AddPizza([FromBody] Pizza pizza)
        //{
        //    _db.Pizzas.Add(pizza);
        //    if (_db.SaveChanges() > 0) return Ok("Pizza added.");
        //    return BadRequest("Something went wrong...");
        //}

        //#endregion

        //#region add topping with pizza id

        //[HttpPost("/pizza/add-topping/{pizzaId}")]
        //[Authorize(Roles = "Admin")]
        //public IActionResult AddToppingAndUpdatePizza(int pizzaId, [FromBody] Ingredient ingredient)
        //{
        //    var pizzaFromDb = _db.Pizzas.Find(pizzaId);

        //    if (pizzaFromDb == null) return NotFound(new
        //    {
        //        Message = "There is no Pizza with this id."
        //    });

        //    //_db.Ingredients.Add(ingredient);
        //    pizzaFromDb.Ingredients.Add(ingredient);

        //    if (_db.SaveChanges() == 0) return BadRequest("Something went wrong...");

        //    return Ok("Pizza Updated with new added topping.");

        //}

        //#endregion

        //#region remove topping with pizza id

        //[HttpPost("/pizza/remove-topping/{pizzaId}/{toppingId}")]
        //[Authorize(Roles = "Admin")]
        //public IActionResult RemoveToppingAndUpdatePizza(int pizzaId, int toppingId)
        //{
        //    var pizzaFromDb = _db.Pizzas.Find(pizzaId);

        //    if (pizzaFromDb == null) return NotFound(new
        //    {
        //        Message = "There is no Pizza with this id."
        //    });

        //    //var pizzaToppingFromDb = pizzaFromDb.Ingredients.Where(t => t.Id == toppingId);

        //    var pizzaToppingFromDb = _db.Ingredients.Where(i => i.PizzaId == pizzaId);

        //    if (pizzaToppingFromDb == null) return NotFound(new
        //    {
        //        Message = "There is no topping with this id into Ingredient list from this pizza."
        //    });

        //    //pizzaFromDb.Ingredients.Remove(pizzaToppingFromDb.First());

        //    _db.Ingredients.Remove((Ingredient)pizzaToppingFromDb);

        //    if (_db.SaveChanges() == 0) return BadRequest("Something went wrong...");

        //    return Ok("Pizza Updated with deleted topping.");

        //}

        //#endregion

        //#region update pizza with pizza id

        //[HttpPut("/pizza/{id}")]
        //[Authorize(Roles = "Admin")]
        //public IActionResult Update(int id, [FromBody] Pizza pizza)
        //{
        //    var pizzaFromDb = _db.Pizzas.Find(id);
        //    // on récupère l'objet de la BDD, il est TRACKé par EFCore donc les modifications effectuées dessus sont répercutées sur la BDD au moment du SaveChanges

        //    if (pizzaFromDb == null) return NotFound(new
        //    {
        //        Message = "There is no Pizza with this id."
        //    });

        //    // on vient vérifier si les champs on changé AVANT de les modifier pour optimiser
        //    if (pizzaFromDb.Name != pizza.Name)
        //        pizzaFromDb.Name = pizza.Name;
        //    if (pizzaFromDb.Description != pizza.Description)
        //        pizzaFromDb.Description = pizza.Description;
        //    if (pizzaFromDb.Price != pizza.Price)
        //        pizzaFromDb.Price = pizza.Price;
        //    if (pizzaFromDb.Status != pizza.Status)
        //        pizzaFromDb.Status = pizza.Status;

        //    if (_db.SaveChanges() == 0) return BadRequest("Something went wrong...");

        //    return Ok("Pizza Updated !");
        //}

        //#endregion

        //#region delete pizza with id

        //[HttpDelete("/pizza/{id}")]
        //[Authorize(Roles = "Admin")]
        //public IActionResult Remove(int id)
        //{
        //    var pizza = _db.Pizzas.Find(id);

        //    if (pizza == null) return NotFound(new
        //    {
        //        Message = "There is no Pizza with this id."
        //    });

        //    _db.Pizzas.Remove(pizza);

        //    if (_db.SaveChanges() == 0) return BadRequest("Something went wrong...");

        //    return Ok("Pizza Deleted !");
        //}

        //#endregion

    }
}
