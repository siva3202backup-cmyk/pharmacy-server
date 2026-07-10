INSERT INTO users(name,email,password,role) VALUES ('Admin','admin@pharmacy.test','$2a$10$2bclT6PEsQpIlhR3tzhhH.ZmefFnu72n6Fshd4fBPlyO4wa9fjB4S','ADMIN');
INSERT INTO categories(name,slug,image_url) VALUES ('Supplements','supplements',''),('Medicines','medicines',''),('Herbs','herbs',''),('Baby','baby',''),('Beauty','beauty',''),('Health Topics','health-topics',''),('Personal Care','personal-care',''),('Protein','protein','');
INSERT INTO products(name,slug,description,price,sale_price,stock,image_url,category_id,is_featured)
SELECT
  (ARRAY['Pyridoxine Vitamin B6','Vitamin C Sugarless Tab','Protein Chocolate Flake','Advil Minis Liquid Cap','Promethazine','Otrivin Breathe Clean','Gastro Soothe Tab','Herbal Care Capsules','Baby Gentle Lotion','Beauty Skin Serum','Antiseptic Ointment','Diabetes Nutrition Vanilla','Honey Lemon Lozenges','Liver Detox Support','Omega Fish Oil'])[1 + (g % 15)] || ' ' || g,
  lower(regexp_replace((ARRAY['pyridoxine-vitamin-b6','vitamin-c-sugarless-tab','protein-chocolate-flake','advil-minis-liquid-cap','promethazine','otrivin-breathe-clean','gastro-soothe-tab','herbal-care-capsules','baby-gentle-lotion','beauty-skin-serum','antiseptic-ointment','diabetes-nutrition-vanilla','honey-lemon-lozenges','liver-detox-support','omega-fish-oil'])[1 + (g % 15)] || '-' || g, '[^a-zA-Z0-9]+','-','g')),
  'Quality pharmacy product for wellness, daily health, and family care. Product code ' || g,
  round((5 + random()*95)::numeric,2),
  CASE WHEN g % 4 = 0 THEN round((3 + random()*50)::numeric,2) ELSE NULL END,
  20 + (g % 180),
  '',
  1 + (g % 8),
  g <= 24
FROM generate_series(1,200) g;
