import React from 'react'
import Modal from '../modal/Modal'
import { Card } from '../ui/card'
import { CloudIcon } from 'lucide-react'
import { Separator } from '../ui/separator'
import ModalBody from './ModalBody'

const IntegrationTriggers = ({
    name,
    logo,
    title,
    description,
    connections
}: IntegrationTriggersProps) => {
    return (
        <Modal
            title={title}
            type="Integration"
            logo={logo}
            description={description}
            trigger={
                <Card className="px-3 py-2 cursor-pointer flex gap-2">
                    <CloudIcon />
                    {connections[name] ? 'connected' : 'connect'}
                </Card>
            }
        >
            <Separator orientation="horizontal" />
            <ModalBody
                connections={connections}
                type={name}
            />
        </Modal>
    )
}

export default IntegrationTriggers