
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      submenu: [
        { name: 'Latest News', path: '/about/news' },
        { name: 'Academic Blog', path: '/about/blog' },
      ]
    },
    { 
      name: 'Services', 
      path: '/services',
      submenu: [
        { name: 'Attestation', path: '/services/attestation' },
        { name: 'Credit Transfer', path: '/services/credit-transfer' },
      ]
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
            { name: 'Results', path: '/universities/examination/results' },
          ]
        },
      ]
    },
    { 
      name: 'Students', 
      path: '/students',
      submenu: [
        { name: 'Syllabus', path: '/students/syllabus' },
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className={`${styles.navWrapper} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          TIMS<span>.</span>
        </Link>

        {/* Desktop Nav */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <div key={link.name} className={styles.navItemWrapper}>
              {link.name === 'Services' || link.name === 'Universities' || link.name === 'Students' ? (
                <div 
                  className={`${styles.navLink} ${pathname.startsWith(link.path) ? styles.activeLink : ''}`}
                  style={{ cursor: 'default' }}
                >
                  {link.name}
                  <ChevronDown size={14} className={styles.chevron} />
                </div>
              ) : (
                <Link 
                  href={link.path} 
                  className={`${styles.navLink} ${pathname === link.path || (link.submenu && pathname.startsWith(link.path)) ? styles.activeLink : ''}`}
                >
                  {link.name}
                  {link.submenu && <ChevronDown size={14} className={styles.chevron} />}
                </Link>
              )}
              
              {link.submenu && (
                <div className={styles.dropdown}>
                  {link.submenu.map((sub) => (
                    <div key={sub.path} className={styles.dropdownItemWrapper}>
                      {sub.submenu ? (
                        <div className={styles.dropdownItem} style={{ cursor: 'default' }}>
                          {sub.name}
                          <ChevronDown size={13} style={{ marginLeft: 'auto' }} />
                        </div>
                      ) : (
                        <Link href={sub.path} className={styles.dropdownItem}>
                          {sub.name}
                          <ArrowRight size={14} className={styles.subChevron} />
                        </Link>
                      )}
                      {sub.submenu && (
                        <div className={styles.subDropdown}>
                          {sub.submenu.map((child) => (
                            <Link key={child.path} href={child.path} className={styles.dropdownItem}>
                              {child.name}
                              <ArrowRight size={14} className={styles.subChevron} />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <button 
            className={styles.secondaryAction}
            onClick={() => window.dispatchEvent(new CustomEvent('open-course-finder'))}
          >
            Course Finder
          </button>
          <Link href="/login" className={styles.primaryAction}>
            Login
          </Link>
          <button 
            className={styles.menuToggle} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
        {navLinks.map((link) => (
          <div key={link.name} className={styles.mobileItem}>
            {link.name === 'Services' || link.name === 'Universities' || link.name === 'Students' ? (
              <div className={styles.mobileLink}>
                {link.name}
              </div>
            ) : (
              <Link 
                href={link.path} 
                className={styles.mobileLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )}
            {link.submenu && (
              <div className={styles.mobileSub}>
                {link.submenu.map((sub) => (
                  <div key={sub.path} className={styles.mobileNestedWrapper}>
                    {sub.submenu ? (
                      <div className={styles.mobileSubLink} style={{ cursor: 'default', opacity: 0.8 }}>
                        {sub.name}
                      </div>
                    ) : (
                      <Link 
                        href={sub.path} 
                        className={styles.mobileSubLink}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    )}
                    {sub.submenu && (
                      <div className={styles.mobileNestedSub}>
                        {sub.submenu.map((child) => (
                          <Link 
                            key={child.path} 
                            href={child.path} 
                            className={styles.mobileSubLink}
                            style={{ paddingLeft: '2.5rem', fontSize: '0.9rem' }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
