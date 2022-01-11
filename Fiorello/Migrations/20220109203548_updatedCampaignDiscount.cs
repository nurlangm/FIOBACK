using Microsoft.EntityFrameworkCore.Migrations;

namespace Fiorello.Migrations
{
    public partial class updatedCampaignDiscount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Discount",
                table: "Campaigns");

            migrationBuilder.AddColumn<int>(
                name: "DiscountPercent",
                table: "Campaigns",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DiscountPercent",
                table: "Campaigns");

            migrationBuilder.AddColumn<string>(
                name: "Discount",
                table: "Campaigns",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
