import React from 'react';

export function BrochureViewer({ image, title, onBack, onFinish }) {
  return (
    <div style={pageStyle}>
      <div style={topBarStyle}>
        <button onClick={onBack} style={backButtonStyle}>
          ← Zurück
        </button>

        <h2 style={titleStyle}>{title || 'Anzeigen'}</h2>
      </div>

      <p style={hintStyle}>
        Lesen Sie die Anzeigen genau. Sie können das Bild mit zwei Fingern vergrößern.
      </p>

      <div style={imageWrapperStyle}>
        <img src={image} alt={title || 'Anzeigen'} style={imageStyle} />
      </div>

      <button onClick={onFinish} style={finishButtonStyle}>
        ✅ Ich habe gelesen – zu den Fragen
      </button>
    </div>
  );
}

export default BrochureViewer;

const pageStyle = {
  minHeight: '100vh',
  backgroundColor: '#0f172a',
  padding: '14px',
  paddingBottom: '90px',
  boxSizing: 'border-box',
  fontFamily: 'system-ui, sans-serif',
  color: '#ffffff'
};

const topBarStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '10px'
};

const backButtonStyle = {
  border: 'none',
  backgroundColor: '#ffffff',
  color: '#0f172a',
  padding: '10px 12px',
  borderRadius: '12px',
  fontWeight: '800',
  cursor: 'pointer'
};

const titleStyle = {
  margin: 0,
  fontSize: '18px'
};

const hintStyle = {
  color: '#cbd5e1',
  lineHeight: 1.6,
  fontSize: '14px'
};

const imageWrapperStyle = {
  width: '100%',
  overflowX: 'auto',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
  backgroundColor: '#020617',
  borderRadius: '18px',
  border: '1px solid #334155',
  padding: '8px',
  boxSizing: 'border-box'
};

const imageStyle = {
  width: '100%',
  maxWidth: '1000px',
  minWidth: '360px',
  display: 'block',
  margin: '0 auto',
  borderRadius: '14px'
};

const finishButtonStyle = {
  position: 'fixed',
  left: '14px',
  right: '14px',
  bottom: '16px',
  border: 'none',
  backgroundColor: '#16a34a',
  color: '#ffffff',
  padding: '14px',
  borderRadius: '16px',
  fontWeight: '900',
  fontSize: '15px',
  cursor: 'pointer',
  boxShadow: '0 12px 30px rgba(0,0,0,0.35)'
};