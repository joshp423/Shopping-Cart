import { useState } from "react";


function DynamicButtonSection({ productCartStatus, setProductCartStatus }  ) {
  if (productCartStatus) {
    return (
      <input type="number" />
    )
  }
  return <button onClick={() => setProductCartStatus(true)}>Add to Cart</button>
}



function ProductTileButtons() {

  const [productCartStatus, setProductCartStatus] = useState(false);

  return (
    <div className="productButtons">
      <DynamicButtonSection
        productCartStatus={productCartStatus}
        setProductCartStatus={setProductCartStatus}
      />
    </div>
  );
}

export default ProductTileButtons;
