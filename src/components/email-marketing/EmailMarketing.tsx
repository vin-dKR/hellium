'use client';
import { useEmailMarketing } from '@/hooks/email-marketing/useEmailMarketing';
import React from 'react';
import CustomerTable from './CustomerTable';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import Modal from '../modal/Modal';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import { Loader } from '@/components/loader/Loader';
import FormGenerator from '../forms/form-generator/FormGenerator';
import { cn, getMonthName } from '@/lib/utils';
import CalIcon from '@/icons/cal-icon';
import PersonIcon from '@/icons/person-icon';
import EditMail from './EditMail';

const EmailMarketing = ({
  domains,
  campaign,
  subscription,
}: EmailMarketingProps) => {
  const {
    onCreateCampaign,
    onCreateEmailTemplate,
    onSelectCampagin,
    addCustomerToCampaign,
    onSelectedEmail,
    onBulkEmail,
    isSelected,
    register,
    errors,
    loading,
    processing,
    campaignId,
    onSetAnswersId,
    isId,
    registerEmail,
    emailErrors,
    editing,
    setValue,
  } = useEmailMarketing();
  return (
    <div className='w-full flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <CustomerTable
        domains={domains}
        onId={onSetAnswersId}
        onSelect={onSelectedEmail}
        select={isSelected}
        id={isId}
      />
      <div>
        <div className='flex gap-3 justify-end'>
          <Button
            disabled={isSelected.length == 0}
            onClick={addCustomerToCampaign}
            className='dark:bg-brown'
          >
            <Plus /> Add to Campaign
          </Button>
          <Modal
            title='Create a new campaign'
            description='Add your customers and create a marketing campaign'
            trigger={
              <Card className='flex gap-2 items-center px-3 cursor-pointer text-sm'>
                <Loader loading={false}>
                  <Plus />
                </Loader>
              </Card>
            }
          >
            <form className='flex flex-col gap-4' onSubmit={onCreateCampaign}>
              <FormGenerator
                name='name'
                register={register}
                errors={errors}
                inputType='input'
                placeholder='your campaign name'
                type='text'
              />
              <Button
                className='w-full dark:text-brown'
                disabled={loading}
                type='submit'
              >
                <Loader loading={loading}>Create Campaign</Loader>
              </Button>
            </form>
          </Modal>
          <Card className='p-2'>
            <CardDescription className='font-bold'>
              {subscription?.credits} credits
            </CardDescription>
          </Card>
        </div>
        <div className='flex flex-col items-end mt-5 gap-3'>
          {campaign &&
            campaign.map((camp, i) => (
              <Card
                key={camp.id}
                className={cn(
                  'p-5 min-w-[600px] cursor-pointer',
                  campaignId == camp.id ? 'bg-gray-50' : '',
                )}
                onClick={() => onSelectCampagin(camp.id)}
              >
                <Loader loading={processing}>
                  <CardContent className='p-0 flex flex-col items-center gap-3'>
                    <div className='flex w-full justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        <CalIcon />
                        <CardDescription>
                          Created {getMonthName(camp.createdAt.getMonth())}{' '}
                          {camp.createdAt.getDate()}th
                        </CardDescription>
                      </div>
                      <div className='flex gap-2'>
                        <PersonIcon />
                        <CardDescription>
                          {camp.customers.length} customers added
                        </CardDescription>
                      </div>
                    </div>
                    <div className='flex w-full justify-between items-center'>
                      <CardTitle className='text-xl '>{camp.name}</CardTitle>
                      <div className='gap-3 flex'>
                        <Modal
                          title='Edit email'
                          description='This email will be sent to all the members'
                          trigger={
                            <Card className='rounded-lg cursor-pointer bg-grandis py-2 px-5 font-semibold text-sm hover:bg-orange text-gray-700'>
                              Edit Mail
                            </Card>
                          }
                        >
                          <EditMail
                            register={registerEmail}
                            errors={emailErrors}
                            setDefault={setValue}
                            id={camp.id}
                            onCreate={onCreateEmailTemplate}
                          />
                        </Modal>
                      </div>
                    </div>
                  </CardContent>
                </Loader>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;
