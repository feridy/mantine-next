import Image from 'next/image';
import { createStyles } from '@mantine/core';
import { ArrowLeftIcon, ArrowRightIcon } from '@modulz/radix-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const useStyles = createStyles((theme, _params, getRef) => ({
  root: {
    position: 'absolute',
    width: '100%',
    margin: '0 auto',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    '&:hover': {
      [`& .${getRef('controller')}`]: {
        opacity: 1,
        pointerEvents: 'all',
      },
    },

    '.swiper-pagination-bullet': {
      background: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[9],

      '&.swiper-pagination-bullet-active': {
        background:
          theme.colorScheme === 'dark'
            ? theme.colors[theme.primaryColor][2]
            : theme.colors[theme.primaryColor][6],
      },
    },
  },
  controller: {
    ref: getRef('controller'),
    position: 'absolute',
    top: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    cursor: 'pointer',
    opacity: 0,
    width: '6.25rem',
    pointerEvents: 'none',
    transition: 'opacity .36s ease-in-out',
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  prev: {
    left: 0,
  },
  next: {
    right: 0,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: theme.colors.gray[4],
    color: theme.colors[theme.primaryColor][5],
    zIndex: 1,
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
  const { classes, cx } = useStyles();

  return (
    <div className={classes.root}>
      <Swiper
        spaceBetween={30}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        speed={1000}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '#prev',
          nextEl: '#next',
        }}
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        className={classes.swiper}
      >
        {images.map((item) => (
          <SwiperSlide key={item.id} className={classes.silder}>
            <Image src={item.src} unselectable="on" objectFit="cover" layout="fill" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div id="prev" className={classes.controller}>
        <div className={classes.button}>
          <ArrowLeftIcon height={28} width={28} />
        </div>
      </div>
      <div id="next" className={cx(classes.controller, classes.next)}>
        <div className={classes.button}>
          <ArrowRightIcon height={28} width={28} />
        </div>
      </div>
    </div>
  );
};
