import { useAuth } from "../../hooks/useAuth";
import LogoutBtn from '../LogoutBtn/LogoutBtn';

const UserMenu = () => {

    const {user} = useAuth()
    
  return (
    <div>
        <p>{`Wellcome ${user.name}!`}</p>
      <LogoutBtn/>
    </div>
  )
}

export default UserMenu
