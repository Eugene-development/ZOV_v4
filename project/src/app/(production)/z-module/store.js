import { create } from "zustand";

const visibleProductModal = create((set) => ({
  currentVisibleProductModal: false,
  openVisibleProductModal: () =>
    set(() => ({ currentVisibleProductModal: true })),
  closeVisibleProductModal: () =>
    set(() => ({ currentVisibleProductModal: false })),
}));

export const useProductModal = {
  visibleProductModal,
};
