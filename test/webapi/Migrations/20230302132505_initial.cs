using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace webapi.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Trainings",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Score = table.Column<int>(type: "int", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    DurationDay = table.Column<int>(type: "int", nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ImgPath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsCertified = table.Column<bool>(type: "bit", nullable: false),
                    TrainingCategoryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trainings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Trainings_Categories_TrainingCategoryId",
                        column: x => x.TrainingCategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[,]
                {
                    { 1, "", "Referencement" },
                    { 2, "Apprendre à programmer dans un langage défini.", "Langage de programmation" },
                    { 3, "Un framework est une structure (réelle ou conceptuelle) conçue pour servir de guide à l'élaboration d'un système qui développe la structure en une organisation utile.", "Framework" },
                    { 4, "", "Outils collaboratifs" },
                    { 5, "", "Non spécifié" }
                });

            migrationBuilder.InsertData(
                table: "Trainings",
                columns: new[] { "Id", "Description", "DurationDay", "ImgPath", "IsCertified", "Name", "Price", "Score", "StartDate", "TrainingCategoryId" },
                values: new object[,]
                {
                    { 1, "", 30, "logo-seo-premium.png", true, "SEO Premium", 249.0, 3, new DateTime(2023, 7, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), 1 },
                    { 2, "Typé.", 90, "logo-csharp.png", false, "C#", 299.0, 4, new DateTime(2023, 4, 4, 0, 0, 0, 0, DateTimeKind.Unspecified), 2 },
                    { 3, "un langage très permissif et très pratiqué.", 90, "logo-js.png", false, "JavaScript", 199.0, 9, new DateTime(2023, 4, 4, 0, 0, 0, 0, DateTimeKind.Unspecified), 2 },
                    { 4, "Les bases...", 120, "logo-html-css.png", false, "HTML/CSS", 149.0, 2, new DateTime(2023, 10, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), 2 },
                    { 5, "Un Framework très utilisé.", 50, "logo-react.png", true, "React", 289.0, 3, new DateTime(2023, 5, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), 3 },
                    { 6, "Un Framework plus moderne et de plus en plus utilisé.", 60, "logo-vuejs.png", false, "Vue.js", 299.0, 2, new DateTime(2023, 12, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), 3 },
                    { 7, "Un framework plus complexe.", 90, "logo-angular.png", true, "Angular", 499.0, 4, new DateTime(2023, 4, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), 3 },
                    { 8, "Très utile dès que l'on intègre un projet en équipe", 90, "logo-git.png", false, "Git", 180.0, 8, new DateTime(2023, 4, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), 4 },
                    { 9, "Connais pas.", 180, "logo-sass.png", false, "Sass", 199.0, 3, new DateTime(2023, 7, 13, 0, 0, 0, 0, DateTimeKind.Unspecified), 3 },
                    { 10, "Apprendre à faire des CVs (lol)", 2, "", false, "TRE", 599.0, 10, new DateTime(2023, 4, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 5 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Trainings_TrainingCategoryId",
                table: "Trainings",
                column: "TrainingCategoryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Trainings");

            migrationBuilder.DropTable(
                name: "Categories");
        }
    }
}
