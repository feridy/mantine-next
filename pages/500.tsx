import { Container, createStyles, Title, Text, Group, Button } from '@mantine/core';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { NextPage } from 'next';

const useStyles = createStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    paddingTop: 80,
    paddingBottom: 80,
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors[theme.primaryColor][3],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,
    color: theme.white,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors[theme.primaryColor][1],
  },
}));

const ServerError: NextPage = () => {
  const { classes } = useStyles();

  const router = useRouter();

  // reload
  const handleReload = useCallback(() => {
    router.reload();
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Something bad just happened..</Title>
        <Text size="lg" align="center" className={classes.description}>
          Our servers could not handle your request. Don&apos;t worry, our development team was
          already notified. Try refreshing the page.
        </Text>

        <Group position="center">
          <Button variant="white" size="md" onClick={handleReload}>
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  );
};

export default ServerError;
