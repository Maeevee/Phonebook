import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";




const ResdtrictedRout = ({component, redirectTo="/"}) => {
    const {isLogedin} = useAuth();
    return isLogedin ? <Navigate to={redirectTo} replace/> : component
}

export default ResdtrictedRout
