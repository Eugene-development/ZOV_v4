import { create } from "zustand";

const visibleProductModal = create((set) => ({
  currentVisibleProductModal: false,
  currentProduct: [],
  openVisibleProductModal: (item) => {
    set(() => ({ currentProduct: item }));
    set(() => ({ currentVisibleProductModal: true }));
  },
  closeVisibleProductModal: () =>
    set(() => ({ currentVisibleProductModal: false })),
}));

export const useProductModal = {
  visibleProductModal,
};
