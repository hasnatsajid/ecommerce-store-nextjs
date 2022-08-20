import React from 'react';
import Cart from '../components/Cart';
import Breadcrumbs from '../components/UI/Breadcrumbs';
import Detail from '../components/UI/Detail';
import Layout from '../components/UI/Layout';

function cart() {
  return (
    <div className="detail">
      <Layout>
        <Breadcrumbs />
        <Cart />
      </Layout>
    </div>
  );
}

export default cart;
