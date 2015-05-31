using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Core.Models;

namespace aelveborn.Core.Models.Layouts
{
    public class DisplayLayoutModel
    {

        public IEnumerable<IPublishedContent> SiteNavigation { get; set; }

    }
}
