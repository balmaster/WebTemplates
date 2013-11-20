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

        var fields = new kendo.data.DataSource({ data: items });
        var model = new kendo.observable({ fields: fields });
        var view = new kendo.View("#field_list_template", {
            model: model
        });
        $("#serv_attrs").html(view.render());

        $("#attrsForm").kendoValidator({
            messages: {
                required: "Поле {0} не может быть пустым",
                maxLength: "Максимальная длинна поля - {1} симв.",
                minLength: "Минимальная длинна поля - {1} симв."
            },
            rules: {
                maxLength: function(input) {
                    var maxLength = input.attr("maxLength");

                    if (!maxLength)
                        return true;
                    return input.val().length <= maxLength;
                },
                minLength: function(input) {
                    var minLength = input.attr("minLength");

                    if (!minLength)
                        return true;
                    return input.val().length >= minLength;
                }
            }
        });

        $("#attrsForm input[type=number]").kendoNumericTextBox({
            format:"######.##"
        });
        $("#attrsForm input[type=money]").kendoNumericTextBox({
            format: "#.00 грн",
            min: 0
        });
        $("#attrsForm input[type=date]").kendoDatePicker();

        $("#attrsForm input[type=time]").kendoDateTimePicker();

        $("#account_ext_attr_toggle_button").bind('click', function(){
               $("#account_ext_attr_content").toggle();
        });
        $("#account_attr_toggle_button").bind('click', function(){
            $("#account_attr_content").toggle();
        });
        $("#MEAN").kendoComboBox({
            dataTextField: "text",
            dataValueField: "id",
            dataSource: [{'id':'id1', 'text': 'mean1'}, {'id':'id2', 'text': 'mean2'}]
        });
        $("#CART").kendoComboBox({
            dataValueField: "id",
            dataTextField: "id",
            template: '#= id# (#= sum# #= currency#)',
            dataSource: carts
        });
        $("#MEAN").bind('change', function(){
            if ($("#MEAN").val() == 'id1'){
                $("#CART").closest('div').show();
            }else{
                $("#CART").closest('div').hide();
            }
        });
        $("#cancel_button").bind('click', function(){
            initNavigation();
        });
    }
};

function renderForm(data){

}
