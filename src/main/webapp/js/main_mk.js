$(document).ready(function() {


    $("#main").kendoSplitter({
        orientation: "vertical",
        panes: [
            { collapsible: false, size: "50px", resizable:false },
            { collapsible: false, contentUrl: "tmpl/navigation.html" },
            { collapsible: false, size: "200px" , resizable:false}
        ],
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
        dataSource: {
            data: [ {id:"4000000000000", sum:152.35, currency:"грн."},
                    {id:"4636540000000", sum:12456.58, currency:"грн."},
                    {id:"4000004324637", sum:0.25, currency:"грн."}],
            schema: {
                model: {
                    fields: {
                        id: { type: "string" },
                        sum: { type: "number" },
                        currency: { type: "string" }
                    }
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

