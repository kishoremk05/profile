import { useEffect, useState } from "react";

const MovingCar = () => {
  const [carPosition, setCarPosition] = useState("20px");
  const [cupPosition, setCupPosition] = useState(
    `${window.innerWidth * 0.85}px`
  ); // Cup at right end

  useEffect(() => {
    const moveCar = () => {
      setCarPosition(cupPosition);
    };

    const checkDistanceAndMoveCup = () => {
      const carPos = parseFloat(carPosition);
      const cupPos = parseFloat(cupPosition);
      if (Math.abs(carPos - cupPos) < 10) {
        let newPosition = Math.random() * (window.innerWidth * 0.8) + "px";
        setCupPosition(newPosition);
      }
    };

    const timer = setTimeout(() => {
      moveCar();
      checkDistanceAndMoveCup();
    }, 500); // Start moving after a short delay

    return () => clearTimeout(timer);
  }, [cupPosition, carPosition]);

  return (
    <div className="absolute bottom-0 w-full">
      <div className="relative w-full h-[80px] md:h-[100px] overflow-hidden">
        {/* Road */}
        <div className="absolute bottom-5 w-full h-[30px] bg-gray-800 dark:bg-gray-900 border-t-2 border-b-2 border-gray-700">
          <div
            className="w-full h-[3px] bg-[repeating-linear-gradient(to_right,transparent_0px,transparent_10px,white_10px,white_20px)] 
                absolute top-1/2 left-0 transform -translate-y-1/2 animate-[move-lanes_3s_linear_infinite]"
          ></div>
        </div>

        {/* Car */}
        <div
          className="absolute bottom-[55px] md:bottom-[65px] w-[50px] h-[18px] bg-red-500 dark:bg-red-500 rounded-md transition-all duration-[7s] ease-linear"
          style={{ left: carPosition }}
        >
          <div className="absolute top-[-6px] left-[6px] w-[38px] h-[12px] bg-red-300 dark:bg-yellow-200 rounded-t-md"></div>
          <div className="absolute w-[14px] h-[7px] bg-blue-300 dark:bg-blue-400 top-[-3px] left-[13px] "></div>
          <div className="absolute w-[14px] h-[7px] bg-blue-300 dark:bg-blue-400 top-[-3px] left-[23px] "></div>
          <div className="absolute bottom-[-4px] w-[9px] h-[9px] bg-black rounded-full border-2 border-gray-400 left-[5px]"></div>
          <div className="absolute bottom-[-4px] w-[9px] h-[9px] bg-black rounded-full border-2 border-gray-400 right-[5px]"></div>
        </div>

        {/* Trophy Cup */}
        <div
          className="absolute bottom-[50px] right-0 md:bottom-[60px] text-[24px] animate-bounce transition-all duration-1000"
          style={{ left: cupPosition }}
        >
          🏆
        </div>
      </div>
    </div>
  );
};

export default MovingCar;
