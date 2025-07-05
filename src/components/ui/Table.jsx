
const Table = ({ children, style }) => {
  const { currentTheme } = useContext(ThemeContext);
  const theme = themeConfigs[currentTheme];
  
  return (
    <div style={{ overflowX: 'auto', ...style }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: theme.background,
          color: theme.text
        }}
      >
        {children}
      </table>
    </div>
  );
};

const TableRow = ({ children, isHeader }) => {
  const { currentTheme } = useContext(ThemeContext);
  const theme = themeConfigs[currentTheme];
  
  return (
    <tr
      style={{
        borderBottom: `1px solid ${theme.mode === 'dark' ? '#333' : '#e0e0e0'}`,
        backgroundColor: isHeader ? `${theme.primary}10` : 'transparent'
      }}
    >
      {children}
    </tr>
  );
};

const TableCell = ({ children, isHeader, style }) => {
  const { currentTheme } = useContext(ThemeContext);
  const theme = themeConfigs[currentTheme];
  
  const Tag = isHeader ? 'th' : 'td';
  
  return (
    <Tag
      style={{
        padding: '12px 16px',
        textAlign: 'left',
        fontWeight: isHeader ? '600' : '400',
        color: theme.text,
        ...style
      }}
    >
      {children}
    </Tag>
  );
};