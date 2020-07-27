import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const footer = document.getElementById('footer');
  const footerDiv = document.createElement('div');

  useEffect(() => {
    footer.appendChild(footerDiv);
    return () => footer.removeChild(footerDiv);
  }, [footerDiv, footer]);

  return createPortal(children, footerDiv);
};

export default Portal;
