import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const response = await fetch(
        "https://shopping-cart-server-topaz.vercel.app/carts"
      );
      return response.json();
    },
  });
  return [cart, refetch];
};
export default useCart;
