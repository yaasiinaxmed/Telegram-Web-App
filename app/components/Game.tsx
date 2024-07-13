"use client";

import React, { useState } from "react";

const Game: React.FC = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const handleNumberClick = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
    } else {
      if (selectedNumbers.length < 7) {
        setSelectedNumbers([...selectedNumbers, number]);
      }
    }
  };

  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="bg-white p-4 w-[90%] sm:w-[380px] rounded-lg flex flex-col items-center shadow">
      <div className="flex flex-col gap-3 pb-3">
        <h2 className="text-xl font-bold text-center text-gray-800">
          Play <span className="text-[#F1C017]">Game</span>{" "}
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {numbers.map((number) => (
          <button
            key={number}
            className={`w-10 h-10 rounded-full ${
              selectedNumbers.includes(number)
                ? "bg-[#2A266A] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleNumberClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <button className="bg-[#2A266A] p-3 rounded-lg text-white px-8 py-2">
        Next
      </button>
    </div>
  );
};

export default Game;