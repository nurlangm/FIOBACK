using Fiorello.DAL;
using Fiorello.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fiorello.Controllers
{
    public class FlowerController : Controller
    {
        private readonly AppDbContext _context;
        public FlowerController(AppDbContext context)
        {
            _context = context;
        }
        public IActionResult Details(int id)
        {
            Flower flower = _context.Flowers.Include(f=>f.Campaigns).Include(f=>f.FlowerCategories).ThenInclude(fc=>fc.Category).Include(f=>f.FlowerTags).ThenInclude(ft=>ft.Tag).Include(f=>f.FlowerImages).FirstOrDefault(f => f.Id == id);
            return View(flower);
        }
    }
}
