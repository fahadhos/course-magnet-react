 
import PropTypes from 'prop-types';
import Cart from './../Cart/Cart';
const Carts = ({id,courseTitle,creditHour,ifExist }) => {
  
  
  
  
    return (
        <div className='mx-auto'>
            <Cart 
            id={id}
            ifExist={ifExist}
            courseTitle={courseTitle}
            creditHour={creditHour}
            ></Cart>
        </div>
    );
};
Carts.propTypes={
    id: PropTypes.number,
    courseTitle: PropTypes.string,
    creditHour: PropTypes.number,
    ifExist:PropTypes.bool
}

export default Carts;