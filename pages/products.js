import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Products() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/catalog");
  }, [router]);

  return null; // Nothing visible; immediately redirects
}
