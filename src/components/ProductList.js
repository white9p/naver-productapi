
import nextId from 'react-id-generator';

const ProductList = ({items, getItems}) => {


  items && console.log(items.items);

  return (
    <div className="product-list">
      <ul>
        {items && items.items.map(i=><li key={nextId()}><img className="product-img" src={i.image}></img>{i.title}</li>)}
      </ul>
    </div>
  );
};

export default ProductList;