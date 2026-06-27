export const b1LesenModels = [
  {
    id: 'b1-lesen-01',
    title: 'Verkehr & Mobilität',
    level: 'B1',

    teil1: {
      title: 'Teil 1 – Lückentext',
      text: `Herr Schneider wohnt außerhalb von Wien und fährt jeden Morgen zur Arbeit. Früher nahm er meistens das Auto, ___(31)___ er oft im Stau stand und viel Geld für Benzin ausgeben musste. Seit einigen Monaten benutzt er die öffentlichen Verkehrsmittel, ___(32)___ er entspannter ankommt.

Zuerst fährt er mit dem Bus zum Bahnhof. Danach steigt er in den Zug um. Wenn der Zug pünktlich ist, braucht er nur 35 Minuten bis ins Büro. Besonders praktisch findet er, ___(33)___ er während der Fahrt E-Mails lesen oder Musik hören kann.

Seine Frau möchte bald den Führerschein machen, ___(34)___ sie flexibler ist, wenn sie die Kinder abholen muss. Sie sucht aber keinen Intensivkurs, ___(35)___ einen Abendkurs, weil sie tagsüber arbeitet.

Herr Schneider findet: Wer in der Stadt lebt, braucht nicht immer ein eigenes Auto. Trotzdem ist ein Führerschein manchmal hilfreich, ___(36)___ man außerhalb der Stadt wohnt.`,
      options: {
        31: ['weil', 'obwohl', 'damit'],
        32: ['trotzdem', 'weil', 'sondern'],
        33: ['dass', 'wenn', 'obwohl'],
        34: ['damit', 'denn', 'trotz'],
        35: ['aber', 'sondern', 'oder'],
        36: ['wenn', 'obwohl', 'deshalb']
      },
      answers: {
        31: 'weil',
        32: 'weil',
        33: 'dass',
        34: 'damit',
        35: 'sondern',
        36: 'wenn'
      }
    },

    teil2: {
      title: 'Teil 2 – Anzeigen',
      image: "/images/b1lesen/b1-broschuere-01.jpeg",
      intro:
        'Lesen Sie die Anzeigen A–H. Für jede Situation finden Sie die passende Anzeige. Achtung: Mehrere Anzeigen haben ähnliche Wörter.',
      questions: [
        {
          q: '41. Sie möchten möglichst schnell den Führerschein machen. Sie haben zwei Wochen frei und suchen einen Intensivkurs mit Prüfungstraining.',
          a: 'B'
        },
        {
          q: '42. Sie haben den Führerschein schon lange, fahren aber unsicher. Sie suchen keinen normalen Anfängerkurs, sondern einen Auffrischungskurs.',
          a: 'H'
        },
        {
          q: '43. Sie fahren jeden Tag mit öffentlichen Verkehrsmitteln und möchten ein Ticket, das das ganze Jahr gültig ist.',
          a: 'G'
        },
        {
          q: '44. Sie möchten den Führerschein machen, können aber nicht jeden Tag kommen. Sie brauchen flexible Zeiten und möchten Theorie online lernen.',
          a: 'D'
        },
        {
          q: '45. Sie fahren mit Zug, Bus, Bim und U-Bahn und suchen ein Ticket für verschiedene Verkehrsmittel in ganz Österreich.',
          a: 'E'
        }
      ]
    },

    teil3: {
      title: 'Teil 3 – Lesetext',
      text: `In vielen österreichischen Städten überlegen immer mehr Menschen, ob sie wirklich ein eigenes Auto brauchen. Der Grund dafür ist nicht nur der hohe Benzinpreis. Auch Parkplätze sind oft teuer und schwer zu finden. Wer jeden Tag im Stau steht, verliert außerdem viel Zeit und kommt oft gestresst zur Arbeit.

Viele Berufstätige steigen deshalb auf Bus, Bahn oder Straßenbahn um. Moderne Verkehrsmittel sind heute meistens pünktlicher und bequemer als früher. Manche Menschen nutzen die Fahrtzeit, um Nachrichten zu lesen, Musik zu hören oder sich auf den Arbeitstag vorzubereiten. Besonders für Personen, die in der Nähe einer guten Verbindung wohnen, kann das eine echte Entlastung sein.

Trotzdem ist das Auto für viele Familien weiterhin wichtig. Wer am Land wohnt, Kinder hat oder zu ungewöhnlichen Zeiten arbeitet, kann nicht immer mit öffentlichen Verkehrsmitteln fahren. Deshalb entscheiden sich viele Menschen für eine Mischung: In der Stadt fahren sie mit Bus und Bahn, am Wochenende oder für größere Einkäufe benutzen sie das Auto.

Auch Fahrschulen merken diese Veränderung. Viele junge Menschen wollen zwar den Führerschein machen, aber sie kaufen später kein eigenes Auto. Sie möchten flexibel bleiben und bei Bedarf ein Auto mieten oder Carsharing nutzen. Andere besuchen nach vielen Jahren wieder einen Kurs, weil sie sich im Verkehr unsicher fühlen.

Experten sagen, dass Mobilität in Zukunft vielfältiger wird. Nicht jeder braucht täglich ein Auto, aber viele Menschen möchten verschiedene Möglichkeiten haben. Wichtig ist, dass Verkehrsmittel zuverlässig, bezahlbar und gut miteinander verbunden sind.`,
      questions: [
        {
          q: '46. Warum verzichten manche Menschen in der Stadt auf ein eigenes Auto?',
          options: [
            'Weil Parkplätze und Benzin teuer sind.',
            'Weil Fahrschulen zu teuer geworden sind.',
            'Weil Autos in Österreich verboten werden.'
          ],
          a: 'Weil Parkplätze und Benzin teuer sind.'
        },
        {
          q: '47. Was machen manche Berufstätige während der Fahrt mit öffentlichen Verkehrsmitteln?',
          options: [
            'Sie reparieren ihr Auto.',
            'Sie lesen Nachrichten oder hören Musik.',
            'Sie suchen einen Parkplatz.'
          ],
          a: 'Sie lesen Nachrichten oder hören Musik.'
        },
        {
          q: '48. Warum brauchen viele Familien trotzdem ein Auto?',
          options: [
            'Weil sie nie mit dem Zug fahren dürfen.',
            'Weil sie am Land wohnen oder Kinder haben.',
            'Weil öffentliche Verkehrsmittel immer kostenlos sind.'
          ],
          a: 'Weil sie am Land wohnen oder Kinder haben.'
        },
        {
          q: '49. Was machen viele junge Menschen nach dem Führerschein?',
          options: [
            'Sie kaufen sofort ein eigenes Auto.',
            'Sie möchten flexibel bleiben und manchmal Carsharing nutzen.',
            'Sie fahren nur noch mit dem Motorrad.'
          ],
          a: 'Sie möchten flexibel bleiben und manchmal Carsharing nutzen.'
        },
        {
          q: '50. Welche Überschrift passt am besten?',
          options: [
            'Mobilität heute: Auto, Bus und Bahn kombinieren',
            'Warum niemand mehr einen Führerschein braucht',
            'Autofahren ist immer billiger als Busfahren'
          ],
          a: 'Mobilität heute: Auto, Bus und Bahn kombinieren'
        }
      ]
    },

    words: [
      'der Führerschein',
      'die Fahrschule',
      'der Intensivkurs',
      'die Fahrstunde',
      'die Jahreskarte',
      'das Verkehrsmittel',
      'der Stau',
      'die Verbindung'
    ],
    verbs: [
      'umsteigen',
      'benutzen',
      'sich anmelden',
      'gültig sein',
      'verzichten auf',
      'kombinieren'
    ],
    grammar: [
      'weil + Verb am Ende',
      'damit + Nebensatz',
      'nicht ..., sondern ...',
      'Relativsatz: ein Ticket, das ...'
    ],
    mistakes: [
      '❌ Ich suche ein Kurs für Führerschein.',
      '✅ Ich suche einen Kurs für den Führerschein.',
      '❌ Ich brauche eine Auffrischung, weil ich bin unsicher.',
      '✅ Ich brauche eine Auffrischung, weil ich unsicher bin.'
    ],
    tip:
      'Achte bei Anzeigen nicht nur auf ein einzelnes Wort. Oft kommen ähnliche Wörter in mehreren Anzeigen vor. Entscheidend sind Details wie Zeit, Zielgruppe, Preis oder Zweck.'
  
},

{
  id: 'b1-lesen-02',
  title: 'Freizeit & Kultur in Wien',
  level: 'B1',

  teil1: {
    title: 'Teil 1 – Lückentext',
    text: `Lukas wohnt seit einem Jahr in Wien und möchte seine Freizeit besser nutzen. Früher blieb er am Wochenende oft zu Hause, ___(31)___ er nicht wusste, welche Angebote es in der Stadt gibt.

Eines Tages erzählte ihm eine Kollegin von verschiedenen Museen, Konzerten und Führungen. Lukas war überrascht, ___(32)___ viele Veranstaltungen auch günstig oder sogar kostenlos sind.

Am Samstag möchte er zuerst eine Ausstellung besuchen. Danach trifft er Freunde im Park, ___(33)___ sie gemeinsam ein Konzert unter freiem Himmel hören können.

Seine Schwester kommt mit ihren Kindern zu Besuch. Für sie sucht Lukas ein Angebot, ___(34)___ die Kinder selbst etwas ausprobieren können.

Am Abend möchte er vielleicht ins Theater gehen, ___(35)___ er sich für moderne Stücke interessiert. Wenn noch Zeit bleibt, macht er am Sonntag eine Stadtführung, ___(36)___ er mehr über die Geschichte Wiens erfahren möchte.`,
    options: {
      31: ['weil', 'obwohl', 'damit'],
      32: ['dass', 'wenn', 'trotzdem'],
      33: ['damit', 'weil', 'sondern'],
      34: ['bei dem', 'trotzdem', 'obwohl'],
      35: ['weil', 'damit', 'sondern'],
      36: ['wenn', 'weil', 'aber']
    },
    answers: {
      31: 'weil',
      32: 'dass',
      33: 'damit',
      34: 'bei dem',
      35: 'weil',
      36: 'weil'
    }
  },

  teil2: {
    title: 'Teil 2 – Anzeigen',
    image: '/images/b1lesen/b1-broschuere-02.jpeg',
    intro:
      'Lesen Sie die Anzeigen A–H. Für jede Situation finden Sie die passende Anzeige. Achtung: Mehrere Anzeigen haben ähnliche Wörter.',
    questions: [
      {
        q: '41. Sie interessieren sich für moderne Kunst und möchten eine Ausstellung besuchen. Sie sind Student und suchen ein günstiges Angebot.',
        a: 'A'
      },
      {
        q: '42. Sie möchten am Freitagabend im Sommer Musik hören. Am liebsten draußen und ohne Eintritt zu bezahlen.',
        a: 'B'
      },
      {
        q: '43. Sie möchten mit Kindern am Wochenende etwas unternehmen. Die Kinder sollen nicht nur schauen, sondern auch selbst mitmachen.',
        a: 'E'
      },
      {
        q: '44. Sie möchten Wien besser kennenlernen und suchen eine Führung durch die Stadt. Sie möchten Informationen über Geschichte bekommen.',
        a: 'G'
      },
      {
        q: '45. Sie interessieren sich für Filme und möchten am Samstag eine Führung besuchen.',
        a: 'H'
      }
    ]
  },

  teil3: {
    title: 'Teil 3 – Lesetext',
    text: `Wien ist nicht nur die Hauptstadt Österreichs, sondern auch eine Stadt mit einem sehr großen kulturellen Angebot. Viele Menschen verbinden Wien zuerst mit Musik, Museen und alten Gebäuden. Doch Kultur bedeutet heute viel mehr. In der Stadt gibt es Angebote für junge Menschen, Familien, Touristen und ältere Personen.

Besonders beliebt sind Museen und Ausstellungen. Manche Besucher interessieren sich für moderne Kunst, andere möchten mehr über Geschichte erfahren. Viele Museen bieten günstigere Preise für Schüler und Studenten an. Dadurch können auch Menschen mit wenig Geld regelmäßig Ausstellungen besuchen.

Im Sommer finden in Wien viele Veranstaltungen im Freien statt. Konzerte in Parks, Feste an der Donau oder Filmabende unter freiem Himmel ziehen viele Besucher an. Für viele Menschen ist das angenehm, weil sie Kultur erleben können, ohne in einem geschlossenen Raum zu sitzen. Einige Veranstaltungen sind sogar kostenlos. Das ist besonders für Familien und junge Leute interessant.

Auch Theater und Kino spielen in Wien eine wichtige Rolle. Viele Theater zeigen klassische Stücke, aber auch moderne Geschichten über Freundschaft, Familie oder das Leben in der Stadt. Wer sich für Filme interessiert, findet nicht nur normale Kinos, sondern auch Filmmuseen oder besondere Filmprogramme.

Für Familien mit Kindern gibt es eigene Angebote. Kindermuseen sind oft interaktiv. Die Kinder können dort nicht nur zuhören, sondern selbst experimentieren, spielen und entdecken. Solche Angebote sind für Eltern praktisch, weil die Kinder gleichzeitig Spaß haben und etwas lernen.

Touristen nehmen gerne an Stadtführungen teil. Dabei erfahren sie mehr über bekannte Plätze, alte Gebäude und wichtige Ereignisse. Aber auch Menschen, die schon lange in Wien wohnen, entdecken bei solchen Führungen oft neue Seiten ihrer Stadt.

Insgesamt zeigt sich: Freizeit und Kultur in Wien sind sehr vielfältig. Man muss nicht viel Geld ausgeben, um etwas Interessantes zu erleben. Wichtig ist nur, dass man sich informiert und ein Angebot auswählt, das zu den eigenen Interessen passt.`,
    questions: [
      {
        q: '46. Warum können auch Menschen mit wenig Geld manche Museen besuchen?',
        options: [
          'Weil es oft günstigere Preise für Schüler und Studenten gibt.',
          'Weil alle Museen in Wien immer kostenlos sind.',
          'Weil man in Museen arbeiten muss.'
        ],
        a: 'Weil es oft günstigere Preise für Schüler und Studenten gibt.'
      },
      {
        q: '47. Warum sind Veranstaltungen im Freien im Sommer beliebt?',
        options: [
          'Weil sie immer nur für Touristen sind.',
          'Weil viele Menschen Kultur draußen erleben können.',
          'Weil sie nur am Vormittag stattfinden.'
        ],
        a: 'Weil viele Menschen Kultur draußen erleben können.'
      },
      {
        q: '48. Was ist typisch für Kindermuseen?',
        options: [
          'Kinder dürfen dort nichts anfassen.',
          'Kinder können dort mitmachen und etwas ausprobieren.',
          'Sie sind nur für Erwachsene geöffnet.'
        ],
        a: 'Kinder können dort mitmachen und etwas ausprobieren.'
      },
      {
        q: '49. Warum nehmen Menschen an Stadtführungen teil?',
        options: [
          'Weil sie mehr über Geschichte und bekannte Plätze erfahren möchten.',
          'Weil sie dort den Führerschein machen können.',
          'Weil Stadtführungen immer kostenlos sind.'
        ],
        a: 'Weil sie mehr über Geschichte und bekannte Plätze erfahren möchten.'
      },
      {
        q: '50. Welche Überschrift passt am besten?',
        options: [
          'Freizeit und Kultur in Wien erleben',
          'Warum Kultur in Wien verboten ist',
          'Autofahren in der Wiener Innenstadt'
        ],
        a: 'Freizeit und Kultur in Wien erleben'
      }
    ]
  },

  words: [
    'die Freizeit',
    'die Kultur',
    'die Ausstellung',
    'das Museum',
    'das Konzert',
    'das Theater',
    'die Stadtführung',
    'der Eintritt'
  ],
  verbs: [
    'besuchen',
    'teilnehmen',
    'stattfinden',
    'entdecken',
    'sich interessieren für',
    'auswählen'
  ],
  grammar: [
    'weil + Verb am Ende',
    'damit + Nebensatz',
    'dass + Nebensatz',
    'Relativsatz: ein Angebot, bei dem ...'
  ],
  mistakes: [
    '❌ Ich interessiere mich für moderne Stücke, weil ich finde sie spannend.',
    '✅ Ich interessiere mich für moderne Stücke, weil ich sie spannend finde.',
    '❌ Ich möchte eine Führung teilnehmen.',
    '✅ Ich möchte an einer Führung teilnehmen.'
  ],
  tip:
    'Achte bei Kulturangeboten besonders auf Zielgruppe, Zeit, Preis und Art der Veranstaltung. Mehrere Anzeigen können ähnlich klingen.'
},
{
  id: 'b1-lesen-03',
  title: 'Gesundheit & Arzttermine',
  level: 'B1',

  teil1: {
    title: 'Teil 1 – Lückentext',
    text: `Frau Yilmaz fühlt sich seit einigen Tagen nicht gut. Sie hat Kopfschmerzen und ist sehr müde, ___(31)___ sie in letzter Zeit viel gearbeitet hat. Zuerst wollte sie nicht zum Arzt gehen, ___(32)___ sie dachte, dass es von allein besser wird.

Am Montag ruft sie in einer Praxis an, ___(33)___ sie einen Termin vereinbaren möchte. Die Assistentin sagt, dass am Nachmittag noch ein Termin frei ist. Frau Yilmaz soll ihre e-card mitbringen, ___(34)___ die Anmeldung schneller geht.

Im Wartezimmer sitzen viele Patienten. Einige haben Husten, andere brauchen nur ein Rezept. Frau Yilmaz wartet fast eine halbe Stunde, ___(35)___ die Ärztin sehr viele Patienten behandeln muss.

Nach der Untersuchung sagt die Ärztin, dass Frau Yilmaz sich ausruhen soll. Sie bekommt ein Rezept und soll wiederkommen, ___(36)___ die Beschwerden nicht besser werden.`,
    options: {
      31: ['weil', 'obwohl', 'damit'],
      32: ['sondern', 'weil', 'trotzdem'],
      33: ['damit', 'obwohl', 'deshalb'],
      34: ['damit', 'weil', 'aber'],
      35: ['weil', 'trotzdem', 'sondern'],
      36: ['wenn', 'obwohl', 'deshalb']
    },
    answers: {
      31: 'weil',
      32: 'weil',
      33: 'damit',
      34: 'damit',
      35: 'weil',
      36: 'wenn'
    }
  },

  teil2: {
    title: 'Teil 2 – Anzeigen',
    image: '/images/b1lesen/b1-broschuere-03.jpeg',
    intro:
      'Lesen Sie die Anzeigen A–H. Für jede Situation finden Sie die passende Anzeige. Achten Sie genau auf Öffnungszeiten, Zielgruppe und Art der Behandlung.',
    questions: [
      {
        q: '41. Sie haben starke Zahnschmerzen und brauchen heute noch Hilfe. Sie suchen einen Zahnarzt mit Notterminen.',
        a: 'C'
      },
      {
        q: '42. Sie möchten Ihre Augen kontrollieren lassen, weil Sie beim Lesen oft Kopfschmerzen bekommen.',
        a: 'F'
      },
      {
        q: '43. Ihr Kind hat Fieber. Sie suchen eine Praxis, die speziell Kinder behandelt.',
        a: 'B'
      },
      {
        q: '44. Sie brauchen nach einer Sportverletzung Übungen und Behandlung für den Rücken.',
        a: 'E'
      },
      {
        q: '45. Sie haben Husten und Fieber und möchten am Wochenende eine medizinische Beratung bekommen.',
        a: 'H'
      }
    ]
  },

  teil3: {
    title: 'Teil 3 – Lesetext',
    text: `Gesundheit ist für viele Menschen eines der wichtigsten Themen im Alltag. Wer krank ist, möchte schnell Hilfe bekommen und verstehen, welche Schritte notwendig sind. In Österreich gibt es verschiedene Möglichkeiten, medizinische Unterstützung zu bekommen. Viele Menschen gehen zuerst zum Hausarzt. Dort werden einfache Untersuchungen gemacht, Rezepte ausgestellt oder Überweisungen zu Fachärzten geschrieben.

Besonders wichtig ist es, Termine rechtzeitig zu vereinbaren. Manche Praxen sind sehr voll, deshalb kann man nicht immer sofort behandelt werden. Bei akuten Beschwerden sollte man aber am Telefon genau erklären, wie stark die Schmerzen sind oder ob Fieber vorhanden ist. Dann kann die Praxis besser entscheiden, wie dringend der Termin ist.

Für Kinder gibt es eigene Kinderarztpraxen. Eltern schätzen es, wenn Ärzte Erfahrung mit Kindern haben und ruhig erklären, was untersucht wird. Auch Impfungen, Kontrollen und Beratungen gehören zu den Aufgaben einer Kinderarztpraxis.

Neben Hausärzten und Kinderärzten gibt es viele Fachärzte. Wer schlecht sieht oder beim Lesen Kopfschmerzen bekommt, geht zum Augenarzt. Bei Zahnschmerzen hilft ein Zahnarzt. Nach Verletzungen oder Rückenschmerzen kann Physiotherapie sinnvoll sein. Dort lernen Patienten Übungen, die den Körper stärken und Schmerzen reduzieren können.

Am Wochenende oder am Abend ist es manchmal schwieriger, eine geöffnete Praxis zu finden. Dafür gibt es Bereitschaftsdienste oder telefonische Gesundheitsberatung. Diese Angebote helfen besonders dann, wenn man unsicher ist, ob man sofort ins Krankenhaus gehen muss.

Experten empfehlen, Beschwerden nicht zu lange zu ignorieren. Viele Krankheiten lassen sich besser behandeln, wenn man früh reagiert. Gleichzeitig sollte man nicht wegen jeder Kleinigkeit in die Notaufnahme gehen. Wichtig ist, die passende Stelle zu wählen: Hausarzt, Facharzt, Apotheke, Bereitschaftsdienst oder Krankenhaus. So bekommen Patienten schneller die richtige Hilfe.`,
    questions: [
      {
        q: '46. Wohin gehen viele Menschen in Österreich zuerst, wenn sie krank sind?',
        options: [
          'Zum Hausarzt.',
          'Immer sofort ins Krankenhaus.',
          'Direkt zur Fahrschule.'
        ],
        a: 'Zum Hausarzt.'
      },
      {
        q: '47. Warum sollte man am Telefon seine Beschwerden genau erklären?',
        options: [
          'Damit die Praxis die Dringlichkeit besser einschätzen kann.',
          'Damit man kein Rezept braucht.',
          'Damit man automatisch kostenlos behandelt wird.'
        ],
        a: 'Damit die Praxis die Dringlichkeit besser einschätzen kann.'
      },
      {
        q: '48. Was ist eine Aufgabe von Kinderarztpraxen?',
        options: [
          'Autoreparaturen für Familien.',
          'Untersuchungen, Impfungen und Beratung für Kinder.',
          'Verkauf von Monatskarten.'
        ],
        a: 'Untersuchungen, Impfungen und Beratung für Kinder.'
      },
      {
        q: '49. Wann kann Physiotherapie sinnvoll sein?',
        options: [
          'Nach Verletzungen oder bei Rückenschmerzen.',
          'Nur beim Zahnarzt.',
          'Wenn man ein Museum besuchen möchte.'
        ],
        a: 'Nach Verletzungen oder bei Rückenschmerzen.'
      },
      {
        q: '50. Welche Überschrift passt am besten?',
        options: [
          'Gesundheit: Die passende Hilfe finden',
          'Warum Arztpraxen immer geschlossen sind',
          'Freizeitangebote in Wien'
        ],
        a: 'Gesundheit: Die passende Hilfe finden'
      }
    ]
  },

  words: [
    'der Arzttermin',
    'die Praxis',
    'die Untersuchung',
    'das Rezept',
    'die Überweisung',
    'die Beschwerden',
    'der Bereitschaftsdienst',
    'die Physiotherapie'
  ],
  verbs: [
    'einen Termin vereinbaren',
    'untersuchen',
    'behandeln',
    'verschreiben',
    'sich ausruhen',
    'erklären'
  ],
  grammar: [
    'weil + Verb am Ende',
    'damit + Nebensatz',
    'wenn + Nebensatz',
    'dass + Nebensatz'
  ],
  mistakes: [
    '❌ Ich habe Fieber, deshalb ich brauche einen Termin.',
    '✅ Ich habe Fieber, deshalb brauche ich einen Termin.',
    '❌ Ich gehe zum Arzt, weil ich bin krank.',
    '✅ Ich gehe zum Arzt, weil ich krank bin.'
  ],
  tip:
    'Achte bei Gesundheitsanzeigen besonders auf Fachrichtung, Öffnungszeiten, Notfälle und Zielgruppe. Zahnarzt, Kinderarzt und Hausarzt sind nicht dasselbe.'
},
{
  id: 'b1-lesen-04',
  title: 'Wohnen & Wohnungssuche',
  level: 'B1',

  teil1: {
    title: 'Teil 1 – Lückentext',

    text: `Ali wohnt seit drei Jahren in Wien und möchte bald in eine größere Wohnung ziehen. Seine jetzige Wohnung ist zu klein, ___(31)___ seine Familie gewachsen ist.

Im Internet findet er viele Wohnungsanzeigen. Er ruft einen Vermieter an, ___(32)___ er einen Besichtigungstermin vereinbaren möchte.

Die neue Wohnung gefällt ihm gut. Sie hat einen Balkon, ___(33)___ die Kinder draußen spielen können.

Der Vermieter erklärt den Mietvertrag genau. Ali liest alles sorgfältig, ___(34)___ er später keine Probleme bekommt.

Am Ende unterschreibt er den Vertrag. Er freut sich sehr, ___(35)___ die Wohnung nah an der Schule seiner Kinder liegt. Der Umzug findet nächste Woche statt, ___(36)___ alle Möbel vorbereitet sind.`,

    options: {
      31: ['weil', 'obwohl', 'damit'],
      32: ['weil', 'trotzdem', 'sondern'],
      33: ['damit', 'weil', 'obwohl'],
      34: ['damit', 'wenn', 'aber'],
      35: ['weil', 'obwohl', 'sondern'],
      36: ['wenn', 'weil', 'trotz']
    },

    answers: {
      31: 'weil',
      32: 'weil',
      33: 'damit',
      34: 'damit',
      35: 'weil',
      36: 'wenn'
    }
  },teil2: {
    title: 'Teil 2 – Anzeigen',
    image: '/images/b1lesen/b1-broschuere-04.jpeg',
    intro:
      'Lesen Sie die Anzeigen A–H. Für jede Situation finden Sie die passende Anzeige. Achten Sie genau auf Wohnungsart, Zielgruppe und Service.',

    questions: [
      {
        q: '41. Sie sind Student und suchen ein günstiges Zimmer in einer Wohngemeinschaft.',
        a: 'C'
      },
      {
        q: '42. Ihre Familie hat zwei Kinder. Sie möchten eine große Wohnung mit Balkon mieten.',
        a: 'B'
      },
      {
        q: '43. Sie wohnen nur sechs Monate in Wien und suchen eine möblierte Wohnung.',
        a: 'D'
      },
      {
        q: '44. Sie ziehen nächste Woche um und brauchen Hilfe beim Transport Ihrer Möbel.',
        a: 'F'
      },
      {
        q: '45. Nach dem Umzug möchten Sie Ihre Wohnung professionell reinigen lassen.',
        a: 'H'
      }
    ]
  },teil3: {
    title: 'Teil 3 – Lesetext',

    text: `Immer mehr Menschen ziehen nach Österreichs größeren Städten, besonders nach Wien. Deshalb ist es oft nicht einfach, eine passende Wohnung zu finden. Viele Wohnungen werden schon wenige Tage nach der Veröffentlichung vermietet. Wer eine gute Wohnung sucht, muss deshalb schnell reagieren und alle notwendigen Unterlagen vorbereiten.

Vor einer Besichtigung informieren sich viele Interessenten im Internet. Dort finden sie Informationen über die Größe der Wohnung, die monatliche Miete, die Betriebskosten und die Lage. Besonders wichtig sind für viele Menschen gute öffentliche Verkehrsmittel, Einkaufsmöglichkeiten und Schulen in der Nähe.

Familien suchen oft größere Wohnungen mit mehreren Zimmern und einem Balkon oder Garten. Studenten entscheiden sich dagegen häufig für eine Wohngemeinschaft, weil sie dort weniger Miete bezahlen müssen. Wer nur für kurze Zeit in Österreich bleibt, mietet oft eine möblierte Wohnung.

Vor der Unterschrift sollte man den Mietvertrag genau lesen. Darin stehen wichtige Informationen über die Miete, die Kaution, die Kündigungsfrist und andere Regeln. Wer Fragen hat, sollte sie vor der Unterschrift stellen.

Nach dem Einzug beginnt oft noch viel Arbeit. Möbel müssen aufgebaut, Kisten ausgepackt und manchmal auch die alte Wohnung gereinigt werden. Deshalb nutzen viele Menschen Umzugsfirmen oder professionelle Reinigungsdienste.

Experten empfehlen, verschiedene Wohnungsangebote miteinander zu vergleichen und nicht sofort die erste Wohnung zu mieten. Wer sich gut vorbereitet, findet meistens schneller ein passendes Zuhause.`,

    questions: [
      {
        q: '46. Warum muss man bei der Wohnungssuche oft schnell reagieren?',
        options: [
          'Weil viele Wohnungen schnell vermietet werden.',
          'Weil alle Wohnungen kostenlos sind.',
          'Weil man keine Unterlagen braucht.'
        ],
        a: 'Weil viele Wohnungen schnell vermietet werden.'
      },

      {
        q: '47. Worauf achten viele Menschen bei der Lage einer Wohnung?',
        options: [
          'Auf Einkaufsmöglichkeiten und öffentliche Verkehrsmittel.',
          'Nur auf das Wetter.',
          'Nur auf die Farbe des Hauses.'
        ],
        a: 'Auf Einkaufsmöglichkeiten und öffentliche Verkehrsmittel.'
      },

      {
        q: '48. Warum wohnen viele Studenten in einer WG?',
        options: [
          'Weil sie dort weniger Miete bezahlen.',
          'Weil sie keinen Mietvertrag brauchen.',
          'Weil sie dort kostenlos wohnen.'
        ],
        a: 'Weil sie dort weniger Miete bezahlen.'
      },

      {
        q: '49. Was sollte man vor der Unterschrift machen?',
        options: [
          'Den Mietvertrag genau lesen.',
          'Sofort einziehen.',
          'Neue Möbel kaufen.'
        ],
        a: 'Den Mietvertrag genau lesen.'
      },

      {
        q: '50. Welche Überschrift passt am besten?',
        options: [
          'Wohnungssuche in Österreich',
          'Urlaub in den Bergen',
          'Autofahren in Wien'
        ],
        a: 'Wohnungssuche in Österreich'
      }
    ]
  },words: [
    'die Wohnung',
    'der Mietvertrag',
    'die Kaution',
    'die Betriebskosten',
    'die Wohngemeinschaft',
    'der Balkon',
    'die Besichtigung',
    'der Umzug'
  ],

  verbs: [
    'mieten',
    'umziehen',
    'besichtigen',
    'unterschreiben',
    'vergleichen',
    'einziehen'
  ],

  grammar: [
    'weil + Verb am Ende',
    'damit + Nebensatz',
    'Relativsatz: die Wohnung, die ...',
    'wenn + Nebensatz'
  ],

  mistakes: [
    '❌ Ich suche Wohnung in Wien.',
    '✅ Ich suche eine Wohnung in Wien.',
    '❌ Ich unterschreibe den Vertrag, weil ich habe keine Zeit.',
    '✅ Ich unterschreibe den Vertrag, weil ich keine Zeit habe.'
  ],

  tip:
    'Lies Wohnungsanzeigen genau. Achte nicht nur auf die Miete, sondern auch auf Betriebskosten, Kaution, Lage und Ausstattung.'
},
,
{
  id: 'b1-lesen-05',
  title: 'Arbeit & Bewerbung',
  level: 'B1',

  teil1: {
    title: 'Teil 1 – Lückentext',
    text: `Samir sucht seit zwei Monaten eine neue Arbeit. Früher hat er in einem Restaurant gearbeitet, ___(31)___ er jetzt geregelte Arbeitszeiten haben möchte.

Er schreibt einen Lebenslauf und sucht passende Stellenanzeigen im Internet. Eine Anzeige gefällt ihm besonders gut, ___(32)___ die Firma Teilzeit anbietet.

Samir schickt seine Bewerbung per E-Mail, ___(33)___ der Arbeitgeber seine Unterlagen schnell bekommt.

Nach zwei Tagen bekommt er eine Einladung zum Vorstellungsgespräch. Er ist nervös, ___(34)___ er sich gut vorbereitet hat.

Im Gespräch erklärt er, welche Erfahrung er hat. Die Chefin sagt, ___(35)___ sie sich nächste Woche meldet.

Samir hofft, dass er die Stelle bekommt, ___(36)___ er bald wieder arbeiten kann.`,
    options: {
      31: ['weil', 'obwohl', 'damit'],
      32: ['weil', 'wenn', 'sondern'],
      33: ['damit', 'obwohl', 'aber'],
      34: ['obwohl', 'weil', 'sondern'],
      35: ['dass', 'wenn', 'damit'],
      36: ['damit', 'obwohl', 'trotz']
    },
    answers: {
      31: 'weil',
      32: 'weil',
      33: 'damit',
      34: 'obwohl',
      35: 'dass',
      36: 'damit'
    }
  },

  teil2: {
    title: 'Teil 2 – Anzeigen',
    image: '/images/b1lesen/b1-broschuere-05.jpeg',
    intro:
      'Lesen Sie die Anzeigen A–H. Für jede Situation finden Sie die passende Anzeige. Achten Sie besonders auf Arbeitszeit, Erfahrung und Deutschkenntnisse.',

    questions: [
      {
        q: '41. Sie möchten im Büro arbeiten und suchen eine Vollzeitstelle mit Deutschkenntnissen auf B1-Niveau.',
        a: 'A'
      },
      {
        q: '42. Sie können nur am Vormittag arbeiten und suchen eine Teilzeitstelle im Büro.',
        a: 'G'
      },
      {
        q: '43. Sie haben Erfahrung in der Küche und möchten als Koch oder Köchin arbeiten.',
        a: 'C'
      },
      {
        q: '44. Sie möchten im Lager arbeiten. Erfahrung ist nicht unbedingt notwendig.',
        a: 'E'
      },
      {
        q: '45. Sie wissen nicht, wie man einen Lebenslauf schreibt, und brauchen Hilfe bei der Bewerbung.',
        a: 'H'
      }
    ]
  },

  teil3: {
    title: 'Teil 3 – Lesetext',
    text: `Viele Menschen suchen in Österreich eine neue Arbeit. Wichtig ist, dass man die Stellenanzeigen genau liest. Dort steht, ob die Arbeit Vollzeit oder Teilzeit ist, wann man beginnen kann und welche Deutschkenntnisse notwendig sind.

Für eine Bewerbung braucht man meistens einen Lebenslauf und ein kurzes Bewerbungsschreiben. Im Lebenslauf stehen persönliche Daten, Ausbildung, Berufserfahrung und besondere Kenntnisse. Das Bewerbungsschreiben sollte freundlich und klar sein.

Nach der Bewerbung laden manche Firmen zu einem Vorstellungsgespräch ein. Dort möchte der Arbeitgeber wissen, warum man die Stelle möchte und welche Erfahrungen man mitbringt. Es ist gut, sich vorher auf typische Fragen vorzubereiten.

Nicht jede Bewerbung ist erfolgreich. Trotzdem sollte man nicht sofort aufgeben. Wer regelmäßig sucht, seine Unterlagen verbessert und pünktlich zu Gesprächen kommt, hat bessere Chancen auf eine passende Arbeit.`,

    questions: [
      {
        q: '46. Was sollte man in Stellenanzeigen genau lesen?',
        options: [
          'Arbeitszeit, Beginn und notwendige Deutschkenntnisse.',
          'Nur die Farbe des Firmenlogos.',
          'Nur den Namen der Stadt.'
        ],
        a: 'Arbeitszeit, Beginn und notwendige Deutschkenntnisse.'
      },
      {
        q: '47. Was steht normalerweise im Lebenslauf?',
        options: [
          'Persönliche Daten, Ausbildung und Berufserfahrung.',
          'Nur Lieblingsessen.',
          'Nur Freizeitpläne.'
        ],
        a: 'Persönliche Daten, Ausbildung und Berufserfahrung.'
      },
      {
        q: '48. Was möchte der Arbeitgeber im Vorstellungsgespräch wissen?',
        options: [
          'Warum man die Stelle möchte und welche Erfahrung man hat.',
          'Welche Wohnung man mieten möchte.',
          'Welche Fahrkarte man benutzt.'
        ],
        a: 'Warum man die Stelle möchte und welche Erfahrung man hat.'
      },
      {
        q: '49. Was soll man tun, wenn eine Bewerbung nicht erfolgreich ist?',
        options: [
          'Nicht sofort aufgeben und weiter suchen.',
          'Nie wieder eine Bewerbung schreiben.',
          'Alle Unterlagen wegwerfen.'
        ],
        a: 'Nicht sofort aufgeben und weiter suchen.'
      },
      {
        q: '50. Welche Überschrift passt am besten?',
        options: [
          'Arbeit suchen und sich richtig bewerben',
          'Freizeitangebote in Wien',
          'Wohnungssuche in Österreich'
        ],
        a: 'Arbeit suchen und sich richtig bewerben'
      }
    ]
  },

  words: [
    'die Bewerbung',
    'der Lebenslauf',
    'die Stelle',
    'das Vorstellungsgespräch',
    'die Erfahrung',
    'die Teilzeit',
    'die Vollzeit',
    'der Arbeitgeber'
  ],

  verbs: [
    'sich bewerben',
    'arbeiten',
    'verdienen',
    'schicken',
    'einladen',
    'sich vorbereiten'
  ],

  grammar: [
    'weil + Verb am Ende',
    'obwohl + Nebensatz',
    'damit + Nebensatz',
    'dass + Nebensatz'
  ],

  mistakes: [
    '❌ Ich suche Arbeit seit zwei Monate.',
    '✅ Ich suche seit zwei Monaten Arbeit.',
    '❌ Ich habe Bewerbung geschickt.',
    '✅ Ich habe eine Bewerbung geschickt.'
  ],

  tip:
    'Lies Stellenanzeigen genau. Achte besonders auf Arbeitszeit, Erfahrung, Deutschkenntnisse und Beginn der Arbeit.'
}
];