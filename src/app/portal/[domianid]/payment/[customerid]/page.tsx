import { onDomainCustomerResponses } from '@/actions/appointment'
import { onGetDomainProductsAndConnectedAccountId } from '@/actions/payment'
import PortalForm from '@/components/forms/portal/PortalForm'

const CustomerPaymentPage = async ({ params }: {
    params: { domainId: string, customerid: string }
}) => {
    const questions = await onDomainCustomerResponses(params.customerid)
    const products = await onGetDomainProductsAndConnectedAccountId(params.domainId)

    if (!questions) return (
        <>
            <div>{"No questions available"}</div>
        </>
    )

    return (
        <>
            <PortalForm
                email={questions.email!}
                products={products?.products}
                amount={products?.amount}
                domainid={params.domainId}
                customerId={params.customerid}
                questions={questions.questions}
                stripeId={products?.stripeId!}
                type='Payment'
            />
        </>
    )
}

export default CustomerPaymentPage