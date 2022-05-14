import { NextPage } from 'next';
import Image from 'next/image';
import { createStyles, Container, Grid, Card, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },

  card: {
    cursor: 'pointer',
    minWidth: 290,
  },

  section: {
    position: 'relative',
    height: 290,
    overflow: 'hidden',
    img: {
      transition: 'all .3s ease',
    },
    '&:hover': {
      img: {
        transform: 'scale(1.1)',
      },
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.683,
  },

  desc: {
    height: 68,
  },
}));

const Page: NextPage = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container size={1240} my="lg">
        <Grid gutter="xl">
          <Grid.Col xs={4}>
            <Card withBorder radius="sm" className={classes.card}>
              <Card.Section className={classes.section}>
                <Image
                  src="/84b72ffd572fe0a357be8c130.jpg"
                  alt=""
                  objectFit="cover"
                  layout="fill"
                  blurDataURL="/logo.png"
                  placeholder="blur"
                />
              </Card.Section>

              <Text size="lg" align="center" weight={700} className={classes.title} lineClamp={2}>
                033-A Dining Room Chair
              </Text>
              <Text color="dimmed" size="sm" lineClamp={4} className={classes.desc}>
                wooden leg dining table set black grey 8 chairs white leather modern restaurant used
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col xs={4}>
            <Card withBorder radius="sm" className={classes.card}>
              <Card.Section className={classes.section}>
                <Image
                  src="/84b72ffd572fe0a357be8c130.jpg"
                  alt=""
                  objectFit="cover"
                  layout="fill"
                  blurDataURL="/logo.png"
                  placeholder="blur"
                />
              </Card.Section>

              <Text size="lg" align="center" weight={700} className={classes.title} lineClamp={2}>
                033-A Dining Room Chair
              </Text>
              <Text color="dimmed" size="sm" lineClamp={4} className={classes.desc}>
                wooden leg dining table set black grey 8 chairs white leather modern restaurant used
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Page;
