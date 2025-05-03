import React from 'react'
import useCartStore from '../../Stor/createStor'

function ShoppingCart() {
	const cart = useCartStore(state => state.cart)
	const removeFromCart = useCartStore(state => state.removeFromCart)
	const increaseQty = useCartStore(state => state.increaseQty)
	const decreaseQty = useCartStore(state => state.decreaseQty)

	return (
		<div className='max-w-[600px] mx-auto mt-10 p-4 bg-white rounded shadow'>
			<h2 className='text-2xl font-bold mb-6 text-center'>🛒 Savatcha</h2>
			{cart.length === 0 ? (
				<p className='text-center text-gray-500'>Savatcha bo‘sh</p>
			) : (
				cart.map(item => (
					<div
						key={item._id}
						className='border p-4 mb-4 rounded flex justify-between items-center bg-gray-50'
					>
						<div>
							<h3 className='text-lg font-semibold'>{item.title}</h3>
							<p className='text-green-600 font-bold'>${item.price}</p>
						</div>
						<div className='flex items-center gap-4'>
							<div className='flex items-center gap-2'>
								<button
									onClick={() => decreaseQty(item._id)}
									className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'
								>
									-
								</button>
								<span className='font-bold'>{item.quantity}</span>
								<button
									onClick={() => increaseQty(item._id)}
									className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'
								>
									+
								</button>
							</div>
							<button
								onClick={() => removeFromCart(item._id)}
								className='text-red-500 hover:underline'
							>
								O‘chirish
							</button>
						</div>
					</div>
				))
			)}
		</div>
	)
}

export default ShoppingCart
