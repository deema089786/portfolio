import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { ShowroomGridProps } from './showroom-grid.types';

const itemData: { img: string; title: string; rows?: number; cols?: number }[] =
  [
    {
      img: '/images/showroom/1.jpg',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: '/images/showroom/2.jpg',
      title: 'Burger',
    },
    {
      img: '/images/showroom/3.jpg',
      title: 'Camera',
    },
    {
      img: '/images/showroom/4.jpg',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: '/images/showroom/5.jpg',
      title: 'Hats',
      cols: 2,
    },
    {
      img: '/images/showroom/6.jpg',
      title: 'Honey',
      rows: 2,
      cols: 2,
    },
    {
      img: '/images/showroom/7.jpg',
      title: 'Basketball',
    },
    {
      img: '/images/showroom/8.jpg',
      title: 'Fern',
    },
    {
      img: '/images/showroom/9.jpg',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: '/images/showroom/10.jpg',
      title: 'Tomato basil',
    },
    {
      img: '/images/showroom/1.jpg',
      title: 'Sea star',
    },
    {
      img: '/images/showroom/2.jpg',
      title: 'Bike',
      cols: 2,
    },
  ] as const;

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const ShowroomGrid: React.FC<ShowroomGridProps> = () => {
  return (
    <ImageList
      sx={{ width: 1000, borderRadius: '16px' }}
      variant="quilted"
      cols={6}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
