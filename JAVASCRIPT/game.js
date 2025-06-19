<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Rock Paper SCisspr</h1>
    <h2>choose any one</h2>
    <button onclick="getResult('rock')">Rock</button>
    <button onclick="getResult('Paper')">Paper</button>
    <button onclick="getResult('scissor')">scissor</button>


    <h1 id="result"></h1>
    <script>
        function getResult(userChoice){
            var choice=['rock','paper','scissor'];
            var computerChoice=choice[Math.floor(Math.random()*3)];
            console.log(computerChoice);

            var details=async()=>{
                var response= await fetch('https://dummyjson.com/');
                var users=await response.json();
                console.log(users)
            }

            details()
    //         var result="";
    //         if(userChoice==computerChoice){
    //             result="DRAW🤷‍♀️"
    //         }
    //         else if((userChoice=="rock"&&computerChoice=="paper")||(userChoice=="paper"&&computerChoice==="scissor")||(userChoice==="scissor"&&computerChoice==="rock")){
    //    result="Loss😒"

    //     }
    //     else{
    //         result="WIN😍😁"
    //     }
    //     document.getElementById('result').innerHTML=result;
    }
    </script>
</body>
</html>