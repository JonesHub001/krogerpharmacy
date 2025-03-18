import sbs1 from '../assets/images/sbs1.jpg';
import sbs2 from '../assets/images/sbs2.jpg';
import sbs3 from '../assets/images/sbs3.jpg';
import sbs4 from '../assets/images/sbs4.jpg';
import sbs5 from '../assets/images/sbs5.jpg';
import sbs6 from '../assets/images/sbs6.jpg';
import sbs7 from '../assets/images/sbs7.jpg';
import sbs8 from '../assets/images/sbs8.jpg';
import p8 from '../assets/images/p8.jpg';
import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import p5 from '../assets/images/p5.jpg';
import p6 from '../assets/images/p6.jpg';
import p7 from '../assets/images/p7.jpg';
const About = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-purple-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Kroger Pharmacy</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Established in 2021, we're committed to providing safe, effective, and professional weight management solutions.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                alt="Modern pharmacy interior"
                className="w-full h-full object-cover rounded-2xl shadow-xl ring-1 ring-gray-400/10"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Your Health Journey
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're dedicated to providing accessible, professional, and effective weight management solutions through licensed medical supervision and FDA-approved medications.
            </p>
          </div>
        </div>
      </div>

      {/* Credentials section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Credentials</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We maintain the highest standards of pharmaceutical care and professional service.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <dt className="font-semibold text-gray-900">Licensed Pharmacy</dt>
              <dd className="mt-1 text-gray-600">Fully licensed and regulated by state and federal authorities</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">HIPAA Compliant</dt>
              <dd className="mt-1 text-gray-600">Strict adherence to patient privacy and data protection standards</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Professional Team</dt>
              <dd className="mt-1 text-gray-600">Board-certified physicians and licensed pharmacists</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Gallery section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Gallery</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Take a look at our facility and services through these images
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {[
              { src: p1, alt: 'Gallery Image 1' },
              { src: p2, alt: 'Gallery Image 2' },
              { src: p3, alt: 'Gallery Image 3' },
              { src: p4, alt: 'Gallery Image 4' },
              { src: p5, alt: 'Gallery Image 5' },
              { src: p6, alt: 'Gallery Image 6' },
              { src: p7, alt: 'Gallery Image 7' },
              { src: p8, alt: 'Gallery Image 8' },
            ].map((image, index) => (
              <div key={index} className="relative">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transformation Gallery section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Success Stories</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Real Results, Real Transformations
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join thousands who have achieved their weight management goals through our medically-supervised programs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Sarah Mitchell",
                image: sbs1,
                duration: "6 months progress",
                weightLoss: "45 lbs",
                location: "Texas"
              },
              {
                name: "Michael Hopins",
                image:  sbs2,
                duration: "9 months progress",
                weightLoss: "82 lbs",
                location: "Florida"
              },
              {
                name: "Emily Harley",
                image: sbs3,
                duration: "5 months progress",
                weightLoss: "38 lbs",
                location: "California"
              },
              {
                name: "James Wilson",
                image: sbs4,
                duration: "7 months progress",
                weightLoss: "48 lbs",
                location: "New York"
              },
              {
                name: "Maria Garcia",
                image:  sbs5,
                duration: "4 months progress",
                weightLoss: "32 lbs",
                location: "Arizona"
              },
              {
                name: "Daesy Kim",
                image: sbs6,
                duration: "13 months progress",
                weightLoss: "90 lbs",
                location: "Washington"
              },    
              {
                name: "Lisa Thompson",
                image: sbs7,
                duration: "10 months progress",
                weightLoss: "75 lbs",
                location: "Colorado"
              },
              {
                name: "Robertine Martinez",
                image: sbs8,
                duration: "7 months progress",
                weightLoss: "55 lbs",
                location: "Illinois"
              }
            ].map((person, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-square">
                  <img
                    src={person.image}
                    alt={`${person.name}'s Transformation`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-medium text-white">
                        {person.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-300">{person.duration}</p>
                      <p className="text-purple-300 font-medium">Lost {person.weightLoss}</p>
                      <p className="text-gray-300 text-sm">{person.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our support team is available during business hours to assist you.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div>
              <h3 className="border-l border-purple-600 pl-6 font-semibold text-gray-900">Operating Hours</h3>
              <div className="mt-4 border-l border-gray-200 pl-6 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div>
              <h3 className="border-l border-purple-600 pl-6 font-semibold text-gray-900">Address</h3>
              <div className="mt-4 border-l border-gray-200 pl-6 text-gray-600">
                <p>26942 Fessey Ct</p>
                <p>Nashville, TN 37204</p>
                <p>United States</p>
                <p className="mt-2 text-sm">Located in: Vanderbilt Hospital Clinic at MNPS, Wellness Center</p>
              </div>
            </div>
            <div>
              <h3 className="border-l border-purple-600 pl-6 font-semibold text-gray-900">Phone</h3>
              <div className="mt-4 border-l border-gray-200 pl-6 text-gray-600">
                <p>Main: +1 (615) 395-1474</p>
                <p>Fax: 1-800-TRUSTFAX</p>
              </div>
            </div>
            <div>
              <h3 className="border-l border-purple-600 pl-6 font-semibold text-gray-900">Email</h3>
              <div className="mt-4 border-l border-gray-200 pl-6 text-gray-600">
                <p>support@krogerpharmacy.com</p>
                <p>info@krogerpharmacy.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;