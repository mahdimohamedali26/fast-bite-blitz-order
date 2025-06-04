
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from "@/hooks/use-toast";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  addresses: Address[];
}

interface Address {
  id: string;
  street: string;
  area: string;
  building: string;
  landmark: string;
  isDefault: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
  addAddress: (address: Omit<Address, 'id'>) => void;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const savedUser = localStorage.getItem('fastbite-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data for demo
    const mockUser: User = {
      id: '1',
      email,
      firstName: 'John',
      lastName: 'Doe',
      phone: '+1234567890',
      addresses: []
    };

    setUser(mockUser);
    localStorage.setItem('fastbite-user', JSON.stringify(mockUser));
    
    toast({
      title: "Welcome back! 🍔",
      description: "You've successfully logged in.",
      duration: 3000,
    });

    return true;
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      addresses: []
    };

    setUser(newUser);
    localStorage.setItem('fastbite-user', JSON.stringify(newUser));
    
    toast({
      title: "Account Created! 🎉",
      description: "Welcome to FastBite! You're now ready to order.",
      duration: 3000,
    });

    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fastbite-user');
    toast({
      title: "Logged out",
      description: "Thanks for visiting FastBite!",
      duration: 2000,
    });
  };

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('fastbite-user', JSON.stringify(updatedUser));
    }
  };

  const addAddress = (address: Omit<Address, 'id'>) => {
    if (user) {
      const newAddress: Address = {
        ...address,
        id: Date.now().toString(),
      };
      const updatedUser = {
        ...user,
        addresses: [...user.addresses, newAddress]
      };
      setUser(updatedUser);
      localStorage.setItem('fastbite-user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoggedIn: !!user,
      login,
      register,
      logout,
      updateProfile,
      addAddress
    }}>
      {children}
    </AuthContext.Provider>
  );
};
