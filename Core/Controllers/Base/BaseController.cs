using aelveborn.Core.Models.Base;
using aelveborn.Core.Models.Layouts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Umbraco.Web;
using Umbraco.Web.Models;
using Umbraco.Web.Mvc;

namespace aelveborn.Core.Controllers.Base
{
    public class BaseController : SurfaceController, IRenderMvcController
    {

        protected ActionResult CurrentTemplate<T>(T model) where T : BaseViewModel
        {
            //Init(model);

            return View(ControllerContext.RouteData.Values["action"].ToString(), model);
        }

        public virtual ActionResult Index(RenderModel model)
        {
            return View(ControllerContext.RouteData.Values["action"].ToString(), model);
        }

        private void Init<T>(T model) where T : BaseViewModel
        {
            // Place init code here
            model.Site = model.Content.AncestorOrSelf(1);

            DisplayLayoutModel layout = new DisplayLayoutModel();
            layout.SiteNavigation = model.Site.Children.Where(x => x.Level == 2);
            model.DisplayLayout = layout;
        }
    }
}
