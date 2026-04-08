---
layout: post
title: "Fernsteuerung: Leistung definieren"
lang: de
tags: 
  - "Streaming"
  - "Fernsteuerung"
  - "Leistung"
  - "FPS"
  - "Teamviewer"
summary: „Leistung“ bedeutet je nach Fachgebiet etwas anderes. Bei der Fernsteuerung hängen Bildqualität, Latenz und Bildwiederholrate zusammen. Die Lücke zwischen Erwartung und Realität – erfahren in Indonesien und mit als leistungsstark geltenden Lösungen – war der Ausgangspunkt für NovaLINK. Keine Software passt perfekt in jede Umgebung, aber wir entwickeln und testen weiter, um die Leistung zu erreichen, die wir anstreben.

---

**„Gute Leistung“** heißt je nach Kontext etwas völlig anderes. In Spielen zählen FPS und Reaktionszeit; bei Datenbanken Durchsatz und Stabilität; bei Netzwerkgeräten Verarbeitungskapazität und Paketlaufzeit. Ohne fachliche Definition geraten Erwartung und Ergebnis leicht auseinander. Wenn Sie bei der Einführung „Leistung“ nur in einem Satz festhalten, ist später die Verantwortung schwer zu klären. Für Fernsteuerung und Bildstreaming gilt dasselbe: Zwar gibt es Überschneidungen mit OTT oder Videokonferenzen, weil Echtzeitübertragung nötig ist – doch Maus und Tastatur müssen sofort reagieren, was „reines Ansehen“-Streaming nicht fordert. Flüssiges Bild allein reicht nicht; die Reaktion der Steuerung muss in die Bewertung einfließen. Leistung ist hier keine einzelne Zahl, sondern mehrere Faktoren gleichzeitig.

Typische Faktoren bei der Fernsteuerung: Erstens Bildqualität (Kompression, Bitrate, Farbe) – Textschärfe und Natürlichkeit von Fotos/Videos. Zweitens Latenz: Zeit von Input bis zum zurückkommenden Bild, sie entscheidet über das „Gefühl“ der Reaktion. Drittens Bildwiederholrate; für Dokumente reicht oft wenig, bei Video oder CAD ist der Unterschied spürbar. Viertens adaptive Strategie bei weniger Bandbreite. Schließlich Robustheit bei Paketverlust, Verhalten bei niedriger Bandbreite sowie CPU-/GPU-Last auf Client und Server – zusammen „Gesamtleistung“. Ein Benchmark-Wert allein genügt nicht.

Wichtig: **„Bekannt und teuer“** und **„wahrgenommene Leistung in meiner Umgebung“** stimmen nicht immer überein. Marktanteil und Funktionslisten helfen bei der Auswahl, aber jede Firma muss unter eigenem Netz und Arbeitsabläufen validieren. Deshalb halten wir Transparenz über Messbedingungen für wichtiger als abstrakte Überlegenheitsdebatten. „Gute Leistung“ ist weniger eine Tabellenzeile als die ehrliche Auseinandersetzung mit Einschränkungen.

Wir haben ein ERP für ein Unternehmen in Purbalingga (Indonesien) eingeführt. Indonesien wächst mobil stark, doch die Kluft zwischen Metropole und Regionen ist groß. Die Internetverbindung des Kunden schwankte stark nach Tageszeit, Abbrüche waren häufig – stabile Leitungen als Voraussetzung ließen sich nicht übernehmen. Bei Störungen reichten oft keine Logs; wir mussten Schritte am Bildschirm nachvollziehen. Vor-Ort war nicht immer möglich – oft Einstellungen prüfen, Fehler reproduzieren, Schulungen remote. War die Sitzung träge, war die Ursache (Netz vs. Anwendung) schwerer zu trennen. Daher wählten wir eine als leistungsstark geltende Lösung: Teamviewer, weit verbreitet in Remote-Support.

[![](
https://haninpost.com/wp-content/uploads/2024/12/%E2%96%B2%EC%95%84%EC%84%B8%EC%95%88ASEAN-%EC%97%AD%EB%82%B4-%EC%A3%BC%EB%B3%80%EA%B5%AD-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9D%B8%ED%84%B0%EB%84%B7-%EC%86%8D%EB%8F%841.jpg)Mobiles Internet in Indonesien weiter langsamer als in anderen Ländern – Haninpost](https://haninpost.com/archives/103545)

Die Lösung von Teamviewer ist in Funktionsumfang, Ökosystem und Enterprise-Support stark, lizenziert sich aber teuer. Wir erwarteten, dass sich zumindest Reaktion und Schärfe des Remote-Bildes für den Preis auszahlen. In der Praxis blieb die Erfahrung oft hinter den Erwartungen: Bei schlechter Leitung stapelte sich Latenz, Bild ruckelte oder wurde unscharf; selbst Menüs und Formulare fühlten sich träge an. Das schmälert nicht den globalen Wert der Technik – bewährte Funktionen, Betriebserfahrung, Plattformen und Verwaltung bleiben wertvoll. In unserem Umfeld klaffte die Lücke zwischen „teuer = schnell und flüssig“ und dem Gefühl vor Ort – Anspruch für ein neues Projekt. Aus der Frage: „Warum unter unseren Bedingungen so langsam?“ **Wir lernten: Gutes Produkt plus schlechte Umgebung = andere Wahrnehmung. Und je schwieriger die Leitung, desto wichtiger, dass Software die Grenzen von Leitung und Endgerät intelligent nutzt.**

![]({{site.baseurl}}/public/post_imgs/260409/teamviewer_plan.jpg)

Daraus entstand NovaLINK. Es soll nicht „noch ein Programm“ sein. Wir definieren und messen Leistung nach dem, was uns in der Praxis wichtig ist: Bildqualität, Latenz, Aktualisierungsrate, Verhalten bei schwachem Netz, Ressourcenverbrauch. Pipeline-Design und Übertragungsstrategien bei wenig oder viel Bildänderung hängen daran. Vor neuen Features prüfen wir, ob der Kernpfad unsere Kriterien erfüllt. Wir testen in vielen Szenarien und nähern uns realen Nutzungsmustern an, um Engpässe zu finden. Wir prüfen Zahlen und subjektives Gefühl: z. B. bei gleicher Auflösung weniger Daten, Häufigkeit von Bildschirmen mit Verlusten. Feste Testumgebung und Wiederholungen trennen echte Verbesserung vom Zufall. Ziel ist kein Marketingwort, sondern ein Standard, der uns überzeugt. Prioritäten hängen von Aufgabe und Nutzer ab – gemeinsame Abstimmung ist zuerst.

<video autoplay loop muted playsinline width="100%" poster="{{site.baseurl}}/public/post_imgs/260409/teamviewer_plan.jpg" style="outline:none;pointer-events:none;" tabindex="-1">
  <source src="https://novalinkstorage.blob.core.windows.net/common/video_demo/compare_teamviewer_frame_drop.mp4" type="video/mp4">
  Zum Abspielen wird ein mp4-fähiger Browser benötigt.
</video>

- **Frame-Drop-Vergleich unter gleichen Bedingungen**
  - OS: Windows 10, 32bit
  - CPU: Intel(R) Celeron(R) CPU J1900 @ 1.99GHz
  - RAM: 4GB
  - Videoquelle: https://youtu.be/KxMqSz8qVSg
  - Test: Video auf dem Host, Bildschirmaufnahme auf dem Client

Offen gesagt gibt es keine Fernsteuerungssoftware, die für jedes Netz, jedes Gerät und jede Branche „optimal“ ist – zu viele Variablen: Leitung, Firewall, Relay-Standort, Gerät, parallel laufende Apps. Dieselbe Lösung kann im LAN flüssig sein und im Ausland frustrierend. Man kann nicht pauschal „schlechte Software“ sagen, doch für Nutzer zählt das Ergebnis: Verzögerung und Stress. Trotzdem entwickeln wir NovaLINK mit klaren Zielen: unnötige Latenz reduzieren, lesbare Bildqualität, praktische Nutzbarkeit unter Feld-Bedingungen. Nicht „überall Platz eins“, sondern den Bereich erweitern, für den wir Verantwortung übernehmen und darin konsistent verbessern. Ohne diese Grenzen definieren wir keine Fortschritte. Wir glauben: Definition und Validierung der Leistung verankern die Produktrichtung.

![NovaLINK TestSuite]({{site.baseurl}}/public/post_imgs/260409/testsuite.png)


Wir werden Kriterien weiter anhand von Feedback und Messungen schärfen. Je transparenter die Definition, desto ehrlicher die Vergleichsbasis für Interessenten. In diesem Blog sollen Messmethoden, Auswertung und Trial-and-Error möglichst konkret werden.
