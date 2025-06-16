import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Corousel from './Corousel';
import Accordion from './Accordion';
import GridContent from './GridContent';
function Home({ setRoute }) {
  const location = useLocation();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setRoute(location.pathname);
  }, [location.pathname]);

  return (
    <main>
   
      <Corousel />
      <br/>
     <Accordion />
     <br />
 <GridContent />
 <br/>
 <br/>
 <br/>
 <br/>
    </main>
  );
}

export default Home;
