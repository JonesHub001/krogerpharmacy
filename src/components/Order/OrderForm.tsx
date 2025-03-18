import React, { useState, FormEvent, ChangeEvent } from 'react';

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
  const [selectedMedication, setSelectedMedication] = useState<string>('');
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    medication: '',
    dosage: '',
    notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.medication) newErrors.medication = 'Please select a medication';
    if (!formData.dosage) newErrors.dosage = 'Please select a dosage';
    if (!prescriptionFile) {
      newErrors.prescriptionFile = 'Prescription file is required';
    } else if (prescriptionFile.type !== 'application/pdf') {
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
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Place Your Order</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Delivery Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-600">{errors.address}</p>
            )}
          </div>
        </div>

        {/* Medication Selection */}
        <div className="space-y-4">
          <div>
            <label htmlFor="medication" className="block text-sm font-medium text-gray-700">
              Select Medication
            </label>
            <select
              id="medication"
              name="medication"
              value={formData.medication}
              onChange={(e) => {
                handleInputChange(e);
                setSelectedMedication(e.target.value);
              }}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              disabled={!selectedMed}
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

        {/* Prescription Upload */}
        <div>
          <label htmlFor="prescriptionFile" className="block text-sm font-medium text-gray-700">
            Upload Prescription (PDF only)
          </label>
          <input
            type="file"
            id="prescriptionFile"
            name="prescriptionFile"
            accept=".pdf"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          {errors.prescriptionFile && (
            <p className="mt-1 text-sm text-red-600">{errors.prescriptionFile}</p>
          )}
        </div>

        {/* Order Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Any special instructions or notes for your order..."
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
