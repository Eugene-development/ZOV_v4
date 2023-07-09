import { create } from "zustand";

const visibleBanner = create((set) => ({
  currentVisibleBanner: true,
  changeVisibleBanner: () => set(() => ({ currentVisibleBanner: false })),
}));

const visiblePromo = create((set) => ({
  currentVisiblePromo: false,
  // openVisiblePromo: () => set(() => (console.log('visiblePromo')),
  openVisiblePromo: () => set(() => ({ currentVisiblePromo: true })),
  closeVisiblePromo: () => set(() => ({ currentVisiblePromo: false })),
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
  visiblePromo,
  visibleFormProject,
  visibleFormConsultation,
};
