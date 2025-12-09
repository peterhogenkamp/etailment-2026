'use client';

interface FilterDrawerProps {
  isOpen: boolean;
  onToggle: () => void;
  companies: string[];
  sources: string[];
  topics: string[];
  countries: string[];
  activeFilters: {
    companies: string[];
    sources: string[];
    topics: string[];
    countries: string[];
  };
  onChange: (next: {
    companies: string[];
    sources: string[];
    topics: string[];
    countries: string[];
  }) => void;
}

export default function FilterDrawer({
  isOpen,
  onToggle,
  companies,
  sources,
  topics,
  countries,
  activeFilters,
  onChange
}: FilterDrawerProps) {
  const toggleFilter = (
    category: keyof typeof activeFilters,
    value: string
  ) => {
    const current = activeFilters[category];
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    
    onChange({
      ...activeFilters,
      [category]: next,
    });
  };

  const clearFilters = () => {
    onChange({
      companies: [],
      sources: [],
      topics: [],
      countries: [],
    });
  };

  const hasActiveFilters = 
    activeFilters.companies.length > 0 ||
    activeFilters.sources.length > 0 ||
    activeFilters.topics.length > 0 ||
    activeFilters.countries.length > 0;

  return (
    <>
      {/* Mobile: Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Drawer */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-full lg:h-auto
          w-48 bg-white border-r border-slate-200 z-20
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
        `}
      >
        <div className="p-2">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
              Filter
            </h2>
            <button
              onClick={onToggle}
              className="lg:hidden text-slate-400 hover:text-slate-600 text-xs"
            >
              ✕
            </button>
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="mb-2 text-[10px] text-red-600 hover:text-red-700 underline"
            >
              Zurücksetzen
            </button>
          )}

          {/* Companies */}
          <div className="mb-2">
            <h3 className="text-[10px] font-semibold text-slate-700 mb-0.5">Unternehmen</h3>
            <div className="space-y-0 max-h-[153px] overflow-y-auto">
              {companies.map((company) => (
                <label
                  key={company}
                  className="flex items-center gap-1 text-[10px] text-slate-700 cursor-pointer hover:bg-slate-50 py-0.5 rounded"
                >
                  <input
                    type="checkbox"
                    checked={activeFilters.companies.includes(company)}
                    onChange={() => toggleFilter('companies', company)}
                    className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-3 h-3"
                  />
                  <span className="truncate">{company}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sources */}
          <div className="mb-2">
            <h3 className="text-[10px] font-semibold text-slate-700 mb-0.5">Quellen</h3>
            <div className="space-y-0 max-h-[153px] overflow-y-auto">
              {sources.map((source) => (
                <label
                  key={source}
                  className="flex items-center gap-1 text-[10px] text-slate-700 cursor-pointer hover:bg-slate-50 py-0.5 rounded"
                >
                  <input
                    type="checkbox"
                    checked={activeFilters.sources.includes(source)}
                    onChange={() => toggleFilter('sources', source)}
                    className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-3 h-3"
                  />
                  <span className="truncate">{source}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Topics */}
          <div className="mb-2">
            <h3 className="text-[10px] font-semibold text-slate-700 mb-0.5">Themen</h3>
            <div className="space-y-0">
              {topics.map((topic) => (
                <label
                  key={topic}
                  className="flex items-center gap-1 text-[10px] text-slate-700 cursor-pointer hover:bg-slate-50 py-0.5 rounded"
                >
                  <input
                    type="checkbox"
                    checked={activeFilters.topics.includes(topic)}
                    onChange={() => toggleFilter('topics', topic)}
                    className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-3 h-3"
                  />
                  <span>{topic}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Countries */}
          <div className="mb-2">
            <h3 className="text-[10px] font-semibold text-slate-700 mb-0.5">Länder</h3>
            <div className="space-y-0.5">
              {/* DACH Group */}
              <div>
                <label className="flex items-center gap-1 text-[10px] text-slate-700 cursor-pointer hover:bg-slate-50 py-0.5 rounded font-medium">
                  <input
                    type="checkbox"
                    checked={['DE', 'AT', 'CH'].every(c => activeFilters.countries.includes(c))}
                    onChange={(e) => {
                      const dachCountries = ['DE', 'AT', 'CH'];
                      if (e.target.checked) {
                        // Add all DACH countries
                        const newCountries = [...new Set([...activeFilters.countries, ...dachCountries])];
                        onChange({
                          ...activeFilters,
                          countries: newCountries,
                        });
                      } else {
                        // Remove all DACH countries
                        const newCountries = activeFilters.countries.filter(c => !dachCountries.includes(c));
                        onChange({
                          ...activeFilters,
                          countries: newCountries,
                        });
                      }
                    }}
                    className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-3 h-3"
                  />
                  <span>DACH</span>
                </label>
                <div className="ml-4 mt-0 space-y-0">
                  {['DE', 'AT', 'CH'].map((country) => (
                    <label
                      key={country}
                      className="flex items-center gap-1 text-[10px] text-slate-600 cursor-pointer hover:bg-slate-50 py-0.5 rounded"
                    >
                      <input
                        type="checkbox"
                        checked={activeFilters.countries.includes(country)}
                        onChange={() => toggleFilter('countries', country)}
                        className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-3 h-3"
                      />
                      <span>{country}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* USA */}
              <label className="flex items-center gap-1 text-[10px] text-slate-700 cursor-pointer hover:bg-slate-50 py-0.5 rounded font-medium">
                <input
                  type="checkbox"
                  checked={activeFilters.countries.includes('USA')}
                  onChange={() => toggleFilter('countries', 'USA')}
                  className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-3 h-3"
                />
                <span>USA</span>
              </label>

              {/* China */}
              <label className="flex items-center gap-1 text-[10px] text-slate-700 cursor-pointer hover:bg-slate-50 py-0.5 rounded font-medium">
                <input
                  type="checkbox"
                  checked={activeFilters.countries.includes('China')}
                  onChange={() => toggleFilter('countries', 'China')}
                  className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-3 h-3"
                />
                <span>China</span>
              </label>

              {/* UK */}
              <label className="flex items-center gap-1 text-[10px] text-slate-700 cursor-pointer hover:bg-slate-50 py-0.5 rounded font-medium">
                <input
                  type="checkbox"
                  checked={activeFilters.countries.includes('UK')}
                  onChange={() => toggleFilter('countries', 'UK')}
                  className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-3 h-3"
                />
                <span>UK</span>
              </label>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
