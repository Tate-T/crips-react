import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [isLogin, setIsLogin] = useState(false);
	const [email, setEmail] = useState(null);
	return <AuthContext.Provider value={{ isLogin, setIsLogin, email, setEmail }}>{children}</AuthContext.Provider>;
};
