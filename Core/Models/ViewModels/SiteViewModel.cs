﻿using aelveborn.Core.Models.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Core.Models;

namespace aelveborn.Core.Models.ViewModels
{
    public class SiteViewModel : BaseViewModel
    {
        public string Test
        {
            get
            {
                return Content.Name;
            }
        }

        public SiteViewModel() : base()
        {

        }

    }
}
