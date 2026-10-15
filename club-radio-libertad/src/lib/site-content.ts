import studio from '@/assets/radio-studio.jpg';
import culture from '@/assets/radio-culture.jpg';
import scene from '@/assets/radio-scene.jpg';

export const social = {
  instagram: 'https://www.instagram.com/clubradio_ihec_libertad/',
  event: 'https://www.instagram.com/fn_clubradiolibertad/',
  team: 'https://www.instagram.com/reel/Ddro8e9Nq5V/',
  source: 'https://ihec.rnu.tn/fr/article/537/club-radio-libertad',
};
export const navigation = [
  { to: '/', label: 'Accueil' }, { to: '/le-club', label: 'Le club' },
  { to: '/nos-activites', label: 'Nos activités' }, { to: '/notre-equipe', label: 'Notre équipe' },
  { to: '/evenement-phare', label: 'Événement phare' }, { to: '/galerie', label: 'Galerie' },
  { to: '/contact', label: 'Contact' },
] as const;
export const images = { studio, culture, scene };
export const activities = [
  { title: 'Radio & émissions', description: 'Des voix étudiantes, des idées qui circulent. La radio comme espace d’expression et de partage sur le campus.', image: studio, alt: 'Microphone et console de radio — illustration', category: 'Prendre la parole' },
  { title: 'Interviews & conversations', description: 'L’art de poser des questions, d’écouter et de faire se rencontrer les points de vue.', image: studio, alt: 'Microphone de studio — illustration', category: 'Ouvrir le dialogue' },
  { title: 'Sport & culture', description: 'La passion du terrain, les découvertes musicales et la création : des sujets qui nous rassemblent.', image: culture, alt: 'Casque et disques vinyles — illustration', category: 'Partager nos passions' },
  { title: 'Économie & politique', description: 'Faire une place à l’actualité économique et politique dans les conversations étudiantes.', image: culture, alt: 'Matériel d’écoute radiophonique — illustration', category: 'Croiser les regards' },
  { title: 'Création & médias', description: 'De l’idée à sa mise en voix : un univers de narration, de son et d’expression médiatique.', image: studio, alt: 'Console de production sonore — illustration', category: 'Faire vivre les idées' },
  { title: 'Événements & campus', description: 'Sortir du studio, se retrouver et donner une résonance collective à la vie étudiante.', image: scene, alt: 'Scène et microphone éclairés — illustration', category: 'Vibrer ensemble' },
];
export function pageHead(title: string, description: string) {
  const fullTitle = `${title} — Club Radio Libertad · IHEC Carthage`;
  return { meta: [{ title: fullTitle }, { name: 'description', content: description }, { property: 'og:title', content: fullTitle }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}