import React from 'react';
//import { capitalizeFirstLetter } from '../utils/helpers';

//Material UI Imports
import { Card, CardMedia } from '@mui/material';
//import IconButton from '@mui/material/IconButton';

//Import images
import Logo from '../../assests/imgs/nav-header.svg';


 function Nav(props) {
//start Nav functionality using useState - see useState in App.js
const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  const handleClick = (item) => {
    console.log(item);
    return item;
  };
//   useEffect(() => {
//     document.title = capitalizeFirstLetter(currentCategory.name)
// }, [currentCategory]);

     return (
        <header className="">
             
            <nav className="links">
                <ul className="flex-row">
                    <li className={"mx-2"}>
                        <a href="#Home">
                            Home
                        </a> 
                    </li>
                    <li className={"mx-2"}>
            <span onClick={() => handleClick('About')}>
              About
            </span>
            <li className={"mx-2"}>
            <span onClick={() => handleClick('FAQ')}>
              FAQ
            </span>
            </li>
            </li>
                    {categories.map((category)=> (
                        <li
                            className={`mx-1 ${
                            currentCategory.name === category.name
                            }`}
                            key={category.name}
                        >
                        <span onClick={() => {setCurrentCategory(category)}}
                        >
                        </span>
                        </li> 
                    ))}
                <Card>
                 <a href="/" >
                     <CardMedia className='nav-logo'
                         component="img"
                         alt="Your logo."
                         image={Logo}
                         width="50%"
                         //onClick={handlePageChange}
                     >
                     </CardMedia>
                 </a>
            </Card>
                </ul>
            </nav>
        </header>
    );
}

export default Nav; 

