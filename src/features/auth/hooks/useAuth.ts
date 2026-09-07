import { useContext } from "react";
import { AuthProvider, AuthContext } from "../../../app/providers/AuthProvider";

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}

export default  useAuth;