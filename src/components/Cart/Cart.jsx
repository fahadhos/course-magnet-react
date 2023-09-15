 
import Alert from '../Alert/Alert';
import PropTypes from 'prop-types';
const Cart = ({id,courseTitle,creditHour, ifExist}) => {
   
    return (
       <> 
        
    {ifExist &&    <Alert ></Alert>} 
        <div className="card w-96 bg-base-100 shadow-xl  ">
        <div className="card-body space-y-5">
          <h2 className="card-title border-b-2 text-[#2F80ED] font-bold leading-[5rem] ">Credit Hour Remaining 7 hr</h2>
          <h2 className="card-title  ">Course Name</h2>
          <p className="text-[#1c1b1b99] font-normal">
            
            
            {courseTitle.map((title,idx) => <li key={idx} type="1">{title}</li>)}
            
            </p>
          <div className="card-actions justify-end">
            <p className="border-t-2 border-b-2 font-medium leading-[3rem]"><small> Total Credit Hour : {creditHour} </small></p>
              </div>
                  <p className=" font-semibold"> <small>Total Price : 48000 USD </small></p>
        
        </div>
      </div></> 
    );
};
Cart.propTypes={
    id: PropTypes.number,
    courseTitle: PropTypes.string,
    creditHour: PropTypes.number,
    ifExist:PropTypes.bool
}
export default Cart;