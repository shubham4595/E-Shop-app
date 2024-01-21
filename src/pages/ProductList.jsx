import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";

export default function ProductList() {
  const [productLists, setProductLists] = useState(undefined);

  const fetchProductList = async () => {
    try {
      let response = await fetch(
        "https://api.kalpav.com/api/v1/product/category/retail"
      );
      let data = await response.json();
      setProductLists(await data.response);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetchProductList();
  }, []);
  if (!productLists) {
    return (
      <>
        <h6>Looding....</h6>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="container d-flex flex-wrap ">
        {productLists &&
          productLists.map((product) => {
            // console.log(product.productCategory.orderIndex);
            return (
              <Card
                key={product.productCategory.productCategoryId}
                title={product.productCategory.productCategoryName}
                img={product.productCategory.productCategoryImage}
                retail={product.productCategory.retail}
              />
            );
          })}
      </div>
    </>
  );
}
