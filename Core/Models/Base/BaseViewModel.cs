using aelveborn.Core.Models.Layouts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Web;
using Umbraco.Web.Models;

namespace aelveborn.Core.Models.Base
{
    public abstract class BaseViewModel : RenderModel
    {

        public IPublishedContent Site { get; set; }
        public DisplayLayoutModel DisplayLayout { get; set; }
        
        /// <summary>
        /// Send CurrentPage to the view
        /// </summary>
        public BaseViewModel()
            : base(UmbracoContext.Current.PublishedContentRequest.PublishedContent)
        {

        }

        /// <summary>
        /// Used when a specific page is needed other then CurrentPage
        /// </summary>
        /// <param name="content"></param>
        public BaseViewModel(IPublishedContent content)
            : base(content)
        {

        }
    }
}
