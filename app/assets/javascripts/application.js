// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks 
//= require material
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require datatables
//= require_tree .
//= require gritter
//= require sweetalert2
//= require sweet-alert2-rails
//= require dialog-polyfill
//= require ./amivoice-script/intention
//= require select2

var msg, unsaved;
msg = "Changes you made may not be saved.";
unsaved = false;
$(document).on('change', 'form[role="check-modified"]:not([data-remote]) :input', function() {
    $("#icon-loadding").fadeOut(0, function(){}); 
    return unsaved = true;
});
$(document).on('turbolinks:load', function() {
    return unsaved = false;
});
$(document).on('submit', 'form[role="check-modified"]', function() {
    unsaved = false;  
});
$(window).bind('beforeunload', function() {  
    if (unsaved) {  
        return msg;
    }
});
$(document).on('turbolinks:before-visit', function(event) { 
    if (unsaved && !confirm(msg)) {
        return event.preventDefault();
    }
});
$(document).on('submit', function(event) { 
    $("#icon-loadding").addClass("mdl-progress mdl-progress__indeterminate");
}); 
$(document).ready(function() { 
    $("#username").focus();
    $(document).tooltip({
        tooltipClass: "tooltip_table",
        delay: 0, 
        track: true,
        fade: 250
    });
}); 

$(document).on('turbolinks:load', function(){
    
    $(".table_information_exports").each(function(){  
        var table = $(this).DataTable({ 
            scrollX: true,
            scrollY: false,
            columnDefs: [{'targets': [1,3], 'orderable': false}, {className: "action", "targets":[3]}],
            order: [[ 2, "desc" ]],  
            pagingType: "full_numbers",    
            pageLength: 15,      
            bLengthChange: false,
            processing: true,
            serverSide: true,
            dom: '<lf<t>ip<"go_to_page">>',
            language:{
                "infoFiltered": ""
            },
            ajax: $(this).data('url'),
            fnDrawCallback: function (oSettings) {
                $('.table_information_exports tbody tr').each(function () { 
                    var nTds = $('td', this); 
                    var releases = $(nTds[0]).text();
                    if (releases.length > 50){
                        nTds[0].setAttribute('title', releases.substring(54, 255));  
                    }
                    var sTitle = $(nTds[1]).text();
                    if (sTitle.length > 50){
                        nTds[1].setAttribute('title', sTitle.substring(54, 255));  
                    }
                });
            } 
        });
        $('div.go_to_page').html('<input type="text" value="1" id="go_page"><label style="color:#666;float:right;">Go to page: </label>');
            $('#go_page').on('focusout',function(){
                var paging = $('#go_page').val();
                var number = parseInt(paging)-1;
                if (paging == ""){
                    number = 0;
                    $('#go_page').val(1);
                }
                table.page(number).draw('page');
            });
    }); 
    
    $(".table_information").each(function(){ 
        var table = $(this).DataTable({
            scrollX: true,
            columnDefs: [{ 'targets': 2, 'orderable': false}, {className: "action", "targets":[2]}],
            order: [[ 1, "desc" ]],  
            pagingType: "full_numbers",    
            pageLength: 15,      
            bLengthChange: false,
            processing: true,
            serverSide: true,
            dom: '<lf<t>ip<"go_to_page">>',
            language:{
                "infoFiltered": ""
            },
            ajax: $(this).data('url')
        });
        $('div.go_to_page').html('<input type="text" value="1" id="go_page"><label style="color:#666;float:right;">Go to page: </label>');
            $('#go_page').on('focusout',function(){
                var paging = $('#go_page').val();
                var number = parseInt(paging)-1;
                if (paging == ""){
                    number = 0;
                    $('#go_page').val(1);
                }
                table.page(number).draw('page');
            });
    });
    $(".table_keyword").each(function(){ 
        var table = $(this).DataTable({
            scrollX: true,
            columnDefs: [{ 'targets': [0,3,5], 'orderable': false}, {className: "action", "targets":[5]}],
            order: [[ 4, "desc" ]],  
            pagingType: "full_numbers",    
            pageLength: 15,      
            bLengthChange: false,
            processing: true,
            serverSide: true,
            dom: '<lf<t>ip<"go_to_page">>',
            language:{
                "infoFiltered": "",
                "zeroRecords": "No data available in table"
            }, 
            ajax: $(this).data('url'),
            fnDrawCallback: function (oSettings) {
                $('.table_keyword tbody tr').each(function () { 
                    var nTds = $('td', this); 
                    var keyword = $(nTds[1]).text();
                    if (keyword.length > 25){
                        nTds[1].setAttribute('title', keyword.substring(29, 255));  
                    }
                    var tag = $(nTds[2]).text();
                    if (tag.length > 10){
                        nTds[2].setAttribute('title', tag.substring(14, 255));  
                    }
                    var synonym = $(nTds[3]).text();
                    if (synonym.length > 50){
                        nTds[3].setAttribute('title', synonym.substring(54, 255));  
                    }
                });
            }
        });
        $('div.go_to_page').html('<input type="text" value="1" id="go_page"><label style="color:#666;float:right;">Go to page: </label>');
            $('#go_page').on('focusout',function(){
                var paging = $('#go_page').val();
                var number = parseInt(paging)-1;
                if (paging == ""){
                    number = 0;
                    $('#go_page').val(1);
                }
                table.page(number).draw('page');
            });
    });
    $(".table_intention").each(function () {
        var table = $(this).DataTable({
            scrollX: true,
            columnDefs: [{ 'targets': [0,4,5], 'orderable': false }],
            order: [[3, "desc"]],
            pagingType: "full_numbers",
            pageLength: 15,
            bLengthChange: false,
            processing: true,
            serverSide: true,
            dom: '<lf<t>ip<"go_to_page">>',
            language: {
                "infoFiltered": ""
            },
            ajax: $(this).data('url')
        });
        $('div.go_to_page').html('<input type="text" value="1" id="go_page"><label style="color:#666;float:right;">Go to page: </label>');
        $('#go_page').on('focusout', function () {
            var paging = $('#go_page').val();
            var number = parseInt(paging) - 1;
            if (paging == "") {
                number = 0;
                $('#go_page').val(1);
            }
            table.page(number).draw('page');
        });
    });  
    
});
 
function get_loading_body() {
    //var overflow = $('body,html, #icon-loadding');
    $("#icon-loadding").addClass("mdl-progress mdl-progress__indeterminate");
    // $("#icon-loadding").fadeOut(2000, function() {
    //     $("body").fadeIn(2000);
    //     overflow.css('overflow','visible');
    // });
};

function checkbox() {
    var counter = 0, // counter for checked checkboxes
        i = 0,       // loop variable
        url = '',    // final url string    
        input_obj = document.getElementsByTagName('input');
    for (i = 0; i < input_obj.length; i++) {
        if (input_obj[i].type === 'checkbox' && input_obj[i].checked === true) { 
            counter++;
            url = url + ',' + input_obj[i].value;
        }
    }
    if (counter > 0) {
        url = url.substr(1);
        $("#delete_id").val(url);
        $('#count-checked-checkboxes').text(counter);
        sweetAlert({
            title: 'Are you sure you want to delete?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0FBCD0',
            cancelButtonColor: '#FFFFFF',
            cancelButtonClass: 'cancel_btn',
            confirmButtonText: 'Delete',
            allowOutsideClick: false
          }).then((result) => {
            if (result) {
                $.ajax({
                    url : "/amivoice_ai/delete_entity_value",
                    type: "GET",
                    data: {"select_delete": url, "value_id": $('#text_id').val()},
                    async: true,
                    contentType: 'application/json',
                    success: function (data) {
                        if (url.split(',').includes($('#text_value_id').val())){
                            unsaved = false;
                            window.location = '/amivoice_ai/entity/new?id='+$('#text_id').val();
                        }
                        $('.table_keyword').html(data.msg);
                        $('.table_keyword').DataTable().ajax.reload();
                    }
                })
                $("#delete_all").css("visibility", "hidden");
                delete_success();
            }
          })
    }
    else {
        $("#delete_all").css("visibility", "hidden");
    }
}

function show_delete(){
    var counter = 0, 
    i = 0,
    input_obj = document.getElementsByTagName('input');
    for (i = 0; i < input_obj.length; i++) {
        if (input_obj[i].type === 'checkbox' && input_obj[i].checked === true) { 
            counter++;
        }
    }
    if (counter > 0) {
        $("#delete_all").css( "visibility","visible" );
        $('#count-checked-checkboxes').text(counter);
    }
    else {
        $("#delete_all").css("visibility", "hidden");
    }
}

function deleted(id) {
    input_obj = id
        sweetAlert({
            title: 'Are you sure you want to delete?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0FBCD0',
            cancelButtonColor: '#FFFFFF',
            cancelButtonClass: 'cancel_btn',
            confirmButtonText: 'Delete',
            allowOutsideClick: false
          }).then((result) => {
            if (result) {
                $.ajax({
                    url : "/amivoice_ai/delete_entity_value",
                    type: "GET",
                    data: {"select_delete": input_obj, "value_id": $('#text_id').val()},
                    async: true,
                    contentType: 'application/json',
                    success: function (data) {
                        if (input_obj == ($('#text_value_id').val())){
                            unsaved = false;
                            window.location = '/amivoice_ai/entity/new?id='+$('#text_id').val();
                        }
                        $('.table_keyword').html(data.msg);
                        $('.table_keyword').DataTable().ajax.reload();
                    }
                })
                delete_success();
            }
          })
    }

    $(window).load(function(){
        setTimeout(function(){ $('.alert.alert-danger').fadeOut() }, 10000);
        setTimeout(function(){ $('.alert.alert-success').fadeOut() }, 2000);
        setTimeout(function(){ $('.alert.alert-warning').fadeOut() }, 2000);
    });
    function delete_success() {
        $('#delete_success').fadeIn(0);
        setTimeout(function(){ $('#delete_success').fadeOut() }, 2000);
    }
