
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', {
      // replace: true,
    });
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <Outlet />
     

      <Link to="welcome">Say Welcome.  Click Here LINK</Link>
      <br /><br />

      <Link to="goodbye">Say goodbye. Click Here LINK</Link>
      <br /><br />

      <button onClick={handleClick}>Logout</button>


      <Outlet />
    </div>
  );
}
