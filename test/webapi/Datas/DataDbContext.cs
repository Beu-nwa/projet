using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Datas
{
    public class DataDbContext : DbContext
    {
        public DbSet<Training> Trainings { get; set; }
        public DbSet<TrainingCategory> Categories { get; set; }

        public DataDbContext(DbContextOptions<DataDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region Seed the database with data

            modelBuilder.Entity<TrainingCategory>().HasData(
                new TrainingCategory
                {
                    Id = 1,
                    Name = "Referencement",
                    Description = ""
                },
                new TrainingCategory
                {
                    Id = 2,
                    Name = "Langage de programmation",
                    Description = "Apprendre à programmer dans un langage défini."
                }, new TrainingCategory
                {
                    Id = 3,
                    Name = "Framework",
                    Description = "Un framework est une structure (réelle ou conceptuelle) conçue pour servir de guide à l'élaboration d'un système qui développe la structure en une organisation utile."
                }, new TrainingCategory
                {
                    Id = 4,
                    Name = "Outils collaboratifs",
                    Description = ""
                }, new TrainingCategory
                {
                    Id = 5,
                    Name = "Non spécifié",
                    Description = ""
                }
            );
            modelBuilder.Entity<Training>().HasData(

                new Training
                {
                    Id = 1,
                    Name = "SEO Premium",
                    Description = "",
                    Score = 3,
                    Price = 249,
                    DurationDay = 30,
                    StartDate = new DateTime(2023, 7, 2),
                    ImgPath = "logo-seo-premium.png",
                    IsCertified = true,
                    TrainingCategoryId = 1
                },
                new Training
                {
                    Id = 2,
                    Name = "C#",
                    Description = "Typé.",
                    Score = 4,
                    Price = 299,
                    DurationDay = 90,
                    StartDate = new DateTime(2023, 4, 4),
                    ImgPath = "logo-csharp.png",
                    IsCertified = false,
                    TrainingCategoryId = 2
                },
                new Training
                {
                    Id = 3,
                    Name = "JavaScript",
                    Description = "un langage très permissif et très pratiqué.",
                    Score = 9,
                    Price = 199,
                    DurationDay = 90,
                    StartDate = new DateTime(2023, 4, 4),
                    ImgPath = "logo-js.png",
                    IsCertified = false,
                    TrainingCategoryId = 2
                },
                new Training
                {
                    Id = 4,
                    Name = "HTML/CSS",
                    Description = "Les bases...",
                    Score = 2,
                    Price = 149,
                    DurationDay = 120,
                    StartDate = new DateTime(2023, 10, 20),
                    ImgPath = "logo-html-css.png",
                    IsCertified = false,
                    TrainingCategoryId = 2
                },
                new Training
                {
                    Id = 5,
                    Name = "React",
                    Description = "Un Framework très utilisé.",
                    Score = 3,
                    Price = 289,
                    DurationDay = 50,
                    StartDate = new DateTime(2023, 5, 9),
                    ImgPath = "logo-react.png",
                    IsCertified = true,
                    TrainingCategoryId = 3
                },
                new Training
                {
                    Id = 6,
                    Name = "Vue.js",
                    Description = "Un Framework plus moderne et de plus en plus utilisé.",
                    Score = 2,
                    Price = 299,
                    DurationDay = 60,
                    StartDate = new DateTime(2023, 12, 20),
                    ImgPath = "logo-vuejs.png",
                    IsCertified = false,
                    TrainingCategoryId = 3
                },
                new Training
                {
                    Id = 7,
                    Name = "Angular",
                    Description = "Un framework plus complexe.",
                    Score = 4,
                    Price = 499,
                    DurationDay = 90,
                    StartDate = new DateTime(2023, 4, 3),
                    ImgPath = "logo-angular.png",
                    IsCertified = true,
                    TrainingCategoryId = 3
                },
                new Training
                {
                    Id = 8,
                    Name = "Git",
                    Description = "Très utile dès que l'on intègre un projet en équipe",
                    Score = 8,
                    Price = 180,
                    DurationDay = 90,
                    StartDate = new DateTime(2023, 4, 3),
                    ImgPath = "logo-git.png",
                    IsCertified = false,
                    TrainingCategoryId = 4
                },
                new Training
                {
                    Id = 9,
                    Name = "Sass",
                    Description = "Connais pas.",
                    Score = 3,
                    Price = 199,
                    DurationDay = 180,
                    StartDate = new DateTime(2023, 7, 13),
                    ImgPath = "logo-sass.png",
                    IsCertified = false,
                    TrainingCategoryId = 3
                },
                new Training
                {
                    Id = 10,
                    Name = "TRE",
                    Description = "Apprendre à faire des CVs (lol)",
                    Score = 10,
                    Price = 599,
                    DurationDay = 2,
                    StartDate = new DateTime(2023, 4, 1),
                    ImgPath = "",
                    IsCertified = false,
                    TrainingCategoryId = 5
                }
            );

            #endregion
        }
    }
}
