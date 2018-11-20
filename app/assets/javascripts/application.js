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


//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_self
//= require_tree .


// alert($cat.prop('nodeName'));


$(document).ready(function() {

    $(".card").hide();

    $(".container:eq(1) > ul:eq(0) > li").on('click', function(){
        $(".card").hide();
        $(this).next().toggle();
    });

    $(".drop").hide();

    $("nav > div > img").on('click', function(){
        $(".drop").toggle();
    });

    $("#nav_1").on('click', function(){
        $("#log_in").show();
    });

    $("#nav_2").on('click', function(){
        $("#sign_up").show();
    });

    $("#nav_3").on('click', function(){
        $("#log_out").show();
    });

    $("#nav_4").on('click', function(){
        $("#new_task").show();
    });


    $(".close").on('click', function(){
        $(".modal").hide();
    });



});


