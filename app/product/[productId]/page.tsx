import Container from "@/app/components/Container";
import ProductDetail from "./ProductDetail";
import { product } from "@/utils/product";
import ListRating from "./ListRating";
import { products } from "@/utils/products";

interface IPrams {
  productId?: string;
}
export default function page({ params }: { params: IPrams }) {
  console.log("params", params);
  const product = products.find((item) => item.id === params.productId);
  return (
    <div className="p-8">
      <Container>
        <ProductDetail product={product} />
        <div className="flex flex-col gap-4 mt-20">
          <div>Add rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
}
