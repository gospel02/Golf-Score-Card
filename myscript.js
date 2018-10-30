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
        "<input class='scoreinput' id='1' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='2' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='3' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='4' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='5' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='6' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='7' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='8' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='9' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='fronttotal'></input>" +
        "<input class='scoreinput' id='10' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='11' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='12' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='13' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='14' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='15' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='16' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='17' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='18' contenteditable='true' type='number' placeholder='-'></input>" +
        "<input class='scoreinput' id='backtotal'></input>" +
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

    

}

