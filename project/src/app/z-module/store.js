import { create } from "zustand";

const visibleBanner = create((set) => ({
  currentVisibleBanner: true,
  changeVisibleBanner: () => set(() => ({ currentVisibleBanner: false })),
}));

const visibleFormConsultation = create((set) => ({
  currentVisibleFormConsultation: true,
  changeVisibleFormConsultation: () =>
    set(() => ({ currentVisibleFormConsultation: false })),
}));

export const useBannerStore = {
  visibleBanner,
  visibleFormConsultation,
};
