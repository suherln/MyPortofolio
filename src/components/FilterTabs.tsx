interface FilterOption<T extends string> {
  id: T;
  label: string;
}

interface FilterTabsProps<T extends string> {
  label: string;
  options: FilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
  align?: 'center' | 'start';
}

export function FilterTabs<T extends string>({ label, options, value, onChange, align = 'center' }: FilterTabsProps<T>) {
  return (
    <div role="group" aria-label={label} className={`flex flex-wrap gap-2 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-pressed={option.id === value}
          onClick={() => onChange(option.id)}
          className="chip"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
