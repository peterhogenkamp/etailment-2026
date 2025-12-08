'use client';

interface TagChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function TagChip({ label, selected = false, onClick }: TagChipProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-1 rounded-full text-xs font-medium transition-all
        ${selected 
          ? 'bg-red-600 text-white shadow-md' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }
      `}
    >
      {label}
    </button>
  );
}
