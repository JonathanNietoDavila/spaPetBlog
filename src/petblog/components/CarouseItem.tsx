import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

interface ItemsProps {
  src: string;
  desc: string;
  title: string;
}

export const CarouseItem = ({ src, desc, title }: ItemsProps) => {
  desc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates similique culpa corrupti delectus sunt, quae cupiditate
  repudiandae? Ducimus earum repellat corporis inventore asperiores? Optio blanditiis error voluptatum repudiandae perferendis saepe
  vel! Eius veritatis aliquam consectetur fugiat ipsa consequuntur quibusdam, nam soluta reprehenderit illo saepe laboriosam
  voluptates obcaecati, sunt cupiditate fuga possimus voluptatem quia beatae. Id voluptatibus ratione corrupti molestias ipsa
  impedit minus nemo sequi tempore, aperiam hic illum repellendus dolor magnam reiciendis maiores deleniti. A aliquid soluta
  adipisci et quam assumenda nemo, tenetur nostrum corrupti eaque, perferendis corporis accusantium beatae excepturi quis. Quos
  cumque nobis delectus quaerat omnis quam obcaecati!`;
  return (
    <section className='carousel__card'>
      <section className='carousel__card-header'>
        <img src={src} alt='image' />
      </section>
      <section className='carousel__card-content'>
        <section className='title'>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
        </section>
        <section className='desc'>
          <Typography variant='body1' color='text.secondary'>
            {desc}
          </Typography>
        </section>
      </section>
      <section className='carousel__card-footer'>
        <Button size='small'>Ver más</Button>
      </section>
    </section>
  );
};
