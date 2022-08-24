import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    debugger;
    const { auth } = useAuth();
    const location = useLocation();
   

    return (
        (auth?.lt==2001) 
               ? <Outlet />
            : auth?.user
              ? <Navigate to="/unauthorized" state={{ from: location }} replace />
               : <Navigate to="/login" state={{ from: location }} replace /> 
       
        // auth?.lt?.find(role => allowedRoles?.includes(role))
        //     ? <Outlet />
        //     : auth?.user
        //         ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        //         : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;