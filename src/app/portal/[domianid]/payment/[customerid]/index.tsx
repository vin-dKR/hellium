import { onDomainCustomerResponses } from '@/actions/appointment'
import { onGetDomainProductsAndConnectedAccountId } from '@/actions/payment'
import PortalForm from '@/components/forms/portal/PortalForm'

const CustomerPaymentPage = async ({ params }: {
    params: { domainId: string, customerId: string }
}) => {
    const questions = await onDomainCustomerResponses(params.customerId)
    const products = await onGetDomainProductsAndConnectedAccountId(params.domainId)

    if (!questions) return null

    return (
        <>
            <PortalForm
                email={questions.email!}
                products={products?.products}
                amount={products?.amount}
                domainid={params.domainId}
                customerId={params.customerId}
                questions={questions.questions}
                stripeId={products?.stripeId!}
                type='Payment'
            />
        </>
    )
}

export default CustomerPaymentPage