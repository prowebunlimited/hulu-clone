import { ThumbUpIcon } from '@heroicons/react/outline';
import { forwardRef } from 'react';
import Image from 'next/image';
const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const imagePath =
    `${BASE_URL}${result.backdrop_path}` || `${BASE_URL}${result.poster_path}`;
  //   console.log('Image Path : ', imagePath);
  return (
    <div
      ref={ref}
      className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'
    >
      <Image layout='responsive' src={imagePath} height={1080} width={1920} />
      <div className='p-2 pl-10 sm:pl-2'>
        <p className='truncate break-words max-w-xs sm:max-w-md'>
          {result.overview}
        </p>
        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
          {result.title || result.original_name}
        </h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          {result.media_type && `${result.media_type} *`}{' '}
          {result.release_date || result.first_air_date} *{' '}
          <ThumbUpIcon className='h-5 mx-2' />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
