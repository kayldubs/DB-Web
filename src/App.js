//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';
import './App.css';
//import components
import Home from './components/Home';
import Nav from './components/Nav';
// import Payer from './components/Payer';
// import Physician from './components/Physician';
// import Footer from './components/Footer';
import {
   ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  // // useQuery,
  // // gql
} from "@apollo/client";
// import { Provider } from 'react-redux';
import { setContext } from '@apollo/client/link/context';

//import graph QL for future back end linking
const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


//Set up apollo
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {

  return(
  <ApolloProvider client={client}>
   <Router>
    <div>
      {/* <ThemeProvider theme={theme}> */}
        {/* <Provider store={store}> */}
          <Nav />
          <Routes>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/Payer" component={Payer} /> */}
            {/* <Route exact path="/Physician" component={Physician} /> */}
          </Routes>
          {/* <Footer /> */}
        {/* </Provider> */}
      {/* </ThemeProvider> */}
    </div>
   </Router>
//</ApolloProvider>
);
}

export default App;
