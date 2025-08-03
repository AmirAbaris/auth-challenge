import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/fetch-user";

export default function useAuth() {
  const getUser = useMutation({
    mutationKey: ["user"],
    mutationFn: fetchUser,
  });

  return {
    getUser,
  };
}
