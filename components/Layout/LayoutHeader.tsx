import { createStyles, Header, Container, Menu, Button, Group, Burger } from '@mantine/core';
import { ChevronDownIcon } from '@modulz/radix-icons';
import Link from 'next/link';
import { useState } from 'react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { Logo } from '../Logo/Logo';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    height: 56,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkItem: {
    padding: 0,
  },

  linkLabel: {
    marginRight: 5,
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  colorScheme: {
    position: 'absolute',
    right: theme.spacing.sm,
    top: '50%',
    transform: 'translateY(-50%)',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

type HeaderNavListProps = {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
};

const MockData = {
  links: [
    {
      link: '/about',
      label: 'Features',
    },
    {
      link: '#1',
      label: 'Learn',
      links: [
        {
          link: '/docs',
          label: 'Documentation',
        },
        {
          link: '/resources',
          label: 'Resources',
        },
        {
          link: '/community',
          label: 'Community',
        },
        {
          link: '/blog',
          label: 'Blog',
        },
      ],
    },
    {
      link: '/about',
      label: 'About',
    },
    {
      link: '/pricing',
      label: 'Pricing',
    },
    {
      link: '#2',
      label: 'Support',
      links: [
        {
          link: '/faq',
          label: 'FAQ',
        },
        {
          link: '/demo',
          label: 'Book a demo',
        },
        {
          link: '/forums',
          label: 'Forums',
        },
      ],
    },
  ],
};

const HeaderNavList: React.FC<HeaderNavListProps> = ({ links }) => (
  <>
    {links.map((link) => {
      const MenuItem = link.links?.map((item) => (
        <Link href={item.link} key={item.label}>
          <Menu.Item
            key={item.label}
            component="a"
            sx={(theme) => ({
              '&:hover': {
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.35)
                    : theme.colors[theme.primaryColor][0],
              },
            })}
          >
            {item.label}
          </Menu.Item>
        </Link>
      ));

      if (MenuItem?.length) {
        return (
          <Menu
            key={link.label}
            trigger="hover"
            delay={0}
            placement="center"
            gutter={-2}
            control={
              <Group>
                <Link href={link.link}>
                  <Button
                    component="a"
                    variant="subtle"
                    rightIcon={<ChevronDownIcon width={14} height={14} />}
                  >
                    {link.label}
                  </Button>
                </Link>
              </Group>
            }
          >
            {MenuItem}
          </Menu>
        );
      }

      return (
        <Link href={link.link} key={link.label}>
          <Button component="a" variant="subtle">
            {link.label}
          </Button>
        </Link>
      );
    })}
  </>
);

export const LayoutHeader: React.FC = () => {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useState(false);

  return (
    <Header height={56} fixed>
      <Container>
        <div className={classes.inner}>
          <Logo />
          <Group spacing={5} className={classes.links}>
            <HeaderNavList links={MockData.links} />
          </Group>
          <Burger
            className={classes.burger}
            opened={opened}
            size="sm"
            onClick={() => toggleOpened(!opened)}
          />
        </div>
      </Container>
      <div className={classes.colorScheme}>
        <ColorSchemeToggle />
      </div>
    </Header>
  );
};
