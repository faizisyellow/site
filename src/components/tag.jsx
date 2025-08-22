// Color variants enum
const TagColors = {
  BLUE: 'blue',
  GREEN: 'green',
  PURPLE: 'purple',
  RED: 'red',
  YELLOW: 'yellow',
  GRAY: 'gray',
  INDIGO: 'indigo',
  ORANGE :'orange'
};

// Color mapping for background and border classes
const colorClasses = {
  [TagColors.BLUE]: 'bg-brand-blue border-brand-blue',
  [TagColors.GREEN]: 'bg-secondary border-secondary',
  [TagColors.RED]: 'bg-red-500 border-red-500',
  [TagColors.YELLOW]: 'bg-yellow-500 border-yellow-500',
  [TagColors.GRAY]: 'bg-gray-500 border-gray-500',
  [TagColors.INDIGO]: 'bg-indigo-500 border-indigo-500',
  [TagColors.PURPLE]: 'bg-brand-purple border-brand-purple',
  [TagColors.ORANGE]:'bg-brand-orange border-brand-orange'
};

// ✅ Size mapping
const TagSizes = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
};

const sizeClasses = {
  [TagSizes.SM]: 'px-2 py-1 text-xs',
  [TagSizes.MD]: 'px-4 py-2 text-sm', // default 
  [TagSizes.LG]: 'px-5 py-3 text-base',
};

const Tag = ({
  children,
  color = TagColors.GRAY,
  size = TagSizes.MD, 
  className = '',
}) => {
  const colorClass = colorClasses[color] || colorClasses[TagColors.GRAY];
  const sizeClass = sizeClasses[size] || sizeClasses[TagSizes.MD];

  return (
    <span
      className={`
        inline-block 
        border-2 
        rounded-none 
        text-white 
        font-medium 
        w-fit
        ${colorClass}
        ${sizeClass}
        ${className}
      `.trim()}
    >
      {children}
    </span>
  );
};

export { Tag, TagColors, TagSizes };
