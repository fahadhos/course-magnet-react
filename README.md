# Ques/Answers

## Add at least 3 Project features
## Discuss how you managed the state in your assignment project.
 

### Answer no-1 Currently, I have tried to add Project features those are:

-  Added alert when the course already existed in cart list
-  Added alert when the credit hour crossed the 20 hr limit
-  Added local storage for saving the selected course   credit etc

____________________________________________________________________________

### Answer no-2 Discussing how I have managed the state in my assignment project:

 ##### Created a component/Cards 

 -  and set  const [courses, setCourses] =useState([]); for getting the course information
________________________________________________________________
  ##### Created a component/Card
-   In component/Card have retrieved courses object,handleAddCourse function 
and distructured  id,image, coursetitle, credithour, price, coursedetails from courses object and displayed in the each card dynamically;

________________________________________________________________
  ##### Created a component/Carts
- created these props id,courseTitle,creditHour,ifExist,remainingCH,totalPrice 
ifExist for course already added toast alert
passed those props in Cart component like this   
             <Cart 
            id={id}
            ifExist={ifExist}
            courseTitle={courseTitle}
            creditHour={creditHour}
            totalPrice={totalPrice}
            remainingCH={remainingCH}
            ></Cart>
________________________________________________________________
  ##### Created a component/Cart
  - created these props id,courseTitle,creditHour,ifExist,remainingCH,totalPrice and dynamically showed in Cart body 
  
  ________________________________________________________________
  ##### Created a component App.jsx
  - used state  const [swalProps, setSwalProps] = useState({}); for showing alert if credit hour is 20 up
- used state using const [ifExist, setIfExist] = useState(false);  
 for passing the state to the Cart.jsx component like this    {ifExist &&    <Alert ></Alert>} 
    
 - State course title  for finding duplicate using this const [courseTitle, setCourseTitle]=useState([])
- Created state credit hour for sum of CH using this const [creditHour, setCreditHour] = useState(0)
- created state for remaining credits calculation  using const [remainingCH, setRemainingCH] = useState(0);
 
- created state for total price calculation using const [totalPrice, setTotalPrice] = useState(0);
- Have passed props and function using like this
 <Cards handleAddCourse={handleAddCourse}></Cards>
    <SweetAlert2 {...swalProps} />
      <Carts 
    ifExist={ifExist}
    courseTitle={courseTitle} 
    creditHour={creditHour}
    totalPrice={totalPrice}
    remainingCH={remainingCH}
    ></Carts>
________________________________________________________________

#### Developed science 15 Spet,23 by fahadhos Course Registration Site React 