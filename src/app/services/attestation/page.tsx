'use client';

import React, { useState, useMemo } from 'react';
import styles from './attestation.module.css';
import Link from 'next/link';
import { Search, ArrowRight, ShieldCheck, Globe, Award } from 'lucide-react';

export default function AttestationPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const steps = [
    { title: "Document Submission", description: "Securely submit original documents and valid identification at our authorized TIMS centers." },
    { title: "Technical Verification", description: "Our authentication experts conduct rigorous primary validation of all submitted credentials." },
    { title: "Ministry Legalization", description: "Formal endorsement through State HRD and the Ministry of External Affairs (MEA) hierarchy." },
    { title: "Embassy Certification", description: "Final jurisdictional legalization from the destination country's Embassy or Consulate." }
  ];

  const allCerts = [
    "10th Attestation", "AMIE Attestation", "Apprentice ship Attestation",
    "B.Com Attestation", "B.Ed Attestation", "B.Sc Nursing Attestation",
    "B.Tech Attestation", "BA Attestation", "BBA Attestation",
    "BCA Attestation", "BDS Attestation", "BE Attestation",
    "Birth Attestation", "Bonafied Attestation", "B.Sc Attestation",
    "CA Attestation", "CBSE Attestation", "Computer Diploma Attestation",
    "Course and Conduct Attestation", "Course Completion Attestation",
    "Death Attestation", "Divorce Attestation", "Engineering Diploma Attestation",
    "Foreign Attestation", "Heirship Attestation", "High School Attestation",
    "House Surgeon Attestation", "HSE Attestation", "Intermediate Attestation",
    "Internship Attestation", "ITI Attestation", "M.Tech Attestation",
    "M.Com Attestation", "M.Ed Attestation", "M.Sc Attestation",
    "M.Sc Nursing Attestation", "MA Attestation", "Marriage Attestation",
    "MBA Attestation", "MBBS Attestation", "MCA Attestation",
    "ME Attestation", "Medical Attestation", "Metric Attestation",
    "Migration Attestation", "MS Attestation", "NTC Attestation",
    "Nursing Diploma Attestation", "PCC Attestation", "PDC Attestation",
    "Plus Two Attestation", "Power of Attorney Attestation", "Private Diploma Attestation",
    "PUC Attestation", "SSC Attestation", "SSLC Attestation",
    "Technicians Attestation", "Training Attestation", "Transfer Attestation",
    "Translated Attestation", "TTC Attestation", "VHSE Attestation"
  ].sort();

  const filteredCerts = useMemo(() => {
    return allCerts.filter(cert => 
      cert.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <main className={styles.container}>
      <div className={styles.pageGlow} />

      {/* ===== UpGrad Style Hero Section ===== */}
      <section className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <nav className={styles.heroBreadcrumb}>
              <Link href="/">Home</Link> <span>/</span> <span>Attestation</span>
            </nav>
            <h1 className={styles.heroTitle}>
              Official <span className={styles.heroTitleDark}>Document Attestation</span> <br />
              & Global Legalization.
            </h1>
            <p className={styles.heroDesc}>
              Authorized Embassy Legalization & Authentication services for Global Education, Employment, and Migration. Trusted by 15,000+ professionals worldwide.
            </p>

            <div className={styles.heroSearch}>
              <input 
                type="text" 
                placeholder="What document do you need to attest?" 
                className={styles.heroSearchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className={styles.heroSearchBtn}>
                <Search size={20} />
              </button>
            </div>

            <div className={styles.goalSection}>
              <p className={styles.goalLabel}>Or select common services 🎯</p>
              <div className={styles.goalChips}>
                {['Degree Attestation', 'Birth Certificate', 'Marriage Certificate', 'HRD Attestation', 'MEA Legalization', 'Embassy Services'].map((g, i) => (
                  <button 
                    key={i} 
                    className={styles.goalChip}
                    onClick={() => setSearchTerm(g.split(' ')[0])}
                    style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroImageCard}>
              <img 
                src="/images/hero-attestation.png" 
                alt="Verification Excellence" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div className={styles.heroImageOverlay}>
                <p className={styles.overlayWhite}>Authorized By</p>
                <p className={styles.overlayHighlight}>MEA & Global Embassies</p>
                <Link href="/contact" className={styles.overlayLink}>
                  Consult an expert today <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== Services Showcase ===== */}
      <section className={styles.showcaseSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.preTitle}>Our Expertise</span>
          <h2 className={styles.showcaseTitle}>Comprehensive Legalization Services</h2>
        </div>
        
        <div className={styles.showcaseGrid}>
          <div className={styles.showcaseCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconBox}>🎓</div>
              <div className={styles.cardNumber}>01</div>
            </div>
            <h3 className={styles.cardTitle}>Educational Attestation</h3>
            <p className={styles.cardText}>Legalization of Degree, Diploma, and School certificates for foreign education and employment.</p>
          </div>
          
          <div className={styles.showcaseCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconBox}>👤</div>
              <div className={styles.cardNumber}>02</div>
            </div>
            <h3 className={styles.cardTitle}>Personal Document Attestation</h3>
            <p className={styles.cardText}>Authentication of Birth, Marriage, and PCC certificates for family visas and migration.</p>
          </div>
          
          <div className={styles.showcaseCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconBox}>🏢</div>
              <div className={styles.cardNumber}>03</div>
            </div>
            <h3 className={styles.cardTitle}>Commercial Attestation</h3>
            <p className={styles.cardText}>Official verification of Power of Attorney and Business documents for global trade.</p>
          </div>
        </div>
      </section>

      {/* ===== Professional Process Timeline ===== */}
      <section className={styles.timelineSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.preTitle}>Workflow</span>
          <h2 className={styles.showcaseTitle}>Our Authentication Process</h2>
        </div>
        
        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine} />
          {steps.map((step, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <span className={styles.stepNum}>STEP {i + 1}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Categorized Directory ===== */}
      <section className={styles.directorySection}>
        <div className={styles.directoryContainer}>
          <div className={styles.directoryHeader}>
            <div>
              <h2 className={styles.directoryTitle}>Service Directory</h2>
              <p style={{ color: '#64748b', marginTop: '1rem', fontWeight: 500 }}>Search for your specific document type</p>
            </div>
            <div className={styles.searchBox}>
              <span>🔍</span>
              <input 
                type="text" 
                placeholder="Search certificate type..." 
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.directoryGrid}>
            {filteredCerts.map((cert, i) => (
              <div key={i} className={styles.directoryItem}>
                <div className={styles.itemDot} />
                {cert}
              </div>
            ))}
          </div>
          
          {filteredCerts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#94a3b8', fontWeight: 600 }}>
              No matching certificates found. Please contact us for custom requirements.
            </div>
          )}
        </div>
      </section>

      {/* ===== Premium Final CTA ===== */}
      <section className={styles.finalCta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaHeadline}>Ready to Authenticate Your Documents?</h2>
          <p className={styles.ctaSub}>Join thousands of successful candidates who trusted TIMS for their global journey. Get a free consultation today.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Get Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
