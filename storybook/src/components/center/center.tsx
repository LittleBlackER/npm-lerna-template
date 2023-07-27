import React from 'react';
import './center.css';
function Center({ children }: { children: React.ReactNode }) {
  return <div className="center">{children}</div>;
}

export default Center;
