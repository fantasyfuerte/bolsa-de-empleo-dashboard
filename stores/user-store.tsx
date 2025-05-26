import { create } from "zustand";

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
}

const mockUser: User = {
  id: 1,
  name: "María",
  username: "mfernandez",
  lastName: "Fernández Lopez",
  experience: "5 años",
  status: "Activo",
  clients: 12,
  avatar: "https://xsgames.co/randomusers/assets/avatars/female/30.jpg",
  isAdmin: false,
  email: "maria.fernandez@ejemplo.com",
  createdAt: "2025-01-15T10:30:00Z",
  updatedAt: "2025-03-20T14:45:00Z",
  role: "Cuidador Senior",
  ci: "12345678901",
  phone: undefined,
  address: undefined,
  country: "Cuba",
  emergencyContact: undefined,
  skinColor: undefined,
  gender: undefined,
  municipe: undefined,
  province: undefined,
  schoolLevel: undefined,
  desiredJobs: {
    caretaker: true,
    nursing: true,
    cleaning: true,
    custodian: true,
  },
  workExperience: [
    {
      center: "Fructuoso Rodríguez",
      activity: "Enfermería",
      phone: " 7 800 00 00",
      from: "2023-05-15",
      to: "2023-05-15",
    },  
  ],
};

export const useUserStore = create<UserStore>((set) => ({
  user: mockUser,
  setUser: (user: User | null) => set({ user }),
}));