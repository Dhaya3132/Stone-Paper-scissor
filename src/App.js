import './App.css';
import './Functions';

function App() {
  return (

    <div className="container">

      <div className="inner">

        <div className="scores">

           <p>Computer : <span id="Computer_scores0">0</span></p>
           <p>User : <span id="Computer_scores1">0</span></p>
           <p>Draw : <span id="Computer_scores2">0</span></p>

        </div>


        <div className="images">

          <p onClick={stoner} class="stone">STONE</p>
          {/* <p onClick={Paper}>PAPER</p>
          <p onClick={scissor}>SCISSOR</p> */}
           
        </div>

        <div>
          <p id="content" className="content1"></p>
          <p id="content2" className="content1"></p>


        </div>

      </div>

    </div>
  );
}



function stoner()
{
    let Draw,count,user = 0;

    let random=Math.ceil(Math.random()*3);
    if(random===1)
    {
      document.getElementById("content").innerHTML="Draw of the Match";
      Draw++;
      document.getElementById("content2").innerHTML="COMPUTER HAS CHOOSEN STONE ";
      document.getElementById("Computer_scores2").innerHTML=Draw;
    }
    else if(random===2)
    {
      document.getElementById("content").innerHTML="Computer own the match";
      count++;
      document.getElementById("content2").innerHTML="COMPUTER HAS CHOOSEN PAPER ";
      document.getElementById("Computer_scores1").innerHTML=count;
    }
    else if(random===3)
    {
      document.getElementById("content").innerHTML="User own the match";
      user++;
      document.getElementById("content2").innerHTML="COMPUTER HAS CHOOSEN SCISSOR ";
      document.getElementById("Computer_scores0").innerHTML=user;
    }

    
}



export default App;
