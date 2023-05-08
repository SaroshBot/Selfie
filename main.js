var Sr = window.webkitSpeechRecognition;
var content;
var recognition = new Sr();

function start()
{
    recognition.start();

}

recognition.onresult = function(event){
    console.log(event);
    content= event.results[0][0].transcript.toLowercase();
    if (content=="selfie"){
        speak()
        console.log(content);
    }
} 

function speak()
{
    var synth = window.speechSynthesis;
    Webcam.attach(camera)
    speak_data = "Taking your next selfie in 5 seconds"
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis) 
    setTimeout (function( )
{
    img_id = "selfie1";
    take_snapshot();
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance (speak_data);
    synth.speak(utterThis);
    }, 5000);

    setTimeout (function( )
{
    img_id = "selfie2";
    take_snapshot();
    speak_data = "Taking your next Selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance (speak_data);
    synth.speak(utterThis);
    }, 10000);

    setTimeout (function( )
{
    img_id = "selfie3";
    take_snapshot();
    }, 15000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
})
camera = document.getElementById("camera");



 function take_snapshot(){
console. log (img_id);

Webcam.snap(function (data_uri) {
if(img_id=="selfie1"){
document. getElementById("result1").innerHTML = '<img id-"selfie1" src="'+data_uri+'"/>'
}
if(img_id=="selfie2"){
document .getElementById("result2"). innerHTML = '<img id-"selfie2" src="'+data_uri+'"/>';
}
if(img_id=="selfie3"){
document .getElementById("result3"). innerHTML = '<img id-"selfie3" src="'+data_uri+'"/>';
    }
});
}