import Image from 'next/image';
import Link from 'next/link';
import { createStyles, Card, Group, Text } from '@mantine/core';

type CardItemProps = {
  title: string;
  desc: string;
  id: number;
};

const useStyles = createStyles((theme) => ({
  card: {
    cursor: 'pointer',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
  },
  section: {
    position: 'relative',
    overflow: 'hidden',
    height: 160,
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.683,
  },
}));

export const CardItem: React.FC<CardItemProps> = ({ title, desc, id }) => {
  const { classes } = useStyles();

  return (
    <Link href={`/product/${id}`}>
      <Card
        component="a"
        withBorder
        p="xl"
        radius="lg"
        className={classes.card}
        shadow="sm"
        unselectable="off"
      >
        <Card.Section className={classes.section}>
          <Image
            src="/b9dab99c1c064c8da7f31b1b3b68838f.webp"
            alt=""
            objectFit="cover"
            layout="fill"
            blurDataURL="/logo.png"
            placeholder="blur"
          />
        </Card.Section>
        <Group direction="column" mt="sm" spacing="xs">
          <Text size="lg" weight={700} className={classes.title} lineClamp={2}>
            {title}
          </Text>
          <Text color="dimmed" size="sm" lineClamp={4} style={{ height: 87 }}>
            {desc}
          </Text>
        </Group>
      </Card>
    </Link>
  );
};
