// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud$1.0.0/src/app/views/livros/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"pt-br\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Edição de Contas</title><link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto|Varela+Round\"><link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script><script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script></head><style>\r\n.form{\r\n    position:absolute;\r\n    top:80px;\r\n    left:40%;\r\n    width:20%;\r\n    height: 500px;\r\n}\r\n.form-group {\r\n        text-align: center;\r\n\t\tborder-radius: 2px;\r\n\t\tbox-shadow: none;\r\n\t\tborder-color: #dddddd;\r\n\t}\r\n</style><div class=\"col-sm-6\"><h2>Edição de <b>Contas</b></h2></div><div class=\"form\"><form action=\"/contas\" method=\"post\">");

  if (data.contas.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"> <input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
      marko_escapeXmlAttr(data.contas.id) +
      "\"></div>");
  }

  out.w("<div class=\"form-group\"><label for=\"nome\">Nome:</label><input type=\"text\" id=\"nome\" name=\"nome\" value=\"" +
    marko_escapeXmlAttr(data.contas.nome) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label>data de recebimento</label><input type=\"text\" id=\"dataRecebimento\" name=\"dataRecebimento\" value=\"" +
    marko_escapeXmlAttr(data.contas.dataRecebimento) +
    "\" class=\"form-control\" required></div><div class=\"form-group\"><label for=\"nome\">Valor</label><input type=\"text\" class=\"form-control\" id=\"valor\" name=\"valor\" value=\"" +
    marko_escapeXmlAttr(data.contas.valor) +
    "\"></div><button type=\"submit\" class=\"btn btn-primary\">Enviar</button></form></div></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/crud$1.0.0/src/app/views/livros/form/form.marko"
  };
