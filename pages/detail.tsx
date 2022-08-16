import React from 'react';
import Breadcrumbs from '../components/UI/Breadcrumbs';
import Detail from '../components/UI/Detail';
import Layout from '../components/UI/Layout';

function detail() {
  return (
    <div className="detail">
      <Layout>
        <Breadcrumbs />
        <Detail />
      </Layout>
    </div>
  );
}

export default detail;
