import Layout from '../components/UI/Layout';
import Breadcrumbs from '../components/UI/Breadcrumbs';
import Shop from '../components/UI/Shop';

function shop() {
  return (
    <div className="shop">
      <Layout>
        <Breadcrumbs />
        <Shop />
      </Layout>
    </div>
  );
}

export default shop;
