import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mounjaro from '../assets/images/mounjaro.jpg';
import tirzepatide from '../assets/images/tirzpetide.jpeg';
import wegovy from '../assets/images/wegovy.jpeg';
import semaglutide from '../assets/images/semaglutide.jpeg';
import ozempic from '../assets/images/ozempic.jpeg';
import zepbound from '../assets/images/zepbound.jpeg';

interface Product {
  id: number;
  name: string;
  genericName: string;
  doses: string[];
  description: string;
  longDescription: string;
  usage: string;
  effectiveness: string;
  sideEffects: string[];
  imageSrc: any;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Mounjaro',
    genericName: 'Tirzepatide',
    doses: ['2.5mg', '5mg', '7.5mg', '10mg', '12.5mg', '15mg'],
    description: 'A revolutionary treatment for weight management, helping you achieve your health goals.',
    longDescription: 'Mounjaro (tirzepatide) is an innovative medication that works as a GIP and GLP-1 receptor agonist. It helps regulate blood sugar levels and can lead to significant weight loss when combined with diet and exercise.',
    usage: 'Weekly subcutaneous injection',
    effectiveness: 'Clinical trials have shown average weight loss of 15-20% of body weight over 72 weeks',
    sideEffects: ['Nausea', 'Diarrhea', 'Decreased appetite', 'Vomiting', 'Constipation'],
    imageSrc: mounjaro,
  },
  {
    id: 2,
    name: 'Wegovy',
    genericName: 'Semaglutide',
    doses: ['0.25mg', '0.5mg', '1mg', '1.7mg', '2.4mg'],
    description: 'Clinically proven weight management medication for long-term results.',
    longDescription: 'Wegovy (semaglutide) is a prescription medication for chronic weight management. It works by mimicking a hormone that targets areas of the brain involved in appetite regulation.',
    usage: 'Weekly subcutaneous injection',
    effectiveness: 'Patients may lose up to 15% of their body weight over 68 weeks',
    sideEffects: ['Nausea', 'Diarrhea', 'Vomiting', 'Constipation', 'Abdominal pain'],
    imageSrc: wegovy,
  },
  {
    id: 3,
    name: 'Ozempic',
    genericName: 'Semaglutide',
    doses: ['0.25mg', '0.5mg', '1mg', '2mg'],
    description: 'Effective treatment for weight management with proven results.',
    longDescription: 'Ozempic (semaglutide) is a once-weekly injection that helps regulate blood sugar and reduce appetite through GLP-1 receptor activation. It offers consistent and reliable weight management results.',
    usage: 'Weekly subcutaneous injection in abdomen, thigh, or upper arm',
    effectiveness: 'Clinical studies show significant weight loss of 12-14% of body weight over 52 weeks',
    sideEffects: ['Nausea', 'Vomiting', 'Diarrhea', 'Abdominal pain', 'Constipation'],
    imageSrc: ozempic,
  },
  {
    id: 4,
    name: 'Zepbound',
    genericName: 'Tirzepatide',
    doses: ['2.5mg', '5mg', '7.5mg', '10mg', '12.5mg', '15mg'],
    description: 'Advanced medication for comprehensive weight management support.',
    longDescription: 'Zepbound (tirzepatide) is a cutting-edge medication that combines GIP and GLP-1 receptor activation. Starting at 2.5mg, the dose is gradually increased based on individual response and tolerability.',
    usage: 'Weekly subcutaneous injection with flexible timing, with or without meals',
    effectiveness: 'Patients on the maximum dose (15mg) achieved average weight loss of 18% of body weight in clinical trials',
    sideEffects: ['Nausea', 'Diarrhea', 'Decreased appetite', 'Vomiting', 'Abdominal discomfort'],
    imageSrc: zepbound,
  },
  {
    id: 5,
    name: 'Semaglutide',
    genericName: 'Semaglutide',
    doses: ['0.25mg', '0.5mg', '1mg', '1.7mg', '2.4mg'],
    description: 'Generic version of proven weight management medication.',
    longDescription: 'Semaglutide is the active ingredient in both Wegovy and Ozempic. This generic version provides the same GLP-1 receptor agonist benefits, helping to reduce appetite and food intake for effective weight management.',
    usage: 'Weekly subcutaneous injection in abdomen, thigh, or upper arm',
    effectiveness: 'Demonstrates comparable weight loss results to branded versions, with 12-15% body weight reduction over 52 weeks',
    sideEffects: ['Nausea', 'Diarrhea', 'Vomiting', 'Constipation', 'Decreased appetite'],
    imageSrc: semaglutide,
  },
  {
    id: 6,
    name: 'Tirzepatide',
    genericName: 'Tirzepatide',
    doses: ['2.5mg', '5mg', '7.5mg', '10mg', '12.5mg', '15mg'],
    description: 'Generic form of dual GIP/GLP-1 receptor agonist medication.',
    longDescription: 'Tirzepatide is the active ingredient found in Mounjaro and Zepbound. This generic version offers the same innovative dual-action mechanism, targeting both GIP and GLP-1 receptors for enhanced weight management results.',
    usage: 'Weekly subcutaneous injection with flexible administration timing',
    effectiveness: 'Shows equivalent efficacy to branded versions, with potential for 15-20% body weight reduction over 72 weeks',
    sideEffects: ['Nausea', 'Decreased appetite', 'Diarrhea', 'Vomiting', 'Gastrointestinal discomfort'],
    imageSrc: tirzepatide,
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  const handleOrder = (product: Product) => {
    navigate('/order', {
      state: {
        medication: product.id.toString(),
        medicationName: product.name,
      }
    });
  };

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-purple-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our range of FDA-approved medications for effective weight management
            </p>
            <div className="mt-8 bg-blue-50 rounded-xl p-6 text-left">
              <p className="text-gray-700 leading-7">
                At Kroger Pharmacy, we take pride in providing only FDA-approved medications sourced directly from authorized manufacturers and distributors. Our commitment to quality and authenticity means we maintain strict supply chain standards, which can sometimes lead to limited availability. Despite these challenges, we've successfully maintained consistent supply to our valued customers since 2021, thanks to our strong relationships with legitimate pharmaceutical partners. This dedication to providing only genuine, high-quality medications has earned us the trust of our community and contributed to our long-standing success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-12 lg:space-y-0">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-white shadow-md sm:h-56 lg:h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="h-full w-full object-contain p-4 filter contrast-125 brightness-95"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-left hover:text-purple-600"
                  >
                    <span className="absolute inset-0" />
                    {product.name}
                  </button>
                </h3>
                <p className="text-base text-gray-500">{product.genericName}</p>
                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900">Available Doses:</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.doses.map((dose) => (
                      <span
                        key={dose}
                        className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10"
                      >
                        {dose}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product details modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-2xl font-semibold leading-6 text-gray-900">
                    {selectedProduct.name}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{selectedProduct.longDescription}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Usage</h4>
                    <p className="mt-1 text-sm text-gray-500">{selectedProduct.usage}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Effectiveness</h4>
                    <p className="mt-1 text-sm text-gray-500">{selectedProduct.effectiveness}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Common Side Effects</h4>
                    <ul className="mt-1 list-disc pl-5 text-sm text-gray-500">
                      {selectedProduct.sideEffects.map((effect, index) => (
                        <li key={index}>{effect}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 space-y-3">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                  onClick={() => handleOrder(selectedProduct)}
                >
                  Order Now
                </button>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}