import DashboardCard from '@/components/dashboard/Dashboard';
import InfoBar from '@/components/infobar/InfoBar';

const Dashboard = () => {
  return (
    <div>
      <InfoBar />
      <div className='overflow-y-auto w-full chat-window flex-1 h-1'>
        <div className='flex gap-5 flex-wrap'>
          <DashboardCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
