import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";




const PrivatRout = ({component, redirectTo="/"}) => {
    const {isLogedin, isRefreshing, token} = useAuth();
    const shouldRedirect = !isLogedin && !isRefreshing && !token
    return shouldRedirect ? <Navigate to={redirectTo} replace/> : component
}

export default PrivatRout
