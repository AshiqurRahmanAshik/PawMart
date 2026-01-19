import Aos from "aos";
import React, { useEffect } from "react";
import { FaStethoscope } from "react-icons/fa";

const vets = [
  {
    id: 1,
    name: "Dr. Kamei Thompson",
    title: "Senior Veterinary Surgeon",
    image:
      "https://i.ibb.co.com/ym8fm5hX/healthcare-workers-medicine-covid-19-pandemic-self-quarantine-concept-cheerful-smiling-hispanic-male.jpg",
    description:
      "With over 10 years of experience, Dr. Sarah specializes in small animal surgery and preventive healthcare.",
  },
  {
    id: 2,
    name: "Dr. Michael Lee",
    title: "Pet Nutrition Specialist",
    image:
      "https://i.ibb.co.com/zhh7HWXs/f2aa2773-4581-4b8d-bfaa-42e1f91fcdc1.jpg",
    description:
      "Dr. Michael focuses on holistic nutrition and diet planning to ensure your pets live healthy, active lives.",
  },
  {
    id: 3,
    name: "Dr. Emma Johnson",
    title: "Exotic Animal Expert",
    image:
      "https://i.ibb.co.com/NdtpY9nF/doctor-wearing-white-coat-medium-shot.jpg",
    description:
      "Dr. Emma is passionate about treating exotic pets and wildlife with gentle, compassionate care.",
  },
  {
    id: 4,
    name: "Dr. David Kim",
    title: "Veterinary Dentist",
    image:
      "https://i.ibb.co.com/wFgvpjdd/portrait-hansome-young-male-doctor-man-1.jpg",
    description:
      "Dr. David ensures your pets maintain bright, healthy smiles through expert dental care.",
  },
];

const MeetOurVets = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="bg-linear-to-b from-blue-50 to-white py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10 flex items-center justify-center gap-2">
        <FaStethoscope className="text-blue-600" />
        Meet Our Expert Vets
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {vets.map((vet) => (
          <div
            data-aos="zoom-in"
            key={vet.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6"
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="w-32 h-32 object-cover mx-auto rounded-full mb-4 border-4 border-blue-200"
            />
            <h3 className="text-xl font-semibold text-gray-800">{vet.name}</h3>
            <p className="text-blue-600 text-sm font-medium mb-3">
              {vet.title}
            </p>
            <p className="text-gray-600 text-sm">{vet.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurVets;
