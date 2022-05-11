import React from 'react';

//Material UI Imports


//Import images
import Logo from '../../assests/imgs/nav-header.svg'
import { CardMedia } from '@mui/material';

//array map over the pages in the header so we can link the pages in the code
const pages = [
    {
        name:"FAQ",
        description: "Text page of frequently asked questions about digibeat",
    },
    {
        name:"About",
        description: "Meet the team page",
    },
    { 
        name:"Payer",
        description:"Page for Payer information"
},
    {
        name:"Physician",
        description:"Page for Physician information"
    }
];

function categorySelected(name) {
    console.log(`${name} clicked`)
}

 function Nav() {
//     const classes = useStyles();

     return (
        <header>
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
                    <li>
                        <a href="#Home">
                            Home
                        </a> 
                    </li>
                    {/* <li>
                        <span>FAQ</span>
                    </li> */}
                    {pages.map((category)=> (
                        <li
                            //className="mx-1"
                            key={category.name}
                        >
                        <span onClick={() => categorySelected(category.name)}>
                            {category.name}
                        </span>
                        </li> 
                    ))}
                    {/* <li>
                        <span>About</span>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
}

export default Nav; 

