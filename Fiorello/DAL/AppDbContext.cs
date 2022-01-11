using Fiorello.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fiorello.DAL
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {

        }
     public  DbSet<Settings> Settings { get; set; }
     public DbSet<Expert> Experts { get; set; }
     public DbSet<Profession> Professions { get; set; }
     public DbSet<Flower> Flowers { get; set; }
     public DbSet<FlowerCategory> FlowerCategories { get; set; }
     public DbSet<FlowerImage> FlowerImages { get; set; }
     public DbSet<Category> Categories { get; set; }
     public DbSet<Campaign> Campaigns { get; set; }
     public DbSet<Tag> Tags { get; set; }
     public DbSet<FlowerTag> FlowerTags { get; set; }


    }
}
