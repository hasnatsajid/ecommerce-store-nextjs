import Layout from '../../components/UI/Layout';
import Breadcrumbs from '../../components/UI/Breadcrumbs';
import Shop from '../../components/UI/Shop';
import { useEffect, useState } from 'react';

function shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Perform localStorage action
    setItems(JSON.parse(localStorage.getItem('items')));
  }, []);

  return (
    <div className="shop">
      <Layout>
        <Breadcrumbs />
        <Shop items={items} />
      </Layout>
    </div>
  );
}

export default shop;
