import {BsCurrencyDollar} from 'react-icons/bs';
import {BsBook} from 'react-icons/bs';

import PropTypes from 'prop-types';

const Card = ({courses,handleAddCourse}) => {
  const {id,image, coursetitle, credithour, price, coursedetails} = courses;

  return (
    <div className="card w-[18.6rem] bg-base-100 shadow-xl ">
      <figure className="px-5 pt-5">
        <img
          src={image}
          alt={`Cover for the ${coursetitle}`}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-left text-start">
        <h2 className="card-title text-[16px] w-max">{coursetitle}</h2>
        {/* description */}
        <p className=' text-[14px] '>{coursedetails}</p>
        <div className="flex items-center ">
          <BsCurrencyDollar /> &nbsp;
          <p>Price: {price} </p>
          {' '}{' '}
          <BsBook />
          {' '}
          &nbsp;
          {' '}
          <p>Credit: {credithour}hr</p>
        </div>
        <div className="card-actions items-center text-center justify-center">
          <button onClick={()=>handleAddCourse(id,coursetitle,credithour,price)} className="btn btn-primary text-white h-10 bg-[#2F80ED] w-full">Select</button>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  courses: PropTypes.object,
  handleAddCourse: PropTypes.func,
   
};
export default Card;
