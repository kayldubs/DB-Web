//import Logo from './assests/imgs/DB_Logo.pdf';
import React from 'react';
// import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';
import './App.css';
//import components
import Home from './components/Home';
import Nav from './components/Nav';
import Features from './components/Features';
// import Payer from './components/Payer';
// import Physician from './components/Physician';
// import Footer from './components/Footer';

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

  return(
  // <ApolloProvider client={client}>
  //  <Router>
    <div className='App'>
      {/* <ThemeProvider theme={theme}> */}
        {/* <Provider store={store}> */}
          <Nav />
          {/* <Routes> */}
            <main>
              <Home>
                <div>
                  <img src='../../assests/imgs/DB_Logo' alt="Digibeat Logo.pdf" className="Carousel-Place-Holder"/>
                </div>
              </Home>
              <Features></Features>
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
