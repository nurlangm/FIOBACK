using Microsoft.EntityFrameworkCore.Migrations;

namespace Fiorello.Migrations
{
    public partial class updatedFlowerisMain : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsMain",
                table: "Flowers");

            migrationBuilder.AddColumn<bool>(
                name: "IsMain",
                table: "FlowerImages",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsMain",
                table: "FlowerImages");

            migrationBuilder.AddColumn<bool>(
                name: "IsMain",
                table: "Flowers",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
