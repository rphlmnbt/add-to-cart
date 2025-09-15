const ProductItem = ({ name, description, price }) => {
  return (
    <div className='m-1 rounded border p-3 bg-gray-500 space-y-2'>
      <div className="text-lg font-semibold flex justify-between">
        <span>{name}</span>
        <span>${price}</span>
      </div>
      <div>
        {description}
      </div>
      <div>
        <button className="bg-blue-500 w-full font-bold">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductItem;