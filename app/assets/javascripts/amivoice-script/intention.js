function validate_intention() {
    var constraints = {
        validate_intention: ['(^[A-Za-zก-ฮ0-9เไใโแ])([A-Za-z0-9ก-ฮะ-์. -]*)[A-Za-z0-9ก-ฮฯาะำ ่้๊๋ิีึุู็์.]$', "Enter intention with combination of english or thai alphabet. No special character(like ! and &) within 200 characters."],
        // validate_intention_name: ['(^[ก-ฮเไใโแ])([ก-ฮะ-์, ]*)[ก-ฮาะ ่้๊๋ิีึุู็ำ]$', "Enter pronuniation only thai alphabet. No special character(like ! and &) within 200 characters."],
        // validate_class_name: ['^[A-Za-zก-๙0-9_][A-Za-zก-๙0-9_]+[A-Za-zก-๙0-9_]$|^$', "Enter class name follow this pattern %entity name%. e.g. %province% . "],
        // validate_class_name_prob: ['^[-][1-3][.][0-9]$|^[-][4][.][0]$|^[-][1-4]$|^$', "Enter class map probability with numbers only -4.0 to -1.0 "],
        // validate_cost: ['^[-]*[1-3][.][0-9]$|^[-]*[4][.][0]$|^[-]*[1-4]$|^$', "Enter cost with numbers only -4.0 to 4.0 "],
        validate_tone: ['[่้๊๋์็][่้๊๋์็]+', "เช็ควรรณยุกต์ซ้อนกัน"],
        validate_vowels: ['[เใไโแ][ะาิีึืุูำ]+|[เใไโแ][เใไโแ]+|[ะิีึุู][าิีึืุูำ]+|[าิีึืุูำ][ิีึุู]+|[ำ][ำ]|[า][า]', "เช็คสระซ้อนกัน"],
        validate_tone_on_vowel: ['[ะาเแโไใำิีึืุู][่้๊๋์็]+|[ะาเแไใโีึื็ูำ][์]+|[์][ะาัีึื็ูาิุ]+|[็][ะาิีึืุูำ]+', "เช็ควรรณยุกต์ ไม้ทัณฑฆาต และ ไม้ไต่คู้ ที่อยู่บนสระบางตัว"],
        validate_special_case: ['[ก-ฮ][ิีึื][่้๊๋][ะาิีึืุูำ]', "พิเศษ"],
        validate_all: ['[่้๊๋์็][่้๊๋์็]+|[เใไโแ][ะัาิีึืุูำ]+|[เใไโแ][เใไโแ]+|[ะิีึุูั][าิีึืุูำะั]+|[าิีึืุูำ][ิีึุูาำั]+|[ะาเแโไใำ][่้๊๋์็ั]+|[ะาเแไใโีึื็ูัำ][์]+|[์][ะาัีึื็ูาิุ]+|[็][ะัาิีึืุูำ]+|[่้๊๋][ุูิึีืั]+|[.][.]|[ฯ][ล]*[ฯ]', "เช็ครวม"],
        validate_release: ['[aaa]', "[บ่ได้เด้อ]"],
        validate_intention_code: ['[[0-9]*(\.[0-9]+)]', 'Enter intention code only number']
    };
    var intention_tag = document.getElementById("txt_intention_tag");
    var intention_name = document.getElementById("txt_intention_name");
    var intention_code= document.getElementById("txt_intention_code");

    //var constraint_intention_tag = new RegExp(constraints['validate_intention'][0], "");
    var constraint_intention = new RegExp(constraints['validate_intention'][0], "");
    var constranint_intention_code = new RegExp(constraints['validate_intention_code'][0],"")

    var all_constraint = new RegExp(constraints['validate_all'][0], "");
    var tone_constraint = new RegExp(constraints['validate_tone'][0], "");
    var vowels_constraint = new RegExp(constraints['validate_vowels'][0], "");
    var tone_on_vowel_constraint = new RegExp(constraints['validate_tone_on_vowel'][0], "");

    check_intention_tag = constraint_intention.test(intention_tag.value);
    check_intention_name = constraint_intention.test(intention_name.value);
    check_intention_code = constranint_intention_code.test(intention_name_code);

    
    check_all_intention_tag = all_constraint.test(intention_tag.value);
    check_all_intention_name = all_constraint.test(intention_name.value);
    
    check_tone_intention_tag = tone_constraint.test(intention_tag.value);
    check_tone_intention_name = tone_constraint.test(intention_name.value);

    check_vowels_intention_tag = vowels_constraint.test(intention_tag.value);
    check_vowels_intention_name = vowels_constraint.test(intention_name.value);

    check_tone_on_vowel_intention_tag = tone_on_vowel_constraint.test(intention_tag.value);
    check_tone_on_vowelintention_name = tone_on_vowel_constraint.test(intention_name.value);

    //console.log("word ==================="+check_word)
    //console.log("วรรณยุก๖ต์้อน ==================="+check_tone)
    //console.log("สระซ้อน ==================="+check_vowels)
    //console.log("วรรณซ้อนสระบางตัว ==================="+check_tone_on_vowel)
    //console.log("รวม ==================="+check_tone_intention_tag)

    if (check_intention_tag == true && check_tone_intention_tag == false) {
        intention_tag.setCustomValidity("");
    } else {
        intention_tag.setCustomValidity(constraints['validate_intention'][1]);
    }
    if (check_intention_name == true && check_tone_intention_name == false) {
        intention_name.setCustomValidity("");
    } else {
        intention_name.setCustomValidity(constraints['validate_intention'][1]);
    }
}

function checkbox_intention_datatable() {
    var counter = 0, // counter for checked checkboxes
        i = 0,       // loop variable
        url = '',    // final url string    
        input_obj = document.getElementsByClassName('select_delete_intention');
    for (i = 0; i < input_obj.length; i++) {
        if (input_obj[i].type === 'checkbox' && input_obj[i].checked === true) {
            counter++;
            url = url + ',' + input_obj[i].value;
        }
    }
    if (counter > 0) {
        // remove first "&" from the generated url string
        url = url.substr(1);
        // display final url string
        $("#delete_id_intention").val(url);
        $("#delete_all").show("slow");
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
                    url: "/delete_select_intentions",
                    type: "GET",
                    // data: {
                    //     id: $('#txt_intention_id').val()
                    // },
                    data: { "select_delete": url, "value_id": $('#text_id').val() },
                    async: true,
                    contentType: 'application/json',
                    success: function (data) {
                        if (url.split(',').includes($('#txt_intention_id').val())) {
                            unsaved = false;
                            window.location = 'intentions';
                        }
                        $('.table_intention').DataTable().ajax.reload();
                        $('.table_intention').html(data.msg);
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

function show_delete_intention() {
    var counter = 0,
        i = 0,
        input_obj = document.getElementsByClassName('select_delete_intention');
    for (i = 0; i < input_obj.length; i++) {
        if (input_obj[i].type === 'checkbox' && input_obj[i].checked === true) {
            counter++;
        }
    }
    if (counter > 0) {
        $("#delete_all").css("visibility", "visible");
        $('#count-checked-checkboxes').text(counter);
    }
    else {
        $("#delete_all").css("visibility", "hidden");
    }
}


function delete_intention(id) {
    url = id;
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
                url: "/delete_intentions",
                type: "DELETE",
                data: { "id": url, "value_id": url},
                async: true,
                dataType: "JSON",
                //contentType: 'application/json',
                success: function (data) {
                    if (url == ($('#text_intention_id').val())) {
                        unsaved = false;
                        window.location = 'intentions';
                    }
                    $('.table_intention').DataTable().ajax.reload();
                    $('.table_intention').html(data.msg);
                }
            })
            delete_success();
        }
    })
}

// $(document).on('turbolinks:load', function(){ 
//     $.fn.set_value_checkbox_first();
// });

// $(document).ready(function () {
//     $("#validclass_name").change(function () {
//         if ($(this).val() == "") {
//             $('#validclass_prob').val("");
//             $("#validclass_prob").prop("disabled", true);
//         } else {
//             $("#validclass_prob").prop("disabled", false);
//             $("#validclass_prob").prop('required', true);
//         }
//     });

//     $("#illegal_close").click(function () {
//         $('#get_incomplete').prop("checked", true);
//     });

//     if ($('#illegal_word').val() != '[]') {
//         $('#get_incomplete').prop("checked", true);
//         var params_only_new = 0;
//         var params_incomplete = 1;
//         var illegal_word = $('#illegal_word').val();
//         $.fn.set_value_checkbox_first(params_only_new, params_incomplete, illegal_word);
//     } else {
//         $.fn.set_value_checkbox_first(0, 0, "[]");
//     }

//     $("#get_onlynew").change(function () {
//         var illegal_word = $('#illegal_word').val();
//         if ($('#get_onlynew').is(":checked") && !$('#get_incomplete').is(":checked")) {
//             var params_only_new = 1;
//             var params_incomplete = 0;
//             $.fn.set_value_checkbox(params_only_new, params_incomplete, illegal_word);
//         } else if (!$('#get_onlynew').is(":checked") && $('#get_incomplete').is(":checked")) {
//             var params_only_new = 0;
//             var params_incomplete = 1;
//             $.fn.set_value_checkbox(params_only_new, params_incomplete, illegal_word);
//         } else if ($('#get_onlynew').is(":checked") && $('#get_incomplete').is(":checked")) {
//             var params_only_new = 1;
//             var params_incomplete = 1;
//             $.fn.set_value_checkbox(params_only_new, params_incomplete, illegal_word);
//         } else {
//             $.fn.set_value_checkbox_first(0, 0, illegal_word);
//         }
//     });
//     $("#get_incomplete").change(function () {
//         var illegal_word = $('#illegal_word').val();
//         if ($('#get_incomplete').is(":checked") && !$('#get_onlynew').is(":checked")) {
//             var params_only_new = 0;
//             var params_incomplete = 1;
//             $.fn.set_value_checkbox(params_only_new, params_incomplete, illegal_word);
//         } else if (!$('#get_incomplete').is(":checked") && $('#get_onlynew').is(":checked")) {
//             var params_only_new = 1;
//             var params_incomplete = 0;
//             $.fn.set_value_checkbox(params_only_new, params_incomplete, illegal_word);
//         } else if ($('#get_incomplete').is(":checked") && $('#get_onlynew').is(":checked")) {
//             var params_only_new = 1;
//             var params_incomplete = 1;
//             $.fn.set_value_checkbox(params_only_new, params_incomplete, illegal_word);
//         } else {
//             $.fn.set_value_checkbox_first(0, 0, illegal_word);
//         }
//     });

// });
// $.fn.set_value_checkbox_first = function test(params_only_new, params_incomplete, illegal_word) {
//     $(".table_intention").each(function () {
//         var table = $(this).DataTable({
//             scrollX: true,
//             columnDefs: [{ 'targets': [0, 7, 2], 'orderable': false }, { className: "action", "targets": [7] }],
//             order: [[6, "desc"]],
//             pagingType: "full_numbers",
//             pageLength: 15,
//             bLengthChange: false,
//             processing: true,
//             serverSide: true,
//             dom: '<lf<t>ip<"go_to_page">>',
//             language: {
//                 "infoFiltered": ""
//             },
//             ajax: {
//                 "url": "datatable_intention",
//                 "contentType": "application/json",
//                 "data": {
//                     "params_only_new": params_only_new,
//                     "params_incomplete": params_incomplete,
//                     "illegal_word": illegal_word
//                 }
//             },
//             fnDrawCallback: function (oSettings) {
//                 $('.table_intention tbody tr').each(function () {
//                     var nTds = $('td', this);
//                     var word = $(nTds[1]).text();
//                     if (intention_tag.length > 28) {
//                         nTds[1].setAttribute('title', intention_tag.substring(32, 255));
//                     }
//                     var sTitle = $(nTds[2]).text();
//                     if (sTitle.length > 40) {
//                         nTds[2].setAttribute('title', sTitle.substring(44, 255));
//                     }
//                 });
//             },
//             rowCallback: function (row, data, index) {
//                 var i = 2;
//                 var color = "#f8d7da";
//                 if (data[2] == "" || data[2] === null) {
//                     $(row).find('td:eq(' + i + ')').css('background-color', color);
//                 }
//                 i++;
//             },
//             "bDestroy": true
//         });
//         $('div.go_to_page').html('<input type="text" value="1" id="go_page"><label style="color:#666;float:right;">Go to page: </label>');
//         $('#go_page').on('focusout', function () {
//             var paging = $('#go_page').val();
//             var number = parseInt(paging) - 1;
//             if (paging == "") {
//                 number = 0;
//                 $('#go_page').val(1);
//             }
//             table.page(number).draw('page');
//         });
//     });
// }
// $.fn.set_value_checkbox = function get_value(params_only_new, params_incomplete, illegal_word) {
//     $(".table_intention").each(function () {
//         var table = $(this).DataTable({
//             scrollX: true,
//             columnDefs: [{ 'targets': [0, 7, 2], 'orderable': false }, { className: "action", "targets": [7] }],
//             order: [[6, "desc"]],
//             pagingType: "full_numbers",
//             pageLength: 15,
//             bLengthChange: false,
//             processing: true,
//             serverSide: true,
//             dom: '<lf<t>ip<"go_to_page">>',
//             language: {
//                 "infoFiltered": ""
//             },
//             ajax: {
//                 "url": "datatable_intention",
//                 "contentType": "application/json",
//                 "data": {
//                     "params_only_new": params_only_new,
//                     "params_incomplete": params_incomplete,
//                     "illegal_word": illegal_word
//                 }
//             },
//             fnDrawCallback: function (oSettings) {
//                 $('.table_intention tbody tr').each(function () {
//                     var nTds = $('td', this);
//                     var word = $(nTds[1]).text();
//                     if (intention_tag.length > 28) {
//                         nTds[1].setAttribute('title', intention_tag.substring(32, 255));
//                     }
//                     var prob = $(nTds[2]).text();
//                     if (prob.length > 40) {
//                         nTds[2].setAttribute('title', prob.substring(44, 255));
//                     }
//                 });
//             },
//             rowCallback: function (row, data, index) {
//                 var i = 2;
//                 var color = "#f8d7da";
//                 if (data[2] == "" || data[2] === null) {
//                     $(row).find('td:eq(' + i + ')').css('background-color', color);
//                 }
//                 i++;
//             },
//             "bDestroy": true
//         });
//         $('div.go_to_page').html('<input type="text" value="1" id="go_page"><label style="color:#666;float:right;">Go to page: </label>');
//         $('#go_page').on('focusout', function () {
//             var paging = $('#go_page').val();
//             var number = parseInt(paging) - 1;
//             if (paging == "") {
//                 number = 0;
//                 $('#go_page').val(1);
//             }
//             table.page(number).draw('page');
//         });
//     });
// }