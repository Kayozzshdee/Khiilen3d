import React from "react";
import { getProducts } from "@/lib/getData";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Product } from "@/lib//type";
interface ProductTableProps {
  products: Product[];
}
export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products: products || [] } };
}

export default function ProductTable({ products }: ProductTableProps) {
  return (
    <div>
      <Table>
        <TableCaption>Products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>In Stock</TableHead>
            <TableHead>Product ID</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.in_stock}</TableCell>
              <TableCell>{product.id}</TableCell>
              <TableCell className="text-right">${product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
