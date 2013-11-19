function initPayment(data) {
    var template = kendo.template('<div><center><img src="#= url #"/><br/>#= serviceName #</center></div>');
    var result = template(data[0]);
    $("#selectedService").html(result);

    $("#center_layout").load("tmpl/payment.html",
        function(){
            contentLoad();
        });

    function contentLoad(){
        $("#center_layout").kendoSplitter({
            orientation: "vertical",
            panes: [
                {  collapsible: false, resizable:false},
                { collapsible: false, resizable:false, size: 40}]
        });
        $("#payment_bottom").kendoSplitter({
                orientation: "horizontal",
                panes: [
                    { collapsible: false, resizable:false},
                    { collapsible: false, resizable:false}
                ]
        });
    }
};

function renderForm(data){

}
