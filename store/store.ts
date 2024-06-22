import { create } from "zustand";

interface LinkStore {
  names: { name: string; typeLink: string }[];
  addName: (name: string, typeLink: string) => void;
  removeName: (name: string) => void;
  clearNames: () => void;
}

const useLinkStore1 = create<LinkStore>((set) => ({
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

const useLinkStore2 = create<LinkStore>((set) => ({
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

export { useLinkStore1, useLinkStore2 };
