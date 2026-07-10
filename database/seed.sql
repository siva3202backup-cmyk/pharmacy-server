INSERT INTO users(name,email,password,role) VALUES ('Admin','admin@pharmacy.test','$2a$10$2bclT6PEsQpIlhR3tzhhH.ZmefFnu72n6Fshd4fBPlyO4wa9fjB4S','ADMIN');
INSERT INTO categories(name,slug,image_url) VALUES ('Supplements','supplements',''),('Medicines','medicines',''),('Herbs','herbs',''),('Baby','baby',''),('Beauty','beauty',''),('Health Topics','health-topics','');
INSERT INTO products(name,slug,description,price,sale_price,stock,image_url,category_id,is_featured) VALUES
('Pyridoxine Vitamin B6','pyridoxine-vitamin-b6','Vitamin B6 supplement for daily wellness.',40.00,15.50,100,'',1,true),
('Protein Chocolate Flake','protein-chocolate-flake','Sports nutrition protein support.',54.95,null,40,'',1,true),
('Advil Minis Liquid Cap X 90','advil-minis-liquid-cap-x-90','Pain relief medicine capsules.',22.00,null,75,'',2,true),
('Promethazine','promethazine','Allergy and motion sickness care.',48.00,44.00,35,'',2,true),
('Otrivin Breathe Clean Natural','otrivin-breathe-clean-natural','Nasal breathing support.',12.95,null,140,'',3,true),
('Own Vitamin B1 250mg Tab X','own-vitamin-b1-250mg-tab-x','Vitamin B1 wellness tablets.',31.95,22.00,90,'',1,true),
('Thar Antiseptic Ointment','thar-antiseptic-ointment','First aid antiseptic ointment.',9.95,null,55,'',2,false),
('Vitamin C 500mg Sugarless Tab','vitamin-c-500mg-sugarless-tab','Sugarless Vitamin C supplement.',35.00,16.00,120,'',1,true),
('Gastro Soothe Tab 10mg X 20','gastro-soothe-tab-10mg-x-20','Digestive health tablets.',23.95,null,60,'',2,false),
('FatBlaster Keto-Fit Whey','fatblaster-keto-fit-whey','Keto friendly whey protein.',34.50,null,30,'',1,false),
('Henry Blooms Herb-a-lax','henry-blooms-herb-a-lax','Natural herbal digestive support.',35.95,24.18,25,'',3,false),
('Soothers Lozenges Honey Lemon','soothers-lozenges-honey-lemon','Honey and lemon soothing lozenges.',1.95,null,180,'',2,false);
