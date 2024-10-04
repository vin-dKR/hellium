import React from 'react'
import TabsMenu from '../tabs/TabsMenu'
import { SideSheet } from '../sheet/Sheet'
import { Plus } from 'lucide-react'
import CreateProductForm from './ProductForm'


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
                            <SideSheet
                                description="Add products to your store and set them live to accept payments from
                            customers."
                                title="Add a product"
                                className="flex items-center gap-2 bg-orange px-4 py-2 text-black font-semibold rounded-lg text-sm"
                                trigger={
                                    <>
                                        <Plus
                                            size={20}
                                            className="text-white"
                                        />
                                        <p className="text-white">Add Product</p>
                                    </>
                                }
                            >
                                <CreateProductForm id={id} />
                            </SideSheet>
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