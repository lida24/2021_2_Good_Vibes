(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['example'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header>\n    <a href=\"#\" class=\"logo\"><span>O</span>zon2.0</a>\n    <div class=\"icons\">\n        <a href=\"#\" , class=\"profile-href\"><i class=\"fas fa-user\" id=\"login-btn\"></i></a>\n    </div>\n</header>\n<main id=\"main-container\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":26},"end":{"line":7,"column":34}}}) : helper)))
    + "</main>\n<footer>@2021 GoodVibes</footer>";
},"useData":true});
})();