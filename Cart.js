import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../store/cartSlice';


export default function Cart() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Your cart is empty</h2>
          <p className="mt-4 text-lg text-gray-500">Start shopping to add items to your cart</p>
          <div className="mt-6">
            <Link
              to="/products"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-accent hover:bg-accent/90"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900">Shopping Cart</h1>

      <div className="mt-8">
        <div className="flow-root">
          <ul className="-my-6 divide-y divide-gray-200">
            {items.map((item) => (
              <li key={`${item.id}-${item.size}`} className="py-6 flex">
                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-center object-cover"
                  />
                </div>

                <div className="ml-4 flex-1 flex flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </h3>
                      <p className="ml-4">${item.totalPrice.toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
                  </div>

                  <div className="flex-1 flex items-end justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => dispatch(decreaseQuantity({ id: item.id, size: item.size }))}
                        aria-label="Decrease quantity"
                        className="p-2 rounded hover:bg-gray-200"
                      >
                        <MinusIcon className="h-4 w-4" />
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQuantity({ id: item.id, size: item.size }))}
                        aria-label="Increase quantity"
                        className="p-2 rounded hover:bg-gray-200"
                      >
                        <PlusIcon className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => dispatch(removeFromCart({ id: item.id, size: item.size }))}
                      className="font-medium text-accent hover:text-accent/90 inline-flex items-center"
                    >
                      <TrashIcon className="h-5 w-5 mr-1" />
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${totalAmount.toFixed(2)}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6">
          <Link
            to="/checkout"
            className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90"
          >
            Checkout
          </Link>
        </div>
        <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
          <p>
            or{' '}
            <Link to="/products" className="text-accent hover:text-accent/90 font-medium">
              Continue Shopping
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
