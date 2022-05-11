import React from 'react';
import Logo from '../../assests/imgs/DB_Logo.pdf';

//Material UI Imports
import Box from '@mui/material/Box';

//array map over the pages in the header so we can link the pages anywhere in our code
const pages = [
    {
        name:"FAQ",
        description: "Text page of frequently asked questions about digibeat",
    },
    {
        name:"About",
        description: "Meet the team page",
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
                     <Box
                         component="img"
                         alt="Your logo."
                         src={Logo}
                         //onClick={handlePageChange}
                         sx={[{
                             pr: 10,
                             pt: 1,
                             height: 80,
                             width: 60,
                             flexGrow: 1,
                             display: { xs: 'flex', md: 'none' }
                         }, {
                             '&:hover': {
                                 cursor: 'pointer'
                             }
                         }]}
                     >
                     </Box>
                 </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#Home">
                            Home
                        </a> 
                    </li>
                    {/* <li>
                        <span>FAQ</span>
                    </li> */}
                    {pages.map((category)=> (
                        <li
                            className="mx-1"
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

