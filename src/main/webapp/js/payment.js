function initPayment(data) {
    $("#center_layout").empty();
    var template = kendo.template('<div><center><img src="#= url #"/><br/><p>#= serviceName #</p></center></div>');
    var result = template(data[0]);
    $("#selectedService").html(result);

    kendo.template('<div><center><img src="#= url #"/><p>#= serviceName #</p></center></div>');

    $("#center_layout").kendoSplitter({
        orientation: "vertical",
        panes: [
            { collapsible: false, resizable:false, contentUrl: "tmpl/payment.html"},
            { collapsible: false, resizable:false, size: 30}
        ]
    });
};
