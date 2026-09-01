import React, { useState } from 'react';
import { SHORTCUT_ITEMS } from '../data/shortcuts';
import { Search, Copy, Check, Star, Keyboard } from 'lucide-react';

interface CategoryStyle {
  cardBorder: string;
  cardHover: string;
  cardBg: string;
  cardTopBar: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  filterActive: string;
  filterBorder: string;
  mnemonicText: string;
  keyBorder: string;
  keyBg: string;
  dotColor: string;
}

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  style: {
    cardBorder: 'border-indigo-200',
    cardHover: 'hover:border-indigo-400 hover:shadow-indigo-100/50',
    cardBg: 'bg-gradient-to-b from-indigo-50/40 via-white to-white',
    cardTopBar: 'bg-indigo-500',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-700',
    badgeBorder: 'border-indigo-200',
    filterActive: 'bg-indigo-50 border-indigo-300 text-indigo-700 font-semibold shadow-xs',
    filterBorder: 'border-indigo-200',
    mnemonicText: 'text-indigo-700',
    keyBorder: 'border-indigo-200',
    keyBg: 'bg-indigo-50/30',
    dotColor: 'bg-indigo-500'
  },
  delete: {
    cardBorder: 'border-rose-200',
    cardHover: 'hover:border-rose-400 hover:shadow-rose-100/50',
    cardBg: 'bg-gradient-to-b from-rose-50/40 via-white to-white',
    cardTopBar: 'bg-rose-500',
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-700',
    badgeBorder: 'border-rose-200',
    filterActive: 'bg-rose-50 border-rose-300 text-rose-700 font-semibold shadow-xs',
    filterBorder: 'border-rose-200',
    mnemonicText: 'text-rose-700',
    keyBorder: 'border-rose-200',
    keyBg: 'bg-rose-50/30',
    dotColor: 'bg-rose-500'
  },
  letter: {
    cardBorder: 'border-sky-200',
    cardHover: 'hover:border-sky-400 hover:shadow-sky-100/50',
    cardBg: 'bg-gradient-to-b from-sky-50/40 via-white to-white',
    cardTopBar: 'bg-sky-500',
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-700',
    badgeBorder: 'border-sky-200',
    filterActive: 'bg-sky-50 border-sky-300 text-sky-700 font-semibold shadow-xs',
    filterBorder: 'border-sky-200',
    mnemonicText: 'text-sky-700',
    keyBorder: 'border-sky-200',
    keyBg: 'bg-sky-50/30',
    dotColor: 'bg-sky-500'
  },
  scale: {
    cardBorder: 'border-amber-200',
    cardHover: 'hover:border-amber-400 hover:shadow-amber-100/50',
    cardBg: 'bg-gradient-to-b from-amber-50/40 via-white to-white',
    cardTopBar: 'bg-amber-500',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    badgeBorder: 'border-amber-200',
    filterActive: 'bg-amber-50 border-amber-300 text-amber-800 font-semibold shadow-xs',
    filterBorder: 'border-amber-200',
    mnemonicText: 'text-amber-800',
    keyBorder: 'border-amber-200',
    keyBg: 'bg-amber-50/30',
    dotColor: 'bg-amber-500'
  },
  size: {
    cardBorder: 'border-teal-200',
    cardHover: 'hover:border-teal-400 hover:shadow-teal-100/50',
    cardBg: 'bg-gradient-to-b from-teal-50/40 via-white to-white',
    cardTopBar: 'bg-teal-500',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-700',
    badgeBorder: 'border-teal-200',
    filterActive: 'bg-teal-50 border-teal-300 text-teal-700 font-semibold shadow-xs',
    filterBorder: 'border-teal-200',
    mnemonicText: 'text-teal-700',
    keyBorder: 'border-teal-200',
    keyBg: 'bg-teal-50/30',
    dotColor: 'bg-teal-500'
  },
  paragraph: {
    cardBorder: 'border-blue-200',
    cardHover: 'hover:border-blue-400 hover:shadow-blue-100/50',
    cardBg: 'bg-gradient-to-b from-blue-50/40 via-white to-white',
    cardTopBar: 'bg-blue-500',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
    badgeBorder: 'border-blue-200',
    filterActive: 'bg-blue-50 border-blue-300 text-blue-700 font-semibold shadow-xs',
    filterBorder: 'border-blue-200',
    mnemonicText: 'text-blue-700',
    keyBorder: 'border-blue-200',
    keyBg: 'bg-blue-50/30',
    dotColor: 'bg-blue-500'
  },
  table: {
    cardBorder: 'border-purple-200',
    cardHover: 'hover:border-purple-400 hover:shadow-purple-100/50',
    cardBg: 'bg-gradient-to-b from-purple-50/40 via-white to-white',
    cardTopBar: 'bg-purple-500',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-700',
    badgeBorder: 'border-purple-200',
    filterActive: 'bg-purple-50 border-purple-300 text-purple-700 font-semibold shadow-xs',
    filterBorder: 'border-purple-200',
    mnemonicText: 'text-purple-700',
    keyBorder: 'border-purple-200',
    keyBg: 'bg-purple-50/30',
    dotColor: 'bg-purple-500'
  },
  color: {
    cardBorder: 'border-pink-200',
    cardHover: 'hover:border-pink-400 hover:shadow-pink-100/50',
    cardBg: 'bg-gradient-to-b from-pink-50/40 via-white to-white',
    cardTopBar: 'bg-pink-500',
    badgeBg: 'bg-pink-50',
    badgeText: 'text-pink-700',
    badgeBorder: 'border-pink-200',
    filterActive: 'bg-pink-50 border-pink-300 text-pink-700 font-semibold shadow-xs',
    filterBorder: 'border-pink-200',
    mnemonicText: 'text-pink-700',
    keyBorder: 'border-pink-200',
    keyBg: 'bg-pink-50/30',
    dotColor: 'bg-pink-500'
  },
  page: {
    cardBorder: 'border-emerald-200',
    cardHover: 'hover:border-emerald-400 hover:shadow-emerald-100/50',
    cardBg: 'bg-gradient-to-b from-emerald-50/40 via-white to-white',
    cardTopBar: 'bg-emerald-500',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
    badgeBorder: 'border-emerald-200',
    filterActive: 'bg-emerald-50 border-emerald-300 text-emerald-700 font-semibold shadow-xs',
    filterBorder: 'border-emerald-200',
    mnemonicText: 'text-emerald-700',
    keyBorder: 'border-emerald-200',
    keyBg: 'bg-emerald-50/30',
    dotColor: 'bg-emerald-500'
  },
  general: {
    cardBorder: 'border-slate-200',
    cardHover: 'hover:border-slate-400 hover:shadow-slate-100/50',
    cardBg: 'bg-gradient-to-b from-slate-50/60 via-white to-white',
    cardTopBar: 'bg-slate-500',
    badgeBg: 'bg-slate-100',
    badgeText: 'text-slate-700',
    badgeBorder: 'border-slate-200',
    filterActive: 'bg-slate-100 border-slate-300 text-slate-800 font-semibold shadow-xs',
    filterBorder: 'border-slate-200',
    mnemonicText: 'text-slate-700',
    keyBorder: 'border-slate-200',
    keyBg: 'bg-slate-50/30',
    dotColor: 'bg-slate-500'
  }
};

const DEFAULT_STYLE: CategoryStyle = {
  cardBorder: 'border-gray-200',
  cardHover: 'hover:border-gray-300 hover:shadow-xs',
  cardBg: 'bg-white',
  cardTopBar: 'bg-gray-400',
  badgeBg: 'bg-gray-100',
  badgeText: 'text-gray-700',
  badgeBorder: 'border-gray-200',
  filterActive: 'bg-blue-50 border-blue-300 text-blue-700 font-semibold shadow-xs',
  filterBorder: 'border-gray-200',
  mnemonicText: 'text-blue-700',
  keyBorder: 'border-gray-200',
  keyBg: 'bg-gray-50',
  dotColor: 'bg-blue-500'
};

export const ShortcutCheatsheet: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: '전체 단축키', dot: 'bg-blue-600' },
    { id: 'style', label: '모양복사/스타일', dot: 'bg-indigo-500' },
    { id: 'delete', label: '고속 지우기', dot: 'bg-rose-500' },
    { id: 'letter', label: '자간 (Tracking)', dot: 'bg-sky-500' },
    { id: 'scale', label: '장평 (Scale)', dot: 'bg-amber-500' },
    { id: 'size', label: '글자 크기', dot: 'bg-teal-500' },
    { id: 'paragraph', label: '줄간격/들여쓰기', dot: 'bg-blue-500' },
    { id: 'table', label: '표 편집/계산', dot: 'bg-purple-500' },
    { id: 'color', label: '글자서식/색상', dot: 'bg-pink-500' },
    { id: 'page', label: '쪽/용지', dot: 'bg-emerald-500' },
    { id: 'general', label: '기본 편집', dot: 'bg-slate-500' }
  ];

  const filteredShortcuts = SHORTCUT_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.keys.join('+').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.mnemonicNote && item.mnemonicNote.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (keys: string[], id: string) => {
    const text = keys.join(' + ');
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-8 shadow-xs mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-100 rounded-md text-xs font-semibold text-blue-700 mb-2">
          <Keyboard className="w-3.5 h-3.5 text-blue-600" />
          <span>아래한글 실무 단축키 마스터북</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-2 break-keep">
          1페이지 압축 & 실무 필수 단축키 치트시트
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 max-w-2xl leading-relaxed break-keep">
          마우스 없이 키보드만으로 보고서의 자간, 장평, 줄간격, 표 속성을 1초 만에 최적화하는 핵심 단축키 모음입니다. 각 카테고리별 고유 색상으로 더 직관적으로 찾아볼 수 있습니다.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-xs mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="단축키, 기능, 암기 비법 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-600 bg-gray-50 focus:bg-white transition-all text-gray-800"
            />
          </div>

          {/* Quick Stats */}
          <div className="text-xs text-gray-500 flex items-center gap-2">
            <span>검색된 단축키: <strong className="text-gray-900 font-semibold">{filteredShortcuts.length}</strong>개</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const style = CATEGORY_STYLES[cat.id] || DEFAULT_STYLE;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? style.filterActive
                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${cat.dot}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Shortcuts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredShortcuts.map((item) => {
          const style = CATEGORY_STYLES[item.category] || DEFAULT_STYLE;
          return (
            <div
              key={item.id}
              className={`${style.cardBg} rounded-xl border ${style.cardBorder} ${style.cardHover} overflow-hidden shadow-2xs transition-all duration-150 flex flex-col justify-between`}
            >
              {/* Top Accent Strip */}
              <div className={`h-1 w-full ${style.cardTopBar}`} />

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${style.badgeBg} ${style.badgeText} ${style.badgeBorder}`}>
                    {item.categoryLabel}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {Array.from({ length: item.efficiencyRating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2.5">{item.name}</h3>

                {/* Key badges */}
                <div className="flex items-center flex-wrap gap-1 mb-3">
                  {item.keys.map((k, kIdx) => (
                    <React.Fragment key={kIdx}>
                      <kbd className="kbd-key text-xs font-semibold">{k}</kbd>
                      {kIdx < item.keys.length - 1 && (
                        <span className="text-xs text-gray-400 font-bold">+</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-3 flex-1">
                  {item.description}
                </p>

                {/* Footer of Card */}
                <div className="pt-3 border-t border-gray-100/80 flex items-center justify-between mt-auto">
                  {item.mnemonicNote ? (
                    <div className={`text-[11px] font-medium ${style.mnemonicText} flex items-center gap-1`}>
                      <span>💡</span>
                      <span className="break-keep">{item.mnemonicNote}</span>
                    </div>
                  ) : (
                    <div />
                  )}
                  <button
                    onClick={() => handleCopy(item.keys, item.id)}
                    className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-black/5 rounded-md transition-colors cursor-pointer shrink-0 ml-2"
                    title="단축키 텍스트 복사"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

