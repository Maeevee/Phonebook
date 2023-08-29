import { useSelector } from "react-redux";
import { selectIsLogedin, selectToken, selectIsRefreshind, selectUser } from "../redux/auth/authSelectors";

export const useAuth = () => {
    const isLogedin = useSelector(selectIsLogedin);
    const token = useSelector(selectToken);
    const isRefreshing = useSelector(selectIsRefreshind);
    const user = useSelector(selectUser);

    return {isLogedin, token, isRefreshing, user}
}