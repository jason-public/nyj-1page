import React, { useState } from 'react';
import { SHORTCUT_ITEMS } from '../data/shortcuts';
import { Search, Copy, Check, Star, Filter, Keyboard } from 'lucide-react';

export const ShortcutCheatsheet: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: '전체 단축키' },
    { id: 'style', label: '모양복사/스타일' },
    { id: 'delete', label: '고속 지우기' },
    { id: 'letter', label: '자간 (Tracking)' },
    { id: 'scale', label: '장평 (Scale)' },
    { id: 'size', label: '글자 크기' },
    { id: 'paragraph', label: '줄간격/들여쓰기' },
    { id: 'table', label: '표 편집/계산' },
    { id: 'color', label: '글자서식/색상' },
    { id: 'page', label: '쪽/용지' },
    { id: 'general', label: '기본 편집' }
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
          마우스 없이 키보드만으로 보고서의 자간, 장평, 줄간격, 표 속성을 1초 만에 최적화하는 핵심 단축키 모음입니다.
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
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs rounded-lg border transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-50 border-blue-200 text-blue-700 font-semibold'
                  : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Shortcuts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredShortcuts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs hover:border-gray-300 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-[11px] font-medium px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md">
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
                    <kbd className="kbd-key text-xs">{k}</kbd>
                    {kIdx < item.keys.length - 1 && (
                      <span className="text-xs text-gray-400 font-bold">+</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              {item.mnemonicNote ? (
                <div className="text-[11px] font-medium text-blue-700">
                  💡 {item.mnemonicNote}
                </div>
              ) : (
                <div />
              )}
              <button
                onClick={() => handleCopy(item.keys, item.id)}
                className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
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
        ))}
      </div>
    </div>
  );
};
