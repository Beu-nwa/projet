using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace webapi.Models
{
    public class Training
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string? Description { get; set; }
        [Required, Range(0, 10, ErrorMessage = "La note doit être comprise entre 0 et 10 inclus.")]
        public int Score { get; set; }
        [Required]
        public double Price { get; set; }
        [Required]
        public int DurationDay { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        public string? ImgPath { get; set; }
        [Required]
        public bool IsCertified { get; set; } = false;
        [Required, ForeignKey(nameof(TrainingCategoryId))]
        public int TrainingCategoryId { get; set; }
        public TrainingCategory? Category { get; set; }


        //public TrainingCategories? Category { get; set; }
        //public enum TrainingCategories
        //{
        //    [System.Runtime.Serialization.EnumMember(Value = "Référencement")]
        //    Referencement,
        //    [System.Runtime.Serialization.EnumMember(Value = "Langage de programmation")]
        //    Programmation,
        //    [System.Runtime.Serialization.EnumMember(Value = "Framework")]
        //    Framework,
        //    [System.Runtime.Serialization.EnumMember(Value = "Outils collaboratifs")]
        //    Outils,
        //    [System.Runtime.Serialization.EnumMember(Value = "Non spécifié")]
        //    Unspecified
        //}
    }
}
