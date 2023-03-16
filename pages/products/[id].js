import useSWR from "swr";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(`/api/products/${id}`);
  if (isLoading) return <h1>Loading product data</h1>;
  if (error) return <h1>An error occurred: {error.message}</h1>;
  return (
    <>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <p>{data.price}</p>
    </>
  );
}
