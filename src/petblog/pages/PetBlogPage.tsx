import { Typography } from '@mui/material';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';

export const PetBlogPage = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <Carousel />
      </main>
    </>
  );
};
