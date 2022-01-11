using Microsoft.EntityFrameworkCore.Migrations;

namespace Fiorello.Migrations
{
    public partial class flowerFiorelloDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FlowerImages_FlowerCategories_FlowerCategoryId",
                table: "FlowerImages");

            migrationBuilder.DropIndex(
                name: "IX_FlowerImages_FlowerCategoryId",
                table: "FlowerImages");

            migrationBuilder.DropColumn(
                name: "FlowerCategoryId",
                table: "FlowerImages");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FlowerCategoryId",
                table: "FlowerImages",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_FlowerImages_FlowerCategoryId",
                table: "FlowerImages",
                column: "FlowerCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_FlowerImages_FlowerCategories_FlowerCategoryId",
                table: "FlowerImages",
                column: "FlowerCategoryId",
                principalTable: "FlowerCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
