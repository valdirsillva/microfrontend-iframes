import { IframeMessageProxy } from "iframe-message-proxy";
import React, { useState } from "react";

import "./card.css"

export function App() {
  const [product, setProduct] = useState()

  const getProduct = async () => {
    const { response } = await IframeMessageProxy.sendMessage({
      action: 'getProduct',
    })

    setProduct(response)
  }


  return (
    <div className="card">
      <img src="./logo512.png" width={60} className="logo" />

      {product && (
        <>
          <img src={product.image} Style="width:100%" />
          <span>{product.name}</span>

          <h2>{product.price}</h2>
        </>
      )}

      <button onClick={getProduct} type="button">Ver produto</button>

    </div>
  );
}

export default App;
