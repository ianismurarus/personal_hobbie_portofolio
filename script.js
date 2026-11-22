document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const langToggle = document.getElementById('langToggle');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const yearSpan = document.getElementById('currentYear');

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // =========================================================
    // 1. DICTIONAR BILINGV (EN DEFAULT / RO)
    // =========================================================
    const translations = {
        en: {
            'page.title.home': 'Ianis Muraruș | Electric Guitar Portfolio',
            'page.title.chords': 'Chords & Rhythm - Ianis Muraruș',
            'page.title.theory': 'Music Theory - Ianis Muraruș',
            'page.title.practice': 'Practical Exercises - Ianis Muraruș',
            'page.title.live': 'Live Performance - Ianis Muraruș',

            'nav.skills': 'Skills',
            'nav.testimonial': 'Testimonial',
            'nav.email': 'E-mail',

            'hero.badge': 'ELECTRIC GUITAR • PERSONAL ARCHIVE',
            'hero.title': 'Hi, I\'m <span class="gradient-text">Ianis</span> 🤘',
            'hero.p1': 'For me, the guitar is much more than a musical instrument — it is the way I express my creativity, discipline, and passion for music. This personal bibliography brings together experiences, knowledge, and resources gathered over time, aiming to share practical insights into studying the electric guitar.',
            'hero.p2': 'Here you will find resources covering technique, rhythm, music theory, practical exercises, and developing a signature style. This website reflects both my growth as a musician and my desire to turn a passion for guitar into an educational and inspiring space.',
            'hero.btn.skills': 'Skills',
            'hero.btn.testimonial': 'Testimonial',
            'hero.btn.contact': 'Contact Me',
            'tuner.title': 'Standard Tuning (Click for tone)',
            'portrait.tag': 'Live Session • Electric Guitar',

            'skills.eyebrow': '01 // CURRICULUM & TECHNIQUE',
            'skills.heading': 'Skills',
            'skills.intro': 'Through consistent study of the electric guitar, I have developed both my technical execution and my theoretical understanding of music. The experience gained along the way has helped me blend practice, rhythm, and expressiveness in a balanced way, constantly focusing on growth and refinement.',

            'card1.title': 'Chords & Rhythm',
            'card1.desc': 'Harmony, chord progressions, strumming, and tight rhythmic timing.',
            'card2.title': 'Music Theory',
            'card2.desc': 'Scales, modes, intervals, and the harmonic structure of compositions.',
            'card3.title': 'Practical Exercises',
            'card3.desc': 'Dexterity, speed, arpeggios, alternate picking, and muscle memory.',
            'card4.title': 'Live Performance',
            'card4.desc': 'Stage presence, concert dynamics, and real-time audience connection.',
            'card.explore': 'Explore module',

            'test.eyebrow': '02 // PROFILE & VISION',
            'test.heading': 'Testimonial',
            'test.role': '19 y/o, student at Politehnica University of Timișoara, Faculty of Automation and Computers',
            'test.body': 'Music isn\'t just about notes and chords — it\'s about emotion, discipline, and authenticity. I strive to turn every performance into a memorable experience, combining carefully built technique with a natural and expressive stage presence. My passion for guitar and live performance is reflected both in how I play and in how I inspire the people around me. Every appearance on stage delivers energy, confidence, and genuine dedication to music.',
            'test.cta': 'Watch video archive 🎸',

            'contact.eyebrow': '03 // COLLABORATIONS & LESSONS',
            'contact.heading': 'Contact',
            'contact.sub': 'Let\'s talk about music',
            'contact.desc': 'If you\'d like to collaborate, discuss guitar lessons, live events, or musical projects, feel free to reach out anytime using the form alongside. I\'m open to both artistic collaborations and opportunities to share my passion for music and live performance. I\'ll get back to you as soon as possible.',
            'form.name': 'Name',
            'form.name.ph': 'e.g. Alex Carter',
            'form.email': 'Email',
            'form.email.ph': 'you@example.com',
            'form.message': 'Message',
            'form.message.ph': 'Tell me about your project or question...',
            'form.submit': 'Send message',

            'footer.copy': 'Built with passion for Electric Guitar & Code.',
            'footer.home': 'Home',
            'footer.chords': 'Chords',
            'footer.theory': 'Theory',
            'footer.practice': 'Practice',
            'footer.live': 'Live',

            'sub.back': 'Back to Skills',
            'sub.all': 'All skills',
            'sub.home': 'Back to home',

            'chords.eyebrow': 'MODULE 01 // HARMONY & GROOVE',
            'chords.title': '🎸 Chords & Rhythm',
            'chords.h2': 'About Chords & Rhythm',
            'chords.p1': 'Chords and rhythm are the foundation of every musical composition. By mastering these elements, I have developed a deep understanding of musical structure and how memorable songs are built.',
            'chords.p2': 'Rhythm is the pulse of music, while chords provide harmony and depth. Together, they create a solid base on which any authentic and expressive performance can stand. I\'ve worked extensively to refine my accuracy and fluidity when playing chords, ensuring smooth transitions and steady timing.',
            'chords.p3': 'This section shows how theoretical concepts translate into hands-on playing, demonstrating their versatility across various musical genres and styles. Every technique showcased here is the result of dedicated practice and an endless passion for the guitar.',
            'chords.list.h2': 'What You\'ll Learn',
            'chords.li1': 'Core shapes and voicings of major and minor chords',
            'chords.li2': 'Smooth, clean transitions between chords',
            'chords.li3': 'Rhythm patterns across diverse musical genres',
            'chords.li4': 'Strumming and picking techniques',
            'chords.li5': 'Chord-based songwriting fundamentals',
            'chords.next': 'Next: Music Theory',

            'theory.eyebrow': 'MODULE 02 // STRUCTURE & HARMONY',
            'theory.title': '🎵 Music Theory',
            'theory.h2': 'About Music Theory',
            'theory.p1': 'Music theory is the language musicians use to communicate. It allows us to understand the structure, harmony, and progressions that make a piece of music sound cohesive. Through in-depth study of theory, I have gained the ability to write and perform music with much greater clarity.',
            'theory.p2': 'Scales, intervals, and chord progressions are the building blocks of any composition. I have learned how to analyze songs to uncover the patterns that make them effective, and how to apply these concepts to my own musical ideas.',
            'theory.p3': 'Understanding music theory doesn\'t limit creativity — on the contrary, it sets it free. With a solid theoretical foundation, I have far more freedom to experiment and make deliberate, intentional musical choices.',
            'theory.list.h2': 'Core Principles Covered',
            'theory.li1': 'Musical notes and standard notation',
            'theory.li2': 'Scales and musical modes',
            'theory.li3': 'Intervals and note relationships',
            'theory.li4': 'Chord progressions and cadences',
            'theory.li5': 'Rhythm, meter, and time signatures',
            'theory.prev': 'Previous: Chords & Rhythm',
            'theory.next': 'Next: Practical Exercises',

            'practice.eyebrow': 'MODULE 03 // TECHNIQUE & PRECISION',
            'practice.title': '🎧 Practical Exercises',
            'practice.h2': 'About Practical Exercises',
            'practice.p1': '“Practice makes perfect” — an adage that rings truer than ever when studying the guitar. Structured exercises are the backbone of developing solid technique and clean execution. I have dedicated thousands of hours to focused drills that turned raw passion into reliable skill.',
            'practice.p2': 'Each exercise is designed to target a specific aspect of playing: dexterity, speed, accuracy, and endurance. Through deliberate, concentrated repetition, I\'ve built a foundation that allows me to tackle complex pieces with confidence and ease.',
            'practice.p3': 'It isn\'t just about playing fast or pulling off flashy runs — it\'s about building muscle memory, musical reflexes, and an intuitive connection with the instrument. The result is an authentic, expressive performance that flows naturally.',
            'practice.list.h2': 'Key Drills & Focus Areas',
            'practice.li1': 'Scales and arpeggios',
            'practice.li2': 'Speed and precision drills',
            'practice.li3': 'Building hand stamina and endurance',
            'practice.li4': 'Advanced picking techniques',
            'practice.li5': 'Improvisation and fretboard adaptability',
            'practice.prev': 'Previous: Music Theory',
            'practice.next': 'Next: Live Performance',

            'live.eyebrow': 'MODULE 04 // STAGE & EXPRESSIVENESS',
            'live.title': '🎤 Live Performance',
            'live.h2': 'About Live Performance',
            'live.p1': 'The stage is where the magic happens. Performing live isn\'t just about playing the right notes — it\'s about conveying emotion, connecting with the audience, and creating a memorable shared experience. Every time I step on stage is a chance to channel my passion and musicianship.',
            'live.p2': 'Preparing for a live show takes much more than technical practice alone. It involves managing stage nerves, reading the energy of a venue, and adapting your playing to the crowd in real time. Performing across notable venues has helped me cultivate a natural, authentic stage presence.',
            'live.p3': 'Confidence and charisma come from thorough preparation and a deep love for music. Every show is a two-way conversation between the musician and the audience — an opportunity to create moments people will remember for years.',
            'live.list.h2': 'Pillars of a Strong Live Show',
            'live.li1': 'Managing stage nerves and performance pressure',
            'live.li2': 'Emotional connection with the audience',
            'live.li3': 'Expressive, authentic interpretation',
            'live.li4': 'Real-time adaptability and improvisation',
            'live.li5': 'Stage presence and charisma',
            'live.prev': 'Previous: Practical Exercises'
        },
        ro: {
            'page.title.home': 'Ianis Muraruș | Electric Guitar Portfolio',
            'page.title.chords': 'Acorduri & Ritm - Ianis Muraruș',
            'page.title.theory': 'Teorie Muzicală - Ianis Muraruș',
            'page.title.practice': 'Exerciții Practice - Ianis Muraruș',
            'page.title.live': 'Performanță Live - Ianis Muraruș',

            'nav.skills': 'Abilități',
            'nav.testimonial': 'Testimonial',
            'nav.email': 'E-mail',

            'hero.badge': 'CHITARĂ ELECTRICĂ • ARHIVĂ PERSONALĂ',
            'hero.title': 'Bună, sunt <span class="gradient-text">Ianis</span> 🤘',
            'hero.p1': 'Chitara reprezintă pentru mine mai mult decât un instrument muzical — este modul prin care îmi exprim creativitatea, disciplina și pasiunea pentru muzică. Această bibliografie personală reunește experiențe, cunoștințe și materiale acumulate de-a lungul timpului, având scopul de a împărtăși informații utile despre studiul chitarei electrice.',
            'hero.p2': 'Aici vei găsi elemente legate de tehnică, ritm, teorie muzicală, exerciții practice și dezvoltarea unui stil propriu. Site-ul reflectă atât progresul meu ca muzician, cât și dorința de a transforma pasiunea pentru chitară într-un spațiu educativ și inspirațional.',
            'hero.btn.skills': 'Abilități',
            'hero.btn.testimonial': 'Testimonial',
            'hero.btn.contact': 'Contactează-mă',
            'tuner.title': 'Acordaj Standard (Click pentru ton)',
            'portrait.tag': 'Sesiune Live • Chitară Electrică',

            'skills.eyebrow': '01 // CURRICULUM & TEHNICĂ',
            'skills.heading': 'Abilități',
            'skills.intro': 'Prin studiul constant al chitarei electrice, mi-am dezvoltat atât partea tehnică, cât și înțelegerea teoretică a muzicii. Experiența acumulată m-a ajutat să combin practica, ritmul și expresivitatea într-un mod echilibrat, concentrându-mă permanent pe evoluție și perfecționare.',

            'card1.title': 'Acorduri & Ritm',
            'card1.desc': 'Armonie, progresii, strumming și sincronizare ritmică precisă.',
            'card2.title': 'Teorie Muzicală',
            'card2.desc': 'Game, moduri, intervale și structura armonică a compozițiilor.',
            'card3.title': 'Exerciții Practice',
            'card3.desc': 'Dexteritate, viteză, arpegii, picking avansat și memorie musculară.',
            'card4.title': 'Performanță Live',
            'card4.desc': 'Prezență scenică, dinamică de concert și conexiune cu publicul.',
            'card.explore': 'Explorează modulul',

            'test.eyebrow': '02 // PROFIL & VIZIUNE',
            'test.heading': 'Testimonial',
            'test.role': '19 ani, student la Universitatea Politehnica Timișoara, Facultatea de Automatică și Calculatoare',
            'test.body': 'Muzica nu înseamnă doar note și acorduri, ci emoție, disciplină și autenticitate. Reușesc să transform fiecare interpretare într-o experiență memorabilă, combinând tehnica atent construită cu o prezență scenică naturală și expresivă. Pasiunea mea pentru chitară și pentru performanță se reflectă atât în felul în care cânt, cât și în modul în care inspir oamenii din jurul meu. Fiecare apariție pe scenă transmite energie, încredere și dedicare autentică față de muzică.',
            'test.cta': 'Vezi arhiva video 🎸',

            'contact.eyebrow': '03 // COLABORĂRI & LECȚII',
            'contact.heading': 'Contact',
            'contact.sub': 'Hai să discutăm despre muzică',
            'contact.desc': 'Dacă dorești să colaborăm, să discutăm despre lecții de chitară, evenimente live sau proiecte muzicale, mă poți contacta oricând prin formularul alăturat. Sunt deschis atât colaborărilor artistice, cât și oportunităților prin care pot împărtăși pasiunea mea pentru muzică și performanță scenică. Îți voi răspunde în cel mai scurt timp posibil.',
            'form.name': 'Nume',
            'form.name.ph': 'Ex: Andrei Popescu',
            'form.email': 'Email',
            'form.email.ph': 'nume@exemplu.ro',
            'form.message': 'Mesaj',
            'form.message.ph': 'Scrie-mi despre proiectul sau întrebarea ta...',
            'form.submit': 'Trimite mesaj',

            'footer.copy': 'Construit cu pasiune pentru Chitară Electrică & Cod.',
            'footer.home': 'Acasă',
            'footer.chords': 'Acorduri',
            'footer.theory': 'Teorie',
            'footer.practice': 'Exerciții',
            'footer.live': 'Live',

            'sub.back': 'Înapoi la Abilități',
            'sub.all': 'Toate abilitățile',
            'sub.home': 'Înapoi la pagina principală',

            'chords.eyebrow': 'MODUL 01 // ARMONIE & GROOVE',
            'chords.title': '🎸 Acorduri & Ritm',
            'chords.h2': 'Despre Acorduri & Ritm',
            'chords.p1': 'Acordurile și ritmul sunt fundamentele oricărei compoziții muzicale. Prin învățarea acestor elemente, am dezvoltat o înțelegere profundă a structurii muzicale și a modului în care se construiesc piese memorabile.',
            'chords.p2': 'Ritmul este pulsul muzicii, iar acordurile oferă armonia și profunzimea. Împreună, acestea creează o bază solidă pe care se poate construi orice interpretare autentică și expresivă. Am lucrat intens pentru a perfecționa acuratețea și fluiditatea mea în executarea acordurilor, asigurând tranziții netede și un ritm constant.',
            'chords.p3': 'Această secțiune te ajută să înțelegi cum pot transforma noțiunile teoretice în practică, demonstrând aplicabilitatea lor în diverse genuri și stiluri muzicale. Fiecare tehnică pe care o demonstrez este rezultatul unei pregătiri dedicate și a unei pasiuni nesfârșite pentru chitară.',
            'chords.list.h2': 'Ce vei Învăța',
            'chords.li1': 'Pozițiile și formele de bază ale acordurilor majore și minore',
            'chords.li2': 'Tranziții fluide între acorduri',
            'chords.li3': 'Modele de ritm pentru diverse genuri',
            'chords.li4': 'Tehnici de strumming și picking',
            'chords.li5': 'Compoziție simplă bazată pe acorduri',
            'chords.next': 'Următorul: Teorie Muzicală',

            'theory.eyebrow': 'MODUL 02 // STRUCTURĂ & ARMONIE',
            'theory.title': '🎵 Teorie Muzicală',
            'theory.h2': 'Despre Teorie Muzicală',
            'theory.p1': 'Teoria muzicală este limba în care comunică muzicienii. Ea ne permite să înțelegem structura, armonia și progresiile care fac o piesă muzicală să sune bine. Prin studiul aprofundat al teoriei, am dobândit capacitatea de a crea și interpreta muzică cu o înțelegere mult mai profundă.',
            'theory.p2': 'Scopurile, gamele, intervalele și progresiunile de acorduri sunt blocurile de construcție ale oricărei compoziții. Am învățat cum să analizez piese muzicale pentru a identifica modelele care le fac eficace, și cum să aplic aceste concepte la propriile mele creații.',
            'theory.p3': 'Cunoașterea teoriei muzicale nu limitează creativitatea - dimpotrivă, o eliberează. Cu o bază teoretică solidă, sunt mai liber să experimentez și să iau decizii muzicale conștiente și intenționate.',
            'theory.list.h2': 'Principiile Abordate',
            'theory.li1': 'Notele muzicale și sistemul de notație',
            'theory.li2': 'Scări și moduri',
            'theory.li3': 'Intervale și relații dintre note',
            'theory.li4': 'Progresiuni de acorduri și cadențe',
            'theory.li5': 'Ritmul și măsura',
            'theory.prev': 'Anterior: Acorduri & Ritm',
            'theory.next': 'Următorul: Exerciții Practice',

            'practice.eyebrow': 'MODUL 03 // TEHNICĂ & PRECIZIE',
            'practice.title': '🎧 Exerciții Practice',
            'practice.h2': 'Despre Exerciții Practice',
            'practice.p1': '„Practica duce la perfecțiune” — un adagio care este mai adevărat decât oricând în studiul chitarei. Exercițiile practice sunt esența dezvoltării unei abilități solide și a unei tehnici impecabile. Am dedicat mii de ore la exerciții structurate care au transformat pasiunea într-o competență profesională.',
            'practice.p2': 'Fiecare exercițiu este conceput să dezvolte un aspect specific al interpretării: dexteritate, viteză, precizie și rezistență. Prin repetare deliberată și concentrată, am construit o fundație care îmi permite să interpretez piese complexe cu încredere și ușurință.',
            'practice.p3': 'Aceasta nu este doar despre a cânta rapid sau a face lucruri complexe — este despre a construi memorie musculară, reflexe muzicale și o legătură intuitivă cu instrumentul. Rezultatul: o interpretare autentică și expresivă care vine natural.',
            'practice.list.h2': 'Exerciții Cheie',
            'practice.li1': 'Scale și arpegii',
            'practice.li2': 'Exerciții de viteză și precizie',
            'practice.li3': 'Dezvoltarea rezistenței mâinilor',
            'practice.li4': 'Tehnici avansate de picking',
            'practice.li5': 'Improvizație și adaptabilitate',
            'practice.prev': 'Anterior: Teorie Muzicală',
            'practice.next': 'Următorul: Performanță Live',

            'live.eyebrow': 'MODUL 04 // SCENĂ & EXPRESIVITATE',
            'live.title': '🎤 Performanță Live',
            'live.h2': 'Despre Performanță Live',
            'live.p1': 'Scena este locul unde se întâmplă magia. Performanța live nu este doar cântatul notelor corecte, ci transmiterea unei emoții, conectarea cu publicul și crearea unei experiențe memorabile. Fiecare apariție pe scenă este o oportunitate de a-mi exprima pasiunea și talentul.',
            'live.p2': 'Pregătirea pentru o performanță live implică mult mai mult decât doar practică. Este vorba despre gestionarea emoțiilor, înțelegerea dinamicii unei săli de concert și capacitatea de a adapta interpretarea la energia publicului. Am apărut pe scenele unor localuri prestigioase și am dezvoltat o prezență scenică naturală și autentică.',
            'live.p3': 'Confidența și carisma vin dintr-o pregătire minuțioasă și dintr-o pasiune profundă pentru muzică. Fiecare performance este o conversație între mine și public, o oportunitate de a crea momente pe care oamenii le vor aminti pentru mulți ani.',
            'live.list.h2': 'Aspecte ale unei Bune Performanțe',
            'live.li1': 'Gestionarea emoțiilor și stresului scenic',
            'live.li2': 'Conectarea emoțională cu publicul',
            'live.li3': 'Interpretare expresivă și autentică',
            'live.li4': 'Adaptabilitate și improvizație',
            'live.li5': 'Prezență scenică și carismă',
            'live.prev': 'Anterior: Exerciții Practice'
        }
    };

    function applyLanguage(lang) {
        const dict = translations[lang] || translations.en;
        root.setAttribute('data-lang', lang);
        root.setAttribute('lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        const pageKey = document.body.getAttribute('data-page');
        if (pageKey && dict[`page.title.${pageKey}`]) {
            document.title = dict[`page.title.${pageKey}`];
        }
    }

    const initialLang = localStorage.getItem('guitar-portfolio-lang') || 'en';
    applyLanguage(initialLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = root.getAttribute('data-lang') || 'en';
            const nextLang = currentLang === 'en' ? 'ro' : 'en';
            localStorage.setItem('guitar-portfolio-lang', nextLang);
            applyLanguage(nextLang);
        });
    }

    // =========================================================
    // 2. SWITCH LIGHT / DARK PERSISTENT
    // =========================================================
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = root.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            localStorage.setItem('guitar-portfolio-theme', next);
        });
    }

    // =========================================================
    // 3. MENIU MOBIL
    // =========================================================
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
            mobileMenuBtn.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    // =========================================================
    // 4. SPOTLIGHT PE CARDURILE DE ABILITATI
    // =========================================================
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });

    // =========================================================
    // 5. SCROLL REVEAL ANIMATIE
    // =========================================================
    root.classList.add('js-ready');
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 });

        revealElements.forEach(el => observer.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('visible'));
    }

    // =========================================================
    // 6. ACORDOR INTERACTIV WEB AUDIO API
    // =========================================================
    let audioCtx = null;
    const stringButtons = document.querySelectorAll('.string-btn');
    const tunerStatus = document.getElementById('tunerStatus');

    function playGuitarNote(freq) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;

        if (!audioCtx) {
            audioCtx = new AudioContextClass();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const now = audioCtx.currentTime;
        const oscMain = audioCtx.createOscillator();
        const oscHarmonic = audioCtx.createOscillator();
        const filter = audioCtx.createBiquadFilter();
        const gain = audioCtx.createGain();

        oscMain.type = 'sawtooth';
        oscMain.frequency.setValueAtTime(freq, now);

        oscHarmonic.type = 'triangle';
        oscHarmonic.frequency.setValueAtTime(freq * 2, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(freq * 7, now);
        filter.frequency.exponentialRampToValueAtTime(freq * 1.4, now + 1.6);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.22, now + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0008, now + 1.8);

        oscMain.connect(filter);
        oscHarmonic.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        oscMain.start(now);
        oscHarmonic.start(now);
        oscMain.stop(now + 1.85);
        oscHarmonic.stop(now + 1.85);
    }

    stringButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const freq = parseFloat(btn.dataset.freq);
            const note = btn.dataset.note;
            const currentLang = root.getAttribute('data-lang') || 'en';

            stringButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (tunerStatus) {
                tunerStatus.textContent = currentLang === 'ro'
                    ? `Se redă ${note} (${freq} Hz)`
                    : `Playing ${note} (${freq} Hz)`;
            }

            playGuitarNote(freq);

            setTimeout(() => {
                btn.classList.remove('active');
            }, 600);
        });
    });

    // =========================================================
    // 7. FORMULAR CONTACT + TOAST BILINGV
    // =========================================================
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const senderName = document.getElementById('name').value.trim();
            const currentLang = root.getAttribute('data-lang') || 'en';
            contactForm.reset();

            const msg = currentLang === 'ro'
                ? `✅ Mulțumesc, ${senderName || 'prietene'}! Mesajul a fost trimis.`
                : `✅ Thank you, ${senderName || 'friend'}! Your message has been sent.`;
            showToast(msg);
        });
    }
});