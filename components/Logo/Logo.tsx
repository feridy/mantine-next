import { createStyles, Group } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '../../public/logo.png';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    padding: theme.spacing.xs,
    height: 56,
  },

  logo: {
    position: 'relative',
    width: 112.5,
    height: '100%',
  },
}));

export const Logo: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Group>
      <Link href="/">
        <a className={classes.root}>
          <div className={classes.logo}>
            <Image src={LogoImage} alt="" layout="fill" placeholder="blur" />
          </div>
        </a>
      </Link>
    </Group>
  );
};
