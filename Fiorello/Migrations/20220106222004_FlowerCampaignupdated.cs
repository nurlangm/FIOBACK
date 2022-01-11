using Microsoft.EntityFrameworkCore.Migrations;

namespace Fiorello.Migrations
{
    public partial class FlowerCampaignupdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Campaigns_Flowers_FlowerId",
                table: "Campaigns");

            migrationBuilder.DropIndex(
                name: "IX_Campaigns_FlowerId",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "DiscountId",
                table: "Flowers");

            migrationBuilder.DropColumn(
                name: "FlowerId",
                table: "Campaigns");

            migrationBuilder.AddColumn<int>(
                name: "CampaignId",
                table: "Flowers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Flowers_CampaignId",
                table: "Flowers",
                column: "CampaignId");

            migrationBuilder.AddForeignKey(
                name: "FK_Flowers_Campaigns_CampaignId",
                table: "Flowers",
                column: "CampaignId",
                principalTable: "Campaigns",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Flowers_Campaigns_CampaignId",
                table: "Flowers");

            migrationBuilder.DropIndex(
                name: "IX_Flowers_CampaignId",
                table: "Flowers");

            migrationBuilder.DropColumn(
                name: "CampaignId",
                table: "Flowers");

            migrationBuilder.AddColumn<int>(
                name: "DiscountId",
                table: "Flowers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "FlowerId",
                table: "Campaigns",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Campaigns_FlowerId",
                table: "Campaigns",
                column: "FlowerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Campaigns_Flowers_FlowerId",
                table: "Campaigns",
                column: "FlowerId",
                principalTable: "Flowers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
