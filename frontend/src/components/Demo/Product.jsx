function Product({...props}) {
  return (
    <div className="w-full">
      <div className="font-bold py-4 text-lg">{props.product}</div>
      <div className="flex w-full">
        <div className="border-2 border-red-500 w-1/5">Process Control</div>
        <div className="border-2 border-red-500 w-1/5">KPIs</div>
        <div className="border-2 border-red-500 w-3/5">Loss Data</div>
      </div>
    </div>
  );
}

export default Product;
