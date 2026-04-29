
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

interface SubItem {
  name: string;
  path: string;
  submenu?: SubItem[];
}

interface NavLink {
  name: string;
  path: string;
  submenu?: SubItem[];
}

const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  {
    name: 'Services',
    path: '/services',
    submenu: [
      { name: 'Attestation', path: '/services/attestation' },
      { name: 'Credit Transfer', path: '/services/credit-transfer' },
    ],
  },
  { name: 'Courses', path: '/courses' },
  {
    name: 'Universities',
    path: '/universities',
    submenu: [
      { name: 'All Universities', path: '/universities' },
      { name: 'Study Material', path: '/universities/study-material' },
      {
        name: 'Examination',
        path: '/universities/examination',
        submenu: [
          { name: 'Time Table', path: '/universities/examination/timetable' },
          { name: 'Results', path: '/results' },
        ],
      },
    ],
  },
  {
    name: 'Students',
    path: '/students',
    submenu: [
      { name: 'Syllabus', path: '/students/syllabus' },
    ],
  },
  {
    name: 'About',
    path: '/about',
    submenu: [
      { name: 'Latest News', path: '/news' },
      { name: 'Academic Blog', path: '/blogs' },
    ],
  },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);
  const [openMobileSubItem, setOpenMobileSubItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenMobileItem(null);
    setOpenMobileSubItem(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleMobileItem = (name: string) => {
    setOpenMobileItem(prev => (prev === name ? null : name));
    setOpenMobileSubItem(null);
  };

  const toggleMobileSubItem = (name: string) => {
    setOpenMobileSubItem(prev => (prev === name ? null : name));
  };

  const isActive = (link: NavLink) =>
    pathname === link.path ||
    (link.path !== '/' && pathname.startsWith(link.path));

  return (
    <>
      <div className={`${styles.navWrapper} ${scrolled ? styles.scrolled : ''}`}>
        <nav className={styles.navbar}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Go to homepage">
            <div className={styles.logoBadge}>
              <Image 
                src="/images/demo logo5.png"
                alt="Logo"
                width={350}
                height={110}
                priority
                className={styles.logoImage}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className={styles.navLinks} role="menubar">
            {/* Render Home */}
            {navLinks.filter(link => link.name === 'Home').map((link) => (
              <li key={link.name} className={styles.navItem} role="none">
                <Link
                  href={link.path}
                  className={`${styles.navLink} ${isActive(link) ? styles.activeLink : ''}`}
                  role="menuitem"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Added Course Finder in the center */}
            <li className={styles.navItem} role="none">
              <button
                className={styles.navLink}
                onClick={() => window.dispatchEvent(new CustomEvent('open-course-finder'))}
                role="menuitem"
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer', 
                  fontFamily: 'inherit',
                  color: '#ef233c',
                  fontWeight: '700'
                }}
              >
                Course Finder
              </button>
            </li>

            {/* Render About */}
            {navLinks.filter(link => link.name === 'About').map((link) => (
              <li key={link.name} className={styles.navItem} role="none">
                <Link
                  href={link.path}
                  className={`${styles.navLink} ${isActive(link) ? styles.activeLink : ''}`}
                  role="menuitem"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className={styles.actions}>
            <Link href="/login" className={styles.primaryAction}>
              Login
            </Link>

            {/* Hamburger */}
            <button
              className={styles.menuToggle}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
            <Image 
              src="/images/demo logo5.png"
              alt="Logo"
              width={250}
              height={80}
              className={styles.logoImage}
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <button
            className={styles.drawerClose}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className={styles.drawerNav}>
          {/* Render Home for Mobile */}
          {navLinks.filter(link => link.name === 'Home').map((link) => (
            <div key={link.name} className={styles.drawerItem}>
              <Link
                href={link.path}
                className={`${styles.drawerLink} ${isActive(link) ? styles.drawerLinkActive : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            </div>
          ))}

          {/* Render Course Finder for Mobile */}
          <div className={styles.drawerItem}>
            <button
              className={styles.drawerLink}
              style={{ color: '#ef233c', fontWeight: '700' }}
              onClick={() => {
                setMobileOpen(false);
                window.dispatchEvent(new CustomEvent('open-course-finder'));
              }}
            >
              Course Finder
            </button>
          </div>

          {/* Render About for Mobile */}
          {navLinks.filter(link => link.name === 'About').map((link) => (
            <div key={link.name} className={styles.drawerItem}>
              <Link
                href={link.path}
                className={`${styles.drawerLink} ${isActive(link) ? styles.drawerLinkActive : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Drawer Footer Actions */}
        <div className={styles.drawerActions}>
          <button
            className={styles.drawerActionSecondary}
            onClick={() => {
              setMobileOpen(false);
              window.dispatchEvent(new CustomEvent('open-course-finder'));
            }}
          >
            Course Finder
          </button>
          <Link href="/login" className={styles.drawerActionPrimary} onClick={() => setMobileOpen(false)}>
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
