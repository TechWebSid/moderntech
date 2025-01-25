export default function ResponsiveWrapper({ children, className = '' }) {
  return (
    <div className={`w-full max-w-full overflow-x-hidden ${className}`}>
      {children}
    </div>
  );
} 