import React from 'react'
import TabsMenu from '../tabs/TabsMenu'


const ProductTable = ({ products, id }: ProductTableProps) => {
    return (
        <div>
            <div>
                <h2 className="font-bold text-2xl">Products</h2>
                <p className="text-sm font-light">
                    Add products to your store and set them live to accept payments from
                    customers.
                </p>
                <TabsMenu
                    className='width-full flex justify-content'
                    triggers={[
                        { label: 'All Products' },
                        { label: 'Live' },
                        { label: 'Deactivated' }
                    ]}
                    button={
                        <div className='flex-1 flex justify-end'>
                            
                        </div>
                    }
                >
                    hii
                </TabsMenu>
            </div>
        </div >
    )
}

export default ProductTable