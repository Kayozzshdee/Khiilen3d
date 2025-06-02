import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import placeholder from "../public/placeholder.png";

import { Product as BaseProduct } from "@/lib/type";

// Extend your base Product type to include price and discount_percent for UI purposes.
interface Product extends BaseProduct {
  price: number;
  discount_percent?: number;
}

const ProductCart: React.FC<{ product: Product }> = ({ product }) => {
  // Use the product cover if available, otherwise fallback to the placeholder image.
  const imageSrc = product.cover ? product.cover : placeholder.src;

  // Calculate the original price if a discount exists.
  const originalPrice =
    product.discount_percent && product.discount_percent > 0
      ? (product.price * 100) / (100 - product.discount_percent)
      : product.price;

  return (
    <div className="h-300 w-300 grid grid-cols-4 gap-6 flex-wrap">
      <Card className="w-80 border rounded-xl shadow-lg">
        <div className="relative">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-60 object-cover rounded-t-xl bg-secondary"
          />
          {product.discount_percent && product.discount_percent > 0 && (
            <Badge className="absolute top-2 left-2 bg-white text-black">
              {product.discount_percent}%
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="text-sm font-arial">{product.name}</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xl font-bold text-black-600">
              ${product.price.toFixed(2)}
            </span>
            {product.discount_percent && product.discount_percent > 0 && (
              <span className="text-xl text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCart;
