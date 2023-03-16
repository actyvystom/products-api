import useSWR from "swr";
import Link from "next/link";
export default function ProductList() {
  const { data, isLoading, error } = useSWR("/api/products/");
  if (isLoading) return <h1>Loading data...</h1>;
  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </h2>
            <p>{product.description}</p>
            <p>{`Price: ${product.price} €`}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
