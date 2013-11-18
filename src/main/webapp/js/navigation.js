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
};

function initGeneralServicesList(){
    $("#category_sidebar").kendoPanelBar({
        dataSource: [
            { text: "Интернет-магазины"},
            { text: "Інтернет"},
            { text: "Комунальні послуги"},
            { text: "Интернет-магазины"},
            { text: "Інтернет"},
            { text: "Комунальні послуги"},
            { text: "Мобільний зв`язок"},
            { text: "Интернет-магазины"},
            { text: "Інтернет"},
            { text: "Комунальні послуги"},
            { text: "Мобільний зв`язок"},
            { text: "Интернет-магазины"},
            { text: "Інтернет"},
            { text: "Комунальні послуги"},
            { text: "Мобільний зв`язок"},
            { text: "Интернет-магазины"},
            { text: "Інтернет"},
            { text: "Комунальні послуги"},
            { text: "Мобільний зв`язок"},
            { text: "Интернет-магазины"},
            { text: "Інтернет"},
            { text: "Комунальні послуги"},
            { text: "Мобільний зв`язок"},
            { text: "Мобільний зв`язок"},
            { text: "Телефонія"}
        ],
        select: function(e){
            initServicesList($(e.item).find("> .k-link").text());
        }
    });
}

function initServicesList(serviceName){
//    $("#services").html(serviceName);
    $("#services").kendoPanelBar({
        dataSource: [
            { text: serviceName + "1", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "2", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "3", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "4", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "5", imageUrl: "img/default_logo.png" },
            { text: serviceName + "1", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "2", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "3", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "4", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "5", imageUrl: "img/default_logo.png" },
            { text: serviceName + "1", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "2", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "3", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "4", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "5", imageUrl: "img/default_logo.png" },
            { text: serviceName + "1", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "2", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "3", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "4", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "5", imageUrl: "img/default_logo.png" },
            { text:  serviceName + "6", imageUrl: "img/default_logo.png" }
        ]
    });
}

