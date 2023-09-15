import {BsCurrencyDollar} from 'react-icons/bs';
import {BsBook} from 'react-icons/bs';

import PropTypes from 'prop-types';

const Card = ({courses,handleAddCourse}) => {
  const {id,image, coursetitle, credithour, price, coursedetails} = courses;

  return (
    <div className="card w-[22rem] bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={`Cover for the ${coursetitle}`}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-left text-left">
        <h2 className="card-title">{coursetitle}</h2>
        {/* description */}
        <p>{coursedetails}</p>
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
          <button onClick={()=>handleAddCourse(id,coursetitle,credithour,price)} className="btn btn-primary w-full">Select</button>
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
