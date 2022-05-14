import { createStyles, Container, Group, Text, Button } from '@mantine/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Link from 'next/link';
import { CardItem } from './CardItem';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },
  swiperWrapper: {
    position: 'relative',
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
    '.swiper-button-prev': {
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
      cursor: 'pointer',
      width: 40,
      height: 40,
      borderRadius: '50%',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.black,
      color: theme.colors[theme.primaryColor][5],
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
      '&.swiper-button-disabled': {
        display: 'none',
      },
    },
    '.swiper-button-next': {
      position: 'absolute',
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
      cursor: 'pointer',
      width: 40,
      height: 40,
      borderRadius: '50%',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.black,
      color: theme.colors[theme.primaryColor][5],
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
      '&.swiper-button-disabled': {
        display: 'none',
      },
    },

    [theme.fn.smallerThan('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  controller: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    cursor: 'pointer',
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.black,
    color: theme.colors[theme.primaryColor][5],
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
}));

export const InspriationCard: React.FC = () => {
  const { theme, classes } = useStyles();

  return (
    <Container size={1240} className={classes.root}>
      <Group position="apart">
        <Text size="xl" my="xl" weight={700}>
          Product List
        </Text>
        <Link href="/products">
          <Button component="a" variant="subtle">
            Look More
          </Button>
        </Link>
      </Group>

      <div className={classes.swiperWrapper}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            [theme.breakpoints.xs]: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            [theme.breakpoints.sm]: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            [theme.breakpoints.lg]: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={
            {
              // prevEl: '#prev-card',
              // nextEl: '#next-card',
            }
          }
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <CardItem
              title="测试"
              desc="Please click anywhere on this card to claim your reward"
              id={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem
              title="测试"
              desc="Please click anywhere on this card to claim your reward"
              id={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem
              title="测试"
              desc="Please click anywhere on this card to claim your reward"
              id={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem
              title="测试"
              desc="Please click anywhere on this card to claim your reward"
              id={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem
              title="测试"
              desc="Please click anywhere on this card to claim your reward"
              id={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem
              title="测试"
              desc="Please click anywhere on this card to claim your reward"
              id={1}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};
