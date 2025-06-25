import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Profile() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Profile Information</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and account settings.</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Account ID</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.uid}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-medium text-gray-900">Account Settings</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">Email notifications</h3>
                <p className="mt-1 text-sm text-gray-500">Receive email updates about your orders and account activity.</p>
              </div>
              <button
                type="button"
                className="ml-4 px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              >
                Update
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">Change password</h3>
                <p className="mt-1 text-sm text-gray-500">Update your password to keep your account secure.</p>
              </div>
              <button
                type="button"
                className="ml-4 px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              >
                Change
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">Delete account</h3>
                <p className="mt-1 text-sm text-gray-500">Permanently delete your account and all associated data.</p>
              </div>
              <button
                type="button"
                className="ml-4 px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-medium text-gray-900">Order History</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-sm text-gray-500">No orders found.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}