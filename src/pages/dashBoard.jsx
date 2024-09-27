import SideBar from '../components/sideBar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex  lg:flex-row">
      {/* Sidebar */}
      <SideBar />

      {/* Main content */}
      <div className="lg:flex-1 p-6 bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
