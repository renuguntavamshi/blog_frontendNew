import axios from 'axios';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation } from "react-router-dom";

const Corousel = lazy(() => import('./Corousel'));

const Accordion = lazy(() => import('./Accordion'));
const GridContent = lazy(() => import('./GridContent'));

function Home({ setRoute }) {
  const location = useLocation();

  useEffect(() => {
    setRoute(location.pathname);
  }, [location.pathname]);

  return (
    <main>
      <Suspense fallback={<div>Loading Carousel...</div>}>
        <Corousel />
      </Suspense>
      <br/>
      <Suspense fallback={<div>Loading Carousel...</div>}>
     
      <Accordion />
      <br />
      <GridContent />
     </Suspense>
      <br/><br/><br/><br/>
    </main>
  );
}

export default Home;
