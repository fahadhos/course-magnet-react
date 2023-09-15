import {  useState } from 'react'
 
import './App.css'
import Header from './components/Header/Header' 
import Cards from './components/Cards/Cards' 
import Carts from './components/Carts/Carts' 

import SweetAlert2 from 'react-sweetalert2';
 

function App() { 
 
   
  
  const [swalProps, setSwalProps] = useState({});
  const [ifExist, setIfExist] = useState(false);   
  // course title dhorbo
  const [courseTitle, setCourseTitle]=useState([])
  // credit hour jog kortesi
  const [creditHour, setCreditHour] = useState(0)
  // for remaining credits hisab korbo
  const [remainingCH, setRemainingCH] = useState(0);
 
  
// optional total price state 
const [totalPrice, setTotalPrice] = useState(0);
// 

// onlcick function ta
  const handleAddCourse = (id,coursetitle,credithour,price)=>{
 
  
  const ifExist = courseTitle.includes(coursetitle);
  // console.log(ifExist,'ifexist')
  if(ifExist ) {
    setIfExist(true)
     // Automatically hide the Alert after 3 seconds
     setTimeout(() => {
      setIfExist(false);
    }, 3000);
    //  alert('Already added to cart')
    return;
  }
   else
  {
    const newCredithour = creditHour+credithour
    
    console.log('if kaj korlo',remainingCH)
    if( newCredithour>20){
     
   // ===============================
   setSwalProps({
    show: true,
    title: 'Sorry!',
    // text: 'Course exceeds maximum credit limit (20hr).',
    html: '<p class="bold  ">Course exceeds maximum credit limit (20hr).</p>',
  });
   // Automatically hide the Alert after 3 seconds
   
 return;
}
 

    console.log('card er credit hour total ',newCredithour)
    // 
    const newRemaining = 20-newCredithour;
    // const newRemaining =remainingCH-credithour;

    const newcourseTitle=   [...courseTitle,coursetitle]
    // price total calculation here
    const newprice = price+totalPrice;
    // console.log('remaining koto credit thaklo dekha ',remainingCH)
    setCreditHour(newCredithour);
    setCourseTitle(newcourseTitle)   
    setRemainingCH(newRemaining);
    setTotalPrice(newprice)
   
    
    
  }
    

    // console.log(newcourseTitle)
  }

  return (
    <><Header></Header>
    <div className='flex mx-auto'>
      <Cards      handleAddCourse={handleAddCourse}
            ></Cards>
             <SweetAlert2 {...swalProps} />
      <Carts 
    ifExist={ifExist}
    courseTitle={courseTitle} 
    creditHour={creditHour}
    totalPrice={totalPrice}
    remainingCH={remainingCH}
    ></Carts>
    
    </div></>
  )
}

export default App
