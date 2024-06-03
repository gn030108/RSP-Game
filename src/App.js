import Box from './component/Box';



import './App.css';
import { useState } from 'react';

const choice ={
  rock:{
    name:'Rock',
    img:'https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg'
  },
  scissors:{
    name:'Scissors',
    img:'https://img.danawa.com/prod_img/500000/261/156/img/5156261_1.jpg?_v=20171116155341'
  },
  paper:{
    name:'Paper',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0lJnZWhFDwDt6Cz2WPS1JPHnzjjmVkL0hg&s'
  },
}

function App() {

  const [userSelect,setUserSelect] = useState(null)
  const [computerSelect,setComputerSelect] = useState(null)
  const [result , setResult] = useState('') 

  const play=(userChoice)=>{
    console.log(userChoice)
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice],computerChoice))
  }

  const randomChoice = ()=>{
    let itemArray = Object.keys(choice)
    let randomItem= Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]

    return choice[final];
  }

  const judgement=(user,computer)=>{
    if (user.name === computer.name) {
      return 'tie'
    }else if (user.name==="Rock"){
      return computer.name === 'Scissors' ? 'win' : 'lose';
    }
    else if (user.name==="Scissors"){
      return computer.name === 'Paper' ? 'win' : 'lose';
    }
    else if (user.name==="Paper"){
      return computer.name === 'Rock' ? 'win' : 'lose';
    }
  }

  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} result={result}/>
        <Box title='Computer' item={computerSelect} result={result}/>
      </div>
      <div className='main'>
        <button onClick={()=>play('scissors')}>가위</button>
        <button onClick={()=>play('rock')}>바위</button>
        <button onClick={()=>play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
