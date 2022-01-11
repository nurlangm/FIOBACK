using Fiorello.DAL;
using Fiorello.Models;
using Fiorello.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Fiorello.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext _context;
        public HomeController(AppDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            HomeVM homeVM = new HomeVM()
            {
                settings = _context.Settings.ToList(),
                professions = _context.Professions.Include(e => e.Experts).ToList(),
                Categories=_context.Categories.ToList(),
                Flowers=_context.Flowers.Include(f=>f.FlowerImages).Include(f=>f.FlowerCategories).ThenInclude(fc=>fc.Category).Include(f=>f.Campaigns).ToList()
        };
            return View(homeVM);
        }
    }
}
