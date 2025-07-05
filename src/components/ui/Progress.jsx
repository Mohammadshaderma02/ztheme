const Progress = ({ value = 0, variant = 'linear', size = 30 }) => {
  const { currentTheme } = useContext(ThemeContext);
  const theme = themeConfigs[currentTheme];
  
  if (variant === 'circular') {
    const radius = size / 2 - 4;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (value / 100) * circumference;
    
    return (
      <div style={{ display: 'inline-block' }}>
        <svg width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="4"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={theme.primary}
            strokeWidth="4"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            style={{ transition: 'stroke-dashoffset 0.3s ease' }}
          />
        </svg>
      </div>
    );
  }
  
  return (
    <div
      style={{
        width: '100%',
        height: '4px',
        backgroundColor: '#e0e0e0',
        borderRadius: '2px',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: '100%',
          backgroundColor: theme.primary,
          transition: 'width 0.3s ease'
        }}
      />
    </div>
  );
};