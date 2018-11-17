let courseid;
let coursecollection;

(function(){
    loadDoc();
    console.log(courseid)
})();

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          coursecollection = JSON.parse(this.responseText);
        console.log(coursecollection);
        $("#courseselect").append("<option value='' disabled selected hidden>Pick Course From Dropdown</option>");

        for(let i = 0; i < coursecollection.courses.length; i++){
        
        $("#courseselect").append("<option value='" + coursecollection.courses[i].id +"'>" + coursecollection.courses[i].name + "</option>");
        }
      }
    };
    xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses", true);
    xhttp.send();
}
function loadCourses(crseid) {
    courseid = crseid;
    console.log(courseid)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        mycourse = JSON.parse(this.responseText);
        console.log(mycourse);
        $("#teeselect").append("<option value='' disabled selected hidden>Pick Tees From Dropdown</option>");


        let teearray = mycourse.data.holes[0].teeBoxes;
        for(let i = 0; i < teearray.length; i++){
            $("#teeselect").append("<option value='" + i +"'>" + teearray[i].teeType + "</option>");
            
            }
            $("#coursepicked").append("<div>" + mycourse.data.name + "</div>");


        
            //$("#yard1").append("<div>" + mycourse.data.holes[0].teeBoxes[0].yards + "</div>");            
        }
    };
    xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses/" + courseid, true,);
    xhttp.send();
}
function choosetee(teeid) {
    console.log(teeid)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        mycourse = JSON.parse(this.responseText);
        console.log(mycourse);

        $("#teespicked").append("<div>" + 'Tee Color -' + ' ' + mycourse.data.holes[0].teeBoxes[teeid].teeColorType + "</div>");   
        
        let holesarray = mycourse.data.holes;
        for(let i = 0; i < holesarray.length; i++){
            $("#Holes1").append("<div class='holes' value='" + i +"'>" + holesarray[i].hole + "</div>");
            
        };

        let yardsarrayout = mycourse.data.holes;
        let i = -1;
        while(i < 8){
            yardsarrayout;
            i++; 
            $("#yardout").append("<div class='yardsout' value='" + i +"'>" + yardsarrayout[i].teeBoxes[teeid].yards + "</div>");
        };

        let yardsarrayin = mycourse.data.holes;
        for(let i = 9; i < yardsarrayin.length; i++){
            $("#yardin").append("<div class='yardsin' value='" + i +"'>" + yardsarrayin[i].teeBoxes[teeid].yards + "</div>");
            

        };

        let yardsoutsum = 0;
        $('.yardsout').each(function(){
        yardsoutsum += parseFloat($(this).text());
        $("#yardsout").text(yardsoutsum);
        });

        let yardsinsum = 0;
        $('.yardsin').each(function(){
        yardsinsum += parseFloat($(this).text());
        $("#yardsin").text(yardsinsum);
        });

        let yardstotalsum = 0;
        $('.yardsout, .yardsin').each(function(){
        yardstotalsum += parseFloat($(this).text());
        $("#yardstotal").text(yardstotalsum);
        });

        let pararrayout = mycourse.data.holes;
        let a = -1;
        while(a < 8){
            pararrayout;
            a++; 
            $("#parout").append("<div class='parsout' value='" + a +"'>" + pararrayout[a].teeBoxes[teeid].par + "</div>");
        };
        
        let pararrayin = mycourse.data.holes;
        for(let i = 9; i < pararrayin.length; i++){
            $("#parin").append("<div class='parsin' value='" + i +"'>" + pararrayin[i].teeBoxes[teeid].par + "</div>");
        };

        let parsoutsum = 0;
        $('.parsout').each(function(){
        parsoutsum += parseFloat($(this).text());
        $("#parsout").text(parsoutsum);
        });

        let parsinsum = 0;
        $('.parsin').each(function(){
        parsinsum += parseFloat($(this).text());
        $("#parsin").text(parsinsum);
        });

        let parstotalsum = 0;
        $('.parsout, .parsin').each(function(){
        parstotalsum += parseFloat($(this).text());
        $("#parstotal").text(parstotalsum); 
        });

        let hdpsarray = mycourse.data.holes;
        for(let i = 0; i < hdpsarray.length; i++){
            $("#handicap1").append("<div class='hdps' value='" + i +"'>" + hdpsarray[i].teeBoxes[teeid].hcp + "</div>");
        }
    }
    };
    xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses/" + courseid,  true,);
    xhttp.send();

} 

$('.numbinput').on("keydown", function(event){
    if(event.which === 13){
        addplayers();
    }
});

function addplayers(){
    let numbplayers = $(".numbinput").val();

    if($.trim( $('.numbinput').val()) == ''){
    alert('Please input number of Players');
    return false;
    
    
    }else{

        for(let i = 1; i <= numbplayers; i++){
        $(".content").append( "<div class='column'>" + 
        "<i class='trashcan far fa-trash-alt'></i>" +
        "<input class='players" + i +"' id='player' type='text' contenteditable='true' placeholder='Enter Player " + i + "'></input>" +
        "<input class='scoreinputf" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputf" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputf" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputf" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputf" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputf" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputf" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputf" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputf" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputb" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputb" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputb" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputb" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputb" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputb" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputb" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputb" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinputb" + i +"' id='pinput' contenteditable='true' type='number' min='0' placeholder=''></input>" +
        "<input class='scoreinput' id='fronttotal" + i +"'></input>" +
        "<input class='scoreinput' id='backtotal" + i +"'></input>" +
        "<input class='scoreinput' id='total" + i +"'></input>" +
        "</div");
        }
    }    
    $(".modal").hide();
    $(".content").css("filter", "blur(0px)");

    $(".trashcan").click(function(){

        $(this).parent().animate({
            opacity: 0,
        }, 800, function(){
            $(this).remove();
        });
    });

    $(document).on("change", ".scoreinputf1", function() {
        var sum = 0;
        $(".scoreinputf1").each(function(){
        sum += +$(this).val();
        
        });
    
        $("#fronttotal1").val(sum);
    });

    $(document).on("change", ".scoreinputf2", function() {
        var sum = 0;
        $(".scoreinputf2").each(function(){
        sum += +$(this).val();
        
        });
    
        $("#fronttotal2").val(sum);
    });

    $(document).on("change", ".scoreinputf3", function() {
        var sum = 0;
        $(".scoreinputf3").each(function(){
        sum += +$(this).val();
        
        });
    
        $("#fronttotal3").val(sum);
    });

    $(document).on("change", ".scoreinputf4", function() {
        var sum = 0;
        $(".scoreinputf4").each(function(){
        sum += +$(this).val();
        
        });
    
        $("#fronttotal4").val(sum);
    });


    $(document).on("change", ".scoreinputb1", function() {
        var sum = 0;
        $(".scoreinputb1").each(function(){
            sum += +$(this).val();
        });
        $("#backtotal1").val(sum);
    });

    $(document).on("change", ".scoreinputb2", function() {
        var sum = 0;
        $(".scoreinputb2").each(function(){
            sum += +$(this).val();
        });
        $("#backtotal2").val(sum);
    });

    $(document).on("change", ".scoreinputb3", function() {
        var sum = 0;
        $(".scoreinputb3").each(function(){
            sum += +$(this).val();
        });
        $("#backtotal3").val(sum);
    });

    $(document).on("change", ".scoreinputb4", function() {
        var sum = 0;
        $(".scoreinputb4").each(function(){
            sum += +$(this).val();
        });
        $("#backtotal4").val(sum);
    });

    $(document).on("change", ".scoreinputf1, .scoreinputb1", function() {
        var sum = 0;
        $(".scoreinputf1, .scoreinputb1").each(function(){
            sum += +$(this).val();
        });
        $("#total1").val(sum);
    });

    $(document).on("change", ".scoreinputf2, .scoreinputb2", function() {
        var sum = 0;
        $(".scoreinputf2, .scoreinputb2").each(function(){
            sum += +$(this).val();
        });
        $("#total2").val(sum);
    });

    $(document).on("change", ".scoreinputf3, .scoreinputb3", function() {
        var sum = 0;
        $(".scoreinputf3, .scoreinputb3").each(function(){
            sum += +$(this).val();
        });
        $("#total3").val(sum);
    });

    $(document).on("change", ".scoreinputf4, .scoreinputb4", function() {
        var sum = 0;
        $(".scoreinputf4, .scoreinputb4").each(function(){
            sum += +$(this).val();
        });
        $("#total4").val(sum);
    });

    

}


/*function addplayers(){
    for(let i = 1; i <= numplayers; i++){
        $(".left").append("<div" + numplayers + "</div")
    }
}

function checkname(myval){
    $(".pname").each(function(){
        let player = $(this).html()
        if(myval === player){
            console.log("can't use that name")
            $(".perror").html("Sorry")

        }
        else{
            $(".perror").html("");
        }
        
        console.log($(this).html())

    });

}*/







 

