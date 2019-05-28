var happyImages = ["https://media2.giphy.com/media/26uf6o80xhd6MKGIw/giphy.gif", "https://media1.giphy.com/media/JltOMwYmi0VrO/giphy.gif", "https://media2.giphy.com/media/91o6Q8CZlGljO/giphy.gif"
    ];
    
var sadImages = ["https://media2.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif","https://media0.giphy.com/media/k61nOBRRBMxva/giphy.gif","https://media1.giphy.com/media/2WxWfiavndgcM/giphy.gif"
    ];
    
var angryImages = ["https://media.giphy.com/media/Vi4MRwWi9sYpi/giphy.gif","https://media.giphy.com/media/X1dWhZOq7gODm/giphy.gif","https://media2.giphy.com/media/sUzZwE9AgI8iA/giphy.gif"
    ];
    
var hungryImages = ["https://media2.giphy.com/media/daLw3QnTCkDjG/giphy.gif","https://i.pinimg.com/originals/be/ab/d/beabd47f4d2addbd7d4b3bc39183cd2a.gif","https://media.giphy.com/media/NEelVYGngdrqg/giphy.gif"
    ];

function changeBackground(color){
    $("body").css("background-color", color);
}

function changeTextColor(color){
    $("body").css("color", color);
}

function displayImage(image){
    $(".images").append("<img src='" + image + "'>");
}

function displayImages(images){
    images.forEach(function(image){
        $(".images").append("<img src='" + image + "'>");
    });
}
    

function happyMood(){
        changeBackground("yellow");
        changeTextColor("pink");
        displayImages(happyImages);
}

function sadMood(){
        changeBackground("lightblue");
        changeTextColor("darkblue");
            displayImages(sadImages);
    }

 function angryMood(){
        changeBackground("red");
        changeTextColor("white");
            displayImage(angryImages);
    }
    
function hungryMood(){
        changeBackground("orange");
        changeTextColor("red");
        displayImage(hungryImages);
    }
    

    
$("button").click(function () {

var inputValue= $(".inputValue").val();

$("h1").hide();
$(".moodImage").hide();

if (inputValue === "happy"){
    happyMood();
  
}

else if (inputValue === "sad"){
   sadMood();
}

else if (inputValue === "angry"){
    angryMood();
}

else if (inputValue === "hungry"){
    hungryMood();
}

else { alert ("Please Enter One of The Following: Happy, Sad, Angry, or Hungry");
    }
    

    
});




