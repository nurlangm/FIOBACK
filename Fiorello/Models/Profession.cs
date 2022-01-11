using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Fiorello.Models
{
    public class Profession
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Expert> Experts { get; set; }
        
    }
}