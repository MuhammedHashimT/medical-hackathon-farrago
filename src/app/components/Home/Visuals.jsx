// components/Visuals.js

const Visuals = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-200">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="/images/image1.jpg"
          alt="Health Visuals"
          className="rounded-lg shadow-xl mb-8"
        />
        <p className="text-xl text-gray-800">
          Transform Your Health with Personalized Recommendations
        </p>
      </div>
    </div>
  );
};

export default Visuals;
