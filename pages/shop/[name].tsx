import { useRouter } from 'next/router';
import Layout from '../../components/UI/Layout';
import Breadcrumbs from '../../components/UI/Breadcrumbs';
import Shop from '../../components/UI/Shop';

function shop({ items }) {
  const router = useRouter();
  const { name } = router.query;

  const data = items.data.filter((item) => item.category === name);

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

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/items');
  const items = await res.json();

  return {
    props: { items },
  };
}
