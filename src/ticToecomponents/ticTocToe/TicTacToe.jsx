import React, { useRef, useState } from 'react'
import cross_icon from "../Assets/x.png"
import circle_icon from "../Assets/o.png"
function TicTacToe() {
    let data=useRef(["","","","","","","","",""]);
let box1=useRef(null);
let box2=useRef(null);
let box3=useRef(null);
let box4=useRef(null);
let box5=useRef(null);
let box6=useRef(null);
let box7=useRef(null);
let box8=useRef(null);
let box9=useRef(null);
let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];
const [title, setTitle] = useState(
  <h1 className="my-[20px] text-white text-[40px] font-bold flex justify-center items-center">
    Tic Tac Toe Game
    <span className="text-[#26ffcb] pl-[15px]"> React</span>
  </h1>
);
    let [count,setCount]=useState(0);
    let [lock,setLock]=useState(false);

    const toggle=(e,num)=>{
        if(lock){
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML=`<img src='${cross_icon}'>`;
            data.current[num]='x';
            setCount(prev=>prev+1);
        }
        else{
             e.target.innerHTML=`<img src='${circle_icon}'>`;
            data.current[num]='o';
            setCount(prev=>prev+1);

        }
        checkWin();

    }
    const checkWin=()=>{
        if(data.current[0]===data.current[1] && data.current[1]===data.current[2] && data.current[2]!=="")
        {
            won(data.current[0]);
        }
       else if(data.current[3]===data.current[4] && data.current[4]===data.current[5] && data.current[5]!=="")
        {
            won(data.current[5]);
        }
         else if(data.current[0]===data.current[3] && data.current[3]===data.current[6] && data.current[6]!=="")
        {
            won(data.current[6]);
        }
         else if(data.current[1]===data.current[4] && data.current[4]===data.current[7] && data.current[7]!=="")
        {
            won(data.current[7]);
        }
         else if(data.current[2]===data.current[5] && data.current[5]===data.current[8] && data.current[8]!=="")
        {
            won(data.current[8]);
        }
         else if(data.current[0]===data.current[4] && data.current[4]===data.current[8] && data.current[8]!=="")
        {
            won(data.current[8]);
        }
         else if(data.current[6]===data.current[7] && data.current[7]===data.current[8] && data.current[8]!=="")
        {
            won(data.current[8]);
        }
         else if(data.current[2]===data.current[4] && data.current[4]===data.current[6] && data.current[6]!=="")
        {
            won(data.current[6]);
        }
    }
    const won=(winner)=>{
        setLock(true);
        if(winner==="x"){
           setTitle(
      <h1 className="my-[20px] text-white text-[30px] font-bold flex justify-center items-center">
        Congratulations winner is: <img className="h-[30px] w-[30px] ml-2" src={cross_icon} alt="X" />
      </h1>
    );
        }
        else{
             setTitle(
      <h1 className="my-[20px] text-white text-[30px] font-bold flex justify-center items-center">
        Congratulations winner is: <img className="h-[30px] w-[30px] ml-2" src={circle_icon} alt="O" />
      </h1>
    );
        }
    }
    const reset=()=>{
        setLock(false);
        data.current=["","","","","","","","",""];
        setTitle(
    <h1 className="my-[20px] text-white text-[40px] font-bold flex justify-center items-center">
      Tic Tac Toe Game
      <span className="text-[#26ffcb] pl-[15px]"> React</span>
    </h1>
  );
        box_array.map((e)=>{
            e.current.innerHTML="";
        })
    }
  return (
     <div className=" text-center">
          {title}
        <div className="h-[400px] w-[564px] flex m-auto justify-center">
            <div className="row1 mx-0.5">
                <div ref={box1} className="flex h-[120px] w-[120px]  bg-[#1f3540] rounded-[12px] cursor-pointer border-b-[4px] border-[#0f1b21]  my-0.50"
                               onClick={(e)=>{toggle(e,0)}}>

                </div>
                 <div ref={box2} className="flex h-[120px] w-[120px]  bg-[#1f3540] rounded-[12px] cursor-pointer border-b-[4px] border-[#0f1b21]  my-0.5"
                                 onClick={(e)=>{toggle(e,1)}}>
                    
                </div>
                 <div ref={box3} className="flex h-[120px] w-[120px]  bg-[#1f3540] rounded-[12px] cursor-pointer border-b-[4px] border-[#0f1b21]  my-0.5"
                                   onClick={(e)=>{toggle(e,2)}}>
                    
                </div>
            </div>
             <div className="row2 mx-0.5">
                <div ref={box4} className="flex h-[120px] w-[120px]  bg-[#1f3540] rounded-[12px] cursor-pointer border-b-[4px] border-[#0f1b21]  my-0.5"
                                  onClick={(e)=>{toggle(e,3)}}>

                </div>
                 <div ref={box5} className="flex h-[120px] w-[120px]  bg-[#1f3540] rounded-[12px] cursor-pointer border-b-[4px] border-[#0f1b21]  my-0.5"
                                 onClick={(e)=>{toggle(e,4)}}>
                    
                </div>
                 <div ref={box6}className="flex h-[120px] w-[120px]  bg-[#1f3540] rounded-[12px] cursor-pointer border-b-[4px] border-[#0f1b21]  my-0.5"
                                  onClick={(e)=>{toggle(e,5)}}>
                    
                </div>
            </div>
             <div className="row3 mx-0.5">
                <div ref={box7} className="flex h-[120px] w-[120px]  bg-[#1f3540] rounded-[12px] cursor-pointer border-b-[4px] border-[#0f1b21] my-0.5"
                                onClick={(e)=>{toggle(e,6)}}>

                </div>
                 <div ref={box8} className="flex h-[120px] w-[120px]  bg-[#1f3540] rounded-[12px] cursor-pointer border-b-[4px] border-[#0f1b21]  my-0.5"
                                  onClick={(e)=>{toggle(e,7)}}>
                    
                </div>
                 <div ref={box9} className="flex h-[120px] w-[120px]  bg-[#1f3540] rounded-[12px] cursor-pointer border-b-[4px] border-[#0f1b21]  my-0.5"
                                  onClick={(e)=>{toggle(e,8)}}>
                    
                </div>
            </div>
            
        </div>
        <div >
                <button onClick={reset} className="px-4 py-2   mb-[50px] bg-[#1f3540] text-[#26ffcb] rounded-[50px]
                                   hover:bg-blue-700 active:scale-95 transition 
                                   duration-200  shadow cursor-pointer"
                                     >Reset
                </button>
            </div>
    </div>
  )
}

export default TicTacToe