import React from 'react';
//import { capitalizeFirstLetter } from '../utils/helpers';

//Material UI Imports
import { CardMedia } from '@mui/material';

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
        <header className="flex-row px-1">
             <h2>
                 <a href="/">
                     <CardMedia
                         component="img"
                         alt="Your logo."
                         image={Logo}
                         //onClick={handlePageChange}
                     >
                     </CardMedia>
                 </a>
            </h2>
            <nav>
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
                </ul>
            </nav>
        </header>
    );
}

export default Nav; 

