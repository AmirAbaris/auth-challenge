import { create } from "zustand";
import { Result } from "./types/response.type";

interface UserState {
  user: Result | null;
  setUser: (user: Result) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: Result) => set({ user }),
  clearUser: () => set({ user: null }),
}));
