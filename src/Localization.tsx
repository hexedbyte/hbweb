import LocalizedStrings from 'react-localization';

export const _ = new LocalizedStrings({
    en: {
        // header
        title1: 'Red Team Operator',
        title2: 'Software Developer',
        introTitle: 'What is a red team operator?',
        intro: 'A red team operator is a cybersecurity expert who mimics real attacks on an organization\'s systems to uncover vulnerabilities.Unlike blue team defenders, they take on the role of adversaries, using advanced methods to find weaknesses.They function as ethical hackers, aiding organizations in fortifying their defenses by revealing security gaps before actual threats exploit them.',
        location: 'Munich, Germany',
        featured: 'Featured Achievements',

        // common
        certified: 'Certified',
        pentest: 'Penetration Testing',
        subcontractor: 'Subcontractor',
        loctime: 'Location / Time',
        title: 'Title',
        company: 'Company',
        contact: 'Contact',

        // htb
        htbRanking: 'HTB Rank',
        htbRank: 'Guru',
        htbRankDetails: '2nd highest rank',
        htbTop: 'TOP 25',
        htbTopDetail: '2023, 22nd of 502 hackers',
        htbGlobal: 'HTB Global Ranking',
        htbGlobalRankSuffix: 'nd',
        htbDante: 'Dante',

        // synack
        synackTitle: '9/10 points',
        synackSubtitle: 'Synack Red Teamer',
        synackDetails: 'Web & Host Attacks',

        // zeropoint
        zeropointTitle: 'Red Team Ops',
        zeropointDetails: 'Zero Point Security',

        // turk
        turkGov: 'State Affairs',
        turkGovDetails: 'Government & Ministries',
        turkPolice: 'Homicide Department',
        turkOzel: 'Special Operations',

        // portfolio
        portfolioTitle: 'Portfolio',
        portfolio: [
            'Global application security and strategy, penetration testing, security patches',
            'MOVEit Transfer cyber attack research and analysis',
            'Central Bank Digital Currencies (CBDC)',
            'Ghana CBDC pilot project',
            'Thailand CBDC pilot project',
            'WebGL, 3D, and VR customizers for the auto industry (Porsche, BMW, Audi, DS, Toyota, Hyundai)',
            'Airbus Aircraft 3D Designer',
            'HDI Insurance Coach Assistant Software',
            'Chemondis - B2B Marketplace for Chemicals',
            'The World\'s First Mixed Reality TV Show',
            'Pharmaceutical Track and Trace System of Türkiye (ITS) subcontractor',
            'KYKNET Subcontractor / Türkiye\'s state-backed student loans and residences management system',
            'Türkiye Police Special Operation Department Subcontractor / All-terrain vehicles security and performance patches',
            'Turksat Tsunami Subcontractor / Overall management system to digitize Turksat\'s cable infrastructure assets',
            'Police Vehicle Chase Simulator with 3D Gaming & Hydraulic 6DOF Robot',
            'Mobile Military Hospital Pilot Project',
            'Software Development for Türkiye Land Registry and Cadastre',
            'Software Development for The Grand National Assembly of Türkiye',
            'Automatic Criminal Denouncer in Hotel/Motel Entries',
            'Healthcare Applications with Kinect and Unity3D for Elderly',
            'PlayStation 1 Emulator for Intel Mobile Internet Devices',
            'Official Intel Success Story',

            'Autobahn autopilot for trucks with robust lane detection and ML in Euro Truck Simulator 2',
            'Natural language processor with Google AI services, Raspberry PI and Go language',
            'Microjob language learning video game for PC and mobile with VR capabilities',
            'NKCell: Hack-and-slash VR game',
        ],

        // work
        workexpTitle: 'Work Experience',
        job: 'Title / Company',
        workexp: [
            {
                company: 'Schaeffler Group',
                companyInfo: 'A German manufacturer of rolling element bearings for automotive, aerospace and industrial uses',
                link: 'https://www.schaeffler.com/',
                job: 'Application Security Expert',
                start: '2023',
                end: '',
                location: 'Regensburg, Germany',
                flag: 'DE',
            },
            {
                company: 'Giesecke+Devrient',
                companyInfo: 'A German company headquartered in Munich that provides banknote and securities printing, smart cards, and cash handling systems',
                link: 'https://www.gi-de.com/',
                job: 'Cyber Security Expert',
                start: '2022',
                end: '2022',
                location: 'Munich, Germany',
                flag: 'DE',
            },
            {
                company: 'Synack',
                companyInfo: 'A crowdsourced network of white-hat hackers to find exploitable vulnerabilities and a SaaS platform enabled by AI and machine learning to identify exploitable vulnerabilities',
                link: 'https://www.synack.com/',
                job: 'Security Researcher',
                start: '2021',
                end: '2022',
                location: '(Remote), USA',
                flag: 'US',
            },
            {
                company: 'Dassault Systemes',
                companyInfo: 'A French multinational software corporation which develops software for 3D product design, simulation, manufacturing and other 3D related products',
                link: 'https://www.3ds.com/',
                job: 'Software Services Manager',
                start: '2019',
                end: '2022',
                location: 'Munich, Germany',
                flag: 'DE',
            },
            {
                company: 'KI Labs',
                companyInfo: 'Co-founding, angel-investing and building digital solutions for clients, up to building full-fledged companies',
                link: 'https://kigroup.de/',
                job: 'Technical Lead',
                start: '2017',
                end: '2019',
                location: 'Munich, Germany',
                flag: 'DE',
            },
            {
                company: 'Pixotope',
                companyInfo: 'In the business of democratizing virtual production and empowering content creators with our award-winning accessible solutions that enable boundary-pushing immersive storytelling',
                link: 'https://www.pixotope.com/',
                job: 'Senior Software Developer',
                start: '2017',
                end: '2017',
                location: 'Oslo, Norway',
                flag: 'NO',
            },
            {
                company: 'Podoces Technology',
                companyInfo: 'Software subcontractor of the projects from Turkish government, ministries and police departments',
                link: '',
                job: 'Founder & CEO',
                start: '2011',
                end: '2016',
                location: 'Ankara, Türkiye',
                flag: 'TR',
            },
            {
                company: 'Bilisim Inovasyon',
                companyInfo: 'Software contractor of the projects from Turkish ministries',
                link: '',
                job: 'Software Developer',
                start: '2009',
                end: '2012',
                location: 'Ankara, Türkiye',
                flag: 'TR',
            },
            {
                company: 'Intel',
                companyInfo: 'An American multinational corporation and technology company',
                link: 'https://www.intel.com/',
                job: 'Junior Software Developer',
                start: '2007',
                end: '2009',
                location: 'Ankara, Türkiye',
                flag: 'TR',
            },
        ],

        // references
        referencesTitle: 'References',
        reference: 'Reference',
        references: [
            {
                name: 'Martin Herrmann',
                title: 'Global CyberSec Team Lead',
                company: 'Schaeffler',
                contact: 'martin.herrmann@vitesco.com',
            },
            {
                name: 'Raoul Herborg',
                title: 'Managing Director',
                company: 'Giesecke+Devrient',
                contact: 'raoul.herborg@gi-de.com',
            },
            {
                name: 'Johannes Forster',
                title: 'CFO',
                company: 'Giesecke+Devrient',
                contact: 'johannes.forster@gi-de.com',
            },
            {
                name: 'Tobias Ilse',
                title: 'Sr. Manager',
                company: 'Dassault Systems',
                contact: 'tobias.ilse@3ds.com',
            },
            {
                name: 'Adem Ali Yilmaz',
                title: 'Managing Director',
                company: 'Tiga',
                contact: 'info@tiga.com.tr',
            }
        ],

        // education
        educationTitle: 'Education',
        institution: 'Institution',
        faculty: 'Faculty / Branch',
        education: [
            {
                name: 'Hacettepe University',
                dep: 'Bachelor of Science / Statistics',
                notes: 'Ankara, 2006 - 2016',
            },
            {
                name: 'Middle East Technical University',
                dep: 'Entrepreneurship',
                notes: 'Ankara, 2008',
            },
            {
                name: 'Ozyegin University',
                dep: 'Entrepreneurship',
                notes: 'Istanbul, 2007',
            },
        ],

        // languages
        languagesTitle: 'Languages',
        languages: [
            {
                label: 'English',
                rank: 1,
            },
            {
                label: 'Turkish',
                rank: 0,
            },
            {
                label: 'German',
                rank: 3,
            }
        ],
        languageRanks: ["Native", "Fluent", "Intermediate", "Beginner",],

        // private
        privateTitle: 'Private Life',
        private: [
            'Super-sport motorcycle rider',
            'Camping and remote work with a fully equipped and online camper',
            'Cooking',
            'Open source experiments and contributions',
        ]
    },
});