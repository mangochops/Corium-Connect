import Image from "next/image";
import { Services as servicesList } from "@/constants"; // Renaming the imported data

export default function Services() {
  return (
    <section className="py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Our Services</h1>
      </div>

      {servicesList.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          } items-center justify-between mb-10`}
        >
          {/* Text Content */}
          <div className="md:w-1/2 px-5">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>

            {/* Extra Description */}
            <p className="text-gray-700 mb-4">{service.extra}</p>

            {/* Technologies Used */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {service.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Icon/Image Section */}
          <div className="md:w-1/2 px-5 mt-5 md:mt-0 flex justify-center">
            <div className="bg-gray-100 p-8 rounded-full">
              <Image
                src={`/icons/${service.title.toLowerCase()}.svg`} // Adjust image path as needed
                alt={service.title}
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
