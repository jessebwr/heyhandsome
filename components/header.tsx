import { Box, Burger, Group, Header, Menu } from '@mantine/core';
import {
  IconAddressBook,
  IconCornerDownLeftDouble,
  IconMusic,
  IconUsers,
  IconLogin,
} from '@tabler/icons';
import Link from 'next/link';
import { useState } from 'react';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import { SideLogo } from './Icons/logos';
import { InstagramIcon } from './Icons/socialMediaIcons';

const AppMenu = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Menu
      shadow="md"
      width={200}
      opened={opened}
      onClose={() => setOpened(false)}
      closeOnClickOutside
      closeOnItemClick
    >
      <Menu.Target>
        <Burger opened={opened} onClick={() => setOpened((currOpen) => !currOpen)} />
      </Menu.Target>

      <Menu.Dropdown
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.pink[1],
          color: theme.colorScheme === 'dark' ? theme.colors.pink[4] : theme.colors.dark[6],
        })}
      >
        <Link href="/who-are-we" passHref>
          <Menu.Item icon={<IconUsers size={14} />}>Who are we?</Menu.Item>
        </Link>
        <Link href="/upcoming-shows" passHref>
          <Menu.Item icon={<IconMusic size={14} />}>Upcoming Shows</Menu.Item>
        </Link>
        <Link href="/previous-shows" passHref>
          <Menu.Item icon={<IconCornerDownLeftDouble size={14} />}>Previous Shows</Menu.Item>
        </Link>
        <Link href="/contact-us" passHref>
          <Menu.Item icon={<IconAddressBook size={14} />}>Contact Us!</Menu.Item>
        </Link>
        <Link href="https://musical-improv-nyc.fly.dev/admin" passHref>
          <Menu.Item icon={<IconLogin size={14} />}>Admin Login</Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  );
};

export const AppHeader = () => (
  <Header
    sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.pink[2],
      color: theme.colorScheme === 'dark' ? theme.colors.pink[2] : theme.colors.dark[7],
    })}
    className="moon-header"
    height={65}
    p="xs"
  >
    <Group position="apart" sx={{ height: '100%' }}>
      <AppMenu />
      <Link href="/" passHref>
        <SideLogo />
      </Link>
      <Group>
        <Link href="https://www.instagram.com" passHref>
          <Box sx={{ cursor: 'pointer' }}>
            <InstagramIcon />
          </Box>
        </Link>
        <ColorSchemeToggle />
      </Group>
    </Group>
  </Header>
);
