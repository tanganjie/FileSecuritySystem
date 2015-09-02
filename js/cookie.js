/**
 * Created by sunxinwei on 8/31/15.
 */
$(document).ready(function(){
    var remmemberme = $.cookie("remmemberme");
    var path = window.location.pathname;
    var filenames = path.split("/");
    var filename = filenames[filenames.length - 1];
    //if(remmemberme != undefined){
    //    if(remmemberme == "false" && filename != "index.html"){
    //        $.post("http://localhost:8080/FSS/rest/userinfo/sessioninfo", "", function(data) {
    //            if(data != undefined){
    //                //alert(data.username);
    //            }
    //            else{
    //                $.removeCookie("remmemberme");
    //                $.removeCookie("username");
    //                $.removeCookie("password");
    //                window.location = "index.html";
    //            }
    //        }, "json");
    //    }
    //    else if(remmemberme == "true"){
    //        var username = $.cookie("username");
    //        var password = $.cookie("password");
    //        var paramData = "username=" + username + "&password=" + password;
    //        $.post("http://localhost:8080/FSS/rest/userinfo/login", paramData, function(data){
    //            if(data != undefined){
    //                if(path == "/FileSecuritySystem/index.html"){
    //                    window.location = "system_index.html";
    //                }
    //            }else{
    //                $.removeCookie("remmemberme");
    //                $.removeCookie("username");
    //                $.removeCookie("password");
    //                if(path != "index.html"){
    //                    window.location = "index.html";
    //                }
    //            }
    //        }, "json");
    //    }
    //}
    //else if(path != "/FileSecuritySystem/index.html"){
    //    window.location = "index.html";
    //}
});