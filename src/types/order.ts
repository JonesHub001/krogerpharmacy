export interface Medication {
  id: string;
  name: string;
  dosages: string[];
}

export interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  medication: string;
  dosage: string;
  prescriptionFile: FileList;
  notes?: string;
}
