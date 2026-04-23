'use client';
import React, { useState, useEffect } from 'react';
import styles from '@/app/admin/admin.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function NewProgram() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [universities, setUniversities] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    university: '',
    duration: '',
    type: '',
    category: '',
    level: '',
    eligibility: '',
    courseType: '',
    image: '',
    brochure: '',
    description: ''
  });

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch('/api/admin/universities');
        if (response.ok) {
          const data = await response.json();
          setUniversities(data);
          if (data.length > 0) {
            setFormData(prev => ({ ...prev, university: data[0]._id }));
          }
        }
      } catch (err) {
        console.error('Failed to load universities', err);
      }
    };
    fetchUniversities();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, [fieldName]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.university) {
      setError('Please select a university');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/admin/programs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create program');
      }

      router.push('/admin/programs');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/admin/programs" style={{ color: '#64748b' }}>← Back</Link>
          <h2 className={styles.tableTitle}>Add New Program</h2>
        </div>
      </div>

      {error && (
        <div style={{ padding: '1rem', background: '#fee2e2', color: '#b91c1c', borderRadius: '10px', marginBottom: '1.5rem', maxWidth: '800px' }}>
          {error}
        </div>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>Program Name</label>
            <input 
              name="name"
              type="text" 
              placeholder="e.g. Master of Business Administration (MBA)" 
              className={styles.input} 
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>University</label>
            <select
              name="university"
              className={styles.select}
              value={formData.university}
              onChange={handleChange}
              required
            >
              {universities.map(uni => (
                <option key={uni._id} value={uni._id}>{uni.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Description</label>
          <textarea 
            name="description"
            rows={4} 
            placeholder="Brief description of the program..." 
            className={styles.textarea}
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>Category</label>
            <select
              name="category"
              className={styles.select}
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Post Graduate">Post Graduate</option>
              <option value="Degree">Degree</option>
              <option value="+2">+2</option>
              <option value="SSLC">SSLC</option>
              <option value="Diploma">Diploma</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Duration</label>
            <input 
              name="duration"
              type="text" 
              placeholder="e.g. 2 Years" 
              className={styles.input}
              value={formData.duration}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>Level</label>
            <input 
              name="level"
              type="text" 
              placeholder="e.g. Management, Engineering, Secondary" 
              className={styles.input}
              value={formData.level}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Eligibility</label>
            <input 
              name="eligibility"
              type="text" 
              placeholder="e.g. Any Degree, 12th Science" 
              className={styles.input}
              value={formData.eligibility}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>Course Stream / Type</label>
            <select
              name="courseType"
              className={styles.select}
              value={formData.courseType}
              onChange={handleChange}
            >
              <option value="">Select Stream</option>
              <option value="Commerce">Commerce</option>
              <option value="Science">Science</option>
              <option value="Arts">Arts</option>
              <option value="IT">IT</option>
              <option value="Management">Management</option>
              <option value="Medical">Medical</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Type / Keyword</label>
            <input 
              name="type"
              type="text" 
              placeholder="e.g. Degree, Diploma, Certification" 
              className={styles.input}
              value={formData.type}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>Upload Program Image</label>
            <input 
              type="file" 
              accept="image/*"
              className={styles.input}
              onChange={(e) => handleFileUpload(e, 'image')}
            />
            {formData.image && <p style={{fontSize: '12px', color: 'green', marginTop: '5px'}}>Image attached successfully</p>}
          </div>
          <div className={styles.formGroup}>
            <label>Upload Brochure (PDF)</label>
            <input 
              type="file" 
              accept=".pdf,application/pdf"
              className={styles.input}
              onChange={(e) => handleFileUpload(e, 'brochure')}
            />
            {formData.brochure && <p style={{fontSize: '12px', color: 'green', marginTop: '5px'}}>Brochure attached successfully</p>}
          </div>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Loader2 className="animate-spin" size={20} />
              <span>Saving...</span>
            </div>
          ) : 'Create Program Profile'}
        </button>
      </form>
    </div>
  );
}
