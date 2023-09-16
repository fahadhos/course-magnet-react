 
import PropTypes from 'prop-types';
import Cart from './../Cart/Cart';

 
const Carts = ({id,courseTitle,creditHour,ifExist,remainingCH,totalPrice }) => {
  
 
    return (
        <div className='mx-auto max-sm:mx-auto'>
            <Cart 
            id={id} 
            ifExist={ifExist}
            courseTitle={courseTitle}
            creditHour={creditHour}
            totalPrice={totalPrice}
            remainingCH={remainingCH}
            ></Cart>
        </div>
    );
};
Carts.propTypes={
    id: PropTypes.number,
    courseTitle: PropTypes.string,
    creditHour: PropTypes.number,
    ifExist:PropTypes.bool,
    remainingCH: PropTypes.number,
    totalPrice: PropTypes.number,
}

export default Carts;