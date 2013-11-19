/**
 * Created with IntelliJ IDEA.
 * User: balmaster
 * Date: 19.11.13
 * Time: 0:31
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function() {
    var resizeActiveTab = function(e) {
        var mt = $("#main_tabs");
        var h = mt.innerHeight() - mt.find("ul.k-tabstrip-items").outerHeight(true);
        var e = mt.find("div.k-state-active");
        e.height(h + e.height() - e.outerHeight(true));
    };

    var main_splitter = $("#main_splitter").kendoSplitter({
        orientation: "vertical",
        panes: [
            { collapsible: false, resizable:false, size: "50px" },
            { collapsible: false, resizable:false},
            { collapsible: false, resizable:false, size: "50px" }
        ],
        layoutChange:resizeActiveTab
    });

    var main_tabs = $("#main_tabs").kendoTabStrip({
        contentUrls : [
            "tmpl/csko/payments_tab.html",
            "tmpl/csko/registers_tab.html"
        ],
        animation: {
            open: {
                effects : "",
                duration: 0
            },
            close: {
                effects : "",
                duration: 0
            }
        },
        activate: resizeActiveTab,
        contentLoad : function(e) {
            initPaymentsTab(e);
        }
    });


});

