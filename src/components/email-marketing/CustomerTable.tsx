import React from 'react'
import { DataTable } from '../table/DataTable'
import { EMAIL_MARKETING_HEADER } from '@/constants/menu'
import { TableCell, TableRow } from '../ui/table'
import { Card } from '../ui/card'
import { cn } from '@/lib/utils'
import { SideSheet } from '../sheet/Sheet'

const CustomerTable = ({ domains, id, onSelect, select, onId }: CustomerTableProps) => {
    return (
        <DataTable headers={EMAIL_MARKETING_HEADER}>
            {domains.map((domain) =>
                domain.customer.map((c) => (
                    <TableRow key={c.id}>
                        <TableCell>
                            <Card
                                onClick={() => onSelect(c.email as string)}
                                className={cn(
                                    'rounded-full w-5 h-5 border-4 cursor-pointer',
                                    select.includes(c.email as string) ? 'bg-orange' : 'bg-peach'
                                )}
                            />
                        </TableCell>
                        <TableCell>
                            {c.email}
                        </TableCell>
                        <TableCell>
                            <SideSheet
                                title="Answer"
                                description='Customer answers are stored by the bot when your customers respond back to the questions asked by the bot.'
                                trigger={
                                    <Card
                                        className='bg-grandis py-2 px-4 cursor-pointer text-gray-700 hover:bg-orange'
                                        onClick={() => onId(c.id)}
                                    >
                                        View
                                    </Card>
                                }
                            >
                                <div>
                                    {/* Answer Components */}
                                </div>
                            </SideSheet>
                        </TableCell>
                    </TableRow>
                ))
            )}
        </DataTable>
    )
}

export default CustomerTable