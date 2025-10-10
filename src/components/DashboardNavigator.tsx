import { NavLink } from 'react-router-dom';

const isActive = ({ isActive }: { isActive: boolean }) =>
  'px-6 py-3 font-medium transition w-1/2 text-center ' +
  (isActive
    ? 'bg-yellow-400 text-white rounded-[12px] m-1 w-1/2 '
    : 'text-gray-700 hover:bg-gray-100 rounded-[12px] m-1 w-1/2');

function DashboardNavigator() {
  return (
    <div className="flex justify-center bg-white shadow-2xl rounded-[12px] overflow-hidden my-6 w-[1760px]">
      <NavLink to="/dashboard" end className={isActive}>
        Tổng quan
      </NavLink>
      <NavLink to="/dashboard/testmanage" className={isActive}>
        Quản lý đề thi
      </NavLink>
    </div>
  );
}

export default DashboardNavigator;
