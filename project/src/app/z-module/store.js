import { create } from "zustand";

const visibleBanner = create((set) => ({
  currentVisibleBanner: true,
  changeVisibleBanner: () => set(() => ({ currentVisibleBanner: false })),
}));

const visibleFormConsultation = create((set) => ({
  currentVisibleFormConsultation: false,
  openVisibleFormConsultation: () =>
    set(() => ({ currentVisibleFormConsultation: true })),
  closeVisibleFormConsultation: () =>
    set(() => ({ currentVisibleFormConsultation: false })),
}));

const visibleFormProject = create((set) => ({
  currentVisibleFormProject: false,
  openVisibleFormProject: () =>
    set(() => ({ currentVisibleFormProject: true })),
  closeVisibleFormProject: () =>
    set(() => ({ currentVisibleFormProject: false })),
}));

export const useStore = {
  visibleBanner,
  visibleFormProject,
  visibleFormConsultation,
};
