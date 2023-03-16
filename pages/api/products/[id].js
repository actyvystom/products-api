import { getProductById } from "../../../services/productServices";
export default function handler(request, response) {
  const { id } = request.query;
  const data = getProductById(id);
  if (!data)
    return response.status(404).json({ message: "Product not found." });

  return response.status(200).json(data);
}
