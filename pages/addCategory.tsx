import Layout from '../components/UI/Layout';

const AddCategory = () => {
  const addCategory = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <form onSubmit={addCategory}>
        <div className="category">
          <label htmlFor="name">Category name:</label>
          <input type="text" />
        </div>
        <div className="category-image">
          <label htmlFor="name">Category image:</label>
          <input type="text" />
        </div>
        <button type="submit">Add Category</button>
      </form>
    </Layout>
  );
};

export default AddCategory;
