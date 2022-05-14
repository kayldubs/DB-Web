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
        
        <header>
             <Card>
            <nav className="links row">
            <a href="/" >
                     <CardMedia className='nav-logo'
                         component="img"
                         alt="Your logo."
                         image={Logo}
                         //onClick={handlePageChange}
                     >
                     </CardMedia>
                 </a>
                <ul className="col-lg-12">
                    <li>
                        <a href="#Home">
                            Home
                        </a> 
                    </li>
                    <li>
            <span onClick={() => handleClick('About')}>
              About
            </span>
            <li>
            <span onClick={() => handleClick('FAQ')}>
              FAQ
            </span>
            </li>
            </li>
                    {categories.map((category)=> (
                        <li
                            className={` ${
                            currentCategory.name === category.name
                            }`}
                            key={category.name}
                        >
                        <span onClick={() => {setCurrentCategory(category)}}
                        >
                        </span>
                        </li> 
                    ))}
                
                 
            
                </ul>
            </nav>
            </Card>
        </header>
    );
}

export default Nav; 

