import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { images } from '@/lib/site-content';
const photos = [{ src: images.studio, title: 'La voix, au premier plan', alt: 'Microphone de studio et console sonore — illustration générée' }, { src: images.culture, title: 'La culture du son', alt: 'Casque posé sur des disques vinyles — illustration générée' }, { src: images.scene, title: 'L’énergie de la scène', alt: 'Microphone sur une scène éclairée — illustration générée' }];
export function Gallery() {
 const [active, setActive] = useState<number | null>(null);
 const closeRef = useRef<HTMLButtonElement>(null);
 const triggerRef = useRef<HTMLElement | null>(null);
 useEffect(() => {
  if (active === null) return;
  closeRef.current?.focus();
  const previous = document.body.style.overflow; document.body.style.overflow = 'hidden';
  const keydown = (e: KeyboardEvent) => { if(e.key === 'Escape') setActive(null); if(e.key === 'ArrowRight') setActive(v=>v===null?null:(v+1)%photos.length); if(e.key==='ArrowLeft') setActive(v=>v===null?null:(v+photos.length-1)%photos.length); if(e.key==='Tab') { const controls = Array.from(document.querySelectorAll<HTMLButtonElement>('.lightbox button')); const current = controls.indexOf(document.activeElement as HTMLButtonElement); e.preventDefault(); controls[(current + (e.shiftKey ? controls.length - 1 : 1)) % controls.length]?.focus(); } };
  document.addEventListener('keydown',keydown); return ()=> { document.body.style.overflow=previous; document.removeEventListener('keydown',keydown); triggerRef.current?.focus(); };
 },[active]);
 const selected = active === null ? undefined : photos[active];
 return <><div className="instagram-grid">{photos.map((p,i)=><figure className="gallery-item" key={p.src}><Button variant="ghost" className="gallery-trigger" aria-label={`Agrandir : ${p.title}`} onClick={e=>{triggerRef.current=e.currentTarget;setActive(i);}}><img src={p.src} width={900} height={650} loading="lazy" alt={p.alt} /></Button><figcaption className="flex items-center justify-between gap-4"><p>{p.title}</p><Maximize2 size={13} className="mt-3" aria-hidden="true" /></figcaption></figure>)}</div>{active !== null && selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visionneuse des illustrations"><Button variant="inverse" size="icon" className="lightbox-close" ref={closeRef} onClick={()=>setActive(null)} aria-label="Fermer la visionneuse"><X /></Button><Button variant="inverse" size="icon" className="lightbox-prev" onClick={()=>setActive((active+photos.length-1)%photos.length)} aria-label="Photographie précédente"><ChevronLeft /></Button><img src={selected.src} alt={selected.alt} /><Button variant="inverse" size="icon" className="lightbox-next" onClick={()=>setActive((active+1)%photos.length)} aria-label="Photographie suivante"><ChevronRight /></Button><p className="lightbox-caption">{active+1} / {photos.length} · {selected.title} · Illustration générée</p></div>}</>;
}