

(function(){
    loadDoc();
})();

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          coursecollection = JSON.parse(this.responseText);
        console.log(coursecollection);

        for(let i = 0; i < coursecollection.courses.length; i++){
        $("#courseselect").append("<option value='" + coursecollection.courses[i].id +"'>" + coursecollection.courses[i].name + "</option>");
        }
      }
    };
    xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses", true);
    xhttp.send();
}
function loadCourses(courseid) {
    //set to empty
    console.log(courseid)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        mycourse = JSON.parse(this.responseText);
        console.log(mycourse);

        let teearray = mycourse.data.holes[0].teeBoxes;
        for(let i = 0; i < teearray.length; i++){
            $("#teeselect").append("<option value='" + i +"'>" + teearray[i].teeType + "</option>");
            }
        }
    };
    xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses/" + courseid, true,);
    xhttp.send();
}
function choosetee(teeid) {
    //set to empty
    console.log(teeid)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        mytees = JSON.parse(this.responseText);
        console.log(mytees);

        let yardsarray = mytees.data.holes[0].teeBoxes[2];
        for(let i = 0; i < yardsarray.length; i++){
            $("#teepicked").append("<option value='" + i +"'>" + yardsarray[i].yards + "</option>");
            
        }
     }
    };
    xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses/" + ,  true,);
    xhttp.send();

} 

$('.numbinput').on("keydown", function(event){
    if(event.which === 13){
        addplayers();
    }
});




function addplayers(){
    let numbplayers = $(".numbinput").val();

    if($.trim( $('.numbinput').val()) == '')
    alert('Please input number of Players');
    else{

        for(let i = 1; i <= numbplayers; i++){
        $(".content").append( "<div class='column'>" + 
        "<i class='trashcan far fa-trash-alt'></i>" +
        "<input class='players' contenteditable='true' placeholder='Enter Player " + i + "'></input>" +
        "<input class='scoreinputf' id='1' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputf' id='2' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputf' id='3' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputf' id='4' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputf' id='5' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputf' id='6' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputf' id='7' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputf' id='8' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputf' id='9' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='fronttotal'></input>" +
        "<input class='scoreinputb' id='10' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputb' id='11' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputb' id='12' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputb' id='13' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputb' id='14' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputb' id='15' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputb' id='16' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputb' id='17' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinputb' id='18' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='backtotal'></input>" +
        "<input class='scoreinputt' id='total'></input>" +
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

    $(document).on("change", ".scoreinputf", function() {
        var sum = 0;
        $(".scoreinputf").each(function(){
            sum += +$(this).val();
        });
        $("#fronttotal").val(sum);
    });


    
    $(document).on("change", ".scoreinputb", function() {
        var sum = 0;
        $(".scoreinputb").each(function(){
            sum += +$(this).val();
        });
        $("#backtotal").val(sum);
    });

    $(document).on("change", ".scoreinput", function() {
        var sum = 0;
        $(".scoreinput").each(function(){
            sum += +$(this).val();
        });
        $("#total").val(sum);
    });

    

}

 

