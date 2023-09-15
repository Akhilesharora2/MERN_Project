import React from 'react';
import {Navigate, Route, Outlet} from 'react-router-dom'

const ProtectedRoute =  ({auth}) => {    
    return (auth) ? <Outlet /> : <Navigate to="/" />;
//   return (
//       <div>                                
//         if (!auth)  <Navigate to="/About" />;
//         if (auth)  <Outlet />;
//          {/* return (auth)? <Outlet /> : <Navigate to="/About" />; */}
//         {/* <Route {...rest} render={(props)=>{            
//             if(auth) return <Component {...props} />
//             if(!auth) return <Navigate to="/" />
//         }} />  */}
//     </div>
//   );
}

export default ProtectedRoute;