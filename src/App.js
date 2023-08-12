import './App.css';

function App() {
  return (

    <div className="container">

      <div className="inner">

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



function stoner()
{
    // let Draw,count,user = 0;

    let random=Math.ceil(Math.random()*3);
    if(random===1)
    {
      document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN STONE ";
      document.getElementById("content1").innerHTML="DRAW OF THE MATCH";
      // Draw++;
      // document.getElementById("Computer_scores2").innerHTML=Draw;
    }
    else if(random===2)
    {

      document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN PAPER ";
      document.getElementById("content1").innerHTML="COMPUTER WON THE MATCH";
      // count++;
      // document.getElementById("Computer_scores1").innerHTML=count;
    }
    else if(random===3)
    {

      document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN SCISSOR ";
      document.getElementById("content1").innerHTML="YOU WON THE MATCH";
      // user++;
      // document.getElementById("Computer_scores0").innerHTML=user;
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
      // Draw++;
      // document.getElementById("Computer_scores2").innerHTML=Draw;
  }
  else if(random===2)
  {

    document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN PAPER ";
    document.getElementById("content1").innerHTML="DRAW OF THE MATCH";
      // count++;
      // document.getElementById("Computer_scores1").innerHTML=count;
  }
  else if(random===3)
  {

    document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN SCISSOR ";
    document.getElementById("content1").innerHTML="COMPUTER WON THE MATCH";
      // user++;
      // document.getElementById("Computer_scores0").innerHTML=user;
  }
        
}


function scissor()
{

  let random=Math.ceil(Math.random()*3);
  if(random===1)
  {
    document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN STONE ";
    document.getElementById("content1").innerHTML="COMPUTER WON THE MATCH";
      // Draw++;
      // document.getElementById("Computer_scores2").innerHTML=Draw;
  }
  else if(random===2)
  {

    document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN PAPER ";
    document.getElementById("content1").innerHTML="YOU WON THE MATCH";
      // count++;
      // document.getElementById("Computer_scores1").innerHTML=count;
  }
  else if(random===3)
  {

    document.getElementById("content").innerHTML="COMPUTER HAS CHOOSEN SCISSOR ";
    document.getElementById("content1").innerHTML="DRAW OF THE MATCH";
      // user++;
      // document.getElementById("Computer_scores0").innerHTML=user;
  }

}



export default App;
