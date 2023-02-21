import React from 'react';
import MultiStepForm from '../components/MultiStepForm';
import Head from 'next/head';
import WasteCollection from '@/components/WasteCollection';
import Image from 'next/image';
import { useState } from 'react';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
 
  return (
    <>
  
    <div className="page-wrapper">
     <div className=" section">
    <Head>
      <div className='logo-section'>
      <div className ='logo-container'>
        <div className ='logo'>
          <Image src="/images/Logo.png"
          alt="Picture of the author"
          width={300}
          height={300}
          />
        </div>
      </div>
      </div>
      <div className="header-section">
        <div className="heading-section">
          <h2 data-w-id="23118e45-57fa-8ab1-39f5-a8803c132e71"  className="section-heading light">Get Your Waste Collection Quote</h2>
          <h2 data-w-id="23118e45-57fa-8ab1-39f5-a8803c132e73"  className="section-heading bold green">in Under 60 Seconds…</h2>
        </div>
      </div>
    </Head>
    <MultiStepForm/>
    <Footer/>
    </div>
    </div>
    </>   
  );
  
};

export default Home;
