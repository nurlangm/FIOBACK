using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Fiorello.Models
{
    public class Settings
    {
        public int Id { get; set; }
        [StringLength(maximumLength:100)]
        public string ParallaxImage { get; set; }
    }
}
