import { getUserAppointments } from '@/actions/appointment';
import {
  getUserBalance,
  getUserClients,
  getUserPlanInfo,
  getUserTotalProductPrice,
  getUserTransaction,
} from '@/actions/dashboard';
import DashboardCard from '@/components/dashboard/Dashboard';
import InfoBar from '@/components/infobar/InfoBar';
import CalIcon from '@/icons/cal-icon';
import PersonIcon from '@/icons/person-icon';
import { DollarSign } from 'lucide-react';

const Dashboard = async () => {
  const clients = await getUserClients();
  const sales = await getUserBalance();
  const bookings = await getUserAppointments();
  const plan = await getUserPlanInfo();
  const transaction = await getUserTransaction();
  const products = await getUserTotalProductPrice();

  return (
    <div>
      <InfoBar />
      <div className='overflow-y-auto w-full chat-window flex-1 h-1'>
        <div className='flex gap-5 flex-wrap'>
          <DashboardCard
            value={clients || 0}
            title='Potential clients'
            icon={<PersonIcon />}
          />
          <DashboardCard
            value={products! * clients! || 0}
            sales
            title='Pipeline value'
            icon={<DollarSign />}
          />
          <DashboardCard
            value={bookings || 0}
            title='Appointments'
            icon={<CalIcon />}
          />
          <DashboardCard
            value={sales || 0}
            sales
            title='Total Sales'
            icon={<DollarSign />}
          />
        </div>
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 py-10'>
          <div>
            <div>
              <h2 className='font-bold text-2xl'>Plan Uses</h2>
              <p>
                A detailed overview of your metrices, uses, customer and more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
