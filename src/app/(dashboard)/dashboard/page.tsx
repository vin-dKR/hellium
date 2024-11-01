import { getUserAppointments } from '@/actions/appointment';
import {
  getUserBalance,
  getUserClients,
  getUserPlanInfo,
  getUserTotalProductPrice,
  getUserTransaction,
} from '@/actions/dashboard';
import DashboardCard from '@/components/dashboard/Dashboard';
import PlanUses from '@/components/dashboard/PlanUses';
import InfoBar from '@/components/infobar/InfoBar';
import { Separator } from '@/components/ui/separator';
import CalIcon from '@/icons/cal-icon';
import PersonIcon from '@/icons/person-icon';
import { TransactionsIcon } from '@/icons/transactions-icon';
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
            <PlanUses
              plan={plan?.plan!}
              credits={plan?.credits || 0}
              domains={plan?.domains || 0}
              clients={clients || 0}
            />
          </div>
          <div className='flex flex-col'>
            <div className='w-full flex justify-between items-start mb-5'>
              <div className='flex gap-3 items-center'>
                <TransactionsIcon />
                <p className='font-bold'>Recent Transactions</p>
              </div>
              <p className='text-sm'>See more</p>
            </div>
            <Separator orientation='horizontal' />
            {transaction &&
              transaction.data.map((transaction) => (
                <div
                  className='flex gap-3 w-full justify-between items-center border-b-2 py-5'
                  key={transaction.id}
                >
                  <p className='font-bold'>
                    {transaction.calculated_statement_descriptor}
                  </p>
                  <p className='font-bold text-xl'>
                    {transaction.amount / 100}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
