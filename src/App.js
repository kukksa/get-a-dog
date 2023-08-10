import { useState } from 'react';
import { dogs } from './Carusel';
import { data } from './data';
import './App.css';

function App() {
  const [dog, setDog] = useState(0);
  const {image} = dogs[dog];

  const [item, setItem] = useState(data);
  const [showText, setShowText] = useState(false);
  



  const previousDog = () => {
    setDog((dog =>{
      dog --;
      if (dog < 0){
        return dogs.length -1;
      }
      return dog
    }))

  }
  const nextDog = () => {
    setDog((dog =>{
      dog ++;
      if (dog > dogs.length -1) {
        dog = 0
      }
      
      return dog
    }))
  }

  const removeItem = (id) => {
    let newItem = item.filter(item => item.id !== id);
    setItem(newItem)
  }

  const showTextClick = (item) => {
  item.showMore = !item.showMore
  setShowText(!showText)
  }

  return (<div>
    <div className='container'>
      <h1>Do you want to get a dog?</h1>
    </div>
    
    <div className='container'>
      <button className='btn' onClick={previousDog}>《</button>
      <img src={image} alt="pic" width='800px' />
      <button className='btn' onClick={nextDog}>》</button>
    </div>
    
    <div className='container'>
      <h3>Get ready for the arrival of a new member in the family!</h3>
    </div>

    <div className='container'>
      <h3>Initially, you will need:</h3>
    </div>


    {item.map((element => {
      const {id, name, picture, description, showMore} = element;

      return (<div>
    <div className='container'>
      <h3>{id} - {name}</h3>
    </div>

    <div  className='container'>
      <img src={picture} alt="pic" width="500px" height="300px" />
    </div>

    <div className='container'>
      <p>{showMore ? description : description.substring(0,100) + "..."}
      <button className='showBtn' onClick={() => showTextClick(element)}>{showMore ? "Show less" : "Show more"}</button>
      </p>
    </div>

    <div className='container'>
      <button className='btnTwo' onClick={()=> removeItem(id)}>remove</button>
    </div>
    </div>

    )
    }))}

    <div className='container'>
      <button className='btnTwo' onClick={()=> setItem([])}>delete everything, i have all of this</button>
    </div>
  </div>

  
  );
}

export default App;
