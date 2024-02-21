function AddProduct() {
    return (
      <div className="flex w-full ">
        <div className="flex flex-col w-full justify-end lg:flex-row space-x-0 lg:space-x-4">
          <select
            name="yesno"
            id="yesno"
            className="w-full bg-transparent lg:w-auto h-auto text-clip outline-none py-4 text-gray-900 text-xl font-bold shadow-sm placeholder:text-gray-400 sm:leading-6 border-transparent focus:border-transparent focus:ring-0"
          >
            <option value="1" disabled selected>Select a Product</option>
            <option value="2">Large White Rolls</option>
            <option value="3" >Fruit Teacakes</option>
            <option value="4">White Baps</option>
            <option value="5">Burgers</option>
          </select>
  
            <button className="flex w-full lg:w-auto items-center justify-center py-4 px-4 m-2 rounded-md bg-blue-600  font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Create New Product Record</button>
        </div>
      </div>
    );
  }
  
  export default AddProduct;
  