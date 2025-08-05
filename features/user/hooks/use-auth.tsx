import { useMutation } from "@tanstack/react-query";
import { fetchUserClient } from "@/app/data/fetch-user-client";

export default function useAuth() {
  const getUser = useMutation({
    mutationKey: ["user"],
    mutationFn: fetchUserClient,
  });

  return {
    getUser,
  };
}
