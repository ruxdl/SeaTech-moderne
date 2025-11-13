'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  url: string;
  description: string;
  category: string;
}

const searchData: SearchResult[] = [
  // Pages principales
  { title: "L'École SeaTech", url: "/pages/ecole", description: "Présentation de l'école d'ingénieur SeaTech", category: "École" },
  { title: "Devenir Ingénieur", url: "/pages/formation", description: "Formations et parcours d'ingénieur", category: "Formation" },
  { title: "Formation", url: "/pages/formation", description: "Parcours de formation en ingénierie", category: "Formation" },
  { title: "International", url: "/pages/international", description: "Programmes et échanges internationaux", category: "International" },
  { title: "Entreprises", url: "/pages/entreprises", description: "Partenariats et relations entreprises", category: "Entreprises" },
  { title: "Recherche", url: "/pages/recherche", description: "Activités de recherche et laboratoires", category: "Recherche" },
  { title: "Actualités", url: "/pages/actualites", description: "Dernières nouvelles de SeaTech", category: "Actualités" },
  { title: "Séminaires", url: "/pages/seminaires", description: "Conférences et séminaires", category: "Événements" },
  
  // Pages spéciales - Diplômes
  { title: "Diplôme Général SeaTech", url: "/pages/special/diplome-general", description: "Diplôme d'ingénieur généraliste avec 6 parcours", category: "Formation" },
    { title: "Diplôme Matériaux", url: "/pages/special/specialite-materiaux", description: "Spécialité Matériaux", category: "Formation" },
  { title: "Diplôme Systèmes Numériques", url: "/pages/special/specialite-systemes-numeriques", description: "Spécialité Systèmes Numériques", category: "Formation" },
  
  // Pages spéciales - Autres
  { title: "Devenir Ingénieur", url: "/pages/special/devenir-ingenieur", description: "Comment intégrer SeaTech", category: "Formation" },
  { title: "Partenaires Entreprises", url: "/pages/special/partenaires-entreprises", description: "Nos partenaires industriels", category: "Entreprises" },
  { title: "Vie Étudiante", url: "/pages/special/vie-etudiante", description: "Campus et vie associative", category: "Vie Étudiante" },
  { title: "Dépôt Stage/Emploi", url: "/pages/special/depot-stage-emploi", description: "Offres de stages et d'emplois", category: "Carrière" },
  
  // Pages utilitaires
  { title: "Flux RSS", url: "/pages/utils/flux-rss", description: "Flux RSS des actualités", category: "Outils" },
  { title: "Nous Contacter", url: "/pages/utils/nous-contacter", description: "Coordonnées et formulaire de contact", category: "Contact" },
  { title: "Plan d'Accès", url: "/pages/utils/plan-acces", description: "Comment venir à SeaTech", category: "Pratique" },
  { title: "Plan du Site", url: "/pages/utils/plan-du-site", description: "Navigation complète du site", category: "Navigation" },
  
  // Mots-clés par secteur d'activité
  { title: "Aéronautique", url: "/pages/special/specialite-materiaux", description: "Spécialité Matériaux - Secteur aéronautique", category: "Secteurs" },
  { title: "Automobile", url: "/pages/special/specialite-materiaux", description: "Spécialité Matériaux - Secteur automobile", category: "Secteurs" },
  { title: "Énergie", url: "/pages/special/specialite-materiaux", description: "Spécialité Matériaux - Secteur énergie", category: "Secteurs" },
  { title: "Biomédical", url: "/pages/special/specialite-materiaux", description: "Spécialité Matériaux - Secteur biomédical", category: "Secteurs" },
  { title: "Informatique", url: "/pages/special/specialite-systemes-numeriques", description: "Spécialité Systèmes Numériques - Informatique", category: "Secteurs" },
  { title: "Électronique", url: "/pages/special/specialite-systemes-numeriques", description: "Spécialité Systèmes Numériques - Électronique", category: "Secteurs" },
  { title: "Télécommunications", url: "/pages/special/specialite-systemes-numeriques", description: "Spécialité Systèmes Numériques - Télécommunications", category: "Secteurs" },
  
  // Mots-clés techniques - Matériaux
  { title: "Matériaux", url: "/pages/special/specialite-materiaux", description: "Sciences des matériaux et applications industrielles", category: "Technique" },
  { title: "Sciences des matériaux", url: "/pages/special/specialite-materiaux", description: "Formation en sciences des matériaux", category: "Technique" },
  { title: "Caractérisation", url: "/pages/special/specialite-materiaux", description: "Caractérisation des matériaux", category: "Technique" },
  { title: "Apprentissage", url: "/pages/special/specialite-materiaux", description: "Formation par apprentissage", category: "Formation" },
  
  // Mots-clés techniques - Systèmes Numériques
  { title: "Systèmes Numériques", url: "/pages/special/specialite-systemes-numeriques", description: "Spécialité Systèmes Numériques par apprentissage", category: "Technique" },
  { title: "Numérique", url: "/pages/special/specialite-systemes-numeriques", description: "Technologies numériques", category: "Technique" },
  { title: "Programmation", url: "/pages/special/specialite-systemes-numeriques", description: "Développement et programmation", category: "Technique" },
  { title: "Réseaux", url: "/pages/special/specialite-systemes-numeriques", description: "Réseaux et télécommunications", category: "Technique" },
  
  // Mots-clés généraux
  { title: "Ingénieur", url: "/pages/formation", description: "Formation d'ingénieur à SeaTech", category: "Formation" },
  { title: "Toulon", url: "/pages/ecole", description: "École d'ingénieur à Toulon", category: "École" },
  { title: "Université", url: "/pages/ecole", description: "Université de Toulon", category: "École" },
  { title: "Stage", url: "/pages/special/depot-stage-emploi", description: "Offres de stages", category: "Carrière" },
  { title: "Emploi", url: "/pages/special/depot-stage-emploi", description: "Offres d'emploi", category: "Carrière" },
  { title: "Contact", url: "/pages/utils/nous-contacter", description: "Nous contacter", category: "Contact" },
  { title: "CTI", url: "/pages/formation", description: "Diplômes certifiés par la CTI", category: "Certification" },
  { title: "Diplôme", url: "/pages/formation", description: "Trois diplômes d'ingénieur", category: "Formation" },
  { title: "Parcours", url: "/pages/special/diplome-general", description: "Six parcours de spécialisation", category: "Formation" },
];

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

export default function SearchBar({ className = "", placeholder = "Rechercher sur le site..." }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.length > 1) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8); // Limiter à 8 résultats
      
      setResults(filtered);
      setIsOpen(filtered.length > 0);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          window.location.href = results[selectedIndex].url;
        } else if (results.length > 0) {
          window.location.href = results[0].url;
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      const target = selectedIndex >= 0 ? results[selectedIndex] : results[0];
      window.location.href = target.url;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'École': 'text-blue-600',
      'Formation': 'text-green-600',
      'International': 'text-purple-600',
      'Entreprises': 'text-orange-600',
      'Recherche': 'text-red-600',
      'Actualités': 'text-indigo-600',
      'Événements': 'text-pink-600',
      'Vie Étudiante': 'text-cyan-600',
      'Carrière': 'text-yellow-600',
      'Contact': 'text-gray-600',
      'Outils': 'text-teal-600',
      'Pratique': 'text-lime-600',
      'Navigation': 'text-slate-600',
      'Secteurs': 'text-emerald-600',
      'Technique': 'text-violet-600',
      'Certification': 'text-amber-600'
    };
    return colors[category] || 'text-gray-600';
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (results.length > 0) setIsOpen(true);
          }}
          className="w-full px-4 py-2 pl-10 pr-4 text-sm sm:text-base text-gray-700 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </form>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
          <div className="py-2">
            {results.map((result, index) => (
              <Link
                key={`${result.url}-${index}`}
                href={result.url}
                onClick={() => {
                  setIsOpen(false);
                  setQuery('');
                }}
                className={`flex flex-col px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer ${
                  index === selectedIndex ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900 text-sm">{result.title}</h4>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full bg-gray-100 ${getCategoryColor(result.category)}`}>
                    {result.category}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">{result.description}</p>
              </Link>
            ))}
          </div>
          
          {query.length > 1 && (
            <div className="border-t border-gray-100 px-4 py-2 bg-gray-50 text-xs text-gray-500">
              {results.length} résultat{results.length > 1 ? 's' : ''} pour "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
