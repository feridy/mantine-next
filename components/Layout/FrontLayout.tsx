import { createStyles, Footer } from '@mantine/core';
import { LayoutHeader } from './LayoutHeader';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    minHeight: '100vh',
    maxWidth: '100vw',
    userSelect: 'none',
    backgroundColor: theme.colorScheme === 'dark' ? 'inherit' : theme.colors.gray[2],
  },
  main: {
    width: '100%',
    marginTop: 56,
    flex: '1 1 auto',
  },
}));

type FrontLayoutProps = {
  children?: React.ReactNode;
};

export const FrontLayout: React.FC<FrontLayoutProps> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <LayoutHeader />
      <div className={classes.main}>{children}</div>
      <Footer height={60}>footer</Footer>
    </div>
  );
};
