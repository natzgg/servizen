import { FaCalendarAlt } from "react-icons/fa";

const CalendlyButton = () => {
  return (
    <button className="fixed h-12 bottom-5 right-5 z-30 bg-blue-600 text-white py-1 px-3 rounded-lg shadow-white shadow-sm hover:scale-105 duration-300 radial-gradient">
      <div className="flex items-center gap-2">
        <FaCalendarAlt />
        <div className="flex flex-col items-start">
          <span className="font-bold text-sm">Book an appointment!</span>
          <span className="text-[10px] italic font-semibold">
            Powered by Calendly
          </span>
        </div>
      </div>
    </button>
  );
};

export default CalendlyButton;
