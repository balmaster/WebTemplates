$(document).ready(function() {
    $("#main1").kendoSplitter({
        orientation: "vertical",
        panes: [
            { collapsible: false, size: "60px", resizable:false },
            { collapsible: false, contentUrl: "tmpl/navigation.html" },
            { collapsible: false, size: "200px" , resizable:false}
        ]
        ,
        contentLoad:function(){
            initNavigation();
        }
    });

    $("#payer").kendoSplitter({
        orientation: "horizontal",
        panes: [
            { collapsible: false, resizable:false},
            { collapsible: false, resizable:false},
            { collapsible: false, resizable:false}
        ]
    });

    $("#bottom_layout").kendoSplitter({
        orientation: "vertical",
        panes: [
            { collapsible: false,size: "25px" , resizable:false},
            { collapsible: false, resizable:false},
            { collapsible: false, size: "30px" , resizable:false}
        ]
    });
    $("#status_bar").kendoSplitter({
        orientation: "horizontal",
        panes: [
            { collapsible: false, resizable:false},
            { collapsible: false, resizable:false, size:200}
        ]
    });

    $("#bottom_table").kendoGrid({
        dataSource: carts,
        schema: {
            model: {
                fields: {
                    id: { type: "string" },
                    sum: { type: "number" },
                    currency: { type: "string" }
                }
            }
        },
        height: 130,
        columns: [ {
            field: "account",
            title: "id"
        } , {
            field: "sum",
            title: "sum"
        } , {
            field: "currency",
            title: "currency"
        }
        ]
    });


});

