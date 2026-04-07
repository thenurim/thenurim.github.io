---
layout: post
title: Définir les performances du contrôle à distance
lang: fr
tags: 
  - "Streaming"
  - "Contrôle à distance"
  - "Performance"
  - "FPS"
  - "Teamviewer"
summary: Le mot « performance » change de sens selon les domaines. En contrôle à distance, qualité d’écran, latence et fréquence de rafraîchissement s’entremêlent. L’écart entre attentes et réalité — vécu sur le terrain en Indonésie et avec des solutions réputées performantes — a lancé le projet NovaLINK. Aucun logiciel ne convient parfaitement à tous les contextes, mais nous poursuivons tests et développement pour atteindre la performance visée.

---

**« Bonnes performances »** signifie tout autre chose selon le contexte. En jeu : IPS et réactivité ; en base de données : débit et stabilité ; sur équipement réseau : capacité de traitement et latence des paquets. Sans définition adaptée au domaine, attentes et résultats divergent. Si l’on n’écrit « performance » qu’en une ligne à l’adoption, la responsabilité devient floue ensuite. Idem pour le contrôle à distance et le streaming d’écran : comme l’OTT ou la visioconférence, il faut du temps réel, mais souris et clavier doivent réagir tout de suite — une charge que le streaming « lecture seule » n’a pas. La fluidité visuelle ne suffit pas ; il faut inclure la réponse des commandes. Ici la performance n’est pas un seul chiffre mais plusieurs facteurs à la fois.

Facteurs courants : qualité d’écran (compression, débit, couleur) ; latence entre saisie et retour d’image ; fréquence de rafraîchissement ; stratégie adaptative quand la bande passante baisse ; résilience aux pertes de paquets ; comportement en bas débit ; charge CPU/GPU client et serveur — d’où une « performance globale » qu’un seul benchmark ne résume pas.

Point important : **« produit célèbre et cher »** et **« performance ressentie dans mon environnement »** ne coïncident pas toujours. Parts de marché et listes de fonctions orientent, mais chaque entreprise doit valider sur son réseau et ses usages. Nous préférons donc la transparence sur les conditions de mesure aux débats abstraits de supériorité. Une bonne « performance », c’est aussi honnêtement affronter et réduire les contraintes rencontrées.

Nous avons déployé un ERP pour une société à Purbalingga (Indonésie). L’Indonésie progresse vite côté mobile, mais l’écart capitale/régions reste fort. L’internet du client variait selon l’heure, coupures fréquentes — impossible d’importer des modes de travail supposant une ligne stable. Parfois les journaux ne suffisaient ; il fallait reproduire en voyant l’écran. Sans visite systématique, nous vérifions souvent, reproduisons, formons à distance. Si la session est lente, isoler réseau et application est plus difficile. D’où le choix d’une solution réputée pour le contrôle à distance : Teamviewer, très présent dans le support.

[![](
https://haninpost.com/wp-content/uploads/2024/12/%E2%96%B2%EC%95%84%EC%84%B8%EC%95%88ASEAN-%EC%97%AD%EB%82%B4-%EC%A3%BC%EB%B3%80%EA%B5%AD-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9D%B8%ED%84%B0%EB%84%B7-%EC%86%8D%EB%8F%841.jpg)Vitesse Internet mobile en Indonésie toujours en retard sur d’autres pays – Haninpost](https://haninpost.com/archives/103545)

La solution Teamviewer est forte en fonctionnalités, écosystème et support entreprise, mais la licence coûte cher. Nous attendions au moins réactivité et netteté sur l’écran distant. Sur le terrain, l’expérience a souvent déçu : latence cumulée sur mauvaise ligne, image saccadée ou floue, même des menus ou formulaires pouvaient sembler lents. Cela ne nie pas la valeur technique mondiale — fonctionnalités éprouvées, expérience, plateformes, gestion d’équipes restent précieuses. Mais dans notre contexte, l’écart entre « cher = rapide et fluide » et le ressenti a inspiré le projet : « Pourquoi si lent dans nos conditions ? » **Rappel : bon produit + environnement hostile = perception différente ; plus le réseau est difficile, plus le logiciel doit être intelligent dans les limites de la ligne et du terminal.**

![]({{site.baseurl}}/public/post_imgs/260409/teamviewer_plan.jpg)

D’où NovaLINK. Pas « un programme de plus » : nous définissons et mesurons la performance selon ce qui compte sur le terrain — qualité, latence, rafraîchissement, comportement en réseau difficile, ressources. Pipeline de streaming et stratégies d’envoi selon l’activité d’écran s’y rattachent. Avant d’ajouter des fonctions, nous vérifions que le chemin principal respecte nos critères. Tests en scénarios variés, conditions proches des usages réels pour trouver les goulots. Nous croisons chiffres et ressenti : même résolution avec moins de débit, fréquence de dégradations sur liens avec pertes. Environnement de test fixe et mesures répétées pour distinguer progrès réel et hasard. Objectif : un standard qui nous convainc, pas un slogan. Les priorités dépendent des tâches — les fixer ensemble d’abord.

<video autoplay loop muted playsinline width="100%" poster="{{site.baseurl}}/public/post_imgs/260409/teamviewer_plan.jpg" style="outline:none;pointer-events:none;" tabindex="-1">
  <source src="https://novalinkstorage.blob.core.windows.net/common/video_demo/compare_teamviewer_frame_drop.mp4" type="video/mp4">
  Un navigateur compatible mp4 est nécessaire pour cette vidéo.
</video>

- **Test comparatif de perte d’images en environnement identique**
  - OS : Windows 10, 32 bits
  - CPU : Intel(R) Celeron(R) CPU J1900 @ 1.99GHz
  - RAM : 4 Go
  - Source vidéo : https://youtu.be/KxMqSz8qVSg
  - Protocole : lecture sur l’hôte, capture côté client

Franchement, aucun logiciel de contrôle à distance n’est « optimal » pour tous réseaux, matériels et secteurs — trop de variables. Qualité de ligne, pare-feu, relais, specs, applications ouvertes. La même solution peut sembler rapide en intranet et frustrante vers un bureau à l’étranger. Difficile de tout attribuer au « mauvais produit », mais pour l’utilisateur le résultat est le même : lenteur et stress. Nous développons NovaLINK avec des objectifs clairs : réduire latence inutile, garder une image lisible, rester utilisable sur le terrain. Pas « premier partout », mais élargir la portée dont nous assumons la responsabilité et nous y améliorer de façon cohérente. Sans définir ces limites, impossible de juger les progrès. Définir et valider la performance, c’est ancrer la direction du produit.

Nous affinerons les critères avec retours et mesures réelles. Plus la définition est transparente, plus la comparaison est honnête pour ceux qui envisagent l’adoption. Sur ce blog : méthodes, interprétation et essais-erreurs en détail.
