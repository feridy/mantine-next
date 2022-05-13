import { createStyles } from '@mantine/core';
import { SwiperComponent } from './SwiperComponent';

const useStyles = createStyles(() => ({
  root: {
    marginTop: 58,
    minHeight: 418,
  },
  wrapper: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    paddingBottom: '41.666667%',
  },
}));

const images = [
  { id: 1, src: '/nature-1.jpg' },
  {
    id: 2,
    src: '/nature-2.jpg',
  },
  {
    id: 3,
    src: '/nature-3.jpg',
  },
  {
    id: 4,
    src: '/nature-4.jpg',
  },
];

export const HomeSwiper: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <SwiperComponent images={images} />
      </div>
    </div>
  );
};
