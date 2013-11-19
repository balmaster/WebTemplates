function initPayment(data) {
    var template = kendo.template('<div><center><img src="#= url #"/><br/>#= serviceName #</center></div>');
    var result = template(data[0]);
    $("#selectedService").html(result);

    $("#center_layout").load("tmpl/payment.html",
        function(){
            contentLoad();
        });
//    $("#center_layout").append($("<div></div>"));
//    $("#center_layout").append($('<div id="payment_bottom"><div><a class="k_button">cancel_button</a></div>' +
//                '<div><a class="k_button">commit_button</a></div></div>'));
    function contentLoad(){
        $("#center_layout").kendoSplitter({
            orientation: "vertical",
            panes: [
                {  collapsible: false, resizable:false},
                { collapsible: false, resizable:false, size: 20}]
        });

//        $("#payment_main").kendoSplitter({
//            orientation: "vertical",
//            panes: [
//                { collapsible: false, resizable:false},
//                { collapsible: false, resizable:false},
//                { collapsible: false, resizable:false},
//                { collapsible: false, resizable:false},
//            ]
//        });

//        $("#service_attr_content").kendoSplitter({
//            orientation: "horizontal",
//            panes: [
//                { collapsible: false, resizable:false},
//                { collapsible: false, resizable:false, size:150}
//            ]
//        });
//
//        $("#payment_bottom").kendoSplitter({
//                orientation: "horizontal",
//                panes: [
//                    { collapsible: false, resizable:false},
//                    { collapsible: false, resizable:false}
//                ]
//            });
        //titles_main
//            $("#account_ext_attrs").kendoSplitter({
//                orientation: "vertical",
//                panes: [
//                    { collapsible: false, resizable:false, size:30},
//                    { collapsible: false, resizable:false}
//                ]
//            });
//            $("#account_attrs").kendoSplitter({
//                orientation: "vertical",
//                panes: [
//                    { collapsible: false, resizable:false, size:30},
//                    { collapsible: false, resizable:false}
//                ]
//            });
//            $("#service_attrs").kendoSplitter({
//                orientation: "vertical",
//                panes: [
//                    { collapsible: false, resizable:false, size:30},
//                    { collapsible: false, resizable:false}
//                ]
//            });
//            $("#payment_attrs").kendoSplitter({
//                orientation: "vertical",
//                panes: [
//                    { collapsible: false, resizable:false, size:30},
//                    { collapsible: false, resizable:false}
//                ]
//            });
//        //--------
            $("#account_attr_top").kendoSplitter({
                orientation: "horizontal",
                panes: [
                    { collapsible: false, resizable:false},
                    { collapsible: false, resizable:false, size:200}
                 ]
            });
            $("#account_ext_attr_top").kendoSplitter({
                orientation: "horizontal",
                panes: [
                    { collapsible: false, resizable:false},
                    { collapsible: false, resizable:false, size:200}
                ]
            });
    }
};
