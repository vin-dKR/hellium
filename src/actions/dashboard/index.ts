'use server';
import { currentUser } from '@clerk/nextjs';
import client from '@/lib/prisma';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  typescript: true,
  apiVersion: '2024-06-20',
});

export const getUserClients = async () => {
  try {
    const user = await currentUser();
    if (user) {
      const clients = await client.customer.count({
        where: {
          Domain: {
            User: {
              clerkId: user.id,
            },
          },
        },
      });
      if (clients) {
        return clients;
      }
    }
  } catch (e) {
    console.log(e);
  }
};

export const getUserBalance = async () => {
  try {
    const user = await currentUser();

    if (user) {
      const connnectedStripe = await client.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          stripeId: true,
        },
      });
      if (connnectedStripe && connnectedStripe.stripeId) {
        const transcations = await stripe.balance.retrieve({
          stripeAccount: connnectedStripe.stripeId!,
        });

        if (transcations) {
          const sales = transcations.pending.reduce((total, next) => {
            return total + next.amount;
          }, 0);

          return sales / 100;
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
};

export const getUserPlanInfo = async () => {
  try {
    const user = await currentUser();

    if (user) {
      const plan = await client.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          _count: {
            select: {
              domains: true,
            },
          },
          subscription: {
            select: {
              plan: true,
              credits: true,
            },
          },
        },
      });

      if (plan) {
        return {
          plan: plan.subscription?.plan,
          credits: plan.subscription?.credits,
          domains: plan._count?.domains,
        };
      }
    }
  } catch (e) {
    console.log(e);
  }
};
