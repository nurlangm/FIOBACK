using Fiorello.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fiorello.ViewModel
{
    public class HomeVM
    {
        public List<Settings> settings { get; set; }
        public List<Expert> experts { get; set; }
        public List<Profession> professions { get; set; }
        public List<Flower> Flowers { get; set; }
        public List<Category> Categories { get; set; }
    }
}
