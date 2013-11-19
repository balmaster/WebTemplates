/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 19.11.13
 * Time: 12:06
 * To change this template use File | Settings | File Templates.
 */

function initPaymentsTab(e) {
    // init tab_splitter2
    $("#" + e.contentElement.id + " div.form_grid_splitter").kendoSplitter({
        orientation: "vertical",
        panes: [
            { collapsible: false, resizable:false, size: "200px"},
            { collapsible: false, resizable:false, size: "100%"}
        ]
    });

}


