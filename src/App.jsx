import { useState } from 'react'
 
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Carts from './components/Carts/Carts'
import Alert from './components/Alert/Alert'


function App() { 



  const [ifExist, setIfExist] = useState(false);   
  // course title dhorbo
const [courseTitle, setCourseTitle]=useState([])
// credit hour jog kortesi
const [creditHour, setCreditHour] = useState(0)
// for remaining credits hisab korbo
// onlcick function ta
  const handleAddCourse = (id,coursetitle,credithour)=>{

    // console.log('Adding',creditHour);
    
  // console.log('newcourseTitle',newcourseTitle)
  // console.log(courseTitle,id);
  
  const ifExist = courseTitle.includes(coursetitle);
  // console.log(ifExist,'ifexist')
 
  if(ifExist) {
       setIfExist(true)
    //  alert('Already added to cart')
  
  }
  else{
    // const newcourseTitle=  Array.from(new Set([...courseTitle,coursetitle]))
    const newcourseTitle=   [...courseTitle,coursetitle]
    setCourseTitle(newcourseTitle)

    const newCredithour = creditHour+credithour

    if(newCredithour>20){
      return alert('credit hour can not exceed from 20')
      // setwarningforch(true)
    }else{

      setCreditHour(newCredithour);
    }
    }
    // console.log("New creditHour:", newCredithour);
    // setIfExist(true);

    // Automatically hide the Alert after 3 seconds
    setTimeout(() => {
      setIfExist(false);
    }, 3000);
    // console.log(newcourseTitle)
  }
  return (
    <><Header></Header>
    <div className='flex mx-auto'>
      <Cards      handleAddCourse={handleAddCourse}
            ></Cards>
         
      <Carts 
    ifExist={ifExist}  courseTitle={courseTitle} creditHour={creditHour}></Carts>
    </div></>
  )
}

export default App
