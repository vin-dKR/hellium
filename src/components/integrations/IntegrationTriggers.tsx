import React from 'react'

type IntegrationTriggersProps = {
    name: 'stripe',
    logo: string,
    title: string,
    description: string,
    connections: {
        [key in 'stripe']: boolean
    }
}

const IntegrationTriggers = ({
    name,
    logo,
    title,
    description,
    connections
}: IntegrationTriggersProps) => {
    return (
        <>
            {/* <Modal>
            impleementation........
            </Modal> */}
        </>
    )
}

export default IntegrationTriggers