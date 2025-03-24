import { useTheme } from 'next-themes';
import { Fragment, useState } from 'react';

import { ChekcedStar, UnCheckedLightStar, UncheckedDarkStar } from '@/assets/Star';

type StarRatingProps = {
  rating: number;
  handleOnClick: (index: number) => void;
};

export default function StarRating({ rating, handleOnClick }: StarRatingProps) {
  const { theme } = useTheme();

  return (
    <>
      {Array(5)
        .fill(theme === 'light' ? <UnCheckedLightStar /> : <UncheckedDarkStar />)
        .map((icon, index) => (
          <Fragment key={index}>
            <input type="radio" name="rating" className="hidden appearance-none" />
            <span onClick={() => handleOnClick(index)}>
              {index < rating ? <ChekcedStar /> : icon}
            </span>
          </Fragment>
        ))}
    </>
  );
}
