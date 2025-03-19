import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { supabase } from '../../lib/supabaseClient';

interface OrderFormData {
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  medicationName: string;
  quantity: number;
  specialInstructions: string;
  prescriptionImage?: File;
}

// interface FormErors {
//   name?: string;
//   email?: string;
//   phone?: string;
//   address?: string;
//   medication?: string;
//   dosage?: string;
//   prescriptionFile?: string;
// }

const medications = [
  {
    id: '1',
    name: 'Wegovy',
    dosages: ['0.25mg', '0.5mg', '1mg', '1.7mg', '2.4mg']
  },
  {
    id: '2',
    name: 'Mounjaro',
    dosages: ['2.5mg', '5mg', '7.5mg', '10mg', '12.5mg', '15mg']
  },
  {
    id: '3',
    name: 'Ozempic',
    dosages: ['0.25mg', '0.5mg', '1mg', '2mg']
  },
  {
    id: '4',
    name: 'Tirzepatide',
    dosages: ['2.5mg', '5mg', '7.5mg', '10mg', '12.5mg', '15mg']
  },
  {
    id: '5',
    name: 'Zepbound',
    dosages: ['2.5mg', '5mg', '7.5mg', '10mg', '12.5mg', '15mg']
  },
];

export default function OrderForm() {
  const [selectedMedication, setSelectedMedication] = useState<string>('');
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    medicationName: '',
    quantity: 1,
    specialInstructions: ''
  });
  // const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let prescriptionUrl = '';

      // Upload prescription image if provided
      if (prescriptionFile) {
        const fileExt = prescriptionFile.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        
        console.log('Uploading prescription file...');
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('prescriptions')
          .upload(fileName, prescriptionFile);

        if (uploadError) {
          console.error('Error uploading prescription:', uploadError);
          throw uploadError;
        }
        
        if (uploadData) prescriptionUrl = uploadData.path;
      }

      const selectedMed = medications.find(med => med.id === selectedMedication);
      
      // Insert order into database
      console.log('Submitting order...');
      const { data, error } = await supabase
        .from('orders')
        .insert([
          {
            customer_name: formData.customerName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            postal_code: formData.postalCode,
            country: formData.country,
            prescription_image_url: prescriptionUrl,
            medication_name: selectedMed ? selectedMed.name : formData.medicationName,
            quantity: formData.quantity,
            special_instructions: formData.specialInstructions,
            status: 'pending'
          }
        ])
        .select();

      if (error) {
        console.error('Database error:', error);
        throw error;
      }

      console.log('Order submitted successfully:', data);

      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        customerName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        medicationName: '',
        quantity: 1,
        specialInstructions: ''
      });
      setPrescriptionFile(null);
      setSelectedMedication('');

    } catch (error) {
      console.error('Error submitting order:', error);
      alert('There was an error submitting your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedMed = medications.find(med => med.id === selectedMedication);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    id="customerName"
                    required
                    value={formData.customerName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Shipping Information</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    State / Province
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* Medication Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Medication Information</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="medicationName" className="block text-sm font-medium text-gray-700">
                    Medication
                  </label>
                  <select
                    id="medicationName"
                    name="medicationName"
                    value={selectedMedication}
                    onChange={(e) => {
                      setSelectedMedication(e.target.value);
                      handleInputChange(e);
                    }}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    required
                  >
                    <option value="">Select a medication</option>
                    {medications.map((med) => (
                      <option key={med.id} value={med.id}>
                        {med.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    min="1"
                    required
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="prescriptionImage" className="block text-sm font-medium text-gray-700">
                    Upload Prescription (PDF or Image)
                  </label>
                  <input
                    type="file"
                    name="prescriptionImage"
                    id="prescriptionImage"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700">
                    Special Instructions
                  </label>
                  <textarea
                    name="specialInstructions"
                    id="specialInstructions"
                    rows={3}
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center rounded-lg border border-transparent bg-purple-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
            <div className="flow-root">
              <dl className="-my-4 text-sm divide-y divide-gray-200">
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Selected Medication</dt>
                  <dd className="font-medium text-gray-900">
                    {selectedMed ? selectedMed.name : 'Not selected'}
                  </dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Quantity</dt>
                  <dd className="font-medium text-gray-900">
                    {formData.quantity}
                  </dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Prescription</dt>
                  <dd className="font-medium text-gray-900">
                    {prescriptionFile ? '✓ Uploaded' : '✗ Not uploaded'}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-6">
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="flex items-start space-x-3">
                  <InformationCircleIcon className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <div className="text-sm text-gray-500">
                    <p>Your order will be reviewed by our pharmacist within 24 hours. You'll receive a confirmation email with tracking details once your order is approved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded-lg bg-white p-6">
            <div className="flex items-center justify-center">
              <CheckCircleIcon className="h-12 w-12 text-green-500" />
            </div>
            <Dialog.Title className="mt-4 text-center text-lg font-medium text-gray-900">
              Order Submitted Successfully
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-center text-sm text-gray-500">
              Thank you for your order! Your request is now pending review. You will receive an email shortly with more information about your order status and next steps.
            </Dialog.Description>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowSuccess(false)}
                className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
