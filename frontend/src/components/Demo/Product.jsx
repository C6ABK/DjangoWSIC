function Product() {
  return (
    <div>
      <div className="mt-4">
        <select
          name="yesno"
          id="yesno"
          className="w-auto h-auto text-clip outline-none py-4 text-gray-900 text-xl font-bold shadow-sm placeholder:text-gray-400 sm:leading-6 border-transparent focus:border-transparent focus:ring-0"
        >
          <option value="1" disabled >Select a Product</option>
          <option value="2">Large White Rolls</option>
          <option value="3" selected>Fruit Teacakes</option>
          <option value="4">White Baps</option>
          <option value="5">Burgers</option>
        </select>


      </div>
    </div>
  );
}

export default Product;
