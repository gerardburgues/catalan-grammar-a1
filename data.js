const DATA = (function () {
  'use strict';
  return {
    chapters: [
      // ─────────────────────────────────────────────
      // CHAPTER 1 — Articles & Nouns
      // ─────────────────────────────────────────────
      {
        id: 'chapter-1',
        title: 'Capítol I — Articles i Noms',
        titleEn: 'Chapter I — Articles & Nouns',
        sections: [
          {
            id: 'g1',
            type: 'grammar',
            subtitle: 'Articles Definits (el, la, els, les, l\')',
            navLabel: 'Articles definits',
            navLabelEn: 'Definite Articles',
            caseTag: 'ART',
            explanation: 'Catalan definite articles agree in gender (masculine/feminine) and number (singular/plural): el (m.sg.), la (f.sg.), els (m.pl.), les (f.pl.). Before nouns beginning with a vowel or silent h, el and la contract to l\' (elision).',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct definite article (el, la, els, les, or l\').',
                items: [
                  { prompt: '___ gat és gran.', answer: 'El', hint: 'masculine singular noun' },
                  { prompt: '___ casa és nova.', answer: 'La', hint: 'feminine singular noun' },
                  { prompt: '___ nois juguen al parc.', answer: 'Els', hint: 'masculine plural noun' },
                  { prompt: '___ noies estudien molt.', answer: 'Les', hint: 'feminine plural noun' },
                  { prompt: '___ amic ve avui.', answer: 'L\'', hint: 'elision before vowel' },
                  { prompt: '___ escola és gran.', answer: 'L\'', hint: 'elision before vowel' },
                  { prompt: '___ home treballa aquí.', answer: 'L\'', hint: 'elision before silent h' },
                  { prompt: '___ cotxes són nous.', answer: 'Els', hint: 'masculine plural noun' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct definite article.',
                items: [
                  { sentence: '___ porta és blava.', options: ['El', 'La', 'Els', 'Les'], answer: 1 },
                  { sentence: '___ arbre és alt.', options: ['El', 'La', 'L\'', 'Els'], answer: 2 },
                  { sentence: '___ llibres són a la taula.', options: ['El', 'La', 'Els', 'Les'], answer: 2 },
                  { sentence: '___ alumna estudia català.', options: ['El', 'La', 'L\'', 'Els'], answer: 2 },
                  { sentence: '___ nens juguen al jardí.', options: ['El', 'La', 'Els', 'Les'], answer: 2 },
                  { sentence: '___ flors són boniques.', options: ['El', 'La', 'Els', 'Les'], answer: 3 },
                  { sentence: '___ ordinador és nou.', options: ['El', 'L\'', 'La', 'Els'], answer: 0 },
                  { sentence: '___ amigues riuen molt.', options: ['El', 'La', 'Els', 'Les'], answer: 3 }
                ]
              },
              {
                type: 'transformation',
                instruction: 'Change the article and noun from singular to plural (or vice versa).',
                items: [
                  { original: 'el gat → plural', answer: 'els gats' },
                  { original: 'la porta → plural', answer: 'les portes' },
                  { original: 'l\'amic → plural', answer: 'els amics' },
                  { original: 'els llibres → singular', answer: 'el llibre' },
                  { original: 'les noies → singular', answer: 'la noia' },
                  { original: 'l\'escola → plural', answer: 'les escoles' },
                  { original: 'el cotxe → plural', answer: 'els cotxes' },
                  { original: 'la flor → plural', answer: 'les flors' }
                ]
              }
            ]
          },
          {
            id: 'g2',
            type: 'grammar',
            subtitle: 'Articles Indefinits (un, una, uns, unes)',
            navLabel: 'Articles indefinits',
            navLabelEn: 'Indefinite Articles',
            caseTag: 'ART',
            explanation: 'Catalan indefinite articles also agree in gender and number: un (m.sg.), una (f.sg.), uns (m.pl.), unes (f.pl.). They indicate a non-specific noun, equivalent to English "a/an" in singular or "some" in plural.',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct indefinite article (un, una, uns, unes).',
                items: [
                  { prompt: 'Tinc ___ gat a casa.', answer: 'un', hint: 'masculine singular' },
                  { prompt: 'Hi ha ___ taula al menjador.', answer: 'una', hint: 'feminine singular' },
                  { prompt: 'Vull ___ llibres nous.', answer: 'uns', hint: 'masculine plural' },
                  { prompt: 'Compro ___ flors per a la mare.', answer: 'unes', hint: 'feminine plural' },
                  { prompt: 'És ___ noi molt simpàtic.', answer: 'un', hint: 'masculine singular' },
                  { prompt: 'Busco ___ feina bona.', answer: 'una', hint: 'feminine singular' },
                  { prompt: 'Tens ___ amics molt divertits.', answer: 'uns', hint: 'masculine plural' },
                  { prompt: 'Hi ha ___ noies al parc.', answer: 'unes', hint: 'feminine plural' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct indefinite article.',
                items: [
                  { sentence: 'Vull ___ cafè, si us plau.', options: ['un', 'una', 'uns', 'unes'], answer: 0 },
                  { sentence: 'Tinc ___ amiga a Girona.', options: ['un', 'una', 'uns', 'unes'], answer: 1 },
                  { sentence: 'Hi ha ___ cotxes aparcats.', options: ['un', 'una', 'uns', 'unes'], answer: 2 },
                  { sentence: 'Compro ___ pomes al mercat.', options: ['un', 'una', 'uns', 'unes'], answer: 3 },
                  { sentence: 'Necessito ___ bolígraf, si us plau.', options: ['un', 'una', 'uns', 'unes'], answer: 0 },
                  { sentence: 'Té ___ bona idea.', options: ['un', 'una', 'uns', 'unes'], answer: 1 },
                  { sentence: 'Volem ___ sandvitxos per dinar.', options: ['un', 'una', 'uns', 'unes'], answer: 2 },
                  { sentence: 'Hi ha ___ persones aquí.', options: ['un', 'una', 'uns', 'unes'], answer: 3 }
                ]
              },
              {
                type: 'matching',
                instruction: 'Match each noun with the correct indefinite article.',
                pairs: [
                  { left: 'un', right: 'noi (m.sg.)' },
                  { left: 'una', right: 'noia (f.sg.)' },
                  { left: 'uns', right: 'amics (m.pl.)' },
                  { left: 'unes', right: 'amigues (f.pl.)' },
                  { left: 'un', right: 'cotxe (m.sg.)' },
                  { left: 'una', right: 'casa (f.sg.)' },
                  { left: 'uns', right: 'llibres (m.pl.)' },
                  { left: 'unes', right: 'taules (f.pl.)' }
                ]
              }
            ]
          },
          {
            id: 'g3',
            type: 'grammar',
            subtitle: 'Gènere dels Noms — Masculí i Femení',
            navLabel: 'Gènere dels noms',
            navLabelEn: 'Noun Gender',
            caseTag: 'NOM',
            explanation: 'In Catalan, nouns are either masculine or feminine. Masculine nouns often end in a consonant or -e/-o, while feminine nouns often end in -a. Many nouns referring to people have both a masculine and feminine form (amic/amiga, professor/professora).',
            exercises: [
              {
                type: 'sorting',
                instruction: 'Sort these nouns into Masculine or Feminine.',
                categories: ['Masculí', 'Femení'],
                items: [
                  { word: 'el gat', category: 'Masculí' },
                  { word: 'la casa', category: 'Femení' },
                  { word: 'el cotxe', category: 'Masculí' },
                  { word: 'la porta', category: 'Femení' },
                  { word: 'el llibre', category: 'Masculí' },
                  { word: 'la taula', category: 'Femení' },
                  { word: 'el mercat', category: 'Masculí' },
                  { word: 'la flor', category: 'Femení' },
                  { word: 'el carrer', category: 'Masculí' },
                  { word: 'la finestra', category: 'Femení' },
                  { word: 'el pa', category: 'Masculí' },
                  { word: 'la llet', category: 'Femení' }
                ]
              },
              {
                type: 'transformation',
                instruction: 'Change the noun from masculine to feminine (or vice versa).',
                items: [
                  { original: 'el professor → femení', answer: 'la professora' },
                  { original: 'l\'amic → femení', answer: 'l\'amiga' },
                  { original: 'el noi → femení', answer: 'la noia' },
                  { original: 'la metgessa → masculí', answer: 'el metge' },
                  { original: 'el cuiner → femení', answer: 'la cuinera' },
                  { original: 'la directora → masculí', answer: 'el director' },
                  { original: 'el veí → femení', answer: 'la veïna' },
                  { original: 'la secretària → masculí', answer: 'el secretari' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct article that matches the gender of the noun.',
                items: [
                  { sentence: '___ ordinador és nou.', options: ['El', 'La', 'L\'', 'Els'], answer: 0 },
                  { sentence: '___ universitat és gran.', options: ['El', 'La', 'L\'', 'Les'], answer: 2 },
                  { sentence: '___ problema és difícil.', options: ['El', 'La', 'L\'', 'Les'], answer: 0 },
                  { sentence: '___ mà dreta és forta.', options: ['El', 'La', 'L\'', 'Les'], answer: 1 },
                  { sentence: '___ dia és llarg.', options: ['El', 'La', 'L\'', 'Les'], answer: 0 },
                  { sentence: '___ nit és curta.', options: ['El', 'La', 'L\'', 'Les'], answer: 1 },
                  { sentence: '___ arbre és alt.', options: ['El', 'La', 'L\'', 'Les'], answer: 2 },
                  { sentence: '___ paraula és llarga.', options: ['El', 'La', 'L\'', 'Les'], answer: 1 }
                ]
              }
            ]
          },
          {
            id: 'g4',
            type: 'grammar',
            subtitle: 'Plural dels Noms — Regulars i Irregulars',
            navLabel: 'Plural dels noms',
            navLabelEn: 'Noun Plurals',
            caseTag: 'NOM',
            explanation: 'Most Catalan nouns form their plural by adding -s (gat → gats, porta → portes). Nouns ending in -s, -x, -ç, or -z add -os or -es. Some nouns have irregular plurals that must be memorised (home → homes, peu → peus).',
            exercises: [
              {
                type: 'transformation',
                instruction: 'Write the plural form of each noun.',
                items: [
                  { original: 'el gat', answer: 'els gats' },
                  { original: 'la porta', answer: 'les portes' },
                  { original: 'el cotxe', answer: 'els cotxes' },
                  { original: 'el braç', answer: 'els braços' },
                  { original: 'la caixa', answer: 'les caixes' },
                  { original: 'el peix', answer: 'els peixos' },
                  { original: 'la nit', answer: 'les nits' },
                  { original: 'el peu', answer: 'els peus' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct plural form.',
                items: [
                  { prompt: 'Un gat → dos ___.', answer: 'gats', hint: 'add -s' },
                  { prompt: 'Una porta → tres ___.', answer: 'portes', hint: 'add -s' },
                  { prompt: 'Un braç → dos ___.', answer: 'braços', hint: 'add -os after ç' },
                  { prompt: 'Un peix → molts ___.', answer: 'peixos', hint: 'add -os after x' },
                  { prompt: 'Una creu → dues ___.', answer: 'creus', hint: 'add -s' },
                  { prompt: 'Un home → molts ___.', answer: 'homes', hint: 'add -s' },
                  { prompt: 'Una flor → moltes ___.', answer: 'flors', hint: 'add -s' },
                  { prompt: 'Un mes → dotze ___.', answer: 'mesos', hint: 'add -os after s' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct plural form.',
                items: [
                  { sentence: 'Plural de "el llapis":',  options: ['els llapiss', 'els llapis', 'els llàpissos', 'els llapises'], answer: 2 },
                  { sentence: 'Plural de "la veu":',     options: ['les veus', 'les veous', 'les veues', 'les veu'],            answer: 0 },
                  { sentence: 'Plural de "el braç":',    options: ['els braços', 'els braçs', 'els bracis', 'els braçes'],      answer: 0 },
                  { sentence: 'Plural de "la nit":',     options: ['les nites', 'les nitis', 'les nits', 'les nites'],          answer: 2 },
                  { sentence: 'Plural de "el peix":',    options: ['els peixs', 'els peixos', 'els peixos', 'els peixes'],      answer: 1 },
                  { sentence: 'Plural de "el cotxe":',   options: ['els cotxes', 'els cotxos', 'els cotxs', 'els cotxets'],     answer: 0 },
                  { sentence: 'Plural de "la creu":',    options: ['les creues', 'les creuos', 'les creus', 'les creux'],       answer: 2 },
                  { sentence: 'Plural de "el mes":',     options: ['els mess', 'els mesos', 'els mes', 'els meses'],            answer: 1 }
                ]
              }
            ]
          }
        ]
      },

      // ─────────────────────────────────────────────
      // CHAPTER 2 — Greetings & Basics
      // ─────────────────────────────────────────────
      {
        id: 'chapter-2',
        title: 'Capítol II — Salutacions i Bàsics',
        titleEn: 'Chapter II — Greetings & Basics',
        sections: [
          {
            id: 'v1',
            type: 'vocabulary',
            subtitle: 'Salutacions i Acomiadaments',
            navLabel: 'Salutacions',
            navLabelEn: 'Greetings',
            caseTag: 'VOC',
            explanation: 'Catalan has several greetings depending on the time of day and the level of formality. "Bon dia" (good morning), "Bona tarda" (good afternoon) and "Bona nit" (good night) are the most common time-based greetings. Farewells include "Adéu" (goodbye) and "Fins aviat" (see you soon).',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan greeting or farewell with its English meaning.',
                pairs: [
                  { left: 'Bon dia', right: 'Good morning' },
                  { left: 'Bona tarda', right: 'Good afternoon' },
                  { left: 'Bona nit', right: 'Good night' },
                  { left: 'Adéu', right: 'Goodbye' },
                  { left: 'Fins aviat', right: 'See you soon' },
                  { left: 'Fins demà', right: 'See you tomorrow' },
                  { left: 'Hola', right: 'Hello / Hi' },
                  { left: 'A reveure', right: 'Goodbye (formal)' },
                  { left: 'Fins més tard', right: 'See you later' },
                  { left: 'Bon vespre', right: 'Good evening' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct greeting or farewell.',
                items: [
                  { prompt: 'Al matí dius: "___ ___!"', answer: 'Bon dia', hint: 'morning greeting' },
                  { prompt: 'A la tarda dius: "___ ___!"', answer: 'Bona tarda', hint: 'afternoon greeting' },
                  { prompt: 'Quan marxes dius: "___!"', answer: 'Adéu', hint: 'farewell' },
                  { prompt: 'Si et tornes a veure aviat: "___ ___!"', answer: 'Fins aviat', hint: 'see you soon' },
                  { prompt: 'A la nit dius: "___ ___!"', answer: 'Bona nit', hint: 'night greeting' },
                  { prompt: 'Una salutació informal: "___!"', answer: 'Hola', hint: 'informal hello' },
                  { prompt: 'Fins al dia següent: "___ ___!"', answer: 'Fins demà', hint: 'see you tomorrow' },
                  { prompt: 'Comiat formal: "A ___!"', answer: 'reveure', hint: 'formal goodbye' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the most appropriate greeting for each situation.',
                items: [
                  { sentence: 'Arribes a l\'oficina a les 9 del matí. Dius:', options: ['Bona nit', 'Bon dia', 'Fins aviat', 'Adéu'], answer: 1 },
                  { sentence: 'Marxes de casa d\'un amic a les 10 de la nit. Dius:', options: ['Bon dia', 'Bona tarda', 'Bona nit', 'Hola'], answer: 2 },
                  { sentence: 'Veus un amic al carrer. El saludes:', options: ['Adéu', 'Fins demà', 'Hola!', 'Bona nit'], answer: 2 },
                  { sentence: 'Acabes una reunió formal i marxes. Dius:', options: ['Hola', 'A reveure', 'Bon dia', 'Fins aviat'], answer: 1 },
                  { sentence: 'Són les 4 de la tarda. Entres a una botiga. Dius:', options: ['Bon dia', 'Bona nit', 'Bona tarda', 'Adéu'], answer: 2 },
                  { sentence: 'Te\'n vas però tornaràs en una hora. Dius:', options: ['Adéu', 'Fins aviat', 'Bona nit', 'Bon dia'], answer: 1 },
                  { sentence: 'Demà tens classe amb el professor. Dius:', options: ['Fins demà', 'Bon dia', 'Hola', 'A reveure'], answer: 0 },
                  { sentence: 'Truques per telèfon a un desconegut. Comences:', options: ['Adéu', 'Bona nit', 'Bon dia', 'Fins aviat'], answer: 2 }
                ]
              }
            ]
          },
          {
            id: 'v2',
            type: 'vocabulary',
            subtitle: 'Presentacions i Informació Personal',
            navLabel: 'Presentacions',
            navLabelEn: 'Introductions',
            caseTag: 'VOC',
            explanation: 'To introduce yourself in Catalan, use "Em dic..." (My name is...), "Soc de..." (I am from...), and "Tinc X anys" (I am X years old). The verb "dir-se" is used reflexively for names.',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Complete each sentence with the correct word or phrase.',
                items: [
                  { prompt: 'Em ___ Marc. (My name is Marc)', answer: 'dic', hint: 'verb dir-se, 1st person' },
                  { prompt: 'Soc ___ Barcelona. (I am from Barcelona)', answer: 'de', hint: 'preposition of origin' },
                  { prompt: '___ 25 anys. (I am 25 years old)', answer: 'Tinc', hint: 'verb tenir, 1st person' },
                  { prompt: 'Soc ___. (I am a teacher - m.)', answer: 'professor', hint: 'profession masculine' },
                  { prompt: 'Visc a ___. (I live in Girona)', answer: 'Girona', hint: 'city name' },
                  { prompt: 'Parlo ___. (I speak Catalan)', answer: 'català', hint: 'language' },
                  { prompt: '¿Com et ___? (What is your name?)', answer: 'dius', hint: 'verb dir-se, 2nd person' },
                  { prompt: '¿D\'on ___? (Where are you from?)', answer: 'ets', hint: 'verb ser, 2nd person' }
                ]
              },
              {
                type: 'reorder',
                instruction: 'Rearrange the words to form a correct sentence.',
                items: [
                  { words: ['Em', 'dic', 'Anna'], answer: 'Em dic Anna' },
                  { words: ['Soc', 'de', 'Tarragona'], answer: 'Soc de Tarragona' },
                  { words: ['Tinc', 'trenta', 'anys'], answer: 'Tinc trenta anys' },
                  { words: ['Visc', 'a', 'Barcelona'], answer: 'Visc a Barcelona' },
                  { words: ['Parlo', 'català', 'i', 'castellà'], answer: 'Parlo català i castellà' },
                  { words: ['Soc', 'estudiant', 'de', 'medicina'], answer: 'Soc estudiant de medicina' }
                ]
              },
              {
                type: 'matching',
                instruction: 'Match each Catalan phrase with its English meaning.',
                pairs: [
                  { left: 'Em dic...', right: 'My name is...' },
                  { left: 'Soc de...', right: 'I am from...' },
                  { left: 'Tinc X anys', right: 'I am X years old' },
                  { left: 'Visc a...', right: 'I live in...' },
                  { left: 'Parlo català', right: 'I speak Catalan' },
                  { left: 'Soc professor/a', right: 'I am a teacher' },
                  { left: 'Com et dius?', right: 'What is your name?' },
                  { left: 'D\'on ets?', right: 'Where are you from?' },
                  { left: 'Quants anys tens?', right: 'How old are you?' },
                  { left: 'On vius?', right: 'Where do you live?' }
                ]
              }
            ]
          },
          {
            id: 'v3',
            type: 'vocabulary',
            subtitle: 'Nombres del 0 al 20',
            navLabel: 'Nombres 0–20',
            navLabelEn: 'Numbers 0–20',
            caseTag: 'NUM',
            explanation: 'Catalan numbers 0–20 are unique words that must be memorised. Note: "u" (1) has a feminine form "una", and numbers 16–19 are written as single words (setze, disset, divuit, dinou).',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each number with its Catalan word.',
                pairs: [
                  { left: '0', right: 'zero' },
                  { left: '1', right: 'u / una' },
                  { left: '3', right: 'tres' },
                  { left: '5', right: 'cinc' },
                  { left: '7', right: 'set' },
                  { left: '10', right: 'deu' },
                  { left: '12', right: 'dotze' },
                  { left: '15', right: 'quinze' },
                  { left: '17', right: 'disset' },
                  { left: '20', right: 'vint' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Write the Catalan word for each number.',
                items: [
                  { prompt: '2 = ___', answer: 'dos', hint: 'two' },
                  { prompt: '4 = ___', answer: 'quatre', hint: 'four' },
                  { prompt: '6 = ___', answer: 'sis', hint: 'six' },
                  { prompt: '8 = ___', answer: 'vuit', hint: 'eight' },
                  { prompt: '9 = ___', answer: 'nou', hint: 'nine' },
                  { prompt: '11 = ___', answer: 'onze', hint: 'eleven' },
                  { prompt: '13 = ___', answer: 'tretze', hint: 'thirteen' },
                  { prompt: '16 = ___', answer: 'setze', hint: 'sixteen' },
                  { prompt: '18 = ___', answer: 'divuit', hint: 'eighteen' },
                  { prompt: '19 = ___', answer: 'dinou', hint: 'nineteen' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct Catalan number.',
                items: [
                  { sentence: '14 en català:', options: ['tretze', 'catorze', 'quinze', 'dotze'], answer: 1 },
                  { sentence: '7 en català:',  options: ['sis', 'vuit', 'set', 'nou'],           answer: 2 },
                  { sentence: '20 en català:', options: ['deu', 'dotze', 'vint', 'quinze'],       answer: 2 },
                  { sentence: '3 en català:',  options: ['dos', 'tres', 'quatre', 'cinc'],        answer: 1 },
                  { sentence: '11 en català:', options: ['deu', 'dotze', 'onze', 'tretze'],       answer: 2 },
                  { sentence: '18 en català:', options: ['disset', 'divuit', 'dinou', 'setze'],   answer: 1 },
                  { sentence: '5 en català:',  options: ['tres', 'quatre', 'cinc', 'sis'],        answer: 2 },
                  { sentence: '16 en català:', options: ['quinze', 'setze', 'disset', 'divuit'],  answer: 1 }
                ]
              }
            ]
          },
          {
            id: 'v4',
            type: 'vocabulary',
            subtitle: 'Nombres 21–100 i Ordinals',
            navLabel: 'Nombres 21–100',
            navLabelEn: 'Numbers 21–100',
            caseTag: 'NUM',
            explanation: 'Numbers 21–99 in Catalan are formed with tens + "i" + units (vint-i-u, trenta-dos, etc.). The tens are: trenta (30), quaranta (40), cinquanta (50), seixanta (60), setanta (70), vuitanta (80), noranta (90), cent (100). Ordinals agree in gender: primer/primera, segon/segona.',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Write the Catalan word for each number.',
                items: [
                  { prompt: '21 = vint-i-___', answer: 'u', hint: 'twenty-one' },
                  { prompt: '30 = ___', answer: 'trenta', hint: 'thirty' },
                  { prompt: '45 = quaranta-___', answer: 'cinc', hint: 'forty-five' },
                  { prompt: '50 = ___', answer: 'cinquanta', hint: 'fifty' },
                  { prompt: '60 = ___', answer: 'seixanta', hint: 'sixty' },
                  { prompt: '75 = setanta-___', answer: 'cinc', hint: 'seventy-five' },
                  { prompt: '80 = ___', answer: 'vuitanta', hint: 'eighty' },
                  { prompt: '100 = ___', answer: 'cent', hint: 'one hundred' }
                ]
              },
              {
                type: 'matching',
                instruction: 'Match the ordinal number with its Catalan word.',
                pairs: [
                  { left: '1r / 1a', right: 'primer / primera' },
                  { left: '2n / 2a', right: 'segon / segona' },
                  { left: '3r / 3a', right: 'tercer / tercera' },
                  { left: '4t / 4a', right: 'quart / quarta' },
                  { left: '5è / 5a', right: 'cinquè / cinquena' },
                  { left: '6è / 6a', right: 'sisè / sisena' },
                  { left: '7è / 7a', right: 'setè / setena' },
                  { left: '10è / 10a', right: 'desè / desena' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct Catalan number or ordinal.',
                items: [
                  { sentence: '33 en català:', options: ['trenta-tres', 'trenta-i-tres', 'tretze-tres', 'trenta tres'], answer: 0 },
                  { sentence: '70 en català:', options: ['seixanta', 'vuitanta', 'setanta', 'noranta'],                  answer: 2 },
                  { sentence: '90 en català:', options: ['noranta', 'vuitanta', 'setanta', 'cent'],                      answer: 0 },
                  { sentence: 'El 2n pis (m.):',options: ['segon', 'segona', 'segont', 'segons'],                        answer: 0 },
                  { sentence: '55 en català:', options: ['cinquanta-cinc', 'cinquanta cinc', 'cinc-i-cinquanta', 'quinze-cinc'], answer: 0 },
                  { sentence: 'La 1a planta (f.):', options: ['primer', 'primers', 'primera', 'primeres'],               answer: 2 },
                  { sentence: '42 en català:', options: ['quaranta-dos', 'quaranta dos', 'quaranta-i-dos', 'dotze-quatre'], answer: 0 },
                  { sentence: '100 en català:', options: ['noranta', 'cent', 'mil', 'seixanta'],                         answer: 1 }
                ]
              }
            ]
          }
        ]
      },

      // ─────────────────────────────────────────────
      // CHAPTER 3 — Verbs: Present Tense
      // ─────────────────────────────────────────────
      {
        id: 'chapter-3',
        title: 'Capítol III — Verbs: Present d\'Indicatiu',
        titleEn: 'Chapter III — Verbs: Present Tense',
        sections: [
          {
            id: 'g5',
            type: 'grammar',
            subtitle: 'Verb SER — Identitat, Origen, Professió',
            navLabel: 'Verb SER',
            navLabelEn: 'Verb SER (to be)',
            caseTag: 'VERB',
            explanation: 'The verb "ser" in Catalan means "to be" and is used for identity, origin, profession, and inherent characteristics. Its present tense forms are: soc, ets, és, som, sou, són.',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct form of SER.',
                items: [
                  { prompt: 'Jo ___ de Barcelona.', answer: 'soc', hint: '1st person singular' },
                  { prompt: 'Tu ___ professor?', answer: 'ets', hint: '2nd person singular' },
                  { prompt: 'Ella ___ metgessa.', answer: 'és', hint: '3rd person singular' },
                  { prompt: 'Nosaltres ___ estudiants.', answer: 'som', hint: '1st person plural' },
                  { prompt: 'Vosaltres ___ de Girona?', answer: 'sou', hint: '2nd person plural' },
                  { prompt: 'Ells ___ amics.', answer: 'són', hint: '3rd person plural' },
                  { prompt: 'En Marc ___ enginyer.', answer: 'és', hint: '3rd person singular' },
                  { prompt: 'Les noies ___ catalanes.', answer: 'són', hint: '3rd person plural' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct form of SER.',
                items: [
                  { sentence: 'Jo ___ català.', options: ['soc', 'ets', 'és', 'som'], answer: 0 },
                  { sentence: 'Tu ___ molt amable.', options: ['soc', 'ets', 'és', 'són'], answer: 1 },
                  { sentence: 'Ella ___ de Lleida.', options: ['soc', 'ets', 'és', 'som'], answer: 2 },
                  { sentence: 'Nosaltres ___ amics.', options: ['soc', 'és', 'som', 'sou'], answer: 2 },
                  { sentence: 'Vosaltres ___ professors.', options: ['som', 'sou', 'són', 'ets'], answer: 1 },
                  { sentence: 'Ells ___ molt alts.', options: ['soc', 'som', 'sou', 'són'], answer: 3 },
                  { sentence: 'La Marta ___ veterinària.', options: ['soc', 'ets', 'és', 'som'], answer: 2 },
                  { sentence: 'Tu i jo ___ de la mateixa classe.', options: ['soc', 'ets', 'és', 'som'], answer: 3 }
                ]
              },
              {
                type: 'reorder',
                instruction: 'Rearrange the words to form a correct sentence using SER.',
                items: [
                  { words: ['Jo', 'soc', 'estudiant'], answer: 'Jo soc estudiant' },
                  { words: ['Tu', 'ets', 'de', 'Tarragona'], answer: 'Tu ets de Tarragona' },
                  { words: ['Ella', 'és', 'molt', 'intel·ligent'], answer: 'Ella és molt intel·ligent' },
                  { words: ['Nosaltres', 'som', 'catalans'], answer: 'Nosaltres som catalans' },
                  { words: ['Ells', 'són', 'professors', 'de', 'català'], answer: 'Ells són professors de català' },
                  { words: ['La', 'Maria', 'és', 'advocada'], answer: 'La Maria és advocada' }
                ]
              }
            ]
          },
          {
            id: 'g6',
            type: 'grammar',
            subtitle: 'Verb ESTAR — Estat i Ubicació',
            navLabel: 'Verb ESTAR',
            navLabelEn: 'Verb ESTAR (state)',
            caseTag: 'VERB',
            explanation: 'In Catalan, "estar" is used mainly for temporary states (estar content, estar malalt) and location (estar a casa). Unlike Spanish, Catalan uses "ser" for many cases where Spanish uses "estar". Present tense: estic, estàs, està, estem, esteu, estan.',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct form of ESTAR.',
                items: [
                  { prompt: 'Jo ___ molt content avui.', answer: 'estic', hint: '1st person singular' },
                  { prompt: 'Tu ___ bé?', answer: 'estàs', hint: '2nd person singular' },
                  { prompt: 'Ella ___ malalta.', answer: 'està', hint: '3rd person singular' },
                  { prompt: 'Nosaltres ___ a casa.', answer: 'estem', hint: '1st person plural' },
                  { prompt: 'Vosaltres ___ cansats?', answer: 'esteu', hint: '2nd person plural' },
                  { prompt: 'Ells ___ al parc.', answer: 'estan', hint: '3rd person plural' },
                  { prompt: 'En Joan ___ trist avui.', answer: 'està', hint: '3rd person singular' },
                  { prompt: 'La nena ___ adormida.', answer: 'està', hint: '3rd person singular' }
                ]
              },
              {
                type: 'sorting',
                instruction: 'Sort each sentence: does it use SER or ESTAR?',
                categories: ['SER', 'ESTAR'],
                items: [
                  { word: 'Jo soc professor.', category: 'SER' },
                  { word: 'Ella està malalta.', category: 'ESTAR' },
                  { word: 'Ells són de Madrid.', category: 'SER' },
                  { word: 'Estic molt content.', category: 'ESTAR' },
                  { word: 'La casa és gran.', category: 'SER' },
                  { word: 'Estem a l\'escola.', category: 'ESTAR' },
                  { word: 'Tu ets molt amable.', category: 'SER' },
                  { word: 'El gat està al sofà.', category: 'ESTAR' },
                  { word: 'Nosaltres som amics.', category: 'SER' },
                  { word: 'Esteu cansats?', category: 'ESTAR' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct verb (SER or ESTAR) in the correct form.',
                items: [
                  { sentence: 'Jo ___ a la biblioteca.', options: ['soc', 'estic', 'és', 'està'], answer: 1 },
                  { sentence: 'Tu ___ molt alt.', options: ['estàs', 'ets', 'estic', 'és'], answer: 1 },
                  { sentence: 'Ella ___ contenta avui.', options: ['és', 'soc', 'està', 'estem'], answer: 2 },
                  { sentence: 'Nosaltres ___ a la feina.', options: ['som', 'estem', 'sou', 'esteu'], answer: 1 },
                  { sentence: 'Ell ___ metge.', options: ['estic', 'estàs', 'és', 'estan'], answer: 2 },
                  { sentence: 'Les claus ___ a la taula.', options: ['són', 'estan', 'sou', 'esteu'], answer: 1 },
                  { sentence: 'Tu ___ de Manresa.', options: ['estàs', 'ets', 'estic', 'és'], answer: 1 },
                  { sentence: 'Ells ___ molt cansats.', options: ['són', 'estan', 'sou', 'esteu'], answer: 1 }
                ]
              }
            ]
          },
          {
            id: 'g7',
            type: 'grammar',
            subtitle: 'Verb TENIR — Tenir i Edat',
            navLabel: 'Verb TENIR',
            navLabelEn: 'Verb TENIR (to have)',
            caseTag: 'VERB',
            explanation: 'The verb "tenir" means "to have" and is used for possession, age, and several idiomatic expressions. Present tense: tinc, tens, té, tenim, teniu, tenen.',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct form of TENIR.',
                items: [
                  { prompt: 'Jo ___ un gat.', answer: 'tinc', hint: '1st person singular' },
                  { prompt: 'Tu ___ 25 anys?', answer: 'tens', hint: '2nd person singular' },
                  { prompt: 'Ell ___ molt de temps.', answer: 'té', hint: '3rd person singular' },
                  { prompt: 'Nosaltres ___ una casa gran.', answer: 'tenim', hint: '1st person plural' },
                  { prompt: 'Vosaltres ___ cotxe?', answer: 'teniu', hint: '2nd person plural' },
                  { prompt: 'Ells ___ tres fills.', answer: 'tenen', hint: '3rd person plural' },
                  { prompt: 'La Maria ___ molta paciència.', answer: 'té', hint: '3rd person singular' },
                  { prompt: 'Tu i ella ___ la mateixa edat.', answer: 'teniu', hint: '2nd person plural' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct form of TENIR.',
                items: [
                  { sentence: 'Jo ___ gana.', options: ['tinc', 'tens', 'té', 'tenim'], answer: 0 },
                  { sentence: 'Tu ___ son?', options: ['tinc', 'tens', 'té', 'teniu'], answer: 1 },
                  { sentence: 'Ella ___ fred.', options: ['tinc', 'tens', 'té', 'tenim'], answer: 2 },
                  { sentence: 'Nosaltres ___ pressa.', options: ['tinc', 'tens', 'tenim', 'tenen'], answer: 2 },
                  { sentence: 'Vosaltres ___ set?', options: ['tenim', 'teniu', 'tenen', 'té'], answer: 1 },
                  { sentence: 'Ells ___ molta sort.', options: ['teniu', 'tenim', 'tênen', 'tenen'], answer: 3 },
                  { sentence: 'El meu germà ___ 30 anys.', options: ['tinc', 'tens', 'té', 'tenim'], answer: 2 },
                  { sentence: 'Tu i en Pere ___ raó.', options: ['teniu', 'tenim', 'tenen', 'té'], answer: 0 }
                ]
              },
              {
                type: 'matching',
                instruction: 'Match each TENIR expression with its English meaning.',
                pairs: [
                  { left: 'tenir gana', right: 'to be hungry' },
                  { left: 'tenir set', right: 'to be thirsty' },
                  { left: 'tenir son', right: 'to be sleepy' },
                  { left: 'tenir fred', right: 'to be cold' },
                  { left: 'tenir calor', right: 'to be hot' },
                  { left: 'tenir pressa', right: 'to be in a hurry' },
                  { left: 'tenir por', right: 'to be afraid' },
                  { left: 'tenir raó', right: 'to be right' }
                ]
              }
            ]
          },
          {
            id: 'g8',
            type: 'grammar',
            subtitle: 'Verb FER — Fer i Expressions Comunes',
            navLabel: 'Verb FER',
            navLabelEn: 'Verb FER (to do)',
            caseTag: 'VERB',
            explanation: 'The verb "fer" means "to do" or "to make" and appears in many common expressions such as "fer fred" (to be cold — weather), "fer sol" (to be sunny), and "fer una pregunta" (to ask a question). Present tense: faig, fas, fa, fem, feu, fan.',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct form of FER.',
                items: [
                  { prompt: 'Jo ___ els deures cada dia.', answer: 'faig', hint: '1st person singular' },
                  { prompt: 'Tu ___ esport els caps de setmana?', answer: 'fas', hint: '2nd person singular' },
                  { prompt: 'Avui ___ molt de fred.', answer: 'fa', hint: '3rd person singular, weather' },
                  { prompt: 'Nosaltres ___ un viatge a l\'estiu.', answer: 'fem', hint: '1st person plural' },
                  { prompt: 'Vosaltres ___ una festa?', answer: 'feu', hint: '2nd person plural' },
                  { prompt: 'Ells ___ molt de soroll.', answer: 'fan', hint: '3rd person plural' },
                  { prompt: 'La cuinera ___ una paella boníssima.', answer: 'fa', hint: '3rd person singular' },
                  { prompt: 'Demà ___ sol.', answer: 'fa', hint: 'weather expression' }
                ]
              },
              {
                type: 'matching',
                instruction: 'Match each FER expression with its English meaning.',
                pairs: [
                  { left: 'fa sol', right: 'it is sunny' },
                  { left: 'fa fred', right: 'it is cold (weather)' },
                  { left: 'fa calor', right: 'it is hot (weather)' },
                  { left: 'fa vent', right: 'it is windy' },
                  { left: 'fer esport', right: 'to do sport / exercise' },
                  { left: 'fer els deures', right: 'to do homework' },
                  { left: 'fer una pregunta', right: 'to ask a question' },
                  { left: 'fer un viatge', right: 'to take a trip' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct form of FER.',
                items: [
                  { sentence: 'Jo ___ els deures ara.', options: ['faig', 'fas', 'fa', 'fem'], answer: 0 },
                  { sentence: 'Avui ___ molt de sol.', options: ['faig', 'fas', 'fa', 'fan'], answer: 2 },
                  { sentence: 'Tu ___ esport cada dia?', options: ['faig', 'fas', 'fa', 'fem'], answer: 1 },
                  { sentence: 'Nosaltres ___ una festa demà.', options: ['faig', 'fas', 'fem', 'feu'], answer: 2 },
                  { sentence: 'Ells ___ molt de soroll.', options: ['fa', 'fem', 'feu', 'fan'], answer: 3 },
                  { sentence: 'Vosaltres ___ una pregunta?', options: ['fem', 'feu', 'fan', 'fa'], answer: 1 },
                  { sentence: 'En Pau ___ molt bé a la cuina.', options: ['faig', 'fas', 'fa', 'fan'], answer: 2 },
                  { sentence: 'Tu i jo ___ el sopar junts.', options: ['faig', 'fas', 'fem', 'feu'], answer: 2 }
                ]
              }
            ]
          },
          {
            id: 'g9',
            type: 'grammar',
            subtitle: 'Verb ANAR — Anar i Futur Immediat',
            navLabel: 'Verb ANAR',
            navLabelEn: 'Verb ANAR (to go)',
            caseTag: 'VERB',
            explanation: 'The verb "anar" means "to go". Present tense: vaig, vas, va, anem, aneu, van. Crucially, "anar + a + infinitive" forms the immediate future (vaig a menjar = I am going to eat) AND the periphrastic past (vaig menjar = I ate). Context clarifies meaning.',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct form of ANAR.',
                items: [
                  { prompt: 'Jo ___ a l\'escola cada dia.', answer: 'vaig', hint: '1st person singular' },
                  { prompt: 'Tu ___ al mercat?', answer: 'vas', hint: '2nd person singular' },
                  { prompt: 'Ella ___ a la feina en metro.', answer: 'va', hint: '3rd person singular' },
                  { prompt: 'Nosaltres ___ a la platja demà.', answer: 'anem', hint: '1st person plural' },
                  { prompt: 'Vosaltres ___ al cinema?', answer: 'aneu', hint: '2nd person plural' },
                  { prompt: 'Ells ___ a Roma de vacances.', answer: 'van', hint: '3rd person plural' },
                  { prompt: 'Avui vaig ___ comprar pa.', answer: 'a', hint: 'immediate future: vaig + a + infinitive' },
                  { prompt: 'Demà anem ___ visitar l\'àvia.', answer: 'a', hint: 'immediate future' }
                ]
              },
              {
                type: 'reorder',
                instruction: 'Rearrange the words to form a correct sentence with ANAR.',
                items: [
                  { words: ['Vaig', 'a', 'l\'escola', 'cada', 'dia'], answer: 'Vaig a l\'escola cada dia' },
                  { words: ['Anem', 'a', 'la', 'platja', 'demà'], answer: 'Anem a la platja demà' },
                  { words: ['Van', 'al', 'cinema', 'els', 'divendres'], answer: 'Van al cinema els divendres' },
                  { words: ['Vaig', 'a', 'menjar', 'pizza', 'avui'], answer: 'Vaig a menjar pizza avui' },
                  { words: ['Tu', 'vas', 'a', 'estudiar', 'demà?'], answer: 'Tu vas a estudiar demà?' },
                  { words: ['Ella', 'va', 'a', 'comprar', 'un', 'vestit'], answer: 'Ella va a comprar un vestit' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct form of ANAR.',
                items: [
                  { sentence: 'Jo ___ al parc ara.', options: ['vaig', 'vas', 'va', 'anem'], answer: 0 },
                  { sentence: 'Tu ___ a la feina avui?', options: ['vaig', 'vas', 'va', 'van'], answer: 1 },
                  { sentence: 'Ell ___ a casa seva.', options: ['vaig', 'vas', 'va', 'anem'], answer: 2 },
                  { sentence: 'Nosaltres ___ al restaurant.', options: ['vaig', 'vas', 'anem', 'aneu'], answer: 2 },
                  { sentence: 'Vosaltres ___ a la biblioteca?', options: ['anem', 'aneu', 'van', 'va'], answer: 1 },
                  { sentence: 'Ells ___ a París de vacances.', options: ['anem', 'aneu', 'van', 'va'], answer: 2 },
                  { sentence: 'Demà vaig ___ comprar llibres.', options: ['de', 'a', 'en', 'per'], answer: 1 },
                  { sentence: 'La Maria ___ a l\'hospital cada dia.', options: ['vaig', 'vas', 'va', 'van'], answer: 2 }
                ]
              }
            ]
          },
          {
            id: 'g10',
            type: 'grammar',
            subtitle: 'Verbs Regulars -AR (parlar, treballar, estudiar)',
            navLabel: 'Verbs regulars -AR',
            navLabelEn: 'Regular -AR Verbs',
            caseTag: 'VERB',
            explanation: 'Regular -AR verbs in Catalan follow the pattern: parl-o, parl-es, parl-a, parl-em, parl-eu, parl-en. Common -AR verbs include: parlar (speak), treballar (work), estudiar (study), escoltar (listen), caminar (walk), comprar (buy).',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct form of the verb in brackets.',
                items: [
                  { prompt: 'Jo ___ català a l\'escola. (parlar)', answer: 'parlo', hint: '1st person singular -AR' },
                  { prompt: 'Tu ___ molt. (treballar)', answer: 'treballes', hint: '2nd person singular -AR' },
                  { prompt: 'Ella ___ medicina. (estudiar)', answer: 'estudia', hint: '3rd person singular -AR' },
                  { prompt: 'Nosaltres ___ música. (escoltar)', answer: 'escoltem', hint: '1st person plural -AR' },
                  { prompt: 'Vosaltres ___ molt. (caminar)', answer: 'camineu', hint: '2nd person plural -AR' },
                  { prompt: 'Ells ___ al supermercat. (comprar)', answer: 'compren', hint: '3rd person plural -AR' },
                  { prompt: 'En Pau ___ a l\'oficina. (treballar)', answer: 'treballa', hint: '3rd person singular -AR' },
                  { prompt: 'Jo ___ anglès i francès. (parlar)', answer: 'parlo', hint: '1st person singular -AR' }
                ]
              },
              {
                type: 'transformation',
                instruction: 'Change the verb to match the new subject.',
                items: [
                  { original: 'Jo parlo → ella', answer: 'ella parla' },
                  { original: 'Tu treballes → nosaltres', answer: 'nosaltres treballem' },
                  { original: 'Ella estudia → vosaltres', answer: 'vosaltres estudieu' },
                  { original: 'Nosaltres escoltem → ells', answer: 'ells escolten' },
                  { original: 'Ells compren → jo', answer: 'jo compro' },
                  { original: 'Vosaltres camineu → tu', answer: 'tu camines' },
                  { original: 'Jo ballo → ella', answer: 'ella balla' },
                  { original: 'Ells treballen → nosaltres', answer: 'nosaltres treballem' }
                ]
              },
              {
                type: 'matching',
                instruction: 'Match each -AR verb with its English meaning.',
                pairs: [
                  { left: 'parlar', right: 'to speak' },
                  { left: 'treballar', right: 'to work' },
                  { left: 'estudiar', right: 'to study' },
                  { left: 'escoltar', right: 'to listen' },
                  { left: 'caminar', right: 'to walk' },
                  { left: 'comprar', right: 'to buy' },
                  { left: 'cantar', right: 'to sing' },
                  { left: 'ballar', right: 'to dance' }
                ]
              }
            ]
          },
          {
            id: 'g11',
            type: 'grammar',
            subtitle: 'Verbs Regulars -ER/-RE (beure, aprendre)',
            navLabel: 'Verbs regulars -ER',
            navLabelEn: 'Regular -ER/-RE Verbs',
            caseTag: 'VERB',
            explanation: 'Regular -ER/-RE verbs follow the pattern: bev-o, bev-s, beu, bev-em, bev-eu, bev-en. Note the 3rd person singular often drops the ending. Common verbs: beure (drink), aprendre (learn), córrer (run), vendre (sell), perdre (lose).',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct form of the verb in brackets.',
                items: [
                  { prompt: 'Jo ___ molt d\'aigua. (beure)', answer: 'bec', hint: '1st person singular -ER' },
                  { prompt: 'Tu ___ català ràpidament. (aprendre)', answer: 'aprens', hint: '2nd person singular -RE' },
                  { prompt: 'Ella ___ pel parc. (córrer)', answer: 'corre', hint: '3rd person singular -RE' },
                  { prompt: 'Nosaltres ___ la lliçó. (aprendre)', answer: 'aprenem', hint: '1st person plural' },
                  { prompt: 'Vosaltres ___ suc de taronja. (beure)', answer: 'beveu', hint: '2nd person plural' },
                  { prompt: 'Ells ___ verdures al mercat. (vendre)', answer: 'venen', hint: '3rd person plural -RE' },
                  { prompt: 'En Pere ___ el temps. (perdre)', answer: 'perd', hint: '3rd person singular' },
                  { prompt: 'Jo ___ cada matí. (córrer)', answer: 'corro', hint: '1st person singular' }
                ]
              },
              {
                type: 'matching',
                instruction: 'Match each -ER/-RE verb with its English meaning.',
                pairs: [
                  { left: 'beure', right: 'to drink' },
                  { left: 'aprendre', right: 'to learn' },
                  { left: 'córrer', right: 'to run' },
                  { left: 'vendre', right: 'to sell' },
                  { left: 'perdre', right: 'to lose' },
                  { left: 'conèixer', right: 'to know (a person)' },
                  { left: 'saber', right: 'to know (a fact)' },
                  { left: 'entendre', right: 'to understand' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct form of the -ER/-RE verb.',
                items: [
                  { sentence: 'Jo ___ català. (entendre)', options: ['entenc', 'entens', 'entén', 'entenem'], answer: 0 },
                  { sentence: 'Tu ___ molt de pressa. (córrer)', options: ['corro', 'corres', 'corre', 'correm'], answer: 1 },
                  { sentence: 'Ella ___ cafè. (beure)', options: ['bec', 'beus', 'beu', 'bevem'], answer: 2 },
                  { sentence: 'Nosaltres ___ moltes coses. (aprendre)', options: ['aprenc', 'aprens', 'aprenem', 'apreneu'], answer: 2 },
                  { sentence: 'Ells ___ cotxes usats. (vendre)', options: ['venc', 'vens', 'ven', 'venen'], answer: 3 },
                  { sentence: 'Vosaltres ___ la lliçó? (entendre)', options: ['enteneu', 'entenem', 'entenen', 'entén'], answer: 0 },
                  { sentence: 'En Joan ___ la partida. (perdre)', options: ['perdo', 'perds', 'perd', 'perdem'], answer: 2 },
                  { sentence: 'Jo ___ molta gent aquí. (conèixer)', options: ['conec', 'coneixes', 'coneix', 'coneixem'], answer: 0 }
                ]
              }
            ]
          },
          {
            id: 'g12',
            type: 'grammar',
            subtitle: 'Verbs Regulars -IR (dormir, sortir, llegir)',
            navLabel: 'Verbs regulars -IR',
            navLabelEn: 'Regular -IR Verbs',
            caseTag: 'VERB',
            explanation: 'Catalan -IR verbs split into two groups: those that insert -eix- in singular and 3rd plural (llegir → llegeixo, llegeixes, llegeix, llegim, llegiu, llegeixen) and those that do not (dormir → dormo, dorms, dorm, dormim, dormiu, dormen).',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct form of the verb in brackets.',
                items: [
                  { prompt: 'Jo ___ vuit hores cada nit. (dormir)', answer: 'dormo', hint: '1st person singular -IR' },
                  { prompt: 'Tu ___ molt tard. (sortir)', answer: 'surts', hint: '2nd person singular -IR' },
                  { prompt: 'Ella ___ molts llibres. (llegir)', answer: 'llegeix', hint: '3rd person singular -eix-' },
                  { prompt: 'Nosaltres ___ de casa a les 8. (sortir)', answer: 'sortim', hint: '1st person plural' },
                  { prompt: 'Vosaltres ___ fins a tard? (dormir)', answer: 'dormiu', hint: '2nd person plural' },
                  { prompt: 'Ells ___ molt bé en català. (escriure)', answer: 'escriuen', hint: '3rd person plural' },
                  { prompt: 'En Marc ___ cada vespre. (llegir)', answer: 'llegeix', hint: '3rd person singular -eix-' },
                  { prompt: 'Jo ___ de casa a les 9. (sortir)', answer: 'surto', hint: '1st person singular' }
                ]
              },
              {
                type: 'matching',
                instruction: 'Match each -IR verb with its English meaning.',
                pairs: [
                  { left: 'dormir', right: 'to sleep' },
                  { left: 'sortir', right: 'to go out / leave' },
                  { left: 'llegir', right: 'to read' },
                  { left: 'escriure', right: 'to write' },
                  { left: 'obrir', right: 'to open' },
                  { left: 'sentir', right: 'to feel / hear' },
                  { left: 'servir', right: 'to serve' },
                  { left: 'seguir', right: 'to follow / continue' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct form of the -IR verb.',
                items: [
                  { sentence: 'Jo ___ molt de nit. (dormir)', options: ['dormo', 'dorms', 'dorm', 'dormim'], answer: 0 },
                  { sentence: 'Tu ___ pel vespre? (sortir)', options: ['surto', 'surts', 'surt', 'sortim'], answer: 1 },
                  { sentence: 'Ella ___ novel·les. (llegir)', options: ['llegeixo', 'llegeixes', 'llegeix', 'llegim'], answer: 2 },
                  { sentence: 'Nosaltres ___ de bon matí. (sortir)', options: ['surto', 'surts', 'surt', 'sortim'], answer: 3 },
                  { sentence: 'Ells ___ molt bé. (dormir)', options: ['dormo', 'dorms', 'dorm', 'dormen'], answer: 3 },
                  { sentence: 'Vosaltres ___ català? (llegir)', options: ['llegeixo', 'llegiu', 'llegeixen', 'llegim'], answer: 1 },
                  { sentence: 'La porta ___. (obrir → 3sg)', options: ['obro', 'obres', 'obre', 'obrim'], answer: 2 },
                  { sentence: 'Jo ___ música. (sentir)', options: ['sento', 'sents', 'sent', 'sentim'], answer: 0 }
                ]
              }
            ]
          }
        ]
      },

      // ─────────────────────────────────────────────
      // CHAPTER 4 — Daily Life Vocabulary
      // ─────────────────────────────────────────────
      {
        id: 'chapter-4',
        title: 'Capítol IV — Vocabulari de la Vida Quotidiana',
        titleEn: 'Chapter IV — Daily Life Vocabulary',
        sections: [
          {
            id: 'v5',
            type: 'vocabulary',
            subtitle: 'Dies, Mesos i Estacions',
            navLabel: 'Dies i mesos',
            navLabelEn: 'Days & Months',
            caseTag: 'VOC',
            explanation: 'In Catalan, days of the week and months are not capitalised. The week starts on Monday (dilluns). Seasons are: primavera (spring), estiu (summer), tardor (autumn), hivern (winter).',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan day or month with its English equivalent.',
                pairs: [
                  { left: 'dilluns', right: 'Monday' },
                  { left: 'dimarts', right: 'Tuesday' },
                  { left: 'dimecres', right: 'Wednesday' },
                  { left: 'dijous', right: 'Thursday' },
                  { left: 'divendres', right: 'Friday' },
                  { left: 'dissabte', right: 'Saturday' },
                  { left: 'diumenge', right: 'Sunday' },
                  { left: 'gener', right: 'January' },
                  { left: 'febrer', right: 'February' },
                  { left: 'març', right: 'March' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct month or season.',
                items: [
                  { prompt: 'El primer mes de l\'any és el ___.', answer: 'gener', hint: 'January' },
                  { prompt: 'El mes de Nadal és el ___.', answer: 'desembre', hint: 'December' },
                  { prompt: 'L\'estació de les flors és la ___.', answer: 'primavera', hint: 'spring' },
                  { prompt: 'L\'estació de la neu és l\'___.', answer: 'hivern', hint: 'winter' },
                  { prompt: 'L\'estació de la platja és l\'___.', answer: 'estiu', hint: 'summer' },
                  { prompt: 'El mes de Sant Jordi és l\'___.', answer: 'abril', hint: 'April' },
                  { prompt: 'L\'estació de les fulles grogues és la ___.', answer: 'tardor', hint: 'autumn' },
                  { prompt: 'El mes de les festes de Gràcia és l\'___.', answer: 'agost', hint: 'August' }
                ]
              },
              {
                type: 'sorting',
                instruction: 'Sort these words into the correct category.',
                categories: ['Dia de la setmana', 'Mes de l\'any', 'Estació'],
                items: [
                  { word: 'dilluns', category: 'Dia de la setmana' },
                  { word: 'gener', category: 'Mes de l\'any' },
                  { word: 'estiu', category: 'Estació' },
                  { word: 'dimarts', category: 'Dia de la setmana' },
                  { word: 'abril', category: 'Mes de l\'any' },
                  { word: 'hivern', category: 'Estació' },
                  { word: 'divendres', category: 'Dia de la setmana' },
                  { word: 'octubre', category: 'Mes de l\'any' },
                  { word: 'tardor', category: 'Estació' },
                  { word: 'diumenge', category: 'Dia de la setmana' },
                  { word: 'juny', category: 'Mes de l\'any' },
                  { word: 'primavera', category: 'Estació' }
                ]
              }
            ]
          },
          {
            id: 'v6',
            type: 'vocabulary',
            subtitle: 'Expressions de Temps',
            navLabel: 'Expressions de temps',
            navLabelEn: 'Time Expressions',
            caseTag: 'VOC',
            explanation: 'Catalan time expressions are used to place actions in time: ara (now), avui (today), demà (tomorrow), ahir (yesterday), sempre (always), mai (never), sovint (often), de vegades (sometimes).',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan time expression with its English meaning.',
                pairs: [
                  { left: 'ara', right: 'now' },
                  { left: 'avui', right: 'today' },
                  { left: 'demà', right: 'tomorrow' },
                  { left: 'ahir', right: 'yesterday' },
                  { left: 'sempre', right: 'always' },
                  { left: 'mai', right: 'never' },
                  { left: 'sovint', right: 'often' },
                  { left: 'de vegades', right: 'sometimes' },
                  { left: 'aviat', right: 'soon' },
                  { left: 'tard', right: 'late' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct time expression.',
                items: [
                  { prompt: 'No menjis ___, és dolent per a la salut! (never)', answer: 'mai', hint: 'never' },
                  { prompt: 'Estic ___ molt ocupat. (always)', answer: 'sempre', hint: 'always' },
                  { prompt: '___ vaig al mercat. (yesterday)', answer: 'Ahir', hint: 'yesterday' },
                  { prompt: '___ plourà, segons la previsió. (tomorrow)', answer: 'Demà', hint: 'tomorrow' },
                  { prompt: 'Vinc ___! Espera\'m. (soon)', answer: 'aviat', hint: 'soon' },
                  { prompt: '___ faig esport, però no cada dia. (sometimes)', answer: 'De vegades', hint: 'sometimes' },
                  { prompt: 'Estudio català ___, tres cops a la setmana. (often)', answer: 'sovint', hint: 'often' },
                  { prompt: 'Haig d\'anar ___. (now)', answer: 'ara', hint: 'now' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct time expression to complete the sentence.',
                items: [
                  { sentence: '___ fa molt de fred però demà farà sol.', options: ['Avui', 'Demà', 'Ahir', 'Sempre'], answer: 0 },
                  { sentence: 'No bec ___ alcohol.', options: ['sovint', 'de vegades', 'mai', 'aviat'], answer: 2 },
                  { sentence: '___ vaig veure una pel·lícula molt bona.', options: ['Demà', 'Ara', 'Ahir', 'Aviat'], answer: 2 },
                  { sentence: '___ arribo tard a la feina.', options: ['Mai', 'Sempre', 'Avui', 'Demà'], answer: 1 },
                  { sentence: 'El tren arriba ___. Anem!', options: ['tard', 'mai', 'aviat', 'sempre'], answer: 2 },
                  { sentence: 'Vaig al gimnàs ___, dos cops per setmana.', options: ['mai', 'sovint', 'ara', 'avui'], answer: 1 },
                  { sentence: '___ estic molt cansada.', options: ['Aviat', 'Mai', 'Ara', 'Sempre'], answer: 2 },
                  { sentence: '___ anirem a Mallorca de vacances.', options: ['Ahir', 'Demà', 'Ara', 'Mai'], answer: 1 }
                ]
              }
            ]
          },
          {
            id: 'v7',
            type: 'vocabulary',
            subtitle: 'Els Colors',
            navLabel: 'Colors',
            navLabelEn: 'Colors',
            caseTag: 'VOC',
            explanation: 'In Catalan, colors are adjectives and must agree in gender and number with the noun they modify: blanc/blanca (white), negre/negra (black), vermell/vermella (red). Some colors are invariable: rosa, malva, taronja.',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan color with its English meaning.',
                pairs: [
                  { left: 'vermell / vermella', right: 'red' },
                  { left: 'blau / blava', right: 'blue' },
                  { left: 'verd / verda', right: 'green' },
                  { left: 'groc / groga', right: 'yellow' },
                  { left: 'blanc / blanca', right: 'white' },
                  { left: 'negre / negra', right: 'black' },
                  { left: 'taronja', right: 'orange' },
                  { left: 'rosa', right: 'pink' },
                  { left: 'morat / morada', right: 'purple' },
                  { left: 'marró', right: 'brown' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct color (with gender agreement).',
                items: [
                  { prompt: 'El cel és ___. (blue)', answer: 'blau', hint: 'masculine singular' },
                  { prompt: 'La porta és ___. (red)', answer: 'vermella', hint: 'feminine singular' },
                  { prompt: 'Els arbres són ___. (green)', answer: 'verds', hint: 'masculine plural' },
                  { prompt: 'Les flors són ___. (yellow)', answer: 'grogues', hint: 'feminine plural' },
                  { prompt: 'La neu és ___. (white)', answer: 'blanca', hint: 'feminine singular' },
                  { prompt: 'El gat és ___. (black)', answer: 'negre', hint: 'masculine singular' },
                  { prompt: 'La taronja és ___. (orange)', answer: 'taronja', hint: 'invariable color' },
                  { prompt: 'Les roses són ___. (pink)', answer: 'roses', hint: 'invariable color' }
                ]
              },
              {
                type: 'transformation',
                instruction: 'Change the color adjective to agree with the new noun.',
                items: [
                  { original: 'un cotxe vermell → una porta', answer: 'una porta vermella' },
                  { original: 'una casa blava → un cel', answer: 'un cel blau' },
                  { original: 'un vestit verd → unes sabates', answer: 'unes sabates verdes' },
                  { original: 'una flor groga → els globus', answer: 'els globus grocs' },
                  { original: 'un gat negre → una gata', answer: 'una gata negra' },
                  { original: 'una paret blanca → els murs', answer: 'els murs blancs' },
                  { original: 'un sofà marró → unes cadires', answer: 'unes cadires marrons' },
                  { original: 'una faldilla morada → el mocador', answer: 'el mocador morat' }
                ]
              }
            ]
          },
          {
            id: 'v8',
            type: 'vocabulary',
            subtitle: 'La Família i les Relacions',
            navLabel: 'La família',
            navLabelEn: 'Family & Relationships',
            caseTag: 'VOC',
            explanation: 'Family vocabulary in Catalan: pare (father), mare (mother), germà/germana (brother/sister), avi/àvia (grandfather/grandmother), fill/filla (son/daughter), marit/dona (husband/wife), cosí/cosina (cousin).',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan family word with its English meaning.',
                pairs: [
                  { left: 'el pare', right: 'the father' },
                  { left: 'la mare', right: 'the mother' },
                  { left: 'el germà', right: 'the brother' },
                  { left: 'la germana', right: 'the sister' },
                  { left: 'l\'avi', right: 'the grandfather' },
                  { left: 'l\'àvia', right: 'the grandmother' },
                  { left: 'el fill', right: 'the son' },
                  { left: 'la filla', right: 'the daughter' },
                  { left: 'el marit', right: 'the husband' },
                  { left: 'la dona', right: 'the wife' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct family word.',
                items: [
                  { prompt: 'La mare del meu pare és la meva ___. (grandmother)', answer: 'àvia', hint: 'grandmother' },
                  { prompt: 'El fill del meu oncle és el meu ___. (cousin m.)', answer: 'cosí', hint: 'male cousin' },
                  { prompt: 'La germana de la meva mare és la meva ___. (aunt)', answer: 'tieta', hint: 'aunt' },
                  { prompt: 'El pare del meu pare és el meu ___. (grandfather)', answer: 'avi', hint: 'grandfather' },
                  { prompt: 'La filla del meu germà és la meva ___. (niece)', answer: 'neboda', hint: 'niece' },
                  { prompt: 'El fill de la meva germana és el meu ___. (nephew)', answer: 'nebot', hint: 'nephew' },
                  { prompt: 'El germà del meu pare és el meu ___. (uncle)', answer: 'oncle', hint: 'uncle' },
                  { prompt: 'La meva mare i el meu pare són els meus ___. (parents)', answer: 'pares', hint: 'parents' }
                ]
              },
              {
                type: 'sorting',
                instruction: 'Sort these family members into the correct generation.',
                categories: ['Generació gran', 'La meva generació', 'Generació jove'],
                items: [
                  { word: 'l\'avi', category: 'Generació gran' },
                  { word: 'el germà', category: 'La meva generació' },
                  { word: 'el fill', category: 'Generació jove' },
                  { word: 'l\'àvia', category: 'Generació gran' },
                  { word: 'la cosina', category: 'La meva generació' },
                  { word: 'la filla', category: 'Generació jove' },
                  { word: 'el besavi', category: 'Generació gran' },
                  { word: 'la germana', category: 'La meva generació' },
                  { word: 'el nebot', category: 'Generació jove' },
                  { word: 'la besàvia', category: 'Generació gran' },
                  { word: 'el cosí', category: 'La meva generació' },
                  { word: 'la neboda', category: 'Generació jove' }
                ]
              }
            ]
          },
          {
            id: 'v9',
            type: 'vocabulary',
            subtitle: 'Menjar i Beure',
            navLabel: 'Menjar i beure',
            navLabelEn: 'Food & Drink',
            caseTag: 'VOC',
            explanation: 'Essential food and drink vocabulary in Catalan. Note that Catalan has its own words that differ from Spanish: menjar (food), esmorzar (breakfast), dinar (lunch), sopar (dinner), beguda (drink), pa (bread), fruita (fruit).',
            exercises: [
              {
                type: 'sorting',
                instruction: 'Sort these words into Food or Drink.',
                categories: ['Menjar', 'Beguda'],
                items: [
                  { word: 'pa', category: 'Menjar' },
                  { word: 'aigua', category: 'Beguda' },
                  { word: 'poma', category: 'Menjar' },
                  { word: 'cafè', category: 'Beguda' },
                  { word: 'formatge', category: 'Menjar' },
                  { word: 'suc de taronja', category: 'Beguda' },
                  { word: 'pollastre', category: 'Menjar' },
                  { word: 'llet', category: 'Beguda' },
                  { word: 'arròs', category: 'Menjar' },
                  { word: 'vi', category: 'Beguda' },
                  { word: 'peix', category: 'Menjar' },
                  { word: 'cervesa', category: 'Beguda' }
                ]
              },
              {
                type: 'matching',
                instruction: 'Match each Catalan food word with its English meaning.',
                pairs: [
                  { left: 'pa', right: 'bread' },
                  { left: 'carn', right: 'meat' },
                  { left: 'peix', right: 'fish' },
                  { left: 'fruita', right: 'fruit' },
                  { left: 'verdura', right: 'vegetable' },
                  { left: 'formatge', right: 'cheese' },
                  { left: 'ou', right: 'egg' },
                  { left: 'arròs', right: 'rice' },
                  { left: 'pasta', right: 'pasta' },
                  { left: 'sucre', right: 'sugar' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct food or drink word.',
                items: [
                  { prompt: 'Per esmorzar menjo ___ amb mantequilla. (bread)', answer: 'pa', hint: 'bread' },
                  { prompt: 'Per beure vull un ___ amb llet. (coffee)', answer: 'cafè', hint: 'coffee' },
                  { prompt: 'A la Mediterrània mengem molt ___. (fish)', answer: 'peix', hint: 'fish' },
                  { prompt: 'La paella es fa amb ___ i marisc. (rice)', answer: 'arròs', hint: 'rice' },
                  { prompt: 'Per postres vull una ___. (apple)', answer: 'poma', hint: 'apple' },
                  { prompt: 'Beveu ___ per estar sans. (water)', answer: 'aigua', hint: 'water' },
                  { prompt: 'La truita es fa amb ___. (eggs)', answer: 'ous', hint: 'eggs' },
                  { prompt: 'El ___ català és molt bo. (cheese)', answer: 'formatge', hint: 'cheese' }
                ]
              }
            ]
          },
          {
            id: 'v10',
            type: 'vocabulary',
            subtitle: 'El Cos Humà',
            navLabel: 'El cos humà',
            navLabelEn: 'Body Parts',
            caseTag: 'VOC',
            explanation: 'Body parts in Catalan: cap (head), ull (eye), nas (nose), boca (mouth), orella (ear), braç (arm), mà (hand), cama (leg), peu (foot), pit (chest), esquena (back).',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan body part with its English meaning.',
                pairs: [
                  { left: 'el cap', right: 'the head' },
                  { left: 'l\'ull', right: 'the eye' },
                  { left: 'el nas', right: 'the nose' },
                  { left: 'la boca', right: 'the mouth' },
                  { left: 'l\'orella', right: 'the ear' },
                  { left: 'el braç', right: 'the arm' },
                  { left: 'la mà', right: 'the hand' },
                  { left: 'la cama', right: 'the leg' },
                  { left: 'el peu', right: 'the foot' },
                  { left: 'l\'esquena', right: 'the back' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct body part.',
                items: [
                  { prompt: 'Escolto música amb les ___. (ears)', answer: 'orelles', hint: 'ears (plural)' },
                  { prompt: 'Veig amb els ___. (eyes)', answer: 'ulls', hint: 'eyes (plural)' },
                  { prompt: 'Camino amb les ___. (legs)', answer: 'cames', hint: 'legs (plural)' },
                  { prompt: 'Escric amb la ___. (hand)', answer: 'mà', hint: 'hand' },
                  { prompt: 'El ___ és la part superior del cos. (head)', answer: 'cap', hint: 'head' },
                  { prompt: 'Menjo amb la ___. (mouth)', answer: 'boca', hint: 'mouth' },
                  { prompt: 'Duo moltes coses amb els ___. (arms)', answer: 'braços', hint: 'arms (plural)' },
                  { prompt: 'Porto sabates als ___. (feet)', answer: 'peus', hint: 'feet (plural)' }
                ]
              },
              {
                type: 'sorting',
                instruction: 'Sort these body parts by their location on the body.',
                categories: ['Cap i coll', 'Tronc', 'Extremitats'],
                items: [
                  { word: 'l\'ull', category: 'Cap i coll' },
                  { word: 'el pit', category: 'Tronc' },
                  { word: 'el braç', category: 'Extremitats' },
                  { word: 'el nas', category: 'Cap i coll' },
                  { word: 'l\'esquena', category: 'Tronc' },
                  { word: 'la cama', category: 'Extremitats' },
                  { word: 'la boca', category: 'Cap i coll' },
                  { word: 'el ventre', category: 'Tronc' },
                  { word: 'la mà', category: 'Extremitats' },
                  { word: 'l\'orella', category: 'Cap i coll' },
                  { word: 'el maluc', category: 'Tronc' },
                  { word: 'el peu', category: 'Extremitats' }
                ]
              }
            ]
          }
        ]
      },

      // ─────────────────────────────────────────────
      // CHAPTER 5 — Adjectives & Agreement
      // ─────────────────────────────────────────────
      {
        id: 'chapter-5',
        title: 'Capítol V — Adjectius i Concordança',
        titleEn: 'Chapter V — Adjectives & Agreement',
        sections: [
          {
            id: 'g13',
            type: 'grammar',
            subtitle: 'Concordança de Gènere dels Adjectius',
            navLabel: 'Gènere adjectius',
            navLabelEn: 'Adjective Gender',
            caseTag: 'ADJ',
            explanation: 'Catalan adjectives agree in gender with the noun they modify. Most adjectives ending in a consonant add -a for feminine (gran → gran, alt → alta). Adjectives ending in -e usually change to -a (bonic → bonica). Some are invariable (feliç, intel·ligent).',
            exercises: [
              {
                type: 'transformation',
                instruction: 'Change the adjective to agree with the feminine noun.',
                items: [
                  { original: 'un noi alt → una noia', answer: 'una noia alta' },
                  { original: 'un cotxe bonic → una casa', answer: 'una casa bonica' },
                  { original: 'un home gran → una dona', answer: 'una dona gran' },
                  { original: 'un gat negre → una gata', answer: 'una gata negra' },
                  { original: 'un nen petit → una nena', answer: 'una nena petita' },
                  { original: 'un vestit vermell → una samarreta', answer: 'una samarreta vermella' },
                  { original: 'un pare content → una mare', answer: 'una mare contenta' },
                  { original: 'un dia fred → una nit', answer: 'una nit freda' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the adjective in the correct gender form.',
                items: [
                  { prompt: 'La porta és ___. (gran)', answer: 'gran', hint: 'invariable adjective' },
                  { prompt: 'La noia és molt ___. (alt)', answer: 'alta', hint: 'add -a for feminine' },
                  { prompt: 'La casa és ___. (bonic)', answer: 'bonica', hint: '-e → -a in feminine' },
                  { prompt: 'La llet és ___. (fred)', answer: 'freda', hint: 'add -a for feminine' },
                  { prompt: 'La professora és molt ___. (intel·ligent)', answer: 'intel·ligent', hint: 'invariable' },
                  { prompt: 'La nit és ___. (llarg)', answer: 'llarga', hint: 'add -a for feminine' },
                  { prompt: 'La flor és ___. (bonic)', answer: 'bonica', hint: '-e → -a in feminine' },
                  { prompt: 'La roba és ___. (net)', answer: 'neta', hint: 'add -a for feminine' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct form of the adjective.',
                items: [
                  { sentence: 'La professora és molt ___.', options: ['intel·ligent', 'intel·ligenta', 'intel·ligente', 'intel·ligents'], answer: 0 },
                  { sentence: 'La porta és molt ___.', options: ['alt', 'alta', 'alts', 'altes'], answer: 1 },
                  { sentence: 'La casa és molt ___.', options: ['bonic', 'bonica', 'boniques', 'bonics'], answer: 1 },
                  { sentence: 'La noia és ___.', options: ['content', 'contenta', 'contents', 'contentes'], answer: 1 },
                  { sentence: 'La sang és ___. (red)', options: ['vermell', 'vermells', 'vermella', 'vermelles'], answer: 2 },
                  { sentence: 'L\'estudiant és ___. (female)', options: ['treballador', 'treballadors', 'treballadora', 'treballadores'], answer: 2 },
                  { sentence: 'La beguda és ___. (cold)', options: ['fred', 'freda', 'freds', 'fredes'], answer: 1 },
                  { sentence: 'La faldilla és ___.', options: ['llarg', 'llarga', 'llargs', 'llargues'], answer: 1 }
                ]
              }
            ]
          },
          {
            id: 'g14',
            type: 'grammar',
            subtitle: 'Concordança de Nombre i Posició dels Adjectius',
            navLabel: 'Nombre adjectius',
            navLabelEn: 'Adjective Number & Position',
            caseTag: 'ADJ',
            explanation: 'Adjectives in Catalan also agree in number (singular/plural) and generally follow the noun (una casa gran, uns nois alts). However, certain adjectives like bon/bona, gran, and poc precede the noun for stylistic reasons.',
            exercises: [
              {
                type: 'transformation',
                instruction: 'Make the adjective agree with the plural noun.',
                items: [
                  { original: 'una noia alta → unes noies', answer: 'unes noies altes' },
                  { original: 'un cotxe bonic → uns cotxes', answer: 'uns cotxes bonics' },
                  { original: 'un home gran → uns homes', answer: 'uns homes grans' },
                  { original: 'una gata negra → unes gates', answer: 'unes gates negres' },
                  { original: 'un nen petit → uns nens', answer: 'uns nens petits' },
                  { original: 'una flor vermella → unes flors', answer: 'unes flors vermelles' },
                  { original: 'un dia llarg → uns dies', answer: 'uns dies llargs' },
                  { original: 'una casa bonica → unes cases', answer: 'unes cases boniques' }
                ]
              },
              {
                type: 'reorder',
                instruction: 'Place the adjective correctly in the sentence (usually after the noun).',
                items: [
                  { words: ['una', 'casa', 'gran'], answer: 'una casa gran' },
                  { words: ['uns', 'nois', 'alts'], answer: 'uns nois alts' },
                  { words: ['un', 'bon', 'dia'], answer: 'un bon dia' },
                  { words: ['unes', 'flors', 'boniques'], answer: 'unes flors boniques' },
                  { words: ['una', 'bona', 'professora'], answer: 'una bona professora' },
                  { words: ['els', 'cotxes', 'nous'], answer: 'els cotxes nous' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the adjective in the correct number form.',
                items: [
                  { prompt: 'Els nois són molt ___. (alt)', answer: 'alts', hint: 'masculine plural' },
                  { prompt: 'Les cases són ___. (gran)', answer: 'grans', hint: 'plural invariable for gender' },
                  { prompt: 'Els cotxes són ___. (bonic)', answer: 'bonics', hint: 'masculine plural' },
                  { prompt: 'Les flors són ___. (vermell)', answer: 'vermelles', hint: 'feminine plural' },
                  { prompt: 'Els dies són ___. (llarg)', answer: 'llargs', hint: 'masculine plural' },
                  { prompt: 'Les noies són ___. (intel·ligent)', answer: 'intel·ligents', hint: 'plural invariable for gender' },
                  { prompt: 'Els exercicis són ___. (difícil)', answer: 'difícils', hint: 'masculine plural' },
                  { prompt: 'Les preguntes són ___. (fàcil)', answer: 'fàcils', hint: 'feminine plural' }
                ]
              }
            ]
          },
          {
            id: 'g15',
            type: 'grammar',
            subtitle: 'Adjectius Descriptius Comuns',
            navLabel: 'Adjectius descriptius',
            navLabelEn: 'Common Descriptives',
            caseTag: 'ADJ',
            explanation: 'Key descriptive adjective pairs in Catalan: alt/baix (tall/short), gran/petit (big/small), jove/vell (young/old), ràpid/lent (fast/slow), fort/dèbil (strong/weak), fàcil/difícil (easy/difficult), net/brut (clean/dirty).',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan adjective with its English meaning.',
                pairs: [
                  { left: 'alt / alta', right: 'tall' },
                  { left: 'baix / baixa', right: 'short / low' },
                  { left: 'gran', right: 'big / large' },
                  { left: 'petit / petita', right: 'small / little' },
                  { left: 'jove', right: 'young' },
                  { left: 'vell / vella', right: 'old' },
                  { left: 'ràpid / ràpida', right: 'fast' },
                  { left: 'lent / lenta', right: 'slow' },
                  { left: 'fort / forta', right: 'strong' },
                  { left: 'dèbil', right: 'weak' }
                ]
              },
              {
                type: 'sorting',
                instruction: 'Sort these adjectives by their meaning (positive quality vs negative quality — subjective).',
                categories: ['Valoració positiva', 'Valoració negativa'],
                items: [
                  { word: 'bonic / bonica', category: 'Valoració positiva' },
                  { word: 'lleig / lletja', category: 'Valoració negativa' },
                  { word: 'net / neta', category: 'Valoració positiva' },
                  { word: 'brut / bruta', category: 'Valoració negativa' },
                  { word: 'simpàtic / simpàtica', category: 'Valoració positiva' },
                  { word: 'antipàtic / antipàtica', category: 'Valoració negativa' },
                  { word: 'intel·ligent', category: 'Valoració positiva' },
                  { word: 'perezós / perezosa', category: 'Valoració negativa' },
                  { word: 'amable', category: 'Valoració positiva' },
                  { word: 'maleducat / maleducada', category: 'Valoració negativa' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the opposite adjective (with correct agreement).',
                items: [
                  { prompt: 'No és alt, és ___. (short, m.)', answer: 'baix', hint: 'opposite of alt' },
                  { prompt: 'No és gran, és ___. (small, f.)', answer: 'petita', hint: 'opposite of gran' },
                  { prompt: 'No és vella, és ___. (young, f.)', answer: 'jove', hint: 'opposite of vell' },
                  { prompt: 'No és ràpid, és ___. (slow, m.)', answer: 'lent', hint: 'opposite of ràpid' },
                  { prompt: 'No és net, és ___. (dirty, m.)', answer: 'brut', hint: 'opposite of net' },
                  { prompt: 'No és fàcil, és ___. (difficult)', answer: 'difícil', hint: 'opposite of fàcil' },
                  { prompt: 'No és fort, és ___. (weak, m.)', answer: 'dèbil', hint: 'opposite of fort' },
                  { prompt: 'No és bonic, és ___. (ugly, m.)', answer: 'lleig', hint: 'opposite of bonic' }
                ]
              }
            ]
          },
          {
            id: 'v11',
            type: 'vocabulary',
            subtitle: 'La Roba i la Moda',
            navLabel: 'La roba',
            navLabelEn: 'Clothes & Fashion',
            caseTag: 'VOC',
            explanation: 'Clothing vocabulary in Catalan: camisa (shirt), pantalons (trousers), vestit (dress/suit), sabates (shoes), jersei (jumper), abric (coat), barret (hat), mitges (stockings/socks). Use "portar" or "dur" (to wear).',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan clothing item with its English meaning.',
                pairs: [
                  { left: 'la camisa', right: 'the shirt' },
                  { left: 'els pantalons', right: 'the trousers' },
                  { left: 'el vestit', right: 'the dress / suit' },
                  { left: 'les sabates', right: 'the shoes' },
                  { left: 'el jersei', right: 'the jumper / sweater' },
                  { left: 'l\'abric', right: 'the coat' },
                  { left: 'el barret', right: 'the hat' },
                  { left: 'la faldilla', right: 'the skirt' },
                  { left: 'les mitges', right: 'the stockings / tights' },
                  { left: 'la samarreta', right: 'the T-shirt' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct clothing item.',
                items: [
                  { prompt: 'A l\'hivern porto un ___. (coat)', answer: 'abric', hint: 'coat' },
                  { prompt: 'A l\'estiu porto una ___. (T-shirt)', answer: 'samarreta', hint: 'T-shirt' },
                  { prompt: 'Per a l\'oficina porto una ___. (shirt)', answer: 'camisa', hint: 'shirt' },
                  { prompt: 'Als peus porto ___. (shoes)', answer: 'sabates', hint: 'shoes' },
                  { prompt: 'Al cap porto un ___. (hat)', answer: 'barret', hint: 'hat' },
                  { prompt: 'Les dones porten ___. (skirt)', answer: 'faldilla', hint: 'skirt' },
                  { prompt: 'Quan fa fred porto un ___. (jumper)', answer: 'jersei', hint: 'jumper' },
                  { prompt: 'Porto ___ negres a la feina. (trousers)', answer: 'pantalons', hint: 'trousers' }
                ]
              },
              {
                type: 'sorting',
                instruction: 'Sort these clothing items by season.',
                categories: ['Estiu', 'Hivern', 'Tot l\'any'],
                items: [
                  { word: 'la samarreta', category: 'Estiu' },
                  { word: 'l\'abric', category: 'Hivern' },
                  { word: 'els pantalons', category: 'Tot l\'any' },
                  { word: 'el banyador', category: 'Estiu' },
                  { word: 'el jersei', category: 'Hivern' },
                  { word: 'la camisa', category: 'Tot l\'any' },
                  { word: 'les sandàlies', category: 'Estiu' },
                  { word: 'la bufanda', category: 'Hivern' },
                  { word: 'les sabates', category: 'Tot l\'any' },
                  { word: 'el vestit de bany', category: 'Estiu' },
                  { word: 'els guants', category: 'Hivern' },
                  { word: 'les mitges', category: 'Tot l\'any' }
                ]
              }
            ]
          }
        ]
      },

      // ─────────────────────────────────────────────
      // CHAPTER 6 — Question Words & Prepositions
      // ─────────────────────────────────────────────
      {
        id: 'chapter-6',
        title: 'Capítol VI — Interrogatius i Preposicions',
        titleEn: 'Chapter VI — Question Words & Prepositions',
        sections: [
          {
            id: 'g16',
            type: 'grammar',
            subtitle: 'Paraules Interrogatives',
            navLabel: 'Interrogatius',
            navLabelEn: 'Question Words',
            caseTag: 'GRAM',
            explanation: 'Catalan question words (interrogatius): Qui? (Who?), Què? (What?), On? (Where?), Com? (How?), Quan? (When?), Per què? (Why?), Quant/Quants? (How much/many?), Quin/Quina? (Which?).',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan question word with its English meaning.',
                pairs: [
                  { left: 'Qui?', right: 'Who?' },
                  { left: 'Què?', right: 'What?' },
                  { left: 'On?', right: 'Where?' },
                  { left: 'Com?', right: 'How?' },
                  { left: 'Quan?', right: 'When?' },
                  { left: 'Per què?', right: 'Why?' },
                  { left: 'Quant?', right: 'How much?' },
                  { left: 'Quants?', right: 'How many?' },
                  { left: 'Quin / Quina?', right: 'Which?' },
                  { left: 'D\'on?', right: 'Where from?' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct question word.',
                items: [
                  { prompt: '___ et dius? (What is your name?)', answer: 'Com', hint: 'How? — used for names' },
                  { prompt: '___ vius? (Where do you live?)', answer: 'On', hint: 'Where?' },
                  { prompt: '___ ets? (Who are you?)', answer: 'Qui', hint: 'Who?' },
                  { prompt: '___ tens anys? (How old are you?)', answer: 'Quants', hint: 'How many?' },
                  { prompt: '___ ets de Girona? (Why are you from Girona?)', answer: 'Per què', hint: 'Why?' },
                  { prompt: '___ arriba el tren? (When does the train arrive?)', answer: 'Quan', hint: 'When?' },
                  { prompt: '___ costa? (How much does it cost?)', answer: 'Quant', hint: 'How much?' },
                  { prompt: '___ és el teu color favorit? (Which is your favourite color?)', answer: 'Quin', hint: 'Which? (m.)' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct question word to complete each question.',
                items: [
                  { sentence: '___ és la teva professora?', options: ['Qui', 'Què', 'On', 'Com'], answer: 0 },
                  { sentence: '___ fas els caps de setmana?', options: ['Qui', 'Què', 'On', 'Quan'], answer: 1 },
                  { sentence: '___ vius, a Barcelona o a Girona?', options: ['Qui', 'Quan', 'On', 'Com'], answer: 2 },
                  { sentence: '___ et trobes?', options: ['On', 'Quan', 'Per què', 'Com'], answer: 3 },
                  { sentence: '___ comença la classe?', options: ['Qui', 'Quant', 'Quan', 'Quin'], answer: 2 },
                  { sentence: '___ no véns?', options: ['Quan', 'Qui', 'Per què', 'On'], answer: 2 },
                  { sentence: '___ costa un cafè?', options: ['Quants', 'Quant', 'Quin', 'Quan'], answer: 1 },
                  { sentence: '___ és la teva maleta?', options: ['Qui', 'Quina', 'On', 'Quan'], answer: 1 }
                ]
              }
            ]
          },
          {
            id: 'g17',
            type: 'grammar',
            subtitle: 'Preposicions Bàsiques',
            navLabel: 'Preposicions',
            navLabelEn: 'Basic Prepositions',
            caseTag: 'PREP',
            explanation: 'Key Catalan prepositions: a (at/to), de (of/from), en (in/on), amb (with), per (for/by/through), per a (for — intended recipient), sense (without), entre (between/among). Note: "per" vs "per a" is a common difficulty.',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan preposition with its English meaning.',
                pairs: [
                  { left: 'a', right: 'at / to' },
                  { left: 'de', right: 'of / from' },
                  { left: 'en', right: 'in / on' },
                  { left: 'amb', right: 'with' },
                  { left: 'per', right: 'for / by / through' },
                  { left: 'per a', right: 'for (recipient)' },
                  { left: 'sense', right: 'without' },
                  { left: 'entre', right: 'between / among' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct preposition.',
                items: [
                  { prompt: 'Visc ___ Barcelona.', answer: 'a', hint: 'location: at/in a city' },
                  { prompt: 'Soc ___ Tarragona.', answer: 'de', hint: 'origin: from' },
                  { prompt: 'Vinc ___ cotxe.', answer: 'en', hint: 'means of transport' },
                  { prompt: 'Vinc ___ el meu amic.', answer: 'amb', hint: 'with a person' },
                  { prompt: 'Aquest regal és ___ la meva mare.', answer: 'per a', hint: 'intended for a person' },
                  { prompt: 'Passo ___ la plaça cada dia.', answer: 'per', hint: 'through a place' },
                  { prompt: 'No puc dormir ___ soroll.', answer: 'sense', hint: 'without' },
                  { prompt: 'La farmàcia és ___ la panaderia i el banc.', answer: 'entre', hint: 'between' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct preposition.',
                items: [
                  { sentence: 'Vaig ___ escola cada dia.', options: ['de', 'a', 'en', 'amb'], answer: 1 },
                  { sentence: 'Soc ___ Girona.', options: ['a', 'de', 'en', 'amb'], answer: 1 },
                  { sentence: 'Parlo ___ la meva amiga.', options: ['a', 'de', 'en', 'amb'], answer: 3 },
                  { sentence: 'Viatge ___ avió.', options: ['a', 'de', 'en', 'amb'], answer: 2 },
                  { sentence: 'Compro una beguda ___ tu.', options: ['per', 'per a', 'sense', 'entre'], answer: 1 },
                  { sentence: 'Passo ___ el carrer Major.', options: ['a', 'de', 'per', 'amb'], answer: 2 },
                  { sentence: 'Bec cafè ___ sucre.', options: ['amb', 'de', 'per', 'sense'], answer: 0 },
                  { sentence: 'Tria ___ el verd i el blau.', options: ['per', 'sense', 'entre', 'amb'], answer: 2 }
                ]
              }
            ]
          },
          {
            id: 'g18',
            type: 'grammar',
            subtitle: 'Contraccions: del, al, dels, als',
            navLabel: 'Contraccions',
            navLabelEn: 'Contractions',
            caseTag: 'PREP',
            explanation: 'In Catalan, the preposition "de" + "el" contracts to "del", and "a" + "el" contracts to "al". With plural: "de" + "els" = "dels", "a" + "els" = "als". These contractions are mandatory (never "de el" or "a el"). Feminine and before vowels: no contraction (de la, a la, de l\', a l\').',
            exercises: [
              {
                type: 'transformation',
                instruction: 'Apply the correct contraction where needed.',
                items: [
                  { original: 'Vaig a + el mercat', answer: 'Vaig al mercat' },
                  { original: 'El cotxe de + el professor', answer: 'El cotxe del professor' },
                  { original: 'Vaig a + els nens', answer: 'Vaig als nens' },
                  { original: 'La classe de + els alumnes', answer: 'La classe dels alumnes' },
                  { original: 'Vaig a + la biblioteca', answer: 'Vaig a la biblioteca' },
                  { original: 'El cotxe de + la professora', answer: 'El cotxe de la professora' },
                  { original: 'Vaig a + l\'escola', answer: 'Vaig a l\'escola' },
                  { original: 'La porta de + el jardí', answer: 'La porta del jardí' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct contraction (al, als, del, dels) or preposition + article.',
                items: [
                  { prompt: 'Vaig ___ parc cada dia.', answer: 'al', hint: 'a + el' },
                  { prompt: 'El cotxe ___ director és vermell.', answer: 'del', hint: 'de + el' },
                  { prompt: 'Parla ___ seus fills.', answer: 'dels', hint: 'de + els' },
                  { prompt: 'Vaig ___ cinema amb els amics.', answer: 'al', hint: 'a + el' },
                  { prompt: 'La porta ___ jardí és verda.', answer: 'del', hint: 'de + el' },
                  { prompt: 'Escriu ___ alumnes una carta.', answer: 'als', hint: 'a + els' },
                  { prompt: 'Vinc ___ la feina ara.', answer: 'de', hint: 'no contraction before la' },
                  { prompt: 'Vaig ___ l\'escola a peu.', answer: 'a', hint: 'no contraction before l\'' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct form.',
                items: [
                  { sentence: 'El fill ___ professor és molt simpàtic.', options: ['de el', 'del', 'de la', 'de l\''], answer: 1 },
                  { sentence: 'Vaig ___ mercat cada divendres.', options: ['a el', 'al', 'a la', 'a l\''], answer: 1 },
                  { sentence: 'Parlem ___ problemes del país.', options: ['de els', 'dels', 'de les', 'de l\''], answer: 1 },
                  { sentence: 'Escric ___ alumnes de la classe.', options: ['a els', 'als', 'a les', 'a l\''], answer: 1 },
                  { sentence: 'La germana ___ directora arriba avui.', options: ['del', 'de la', 'dels', 'de l\''], answer: 1 },
                  { sentence: 'Vaig ___ escola a peu.', options: ['al', 'als', 'a la', 'a l\''], answer: 3 },
                  { sentence: 'El cotxe ___ professors és gran.', options: ['del', 'de la', 'dels', 'de l\''], answer: 2 },
                  { sentence: 'Vaig ___ nois a buscar-los.', options: ['al', 'a la', 'als', 'a l\''], answer: 2 }
                ]
              }
            ]
          }
        ]
      },

      // ─────────────────────────────────────────────
      // CHAPTER 7 — Around Town
      // ─────────────────────────────────────────────
      {
        id: 'chapter-7',
        title: 'Capítol VII — Per la Ciutat',
        titleEn: 'Chapter VII — Around Town',
        sections: [
          {
            id: 'v12',
            type: 'vocabulary',
            subtitle: 'La Ciutat i els Llocs',
            navLabel: 'La ciutat',
            navLabelEn: 'City & Places',
            caseTag: 'VOC',
            explanation: 'Key vocabulary for navigating a Catalan city: carrer (street), plaça (square), mercat (market), escola (school), hospital (hospital), ajuntament (town hall), biblioteca (library), farmàcia (pharmacy), banc (bank), parc (park).',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan place with its English meaning.',
                pairs: [
                  { left: 'el mercat', right: 'the market' },
                  { left: 'l\'escola', right: 'the school' },
                  { left: 'l\'hospital', right: 'the hospital' },
                  { left: 'l\'ajuntament', right: 'the town hall' },
                  { left: 'la biblioteca', right: 'the library' },
                  { left: 'la farmàcia', right: 'the pharmacy' },
                  { left: 'el banc', right: 'the bank' },
                  { left: 'el parc', right: 'the park' },
                  { left: 'la plaça', right: 'the square' },
                  { left: 'el carrer', right: 'the street' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct place.',
                items: [
                  { prompt: 'Compro pa a la ___. (bakery)', answer: 'fleca', hint: 'bakery' },
                  { prompt: 'Agafo diners al ___. (bank)', answer: 'banc', hint: 'bank' },
                  { prompt: 'El metge treballa a l\'___. (hospital)', answer: 'hospital', hint: 'hospital' },
                  { prompt: 'Els nens van a l\'___. (school)', answer: 'escola', hint: 'school' },
                  { prompt: 'Llegeixo llibres a la ___. (library)', answer: 'biblioteca', hint: 'library' },
                  { prompt: 'Compro verdures al ___. (market)', answer: 'mercat', hint: 'market' },
                  { prompt: 'Prenc pastilles de la ___. (pharmacy)', answer: 'farmàcia', hint: 'pharmacy' },
                  { prompt: 'Els nens juguen al ___. (park)', answer: 'parc', hint: 'park' }
                ]
              },
              {
                type: 'sorting',
                instruction: 'Sort these places into the correct category.',
                categories: ['Serveis públics', 'Comerços', 'Espais oberts'],
                items: [
                  { word: 'l\'hospital', category: 'Serveis públics' },
                  { word: 'el mercat', category: 'Comerços' },
                  { word: 'el parc', category: 'Espais oberts' },
                  { word: 'l\'escola', category: 'Serveis públics' },
                  { word: 'la botiga', category: 'Comerços' },
                  { word: 'la plaça', category: 'Espais oberts' },
                  { word: 'la biblioteca', category: 'Serveis públics' },
                  { word: 'la fleca', category: 'Comerços' },
                  { word: 'el jardí', category: 'Espais oberts' },
                  { word: 'l\'ajuntament', category: 'Serveis públics' },
                  { word: 'la farmàcia', category: 'Comerços' },
                  { word: 'el carrer', category: 'Espais oberts' }
                ]
              }
            ]
          },
          {
            id: 'v13',
            type: 'vocabulary',
            subtitle: 'El Transport',
            navLabel: 'El transport',
            navLabelEn: 'Transport',
            caseTag: 'VOC',
            explanation: 'Transport vocabulary in Catalan: metro (metro/underground), autobús (bus), tren (train), cotxe (car), bicicleta (bicycle), avió (aeroplane), vaixell (boat/ship), taxi (taxi). Use "agafar" (to take) or "anar en" (to go by) with transport.',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan transport word with its English meaning.',
                pairs: [
                  { left: 'el metro', right: 'the underground / metro' },
                  { left: 'l\'autobús', right: 'the bus' },
                  { left: 'el tren', right: 'the train' },
                  { left: 'el cotxe', right: 'the car' },
                  { left: 'la bicicleta', right: 'the bicycle' },
                  { left: 'l\'avió', right: 'the aeroplane' },
                  { left: 'el vaixell', right: 'the boat / ship' },
                  { left: 'el taxi', right: 'the taxi' },
                  { left: 'la moto', right: 'the motorbike' },
                  { left: 'el tramvia', right: 'the tram' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct transport word or expression.',
                items: [
                  { prompt: 'Vaig a la feina en ___. (metro)', answer: 'metro', hint: 'underground' },
                  { prompt: 'Agafo l\'___ a les 8 del matí. (bus)', answer: 'autobús', hint: 'bus' },
                  { prompt: 'El ___ Barcelona–Madrid tarda tres hores. (train)', answer: 'tren', hint: 'train' },
                  { prompt: 'Vaig a Mallorca en ___. (aeroplane)', answer: 'avió', hint: 'aeroplane' },
                  { prompt: 'Vaig a l\'escola en ___. (bicycle)', answer: 'bicicleta', hint: 'bicycle' },
                  { prompt: 'Demano un ___ per anar a l\'aeroport. (taxi)', answer: 'taxi', hint: 'taxi' },
                  { prompt: 'Anem a Menorca en ___. (boat)', answer: 'vaixell', hint: 'boat' },
                  { prompt: 'El meu pare va a la feina en ___. (car)', answer: 'cotxe', hint: 'car' }
                ]
              },
              {
                type: 'reorder',
                instruction: 'Rearrange the words to form a correct sentence about transport.',
                items: [
                  { words: ['Vaig', 'a', 'la', 'feina', 'en', 'metro'], answer: 'Vaig a la feina en metro' },
                  { words: ['Agafo', 'l\'autobús', 'cada', 'dia'], answer: 'Agafo l\'autobús cada dia' },
                  { words: ['El', 'tren', 'arriba', 'a', 'les', 'nou'], answer: 'El tren arriba a les nou' },
                  { words: ['Anem', 'a', 'París', 'en', 'avió'], answer: 'Anem a París en avió' },
                  { words: ['Prefereixo', 'la', 'bicicleta', 'al', 'cotxe'], answer: 'Prefereixo la bicicleta al cotxe' },
                  { words: ['El', 'tramvia', 'para', 'davant', 'de', 'casa'], answer: 'El tramvia para davant de casa' }
                ]
              }
            ]
          },
          {
            id: 'v14',
            type: 'vocabulary',
            subtitle: 'Les Professions',
            navLabel: 'Les professions',
            navLabelEn: 'Jobs & Professions',
            caseTag: 'VOC',
            explanation: 'Profession vocabulary in Catalan. Most professions have masculine and feminine forms: metge/metgessa (doctor), professor/professora (teacher), cuiner/cuinera (cook/chef), advocat/advocada (lawyer), infermer/infermera (nurse). Use "soc" (I am) + profession without article.',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan profession with its English meaning.',
                pairs: [
                  { left: 'el metge / la metgessa', right: 'the doctor' },
                  { left: 'el professor / la professora', right: 'the teacher' },
                  { left: 'el cuiner / la cuinera', right: 'the cook / chef' },
                  { left: 'l\'advocat / l\'advocada', right: 'the lawyer' },
                  { left: 'l\'infermer / la infermera', right: 'the nurse' },
                  { left: 'el periodista / la periodista', right: 'the journalist' },
                  { left: 'l\'enginyer / l\'enginyera', right: 'the engineer' },
                  { left: 'el policia / la policia', right: 'the police officer' },
                  { left: 'el bomber / la bombera', right: 'the firefighter' },
                  { left: 'el pilot / la pilot', right: 'the pilot' }
                ]
              },
              {
                type: 'transformation',
                instruction: 'Change the profession from masculine to feminine (or vice versa).',
                items: [
                  { original: 'el metge → femení', answer: 'la metgessa' },
                  { original: 'la professora → masculí', answer: 'el professor' },
                  { original: 'el cuiner → femení', answer: 'la cuinera' },
                  { original: 'l\'advocada → masculí', answer: 'l\'advocat' },
                  { original: 'el bomber → femení', answer: 'la bombera' },
                  { original: 'la infermera → masculí', answer: 'l\'infermer' },
                  { original: 'l\'enginyer → femení', answer: 'l\'enginyera' },
                  { original: 'la directora → masculí', answer: 'el director' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct profession.',
                items: [
                  { prompt: 'Treballa a l\'hospital i cura malalts. És ___. (m.)', answer: 'metge', hint: 'doctor (m.)' },
                  { prompt: 'Ensenya als alumnes a l\'escola. És ___. (f.)', answer: 'professora', hint: 'teacher (f.)' },
                  { prompt: 'Prepara menjar al restaurant. És ___. (m.)', answer: 'cuiner', hint: 'cook (m.)' },
                  { prompt: 'Defensa clients als jutjats. És ___. (f.)', answer: 'advocada', hint: 'lawyer (f.)' },
                  { prompt: 'Apaga incendis. És ___. (m.)', answer: 'bomber', hint: 'firefighter (m.)' },
                  { prompt: 'Pilota avions. És ___. (f.)', answer: 'pilot', hint: 'pilot (f.)' },
                  { prompt: 'Escriu articles per al diari. És ___. (m./f.)', answer: 'periodista', hint: 'journalist' },
                  { prompt: 'Construeix ponts i edificis. És ___. (m.)', answer: 'enginyer', hint: 'engineer (m.)' }
                ]
              }
            ]
          },
          {
            id: 'v15',
            type: 'vocabulary',
            subtitle: 'La Llar i els Mobles',
            navLabel: 'La llar',
            navLabelEn: 'Home & Furniture',
            caseTag: 'VOC',
            explanation: 'Home vocabulary in Catalan: habitació (bedroom), cuina (kitchen), bany (bathroom), menjador (dining room), sala d\'estar (living room), sofà (sofa), taula (table), cadira (chair), llit (bed), armari (wardrobe).',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan home/furniture word with its English meaning.',
                pairs: [
                  { left: 'l\'habitació', right: 'the bedroom' },
                  { left: 'la cuina', right: 'the kitchen' },
                  { left: 'el bany', right: 'the bathroom' },
                  { left: 'el menjador', right: 'the dining room' },
                  { left: 'la sala d\'estar', right: 'the living room' },
                  { left: 'el sofà', right: 'the sofa' },
                  { left: 'la taula', right: 'the table' },
                  { left: 'la cadira', right: 'the chair' },
                  { left: 'el llit', right: 'the bed' },
                  { left: 'l\'armari', right: 'the wardrobe' }
                ]
              },
              {
                type: 'sorting',
                instruction: 'Sort these furniture and items into the room where they belong.',
                categories: ['Cuina', 'Habitació', 'Bany', 'Sala d\'estar'],
                items: [
                  { word: 'la nevera', category: 'Cuina' },
                  { word: 'el llit', category: 'Habitació' },
                  { word: 'la dutxa', category: 'Bany' },
                  { word: 'el sofà', category: 'Sala d\'estar' },
                  { word: 'els fogons', category: 'Cuina' },
                  { word: 'l\'armari', category: 'Habitació' },
                  { word: 'el mirall', category: 'Bany' },
                  { word: 'el televisor', category: 'Sala d\'estar' },
                  { word: 'el forn', category: 'Cuina' },
                  { word: 'el coixí', category: 'Habitació' },
                  { word: 'el lavabo', category: 'Bany' },
                  { word: 'la taula de centre', category: 'Sala d\'estar' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct room or furniture word.',
                items: [
                  { prompt: 'Dormo a l\'___. (bedroom)', answer: 'habitació', hint: 'bedroom' },
                  { prompt: 'Cuino a la ___. (kitchen)', answer: 'cuina', hint: 'kitchen' },
                  { prompt: 'Em rento les mans al ___. (bathroom)', answer: 'bany', hint: 'bathroom' },
                  { prompt: 'Menjam al ___. (dining room)', answer: 'menjador', hint: 'dining room' },
                  { prompt: 'Miro la tele a la ___ ___. (living room)', answer: 'sala d\'estar', hint: 'living room' },
                  { prompt: 'Seiem al ___ per descansar. (sofa)', answer: 'sofà', hint: 'sofa' },
                  { prompt: 'Dormo al ___. (bed)', answer: 'llit', hint: 'bed' },
                  { prompt: 'Guardo la roba a l\'___. (wardrobe)', answer: 'armari', hint: 'wardrobe' }
                ]
              }
            ]
          }
        ]
      },

      // ─────────────────────────────────────────────
      // CHAPTER 8 — Pronouns & Possessives
      // ─────────────────────────────────────────────
      {
        id: 'chapter-8',
        title: 'Capítol VIII — Pronoms i Possessius',
        titleEn: 'Chapter VIII — Pronouns & Possessives',
        sections: [
          {
            id: 'g19',
            type: 'grammar',
            subtitle: 'Pronoms Personals',
            navLabel: 'Pronoms personals',
            navLabelEn: 'Personal Pronouns',
            caseTag: 'PRON',
            explanation: 'Catalan personal subject pronouns: jo (I), tu (you-sg-informal), ell/ella (he/she), nosaltres (we), vosaltres (you-pl), ells/elles (they). Note: subject pronouns are often omitted because verb endings carry the person information.',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan pronoun with its English equivalent.',
                pairs: [
                  { left: 'jo', right: 'I' },
                  { left: 'tu', right: 'you (sg. informal)' },
                  { left: 'ell', right: 'he' },
                  { left: 'ella', right: 'she' },
                  { left: 'nosaltres', right: 'we' },
                  { left: 'vosaltres', right: 'you (plural)' },
                  { left: 'ells', right: 'they (m.)' },
                  { left: 'elles', right: 'they (f.)' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct personal pronoun.',
                items: [
                  { prompt: '___ soc de Barcelona. (I)', answer: 'Jo', hint: '1st person singular' },
                  { prompt: '___ ets professor? (you, sg.)', answer: 'Tu', hint: '2nd person singular' },
                  { prompt: '___ és molt alt. (he)', answer: 'Ell', hint: '3rd person singular m.' },
                  { prompt: '___ és la meva amiga. (she)', answer: 'Ella', hint: '3rd person singular f.' },
                  { prompt: '___ som del mateix equip. (we)', answer: 'Nosaltres', hint: '1st person plural' },
                  { prompt: '___ sou de Girona? (you, pl.)', answer: 'Vosaltres', hint: '2nd person plural' },
                  { prompt: '___ parlen molt bé català. (they, m.)', answer: 'Ells', hint: '3rd person plural m.' },
                  { prompt: '___ estudien a la universitat. (they, f.)', answer: 'Elles', hint: '3rd person plural f.' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct personal pronoun to replace the subject.',
                items: [
                  { sentence: 'En Marc és alt. → ___ és alt.', options: ['Jo', 'Tu', 'Ell', 'Ella'], answer: 2 },
                  { sentence: 'La Maria és metgessa. → ___ és metgessa.', options: ['Ell', 'Ella', 'Jo', 'Tu'], answer: 1 },
                  { sentence: 'Tu i jo som amics. → ___ som amics.', options: ['Ells', 'Elles', 'Vosaltres', 'Nosaltres'], answer: 3 },
                  { sentence: 'Tu i la teva germana sou de Lleida. → ___ sou de Lleida.', options: ['Nosaltres', 'Vosaltres', 'Ells', 'Elles'], answer: 1 },
                  { sentence: 'En Pere i l\'Anna parlen molt. → ___ parlen molt.', options: ['Ells', 'Elles', 'Nosaltres', 'Vosaltres'], answer: 0 },
                  { sentence: 'L\'Anna i la Marta treballen juntes. → ___ treballen juntes.', options: ['Ells', 'Elles', 'Nosaltres', 'Vosaltres'], answer: 1 },
                  { sentence: 'Parles anglès? Sí, ___ parlo anglès.', options: ['tu', 'jo', 'ell', 'ella'], answer: 1 },
                  { sentence: 'La professora explica bé. → ___ explica bé.', options: ['Ell', 'Ella', 'Jo', 'Tu'], answer: 1 }
                ]
              }
            ]
          },
          {
            id: 'g20',
            type: 'grammar',
            subtitle: 'Adjectius Possessius',
            navLabel: 'Possessius',
            navLabelEn: 'Possessives',
            caseTag: 'POSS',
            explanation: 'Catalan possessives agree with the gender and number of the THING possessed, not the possessor. Forms: el meu/la meva/els meus/les meves (my), el teu/la teva/els teus/les teves (your-sg), el seu/la seva/els seus/les seves (his/her/its/your-formal), el nostre/la nostra (our), el vostre/la vostra (your-pl).',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct possessive.',
                items: [
                  { prompt: 'El ___ gat és negre. (my, m.sg.)', answer: 'meu', hint: 'my — m.sg.' },
                  { prompt: 'La ___ casa és gran. (my, f.sg.)', answer: 'meva', hint: 'my — f.sg.' },
                  { prompt: 'Els ___ amics són simpàtics. (my, m.pl.)', answer: 'meus', hint: 'my — m.pl.' },
                  { prompt: 'Les ___ sabates són negres. (your, f.pl.)', answer: 'teves', hint: 'your — f.pl.' },
                  { prompt: 'El ___ cotxe és vermell. (his/her, m.sg.)', answer: 'seu', hint: 'his/her — m.sg.' },
                  { prompt: 'La ___ professora és molt bona. (our, f.sg.)', answer: 'nostra', hint: 'our — f.sg.' },
                  { prompt: 'El ___ fill és molt jove. (your-pl, m.sg.)', answer: 'vostre', hint: 'your-pl — m.sg.' },
                  { prompt: 'Les ___ filles estudien molt. (their, f.pl.)', answer: 'seves', hint: 'their — f.pl.' }
                ]
              },
              {
                type: 'transformation',
                instruction: 'Replace the possessive construction with the possessive adjective.',
                items: [
                  { original: 'el gat de jo → m.sg.', answer: 'el meu gat' },
                  { original: 'la casa de tu → f.sg.', answer: 'la teva casa' },
                  { original: 'els amics d\'ell → m.pl.', answer: 'els seus amics' },
                  { original: 'les sabates d\'ella → f.pl.', answer: 'les seves sabates' },
                  { original: 'el cotxe de nosaltres → m.sg.', answer: 'el nostre cotxe' },
                  { original: 'la feina de vosaltres → f.sg.', answer: 'la vostra feina' },
                  { original: 'els fills d\'ells → m.pl.', answer: 'els seus fills' },
                  { original: 'la mare de tu → f.sg.', answer: 'la teva mare' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct possessive adjective.',
                items: [
                  { sentence: 'El ___ cotxe és nou. (my, m.sg.)', options: ['meu', 'meva', 'meus', 'meves'], answer: 0 },
                  { sentence: 'La ___ germana és simpàtica. (your, f.sg.)', options: ['teu', 'teva', 'teus', 'teves'], answer: 1 },
                  { sentence: 'Els ___ fills parlen català. (his, m.pl.)', options: ['seu', 'seva', 'seus', 'seves'], answer: 2 },
                  { sentence: 'Les ___ amigues es diuen Marta i Anna. (our, f.pl.)', options: ['nostre', 'nostra', 'nostres', 'nostres'], answer: 3 },
                  { sentence: 'El ___ professor és molt bo. (your-pl, m.sg.)', options: ['vostre', 'vostra', 'vostres', 'vostres'], answer: 0 },
                  { sentence: 'La ___ feina és molt interessant. (my, f.sg.)', options: ['meu', 'meva', 'meus', 'meves'], answer: 1 },
                  { sentence: 'Els ___ pares viuen a Girona. (your, m.pl.)', options: ['teu', 'teva', 'teus', 'teves'], answer: 2 },
                  { sentence: 'La ___ gata és blanca. (their, f.sg.)', options: ['seu', 'seva', 'seus', 'seves'], answer: 1 }
                ]
              }
            ]
          },
          {
            id: 'g21',
            type: 'grammar',
            subtitle: 'Demostratius (aquest, aquell)',
            navLabel: 'Demostratius',
            navLabelEn: 'Demonstratives',
            caseTag: 'DEM',
            explanation: 'Catalan demonstratives: aquest/aquesta/aquests/aquestes (this/these — near the speaker) and aquell/aquella/aquells/aquelles (that/those — far from the speaker). There is no "medium distance" form like Spanish "este/ese/aquel".',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct demonstrative.',
                items: [
                  { prompt: '___ gat aquí és molt bonic. (this, m.sg.)', answer: 'Aquest', hint: 'near — m.sg.' },
                  { prompt: '___ casa aquí és gran. (this, f.sg.)', answer: 'Aquesta', hint: 'near — f.sg.' },
                  { prompt: '___ cotxes aquí són nous. (these, m.pl.)', answer: 'Aquests', hint: 'near — m.pl.' },
                  { prompt: '___ flors aquí són boniques. (these, f.pl.)', answer: 'Aquestes', hint: 'near — f.pl.' },
                  { prompt: '___ arbre allà és molt alt. (that, m.sg.)', answer: 'Aquell', hint: 'far — m.sg.' },
                  { prompt: '___ muntanya allà és el Pirineu. (that, f.sg.)', answer: 'Aquella', hint: 'far — f.sg.' },
                  { prompt: '___ nois allà juguen al futbol. (those, m.pl.)', answer: 'Aquells', hint: 'far — m.pl.' },
                  { prompt: '___ cases allà són molt antigues. (those, f.pl.)', answer: 'Aquelles', hint: 'far — f.pl.' }
                ]
              },
              {
                type: 'matching',
                instruction: 'Match each Catalan demonstrative with its English meaning.',
                pairs: [
                  { left: 'aquest', right: 'this (m.sg.)' },
                  { left: 'aquesta', right: 'this (f.sg.)' },
                  { left: 'aquests', right: 'these (m.pl.)' },
                  { left: 'aquestes', right: 'these (f.pl.)' },
                  { left: 'aquell', right: 'that (m.sg.)' },
                  { left: 'aquella', right: 'that (f.sg.)' },
                  { left: 'aquells', right: 'those (m.pl.)' },
                  { left: 'aquelles', right: 'those (f.pl.)' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct demonstrative.',
                items: [
                  { sentence: '___ noi aquí es diu Marc.', options: ['Aquest', 'Aquesta', 'Aquell', 'Aquella'], answer: 0 },
                  { sentence: '___ dona allà és la meva mare.', options: ['Aquesta', 'Aquella', 'Aquest', 'Aquell'], answer: 1 },
                  { sentence: '___ cotxes aquí són molt cars.', options: ['Aquest', 'Aquesta', 'Aquests', 'Aquells'], answer: 2 },
                  { sentence: '___ flors allà són molt boniques.', options: ['Aquestes', 'Aquelles', 'Aquells', 'Aquests'], answer: 1 },
                  { sentence: '___ pastís aquí és deliciós!', options: ['Aquell', 'Aquest', 'Aquesta', 'Aquella'], answer: 1 },
                  { sentence: '___ muntanyes allà són els Pirineus.', options: ['Aquelles', 'Aquestes', 'Aquells', 'Aquests'], answer: 0 },
                  { sentence: '___ llibre aquí és molt bo.', options: ['Aquell', 'Aquella', 'Aquest', 'Aquesta'], answer: 2 },
                  { sentence: '___ nens allà juguen molt bé.', options: ['Aquells', 'Aquests', 'Aquelles', 'Aquestes'], answer: 0 }
                ]
              }
            ]
          }
        ]
      },

      // ─────────────────────────────────────────────
      // CHAPTER 9 — Past & Future
      // ─────────────────────────────────────────────
      {
        id: 'chapter-9',
        title: 'Capítol IX — Passat i Futur',
        titleEn: 'Chapter IX — Past & Future',
        sections: [
          {
            id: 'g22',
            type: 'grammar',
            subtitle: 'Passat Perifràstic (vaig + infinitiu)',
            navLabel: 'Passat perifràstic',
            navLabelEn: 'Periphrastic Past',
            caseTag: 'VERB',
            explanation: 'The periphrastic past (passat perifràstic) is the most common past tense in spoken Catalan. It is formed with the auxiliary "anar" in a special past form + infinitive: vaig, vas, va, vam, vau, van + infinitive. Example: vaig menjar (I ate), vas anar (you went).',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct periphrastic past form.',
                items: [
                  { prompt: 'Ahir jo ___ menjar paella. (I ate)', answer: 'vaig', hint: '1st person auxiliary' },
                  { prompt: 'Tu ___ anar al mercat ahir? (you went)', answer: 'vas', hint: '2nd person auxiliary' },
                  { prompt: 'Ella ___ veure una pel·lícula. (she watched)', answer: 'va', hint: '3rd person auxiliary' },
                  { prompt: 'Nosaltres ___ estudiar molt. (we studied)', answer: 'vam', hint: '1st person plural auxiliary' },
                  { prompt: 'Vosaltres ___ sortir ahir al vespre. (you went out)', answer: 'vau', hint: '2nd person plural auxiliary' },
                  { prompt: 'Ells ___ comprar una casa nova. (they bought)', answer: 'van', hint: '3rd person plural auxiliary' },
                  { prompt: 'El meu pare ___ treballar tot el dia. (worked)', answer: 'va', hint: '3rd person singular' },
                  { prompt: 'Jo ___ parlar amb el director ahir. (I spoke)', answer: 'vaig', hint: '1st person singular' }
                ]
              },
              {
                type: 'transformation',
                instruction: 'Change the present tense verb to the periphrastic past.',
                items: [
                  { original: 'Jo menjo → ahir', answer: 'Jo vaig menjar' },
                  { original: 'Tu vas → ahir', answer: 'Tu vas anar' },
                  { original: 'Ella treballa → ahir', answer: 'Ella va treballar' },
                  { original: 'Nosaltres estudiem → ahir', answer: 'Nosaltres vam estudiar' },
                  { original: 'Vosaltres sortiu → ahir', answer: 'Vosaltres vau sortir' },
                  { original: 'Ells compren → ahir', answer: 'Ells van comprar' },
                  { original: 'Jo parlo → ahir', answer: 'Jo vaig parlar' },
                  { original: 'Tu dorms → ahir', answer: 'Tu vas dormir' }
                ]
              },
              {
                type: 'reorder',
                instruction: 'Rearrange the words to form a correct sentence in the periphrastic past.',
                items: [
                  { words: ['Ahir', 'vaig', 'menjar', 'pizza'], answer: 'Ahir vaig menjar pizza' },
                  { words: ['Tu', 'vas', 'anar', 'al', 'cinema'], answer: 'Tu vas anar al cinema' },
                  { words: ['Ella', 'va', 'llegir', 'un', 'llibre'], answer: 'Ella va llegir un llibre' },
                  { words: ['Vam', 'estudiar', 'molt', 'ahir'], answer: 'Vam estudiar molt ahir' },
                  { words: ['Van', 'comprar', 'una', 'casa', 'nova'], answer: 'Van comprar una casa nova' },
                  { words: ['Jo', 'vaig', 'parlar', 'amb', 'la', 'meva', 'mare'], answer: 'Jo vaig parlar amb la meva mare' }
                ]
              }
            ]
          },
          {
            id: 'g23',
            type: 'grammar',
            subtitle: 'Futur Immediat amb ANAR + Infinitiu',
            navLabel: 'Futur immediat',
            navLabelEn: 'Immediate Future',
            caseTag: 'VERB',
            explanation: 'The immediate future in Catalan is formed with the present tense of "anar" + "a" + infinitive: vaig a menjar (I am going to eat), vas a dormir (you are going to sleep). This is used for plans and intentions in the near future.',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Fill in the blank to form the immediate future.',
                items: [
                  { prompt: 'Demà jo vaig ___ anar a la platja.', answer: 'a', hint: 'vaig a + infinitive' },
                  { prompt: 'Aquesta nit tu vas ___ dormir aviat.', answer: 'a', hint: 'vas a + infinitive' },
                  { prompt: 'Ella va ___ comprar pa al forn.', answer: 'a', hint: 'va a + infinitive' },
                  { prompt: 'Nosaltres anem ___ estudiar junts.', answer: 'a', hint: 'anem a + infinitive' },
                  { prompt: 'Vosaltres aneu ___ venir a la festa?', answer: 'a', hint: 'aneu a + infinitive' },
                  { prompt: 'Ells van ___ fer un viatge a Paris.', answer: 'a', hint: 'van a + infinitive' },
                  { prompt: 'Jo vaig a ___ molt per l\'examen. (study)', answer: 'estudiar', hint: 'infinitive of estudiar' },
                  { prompt: 'Demà ella va a ___ el seu amic. (visit)', answer: 'visitar', hint: 'infinitive of visitar' }
                ]
              },
              {
                type: 'transformation',
                instruction: 'Change the present tense to the immediate future (add "demà").',
                items: [
                  { original: 'Menjo pizza.', answer: 'Demà vaig a menjar pizza.' },
                  { original: 'Tu vas al cinema.', answer: 'Demà tu vas a anar al cinema.' },
                  { original: 'Ella treballa molt.', answer: 'Demà ella va a treballar molt.' },
                  { original: 'Estudiem junts.', answer: 'Demà anem a estudiar junts.' },
                  { original: 'Sortiu?', answer: 'Demà aneu a sortir?' },
                  { original: 'Ells compren verdures.', answer: 'Demà van a comprar verdures.' },
                  { original: 'Jo llegeixo un llibre.', answer: 'Demà vaig a llegir un llibre.' },
                  { original: 'Tu dorms fins les deu.', answer: 'Demà vas a dormir fins les deu.' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct immediate future form.',
                items: [
                  { sentence: 'Demà jo ___ a menjar paella.', options: ['vaig', 'vas', 'va', 'anem'], answer: 0 },
                  { sentence: 'Tu ___ a sortir aquesta nit?', options: ['vaig', 'vas', 'va', 'van'], answer: 1 },
                  { sentence: 'Ella ___ a comprar una faldilla.', options: ['vaig', 'vas', 'va', 'anem'], answer: 2 },
                  { sentence: 'Nosaltres ___ a estudiar demà.', options: ['vaig', 'anem', 'aneu', 'van'], answer: 1 },
                  { sentence: 'Vosaltres ___ a venir a la festa?', options: ['anem', 'aneu', 'van', 'va'], answer: 1 },
                  { sentence: 'Ells ___ a visitar l\'àvia demà.', options: ['anem', 'aneu', 'van', 'va'], answer: 2 },
                  { sentence: 'Jo ___ a llegir un bon llibre.', options: ['vaig', 'vas', 'va', 'van'], answer: 0 },
                  { sentence: 'La Maria ___ a aprendre anglès.', options: ['vaig', 'vas', 'va', 'van'], answer: 2 }
                ]
              }
            ]
          },
          {
            id: 'g24',
            type: 'grammar',
            subtitle: 'Verbs Irregulars: poder, voler, saber, venir',
            navLabel: 'Verbs irregulars',
            navLabelEn: 'Irregular Verbs',
            caseTag: 'VERB',
            explanation: 'Key irregular verbs in Catalan: poder (can/to be able) — puc, pots, pot, podem, podeu, poden; voler (to want) — vull, vols, vol, volem, voleu, volen; saber (to know) — sé, saps, sap, sabem, sabeu, saben; venir (to come) — vinc, véns, ve, venim, veniu, vénen.',
            exercises: [
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct irregular verb form.',
                items: [
                  { prompt: 'Jo ___ parlar tres idiomes. (saber)', answer: 'sé', hint: '1st person sg. saber' },
                  { prompt: 'Tu ___ venir demà? (poder)', answer: 'pots', hint: '2nd person sg. poder' },
                  { prompt: 'Ell ___ menjar pizza. (voler)', answer: 'vol', hint: '3rd person sg. voler' },
                  { prompt: 'Ella ___ de París. (venir)', answer: 've', hint: '3rd person sg. venir' },
                  { prompt: 'Nosaltres ___ anar al cinema. (voler)', answer: 'volem', hint: '1st person pl. voler' },
                  { prompt: 'Vosaltres ___ cuinar bé? (saber)', answer: 'sabeu', hint: '2nd person pl. saber' },
                  { prompt: 'Ells ___ venir tard. (poder)', answer: 'poden', hint: '3rd person pl. poder' },
                  { prompt: 'Nosaltres ___ d\'Itàlia. (venir)', answer: 'venim', hint: '1st person pl. venir' }
                ]
              },
              {
                type: 'matching',
                instruction: 'Match each irregular verb with its English meaning.',
                pairs: [
                  { left: 'poder', right: 'to be able to / can' },
                  { left: 'voler', right: 'to want' },
                  { left: 'saber', right: 'to know (a fact / skill)' },
                  { left: 'venir', right: 'to come' },
                  { left: 'puc', right: 'I can' },
                  { left: 'vull', right: 'I want' },
                  { left: 'sé', right: 'I know' },
                  { left: 'vinc', right: 'I come' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct form of the irregular verb.',
                items: [
                  { sentence: 'Jo ___ parlar anglès. (saber)', options: ['sé', 'saps', 'sap', 'sabem'], answer: 0 },
                  { sentence: 'Tu ___ venir? (poder)', options: ['puc', 'pots', 'pot', 'podem'], answer: 1 },
                  { sentence: 'Ella ___ un cafè. (voler)', options: ['vull', 'vols', 'vol', 'volem'], answer: 2 },
                  { sentence: 'Nosaltres ___ d\'Espanya. (venir)', options: ['vinc', 'véns', 'venim', 'veniu'], answer: 2 },
                  { sentence: 'Vosaltres ___ cuinar? (saber)', options: ['sé', 'saps', 'sap', 'sabeu'], answer: 3 },
                  { sentence: 'Ells ___ venir a la festa. (voler)', options: ['volem', 'voleu', 'volen', 'vol'], answer: 2 },
                  { sentence: 'Jo ___ anar al cinema. (voler)', options: ['vull', 'vols', 'vol', 'volem'], answer: 0 },
                  { sentence: 'Tu ___ català? (saber)', options: ['sé', 'saps', 'sap', 'sabem'], answer: 1 }
                ]
              }
            ]
          }
        ]
      },

      // ─────────────────────────────────────────────
      // CHAPTER 10 — Weather & Nature
      // ─────────────────────────────────────────────
      {
        id: 'chapter-10',
        title: 'Capítol X — El Temps i la Natura',
        titleEn: 'Chapter X — Weather & Nature',
        sections: [
          {
            id: 'v16',
            type: 'vocabulary',
            subtitle: 'El Temps Meteorològic',
            navLabel: 'El temps',
            navLabelEn: 'Weather',
            caseTag: 'VOC',
            explanation: 'Weather expressions in Catalan use the verb "fer" (to make/do) for most conditions: fa sol (it is sunny), fa fred (it is cold), fa calor (it is hot), fa vent (it is windy). Use "ploure" (to rain: plou) and "nevar" (to snow: neva) as impersonal verbs.',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan weather expression with its English meaning.',
                pairs: [
                  { left: 'fa sol', right: 'it is sunny' },
                  { left: 'fa fred', right: 'it is cold' },
                  { left: 'fa calor', right: 'it is hot' },
                  { left: 'fa vent', right: 'it is windy' },
                  { left: 'plou', right: 'it is raining' },
                  { left: 'neva', right: 'it is snowing' },
                  { left: 'hi ha boira', right: 'it is foggy' },
                  { left: 'hi ha tempesta', right: 'there is a storm' },
                  { left: 'fa bon temps', right: 'the weather is nice' },
                  { left: 'fa mal temps', right: 'the weather is bad' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct weather expression.',
                items: [
                  { prompt: 'A l\'estiu normalment ___ molt de calor. (it is very hot)', answer: 'fa', hint: 'verb fer' },
                  { prompt: 'A l\'hivern ___ i hi ha neu als Pirineus. (it snows)', answer: 'neva', hint: 'verb nevar' },
                  { prompt: 'A la tardor sovint ___. (it rains)', answer: 'plou', hint: 'verb ploure' },
                  { prompt: 'Quan ___ vent, hi ha molts núvols. (it is windy)', answer: 'fa', hint: 'verb fer' },
                  { prompt: 'Avui ___ molt de sol, sortim! (it is very sunny)', answer: 'fa', hint: 'verb fer' },
                  { prompt: 'Hi ha ___ avui, no es veu res. (fog)', answer: 'boira', hint: 'fog' },
                  { prompt: 'Fa ___ temps, posem-nos l\'abric. (bad)', answer: 'mal', hint: 'bad weather' },
                  { prompt: 'Demà farà ___ temps, sortim a caminar. (good)', answer: 'bon', hint: 'good weather' }
                ]
              },
              {
                type: 'sorting',
                instruction: 'Sort these weather conditions by season.',
                categories: ['Estiu', 'Hivern', 'Primavera / Tardor'],
                items: [
                  { word: 'fa molt de calor', category: 'Estiu' },
                  { word: 'neva', category: 'Hivern' },
                  { word: 'plou', category: 'Primavera / Tardor' },
                  { word: 'fa sol i calor', category: 'Estiu' },
                  { word: 'fa molt de fred', category: 'Hivern' },
                  { word: 'fa bon temps fresc', category: 'Primavera / Tardor' },
                  { word: 'hi ha tempesta', category: 'Estiu' },
                  { word: 'hi ha boira', category: 'Hivern' },
                  { word: 'fa vent suau', category: 'Primavera / Tardor' },
                  { word: 'la temperatura és alta', category: 'Estiu' },
                  { word: 'hi ha gel al carrer', category: 'Hivern' },
                  { word: 'els arbres floreixen', category: 'Primavera / Tardor' }
                ]
              }
            ]
          },
          {
            id: 'v17',
            type: 'vocabulary',
            subtitle: 'La Natura i el Medi Ambient',
            navLabel: 'La natura',
            navLabelEn: 'Nature & Environment',
            caseTag: 'VOC',
            explanation: 'Nature vocabulary in Catalan: muntanya (mountain), riu (river), mar (sea), bosc (forest), platja (beach), vall (valley), cel (sky), terra (ground/earth), planta (plant), arbre (tree), flor (flower), animal (animal).',
            exercises: [
              {
                type: 'matching',
                instruction: 'Match each Catalan nature word with its English meaning.',
                pairs: [
                  { left: 'la muntanya', right: 'the mountain' },
                  { left: 'el riu', right: 'the river' },
                  { left: 'la mar / el mar', right: 'the sea' },
                  { left: 'el bosc', right: 'the forest' },
                  { left: 'la platja', right: 'the beach' },
                  { left: 'la vall', right: 'the valley' },
                  { left: 'el cel', right: 'the sky' },
                  { left: 'l\'arbre', right: 'the tree' },
                  { left: 'la flor', right: 'the flower' },
                  { left: 'el llac', right: 'the lake' }
                ]
              },
              {
                type: 'sorting',
                instruction: 'Sort these nature words into the correct category.',
                categories: ['Paisatge', 'Plantes', 'Animals'],
                items: [
                  { word: 'la muntanya', category: 'Paisatge' },
                  { word: 'l\'arbre', category: 'Plantes' },
                  { word: 'el gat', category: 'Animals' },
                  { word: 'el riu', category: 'Paisatge' },
                  { word: 'la flor', category: 'Plantes' },
                  { word: 'el gos', category: 'Animals' },
                  { word: 'la platja', category: 'Paisatge' },
                  { word: 'l\'herba', category: 'Plantes' },
                  { word: 'l\'ocell', category: 'Animals' },
                  { word: 'el bosc', category: 'Paisatge' },
                  { word: 'el cactus', category: 'Plantes' },
                  { word: 'el peix', category: 'Animals' }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct nature word.',
                items: [
                  { prompt: 'El ___ Ebre passa per Tortosa. (river)', answer: 'riu', hint: 'river' },
                  { prompt: 'El Pirineu és una gran ___. (mountain range)', answer: 'muntanya', hint: 'mountain' },
                  { prompt: 'A l\'estiu anem a la ___ a banyar-nos. (beach)', answer: 'platja', hint: 'beach' },
                  { prompt: 'El ___ és blau quan fa sol. (sky)', answer: 'cel', hint: 'sky' },
                  { prompt: 'El ___ de Collserola és gran. (forest)', answer: 'bosc', hint: 'forest' },
                  { prompt: 'Les ___ florescen a la primavera. (flowers)', answer: 'flors', hint: 'flowers' },
                  { prompt: 'El ___ Banyoles és famós a Catalunya. (lake)', answer: 'llac', hint: 'lake' },
                  { prompt: 'Molts ___ volen al cel. (birds)', answer: 'ocells', hint: 'birds' }
                ]
              }
            ]
          },
          {
            id: 'v18',
            type: 'vocabulary',
            subtitle: 'Repàs d\'Adjectius — Exercicis Mixtos',
            navLabel: 'Repàs adjectius',
            navLabelEn: 'Adjectives Review',
            caseTag: 'ADJ',
            explanation: 'A comprehensive review of Catalan adjectives from throughout the course, combining descriptive, colour, and evaluative adjectives with full gender and number agreement practice.',
            exercises: [
              {
                type: 'transformation',
                instruction: 'Give the full agreement of each adjective: m.sg., f.sg., m.pl., f.pl.',
                items: [
                  { original: 'alt →', answer: 'alt, alta, alts, altes' },
                  { original: 'bonic →', answer: 'bonic, bonica, bonics, boniques' },
                  { original: 'gran →', answer: 'gran, gran, grans, grans' },
                  { original: 'vermell →', answer: 'vermell, vermella, vermells, vermelles' },
                  { original: 'blau →', answer: 'blau, blava, blaus, blaves' },
                  { original: 'llarg →', answer: 'llarg, llarga, llargs, llargues' },
                  { original: 'intel·ligent →', answer: 'intel·ligent, intel·ligent, intel·ligents, intel·ligents' },
                  { original: 'petit →', answer: 'petit, petita, petits, petites' }
                ]
              },
              {
                type: 'multichoice',
                instruction: 'Choose the correct adjective form to complete the sentence.',
                items: [
                  { sentence: 'Les cases ___ de la platja.', options: ['bonic', 'bonica', 'bonics', 'boniques'], answer: 3 },
                  { sentence: 'Els nens ___. (tall)', options: ['alt', 'alta', 'alts', 'altes'], answer: 2 },
                  { sentence: 'La professora és ___. (intelligent)', options: ['intel·ligent', 'intel·ligenta', 'intel·ligents', 'intel·ligentes'], answer: 0 },
                  { sentence: 'El jersei és ___. (red)', options: ['vermell', 'vermella', 'vermells', 'vermelles'], answer: 0 },
                  { sentence: 'Les faldilles són ___. (blue)', options: ['blau', 'blava', 'blaus', 'blaves'], answer: 3 },
                  { sentence: 'Els dies ___ de l\'hivern. (short)', options: ['curt', 'curta', 'curts', 'curtes'], answer: 2 },
                  { sentence: 'La nit és ___. (long)', options: ['llarg', 'llarga', 'llargs', 'llargues'], answer: 1 },
                  { sentence: 'Els exercicis ___. (difficult)', options: ['difícil', 'difícil', 'difícils', 'difícils'], answer: 2 }
                ]
              },
              {
                type: 'fillblank',
                instruction: 'Fill in the blank with the correct adjective form (choose from the words in parentheses).',
                items: [
                  { prompt: 'La neu és molt ___ i freda. (blanc)', answer: 'blanca', hint: 'f.sg. of blanc' },
                  { prompt: 'Els estius catalans són molt ___. (calorós)', answer: 'calorosos', hint: 'm.pl.' },
                  { prompt: 'Les muntanyes catalanes són ___. (meravellós)', answer: 'meravelloses', hint: 'f.pl.' },
                  { prompt: 'El cel és ___ avui. (blau)', answer: 'blau', hint: 'm.sg.' },
                  { prompt: 'Les platges de Costa Brava són ___. (bonic)', answer: 'boniques', hint: 'f.pl.' },
                  { prompt: 'El Pirineu és molt ___ a l\'hivern. (fred)', answer: 'fred', hint: 'm.sg.' },
                  { prompt: 'Les tradicions catalanes són molt ___. (ric)', answer: 'riques', hint: 'f.pl.' },
                  { prompt: 'Els mercats ___ de Barcelona. (famós)', answer: 'famosos', hint: 'm.pl.' }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
})();


