// run in terminal:
//     /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir="/tmp/chrome_dev_session" --disable-web-security



$(document).ready(function() {

     initCamera();

});


function initCamera(){
     //needs
     var params = {"url": ""};
     var camera = new JpegCamera("#webcam");
     var captureButton = document.getElementById('analyse');

     captureButton.addEventListener('click', function(){

          console.log("CAPTURE");

          var snapshot = camera.capture();


          snapshot.upload({api_url: "http://alcwynparker.co.uk/DM/pete/upload.php"}).done(function(response) {

               var response_container = document.getElementById('response');
               response_container.innerHTML = response;

               runEmos();


          }).fail(function(status_code, error_message, response) {

          });
     });
}

function runEmos(){

     var params = {"url": ""};

     $.ajax({
          url: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?" + $.param(params),
          beforeSend: function(xhrObj) {
               // Request headers
               xhrObj.setRequestHeader("Content-Type", "application/json");
               xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "a1790d020a264312a86686637bb18825");
          },
          type: "POST",
          data: "{'url': 'http://alcwynparker.co.uk/DM/pete/uploads/face.jpg' }"
     }).done(function(data) {
console.log(data[0]);
     if (data[0] != null){

          console.log('GOT REAL DATA.')

          var total = data[0].scores.happiness  + data[0].scores.anger  + data[0].scores.neutral;
          var avg = (total /3) * 10;
          console.log( data[0].scores.happiness + '   ' + data[0].scores.anger  + '   ' + data[0].scores.neutral);
          console.log('Average: ' + avg);

          happyVal = Math.floor(avg);
          console.log("happy" + happyVal)

          document.getElementById("happy-result").innerHTML = '<p>' + happyVal+  '</p>';

     } else {
          runShitEmos();
     }

     });
}

function runShitEmos() {

     var params = {"url": ""};

     $.ajax({
          url: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?" + $.param(params),
          beforeSend: function(xhrObj) {
               // Request headers
               xhrObj.setRequestHeader("Content-Type", "application/json");
               xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "a1790d020a264312a86686637bb18825");
          },
          type: "POST",
          data: "{'url': 'https://ak3.picdn.net/shutterstock/videos/3696824/thumb/9.jpg' }"
     }).done(function(data) {

          console.log('shit backup data: ' +data[0]);

          console.log('USING BACKUP DATA')

          var total = data[0].scores.happiness  + data[0].scores.anger  + data[0].scores.neutral;
          var avg = (total /3) * 10;
          console.log( data[0].scores.happiness + '   ' + data[0].scores.anger  + '   ' + data[0].scores.neutral);
          console.log('Average: ' + avg);

          happyVal = Math.floor(avg);
          console.log("happy" + happyVal)

          document.getElementById("happy-result").innerHTML = '<p>' + happyVal+  '</p>';



     });

}

//--------------------------------------------------------------//

var stages = [];
stages.push(document.getElementById('one'));
stages.push(document.getElementById('two'));
stages.push(document.getElementById('three'));
stages.push(document.getElementById('four'));
stages.push(document.getElementById('video-app'));
stages.push(document.getElementById('mindfulness-app'));
stages.push(document.getElementById('music-app'));
stages.push(document.getElementById('chatbot-app'));
stages.push(document.getElementById('cat-video'));
stages.push(document.getElementById('dog-video'));
stages.push(document.getElementById('people-video'));
stages.push(document.getElementById('standup-video'));
stages.push(document.getElementById('pill-popup'));
stages.push(document.getElementById('pill-help'));
stages.push(document.getElementById('pill-drop'));


var currentStage = 0;

stages[currentStage].style.display = 'block';

function clickHandler() {
    setTimeout(showModal, 6000);
}


function showModal(){

     stages[currentStage].style.display = 'none';
         currentStage++;

         if (currentStage >= 4) currentStage = 0;

         stages[currentStage].style.display = 'block';

}


function mindfulness(){
     stages[currentStage].style.display = 'none';
         currentStage = 5;
         stages[currentStage].style.display = 'block';
}

function music(){
     stages[currentStage].style.display = 'none';
         currentStage = 6;
         stages[currentStage].style.display = 'block';
}

function chatbot(){
     stages[currentStage].style.display = 'none';
         currentStage = 7;
         stages[currentStage].style.display = 'block';
}

function analyse(){
     stages[currentStage].style.display = 'none';
         currentStage = 1;
         stages[currentStage].style.display = 'block';
}

function emotionResult(){
     stages[currentStage].style.display = 'none';
         currentStage = 3;
         stages[currentStage].style.display = 'block';
}

function catVideo(){
     stages[currentStage].style.display = 'none';
         currentStage = 8;
         stages[currentStage].style.display = 'block';

}

function dogVideo(){
     stages[currentStage].style.display = 'none';
         currentStage = 9;
         stages[currentStage].style.display = 'block';
}

function peopleVideo(){
     stages[currentStage].style.display = 'none';
         currentStage = 10;
         stages[currentStage].style.display = 'block';
}


function standupVideo(){
     stages[currentStage].style.display = 'none';
         currentStage = 11;
         stages[currentStage].style.display = 'block';
}


function pillContain(){
     stages[currentStage].style.display = 'none';
         currentStage = 12;
         stages[currentStage].style.display = 'block';
}



function pillHelp(){
     stages[currentStage].style.display = 'none';
         currentStage = 13;
         stages[currentStage].style.display = 'block';
}

function pillDrop(){
     stages[currentStage].style.display = 'none';
         currentStage = 14;
         stages[currentStage].style.display = 'block';
}

//---------------------------//



$("#analyse").one("click", function() {
     $("#analyse").unbind('click');
     console.log('done 1 click');
     $("#one" ).fadeOut( "fast", function() {
           clickHandler();
           $( "#two" ).fadeIn( "slow", function() {

               setTimeout(function(){$("#three").fadeIn()},10000);
               setTimeout(function(){$("#three").fadeOut()}, 11000);
               setTimeout(function(){$("#four").fadeIn()}, 11000);

         });
     });
});

$( ".effect-8").one('click',function() {
     $(".effect-8").unbind('click');
  $( "#four" ).fadeOut( "slow", function() {
       $( "#video-app" ).fadeIn( "slow", function() {
         // Animation complete.
       });
  });
});

$( ".effect-9").on('click',function(){
     $(".effect-9").unbind('click');
  $( "#four").fadeOut( "slow", function() {
       $( "#mindfulness-app" ).fadeIn( "slow", function() {
       });
  });
});

$( ".effect-10" ).click(function() {
     $(".effect-10").unbind('click');
  $( "#four" ).fadeOut( "slow", function() {
       $( "#music-app" ).fadeIn( "slow", function() {
       });
  });
});

$( ".effect-11" ).click(function() {
     $(".effect-11").unbind('click');
  $( "#four" ).fadeOut( "slow", function() {
       $( "#chatbot-app" ).fadeIn( "slow", function() {
       });
  });
});


$( ".effect-12" ).click(function() {
     $(".effect-12").unbind('click');
  $( "#chatbot-app" ).fadeOut( "slow", function() {
  pillContain();
  setTimeout(function(){ $('#pill-drop').fadeIn()}, 5000);
  setTimeout(function(){ $('#pill-popup').fadeOut()}, 7000);
  setTimeout(function(){ $('#pill-help').fadeIn()}, 8000);
  });

});




$( "#go-home" ).click(function() {
  $( "#pill-help" ).fadeOut( "slow", function() {
       $( "#chatbot-app" ).fadeIn( "slow", function() {

      });
  });
});








var audio, playbtn;
function initAudioPlayer(){
     audio = new Audio();
     audio.src = "audio/song1.mp3";
     audio.loop = true;
     audio.pause();

     playbtn = document.getElementById("playpausebtn");

     playbtn.addEventListener("click",playPause);

     function playPause(){
          if(audio.paused){
              audio.play();
              playbtn.style.background = "url(pause.svg) no-repeat";
         } else {
              audio.pause();
              playbtn.style.background = "url(play.svg) no-repeat";
         }
     }

}
window.addEventListener("load", initAudioPlayer);





var questions = [
    'Hello! How are you feeling?',
    'What exactly is wrong?',
    'Would you like to try one?',
    'Can I help you with anything else?',
    'Glad I could help! It was nice talking to you, have a great day! :)'
];
var num = 0;

var inputBox = document.querySelector("#ans");
var output = document.querySelector("#result");
output.innerHTML = questions[num];

function showResponse() {
  var input = inputBox.value;
  if(inputBox.value == "") {

  }else {
  if(num == 0) {
    output.innerHTML = 'Let me help you';
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "...");

    ++num;
    setTimeout(changeQuestion, 1000);
  } else if(num == 1) {
    output.innerHTML = input+'? I know what might help... an ePill!';
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "...");

    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 2) {
    output.innerHTML = 'An ePill instantly makes you happy, try one for yourself! Just click the pill button below.';
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "...");

    ++num;
    setTimeout(changeQuestion, 4000);
  } else if(num == 3) {

    inputBox.value = "";
    inputBox.setAttribute("placeholder", "...");

    ++num;
    setTimeout(changeQuestion, 100);
  }
  }
}

function changeQuestion() {
  inputBox.setAttribute("placeholder", "Type here");
  output.innerHTML = questions[num];
  if(num == 4) {
    inputBox.style.display = "none";
  }
}

$(document).on('keypress', function(e) {
  if(e.which == 13) {
    showResponse();
  }
})

$( "#ans" ).focus();



//-------------------------INACTIVITY TIMEOUT (FOR THE INSTALLATION)------------------------------------//

function idleTimer() {
    var t;
    //window.onload = resetTimer;
    window.onmousemove = resetTimer; // catches mouse movements
    window.onmousedown = resetTimer; // catches mouse movements
    window.onclick = resetTimer;     // catches mouse clicks
    window.onscroll = resetTimer;    // catches scrolling
    window.onkeypress = resetTimer;  //catches keyboard actions

    function logout() {
        window.location.href = 'index.html';  //Adapt to actual logout script
    }

   function resetTimer() {
        clearTimeout(t);
        t = setTimeout(logout, 60000);  // time is in milliseconds (1000 is 1 second)

    }
}
idleTimer();
