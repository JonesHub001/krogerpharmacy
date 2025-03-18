import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  medication: string;
  dosage: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  medication?: string;
  dosage?: string;
  prescriptionFile?: string;
}

interface Medication {
  id: string;
  name: string;
  dosages: string[];
}

interface LocationState {
  medication?: string;
  medicationName?: string;
}

// Mock data - replace with your actual product data
const medications: Medication[] = [
  {
    id: '1',
    name: 'Wegovy',
    dosages: ['0.25mg', '0.5mg', '1mg', '1.7mg', '2.4mg'],
  },
  {
    id: '2',
    name: 'Mounjaro',
    dosages: ['2.5mg', '5mg', '7.5mg', '10mg', '12.5mg', '15mg'],
  },
  {
    id: '3',
    name: 'Semaglutide',
    dosages: ['0.25mg', '0.5mg', '1mg', '2mg'],
  },
];

const OrderForm: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  const [selectedMedication, setSelectedMedication] = useState<string>(state?.medication || '');
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    medication: state?.medication || '',
    dosage: '',
    notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (state?.medication) {
      setSelectedMedication(state.medication);
      setFormData(prev => ({
        ...prev,
        medication: state.medication || '' // Ensure it's always a string
      }));
    }
  }, [state?.medication]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.medication) newErrors.medication = 'Please select a medication';
    if (!formData.dosage) newErrors.dosage = 'Please select a dosage';
    
    // Only validate prescription file if one is uploaded
    if (prescriptionFile && prescriptionFile.type !== 'application/pdf') {
      newErrors.prescriptionFile = 'Only PDF files are accepted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // TODO: Implement actual form submission logic
        const formDataToSubmit = {
          ...formData,
          prescriptionFile,
        };
        console.log('Form submitted:', formDataToSubmit);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          medication: '',
          dosage: '',
          notes: '',
        });
        setPrescriptionFile(null);
        setSelectedMedication('');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setPrescriptionFile(file);
  };

  const selectedMed = medications.find((med) => med.id === selectedMedication);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Order Form */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Place Your Order</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors"
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors"
                    placeholder="123 Main St, City, State"
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="medication" className="block text-sm font-medium text-gray-700">
                    Select Medication
                  </label>
                  <select
                    id="medication"
                    name="medication"
                    value={selectedMedication}
                    onChange={(e) => {
                      setSelectedMedication(e.target.value);
                      handleInputChange(e);
                    }}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors"
                  >
                    <option value="">Choose a medication</option>
                    {medications.map((med) => (
                      <option key={med.id} value={med.id}>
                        {med.name}
                      </option>
                    ))}
                  </select>
                  {errors.medication && (
                    <p className="mt-1 text-sm text-red-600">{errors.medication}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="dosage" className="block text-sm font-medium text-gray-700">
                    Select Dosage
                  </label>
                  <select
                    id="dosage"
                    name="dosage"
                    value={formData.dosage}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors"
                    disabled={!selectedMedication}
                  >
                    <option value="">Choose a dosage</option>
                    {selectedMed?.dosages.map((dosage) => (
                      <option key={dosage} value={dosage}>
                        {dosage}
                      </option>
                    ))}
                  </select>
                  {errors.dosage && (
                    <p className="mt-1 text-sm text-red-600">{errors.dosage}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="prescriptionFile" className="block text-sm font-medium text-gray-700">
                  Upload Prescription (PDF)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-purple-500 transition-colors">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          accept=".pdf"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF up to 10MB</p>
                  </div>
                </div>
                {errors.prescriptionFile && (
                  <p className="mt-1 text-sm text-red-600">{errors.prescriptionFile}</p>
                )}
                {prescriptionFile && (
                  <p className="mt-2 text-sm text-green-600">
                    Selected file: {prescriptionFile.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors"
                  placeholder="Any special instructions or notes..."
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
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
                  <dt className="text-gray-600">Selected Dosage</dt>
                  <dd className="font-medium text-gray-900">
                    {formData.dosage || 'Not selected'}
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
            <div className="mt-6 space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">Important Note</h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Please ensure your prescription is valid and clearly legible. Our pharmacist will review your order within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
