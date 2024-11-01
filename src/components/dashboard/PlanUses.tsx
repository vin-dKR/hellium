import ProcessBar from '../progress/ProgressBar';

const PlanUses = ({ plan, credits, domains, clients }: PlanUses) => {
  return (
    <div className='flex flex-col gap-5 py-5'>
      <ProcessBar
        end={plan == 'STANDARD' ? 10 : 'PRO' ? 50 : 500}
        label='Email Credits'
        credits={credits}
      />
      <ProcessBar
        end={plan == 'STANDARD' ? 1 : 'PRO' ? 2 : 100}
        label='Domains'
        credits={domains}
      />
      <ProcessBar
        end={plan == 'STANDARD' ? 10 : 'PRO' ? 50 : 500}
        label='Contacts'
        credits={clients}
      />
    </div>
  );
};

export default PlanUses;
