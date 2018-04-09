(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['test1'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group\">\r\n  <select class=\"form-control\" id=\"testDropdown\" disabled>\r\n    <option id=\"testDefault\" value=\"\" selected>Choose Request</option>\r\n  </select>\r\n</div>";
},"useData":true});
})();