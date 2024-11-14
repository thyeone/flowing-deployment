import { motion } from 'framer-motion';
import { ChangeEvent } from 'react';

type RangeSliderProps = {
  fromValue: number;
  setFromValue: (value: number) => void;
  toValue: number;
  setToValue: (value: number) => void;
  min: number;
  max: number;
};

export default function RangeSlider({
  fromValue,
  setFromValue,
  toValue,
  setToValue,
  min,
  max,
}: RangeSliderProps) {
  const handleFromChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), toValue);
    setFromValue(value);
  };

  const handleToChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), fromValue);
    setToValue(value);
  };

  return (
    <div className="flex w-full items-center px-5">
      <div className="relative w-full">
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
          <motion.div
            className="absolute inset-x-0 h-full bg-primary-400"
            style={{
              width: `${((toValue - fromValue) / 100) * 100}%`,
              left: `${fromValue}%`,
            }}
          />
        </div>
        <label>
          <input
            type="range"
            min={min}
            max={max}
            value={fromValue}
            onChange={handleFromChange}
            className="pointer-events-none absolute left-0 top-0 size-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:size-10 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:outline [&::-webkit-slider-thumb]:outline-1 [&::-webkit-slider-thumb]:outline-primary-400"
          />
        </label>
        <label>
          <input
            type="range"
            min={min}
            max={max}
            value={toValue}
            onChange={handleToChange}
            className="pointer-events-none absolute left-0 top-0 size-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:size-10 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:outline [&::-webkit-slider-thumb]:outline-1 [&::-webkit-slider-thumb]:outline-primary-400"
          />
        </label>
      </div>
    </div>
  );
}
