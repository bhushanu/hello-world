// import { error } from '@sveltejs/kit'

import { redirect } from '@sveltejs/kit'

export const load = async(loadEvent) => {
    const {fetch, params} = loadEvent
    const {productId} = params
    if(parseInt(productId) > 3){
        // throw error(404, 'Product Not Found')
        throw redirect(307, '/api/products')
    }

    const title = "Product Details"

    const response = await fetch(`http://localhost:4000/products/${productId}`)
    const product = await response.json()
    

    return {
        title,
        product
    }
}