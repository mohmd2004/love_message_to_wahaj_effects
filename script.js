var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  if (button.textContent === "Click Me! ❤") {
    button.textContent = "loading...";
    fetch('send_mail.php')
      .then(response => {
        if (response.ok) {
          button.textContent = "Check Your Email 🙃";
        } else {
          console.error('Failed to send email');
          button.textContent = "Error 😞";
        }
      })
      .catch(error => {
        // Handle network errors or other issues
        console.error('Error:', error);
        button.textContent = "Error 😞";
      });
  }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(40, window.innerWidth / 74); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // glow effect
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    if (window.innerWidth < 250) {           //shortens long sentence for mobile screens
        drawTextWithLineBreaks(["إنتي مثل نجم نادر، مو من النجوم اللي تنشاف كل يوم، ",
    "إنتي من ذيج اللي يطلعن مرّة كل ألف سنة،"
    ," وإذا ما كنت منتبه،"," تفوّتك. بس لحسن حظي،",
    " أنا كنت دا أباوع للسماء بوقتها."]
, canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
    }
    if(frameNumber < 250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText(
            ["إنتي مثل نجم نادر، مو من النجوم اللي تنشاف كل يوم، ",
            "إنتي من ذيج اللي يطلعن مرّة كل ألف سنة،"
            ," وإذا ما كنت منتبه،"," تفوّتك. بس لحسن حظي،",
            " أنا كنت دا أباوع للسماء بوقتها."]
        , canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    //fades out the text by decreasing the opacity
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText(["إنتي مثل نجم نادر، مو من النجوم اللي تنشاف كل يوم، ",
        "إنتي من ذيج اللي يطلعن مرّة كل ألف سنة،"
        ," وإذا ما كنت منتبه،"," تفوّتك. بس لحسن حظي،",
        " أنا كنت دا أباوع للسماء بوقتها."]

        , canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 500){
        opacity = 0;
    }
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {           //shortens long sentence for mobile screens
            drawTextWithLineBreaks(["جذبچ إليّ أقوى من أي قوة جاذبية، نيوتن جان غافل عنج. وحتى لو الزمن نسبي، وياج أحس اللحظة تصير لا نهائية، مثل ما آينشتاين چان يحچي بس ما يگدر يوصفج"]
, canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("جذبچ إليّ أقوى من أي قوة جاذبية، نيوتن جان غافل عنج. وحتى لو الزمن نسبي، وياج أحس اللحظة تصير لا نهائية، مثل ما آينشتاين چان يحچي بس ما يگدر يوصفج", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["كل خلية بجسمي تعرفچ، دقات قلبي تشتغل بإسمج، حتى دي ان اي مالتـي لو تقراه، تلقى بيه جينات حبج. إنتي مو بس وياي، إنتي داخلي."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("كل خلية بجسمي تعرفچ، دقات قلبي تشتغل بإسمج، حتى دي ان اي مالتـي لو تقراه، تلقى بيه جينات حبج. إنتي مو بس وياي، إنتي داخلي." , canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 1000){
        opacity = 0;
    }
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("إحنا مزيج نادر، تفاعلنا مو بسيط، بيه حرارة، بس مو يحترك، بيه طاقة، بس تهدّي. تركيبتج  ريأكشن  بقلبي ما يخلص.", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("إحنا مزيج نادر، تفاعلنا مو بسيط، بيه حرارة، بس مو يحترك، بيه طاقة، بس تهدّي. تركيبتج تسوي ريأكشن بقلبي ما يخلص.", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1500){
        opacity = 0;
    }
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("وجودك في حياتي مثل الخوارزمية المثالية، كل خطوة تمشيها تُنتج نتيجة صحيحة", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("وجودك في حياتي مثل الخوارزمية المثالية، كل خطوة تمشيها تُنتج نتيجة صحيحة", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2000){
        opacity = 0;
    }
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks([" كلشي بيج مرتب، مثل معادلة متوازنة، وكل ما أحاول أحلچ، أكتشف إنّي أني المجهول، وإنتي الثابت بكلّشي. حتى لو الدنيا تصير هوسة، وجودج يحولها لنظام مستقر."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText(" كلشي بيج مرتب، مثل معادلة متوازنة، وكل ما أحاول أحلچ، أكتشف إنّي أني المجهول، وإنتي الثابت بكلّشي. حتى لو الدنيا تصير هوسة، وجودج يحولها لنظام مستقر.", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["وجودك مثل الكود المثالي، كل شيء مكتوب بكفاءة، ما يحتاج أي تعديلات"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("وجودك مثل الكود المثالي، كل شيء مكتوب بكفاءة، ما يحتاج أي تعديلات", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2500){
        opacity = 0;
    }
    if(frameNumber > 2500 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["وهج؟ "], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("وهج؟ ", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 2750 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;


        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["مو بس اسم، هذا ظاهرة. يشبه أول وميض يصير بانفجار نجم، أو فلاش اللي يطلع من تفاعل كيميائي سريع. إنتي وهج بكل معنى، تنورين المكان بدون ما تحاولين، تسخّنين الجو حتى لو الجو بارد، "], canvas.width / 2, (canvas.height/2 + 60), fontSize, lineHeight);
        } else {
            context.fillText("مو بس اسم، هذا ظاهرة. يشبه أول وميض يصير بانفجار نجم، أو فلاش اللي يطلع من تفاعل كيميائي سريع. إنتي وهج بكل معنى، تنورين المكان بدون ما تحاولين، تسخّنين الجو حتى لو الجو بارد، ", canvas.width/2, (canvas.height/2 + 50));
        }

        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("وحتى قلبي؟ من قربج، دائماً بدرجة غليان ", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity = thirdOpacity + 0.01;

        button.style.display = "block";
    }   

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
