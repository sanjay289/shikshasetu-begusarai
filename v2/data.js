// ShikshaSetu Begusarai - content data. Every user-facing string is {en, hi}.
// Facts checked Oct 2026. Amounts change: always confirm on the official portal.
window.SS_DATA = {
  updated: '16 Oct 2026',

  stats: [
    { n: '1,918 km²', en: 'District area', hi: 'ज़िले का क्षेत्रफल' },
    { n: '5', en: 'Subdivisions', hi: 'अनुमंडल' },
    { n: '18', en: 'Blocks', hi: 'प्रखंड' },
    { n: '1972', en: 'Became a district', hi: 'ज़िला बना' }
  ],

  quickLinks: [
    { icon: '📝', en: 'BSEB Matric (Class 10)', hi: 'BSEB मैट्रिक (कक्षा 10)', url: 'https://secondary.biharboardonline.org/' },
    { icon: '📘', en: 'BSEB Inter (Class 12)', hi: 'BSEB इंटर (कक्षा 12)', url: 'https://intermediate.biharboardonline.com/' },
    { icon: '🏫', en: 'OFSS – Class 11 admission', hi: 'OFSS – कक्षा 11 नामांकन', url: 'https://ofssbihar.in/' },
    { icon: '💰', en: 'Medhasoft – incentives', hi: 'मेधासॉफ्ट – प्रोत्साहन राशि', url: 'https://medhasoft.bihar.gov.in/' },
    { icon: '🎓', en: 'Post-Matric Scholarship', hi: 'पोस्ट-मैट्रिक छात्रवृत्ति', url: 'https://pmsonline.bihar.gov.in/' },
    { icon: '💳', en: 'Student Credit Card (7 Nishchay)', hi: 'स्टूडेंट क्रेडिट कार्ड (7 निश्चय)', url: 'https://www.7nishchay-yuvaupmission.bihar.gov.in/' },
    { icon: '🏛️', en: 'CBSE', hi: 'CBSE', url: 'https://www.cbse.gov.in/' },
    { icon: '📗', en: 'NCERT textbooks (free PDF)', hi: 'NCERT पुस्तकें (मुफ़्त PDF)', url: 'https://ncert.nic.in/textbook.php' },
    { icon: '⚙️', en: 'BCECE Board (Polytechnic/UGEAC)', hi: 'BCECE बोर्ड (पॉलिटेक्निक/UGEAC)', url: 'https://bceceboard.bihar.gov.in/' },
    { icon: '🧪', en: 'JEE Main', hi: 'JEE मेन', url: 'https://jeemain.nta.nic.in/' },
    { icon: '🩺', en: 'NEET UG', hi: 'NEET UG', url: 'https://neet.nta.nic.in/' },
    { icon: '🏢', en: 'Begusarai district website', hi: 'बेगूसराय ज़िला वेबसाइट', url: 'https://begusarai.nic.in/' }
  ],

  // ---------- EXAM CORNER ----------
  boards: [
    {
      id: 'bseb10', badge: 'BSEB',
      en: { t: 'Bihar Board Matric (Class 10)', p: [
        '500 marks across 5 main subjects, plus an optional subject.',
        'About 50% of each paper is objective (OMR) and 50% subjective.',
        'Exams are usually held in February; results normally come in late March.',
        'Hindi (Godhuli Bhag-2) includes Dinkar\'s poem "Janatantra Ka Janm".'
      ]},
      hi: { t: 'बिहार बोर्ड मैट्रिक (कक्षा 10)', p: [
        '5 मुख्य विषयों में कुल 500 अंक, साथ में एक ऐच्छिक विषय।',
        'हर पेपर में लगभग 50% वस्तुनिष्ठ (OMR) और 50% विषयनिष्ठ प्रश्न।',
        'परीक्षा आमतौर पर फ़रवरी में होती है; रिज़ल्ट प्रायः मार्च के अंत तक आता है।',
        'हिंदी (गोधूलि भाग-2) में दिनकर की कविता "जनतंत्र का जन्म" शामिल है।'
      ]}
    },
    {
      id: 'bseb12', badge: 'BSEB',
      en: { t: 'Bihar Board Inter (Class 12)', p: [
        'Streams: Science (I.Sc.), Arts (I.A.), Commerce (I.Com.) and Vocational.',
        'Science papers have theory plus practical marks, so do not skip lab work.',
        'About 50% objective (OMR) questions in every paper.',
        'Hindi (Digant Bhag-2) includes Dinkar\'s essay "Ardhanarishwar".'
      ]},
      hi: { t: 'बिहार बोर्ड इंटर (कक्षा 12)', p: [
        'संकाय: विज्ञान (I.Sc.), कला (I.A.), वाणिज्य (I.Com.) और व्यावसायिक।',
        'विज्ञान में थ्योरी के साथ प्रैक्टिकल के अंक भी हैं, प्रयोगशाला का काम न छोड़ें।',
        'हर पेपर में लगभग 50% वस्तुनिष्ठ (OMR) प्रश्न।',
        'हिंदी (दिगंत भाग-2) में दिनकर का निबंध "अर्धनारीश्वर" शामिल है।'
      ]}
    },
    {
      id: 'cbse10', badge: 'CBSE',
      en: { t: 'CBSE Class 10', p: [
        'Follow NCERT textbooks fully; most questions are competency based.',
        'Internal assessment carries 20 marks in most subjects.',
        'From 2026, Class 10 has two board exams: the main one (Feb–Mar) and an optional second one (May) to improve scores.'
      ]},
      hi: { t: 'CBSE कक्षा 10', p: [
        'NCERT पुस्तकें पूरी पढ़ें; ज़्यादातर प्रश्न योग्यता-आधारित होते हैं।',
        'अधिकतर विषयों में 20 अंक आंतरिक मूल्यांकन के होते हैं।',
        '2026 से कक्षा 10 की दो बोर्ड परीक्षाएँ: मुख्य (फ़रवरी–मार्च) और अंक सुधारने के लिए वैकल्पिक दूसरी (मई)।'
      ]}
    },
    {
      id: 'cbse12', badge: 'CBSE',
      en: { t: 'CBSE Class 12', p: [
        'NCERT is the base for JEE Main, NEET UG and CUET UG as well.',
        'Practicals and projects carry marks in science and many other subjects.',
        'Plan entrance exams alongside boards: JEE (Jan & Apr), NEET (May), CUET (May–Jun).'
      ]},
      hi: { t: 'CBSE कक्षा 12', p: [
        'JEE मेन, NEET UG और CUET UG की नींव भी NCERT ही है।',
        'विज्ञान और कई विषयों में प्रैक्टिकल/प्रोजेक्ट के अंक होते हैं।',
        'बोर्ड के साथ प्रवेश परीक्षाओं की योजना बनाएँ: JEE (जनवरी व अप्रैल), NEET (मई), CUET (मई–जून)।'
      ]}
    }
  ],

  afterClass: [
    { id: 'a10', en: { t: 'After Class 10', items: [
        'Class 11 in a Bihar +2 school or college: apply on the OFSS portal.',
        'Polytechnic diploma (e.g. Govt. Polytechnic, Barauni): BCECE DCECE (PE) exam.',
        'ITI trades for quick skilled jobs.',
        '1st division in BSEB Matric: claim the ₹10,000 incentive on Medhasoft.'
      ]}, hi: { t: 'कक्षा 10 के बाद', items: [
        'बिहार के +2 स्कूल/कॉलेज में कक्षा 11: OFSS पोर्टल पर आवेदन करें।',
        'पॉलिटेक्निक डिप्लोमा (जैसे राजकीय पॉलिटेक्निक, बरौनी): BCECE की DCECE (PE) परीक्षा।',
        'जल्दी रोज़गार के लिए ITI ट्रेड।',
        'BSEB मैट्रिक में प्रथम श्रेणी: मेधासॉफ्ट पर ₹10,000 प्रोत्साहन राशि लें।'
      ]}},
    { id: 'a12s', en: { t: 'After Class 12 – Science', items: [
        'B.Tech: JEE Main, then Bihar UGEAC counselling (e.g. RRSDCE Begusarai).',
        'MBBS/BDS: NEET UG.',
        'B.Sc. at LNMU colleges such as G.D. College; central universities through CUET UG.',
        'Use the interest-free Student Credit Card (up to ₹4 lakh) for fees.'
      ]}, hi: { t: 'कक्षा 12 के बाद – विज्ञान', items: [
        'B.Tech: JEE मेन, फिर बिहार UGEAC काउंसलिंग (जैसे RRSDCE बेगूसराय)।',
        'MBBS/BDS: NEET UG।',
        'G.D. कॉलेज जैसे LNMU कॉलेजों में B.Sc.; केंद्रीय विश्वविद्यालयों में CUET UG से।',
        'फ़ीस के लिए ब्याज-मुक्त स्टूडेंट क्रेडिट कार्ड (₹4 लाख तक)।'
      ]}},
    { id: 'a12a', en: { t: 'After Class 12 – Arts & Commerce', items: [
        'B.A./B.Com. Honours at G.D., S.K.M., S.B.S.S., A.P.S.M. or R.C.S. College (LNMU).',
        'BBA/BCA, CA Foundation, CLAT (law), CUET UG for central universities.',
        'Free Kushal Yuva Program (KYP) course for computer and communication skills.',
        'Girls: ₹25,000 after Inter and ₹50,000 after graduation (Kanya Utthan).'
      ]}, hi: { t: 'कक्षा 12 के बाद – कला व वाणिज्य', items: [
        'G.D., S.K.M., S.B.S.S., A.P.S.M. या R.C.S. कॉलेज (LNMU) में B.A./B.Com. ऑनर्स।',
        'BBA/BCA, CA फ़ाउंडेशन, CLAT (क़ानून), केंद्रीय विश्वविद्यालयों के लिए CUET UG।',
        'कंप्यूटर व संवाद कौशल के लिए मुफ़्त कुशल युवा कार्यक्रम (KYP)।',
        'छात्राएँ: इंटर के बाद ₹25,000 और स्नातक के बाद ₹50,000 (कन्या उत्थान)।'
      ]}}
  ],

  tips: {
    en: [
      'Make a weekly timetable: 2 subjects a day, with one revision day each week.',
      'Solve the last 5 years of board papers under a timer.',
      'For BSEB, practise OMR objective questions daily: speed matters.',
      'Write answers neatly with headings and diagrams; examiners reward clarity.',
      'Sleep 7–8 hours before the exam. Last-night cramming lowers marks.'
    ],
    hi: [
      'साप्ताहिक समय-सारणी बनाएँ: रोज़ 2 विषय, और हर हफ़्ते एक दिन दोहराव।',
      'पिछले 5 साल के बोर्ड प्रश्नपत्र घड़ी लगाकर हल करें।',
      'BSEB के लिए रोज़ OMR वस्तुनिष्ठ प्रश्नों का अभ्यास करें: गति ज़रूरी है।',
      'उत्तर साफ़ लिखें, शीर्षक और चित्र बनाएँ; परीक्षक स्पष्टता को अंक देते हैं।',
      'परीक्षा से पहले 7–8 घंटे सोएँ। आख़िरी रात रटने से अंक घटते हैं।'
    ]
  },

  checklist: {
    en: ['Admit card (plus a photocopy)', 'Two blue/black pens and a pencil', 'Eraser, sharpener, scale', 'Geometry box (Maths)', 'Transparent water bottle', 'Reach the centre 1 hour early'],
    hi: ['प्रवेश पत्र (और उसकी फ़ोटोकॉपी)', 'दो नीली/काली कलम और पेंसिल', 'रबर, कटर, स्केल', 'ज्यामिति बॉक्स (गणित)', 'पारदर्शी पानी की बोतल', 'केंद्र पर 1 घंटा पहले पहुँचें']
  },

  // ---------- COLLEGES & SCHOOLS ----------
  // type: degree | tech | school ; streams: sci | arts | com | tech
  colleges: [
    { id: 'gd', type: 'degree', streams: ['sci', 'arts', 'com'], url: 'https://www.gdcollegebegusarai.com/',
      en: { n: 'G.D. College, Begusarai', a: 'Constituent college of LNMU, Darbhanga', c: 'B.A., B.Sc., B.Com., PG courses, BCA/BBA', place: 'Begusarai town' },
      hi: { n: 'जी.डी. कॉलेज, बेगूसराय', a: 'ललित नारायण मिथिला विश्वविद्यालय (LNMU), दरभंगा की अंगीभूत इकाई', c: 'B.A., B.Sc., B.Com., स्नातकोत्तर, BCA/BBA', place: 'बेगूसराय शहर' } },
    { id: 'skm', type: 'degree', streams: ['sci', 'arts'], url: 'https://skmcollege.ac.in/', women: true,
      en: { n: 'S.K.M. College (Women), Begusarai', a: 'Constituent women\'s college of LNMU', c: 'B.A. and B.Sc. Honours', place: 'Begusarai town' },
      hi: { n: 'एस.के.एम. कॉलेज (महिला), बेगूसराय', a: 'LNMU का अंगीभूत महिला कॉलेज', c: 'B.A. और B.Sc. ऑनर्स', place: 'बेगूसराय शहर' } },
    { id: 'sbss', type: 'degree', streams: ['sci', 'arts', 'com'], url: 'https://www.sbsscollegebegusarai.com/',
      en: { n: 'S.B.S.S. College, Begusarai', a: 'Constituent college of LNMU', c: 'UG courses in Arts, Science and Commerce', place: 'Begusarai' },
      hi: { n: 'एस.बी.एस.एस. कॉलेज, बेगूसराय', a: 'LNMU की अंगीभूत इकाई', c: 'कला, विज्ञान व वाणिज्य में स्नातक', place: 'बेगूसराय' } },
    { id: 'apsm', type: 'degree', streams: ['sci', 'arts', 'com'], url: 'https://www.collegeadmission.in/college/apsm-college-barauni-1832',
      en: { n: 'A.P.S.M. College, Barauni', a: 'Constituent college of LNMU', c: 'B.A., B.Sc., B.Com.', place: 'Barauni' },
      hi: { n: 'ए.पी.एस.एम. कॉलेज, बरौनी', a: 'LNMU की अंगीभूत इकाई', c: 'B.A., B.Sc., B.Com.', place: 'बरौनी' } },
    { id: 'rcs', type: 'degree', streams: ['sci', 'arts'], url: 'https://www.rcscollegemanjhaul.org/',
      en: { n: 'R.C.S. College, Manjhaul', a: 'Constituent college of LNMU', c: 'UG Honours in Humanities and Sciences', place: 'Manjhaul' },
      hi: { n: 'आर.सी.एस. कॉलेज, मंझौल', a: 'LNMU की अंगीभूत इकाई', c: 'मानविकी व विज्ञान में स्नातक ऑनर्स', place: 'मंझौल' } },
    { id: 'rrsdce', type: 'tech', streams: ['tech', 'sci'], url: 'https://www.rrsdcebgs.ac.in/',
      en: { n: 'Rashtrakavi Ramdhari Singh Dinkar College of Engineering (RRSDCE)', a: 'Govt. of Bihar engineering college, Bihar Engineering University', c: 'B.Tech: admission through JEE Main and UGEAC counselling', place: 'Begusarai' },
      hi: { n: 'राष्ट्रकवि रामधारी सिंह दिनकर अभियंत्रण महाविद्यालय (RRSDCE)', a: 'बिहार सरकार का इंजीनियरिंग कॉलेज, बिहार अभियंत्रण विश्वविद्यालय', c: 'B.Tech: JEE मेन और UGEAC काउंसलिंग से प्रवेश', place: 'बेगूसराय' } },
    { id: 'poly', type: 'tech', streams: ['tech'], url: 'https://www.gpbarauni.ac.in/',
      en: { n: 'Government Polytechnic, Barauni', a: 'State Board of Technical Education, Bihar', c: '3-year engineering diplomas: admission through BCECE DCECE (PE) after Class 10', place: 'Barauni' },
      hi: { n: 'राजकीय पॉलिटेक्निक, बरौनी', a: 'राज्य तकनीकी शिक्षा बोर्ड, बिहार', c: '3 वर्षीय इंजीनियरिंग डिप्लोमा: कक्षा 10 के बाद BCECE DCECE (PE) से प्रवेश', place: 'बरौनी' } },
    { id: 'jnv', type: 'school', streams: ['sci', 'arts', 'com'], url: 'https://school.careers360.com/schools/pm-shri-school-jawahar-navodaya-vidyalaya-begusarai',
      en: { n: 'PM SHRI Jawahar Navodaya Vidyalaya, Begusarai', a: 'CBSE, Navodaya Vidyalaya Samiti (residential)', c: 'Class 6–12; entry mainly through JNVST in Class 6', place: 'Begusarai' },
      hi: { n: 'पीएम श्री जवाहर नवोदय विद्यालय, बेगूसराय', a: 'CBSE, नवोदय विद्यालय समिति (आवासीय)', c: 'कक्षा 6–12; प्रवेश मुख्यतः कक्षा 6 में JNVST से', place: 'बेगूसराय' } },
    { id: 'dav', type: 'school', streams: ['sci', 'com', 'arts'], url: 'https://davbegusarai.com/',
      en: { n: 'D.A.V. Public School, Begusarai', a: 'CBSE', c: 'Class 10 and Class 11–12 (Science, Commerce, Humanities)', place: 'Begusarai' },
      hi: { n: 'डी.ए.वी. पब्लिक स्कूल, बेगूसराय', a: 'CBSE', c: 'कक्षा 10 और 11–12 (विज्ञान, वाणिज्य, मानविकी)', place: 'बेगूसराय' } },
    { id: 'bp', type: 'school', streams: ['sci', 'arts', 'com'], url: 'https://begusarai.idbf.in/703678/bp-high-school-inter-college',
      en: { n: 'B.P. +2 School, Begusarai', a: 'Bihar School Examination Board (BSEB)', c: 'Matric and Inter (I.Sc., I.A., I.Com.)', place: 'Begusarai town' },
      hi: { n: 'बी.पी. +2 विद्यालय, बेगूसराय', a: 'बिहार विद्यालय परीक्षा समिति (BSEB)', c: 'मैट्रिक और इंटर (I.Sc., I.A., I.Com.)', place: 'बेगूसराय शहर' } }
  ],

  // ---------- SCHEMES ----------
  // levels: s10 (passed 10th / in Class 11-12), s12 (passed 12th), ug (in or passed graduation), prelims (cleared civil services prelims)
  // cats: gen, bc, ebc, sc, st
  schemes: [
    { id: 'matric', icon: '🥇', levels: ['s10'], cats: ['gen', 'bc', 'ebc', 'sc', 'st'], gender: 'any', url: 'https://medhasoft.bihar.gov.in/',
      en: { t: 'Mukhyamantri Balak/Balika Protsahan (Matric)', amt: '₹10,000 (1st div) · ₹8,000 (SC/ST 2nd div)', d: 'One-time incentive for passing BSEB Matric in 1st division. SC/ST students who pass in 2nd division get ₹8,000.', how: 'Apply on Medhasoft after the result, with your Matric roll number and an Aadhaar-linked bank account.' },
      hi: { t: 'मुख्यमंत्री बालक/बालिका प्रोत्साहन (मैट्रिक)', amt: '₹10,000 (प्रथम श्रेणी) · ₹8,000 (SC/ST द्वितीय श्रेणी)', d: 'BSEB मैट्रिक प्रथम श्रेणी से पास करने पर एकमुश्त राशि। SC/ST विद्यार्थियों को द्वितीय श्रेणी पर ₹8,000।', how: 'रिज़ल्ट के बाद मेधासॉफ्ट पर मैट्रिक रोल नंबर और आधार से जुड़े बैंक खाते के साथ आवेदन करें।' } },
    { id: 'kanya12', icon: '👧', levels: ['s12'], cats: ['gen', 'bc', 'ebc', 'sc', 'st'], gender: 'f', url: 'https://medhasoft.bihar.gov.in/',
      en: { t: 'Mukhyamantri Kanya Utthan (Inter)', amt: '₹25,000', d: 'For unmarried girls who pass BSEB Intermediate. All categories.', how: 'Apply on Medhasoft when the Inter-pass registration opens.' },
      hi: { t: 'मुख्यमंत्री कन्या उत्थान (इंटर)', amt: '₹25,000', d: 'BSEB इंटर पास अविवाहित छात्राओं के लिए। सभी वर्ग।', how: 'इंटर-उत्तीर्ण पंजीकरण खुलने पर मेधासॉफ्ट पर आवेदन करें।' } },
    { id: 'kanyaug', icon: '🎓', levels: ['ug'], cats: ['gen', 'bc', 'ebc', 'sc', 'st'], gender: 'f', url: 'https://medhasoft.bihar.gov.in/',
      en: { t: 'Mukhyamantri Kanya Utthan (Graduation)', amt: '₹50,000', d: 'For girls who complete graduation from a recognised university in Bihar, married or unmarried.', how: 'Apply on Medhasoft after your graduation result.' },
      hi: { t: 'मुख्यमंत्री कन्या उत्थान (स्नातक)', amt: '₹50,000', d: 'बिहार के मान्यता प्राप्त विश्वविद्यालय से स्नातक पूरा करने वाली छात्राओं के लिए, विवाहित या अविवाहित।', how: 'स्नातक रिज़ल्ट के बाद मेधासॉफ्ट पर आवेदन करें।' } },
    { id: 'pms', icon: '📚', levels: ['s10', 's12', 'ug'], cats: ['bc', 'ebc', 'sc', 'st'], gender: 'any', url: 'https://pmsonline.bihar.gov.in/',
      en: { t: 'Post-Matric Scholarship (Bihar)', amt: 'Fees + maintenance allowance', d: 'For SC, ST, BC and EBC students studying after Class 10 (Inter, ITI, polytechnic, UG, PG). Income limit applies.', how: 'Apply on the PMS portal with caste, income and residence certificates.' },
      hi: { t: 'पोस्ट-मैट्रिक छात्रवृत्ति (बिहार)', amt: 'शुल्क + निर्वाह भत्ता', d: 'कक्षा 10 के बाद पढ़ रहे SC, ST, BC और EBC विद्यार्थियों के लिए (इंटर, ITI, पॉलिटेक्निक, स्नातक, स्नातकोत्तर)। आय सीमा लागू।', how: 'जाति, आय और निवास प्रमाण पत्र के साथ PMS पोर्टल पर आवेदन करें।' } },
    { id: 'bscc', icon: '💳', levels: ['s12', 'ug'], cats: ['gen', 'bc', 'ebc', 'sc', 'st'], gender: 'any', url: 'https://www.7nishchay-yuvaupmission.bihar.gov.in/',
      en: { t: 'Bihar Student Credit Card', amt: 'Loan up to ₹4 lakh · 0% interest', d: 'Education loan without collateral for 12th-pass students for higher studies. Interest-free for everyone since September 2025, with longer repayment time.', how: 'Register on the 7 Nishchay portal, then verify documents at DRCC Begusarai.' },
      hi: { t: 'बिहार स्टूडेंट क्रेडिट कार्ड', amt: '₹4 लाख तक ऋण · 0% ब्याज', d: '12वीं पास विद्यार्थियों को उच्च शिक्षा के लिए बिना गारंटी शिक्षा ऋण। सितंबर 2025 से सभी के लिए ब्याज-मुक्त, चुकाने का समय भी बढ़ा।', how: '7 निश्चय पोर्टल पर पंजीकरण करें, फिर DRCC बेगूसराय में दस्तावेज़ सत्यापन कराएँ।' } },
    { id: 'kyp', icon: '💻', levels: ['s10', 's12', 'ug'], cats: ['gen', 'bc', 'ebc', 'sc', 'st'], gender: 'any', url: 'https://www.7nishchay-yuvaupmission.bihar.gov.in/',
      en: { t: 'Kushal Yuva Program (KYP)', amt: 'Free training', d: 'Free course in basic computers, Hindi/English communication and soft skills at KYP centres in every block.', how: 'Register on the 7 Nishchay portal and choose a KYP centre near you.' },
      hi: { t: 'कुशल युवा कार्यक्रम (KYP)', amt: 'मुफ़्त प्रशिक्षण', d: 'हर प्रखंड के KYP केंद्र पर बेसिक कंप्यूटर, हिंदी/अंग्रेज़ी संवाद और सॉफ्ट स्किल का मुफ़्त कोर्स।', how: '7 निश्चय पोर्टल पर पंजीकरण कर नज़दीकी KYP केंद्र चुनें।' } },
    { id: 'sha', icon: '🪙', levels: ['s12', 'ug'], cats: ['gen', 'bc', 'ebc', 'sc', 'st'], gender: 'any', url: 'https://www.7nishchay-yuvaupmission.bihar.gov.in/',
      en: { t: 'Swayam Sahayata Bhatta', amt: '₹1,000 / month (up to 2 years)', d: 'For job-seeking youth aged 20–25 who have passed 12th and are not studying further.', how: 'Register on the 7 Nishchay portal and verify at DRCC Begusarai.' },
      hi: { t: 'स्वयं सहायता भत्ता', amt: '₹1,000 / माह (2 वर्ष तक)', d: '12वीं पास, आगे न पढ़ रहे, 20–25 वर्ष के रोज़गार खोज रहे युवाओं के लिए।', how: '7 निश्चय पोर्टल पर पंजीकरण कर DRCC बेगूसराय में सत्यापन कराएँ।' } },
    { id: 'civil', icon: '🏛️', levels: ['prelims'], cats: ['ebc', 'sc', 'st'], womenAnyCat: true, gender: 'any', url: 'https://www.myscheme.gov.in/search?q=civil%20seva%20protsahan',
      en: { t: 'Mukhyamantri Civil Seva Protsahan', amt: '₹50,000 (BPSC Prelims) · ₹1,00,000 (UPSC Prelims)', d: 'For Bihar residents from SC, ST and EBC categories, and women of every category, who clear the BPSC or UPSC preliminary exam.', how: 'Apply online on your category\'s department portal soon after the Prelims result.' },
      hi: { t: 'मुख्यमंत्री सिविल सेवा प्रोत्साहन', amt: '₹50,000 (BPSC प्रारंभिक) · ₹1,00,000 (UPSC प्रारंभिक)', d: 'BPSC या UPSC प्रारंभिक परीक्षा पास करने वाले बिहार के SC, ST, EBC वर्ग के अभ्यर्थी, और सभी वर्ग की महिलाएँ।', how: 'प्रारंभिक परीक्षा के रिज़ल्ट के बाद अपने वर्ग के विभागीय पोर्टल पर ऑनलाइन आवेदन करें।' } }
  ],

  // ---------- HERITAGE ----------
  heritage: [
    { id: 'dinkar', icon: '✒️', src: 'https://en.wikipedia.org/wiki/Ramdhari_Singh_Dinkar',
      en: { tag: 'Literature', t: 'Rashtrakavi Ramdhari Singh "Dinkar" (1908–1974)', s: 'Born on 23 September 1908 in Simaria, Begusarai. Known as the poet of courage (veer ras) and the national spirit.', f: [
        'Major works: Rashmirathi, Kurukshetra, Urvashi, Parshuram Ki Pratiksha, Hunkar.',
        'Jnanpith Award (1972) for "Urvashi"; Sahitya Akademi Award (1959) for "Sanskriti Ke Char Adhyay"; Padma Bhushan (1959).',
        'Served as a Rajya Sabha member and as Vice-Chancellor of Bhagalpur University.',
        'BSEB syllabus: "Janatantra Ka Janm" (Class 10, Godhuli) and "Ardhanarishwar" (Class 12, Digant).'
      ]},
      hi: { tag: 'साहित्य', t: 'राष्ट्रकवि रामधारी सिंह "दिनकर" (1908–1974)', s: '23 सितंबर 1908 को सिमरिया, बेगूसराय में जन्म। वीर रस और राष्ट्रीय चेतना के कवि।', f: [
        'प्रमुख रचनाएँ: रश्मिरथी, कुरुक्षेत्र, उर्वशी, परशुराम की प्रतीक्षा, हुंकार।',
        '"उर्वशी" के लिए ज्ञानपीठ पुरस्कार (1972); "संस्कृति के चार अध्याय" के लिए साहित्य अकादमी पुरस्कार (1959); पद्म भूषण (1959)।',
        'राज्यसभा सदस्य और भागलपुर विश्वविद्यालय के कुलपति रहे।',
        'BSEB पाठ्यक्रम: "जनतंत्र का जन्म" (कक्षा 10, गोधूलि) और "अर्धनारीश्वर" (कक्षा 12, दिगंत)।'
      ]} },
    { id: 'kanwar', icon: '🦢', src: 'https://en.wikipedia.org/wiki/Kanwar_Lake_Bird_Sanctuary',
      en: { tag: 'Geography & Ecology', t: 'Kanwar Lake (Kabar Taal)', s: 'Near Manjhaul. Asia\'s largest freshwater oxbow lake, and Bihar\'s first Ramsar site (2020).', f: [
        'An oxbow lake: formed when a bend of the Burhi Gandak river was cut off.',
        'Declared a bird sanctuary in 1989.',
        'Winter home for many migratory birds from Central Asia.',
        'Good case study for Class 10–12 Geography and Biology (wetlands, biodiversity).'
      ]},
      hi: { tag: 'भूगोल व पर्यावरण', t: 'काँवर झील (कावर ताल)', s: 'मंझौल के पास। एशिया की सबसे बड़ी मीठे पानी की गोखुर झील और बिहार का पहला रामसर स्थल (2020)।', f: [
        'गोखुर झील: बूढ़ी गंडक नदी का एक मोड़ कटकर अलग होने से बनी।',
        '1989 में पक्षी अभयारण्य घोषित।',
        'मध्य एशिया से आने वाले कई प्रवासी पक्षियों का शीतकालीन घर।',
        'कक्षा 10–12 भूगोल व जीवविज्ञान के लिए अच्छा उदाहरण (आर्द्रभूमि, जैव विविधता)।'
      ]} },
    { id: 'rssharma', icon: '📜', src: 'https://en.wikipedia.org/wiki/Ram_Sharan_Sharma',
      en: { tag: 'History', t: 'Prof. Ram Sharan Sharma (1919–2011)', s: 'Historian of ancient India, born in Barauni, Begusarai.', f: [
        'Founding Chairman of the Indian Council of Historical Research (ICHR).',
        'Wrote the old NCERT "Ancient India" textbook and "India\'s Ancient Past".',
        'Taught at Patna University and Delhi University.'
      ]},
      hi: { tag: 'इतिहास', t: 'प्रो. राम शरण शर्मा (1919–2011)', s: 'प्राचीन भारत के इतिहासकार, बरौनी, बेगूसराय में जन्म।', f: [
        'भारतीय इतिहास अनुसंधान परिषद (ICHR) के संस्थापक अध्यक्ष।',
        'पुरानी NCERT "प्राचीन भारत" और "India\'s Ancient Past" के लेखक।',
        'पटना विश्वविद्यालय और दिल्ली विश्वविद्यालय में अध्यापन।'
      ]} },
    { id: 'barauni', icon: '🏭', src: 'https://en.wikipedia.org/wiki/Barauni_Refinery',
      en: { tag: 'Economy', t: 'Barauni industrial area & Rajendra Setu', s: 'Begusarai is a major industrial centre of North Bihar.', f: [
        'Barauni Refinery of Indian Oil (IOCL), built with Soviet help and commissioned in the 1960s.',
        'Also home to the Barauni thermal power station and the HURL fertiliser plant.',
        'Rajendra Setu (1959) links Simaria with Mokama across the Ganga: a rail-cum-road bridge joining North and South Bihar.'
      ]},
      hi: { tag: 'अर्थव्यवस्था', t: 'बरौनी औद्योगिक क्षेत्र और राजेंद्र सेतु', s: 'बेगूसराय उत्तर बिहार का प्रमुख औद्योगिक केंद्र है।', f: [
        'इंडियन ऑयल (IOCL) की बरौनी रिफ़ाइनरी, सोवियत सहायता से बनी, 1960 के दशक में शुरू।',
        'बरौनी ताप विद्युत केंद्र और HURL उर्वरक कारख़ाना भी यहीं।',
        'राजेंद्र सेतु (1959) गंगा पर सिमरिया को मोकामा से जोड़ता है: उत्तर और दक्षिण बिहार को जोड़ने वाला रेल-सह-सड़क पुल।'
      ]} },
    { id: 'district', icon: '🗺️', src: 'https://begusarai.nic.in/about-district/',
      en: { tag: 'Polity (exam GK)', t: 'Begusarai district at a glance', s: 'Facts often asked in BPSC, BSSC and Bihar Police exams.', f: [
        'Became a separate district in 1972 (earlier part of Munger district); in Munger division.',
        'Area 1,918 km²; population 29.7 lakh (Census 2011).',
        '5 subdivisions: Begusarai Sadar, Manjhaul, Ballia, Bakhri, Teghra. 18 blocks.',
        'Rivers: Ganga (south), Burhi Gandak, Balan, Bainti.'
      ]},
      hi: { tag: 'राजव्यवस्था (परीक्षा GK)', t: 'बेगूसराय ज़िला एक नज़र में', s: 'BPSC, BSSC और बिहार पुलिस परीक्षाओं में पूछे जाने वाले तथ्य।', f: [
        '1972 में अलग ज़िला बना (पहले मुंगेर ज़िले का हिस्सा); मुंगेर प्रमंडल में।',
        'क्षेत्रफल 1,918 वर्ग किमी; जनसंख्या 29.7 लाख (जनगणना 2011)।',
        '5 अनुमंडल: बेगूसराय सदर, मंझौल, बलिया, बखरी, तेघड़ा। 18 प्रखंड।',
        'नदियाँ: गंगा (दक्षिण), बूढ़ी गंडक, बलान, बैंती।'
      ]} },
    { id: 'simaria', icon: '🛕', src: 'https://en.wikipedia.org/wiki/Simaria',
      en: { tag: 'Culture', t: 'Simaria Dham & Kalpvas Mela', s: 'A holy Ganga ghat in Begusarai and Dinkar\'s birthplace.', f: [
        'The month-long Kartik Kalpvas fair draws pilgrims from Bihar and Nepal.',
        'Simaria Dham hosted the Ardh Kumbh in 2017.',
        'Begusarai lies where Mithila meets the Ganga plains, which is reflected in its language and festivals.'
      ]},
      hi: { tag: 'संस्कृति', t: 'सिमरिया धाम और कल्पवास मेला', s: 'बेगूसराय का पवित्र गंगा घाट और दिनकर की जन्मभूमि।', f: [
        'महीने भर के कार्तिक कल्पवास मेले में बिहार और नेपाल से श्रद्धालु आते हैं।',
        '2017 में सिमरिया धाम में अर्धकुंभ हुआ।',
        'बेगूसराय मिथिला और गंगा के मैदान के मिलन स्थल पर है, जो इसकी भाषा और पर्वों में दिखता है।'
      ]} }
  ],

  // ---------- QUIZ (10 drawn at random each round) ----------
  quiz: [
    { a: 1, en: { q: 'In which village of Begusarai was Ramdhari Singh "Dinkar" born?', o: ['Manjhaul', 'Simaria', 'Teghra', 'Bakhri'] }, hi: { q: 'रामधारी सिंह "दिनकर" का जन्म बेगूसराय के किस गाँव में हुआ?', o: ['मंझौल', 'सिमरिया', 'तेघड़ा', 'बखरी'] } },
    { a: 1, en: { q: 'Dinkar received the Jnanpith Award (1972) for which work?', o: ['Rashmirathi', 'Urvashi', 'Kurukshetra', 'Hunkar'] }, hi: { q: 'दिनकर को ज्ञानपीठ पुरस्कार (1972) किस रचना के लिए मिला?', o: ['रश्मिरथी', 'उर्वशी', 'कुरुक्षेत्र', 'हुंकार'] } },
    { a: 2, en: { q: 'Dinkar\'s Sahitya Akademi Award (1959) was for which book?', o: ['Rashmirathi', 'Hunkar', 'Sanskriti Ke Char Adhyay', 'Renuka'] }, hi: { q: 'दिनकर को साहित्य अकादमी पुरस्कार (1959) किस पुस्तक के लिए मिला?', o: ['रश्मिरथी', 'हुंकार', 'संस्कृति के चार अध्याय', 'रेणुका'] } },
    { a: 0, en: { q: 'Which Dinkar essay is in BSEB Class 12 Hindi (Digant)?', o: ['Ardhanarishwar', 'Shiksha', 'Batcheet', 'Pragati Aur Samaj'] }, hi: { q: 'BSEB कक्षा 12 हिंदी (दिगंत) में दिनकर का कौन-सा निबंध है?', o: ['अर्धनारीश्वर', 'शिक्षा', 'बातचीत', 'प्रगति और समाज'] } },
    { a: 2, en: { q: 'Kanwar Lake became Bihar\'s first Ramsar site in which year?', o: ['1989', '2005', '2020', '2023'] }, hi: { q: 'काँवर झील किस वर्ष बिहार का पहला रामसर स्थल बनी?', o: ['1989', '2005', '2020', '2023'] } },
    { a: 3, en: { q: 'Kanwar Lake is an oxbow lake formed by which river?', o: ['Kosi', 'Son', 'Gandak', 'Burhi Gandak'] }, hi: { q: 'काँवर झील किस नदी से बनी गोखुर झील है?', o: ['कोसी', 'सोन', 'गंडक', 'बूढ़ी गंडक'] } },
    { a: 2, en: { q: 'In which year did Begusarai become a separate district?', o: ['1947', '1960', '1972', '2000'] }, hi: { q: 'बेगूसराय किस वर्ष अलग ज़िला बना?', o: ['1947', '1960', '1972', '2000'] } },
    { a: 1, en: { q: 'Begusarai was earlier a part of which district?', o: ['Darbhanga', 'Munger', 'Samastipur', 'Patna'] }, hi: { q: 'बेगूसराय पहले किस ज़िले का हिस्सा था?', o: ['दरभंगा', 'मुंगेर', 'समस्तीपुर', 'पटना'] } },
    { a: 0, en: { q: 'How many subdivisions does Begusarai district have?', o: ['5', '3', '7', '18'] }, hi: { q: 'बेगूसराय ज़िले में कितने अनुमंडल हैं?', o: ['5', '3', '7', '18'] } },
    { a: 3, en: { q: 'How many blocks does Begusarai district have?', o: ['5', '12', '15', '18'] }, hi: { q: 'बेगूसराय ज़िले में कितने प्रखंड हैं?', o: ['5', '12', '15', '18'] } },
    { a: 0, en: { q: 'Historian R.S. Sharma, born in Barauni, was the founding chairman of which body?', o: ['ICHR', 'UGC', 'NCERT', 'ICSSR'] }, hi: { q: 'बरौनी में जन्मे इतिहासकार आर.एस. शर्मा किस संस्था के संस्थापक अध्यक्ष थे?', o: ['ICHR', 'UGC', 'NCERT', 'ICSSR'] } },
    { a: 1, en: { q: 'Barauni Refinery belongs to which company?', o: ['BPCL', 'Indian Oil (IOCL)', 'HPCL', 'ONGC'] }, hi: { q: 'बरौनी रिफ़ाइनरी किस कंपनी की है?', o: ['BPCL', 'इंडियन ऑयल (IOCL)', 'HPCL', 'ONGC'] } },
    { a: 2, en: { q: 'Rajendra Setu connects Simaria (Begusarai) with which town?', o: ['Patna', 'Bhagalpur', 'Mokama', 'Munger'] }, hi: { q: 'राजेंद्र सेतु सिमरिया (बेगूसराय) को किस शहर से जोड़ता है?', o: ['पटना', 'भागलपुर', 'मोकामा', 'मुंगेर'] } },
    { a: 2, en: { q: 'Maximum loan under the Bihar Student Credit Card?', o: ['₹1 lakh', '₹2 lakh', '₹4 lakh', '₹10 lakh'] }, hi: { q: 'बिहार स्टूडेंट क्रेडिट कार्ड में अधिकतम ऋण कितना है?', o: ['₹1 लाख', '₹2 लाख', '₹4 लाख', '₹10 लाख'] } },
    { a: 0, en: { q: 'Interest on the Bihar Student Credit Card loan since September 2025?', o: ['0% (interest-free)', '1%', '4%', '7%'] }, hi: { q: 'सितंबर 2025 से बिहार स्टूडेंट क्रेडिट कार्ड ऋण पर ब्याज?', o: ['0% (ब्याज-मुक्त)', '1%', '4%', '7%'] } },
    { a: 3, en: { q: 'Kanya Utthan amount for girls who complete graduation?', o: ['₹10,000', '₹25,000', '₹30,000', '₹50,000'] }, hi: { q: 'स्नातक पूरा करने वाली छात्राओं को कन्या उत्थान में कितनी राशि?', o: ['₹10,000', '₹25,000', '₹30,000', '₹50,000'] } },
    { a: 1, en: { q: 'Incentive for passing BSEB Matric in 1st division?', o: ['₹5,000', '₹10,000', '₹25,000', '₹50,000'] }, hi: { q: 'BSEB मैट्रिक प्रथम श्रेणी से पास करने पर प्रोत्साहन राशि?', o: ['₹5,000', '₹10,000', '₹25,000', '₹50,000'] } },
    { a: 1, en: { q: 'Roughly what share of a BSEB board paper is objective (OMR)?', o: ['25%', '50%', '75%', '100%'] }, hi: { q: 'BSEB बोर्ड पेपर का लगभग कितना हिस्सा वस्तुनिष्ठ (OMR) होता है?', o: ['25%', '50%', '75%', '100%'] } },
    { a: 2, en: { q: 'Area of Begusarai district?', o: ['918 km²', '1,500 km²', '1,918 km²', '3,918 km²'] }, hi: { q: 'बेगूसराय ज़िले का क्षेत्रफल?', o: ['918 वर्ग किमी', '1,500 वर्ग किमी', '1,918 वर्ग किमी', '3,918 वर्ग किमी'] } },
    { a: 0, en: { q: 'Which river forms the southern boundary of Begusarai?', o: ['Ganga', 'Kosi', 'Bagmati', 'Son'] }, hi: { q: 'बेगूसराय की दक्षिणी सीमा कौन-सी नदी बनाती है?', o: ['गंगा', 'कोसी', 'बागमती', 'सोन'] } }
  ]
};
