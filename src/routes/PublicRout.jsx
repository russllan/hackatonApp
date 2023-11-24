import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const PublicRout = ( {children} ) => {
  const isAuth = useSelector((state) => state.auth.isAuth );
  const navigate = useNavigate();
  useEffect(() => {
    if(isAuth){
      navigate('./DashboardPage');
    }
  }, [isAuth])
  if(isAuth) {
    return "";
  }
  return children;
}

export default PublicRout