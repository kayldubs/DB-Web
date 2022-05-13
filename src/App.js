//import Logo from './assests/imgs/DB_Logo.pdf';
import React, { useState } from 'react';
// import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';
import './App.css';
//import components(pages to then insert into the return JXS function)
import Home from './components/Home';
import Nav from './components/Nav';
import Features from './components/Features';
import ContactForm from './components/Contact';
import ImageSlider from './components/Slider-2/ImageSlider';
import { SliderData } from './components/Slider-2/SliderData';
// import Payer from './components/Payer';
// import Physician from './components/Physician';
// import Footer from './components/Footer';

//import CSS Boostrap 
import 'bootstrap/dist/css/bootstrap.min.css';
//import Expletus Sans Font
import "@fontsource/expletus-sans"


//Set up Apollo and GraphQL
// import {
//    ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
//   // // useQuery,
//   // // gql
// } from "@apollo/client";
// // import { Provider } from 'react-redux';
// import { setContext } from '@apollo/client/link/context';

//import graph QL for future back end linking
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });
// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });


//Set up apollo
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });



function App() {
  const [categories]= useState([
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
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return(
  // <ApolloProvider client={client}>
  //  <Router>
    <div className='App'>
      {/* <ThemeProvider theme={theme}> */}
        {/* <Provider store={store}> */}
          <Nav></Nav>
          {/* <Routes> */}
            <main>
              <Home>
                <div>
                  <img src='../../assests/imgs/DB_Logo' alt="Digibeat Logo.pdf" className="Carousel-Place-Holder"/>
                </div>
              </Home>
              <ImageSlider slides={SliderData}></ImageSlider>
              <Features currentCategory={currentCategory}></Features>
              <ContactForm></ContactForm>
            </main>
            {/* <Route exact path="/Payer" component={Payer} /> */}
            {/* <Route exact path="/Physician" component={Physician} /> */}
          {/* </Routes> */}
          {/* <Footer /> */}
        {/* </Provider> */}
      {/* </ThemeProvider> */}
    </div>
  //  </Router>
//</ApolloProvider>
);
}

export default App;
