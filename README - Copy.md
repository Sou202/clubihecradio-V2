# Club Radio Libertad · IHEC Carthage

Site français composé de sept pages publiques. Aucune base de données, aucun formulaire simulé, aucune API payante et aucune clé secrète ne sont nécessaires.

## Modifier sans programmer

Dans Lovable, demandez directement la modification souhaitée, par exemple « Remplace le texte de présentation du club » ou joignez de nouvelles photos avec leurs légendes. Les modifications restent visibles dans l’aperçu avant publication.

Pour les personnes qui éditent le code, les liens, visuels et activités sont regroupés dans `src/lib/site-content.ts`. Les autres textes sont dans les pages de `src/routes/`. Les couleurs et la typographie sont définies dans `src/styles.css`.

## Informations à compléter avant présentation officielle

- Portraits, noms et fonctions de l’équipe : confirmation nécessaire auprès du club. La vidéo Instagram n’était pas intégralement accessible lors de la réalisation.
- Événement : nom officiel complet, dates, lieu et archives à confirmer. Aucun historique ni prochaine édition n’est inventé.
- Contact : adresse e-mail propre au club à communiquer ; l’e-mail de l’établissement n’est pas utilisé comme celui du club.
- Photographies : les trois images de studio, de vinyles et de scène sont des illustrations générées explicitement signalées. Elles ne montrent pas le club réel. Les remplacer par des photos autorisées du club.
- Le logo fourni est utilisé sans modification de son dessin. Un fichier de meilleure définition peut améliorer sa netteté.

## Sources et limites de vérification

Présentation officielle consultée : https://ihec.rnu.tn/fr/article/537/club-radio-libertad

Elle confirme la radio interne, les émissions étudiantes autour du sport, de la culture, de l’économie et de la politique, ainsi que les événements. Les descriptions de mission et de vision sont une proposition éditoriale à valider, pas des citations officielles.

Liens officiels fournis, conservés dans le site :
- https://www.instagram.com/clubradio_ihec_libertad/
- https://www.instagram.com/reel/Ddro8e9Nq5V/
- https://www.instagram.com/fn_clubradiolibertad/

Les métadonnées publiques Instagram peuvent être accessibles, mais pas l’intégralité des publications ni de la vidéo sans connexion. Aucun faux flux ou portrait n’en a été déduit.

## Exporter le code

Connectez GitHub depuis le menu « + » de Lovable → GitHub → connecter le projet. Sur GitHub, utilisez « Code → Download ZIP » pour télécharger les fichiers. Le téléchargement direct depuis l’éditeur de code Lovable dépend de votre offre.

## Démarrer localement

Prérequis : Node.js récent et Bun.

```sh
bun install
bun run dev
```

Tests : `bun run test`.

## Publication et hébergement

### Depuis Lovable
Utilisez le bouton « Publier ». Le site n’est pas automatiquement publié à la fin de sa création. Les futures modifications nécessitent une nouvelle publication pour apparaître sur l’adresse publique.

### Hébergement gratuit extérieur
Le code est exportable. Le site ne dépend d’aucun service payant pour ses contenus ou ses liens. Cloudflare propose une offre gratuite pour héberger ce type de projet ; ses quotas et conditions restent ceux de l’hébergeur.

Les sept pages sont configurées pour le prérendu HTML dans `vite.config.ts`. Une compilation de production (`bun run build`) produit les fichiers d’hébergement ; contrôler la génération d’un `index.html` pour chacune des sept pages avant de les mettre en ligne. Cette compilation est exécutée automatiquement dans Lovable, pas manuellement dans son aperçu.

### GitHub Pages : adaptation nécessaire
GitHub Pages est gratuit pour un dépôt public, mais ne lance pas de serveur. La version actuelle conserve le socle TanStack Start imposé par Lovable. Elle n’est donc pas présentée comme un dossier HTML autonome déjà validé pour GitHub Pages.

Pour GitHub Pages, publier uniquement les fichiers statiques prérendus après vérification des sorties de compilation, utiliser de préférence un domaine personnalisé ou un dépôt `<compte>.github.io` à la racine. Un dépôt servi sous `/<nom-du-depot>/` demande d’adapter les chemins et la base du routeur. Les adresses de médias `/__l5e/assets-v1/` sont propres à Lovable : pour un hébergement extérieur, télécharger le logo fourni, le placer localement et remplacer sa référence CDN. Les trois illustrations générées sont déjà embarquées avec le code.

Ne pas publier le code source seul comme site GitHub Pages : une étape de compilation et de vérification de l’hébergement statique est requise. Cette mise en ligne extérieure n’a pas été exécutée ici.

## Technologies
TanStack Start, React, TypeScript, Tailwind CSS. Navigation au clavier, menu mobile, galerie agrandissable, métadonnées françaises par page et réduction des animations sont inclus.
