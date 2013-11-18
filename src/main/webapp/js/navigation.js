function initNavigation() {
    $("#center_layout").kendoSplitter({
        orientation: "vertical",
        panes: [
            { collapsible: false, resizable:false, size: 30},
            { collapsible: false, resizable:false}
        ]
    });

    $("#navigation_top").kendoSplitter({
        orientation: "horizontal",
        panes: [
            { collapsible: false, resizable:false, size:250},
            { collapsible: false, resizable:false}
        ]
    });

    $("#navigation_main").kendoSplitter({
        orientation: "horizontal",
        panes: [
            { collapsible: false, resizable:false, size:250},
            { collapsible: false, resizable:false}
        ]
    });

    initGeneralServicesList();
    $("#category_scroll").kendoSplitter({});
    $("#services_scroll").kendoSplitter({});
};

function initGeneralServicesList(){
    var category_panelbar = $("#category_sidebar").kendoPanelBar({
        dataSource: [
            { text: "Category1"},
            { text: "Category2"},
            { text: "Category3"},
            { text: "Category4"},
            { text: "Category5"},
            { text: "Category6"},
            { text: "Category7"},
            { text: "Category8"},
            { text: "Category9"},
            { text: "Category10"},
            { text: "Category11"},
            { text: "Category12"},
            { text: "Category13"},
            { text: "Category14"}
        ],
        select: function(e){
            initServicesList($(e.item).find("> .k-link").text());
        }
    });
    $(".panelBar-content").kendoMobileScroller();
}

function initServicesList(serviceName){
    $("#services").empty();
    var dataSource = [];
    for (var i = 0; i <=20; i++){
        dataSource.push({
            url: 'img/default_logo.png',
            serviceName: serviceName + i
        });
    }

    var serviceDataSource = new kendo.data.DataSource({data: dataSource});
    var servicesList = $("#services").kendoListView({
        dataSource: serviceDataSource,
        template: kendo.template('<div class="list_item" style="width:100px; height:100px;"><center><img src="#= url #"/>' +
                '<br/><p>#= serviceName #</p></center></div>'),
        selectable: true
        ,change: function onChange() {
            var data = serviceDataSource.view(),
                selected = $.map(this.select(), function(item) {
                    return data[$(item).index()];
                });
            initPayment(selected);
        }
    });
}
