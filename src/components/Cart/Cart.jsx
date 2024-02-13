 
import Alert from '../Alert/Alert';
import PropTypes from 'prop-types';
import './Cart.css'
 import congo from '../../assets/congo.png'
import { useState } from 'react';
const Cart = ({ id,courseTitle,creditHour, ifExist,remainingCH,totalPrice}) => {
   
  
  const handleReload = () => {
    console.log('click-ed');
    courseTitle='';remainingCH=0;totalPrice=0;
    // window.location.href = '/'; // Navigate to the desired URL
  };
    return (
       <> 
        
    {ifExist &&    <Alert ></Alert>} 
    
        <div className=" card w-fit bg-base-100 shadow-xl " >
        <div className="card-body space-y-5"> 
          <h2 className="card-title border-b-2 text-[#2F80ED] font-bold leading-[5rem] ">
            Credit Hour Remaining {remainingCH} hr</h2>
          <h2 key={id} className="card-title  ">Course Name</h2>
          <p className={` ${courseTitle=='' ? `empty-msg`:`text-[#1c1b1b99] font-normal` }`}>
            
            
            { courseTitle=='' ? 'Cart is empty now!': courseTitle.map((title,idx) => (<li key={idx} type="1">{ title}</li>))}
            
            </p>
          <div className="card-actions justify-end">
            <p className="border-t-2 border-b-2 font-medium leading-[3rem]"><small> Total Credit Hour : {creditHour} </small></p>
              </div>
                   <p className=" font-semibold"> <small>Total Price : {totalPrice} USD </small></p>
    {  courseTitle!='' && (<button onClick={()=>my_modal_2.showModal()}  className=' text-white h-10 bg-[#2F80ED] w-full btn'>Purchase Course</button>
          )       
        
        }<dialog  id="my_modal_2" className="modal grid place-items-center">
          <form method="dialog" className="modal-box justify-center grid place-items-center text-center">
            <img className="justify-center text-center items-center place-content-center" src={congo} alt="congo image"/>
            <h3 className="font-bold text-lg">Congratulations</h3>
            <p className="py-4">You have Purchase the Courses Successfully</p>
            <a href="" onClick={handleReload}>
              <button  className="btn btn-primary border-none bg-[#E527B2] text-white font-semibold" >
                Go Home
              </button>
            </a>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
  
        </div>
      </div></> 
    );
};
Cart.propTypes={
    id: PropTypes.number,
    courseTitle: PropTypes.string,
    creditHour: PropTypes.number,
    ifExist:PropTypes.bool    ,
    remainingCH: PropTypes.number,
    totalPrice: PropTypes.number,
}
export default Cart;