using aelveborn.Core.Controllers.Base;
using aelveborn.Core.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using Umbraco.Core.Logging;
using Umbraco.Web.Models;

namespace aelveborn.Core.Controllers
{
    public class SiteController : BaseController
    {
        public override ActionResult Index(RenderModel model)
        {
            LogHelper.Info<SiteController>("Inside Site controller");

            var viewModel = new SiteViewModel();

            return CurrentTemplate(viewModel);
        }

        /// Since BaseController extends SurfaceControllers we are allowed to specify them here
        #region SurfaceControllers

        //public ActionResult GetNames()
        //{
        //    var list = new List<string>() { "Andreas", "Emma" };
        //    return Json(list, JsonRequestBehavior.AllowGet);
        //}

        #endregion
    }
}
