'use client';

interface CompanyIconsProps {
  companies: string[];
}

const getCompanyInitials = (company: string): string => {
  // Handle special cases
  if (company === 'eBay') return 'EB';
  if (company.includes(' ')) {
    return company.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
  }
  return company.substring(0, 2).toUpperCase();
};

export default function CompanyIcons({ companies }: CompanyIconsProps) {
  if (!companies || companies.length === 0) return null;

  return (
    <div className="flex items-center gap-0 -space-x-1.5">
      {companies.slice(0, 3).map((company, idx) => (
        <div
          key={company}
          className="w-5 h-5 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[9px] font-semibold text-slate-700 flex-shrink-0 shadow-sm"
          title={company}
          style={{ zIndex: 10 - idx }}
        >
          {getCompanyInitials(company)}
        </div>
      ))}
      {companies.length > 3 && (
        <div className="w-5 h-5 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[8px] text-slate-600 font-semibold flex-shrink-0 shadow-sm">
          +{companies.length - 3}
        </div>
      )}
    </div>
  );
}

