const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/page.module.css');
let content = fs.readFileSync(filePath, 'utf8');

const corruptIndex = content.indexOf('\\ n / *');
if (corruptIndex !== -1) {
    content = content.substring(0, corruptIndex);
}

const newCss = `
/* ===== REDESIGNED PREMIUM SECTIONS ===== */
.premiumUniGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}
.premiumUniCard {
  display: flex;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,32,96,0.05);
  transition: all 0.4s ease;
  border: 1px solid rgba(0,0,0,0.03);
}
.premiumUniCard:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,32,96,0.12);
  border-color: rgba(239,35,60,0.2);
}
.premiumUniImg {
  width: 45%;
  position: relative;
  min-height: 220px;
}
.premiumUniLogo {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: white;
  padding: 5px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  z-index: 10;
}
.premiumUniContent {
  width: 55%;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.premiumUniContent h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #002060;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}
.premiumUniBtn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  color: #ef233c;
  text-decoration: none;
  transition: gap 0.2s;
}
.premiumUniBtn:hover {
  gap: 0.8rem;
}

.premiumCourseSection {
  padding: 8rem 5%;
  background: #00122e;
  color: white;
}
.premiumCourseHeader {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
}
.premiumCourseHeader h2 {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
}
.premiumCourseHeader p {
  color: #94a3b8;
  font-size: 1.1rem;
}
.premiumCourseGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.premiumCourseCard {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
}
.premiumCourseCard:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(239,35,60,0.5);
  transform: translateY(-10px);
}
.premiumCourseImgWrapper {
  position: relative;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}
.premiumCourseOverlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,18,46,0.8), transparent);
}
.premiumCourseTag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ef233c;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 800;
}
.premiumCourseBody h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.premiumCourseMeta {
  display: flex;
  gap: 0.5rem;
  color: #94a3b8;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
}
.premiumCourseBtn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: #00122e;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background 0.2s;
}
.premiumCourseBtn:hover {
  background: #ef233c;
  color: white;
}

.premiumBlogSection {
  padding: 8rem 5%;
  background: #ffffff;
}
.premiumBlogGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}
.premiumBlogCard {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 380px;
  text-decoration: none;
}
.premiumBlogCard:first-child {
  grid-column: span 2;
}
.premiumBlogCard img {
  transition: transform 0.6s ease;
}
.premiumBlogCard:hover img {
  transform: scale(1.08);
}
.premiumBlogOverlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 60%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  color: white;
}
.premiumBlogDate {
  font-size: 0.85rem;
  font-weight: 700;
  color: #ef233c;
  margin-bottom: 0.5rem;
}
.premiumBlogOverlay h3 {
  font-size: 1.3rem;
  font-weight: 800;
  line-height: 1.3;
  margin: 0;
}
.premiumBlogCard:first-child .premiumBlogOverlay h3 {
  font-size: 1.8rem;
}

.premiumNewsSection {
  padding: 6rem 5% 10rem;
  background: #f8fafc;
}
.premiumNewsHeader {
  text-align: center;
  margin-bottom: 4rem;
}
.premiumNewsHeader h2 {
  font-size: 2.5rem;
  font-weight: 900;
  color: #002060;
}
.premiumNewsGrid {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
}
.premiumNewsItem {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
  text-decoration: none;
}
.premiumNewsItem:hover {
  border-left-color: #ef233c;
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
  transform: translateX(10px);
}
.premiumNewsDateBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  border-right: 1px solid #e2e8f0;
  padding-right: 2rem;
}
.newsDay {
  font-size: 2rem;
  font-weight: 900;
  color: #ef233c;
  line-height: 1;
}
.newsMonth {
  font-size: 0.9rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
}
.premiumNewsContent {
  flex: 1;
}
.premiumNewsCategory {
  font-size: 0.7rem;
  font-weight: 800;
  color: #1e40af;
  background: #eff6ff;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: inline-block;
}
.premiumNewsContent h3 {
  font-size: 1.2rem;
  font-weight: 800;
  color: #002060;
  margin: 0 0 0.5rem 0;
}
.premiumNewsContent p {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.premiumNewsIcon {
  color: #cbd5e1;
  transition: color 0.3s ease;
}
.premiumNewsItem:hover .premiumNewsIcon {
  color: #ef233c;
}

@media (max-width: 1024px) {
  .premiumUniGrid { grid-template-columns: 1fr; }
  .premiumCourseGrid { grid-template-columns: repeat(2, 1fr); }
  .premiumBlogGrid { grid-template-columns: repeat(2, 1fr); }
  .premiumBlogCard:first-child { grid-column: span 1; }
}
@media (max-width: 768px) {
  .premiumUniCard { flex-direction: column; }
  .premiumUniImg { width: 100%; height: 200px; }
  .premiumUniContent { width: 100%; }
  .premiumCourseGrid { grid-template-columns: 1fr; }
  .premiumBlogGrid { grid-template-columns: 1fr; }
  .premiumNewsItem { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .premiumNewsDateBox { border-right: none; border-bottom: 1px solid #e2e8f0; padding-right: 0; padding-bottom: 1rem; width: 100%; flex-direction: row; gap: 0.5rem; justify-content: flex-start; }
}
`;

fs.writeFileSync(filePath, content + '\\n' + newCss, 'utf8');
console.log('CSS Fixed');
