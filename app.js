// ===== TRANSLATIONS (без назв товарів — вони в самих продуктах) =====
const translations = {
    uk: {
        nav_catalog: 'Каталог', nav_about: 'Про нас', nav_reviews: 'Відгуки', nav_contacts: 'Контакти',
        hero_badge: '✦ Розвивай через гру!',
        hero_title: 'Іграшки, що <span class="accent">надихають</span><br>маленьких дослідників',
        hero_sub: 'Якісні розвивальні набори для дітей від 1 до 8 років. Навчання через творчість та гру.',
        hero_btn1: 'Переглянути каталог', hero_btn2: 'Дізнатись більше →',
        trust_rating: 'рейтинг', trust_families: 'щасливих сімей', trust_delivery: 'Доставка по Україні',
        feat1_title: 'Безпечні матеріали', feat1_sub: 'Сертифіковані та екологічні',
        feat2_title: "З любов'ю", feat2_sub: 'Розроблено педагогами',
        feat3_title: 'Швидка доставка', feat3_sub: 'По всій Україні',
        feat4_title: 'Повернення 14 днів', feat4_sub: 'Без зайвих питань',
        stat1_label: 'задоволених сімей', stat2_label: 'унікальних наборів',
        stat3_label: 'позитивних відгуків', stat4_label: 'на ринку України', stat4_years: 'роки',
        products_title: 'Наші набори', products_sub: 'Кожен набір ретельно розроблений для розвитку різних навичок',
        filter_all: 'Всі набори', filter_1_3: '1–3 роки', filter_3_6: '3–6 років', filter_6_8: '6–8 років',
        age_1_3: '1–3 роки', age_3_6: '3–6 років', age_6_8: '6–8 років',
        reviews_suffix: 'відгуків', add_to_cart: 'Додати в кошик',
        reviews_title: 'Що кажуть батьки', reviews_sub: 'Реальні відгуки від наших покупців',
        review1_text: '"Сортер купили для доньки 2 роки. Вона в захваті! Якість чудова, матеріали приємні на дотик. Рекомендую всім батькам!"',
        review2_text: '"Дерев\'яний конструктор — це просто бомба! Syn грає щодня вже 3 місяці. Відмінна якість і пахне справжнім деревом."',
        review3_text: '"Доставка прийшла наступного дня! Упаковка красива, набір для малювання виявився навіть кращим, ніж очікувала."',
        review1_date: 'Київ · 2 тижні тому', review2_date: 'Львів · 1 місяць тому', review3_date: 'Одеса · 3 тижні тому',
        newsletter_title: 'Отримуй знижки першим 🎁', newsletter_sub: 'Підпишись на розсилку і отримай -10% на перше замовлення',
        newsletter_placeholder: 'Твоя електронна пошта', newsletter_btn: 'Підписатись',
        footer_brand: 'Розвивальні іграшки для дітей від 1 до 8 років',
        footer_col1_title: 'Магазин', footer_col2_title: 'Інформація', footer_col3_title: 'Контакти',
        footer_link_catalog: 'Каталог', footer_link_new: 'Нові надходження', footer_link_sales: 'Знижки та акції',
        footer_link_about: 'Про нас', footer_link_delivery: 'Доставка і оплата', footer_link_returns: 'Повернення',
        footer_link_telegram: 'Telegram-канал',
        footer_copyright: '© 2026 Tana Toys — Розвивальні іграшки для дітей',
        footer_privacy: 'Політика конфіденційності', footer_terms: 'Умови використання',
        cart_title: 'Кошик', cart_empty_title: 'Кошик порожній', cart_empty_sub: 'Додай товари, щоб почати покупки',
        cart_total_label: 'Разом:', cart_checkout: 'Оформити замовлення',
        toast_added: 'додано в кошик', newsletter_success: 'Дякуємо! Перевір пошту — знижка вже там',
        about_title: "Створено з любов'ю до дітей та повагою до науки",
        about_role: 'Дефектолог · Психолог · Засновниця',
        about_lead: 'Ви коли-небудь бачили, як сяють очі дитини, коли у неї вперше виходить скласти складний пазл чи розгадати логічну загадку? Я спостерігаю це щодня.',
        about_body: 'Я — Ольга, дефектолог, психолог і засновниця майстерні дидактичних ігор. Моя мета — перетворити навчання на пригоду, де немає місця нудьзі. У свої розробки я вкладаю не лише знання з психології, а й частинку своєї душі.',
        about_quote: '«Мої ігри — це міст між складною програмою навчання та природною цікавістю дитини».',
        about_val1: '<strong>Безпека</strong> — тільки сертифікований еко-пластик.',
        about_val2: '<strong>Розвиток</strong> — стимулюємо моторику, логіку та мовлення одночасно.',
        about_val3: '<strong>Довговічність</strong> — наші ігри не бояться падінь чи активних дитячих рук.',
        about_cta: 'Приєднуйтесь до нашої спільноти свідомих батьків. Давайте грати з користю!',
        eco_badge: '🌿 Екологічно чисто', eco_title: 'Матеріали, яким<br>можна довіряти',
        eco_lead: 'Наші іграшки виготовлені з біорозкладних матеріалів на основі зерна — без шкідливих речовин, без відходів, без ризику для вашої дитини.',
        eco_p1_title: 'Натуральна сировина', eco_p1_sub: 'Кукурудзяний крохмаль та молочна кислота (PLA)',
        eco_p2_title: 'Біорозкладний матеріал', eco_p2_sub: 'Повністю розкладається в природі без токсинів',
        eco_p3_title: 'Безпека підтверджена', eco_p3_sub: 'Жодних важких металів, барвників та ароматизаторів',
        rev1_text: '"Замовила логічний сортер — вражена якістю! Пластик PLA дуже приємний на дотик, без запаху, краї акуратно відшліфовані. Донька 2,5 роки грає щодня і вже навчилась складати всі фігури."',
        rev2_text: '"Як педагог рекомендую ці ігри своїм батькам. Матеріал екологічний, деталі чіткі й не ламаються. Видно, що зроблено з головою — кожна гра справді навчає, а не просто розважає."',
        rev3_text: '"Купили набір для сина 4 роки — не могли відтягнути від столу! Пластик міцний, впав кілька разів — нічого не зламалось. Замовили ще один набір для доньки."',
        rev4_text: '"Зверніть увагу на якість друку — деталі рівні, без задирок. Мій син одразу помітив що це «не з магазину» і запитав як це зроблено 😄 Тепер хоче сам навчитись на 3D-принтері!"',
        rev5_text: '"Шукала розвивальні ігри без токсичних матеріалів — знайшла! PLA пластик безпечний, перевірила склад. Дочка-алергік грає без жодних реакцій. Дуже дякую!"',
        rev6_text: '"Подарували на день народження племіннику 5 років. Він і батьки в захваті. Гра розвиває логіку і дрібну моторику одночасно. Якість на рівні — нічого не злипається, деталі підходять ідеально."',
        rev1_date: 'Таллін · 2 тижні тому', rev2_date: 'Нарва · 1 місяць тому', rev3_date: 'Харків · 3 тижні тому',
        rev4_date: 'Рига · 2 місяці тому', rev5_date: 'Вільнюс · 1 місяць тому', rev6_date: 'Таллін · 3 тижні тому',
        rev1_name: 'Оксана М.', rev2_name: 'Ірина Б., вчитель', rev3_name: 'Василь Т.',
        rev4_name: 'Людмила К.', rev5_name: 'Тетяна Р.', rev6_name: 'Андрій С.',
    },
    en: {
        nav_catalog: 'Catalog', nav_about: 'About us', nav_reviews: 'Reviews', nav_contacts: 'Contacts',
        hero_badge: '✦ Learn through play!',
        hero_title: 'Toys that <span class="accent">inspire</span><br>little explorers',
        hero_sub: 'Quality educational sets for children from 1 to 8 years. Learning through creativity and play.',
        hero_btn1: 'Browse catalog', hero_btn2: 'Learn more →',
        trust_rating: 'rating', trust_families: 'happy families', trust_delivery: 'Delivery across Ukraine',
        feat1_title: 'Safe materials', feat1_sub: 'Certified and eco-friendly',
        feat2_title: 'Made with love', feat2_sub: 'Designed by educators',
        feat3_title: 'Fast delivery', feat3_sub: 'Across Ukraine',
        feat4_title: '14-day returns', feat4_sub: 'No questions asked',
        stat1_label: 'satisfied families', stat2_label: 'unique sets',
        stat3_label: 'positive reviews', stat4_label: 'years on market', stat4_years: 'years',
        products_title: 'Our Sets', products_sub: 'Each set is carefully designed to develop various skills',
        filter_all: 'All sets', filter_1_3: '1–3 years', filter_3_6: '3–6 years', filter_6_8: '6–8 years',
        age_1_3: '1–3 years', age_3_6: '3–6 years', age_6_8: '6–8 years',
        reviews_suffix: 'reviews', add_to_cart: 'Add to cart',
        reviews_title: 'What parents say', reviews_sub: 'Real reviews from our customers',
        review1_text: '"We bought the sorter for our 2-year-old daughter. She is delighted! Great quality, materials are pleasant to touch. Highly recommend!"',
        review2_text: '"The wooden constructor is just amazing! My son plays with it every day for 3 months. Excellent quality and smells like real wood."',
        review3_text: '"Delivery arrived the next day! Beautiful packaging, the art set turned out even better than expected."',
        review1_date: 'Kyiv · 2 weeks ago', review2_date: 'Lviv · 1 month ago', review3_date: 'Odessa · 3 weeks ago',
        newsletter_title: 'Get discounts first 🎁', newsletter_sub: 'Subscribe and get -10% on your first order',
        newsletter_placeholder: 'Your email', newsletter_btn: 'Subscribe',
        footer_brand: 'Educational toys for children from 1 to 8 years',
        footer_col1_title: 'Shop', footer_col2_title: 'Information', footer_col3_title: 'Contacts',
        footer_link_catalog: 'Catalog', footer_link_new: 'New arrivals', footer_link_sales: 'Sales & Promotions',
        footer_link_about: 'About us', footer_link_delivery: 'Delivery & Payment', footer_link_returns: 'Returns',
        footer_link_telegram: 'Telegram channel',
        footer_copyright: '© 2026 Tana Toys — Educational toys for children',
        footer_privacy: 'Privacy Policy', footer_terms: 'Terms of Use',
        cart_title: 'Cart', cart_empty_title: 'Cart is empty', cart_empty_sub: 'Add items to start shopping',
        cart_total_label: 'Total:', cart_checkout: 'Place order',
        toast_added: 'added to cart', newsletter_success: 'Thank you! Check your email — discount is already there',
        about_title: 'Created with love for children and respect for science',
        about_role: 'Special educator · Psychologist · Founder',
        about_lead: 'Have you ever seen a child\'s eyes light up when they first manage to put together a complex puzzle or solve a logical riddle? I see this every day.',
        about_body: 'I am Olha, a special educator, psychologist, and founder of a didactic games workshop. My goal is to turn learning into an adventure with no room for boredom. I put not only psychology knowledge, but also a piece of my soul into my creations.',
        about_quote: '«My games are a bridge between a complex learning programme and a child\'s natural curiosity».',
        about_val1: '<strong>Safety</strong> — only certified eco-plastic.',
        about_val2: '<strong>Development</strong> — we stimulate motor skills, logic and speech simultaneously.',
        about_val3: '<strong>Durability</strong> — our games are not afraid of falls or active children\'s hands.',
        about_cta: 'Join our community of conscious parents. Let\'s play with purpose!',
        eco_badge: '🌿 Ecologically clean', eco_title: 'Materials you<br>can trust',
        eco_lead: 'Our toys are made from grain-based biodegradable materials — no harmful substances, no waste, no risk to your child.',
        eco_p1_title: 'Natural raw materials', eco_p1_sub: 'Corn starch and lactic acid (PLA)',
        eco_p2_title: 'Biodegradable material', eco_p2_sub: 'Fully decomposes in nature without toxins',
        eco_p3_title: 'Safety confirmed', eco_p3_sub: 'No heavy metals, dyes or fragrances',
        rev1_text: '"I ordered the logic sorter — amazed by the quality! PLA plastic is very pleasant to touch, odourless, edges neatly polished. My daughter, 2.5 years, plays every day and has already learned to put all the shapes together."',
        rev2_text: '"As a teacher I recommend these games to parents. The material is eco-friendly, parts are precise and don\'t break. You can see it\'s made thoughtfully — every game truly teaches, not just entertains."',
        rev3_text: '"We bought a set for our 4-year-old son — couldn\'t drag him away from the table! The plastic is sturdy, dropped several times — nothing broke. We ordered another set for our daughter."',
        rev4_text: '"Pay attention to the print quality — parts are smooth, no burrs. My son immediately noticed it\'s «not from a store» and asked how it was made 😄 Now he wants to learn 3D printing himself!"',
        rev5_text: '"I was looking for educational games without toxic materials — found them! PLA plastic is safe, I checked the composition. My daughter with allergies plays without any reactions. Thank you so much!"',
        rev6_text: '"We gave it as a birthday gift to our 5-year-old nephew. He and his parents are delighted. The game develops logic and fine motor skills simultaneously. Excellent quality — nothing sticks, parts fit perfectly."',
        rev1_date: 'Tallinn · 2 weeks ago', rev2_date: 'Narva · 1 month ago', rev3_date: 'Kharkiv · 3 weeks ago',
        rev4_date: 'Riga · 2 months ago', rev5_date: 'Vilnius · 1 month ago', rev6_date: 'Tallinn · 3 weeks ago',
        rev1_name: 'Oksana M.', rev2_name: 'Irina B., teacher', rev3_name: 'Vasyl T.',
        rev4_name: 'Liudmila K.', rev5_name: 'Tetiana R.', rev6_name: 'Andriy S.',
    },
    et: {
        nav_catalog: 'Kataloog', nav_about: 'Meist', nav_reviews: 'Arvustused', nav_contacts: 'Kontaktid',
        hero_badge: '✦ Õpi mängu kaudu!',
        hero_title: 'Mänguasjad, mis <span class="accent">inspireerivad</span><br>väikseid avastajaid',
        hero_sub: 'Kvaliteetsed arendavad komplektid 1–8-aastastele lastele. Õppimine loovuse ja mängu kaudu.',
        hero_btn1: 'Vaata kataloogi', hero_btn2: 'Loe lähemalt →',
        trust_rating: 'hinnang', trust_families: 'õnnelikku perekonda', trust_delivery: 'Tarne üle Ukraina',
        feat1_title: 'Ohutud materjalid', feat1_sub: 'Sertifitseeritud ja ökoloogilised',
        feat2_title: 'Armastusega', feat2_sub: 'Pedagoogide poolt loodud',
        feat3_title: 'Kiire tarne', feat3_sub: 'Üle Ukraina',
        feat4_title: '14-päevane tagastus', feat4_sub: 'Ilma küsimusteta',
        stat1_label: 'rahuldatud peret', stat2_label: 'ainulaadset komplekti',
        stat3_label: 'positiivseid arvustusi', stat4_label: 'aastat turul', stat4_years: 'aastat',
        products_title: 'Meie komplektid', products_sub: 'Iga komplekt on hoolikalt välja töötatud erinevate oskuste arendamiseks',
        filter_all: 'Kõik komplektid', filter_1_3: '1–3 aastat', filter_3_6: '3–6 aastat', filter_6_8: '6–8 aastat',
        age_1_3: '1–3 aastat', age_3_6: '3–6 aastat', age_6_8: '6–8 aastat',
        reviews_suffix: 'arvustust', add_to_cart: 'Lisa korvi',
        reviews_title: 'Mida vanemad ütlevad', reviews_sub: 'Päris arvustused meie ostjatelt',
        review1_text: '"Ostsime sorteerija 2-aastasele tütrele. Ta on vaimustuses! Suurepärane kvaliteet. Soovitan kõigile vanematele!"',
        review2_text: '"Puidust konstruktor on lihtsalt suurepärane! Poeg mängib iga päev juba 3 kuud. Lõhnab pärispuidu järgi."',
        review3_text: '"Tarne jõudis kätte järgmisel päeval! Kaunis pakend, kunstikomplekt osutus isegi paremaks."',
        review1_date: 'Kiiev · 2 nädalat tagasi', review2_date: 'Lviv · 1 kuu tagasi', review3_date: 'Odessa · 3 nädalat tagasi',
        newsletter_title: 'Saa allahindlused esimesena 🎁', newsletter_sub: 'Telli uudiskiri ja saa -10% esimesele tellimusele',
        newsletter_placeholder: 'Sinu e-post', newsletter_btn: 'Telli',
        footer_brand: 'Arendavad mänguasjad 1–8-aastastele lastele',
        footer_col1_title: 'Pood', footer_col2_title: 'Info', footer_col3_title: 'Kontaktid',
        footer_link_catalog: 'Kataloog', footer_link_new: 'Uued tooted', footer_link_sales: 'Allahindlused',
        footer_link_about: 'Meist', footer_link_delivery: 'Tarne ja makse', footer_link_returns: 'Tagastus',
        footer_link_telegram: 'Telegrami kanal',
        footer_copyright: '© 2026 Tana Toys — Arendavad mänguasjad lastele',
        footer_privacy: 'Privaatsuspoliitika', footer_terms: 'Kasutustingimused',
        cart_title: 'Ostukorv', cart_empty_title: 'Ostukorv on tühi', cart_empty_sub: 'Lisa kaupu ostlemise alustamiseks',
        cart_total_label: 'Kokku:', cart_checkout: 'Vormista tellimus',
        toast_added: 'lisati korvi', newsletter_success: 'Täname! Kontrolli e-posti — allahindlus on juba seal',
        about_title: 'Loodud armastusega laste vastu ja austusega teaduse vastu',
        about_role: 'Eripedagoog · Psühholoog · Asutaja',
        about_lead: 'Kas olete kunagi näinud, kuidas lapse silmad säravad, kui tal esimest korda õnnestub keeruline pusle kokku panna? Ma näen seda iga päev.',
        about_body: 'Olen Olha, eripedagoog, psühholoog ja didaktiliste mängude töökoja asutaja. Minu eesmärk on muuta õppimine seikluseks, kus ei ole ruumi igavusele. Oma loomingusse panen ma psühholoogiateadmisi ja tüki oma hingest.',
        about_quote: '«Minu mängud on sild keerulise õppekava ja lapse loomuliku uudishimu vahel».',
        about_val1: '<strong>Ohutus</strong> — ainult sertifitseeritud ökoplast.',
        about_val2: '<strong>Areng</strong> — stimuleerime motoorika, loogika ja kõne arengut samaaegselt.',
        about_val3: '<strong>Vastupidavus</strong> — meie mängud ei karda kukkumisi ega aktiivseid lapselikke käsi.',
        about_cta: 'Liituge meie teadlike vanemate kogukonnaga. Mängime koos kasuga!',
        eco_badge: '🌿 Ökoloogiliselt puhas', eco_title: 'Materjalid, millele<br>saab usaldada',
        eco_lead: 'Meie mänguasjad on valmistatud teraviljapõhistest biolagunevatest materjalidest — ilma kahjulike aineteta, ilma jäätmeteta, ilma riskita teie lapsele.',
        eco_p1_title: 'Looduslik tooraine', eco_p1_sub: 'Maisitärklis ja piimhape (PLA)',
        eco_p2_title: 'Biolaguneв materjal', eco_p2_sub: 'Laguneb looduses täielikult ilma toksiinideta',
        eco_p3_title: 'Ohutus kinnitatud', eco_p3_sub: 'Ei mingeid raskemetalle, värvaineid ega lõhnaaineid',
        rev1_text: '"Tellisin loogilise sorteerija — olen kvaliteediga imestunud! PLA plastik on puudutamisel väga meeldiv, ilma lõhnata, servad korralikult lihvitud. Tütar 2,5 aastat mängib iga päev ja on juba õppinud kõik kujundid kokku panema."',
        rev2_text: '"Pedagoogina soovitan neid mänge vanematele. Materjal on ökoloogiline, detailid on selged ja ei murdu. On näha, et see on tehtud mõttega — iga mäng tõesti õpetab, mitte lihtsalt meelelahutust."',
        rev3_text: '"Ostsime komplekti 4-aastasele pojale — ei suutnud lauast eemale meelitada! Plastik on tugev, kukkus mitu korda — miski ei murdunud. Tellisin veel ühe komplekti tütrele."',
        rev4_text: '"Pöörake tähelepanu prindikvaliteedile — detailid on siledad, ilma jääkideta. Mu poeg märkas kohe, et see on «mitte poest» ja küsis, kuidas see on tehtud 😄 Nüüd tahab ise 3D-printerit õppida!"',
        rev5_text: '"Otsisin arendavaid mänge ilma mürgiste materjalideta — leidsin! PLA plastik on ohutu, kontrollisin koostist. Allergik tütar mängib ilma igasuguste reaktsioonideta. Suur tänu!"',
        rev6_text: '"Kinkisime sünnipäevaks vennapojale 5 aastat. Tema ja vanemad on vaimustuses. Mäng arendab loogikat ja peenmotoorikat samaaegselt. Kvaliteet on kõrgtasemel — miski ei kleepu, detailid sobivad ideaalselt."',
        rev1_date: 'Tallinn · 2 nädalat tagasi', rev2_date: 'Narva · 1 kuu tagasi', rev3_date: 'Harkiv · 3 nädalat tagasi',
        rev4_date: 'Riia · 2 kuud tagasi', rev5_date: 'Vilnius · 1 kuu tagasi', rev6_date: 'Tallinn · 3 nädalat tagasi',
        rev1_name: 'Oksana M.', rev2_name: 'Irina B., õpetaja', rev3_name: 'Vassili T.',
        rev4_name: 'Ludmila K.', rev5_name: 'Tetjana R.', rev6_name: 'Andrei S.',
    },
    lt: {
        nav_catalog: 'Katalogas', nav_about: 'Apie mus', nav_reviews: 'Atsiliepimai', nav_contacts: 'Kontaktai',
        hero_badge: '✦ Mokykis žaisdamas!',
        hero_title: 'Žaislai, kurie <span class="accent">įkvepia</span><br>mažuosius tyrinėtojus',
        hero_sub: 'Kokybiški lavinamieji rinkiniai vaikams nuo 1 iki 8 metų. Mokymasis per kūrybiškumą ir žaidimą.',
        hero_btn1: 'Peržiūrėti katalogą', hero_btn2: 'Sužinoti daugiau →',
        trust_rating: 'įvertinimas', trust_families: 'laimingų šeimų', trust_delivery: 'Pristatymas visoje Ukrainoje',
        feat1_title: 'Saugios medžiagos', feat1_sub: 'Sertifikuotos ir ekologiškos',
        feat2_title: 'Su meile', feat2_sub: 'Sukurta pedagogų',
        feat3_title: 'Greitas pristatymas', feat3_sub: 'Visoje Ukrainoje',
        feat4_title: 'Grąžinimas per 14 dienų', feat4_sub: 'Be jokių klausimų',
        stat1_label: 'patenkintų šeimų', stat2_label: 'unikalių rinkinių',
        stat3_label: 'teigiamų atsiliepimų', stat4_label: 'metai rinkoje', stat4_years: 'metai',
        products_title: 'Mūsų rinkiniai', products_sub: 'Kiekvienas rinkinys kruopščiai sukurtas įvairiems įgūdžiams ugdyti',
        filter_all: 'Visi rinkiniai', filter_1_3: '1–3 metai', filter_3_6: '3–6 metai', filter_6_8: '6–8 metai',
        age_1_3: '1–3 metai', age_3_6: '3–6 metai', age_6_8: '6–8 metai',
        reviews_suffix: 'atsiliepimų', add_to_cart: 'Pridėti į krepšelį',
        reviews_title: 'Ką sako tėvai', reviews_sub: 'Tikri mūsų pirkėjų atsiliepimai',
        review1_text: '"Nusipirkome rikiuoklį 2 metų dukrai. Ji tiesiog sužavėta! Puiki kokybė. Rekomenduoju visiems tėvams!"',
        review2_text: '"Medinis konstruktorius tiesiog bombinis! Sūnus žaidžia kiekvieną dieną jau 3 mėnesius. Kvepia tikru medienu."',
        review3_text: '"Pristatymas atėjo kitą dieną! Graži pakuotė, piešimo rinkinys pasirodė net geriau nei tikėjausi."',
        review1_date: 'Kijevas · prieš 2 savaites', review2_date: 'Lvovas · prieš 1 mėnesį', review3_date: 'Odesa · prieš 3 savaites',
        newsletter_title: 'Gaukite nuolaidas pirmieji 🎁', newsletter_sub: 'Užsiprenumeruokite ir gaukite -10% pirmajam užsakymui',
        newsletter_placeholder: 'Jūsų el. paštas', newsletter_btn: 'Prenumeruoti',
        footer_brand: 'Lavinamieji žaislai vaikams nuo 1 iki 8 metų',
        footer_col1_title: 'Parduotuvė', footer_col2_title: 'Informacija', footer_col3_title: 'Kontaktai',
        footer_link_catalog: 'Katalogas', footer_link_new: 'Nauji produktai', footer_link_sales: 'Nuolaidos',
        footer_link_about: 'Apie mus', footer_link_delivery: 'Pristatymas ir mokėjimas', footer_link_returns: 'Grąžinimas',
        footer_link_telegram: 'Telegram kanalas',
        footer_copyright: '© 2026 Tana Toys — Lavinamieji žaislai vaikams',
        footer_privacy: 'Privatumo politika', footer_terms: 'Naudojimo sąlygos',
        cart_title: 'Krepšelis', cart_empty_title: 'Krepšelis tuščias', cart_empty_sub: 'Pridėkite prekių, kad pradėtumėte apsipirkti',
        cart_total_label: 'Viso:', cart_checkout: 'Pateikti užsakymą',
        toast_added: 'pridėta į krepšelį', newsletter_success: 'Ačiū! Patikrinkite el. paštą — nuolaida jau ten',
        about_title: 'Sukurta su meile vaikams ir pagarba mokslui',
        about_role: 'Defektologė · Psichologė · Įkūrėja',
        about_lead: 'Ar kada nors matėte, kaip spindi vaiko akys, kai jam pirmą kartą pavyksta sudėti sudėtingą dėlionę ar išspręsti loginę mįslę? Aš tai stebiu kiekvieną dieną.',
        about_body: 'Aš — Olha, defektologė, psichologė ir didaktinių žaidimų dirbtuvės įkūrėja. Mano tikslas — paversti mokymąsi nuotykiu, kuriame nėra vietos nuoboduliui. Į savo kūrinius dedu psichologijos žinias ir dalį savo sielos.',
        about_quote: '«Mano žaidimai — tai tiltas tarp sudėtingos mokymo programos ir natūralaus vaiko smalsumo».',
        about_val1: '<strong>Saugumas</strong> — tik sertifikuotas eko-plastikas.',
        about_val2: '<strong>Vystymasis</strong> — stimuliuojame motoriką, logiką ir kalbą vienu metu.',
        about_val3: '<strong>Ilgaamžiškumas</strong> — mūsų žaidimai nebijo kritimų ar aktyvių vaikų rankų.',
        about_cta: 'Prisijunkite prie mūsų sąmoningų tėvų bendruomenės. Žaiskime su nauda!',
        eco_badge: '🌿 Ekologiškai švaru', eco_title: 'Medžiagos, kuriomis<br>galima pasitikėti',
        eco_lead: 'Mūsų žaislai pagaminti iš grūdais pagrįstų biologiškai skaidžių medžiagų — be kenksmingų medžiagų, be atliekų, be rizikos jūsų vaikui.',
        eco_p1_title: 'Natūrali žaliava', eco_p1_sub: 'Kukurūzų krakmolas ir pieno rūgštis (PLA)',
        eco_p2_title: 'Biologiškai skaidžiama medžiaga', eco_p2_sub: 'Visiškai suyra gamtoje be toksinų',
        eco_p3_title: 'Saugumas patvirtintas', eco_p3_sub: 'Jokių sunkiųjų metalų, dažiklių ar aromatingų medžiagų',
        rev1_text: '"Užsakiau loginį rikiuoklį — sužavėta kokybe! PLA plastikas labai malonus liečiant, be kvapo, kraštai tvarkingai nušlifuoti. Duktė 2,5 metų žaidžia kasdien ir jau išmoko sudėti visas figūras."',
        rev2_text: '"Kaip pedagogas rekomenduoju šiuos žaidimus tėvams. Medžiaga ekologiška, detalės aiškios ir nelūžta. Matyti, kad pagaminta apgalvotai — kiekvienas žaidimas tikrai moko, o ne tik linksmina."',
        rev3_text: '"Nusipirkome rinkinį 4 metų sūnui — negalėjome atitraukti nuo stalo! Plastikas tvirtas, nukrito kelis kartus — nieko nesulūžo. Užsakėme dar vieną rinkinį dukrai."',
        rev4_text: '"Atkreipkite dėmesį į spausdinimo kokybę — detalės lygios, be nuopjovų. Mano sūnus iš karto pastebėjo, kad tai «ne iš parduotuvės» ir paklausė, kaip tai padaryta 😄 Dabar pats nori išmokti 3D spausdinimo!"',
        rev5_text: '"Ieškojau lavinamųjų žaidimų be toksiškų medžiagų — radau! PLA plastikas saugus, patikrinau sudėtį. Alergikė duktė žaidžia be jokių reakcijų. Labai ačiū!"',
        rev6_text: '"Padovanojome gimtadienio proga sūnėnui 5 metų. Jis ir tėvai džiaugiasi. Žaidimas ugdo logiką ir smulkiąją motoriką vienu metu. Kokybė aukšto lygio — niekas nelimpa, detalės tinka idealiai."',
        rev1_date: 'Talinas · prieš 2 savaites', rev2_date: 'Narva · prieš 1 mėnesį', rev3_date: 'Charkovas · prieš 3 savaites',
        rev4_date: 'Ryga · prieš 2 mėnesius', rev5_date: 'Vilnius · prieš 1 mėnesį', rev6_date: 'Talinas · prieš 3 savaites',
        rev1_name: 'Oksana M.', rev2_name: 'Irina B., mokytoja', rev3_name: 'Vasilis T.',
        rev4_name: 'Liudmila K.', rev5_name: 'Tetjana R.', rev6_name: 'Andrius S.',
    },
    lv: {
        nav_catalog: 'Katalogs', nav_about: 'Par mums', nav_reviews: 'Atsauksmes', nav_contacts: 'Kontakti',
        hero_badge: '✦ Mācies spēlējot!',
        hero_title: 'Rotaļlietas, kas <span class="accent">iedvesmo</span><br>mazos pētniekus',
        hero_sub: 'Kvalitatīvi attīstošie komplekti bērniem no 1 līdz 8 gadiem. Mācīšanās caur radošumu un spēli.',
        hero_btn1: 'Skatīt katalogu', hero_btn2: 'Uzzināt vairāk →',
        trust_rating: 'vērtējums', trust_families: 'laimīgas ģimenes', trust_delivery: 'Piegāde visā Ukrainā',
        feat1_title: 'Droši materiāli', feat1_sub: 'Sertificēti un ekoloģiski',
        feat2_title: 'Ar mīlestību', feat2_sub: 'Izstrādāts pedagogu',
        feat3_title: 'Ātra piegāde', feat3_sub: 'Pa visu Ukrainu',
        feat4_title: 'Atgriešana 14 dienās', feat4_sub: 'Bez liekiem jautājumiem',
        stat1_label: 'apmierinātu ģimeņu', stat2_label: 'unikālu komplektu',
        stat3_label: 'pozitīvu atsauksmju', stat4_label: 'gadi tirgū', stat4_years: 'gadi',
        products_title: 'Mūsu komplekti', products_sub: 'Katrs komplekts rūpīgi izstrādāts dažādu prasmju attīstīšanai',
        filter_all: 'Visi komplekti', filter_1_3: '1–3 gadi', filter_3_6: '3–6 gadi', filter_6_8: '6–8 gadi',
        age_1_3: '1–3 gadi', age_3_6: '3–6 gadi', age_6_8: '6–8 gadi',
        reviews_suffix: 'atsauksmju', add_to_cart: 'Pievienot grozam',
        reviews_title: 'Ko saka vecāki', reviews_sub: 'Īstas atsauksmes no mūsu pircējiem',
        review1_text: '"Nopirkām šķirotāju 2 gadus vecai meitai. Viņa ir sajūsmā! Lieliska kvalitāte. Iesaku visiem vecākiem!"',
        review2_text: '"Koka konstruktors ir vienkārši izcils! Dēls spēlējas katru dienu jau 3 mēnešus. Smaržo pēc īsta koka."',
        review3_text: '"Piegāde ieradās nākamajā dienā! Skaists iepakojums, komplekts izrādījās pat labāks, nekā gaidīts."',
        review1_date: 'Kijeva · pirms 2 nedēļām', review2_date: 'Ļviva · pirms 1 mēneša', review3_date: 'Odesa · pirms 3 nedēļām',
        newsletter_title: 'Saņem atlaides pirmais 🎁', newsletter_sub: 'Abonē biļetenu un saņem -10% pirmajam pasūtījumam',
        newsletter_placeholder: 'Tavs e-pasts', newsletter_btn: 'Abonēt',
        footer_brand: 'Attīstošās rotaļlietas bērniem no 1 līdz 8 gadiem',
        footer_col1_title: 'Veikals', footer_col2_title: 'Informācija', footer_col3_title: 'Kontakti',
        footer_link_catalog: 'Katalogs', footer_link_new: 'Jaunie produkti', footer_link_sales: 'Atlaides',
        footer_link_about: 'Par mums', footer_link_delivery: 'Piegāde un maksājums', footer_link_returns: 'Atgriešana',
        footer_link_telegram: 'Telegram kanāls',
        footer_copyright: '© 2026 Tana Toys — Attīstošās rotaļlietas bērniem',
        footer_privacy: 'Privātuma politika', footer_terms: 'Lietošanas noteikumi',
        cart_title: 'Grozs', cart_empty_title: 'Grozs ir tukšs', cart_empty_sub: 'Pievieno preces, lai sāktu iepirkties',
        cart_total_label: 'Kopā:', cart_checkout: 'Noformēt pasūtījumu',
        toast_added: 'pievienots grozam', newsletter_success: 'Paldies! Pārbaudi e-pastu — atlaide jau tur',
        about_title: 'Radīts ar mīlestību pret bērniem un cieņu pret zinātni',
        about_role: 'Speciāliste · Psiholoģe · Dibinātāja',
        about_lead: 'Vai jūs kādreiz esat redzējuši, kā spīd bērna acis, kad viņam pirmo reizi izdodas salikt sarežģītu puzli? Es to novēroju katru dienu.',
        about_body: 'Es esmu Olha, speciāliste, psiholoģe un didaktisko spēļu darbnīcas dibinātāja. Mans mērķis ir pārvērst mācīšanos par piedzīvojumu, kur nav vietas garlaicībai. Savos darbos ielieku psiholoģijas zināšanas un daļu savas dvēseles.',
        about_quote: '«Manas spēles ir tilts starp sarežģītu mācību programmu un bērna dabisko zinātkāri».',
        about_val1: '<strong>Drošība</strong> — tikai sertificēts ekoplasts.',
        about_val2: '<strong>Attīstība</strong> — stimulējam motoriku, loģiku un runu vienlaicīgi.',
        about_val3: '<strong>Ilgmūžība</strong> — mūsu spēles nebaidās no kritieniem vai aktīvām bērnu rokām.',
        about_cta: 'Pievienojieties mūsu apzinīgo vecāku kopienai. Spēlēsim ar jēgu!',
        eco_badge: '🌿 Ekoloģiski tīrs', eco_title: 'Materiāli, kuriem<br>var uzticēties',
        eco_lead: 'Mūsu rotaļlietas ir izgatavotas no graudu bāzes bioloģiski noārdāmiem materiāliem — bez kaitīgām vielām, bez atkritumiem, bez riska jūsu bērnam.',
        eco_p1_title: 'Dabīgas izejvielas', eco_p1_sub: 'Kukurūzas ciete un pienskābe (PLA)',
        eco_p2_title: 'Bioloģiski noārdāms materiāls', eco_p2_sub: 'Pilnībā sadalās dabā bez toksīniem',
        eco_p3_title: 'Drošība apstiprināta', eco_p3_sub: 'Nav smagāko metālu, krāsvielu vai aromātu',
        rev1_text: '"Pasūtīju loģisko šķirotāju — esmu pārsteigta ar kvalitāti! PLA plastmasa ir ļoti patīkama uz tausti, bez smaržas, malas kārtīgi noslīpētas. Meita 2,5 gadi spēlējas katru dienu un jau iemācījusies salikt visas figūras."',
        rev2_text: '"Kā pedagogs iesaku šīs spēles vecākiem. Materiāls ir ekoloģisks, detaļas ir precīzas un nelūzt. Redzams, ka tas izdarīts ar domu — katra spēle patiešām māca, nevis tikai izklaidē."',
        rev3_text: '"Nopirkām komplektu 4 gadus vecam dēlam — nevarēja atraut no galda! Plastmasa ir izturīga, nokrita vairākas reizes — nekas nesalūza. Pasūtījām vēl vienu komplektu meitai."',
        rev4_text: '"Pievērsiet uzmanību drukas kvalitātei — detaļas ir līdzenas, bez skaidriņām. Mans dēls uzreiz pamanīja, ka tas ir «ne no veikala» un jautāja, kā tas izgatavots 😄 Tagad pats grib iemācīties 3D drukas!"',
        rev5_text: '"Meklēju attīstošās spēles bez toksiskiem materiāliem — atradu! PLA plastmasa ir droša, pārbaudīju sastāvu. Alerģiskā meita spēlējas bez jebkādām reakcijām. Liels paldies!"',
        rev6_text: '"Uzdāvinājām dzimšanas dienā brāļadēlam 5 gadi. Viņš un vecāki ir sajūsmā. Spēle attīsta loģiku un smalko motoriku vienlaicīgi. Kvalitāte augstā līmenī — nekas nelīp, detaļas der perfekti."',
        rev1_date: 'Tallina · 2 nedēļas atpakaļ', rev2_date: 'Narva · 1 mēnesi atpakaļ', rev3_date: 'Harkiva · 3 nedēļas atpakaļ',
        rev4_date: 'Rīga · 2 mēnešus atpakaļ', rev5_date: 'Viļņa · 1 mēnesi atpakaļ', rev6_date: 'Tallina · 3 nedēļas atpakaļ',
        rev1_name: 'Oksana M.', rev2_name: 'Irina B., skolotāja', rev3_name: 'Vasils T.',
        rev4_name: 'Ludmila K.', rev5_name: 'Tetjana R.', rev6_name: 'Andrejs S.',
    },
    ru: {
        nav_catalog: 'Каталог', nav_about: 'О нас', nav_reviews: 'Отзывы', nav_contacts: 'Контакты',
        hero_badge: '✦ Развивайся через игру!',
        hero_title: 'Игрушки, которые <span class="accent">вдохновляют</span><br>маленьких исследователей',
        hero_sub: 'Качественные развивающие наборы для детей от 1 до 8 лет. Обучение через творчество и игру.',
        hero_btn1: 'Смотреть каталог', hero_btn2: 'Узнать больше →',
        trust_rating: 'рейтинг', trust_families: 'счастливых семей', trust_delivery: 'Доставка по Украине',
        feat1_title: 'Безопасные материалы', feat1_sub: 'Сертифицированные и экологичные',
        feat2_title: 'С любовью', feat2_sub: 'Разработано педагогами',
        feat3_title: 'Быстрая доставка', feat3_sub: 'По всей Украине',
        feat4_title: 'Возврат 14 дней', feat4_sub: 'Без лишних вопросов',
        stat1_label: 'довольных семей', stat2_label: 'уникальных наборов',
        stat3_label: 'положительных отзывов', stat4_label: 'года на рынке', stat4_years: 'года',
        products_title: 'Наши наборы', products_sub: 'Каждый набор тщательно разработан для развития различных навыков',
        filter_all: 'Все наборы', filter_1_3: '1–3 года', filter_3_6: '3–6 лет', filter_6_8: '6–8 лет',
        age_1_3: '1–3 года', age_3_6: '3–6 лет', age_6_8: '6–8 лет',
        reviews_suffix: 'отзывов', add_to_cart: 'Добавить в корзину',
        reviews_title: 'Что говорят родители', reviews_sub: 'Реальные отзывы наших покупателей',
        review1_text: '"Купили сортер дочке 2 года. Она в восторге! Качество отличное. Рекомендую всем родителям!"',
        review2_text: '"Деревянный конструктор — это просто бомба! Сын играет каждый день уже 3 месяца. Пахнет настоящим деревом."',
        review3_text: '"Доставка пришла на следующий день! Красивая упаковка, набор оказался даже лучше, чем ожидала."',
        review1_date: 'Киев · 2 недели назад', review2_date: 'Львов · 1 месяц назад', review3_date: 'Одесса · 3 недели назад',
        newsletter_title: 'Получай скидки первым 🎁', newsletter_sub: 'Подпишись и получи -10% на первый заказ',
        newsletter_placeholder: 'Твоя электронная почта', newsletter_btn: 'Подписаться',
        footer_brand: 'Развивающие игрушки для детей от 1 до 8 лет',
        footer_col1_title: 'Магазин', footer_col2_title: 'Информация', footer_col3_title: 'Контакты',
        footer_link_catalog: 'Каталог', footer_link_new: 'Новые поступления', footer_link_sales: 'Скидки и акции',
        footer_link_about: 'О нас', footer_link_delivery: 'Доставка и оплата', footer_link_returns: 'Возврат',
        footer_link_telegram: 'Telegram-канал',
        footer_copyright: '© 2026 Tana Toys — Развивающие игрушки для детей',
        footer_privacy: 'Политика конфиденциальности', footer_terms: 'Условия использования',
        cart_title: 'Корзина', cart_empty_title: 'Корзина пуста', cart_empty_sub: 'Добавь товары, чтобы начать покупки',
        cart_total_label: 'Итого:', cart_checkout: 'Оформить заказ',
        toast_added: 'добавлен в корзину', newsletter_success: 'Спасибо! Проверь почту — скидка уже там',
        about_title: 'Создано с любовью к детям и уважением к науке',
        about_role: 'Дефектолог · Психолог · Основательница',
        about_lead: 'Вы когда-нибудь видели, как светятся глаза ребёнка, когда у него впервые получается сложить сложный пазл? Я наблюдаю это каждый день.',
        about_body: 'Я — Ольга, дефектолог, психолог и основательница мастерской дидактических игр. Моя цель — превратить обучение в приключение, где нет места скуке. В свои работы я вкладываю знания психологии и частицу своей души.',
        about_quote: '«Мои игры — это мост между сложной программой обучения и природным любопытством ребёнка».',
        about_val1: '<strong>Безопасность</strong> — только сертифицированный эко-пластик.',
        about_val2: '<strong>Развитие</strong> — стимулируем моторику, логику и речь одновременно.',
        about_val3: '<strong>Долговечность</strong> — наши игры не боятся падений или активных детских рук.',
        about_cta: 'Присоединяйтесь к нашему сообществу сознательных родителей. Давайте играть с пользой!',
        eco_badge: '🌿 Экологически чисто', eco_title: 'Материалы, которым<br>можно доверять',
        eco_lead: 'Наши игрушки изготовлены из биоразлагаемых материалов на основе зерна — без вредных веществ, без отходов, без риска для вашего ребёнка.',
        eco_p1_title: 'Натуральное сырьё', eco_p1_sub: 'Кукурузный крахмал и молочная кислота (PLA)',
        eco_p2_title: 'Биоразлагаемый материал', eco_p2_sub: 'Полностью разлагается в природе без токсинов',
        eco_p3_title: 'Безопасность подтверждена', eco_p3_sub: 'Никаких тяжёлых металлов, красителей и ароматизаторов',
        rev1_text: '"Заказала логический сортер — поражена качеством! Пластик PLA очень приятный на ощупь, без запаха, края аккуратно отшлифованы. Дочка 2,5 года играет каждый день и уже научилась складывать все фигуры."',
        rev2_text: '"Как педагог рекомендую эти игры родителям. Материал экологичный, детали чёткие и не ломаются. Видно, что сделано с умом — каждая игра действительно учит, а не просто развлекает."',
        rev3_text: '"Купили набор для сына 4 года — не могли оторвать от стола! Пластик прочный, упал несколько раз — ничего не сломалось. Заказали ещё один набор для дочки."',
        rev4_text: '"Обратите внимание на качество печати — детали ровные, без заусенцев. Мой сын сразу заметил, что это «не из магазина» и спросил, как это сделано 😄 Теперь хочет сам научиться 3D-печати!"',
        rev5_text: '"Искала развивающие игры без токсичных материалов — нашла! PLA пластик безопасный, проверила состав. Дочка-аллергик играет без каких-либо реакций. Большое спасибо!"',
        rev6_text: '"Подарили на день рождения племяннику 5 лет. Он и родители в восторге. Игра развивает логику и мелкую моторику одновременно. Качество на уровне — ничего не слипается, детали подходят идеально."',
        rev1_date: 'Таллин · 2 недели назад', rev2_date: 'Нарва · 1 месяц назад', rev3_date: 'Харьков · 3 недели назад',
        rev4_date: 'Рига · 2 месяца назад', rev5_date: 'Вильнюс · 1 месяц назад', rev6_date: 'Таллин · 3 недели назад',
        rev1_name: 'Оксана М.', rev2_name: 'Ирина Б., учитель', rev3_name: 'Василий Т.',
        rev4_name: 'Людмила К.', rev5_name: 'Татьяна Р.', rev6_name: 'Андрей С.',
    }
};

// ===== DEFAULT PRODUCTS =====
const defaultProducts = [
    {
        id: 1, emoji: '🧩', bg: '#FFE5D0', badge: 'hit', price: 11.90, oldPrice: 14.90, age: '1-3', stars: 5, reviews: 42,
        names: { et: 'Sorteerija «Loomad»', en: 'Sorter «Animals»', lt: 'Rikiuoklis «Gyvūnai»', lv: 'Šķirotājs «Dzīvnieki»', ru: 'Сортер «Животные»', uk: 'Сортер «Тваринки»' }
    },
    {
        id: 2, emoji: '🪵', bg: '#D4F0E8', badge: 'new', price: 16.90, age: '3-6', stars: 5, reviews: 18,
        names: { et: 'Puidust konstruktor', en: 'Wooden Constructor', lt: 'Medinis konstruktorius', lv: 'Koka konstruktors', ru: 'Деревянный конструктор', uk: "Дерев'яний конструктор" }
    },
    {
        id: 3, emoji: '🎨', bg: '#FFF3C4', badge: null, price: 8.90, age: '3-6', stars: 5, reviews: 67,
        names: { et: 'Noore kunstniku komplekt', en: 'Young Artist Set', lt: 'Jauno dailininko rinkinys', lv: 'Jaunā mākslinieka komplekts', ru: 'Набор юного художника', uk: 'Набір юного художника' }
    },
    {
        id: 4, emoji: '🔵', bg: '#E8D5F5', badge: null, price: 7.90, age: '1-3', stars: 4, reviews: 31,
        names: { et: 'Taktiilne mosaiik', en: 'Tactile Mosaic', lt: 'Lytėjimo mozaika', lv: 'Taktilā mozaīka', ru: 'Тактильная мозаика', uk: 'Тактильна мозаїка' }
    },
    {
        id: 5, emoji: '🧸', bg: '#FFD6E0', badge: 'hit', price: 12.90, age: '6-8', stars: 5, reviews: 24,
        names: { et: 'Sõrmenukuteatri komplekt', en: 'Finger Puppet Theater', lt: 'Pirštinių teatro rinkinys', lv: 'Pirkstu leļļu teātris', ru: 'Пальчиковый театр', uk: 'Пальчиковий театр' }
    },
    {
        id: 6, emoji: '🔬', bg: '#D0E8FF', badge: 'new', price: 18.90, age: '6-8', stars: 5, reviews: 13,
        names: { et: 'Väikese teadlase komplekt', en: 'Little Scientist Set', lt: 'Mažojo mokslininko rinkinys', lv: 'Mazā zinātnieka komplekts', ru: 'Набор маленького учёного', uk: 'Набір маленького вченого' }
    }
];

// ===== FIREBASE =====
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDbUel1REmLWBQIVeeg-T9iz9LqrfTzTdo",
    authDomain: "tanatoys-da544.firebaseapp.com",
    projectId: "tanatoys-da544",
    storageBucket: "tanatoys-da544.firebasestorage.app",
    messagingSenderId: "644224600581",
    appId: "1:644224600581:web:72e244a3c03bad623d6a6c"
};
let _fsDB = null;
function getDB() {
    if (!_fsDB) {
        if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
        _fsDB = firebase.firestore();
    }
    return _fsDB;
}

function loadImage(productId, index = 0) {
    return getDB().collection('images').doc(`img_${productId}_${index}`).get()
        .then(doc => doc.exists ? doc.data().data : null)
        .catch(() => null);
}

async function loadAllImages(productId, count) {
    const imgs = [];
    for (let i = 0; i < count; i++) {
        const img = await loadImage(productId, i);
        if (img) imgs.push(img); else break;
    }
    return imgs;
}

function loadVideoFile(productId) {
    return getDB().collection('images').doc(`video_${productId}`).get()
        .then(doc => doc.exists ? doc.data().data : null)
        .catch(() => null);
}

// ===== LOAD PRODUCTS =====
async function fetchProducts() {
    try {
        const snap = await getDB().collection('products').orderBy('order').get();
        if (snap.empty) return defaultProducts;
        return snap.docs.map(d => d.data());
    } catch(e) {
        console.error('Firestore error:', e);
        return defaultProducts;
    }
}

let products = [];
let openModalProductId = null;

// ===== LANGUAGE =====
let currentLang = localStorage.getItem('tana_lang') || 'et';
let cart = [];

function t(key) { return (translations[currentLang] || translations.et)[key] || translations.et[key] || key; }

function productName(p) {
    return p.names[currentLang] || p.names.en || p.names.et || Object.values(p.names)[0] || '';
}

// ===== SET LANGUAGE =====
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('tana_lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const v = (translations[lang] || {})[el.dataset.i18n];
        if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const v = (translations[lang] || {})[el.dataset.i18nHtml];
        if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const v = (translations[lang] || {})[el.dataset.i18nPlaceholder];
        if (v !== undefined) el.placeholder = v;
    });
    document.getElementById('langCurrent').textContent = lang.toUpperCase();
    document.querySelectorAll('.lang-option').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    renderProducts('all');
    updateCartUI();
    if (openModalProductId !== null) updateOpenModal();
}

// ===== RENDER PRODUCTS =====
function renderProducts(filter) {
    const grid = document.getElementById('productsGrid');
    const filtered = (!filter || filter === 'all') ? products : products.filter(p => p.age === filter);

    if (!filtered.length) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-muted)">
            <div style="font-size:3rem;margin-bottom:12px">📦</div>
            <p style="font-size:16px;font-weight:600">${t('filter_all')}</p></div>`;
        return;
    }

    const badgeLabel = {
        hit: { et:'Hitt', en:'Hit', lt:'Populiaru', lv:'Populārs', ru:'Хит', uk:'Хіт' },
        new: { et:'Uus', en:'New', lt:'Naujiena', lv:'Jaunums', ru:'Новинка', uk:'Новинка' }
    };

    grid.innerHTML = filtered.map((p, i) => {
        const videoBtn = p.video
            ? `<button class="product-video-btn" onclick="openVideo(event,${p.id})" title="Дивитись відео">▶</button>`
            : '';
        return `
        <div class="product-card animate-on-scroll" style="transition-delay:${i * 70}ms;cursor:pointer" onclick="openProductModal(${p.id})">
            <div class="product-image" id="pimg-${p.id}" style="background:${p.bg};overflow:hidden;position:relative">
                ${p.badge ? `<span class="product-badge badge-${p.badge}">${(badgeLabel[p.badge] || {})[currentLang] || p.badge}</span>` : ''}
                ${videoBtn}
            </div>
            <div class="product-body">
                <h3 class="product-name">${productName(p)}</h3>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(p.stars)}${'☆'.repeat(5 - p.stars)}</span>
                    <span class="rating-count">(${p.reviews} ${t('reviews_suffix')})</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="price-current">€${Number(p.price).toFixed(2)}</span>
                        ${p.oldPrice ? `<span class="price-old">€${Number(p.oldPrice).toFixed(2)}</span>` : ''}
                    </div>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation();addToCart(${p.id})" title="${t('add_to_cart')}">+</button>
                </div>
            </div>
        </div>`;
    }).join('');

    // Load images from IndexedDB async
    filtered.forEach(async p => {
        const img = await loadImage(p.id);
        if (img) {
            const el = document.getElementById(`pimg-${p.id}`);
            if (el) {
                const image = document.createElement('img');
                image.src = img;
                image.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover';
                el.appendChild(image);
            }
        }
    });

    requestAnimationFrame(() => {
        grid.querySelectorAll('.animate-on-scroll').forEach(el => scrollObserver.observe(el));
    });
}

// ===== PRODUCT MODAL =====
function productDesc(p) {
    if (!p.descs) return '';
    return p.descs[currentLang] || p.descs.uk || p.descs.en || p.descs.et || '';
}

async function buildModalSlider(container, imgs, videoProduct) {
    const totalSlides = imgs.length + (videoProduct ? 1 : 0);
    let current = 0;

    // Pre-load video blob URL before rendering
    let preloadedVideoSrc = null;
    if (videoProduct?.video === 'idb') {
        const base64 = await loadVideoFile(videoProduct.id);
        if (base64) preloadedVideoSrc = base64ToBlobUrl(base64) || base64;
    }

    const slides = imgs.map((src, i) => ({type:'photo', src}));
    if (videoProduct) slides.push({type:'video', p: videoProduct});

    function goTo(index) {
        current = (index + totalSlides) % totalSlides;
        render();
    }

    function render() {
        const slide = slides[current];
        const dotsHtml = totalSlides > 1
            ? `<div class="slider-dots">${slides.map((_,i) => `<span class="slider-dot${i===current?' active':''}" onclick="event.stopPropagation();sliderGoTo(${container.dataset.sid},${i})"></span>`).join('')}</div>`
            : '';
        const arrowsHtml = totalSlides > 1
            ? `<button class="slider-arrow slider-prev" onclick="event.stopPropagation();sliderGoTo(${container.dataset.sid},${current}-1)">‹</button>
               <button class="slider-arrow slider-next" onclick="event.stopPropagation();sliderGoTo(${container.dataset.sid},${current}+1)">›</button>`
            : '';

        if (slide.type === 'photo') {
            container.innerHTML = `
                <img src="${slide.src}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" onclick="sliderGoTo(${container.dataset.sid},${current+1})">
                ${arrowsHtml}${dotsHtml}`;
        } else {
            container.innerHTML = `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center">${getVideoEmbed(slide.p, preloadedVideoSrc)}</div>${arrowsHtml}${dotsHtml}`;
        }
    }

    const sid = Date.now();
    container.dataset.sid = sid;
    container.style.position = 'relative';
    window._sliders = window._sliders || {};
    window._sliders[sid] = goTo;
    render();
}

window.sliderGoTo = function(sid, expr) {
    const fn = window._sliders?.[sid];
    if (fn) fn(eval(String(expr)));
};

function base64ToBlobUrl(base64) {
    try {
        const [header, data] = base64.split(',');
        const mime = header.match(/:(.*?);/)[1];
        const binary = atob(data);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        return URL.createObjectURL(new Blob([bytes], { type: mime }));
    } catch(e) { return null; }
}

function getVideoEmbed(p, preloadedSrc) {
    if (!p.video) return '';
    if (p.video === 'idb') {
        if (preloadedSrc) {
            return `<video src="${preloadedSrc}" style="max-width:100%;max-height:100%;border-radius:4px" controls></video>`;
        }
        loadVideoFile(p.id).then(base64 => {
            if (!base64) return;
            const blobUrl = base64ToBlobUrl(base64) || base64;
            const el = document.querySelector(`[data-vid="${p.id}"]`);
            if (el) el.src = blobUrl;
        });
        return `<video data-vid="${p.id}" style="max-width:100%;max-height:100%;border-radius:4px" controls></video>`;
    }
    const yt = p.video.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (yt) return `<iframe src="https://www.youtube.com/embed/${yt[1]}" style="width:100%;height:100%;border:none" allowfullscreen></iframe>`;
    return `<video src="${p.video}" style="max-width:100%;max-height:100%;border-radius:4px" controls autoplay></video>`;
}

async function openProductModal(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    const overlay = document.getElementById('productModalOverlay');
    const media   = document.getElementById('productModalMedia');
    const badge   = document.getElementById('productModalBadge');
    const name    = document.getElementById('productModalName');
    const rating  = document.getElementById('productModalRating');
    const price   = document.getElementById('productModalPrice');
    const desc    = document.getElementById('productModalDesc');
    const cartBtn = document.getElementById('productModalCartBtn');

    // Media — build slides: photos + video
    media.style.background = p.bg;
    const imgs = await loadAllImages(p.id, p.imageCount || 1);
    const hasVideo = !!p.video;
    const totalSlides = imgs.length + (hasVideo ? 1 : 0);

    if (totalSlides === 0) {
        media.innerHTML = '';
    } else {
        buildModalSlider(media, imgs, hasVideo ? p : null);
    }

    // Badge
    const badgeLabel = { hit: { et:'Hitt',en:'Hit',lt:'Populiaru',lv:'Populārs',ru:'Хит',uk:'Хіт' }, new: { et:'Uus',en:'New',lt:'Naujiena',lv:'Jaunums',ru:'Новинка',uk:'Новинка' } };
    badge.innerHTML = p.badge
        ? `<span style="background:${p.badge==='hit'?'#fff3c4':'#d4f0e8'};color:${p.badge==='hit'?'#8a6a00':'#2d8a6a'}">${(badgeLabel[p.badge]||{})[currentLang]||p.badge}</span>`
        : '';

    name.textContent = productName(p);
    rating.innerHTML = `${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}<span>(${p.reviews} ${t('reviews_suffix')})</span>`;
    price.innerHTML = `€${Number(p.price).toFixed(2)}${p.oldPrice?`<s>€${Number(p.oldPrice).toFixed(2)}</s>`:''}`;
    desc.textContent = productDesc(p) || '';
    cartBtn.onclick = () => { addToCart(p.id); };

    openModalProductId = id;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function updateOpenModal() {
    const p = products.find(x => x.id === openModalProductId);
    if (!p) return;
    const badgeLabel = { hit: { et:'Hitt',en:'Hit',lt:'Populiaru',lv:'Populārs',ru:'Хит',uk:'Хіт' }, new: { et:'Uus',en:'New',lt:'Naujiena',lv:'Jaunums',ru:'Новинка',uk:'Новинка' } };
    document.getElementById('productModalBadge').innerHTML = p.badge
        ? `<span style="background:${p.badge==='hit'?'#fff3c4':'#d4f0e8'};color:${p.badge==='hit'?'#8a6a00':'#2d8a6a'}">${(badgeLabel[p.badge]||{})[currentLang]||p.badge}</span>`
        : '';
    document.getElementById('productModalName').textContent = productName(p);
    document.getElementById('productModalRating').innerHTML = `${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}<span>(${p.reviews} ${t('reviews_suffix')})</span>`;
    document.getElementById('productModalPrice').innerHTML = `€${Number(p.price).toFixed(2)}${p.oldPrice?`<s>€${Number(p.oldPrice).toFixed(2)}</s>`:''}`;
    document.getElementById('productModalDesc').textContent = productDesc(p) || '';
}

function closeProductModal() {
    openModalProductId = null;
    document.getElementById('productModalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('productModalClose').addEventListener('click', closeProductModal);
document.getElementById('productModalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('productModalOverlay')) closeProductModal();
});

// ===== VIDEO MODAL =====
async function openVideo(e, id) {
    e.stopPropagation();
    const p = products.find(x => x.id === id);
    if (!p || !p.video) return;

    let src = p.video;

    if (src === 'idb') {
        const base64 = await loadVideoFile(id);
        if (!base64) return;
        src = base64ToBlobUrl(base64) || base64;
    }

    const ytMatch = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    const isYoutube = !!ytMatch;
    if (isYoutube) src = `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`;

    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:9999;display:flex;align-items:center;justify-content:center';
    overlay.innerHTML = isYoutube
        ? `<div style="position:relative;width:min(90vw,800px);aspect-ratio:16/9">
               <button onclick="this.closest('[style]').remove()" style="position:absolute;top:-40px;right:0;background:none;border:none;color:white;font-size:28px;cursor:pointer">✕</button>
               <iframe src="${src}" style="width:100%;height:100%;border-radius:12px;border:none" allowfullscreen allow="autoplay"></iframe>
           </div>`
        : `<div style="position:relative;max-width:90vw">
               <button onclick="this.closest('[style]').remove()" style="position:absolute;top:-40px;right:0;background:none;border:none;color:white;font-size:28px;cursor:pointer">✕</button>
               <video src="${src}" style="max-width:90vw;max-height:80vh;border-radius:12px" controls autoplay></video>
           </div>`;
    overlay.addEventListener('click', ev => { if (ev.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
}


// ===== CART =====
function addToCart(id) {
    const p = products.find(p => p.id === id);
    if (!p) return;
    const ex = cart.find(i => i.id === id);
    ex ? ex.qty++ : cart.push({ ...p, qty: 1 });
    updateCartUI();
    showToast(`${p.emoji} «${productName(p)}» ${t('toast_added')}`);
    const btn = document.getElementById('cartBtn');
    btn.style.transform = 'scale(1.2)';
    setTimeout(() => btn.style.transform = '', 200);
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    const sum   = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const countEl = document.getElementById('cartCount');
    countEl.textContent = total;
    countEl.classList.toggle('visible', total > 0);
    document.getElementById('cartTotalPrice').textContent = `€${sum.toFixed(2)}`;
    document.getElementById('cartFooter').style.display = cart.length ? 'block' : 'none';
    const body = document.getElementById('cartBody');
    if (!cart.length) {
        body.innerHTML = `<div class="cart-empty-state">
            <div class="cart-empty-icon">🛒</div>
            <p>${t('cart_empty_title')}</p>
            <span>${t('cart_empty_sub')}</span></div>`;
        return;
    }
    body.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image" id="cimg-${item.id}" style="background:${item.bg}"></div>
            <div class="cart-item-info">
                <div class="cart-item-name">${productName(item)}</div>
                <div class="cart-item-price">€${(item.price * item.qty).toFixed(2)}</div>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
                <span class="qty-value">${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
                <button class="cart-remove-btn" onclick="removeFromCart(${item.id})" title="Видалити">✕</button>
            </div>
        </div>`).join('');

    cart.forEach(async item => {
        const img = await loadImage(item.id);
        if (img) {
            const el = document.getElementById(`cimg-${item.id}`);
            if (el) el.innerHTML = `<img src="${img}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`;
        }
    });

    const cb = document.getElementById('checkoutBtn');
    if (cb) cb.textContent = t('cart_checkout');
}

// ===== CHECKOUT =====
function openCheckout() {
    if (!cart.length) return;
    closeCart();

    const deliveryPrices = { omniva: 2.90, smartpost: 2.90, dpd: 2.90, courier: 4.90 };

    function getDelivery() {
        return document.querySelector('input[name="delivery"]:checked')?.value || 'omniva';
    }

    function renderSummary() {
        const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
        const delivery = deliveryPrices[getDelivery()] || 2.90;
        document.getElementById('coSubtotal').textContent = `€${subtotal.toFixed(2)}`;
        document.getElementById('coDeliveryPrice').textContent = `€${delivery.toFixed(2)}`;
        document.getElementById('coTotal').textContent = `€${(subtotal + delivery).toFixed(2)}`;

        const itemsEl = document.getElementById('checkoutItems');
        itemsEl.innerHTML = cart.map(item => `
            <div class="checkout-item">
                <div class="checkout-item-img" id="coimg-${item.id}" style="background:${item.bg}"></div>
                <div>
                    <div class="checkout-item-name">${productName(item)}</div>
                    <div class="checkout-item-qty">${item.qty} шт.</div>
                </div>
                <div class="checkout-item-price">€${(item.price * item.qty).toFixed(2)}</div>
            </div>`).join('');

        cart.forEach(async item => {
            const img = await loadImage(item.id);
            if (img) {
                const el = document.getElementById(`coimg-${item.id}`);
                if (el) el.innerHTML = `<img src="${img}">`;
            }
        });
    }

    renderSummary();
    document.querySelectorAll('input[name="delivery"]').forEach(r =>
        r.addEventListener('change', renderSummary)
    );

    document.getElementById('checkoutOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';

}

window.updateDeliveryUI = function() {
    const val = document.querySelector('input[name="delivery"]:checked')?.value;
    const terminalField = document.getElementById('terminalField');
    const addressField = document.getElementById('addressField');
    const terminalLabel = document.getElementById('terminalLabel');
    if (val === 'courier') {
        terminalField.style.display = 'none';
        addressField.style.display = 'flex';
    } else {
        terminalField.style.display = '';
        addressField.style.display = 'none';
        const labels = { omniva: 'Omniva pakiautomaat', smartpost: 'SmartPOST pakiautomaat', dpd: 'DPD pakiautomaat' };
        terminalLabel.textContent = labels[val] || 'Назва пакетомату';
    }
};

// ===== EMAILJS CONFIG (замінити на свої ключі після реєстрації на emailjs.com) =====
const EMAILJS_PUBLIC_KEY          = 'kWQ0_Q1VuHtGtPlbt';
const EMAILJS_SERVICE_ID          = 'service_2eu7v45';
const EMAILJS_TEMPLATE_ID         = 'template_xpohnts';     // лист продавцю
const EMAILJS_CUSTOMER_TEMPLATE_ID = 'template_69wovmg';    // підтвердження покупцю
const BANK_IBAN      = 'EE10 2200 2220 9067 1557';
const BANK_RECIPIENT = 'Borys Tanasiichuk';

try { emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY }); } catch(e) {}

window.submitOrder = async function() {
    const firstName = document.getElementById('coFirstName').value.trim();
    const lastName  = document.getElementById('coLastName').value.trim();
    const email     = document.getElementById('coEmail').value.trim();
    const phone     = document.getElementById('coPhone').value.trim();
    const city      = document.getElementById('coCity').value;
    const terminal  = document.getElementById('coTerminal').value.trim();
    const address   = document.getElementById('coAddress').value.trim();
    const comment   = document.getElementById('coComment').value.trim();
    const delivery  = document.querySelector('input[name="delivery"]:checked')?.value || 'omniva';

    let valid = true;
    ['coFirstName','coLastName','coEmail','coPhone','coCity'].forEach(id => {
        const el = document.getElementById(id);
        const empty = !el.value.trim();
        el.classList.toggle('error', empty);
        if (empty) valid = false;
    });
    if (!valid) { showToast('Заповніть всі обов\'язкові поля', 'error'); return; }

    const deliveryLabels = { omniva:'Omniva pakiautomaat', smartpost:'SmartPOST pakiautomaat', dpd:'DPD pakiautomaat', courier:'Kullerteenus (kulleriga)' };
    const deliveryPrices = { omniva: 2.90, smartpost: 2.90, dpd: 2.90, courier: 4.90 };
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const deliveryCost = deliveryPrices[delivery] || 2.90;
    const total = subtotal + deliveryCost;
    const orderNum = '#TT-' + String(Date.now()).slice(-5);
    const location = delivery === 'courier' ? `Адреса: ${address}` : `Пакетомат: ${terminal || '—'}`;
    const itemsText = cart.map(i => `${productName(i)} x${i.qty} — €${(i.price*i.qty).toFixed(2)}`).join('\n');

    const btn = document.getElementById('checkoutSubmitBtn');
    btn.disabled = true;
    btn.textContent = 'Надсилаємо...';

    try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            order_number:    orderNum,
            customer_name:   `${firstName} ${lastName}`,
            customer_email:  email,
            customer_phone:  phone,
            delivery_method: deliveryLabels[delivery],
            city:            city,
            location:        location,
            items:           itemsText,
            delivery_cost:   `€${deliveryCost.toFixed(2)}`,
            total:           `€${total.toFixed(2)}`,
            comment:         comment || '—'
        });
    } catch(e) {
        btn.disabled = false;
        btn.textContent = 'Підтвердити замовлення';
        showToast('Помилка відправки. Напишіть нам на tanatoys.info@gmail.com', 'error');
        return;
    }

    // Підтвердження покупцю
    try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CUSTOMER_TEMPLATE_ID, {
            to_email:        email,
            customer_name:   `${firstName} ${lastName}`,
            order_number:    orderNum,
            items:           itemsText,
            delivery_method: deliveryLabels[delivery],
            city:            city,
            location:        location,
            delivery_cost:   `€${deliveryCost.toFixed(2)}`,
            total:           `€${total.toFixed(2)}`,
            iban:            BANK_IBAN,
            bank_recipient:  BANK_RECIPIENT
        });
    } catch(e) {
        console.warn('Customer confirmation email failed:', e);
    }

    // Показати success екран
    document.getElementById('checkoutSuccess').style.display = 'block';
    document.getElementById('checkoutInner').style.display = 'none';
    document.getElementById('successOrderNum').textContent = orderNum;
    document.getElementById('successAmount').textContent = `€${total.toFixed(2)}`;
    document.getElementById('successIBAN').textContent = BANK_IBAN;
    document.getElementById('successRecipient').textContent = BANK_RECIPIENT;

    cart.length = 0;
    updateCartUI();
    btn.disabled = false;
    btn.textContent = 'Підтвердити замовлення';
};

function closeCheckout() {
    document.getElementById('checkoutOverlay').classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('checkoutSuccess').style.display = 'none';
    document.getElementById('checkoutInner').style.display = '';
}
document.getElementById('checkoutClose').addEventListener('click', closeCheckout);
document.getElementById('checkoutOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('checkoutOverlay')) closeCheckout();
});
document.getElementById('checkoutBtn').addEventListener('click', openCheckout);

// ===== CART DRAWER =====
const cartDrawer  = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const openCart  = () => { cartDrawer.classList.add('open');    cartOverlay.classList.add('visible');    document.body.style.overflow = 'hidden'; };
const closeCart = () => { cartDrawer.classList.remove('open'); cartOverlay.classList.remove('visible'); document.body.style.overflow = ''; };
document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });

// ===== LANGUAGE SWITCHER =====
const langBtn      = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
langBtn.addEventListener('click', e => { e.stopPropagation(); langDropdown.classList.toggle('open'); });
document.addEventListener('click', () => langDropdown.classList.remove('open'));
langDropdown.addEventListener('click', e => {
    const opt = e.target.closest('.lang-option');
    if (!opt) return;
    setLanguage(opt.dataset.lang);
    langDropdown.classList.remove('open');
});

// ===== SCROLL ANIMATIONS =====
const scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.counter').forEach(c => {
            if (!c.dataset.done) { animateCounter(c); c.dataset.done = '1'; }
        });
        scrollObserver.unobserve(entry.target);
    });
}, { threshold: 0.12 });
document.querySelectorAll('.animate-on-scroll').forEach(el => scrollObserver.observe(el));

function animateCounter(el) {
    const target = +el.dataset.target, dur = 1600, t0 = performance.now();
    const tick = now => {
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
        if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
}

// ===== STICKY HEADER =====
window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', scrollY > 10);
}, { passive: true });

// ===== NEWSLETTER =====
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    showToast('🎉 ' + t('newsletter_success'));
    e.target.reset();
});

// ===== TOAST =====
let toastTimer;
function showToast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

// ===== MOBILE MENU =====
(function() {
    const hamburger   = document.getElementById('hamburgerBtn');
    const mobileMenu  = document.getElementById('mobileMenu');
    const overlay     = document.getElementById('mobileMenuOverlay');
    const closeBtn    = document.getElementById('mobileMenuClose');

    function openMenu() {
        mobileMenu.classList.add('open');
        overlay.classList.add('open');
        hamburger.classList.add('open');
        document.body.style.overflow = 'hidden';
        updateMobileLangButtons();
    }

    function closeMenu() {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
    }

    function updateMobileLangButtons() {
        document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === currentLang);
        });
    }

    hamburger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
            updateMobileLangButtons();
            closeMenu();
        });
    });
})();

// ===== INIT =====
(async () => {
    products = await fetchProducts();
    setLanguage(currentLang);
})();
