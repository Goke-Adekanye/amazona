import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../component/Product";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";
import { listProducts } from "../actions/productActions";

export default function HomeScreen() {
  const { products, loading, error } = useSelector(
    (state) => state.productList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger" error={error} />
  ) : (
    <div className="row center">
      {products.map((product) => (
        <Product key={product.product_id} product={product} />
      ))}
    </div>
  );
}
