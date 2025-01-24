const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-500">
            Excellence in Metal Finishing Since 2018
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Under the visionary leadership of Mr. Prashant Shukla, Modern Technologies has 
            established itself as a pioneer in the metal finishing industry. Our state-of-the-art 
            facility and commitment to quality have made us the preferred choice for leading 
            manufacturers across India.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition duration-300">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 