import Image from 'next/image';
import { createStyles } from '@mantine/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const useStyles = createStyles(() => ({
  root: {
    position: 'absolute',
    width: '100%',
    margin: '0 auto',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  swiper: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },

  silder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

type SwiperComponentProps = {
  images: { src: string; id: number }[];
};

export const SwiperComponent: React.FC<SwiperComponentProps> = ({ images = [] }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation
        pagination={{
          clickable: true,
        }}
        loop
        autoplay={{
          delay: 0,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className={classes.swiper}
      >
        {images.map((item) => (
          <SwiperSlide key={item.id} className={classes.silder}>
            <Image src={item.src} width={429} height={429} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
