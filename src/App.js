//import Logo from './assests/imgs/DB_Logo.pdf';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//import components(pages to then insert into the return JXS function)
import Home from './components/Home';
import Nav from './components/Nav';
import Features from './components/Features';
// import ContactForm from './components/Contact';
import Form from './components/Contact/Form';
import ImageSlider from './components/Slider-2/ImageSlider';
import { SliderData } from './components/Slider-2/SliderData';
import ImageHero from './components/Carousel/ImageHero';
import { HeroData } from './components/Carousel/HeroData';
// import Payer from './components/Payer';
// import Physician from './components/Physician';
// import Footer from './components/Footer';

//import CSS Boostrap 
import 'bootstrap/dist/css/bootstrap.min.css';
//import Expletus Sans Font
import "@fontsource/expletus-sans"
import { TextData } from './components/Carousel/TextData';


//Set up Apollo and GraphQL
// import {
//    ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
//   // useQuery,
//   // gql
// } from "@apollo/client";
//  import { Provider } from 'react-redux';
// import { setContext } from '@apollo/client/link/context';

// //import graph QL for future back end linking
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


// //Set up apollo
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
  <Router>
    <div className='App'> 
        {/* <Provider> */}
          <Nav />
          <Switch>
              <Route exact path="/"> 
                <ImageHero slides={HeroData} /> 
                <ImageSlider slides={SliderData} menu={TextData} />
                <Features currentCategory={currentCategory} /> 
                <Form />
              </Route> 
            {/* <Route exact path="/Payer" component={Payer} /> */}
            {/* <Route exact path="/Physician" component={Physician} /> */}
          </Switch>
          {/* <Footer /> */}
        {/* </Provider> */}
    </div>
   </Router>
// </ApolloProvider>
);
}

export default App;
