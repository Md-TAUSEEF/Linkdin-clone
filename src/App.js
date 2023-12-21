import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Login from './Login';
import { loginuser } from './Components/reduxcomponenet/Linkdinreducer';
import { logoutuser } from './Components/reduxcomponenet/Linkdinreducer';
import Messageoption from './Messageoption';
import Rightside from './Rightside';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import { auth } from './Components/Firebase';
import Youtube from './Components/Youtubevideo/Youtube';
import Event from './Components/Event/Event';
import Article from './Components/Event/Write_Article/Article';
import gif from "../src/Components/Image/loading.gif";

function App() {
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Already logged in
        dispatch(
          loginuser({
            email: userAuth.email || '',
            uid: userAuth.uid || '',
            photoURL: userAuth.providerData[0]?.photoURL || '',
            displayName: userAuth.displayName || '',
          })
        );
      } else {
        dispatch(logoutuser());
      }

      // Set loading to false once user information is available
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if (loading) {
    // Render loading indicator or splash screen
    return <div className='text-center'><img className='spinner' src={gif}/></div>;
  }

  return (
    <Router>
      <div className="app">
        
        <Routes>
          <Route
            exact
            path="/"
            element={
              !user ? (
                <Login />
              ) : (
                <div>
                  <Header />
                <div className="app_body">
                  
                  <Sidebar />
                  <Messageoption />
                  <Rightside />
                </div>
                </div>
              )
            }
          />
            <Route exact path="/youtube" element={<Youtube />}></Route>
            <Route exact path="/event" element={<Event />}></Route>
            <Route exact path="/article" element={<Article/>}></Route>
          
          
        </Routes>
      </div>
    </Router>




  );
}

export default App;




