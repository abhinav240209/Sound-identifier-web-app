//https://teachablemachine.withgoogle.com/models/6I_gwxEl4/model.json



function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true,

    });
   Mysoundclassifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6I_gwxEl4/model.json", modelReady);
  
}

function modelReady() {
    Mysoundclassifier.classify(gotResult);
}

function gotResult(error,results){
      if(error) {
          console.error(error);
      }

      else {
          console.log(results);
          output_name=results[0].label;
          output_confidence=(results[0].confidence*100).toFixed(2) + "%";
          r=Math.floor(Math.random()*255)+1;
          g=Math.floor(Math.random()*255)+1;
          b=Math.floor(Math.random()*255)+1;      
          console.log(r +", "+ g+ ", " + b); 
          document.getElementById("sound").innerHTML=output_name;   
          document.getElementById("sound").style.color="rgb("+r+", "+g+", "+b+")";
          document.getElementById("accuracy").innerHTML=output_confidence;
          document.getElementById("accuracy").style.color="rgb("+r+", "+g+", "+b+")";

          if(output_name=="clapping"){
              document.getElementById("1").src="aliens-01.gif";
              document.getElementById("2").src="aliens-02.png";
              document.getElementById("3").src="aliens-03.png";
              document.getElementById("4").src="aliens-04.png";
              
          }

        else if(output_name=="Background Noise"){
            document.getElementById("1").src="aliens-01.png";
              document.getElementById("2").src="aliens-02.gif";
              document.getElementById("3").src="aliens-03.png";
              document.getElementById("4").src="aliens-04.png";
        }

        else if(output_name=="snapping") {
            document.getElementById("1").src="aliens-01.png";
              document.getElementById("2").src="aliens-02.png";
              document.getElementById("3").src="aliens-03.gif";
              document.getElementById("4").src="aliens-04.png";
        }

        else if(output_name=="knocking"){
            document.getElementById("1").src="aliens-01.png";
              document.getElementById("2").src="aliens-02.png";
              document.getElementById("3").src="aliens-03.png";
              document.getElementById("4").src="aliens-04.gif";
        }
       }
}

