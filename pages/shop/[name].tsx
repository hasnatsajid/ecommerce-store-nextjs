import { useRouter } from 'next/router';
import Layout from '../../components/UI/Layout';
import Breadcrumbs from '../../components/UI/Breadcrumbs';
import Shop from '../../components/UI/Shop';
import { useEffect, useState } from 'react';

function shop() {
  const [items, setItems] = useState([]);
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    // Perform localStorage action
    setItems(JSON.parse(localStorage.getItem('items')));
  }, []);

  const data = items.filter((item) => item.category === name);

  return (
    <div className="shop">
      <Layout>
        <Breadcrumbs />
        <Shop items={data} />
      </Layout>
    </div>
  );
}

export default shop;
