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
  }
];