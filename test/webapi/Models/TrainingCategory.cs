using System.ComponentModel.DataAnnotations;

namespace webapi.Models
{
    public class TrainingCategory
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string? Description { get; set; }
        public List<Training>? Trainings { get; set; }
    }
}
