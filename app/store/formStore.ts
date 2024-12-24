import { create } from 'zustand';

interface FormState {
  stepData: {
    personalInfo: {
      fullName: string;
      email: string;
    };
    address: {
      street: string;
      city: string;
    };
    preferences: {
      newsletter: boolean;
      notifications: boolean;
    };
  };
  updateStepData: (step: keyof FormState['stepData'], data: object) => void;
  resetForm: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  stepData: {
    personalInfo: {
      fullName: '',
      email: '',
    },
    address: {
      street: '',
      city: '',
    },
    preferences: {
      newsletter: false,
      notifications: false,
    },
  },
  updateStepData: (step, data) =>
    set((state) => ({
      stepData: {
        ...state.stepData,
        [step]: { ...state.stepData[step as keyof FormState['stepData']], ...data },
      },
    })),
  resetForm: () =>
    set(() => ({
      stepData: {
        personalInfo: {
          fullName: '',
          email: '',
        },
        address: {
          street: '',
          city: '',
        },
        preferences: {
          newsletter: false,
          notifications: false,
        },
      },
    })),
}));
