// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud$1.0.0/src/app/views/livros/lista/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"pt-br\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Gestão de Contas</title><link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto|Varela+Round\"><link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script><script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script><script src=\"/estatico/js/remove-contas.js\"></script><style type=\"text/css\">\r\n    body {\r\n        color: #566787;\r\n\t\tbackground: #f5f5f5;\r\n\t\tfont-family: 'Varela Round', sans-serif;\r\n\t\tfont-size: 13px;\r\n\t}\r\n\t.table-wrapper {\r\n        background: #fff;\r\n        padding: 20px 25px;\r\n        margin: 30px 0;\r\n\t\tborder-radius: 3px;\r\n        box-shadow: 0 1px 1px rgba(0,0,0,.05);\r\n    }\r\n\t.table-title {        \r\n\t\tpadding-bottom: 15px;\r\n\t\tbackground: #435d7d;\r\n\t\tcolor: #fff;\r\n\t\tpadding: 16px 30px;\r\n\t\tmargin: -20px -25px 10px;\r\n\t\tborder-radius: 3px 3px 0 0;\r\n    }\r\n    .table-title h2 {\r\n\t\tmargin: 5px 0 0;\r\n\t\tfont-size: 24px;\r\n\t}\r\n\t.table-title .btn-group {\r\n\t\tfloat: right;\r\n\t}\r\n\t.table-title .btn {\r\n\t\tcolor: #fff;\r\n\t\tfloat: right;\r\n\t\tfont-size: 13px;\r\n\t\tborder: none;\r\n\t\tmin-width: 50px;\r\n\t\tborder-radius: 2px;\r\n\t\tborder: none;\r\n\t\toutline: none !important;\r\n\t\tmargin-left: 10px;\r\n\t}\r\n\t.table-title .btn i {\r\n\t\tfloat: left;\r\n\t\tfont-size: 21px;\r\n\t\tmargin-right: 5px;\r\n\t}\r\n\t.table-title .btn span {\r\n\t\tfloat: left;\r\n\t\tmargin-top: 2px;\r\n\t}\r\n    table.table tr th, table.table tr td {\r\n        border-color: #e9e9e9;\r\n\t\tpadding: 12px 15px;\r\n\t\tvertical-align: middle;\r\n    }\r\n\ttable.table tr th:first-child {\r\n\t\twidth: 60px;\r\n\t}\r\n\ttable.table tr th:last-child {\r\n\t\twidth: 100px;\r\n\t}\r\n    table.table-striped tbody tr:nth-of-type(odd) {\r\n    \tbackground-color: #fcfcfc;\r\n\t}\r\n\ttable.table-striped.table-hover tbody tr:hover {\r\n\t\tbackground: #f5f5f5;\r\n\t}\r\n    table.table th i {\r\n        font-size: 13px;\r\n        margin: 0 5px;\r\n        cursor: pointer;\r\n    }\t\r\n    table.table td:last-child i {\r\n\t\topacity: 0.9;\r\n\t\tfont-size: 22px;\r\n        margin: 0 5px;\r\n    }\r\n\ttable.table td a {\r\n\t\tfont-weight: bold;\r\n\t\tcolor: #566787;\r\n\t\tdisplay: inline-block;\r\n\t\ttext-decoration: none;\r\n\t\toutline: none !important;\r\n\t}\r\n\ttable.table td a:hover {\r\n\t\tcolor: #2196F3;\r\n\t}\r\n\ttable.table td a.edit {\r\n        color: #FFC107;\r\n    }\r\n    table.table td a.delete {\r\n        color: #F44336;\r\n    }\r\n    table.table td i {\r\n        font-size: 19px;\r\n    }\r\n\ttable.table .avatar {\r\n\t\tborder-radius: 50%;\r\n\t\tvertical-align: middle;\r\n\t\tmargin-right: 10px;\r\n\t}\r\n    .pagination {\r\n        float: right;\r\n        margin: 0 0 5px;\r\n    }\r\n    .pagination li a {\r\n        border: none;\r\n        font-size: 13px;\r\n        min-width: 30px;\r\n        min-height: 30px;\r\n        color: #999;\r\n        margin: 0 2px;\r\n        line-height: 30px;\r\n        border-radius: 2px !important;\r\n        text-align: center;\r\n        padding: 0 6px;\r\n    }\r\n    .pagination li a:hover {\r\n        color: #666;\r\n    }\t\r\n    .pagination li.active a, .pagination li.active a.page-link {\r\n        background: #03A9F4;\r\n    }\r\n    .pagination li.active a:hover {        \r\n        background: #0397d6;\r\n    }\r\n\t.pagination li.disabled i {\r\n        color: #ccc;\r\n    }\r\n    .pagination li i {\r\n        font-size: 16px;\r\n        padding-top: 6px\r\n    }\r\n    .hint-text {\r\n        float: left;\r\n        margin-top: 10px;\r\n        font-size: 13px;\r\n    }    \r\n\t/* Custom checkbox */\r\n\t.custom-checkbox {\r\n\t\tposition: relative;\r\n\t}\r\n\t.custom-checkbox input[type=\"checkbox\"] {    \r\n\t\topacity: 0;\r\n\t\tposition: absolute;\r\n\t\tmargin: 5px 0 0 3px;\r\n\t\tz-index: 9;\r\n\t}\r\n\t.custom-checkbox label:before{\r\n\t\twidth: 18px;\r\n\t\theight: 18px;\r\n\t}\r\n\t.custom-checkbox label:before {\r\n\t\tcontent: '';\r\n\t\tmargin-right: 10px;\r\n\t\tdisplay: inline-block;\r\n\t\tvertical-align: text-top;\r\n\t\tbackground: white;\r\n\t\tborder: 1px solid #bbb;\r\n\t\tborder-radius: 2px;\r\n\t\tbox-sizing: border-box;\r\n\t\tz-index: 2;\r\n\t}\r\n\t.custom-checkbox input[type=\"checkbox\"]:checked + label:after {\r\n\t\tcontent: '';\r\n\t\tposition: absolute;\r\n\t\tleft: 6px;\r\n\t\ttop: 3px;\r\n\t\twidth: 6px;\r\n\t\theight: 11px;\r\n\t\tborder: solid #000;\r\n\t\tborder-width: 0 3px 3px 0;\r\n\t\ttransform: inherit;\r\n\t\tz-index: 3;\r\n\t\ttransform: rotateZ(45deg);\r\n\t}\r\n\t.custom-checkbox input[type=\"checkbox\"]:checked + label:before {\r\n\t\tborder-color: #03A9F4;\r\n\t\tbackground: #03A9F4;\r\n\t}\r\n\t.custom-checkbox input[type=\"checkbox\"]:checked + label:after {\r\n\t\tborder-color: #fff;\r\n\t}\r\n\t.custom-checkbox input[type=\"checkbox\"]:disabled + label:before {\r\n\t\tcolor: #b8b8b8;\r\n\t\tcursor: auto;\r\n\t\tbox-shadow: none;\r\n\t\tbackground: #ddd;\r\n\t}\r\n\t/* Modal styles */\r\n\t.modal .modal-dialog {\r\n\t\tmax-width: 400px;\r\n\t}\r\n\t.modal .modal-header, .modal .modal-body, .modal .modal-footer {\r\n\t\tpadding: 20px 30px;\r\n\t}\r\n\t.modal .modal-content {\r\n\t\tborder-radius: 3px;\r\n\t}\r\n\t.modal .modal-footer {\r\n\t\tbackground: #ecf0f1;\r\n\t\tborder-radius: 0 0 3px 3px;\r\n\t}\r\n    .modal .modal-title {\r\n        display: inline-block;\r\n    }\r\n\t.modal .form-control {\r\n\t\tborder-radius: 2px;\r\n\t\tbox-shadow: none;\r\n\t\tborder-color: #dddddd;\r\n\t}\r\n\t.modal textarea.form-control {\r\n\t\tresize: vertical;\r\n\t}\r\n\t.modal .btn {\r\n\t\tborder-radius: 2px;\r\n\t\tmin-width: 100px;\r\n\t}\t\r\n\t.modal form label {\r\n\t\tfont-weight: normal;\r\n\t}\t\r\n</style><script type=\"text/javascript\">\r\n$(document).ready(function(){\r\n\t// Activate tooltip\r\n\t$('[data-toggle=\"tooltip\"]').tooltip();\r\n\t\r\n\t// Select/Deselect checkboxes\r\n\tvar checkbox = $('table tbody input[type=\"checkbox\"]');\r\n\t$(\"#selectAll\").click(function(){\r\n\t\tif(this.checked){\r\n\t\t\tcheckbox.each(function(){\r\n\t\t\t\tthis.checked = true;                        \r\n\t\t\t});\r\n\t\t} else{\r\n\t\t\tcheckbox.each(function(){\r\n\t\t\t\tthis.checked = false;                        \r\n\t\t\t});\r\n\t\t} \r\n\t});\r\n\tcheckbox.click(function(){\r\n\t\tif(!this.checked){\r\n\t\t\t$(\"#selectAll\").prop(\"checked\", false);\r\n\t\t}\r\n\t});\r\n});\r\n</script></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"><div class=\"table-wrapper\"><div class=\"table-title\"><div class=\"row\"><div class=\"col-sm-6\"><h2>Gestão de <b>Contas</b></h2></div><div class=\"col-sm-6\"><a href=\"#addEmployeeModal\" class=\"btn btn-success\" data-toggle=\"modal\"><i class=\"material-icons\">&#xE147;</i> <span>Adicionar nova conta à pagar</span></a><a href=\"#deleteEmployeeModal\" class=\"btn btn-danger\" data-toggle=\"modal\" data-type=\"remocao\"><i class=\"material-icons\">&#xE15C;</i> <span>Deletar</span></a> </div></div></div><table class=\"table table-striped table-hover\"><thead><tr><th><span class=\"custom-checkbox\"><input type=\"checkbox\" id=\"selectAll\"><label for=\"selectAll\"></label></span></th><th>Nome</th><th>Data de recebimento</th><th>Valor</th><th>Id</th><th>Ações</th></tr></thead><tbody id=\"contas\">");

  var for__43 = 0;

  marko_forEach(data.contas, function(contas) {
    var keyscope__44 = "[" + ((for__43++) + "]");

    out.w("<tr id=\"contas_" +
      marko_escapeXmlAttr(contas.id) +
      "\"><td><span class=\"custom-checkbox\"><input type=\"checkbox\" id=\"checkbox1\" name=\"options[]\" value=\"1\"><label for=\"checkbox1\"></label></span></td><td>" +
      marko_escapeXml(contas.nome) +
      "</td><td>" +
      marko_escapeXml(contas.dataRecebimento) +
      "</td><td>" +
      marko_escapeXml(contas.valor) +
      "</td><td>" +
      marko_escapeXml(contas.id) +
      "</td><td><a href=\"/contas/form/" +
      marko_escapeXmlAttr(contas.id) +
      "\" data-ref=\"" +
      marko_escapeXmlAttr(contas.id) +
      "\" class=\"edit\" data-toggle=\"modal\"><i class=\"material-icons\" data-ref=\"" +
      marko_escapeXmlAttr(contas.id) +
      "\" data-toggle=\"tooltip\" title=\"Editar\">&#xE254;</i></a><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(contas.id) +
      "\" data-type=\"remocao\" data-toggle=\"modal\"><i class=\"material-icons\" data-ref=\"" +
      marko_escapeXmlAttr(contas.id) +
      "\" data-type=\"remocao\" data-toggle=\"tooltip\" title=\"Deletar\">&#xE872;</i></a></td></tr>");
  });

  out.w("</tbody></table><div class=\"clearfix\"><div class=\"hint-text\">Mostrando <b>todas </b>as entradas</div><ul class=\"pagination\"><li class=\"page-item disabled\"><a href=\"#\">Anterior</a></li><li class=\"page-item\"><a href=\"#\" class=\"page-link\">1</a></li><li class=\"page-item\"><a href=\"#\" class=\"page-link\">2</a></li><li class=\"page-item active\"><a href=\"#\" class=\"page-link\">3</a></li><li class=\"page-item\"><a href=\"#\" class=\"page-link\">4</a></li><li class=\"page-item\"><a href=\"#\" class=\"page-link\">5</a></li><li class=\"page-item\"><a href=\"#\" class=\"page-link\">Próxima</a></li></ul></div></div></div><div id=\"addEmployeeModal\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><form action=\"/contas\" method=\"POST\"><div class=\"modal-header\"> <h4 class=\"modal-title\">Adicionar conta à pagar</h4><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button></div><div class=\"modal-body\"> <div class=\"form-group\"><input type=\"hidden\" id=\"id\" name=\"id\" required><label>Nome</label><input type=\"text\" id=\"nome\" name=\"nome\" class=\"form-control\" required></div><div class=\"form-group\"><label>data de recebimento</label><input type=\"text\" id=\"dataRecebimento\" name=\"dataRecebimento\" class=\"form-control\" required></div><div class=\"form-group\"><label>Valor</label><input type=\"text\" id=\"valor\" name=\"valor\" class=\"form-control\" required></div></div><div class=\"modal-footer\"><input type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" value=\"Cancelar\"><input type=\"submit\" class=\"btn btn-success\" value=\"Adicionar\"></div></form></div></div></div><div id=\"editEmployeeModal\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><form action=\"/contas\" method=\"POST\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
    marko_escapeXmlAttr(data.contas.id) +
    "\"><input type=\"hidden\" name=\"_method\" value=\"POST\"> <div class=\"modal-header\"> <h4 class=\"modal-title\">Editar Conta</h4><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button></div><div class=\"modal-body\"> <div class=\"form-group\"><label for=\"nome\">Nome</label><input type=\"text\" id=\"nome\" name=\"nome\" value=\"" +
    marko_escapeXmlAttr(data.contas.nome) +
    "\" class=\"form-control\" required></div><div class=\"form-group\"><label for=\"dataRecebimento\">data de recebimento</label><input type=\"text\" id=\"dataRecebimento\" name=\"dataRecebimento\" value=\"" +
    marko_escapeXmlAttr(data.contas.dataRecebimento) +
    "\" class=\"form-control\" required></div><div class=\"form-group\"><label for=\"valor\">Valor</label><input type=\"text\" id=\"valor\" name=\"valor\" value=\"" +
    marko_escapeXmlAttr(data.contas.valor) +
    "\" class=\"form-control\" required></div></div><div class=\"modal-footer\"><input type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" value=\"Cancelar\"><input type=\"submit\" href=\"/contas/:id\" class=\"btn btn-info\" value=\"Salvar\"></div></form></div></div></div><div id=\"deleteEmployeeModal\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><form><div class=\"modal-header\"> <h4 class=\"modal-title\">Deletar conta</h4><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button></div><div class=\"modal-body\"> <p>Você tem certeza que deseja deletar?</p><p class=\"text-warning\"><small>Essa ação não pode ser desfeita!</small></p></div><div class=\"modal-footer\"><input type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" value=\"Cancelar\"><input type=\"submit\" data-type=\"remocao\" class=\"btn btn-danger\" value=\"Deletar\"> </div></form></div></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "134");

  out.w("</body></html> ");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/crud$1.0.0/src/app/views/livros/lista/lista.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
