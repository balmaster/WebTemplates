/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 19.11.13
 * Time: 12:06
 * To change this template use File | Settings | File Templates.
 */

function initTab(e) {
    // init tab_splitter2
    $("#" + e.contentElement.id + " div.form_grid_splitter").kendoSplitter({
        orientation: "vertical",
        panes: [
            { collapsible: false, resizable:false, size: "120px"},
            { collapsible: false, resizable:false, size: "100%"}
        ]
    });

    $("#" + e.contentElement.id + " input.datepicker").kendoDatePicker();
    $("#" + e.contentElement.id + " input.dropdownlist").kendoDropDownList();


    $("#" + e.contentElement.id + " div.datagrid").kendoGrid({
            dataSource: {
                data: createRandomData(50),
                pageSize: 10
            },
            groupable: true,
            sortable: true,
            pageable: {
                refresh: true,
                pageSizes: true
            },
            columns: [ {
                field: "FirstName",
                width: 90,
                title: "First Name"
            } , {
                field: "LastName",
                width: 90,
                title: "Last Name"
            } , {
                width: 100,
                field: "City"
            } , {
                field: "Title"
            } , {
                field: "BirthDate",
                title: "Birth Date",
                template: '#= kendo.toString(BirthDate,"dd MMMM yyyy") #'
            } , {
                width: 50,
                field: "Age"
            }
            ]
        });
}


