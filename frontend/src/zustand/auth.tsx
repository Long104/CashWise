import { create } from "zustand";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; // Ensure it's imported correctly

// Define types for User and AuthState
type User = {
	user_id: number;
	exp: number;
	name: string;
	email: string;
	role: string;
} | null;

interface AuthState {
	user: User;
	jwt: string | null;
	login: (token: string) => void;
	logout: () => void;
}

// Create the Zustand store
const useAuthStore = create<AuthState>((set) => ({
	user: null,
	jwt: null,
	login: (token: string) => {
		Cookies.set("jwt", token);
		try {
			const decodedUser = jwtDecode<User>(token);
			set({ user: decodedUser, jwt: token });
		} catch (error) {
			console.error("Error decoding JWT:", error);
			useAuthStore.getState().logout(); // Automatically logout on invalid token
		}
	},
	logout: () => {
		Cookies.remove("jwt");
		set({ user: null, jwt: null });
		const router = useRouter();
		router.push("/sign-in"); // Redirect to the sign-in page after logout
	},
}));

export default useAuthStore;
