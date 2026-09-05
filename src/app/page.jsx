import Banner from '@/Components/Banner/Banner';
import Peoples from '@/Components/PeopleInfo/Peoples';
import React from 'react';

const RootPage = () => {
  return (
    <div>
      {/* <h2>Welcome To Root Page</h2> */}
      {/* Banner Addeds */}
      <Banner></Banner>
      {/* pepoles info with card */}
      <section className='my-5'>
        <Peoples></Peoples>
      </section>
    </div>
  );
};

export default RootPage;