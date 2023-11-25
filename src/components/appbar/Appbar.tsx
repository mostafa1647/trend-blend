import { useState } from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { NavLink } from 'react-router-dom';

import { paths } from '../../router/paths.ts';

import { appbarData } from './appbar-data.ts';
import { UserPreferencesModal } from './UserPreferencesModal.tsx';

const activeMenuClasses = 'font-medium text-primary';

export const Appbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered={true}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <NavLink to={paths.home.href}>
            <p className="font-bold text-foreground">TrendBlend</p>
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {appbarData.map((item, index) => (
          <NavbarItem key={`${item.title}-${index}`}>
            <NavLink
              to={item.href}
              className={({ isActive }) => (isActive ? activeMenuClasses : '')}
            >
              {item.title}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <UserPreferencesModal />
      </NavbarContent>

      <NavbarMenu>
        {appbarData.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <NavLink
              className={({ isActive }) => (isActive ? activeMenuClasses : '')}
              to={item.href}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              {item.title}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
