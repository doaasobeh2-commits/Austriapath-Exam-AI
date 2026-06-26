export const b2HorenModels = [
  {
    id: 'b2-hoeren-01',
    level: 'B2',
    title: 'Büro & Terminplanung',
    difficulty: 'mittel',
    text: `
Hallo Frau Berger, hier ist Markus Klein aus der Projektabteilung.

Unser Termin morgen um 10 Uhr muss leider verschoben werden, weil Herr Schneider kurzfristig zu einem Kundengespräch nach Linz fahren muss.

Wir schlagen Donnerstag um 14 Uhr vor. Bitte bringen Sie die aktuellen Zahlen zur Präsentation mit.

Guten Tag, hier spricht Anna Berger. Ich rufe wegen der Besprechung am Donnerstag an. Ich kann um 14 Uhr kommen, aber ich brauche vorher noch die Unterlagen. Könnten Sie mir die Tagesordnung und die Verkaufszahlen per E-Mail schicken? Dann kann ich mich besser vorbereiten.

Viele Firmen verlieren jede Woche viel Zeit durch schlecht vorbereitete Meetings. Experten empfehlen deshalb klare Tagesordnungen, feste Zeitlimits und konkrete Aufgaben nach jeder Besprechung.

Besonders wichtig ist, dass nur Personen eingeladen werden, die wirklich etwas zum Thema beitragen können.

Interviewer: Wie organisieren Sie Ihren Arbeitstag?

Mitarbeiterin: Ich beginne morgens mit den wichtigsten Aufgaben. Danach beantworte ich E-Mails. Früher habe ich alles gleichzeitig gemacht, aber das hat mich gestresst. Heute plane ich feste Zeiten für Telefonate, Besprechungen und konzentrierte Arbeit.
    `.trim(),
    questions: [
      {
        q: 'Warum wird der Termin verschoben?',
        a: 'Weil Herr Schneider zu einem Kundengespräch nach Linz fahren muss.'
      },
      {
        q: 'Wann soll der neue Termin stattfinden?',
        a: 'Am Donnerstag um 14 Uhr.'
      },
      {
        q: 'Was braucht Frau Berger vor der Besprechung?',
        a: 'Sie braucht die Tagesordnung und die Verkaufszahlen.'
      },
      {
        q: 'Warum braucht sie die Unterlagen?',
        a: 'Damit sie sich besser vorbereiten kann.'
      },
      {
        q: 'Was empfehlen Experten für bessere Meetings?',
        a: 'Klare Tagesordnungen, feste Zeitlimits und konkrete Aufgaben.'
      },
      {
        q: 'Wer sollte zu Meetings eingeladen werden?',
        a: 'Nur Personen, die wirklich etwas zum Thema beitragen können.'
      },
      {
        q: 'Was macht die Mitarbeiterin morgens zuerst?',
        a: 'Sie erledigt zuerst die wichtigsten Aufgaben.'
      },
      {
        q: 'Was hat sie früher gestresst?',
        a: 'Dass sie alles gleichzeitig gemacht hat.'
      }
    ],
    solution: `
1. Weil Herr Schneider zu einem Kundengespräch nach Linz fahren muss.
2. Am Donnerstag um 14 Uhr.
3. Die Tagesordnung und die Verkaufszahlen.
4. Damit sie sich besser vorbereiten kann.
5. Klare Tagesordnungen, feste Zeitlimits und konkrete Aufgaben.
6. Nur Personen, die wirklich etwas zum Thema beitragen können.
7. Sie erledigt zuerst die wichtigsten Aufgaben.
8. Dass sie alles gleichzeitig gemacht hat.
    `.trim(),
    words: [
      'der Termin',
      'die Besprechung',
      'die Tagesordnung',
      'die Unterlagen',
      'die Verkaufszahlen',
      'die Präsentation',
      'die Arbeitsorganisation'
    ],
    verbs: [
      'verschieben',
      'vorbereiten',
      'teilnehmen',
      'beitragen',
      'organisieren',
      'erledigen',
      'empfehlen'
    ],
    grammar: [
      'Nebensatz mit weil',
      'Infinitiv mit zu',
      'Passiv: Der Termin wird verschoben',
      'Konjunktiv II: Könnten Sie mir ... schicken?'
    ]
  },

  {
    id: 'b2-hoeren-02',
    level: 'B2',
    title: 'Bewerbung & Arbeitswelt',
    difficulty: 'mittel',
    text: `
Guten Tag Herr Yilmaz, hier ist Sabine Meier von der Personalabteilung.

Wir haben Ihre Bewerbung erhalten und möchten Sie nächste Woche zu einem Vorstellungsgespräch einladen. Bitte bringen Sie Ihre Zeugnisse und eine Kopie Ihres Lebenslaufs mit.

Ich fand das Gespräch sehr angenehm. Die Stelle klingt interessant, aber die Arbeitszeiten sind etwas schwierig. Manchmal müsste ich bis 19 Uhr bleiben.

Ich möchte zuerst mit meiner Familie sprechen, bevor ich eine Entscheidung treffe.

Weiterbildung wird in vielen Berufen immer wichtiger. Wer regelmäßig neue Fähigkeiten lernt, hat bessere Chancen auf dem Arbeitsmarkt.

Viele Unternehmen bieten interne Schulungen an, aber auch Online-Kurse werden immer beliebter, weil sie zeitlich flexibel sind.

Interviewer: Was hilft bei Konflikten im Team?

Expertin: Wichtig ist, früh miteinander zu sprechen. Viele Probleme entstehen, weil Kollegen ihre Erwartungen nicht klar formulieren. Man sollte sachlich bleiben, zuhören und gemeinsam nach einer Lösung suchen.
    `.trim(),
    questions: [
      {
        q: 'Warum ruft Frau Meier an?',
        a: 'Sie möchte Herrn Yilmaz zu einem Vorstellungsgespräch einladen.'
      },
      {
        q: 'Was soll Herr Yilmaz mitbringen?',
        a: 'Seine Zeugnisse und eine Kopie seines Lebenslaufs.'
      },
      {
        q: 'Was findet die Person an der Stelle schwierig?',
        a: 'Die Arbeitszeiten, weil man manchmal bis 19 Uhr bleiben müsste.'
      },
      {
        q: 'Was möchte die Person zuerst tun?',
        a: 'Sie möchte zuerst mit ihrer Familie sprechen.'
      },
      {
        q: 'Warum ist Weiterbildung wichtig?',
        a: 'Weil sie die Chancen auf dem Arbeitsmarkt verbessert.'
      },
      {
        q: 'Warum sind Online-Kurse beliebt?',
        a: 'Weil sie zeitlich flexibel sind.'
      },
      {
        q: 'Warum entstehen viele Konflikte?',
        a: 'Weil Kollegen ihre Erwartungen nicht klar formulieren.'
      },
      {
        q: 'Was empfiehlt die Expertin bei Konflikten?',
        a: 'Man sollte sachlich bleiben, zuhören und gemeinsam nach einer Lösung suchen.'
      }
    ],
    solution: `
1. Sie lädt Herrn Yilmaz zu einem Vorstellungsgespräch ein.
2. Zeugnisse und eine Kopie des Lebenslaufs.
3. Die Arbeitszeiten.
4. Sie möchte zuerst mit ihrer Familie sprechen.
5. Weil Weiterbildung die Chancen auf dem Arbeitsmarkt verbessert.
6. Weil Online-Kurse zeitlich flexibel sind.
7. Weil Erwartungen nicht klar formuliert werden.
8. Sachlich bleiben, zuhören und gemeinsam eine Lösung suchen.
    `.trim(),
    words: [
      'die Bewerbung',
      'das Vorstellungsgespräch',
      'die Personalabteilung',
      'der Lebenslauf',
      'das Zeugnis',
      'die Weiterbildung',
      'die Schulung',
      'der Konflikt'
    ],
    verbs: [
      'sich bewerben',
      'einladen',
      'mitbringen',
      'entscheiden',
      'verbessern',
      'formulieren',
      'zuhören'
    ],
    grammar: [
      'bevor-Satz',
      'Relativsatz',
      'weil-Satz',
      'Konjunktiv II: müsste'
    ]
  },

  {
    id: 'b2-hoeren-03',
    level: 'B2',
    title: 'Digitalisierung & Gesellschaft',
    difficulty: 'stark',
    text: `
Liebe Kolleginnen und Kollegen, das heutige Teammeeting findet nicht im Besprechungsraum statt, sondern online.

Der Link wurde Ihnen bereits per E-Mail geschickt. Bitte testen Sie vorher Kamera und Mikrofon, damit wir pünktlich beginnen können.

Ich finde digitale Tools sehr praktisch, aber beim Datenschutz muss man vorsichtig sein. Nicht jede App sollte Zugriff auf persönliche Daten bekommen.

In unserer Firma dürfen deshalb nur Programme benutzt werden, die vorher geprüft wurden.

Künstliche Intelligenz verändert viele Arbeitsbereiche. Sie kann Texte zusammenfassen, Daten analysieren und einfache Fragen beantworten.

Trotzdem bleibt menschliche Kontrolle wichtig, denn KI-Systeme können Fehler machen oder Informationen falsch bewerten.

Interviewer: Welche Vorteile hat Homeoffice?

Experte: Viele Menschen sparen Zeit, weil sie nicht pendeln müssen. Gleichzeitig fehlt manchen der direkte Austausch mit Kollegen. Deshalb empfehle ich ein gemischtes Modell: einige Tage zu Hause und einige Tage im Büro.
    `.trim(),
    questions: [
      {
        q: 'Wo findet das heutige Teammeeting statt?',
        a: 'Es findet online statt.'
      },
      {
        q: 'Was sollen die Mitarbeiter vorher testen?',
        a: 'Sie sollen Kamera und Mikrofon testen.'
      },
      {
        q: 'Was findet die Person praktisch?',
        a: 'Sie findet digitale Tools praktisch.'
      },
      {
        q: 'Welche Programme dürfen in der Firma benutzt werden?',
        a: 'Nur Programme, die vorher geprüft wurden.'
      },
      {
        q: 'Was kann künstliche Intelligenz laut Text tun?',
        a: 'Sie kann Texte zusammenfassen, Daten analysieren und einfache Fragen beantworten.'
      },
      {
        q: 'Warum bleibt menschliche Kontrolle wichtig?',
        a: 'Weil KI-Systeme Fehler machen oder Informationen falsch bewerten können.'
      },
      {
        q: 'Welchen Vorteil von Homeoffice nennt der Experte?',
        a: 'Viele Menschen sparen Zeit, weil sie nicht pendeln müssen.'
      },
      {
        q: 'Welches Arbeitsmodell empfiehlt der Experte?',
        a: 'Ein gemischtes Modell: einige Tage zu Hause und einige Tage im Büro.'
      }
    ],
    solution: `
1. Online.
2. Kamera und Mikrofon.
3. Digitale Tools.
4. Nur vorher geprüfte Programme.
5. Texte zusammenfassen, Daten analysieren und einfache Fragen beantworten.
6. Weil KI Fehler machen oder Informationen falsch bewerten kann.
7. Man spart Zeit, weil man nicht pendeln muss.
8. Ein gemischtes Modell.
    `.trim(),
    words: [
      'die Digitalisierung',
      'das Online-Meeting',
      'der Datenschutz',
      'die persönlichen Daten',
      'die künstliche Intelligenz',
      'die Kontrolle',
      'das Homeoffice',
      'der Austausch'
    ],
    verbs: [
      'testen',
      'prüfen',
      'benutzen',
      'verändern',
      'analysieren',
      'bewerten',
      'pendeln',
      'empfehlen'
    ],
    grammar: [
      'Passiv: wurde geschickt / wurden geprüft',
      'Konzessiv: trotzdem',
      'Relativsatz',
      'Infinitiv mit zu'
    ]
  }
];