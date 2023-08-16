import './App.css';

function App() {
  return (

    <div className="container">

      <div className="inner">

        <div className="topper">
          <p>Draw : <span id="content2">0</span></p>
          <p>Computer : <span id="content3">0</span></p>
          <p>User : <span id="content4">0</span></p>
        </div>

        <div className="clicking">

          <p onClick={stoner}>STONE</p>
          <p onClick={paper}>PAPER</p>
          <p onClick={scissor}>SCISSOR</p>
           
        </div>

        <div className="Winners">

          <p id="content" ></p>
          <p id="content1"></p>

        </div>

      </div>

    </div>
  );
}

let Draw = 0;
let Computer = 0;
let user = 0;
function stoner()
{
    

    let random=Math.ceil(Math.random()*3);
    if(random===1)
    {
      document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN STONE ";
      document.getElementById("content1").innerHTML="DRAW OF THE MATCH";
      Draw++;
      document.getElementById("content2").innerHTML=Draw;
    }
    else if(random===2)
    {

      document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN PAPER ";
      document.getElementById("content1").innerHTML="COMPUTER WON THE MATCH";
      Computer++;
      document.getElementById("content3").innerHTML=Computer;
    }
    else if(random===3)
    {

      document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN SCISSOR ";
      document.getElementById("content1").innerHTML="YOU WON THE MATCH";
      user++;
      document.getElementById("content4").innerHTML=user;
    }

}

// eslint-disable-next-line no-unused-vars
function paper()
{

  let random=Math.ceil(Math.random()*3);
  if(random===1)
  {
    document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN STONE ";
    document.getElementById("content1").innerHTML="YOU WON THE MATCH";
    user++;
    document.getElementById("content4").innerHTML=user;
  }
  else if(random===2)
  {

    document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN PAPER ";
    document.getElementById("content1").innerHTML="DRAW OF THE MATCH";
    Draw++;
    document.getElementById("content2").innerHTML=Draw;
  }
  else if(random===3)
  {

    document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN SCISSOR ";
    document.getElementById("content1").innerHTML="COMPUTER WON THE MATCH";
    Computer++;
    document.getElementById("content3").innerHTML=Computer;
  }
        
}


function scissor()
{

  let random=Math.ceil(Math.random()*3);
  if(random===1)
  {
    document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN STONE ";
    document.getElementById("content1").innerHTML="COMPUTER WON THE MATCH";
    Computer++;
    document.getElementById("content3").innerHTML=Computer;
  }
  else if(random===2)
  {

    document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN PAPER ";
    document.getElementById("content1").innerHTML="YOU WON THE MATCH";
    user++;
    document.getElementById("content4").innerHTML=user;
  }
  else if(random===3)
  {

    document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN SCISSOR ";
    document.getElementById("content1").innerHTML="DRAW OF THE MATCH";
    Draw++;
    document.getElementById("content2").innerHTML=Draw;
  }

}



export default App;
