interface LinkStore {
    names: { name: string; typeLink: string }[];
    addName: (name: string, typeLink: string) => void;
    removeName: (name: string) => void;
    clearNames: () => void;
  }
  import { create } from "zustand";

  const useLinkStore = create<LinkStore>((set) => ({
    names: [],
    addName: (name, typeLink) =>
      set((state) => ({
        names: [...state.names, { name, typeLink }],
      })),
    removeName: (name) =>
      set((state) => ({
        names: state.names.filter((n) => n.name !== name),
      })),
    clearNames: () => set({ names: [] }),
  }));
  
  export default useLinkStore;
  
