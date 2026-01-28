'use client';

export default function CustomizerPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: '700',
          marginBottom: '20px',
          color: '#1a202c'
        }}>Sneaker Customizer</h1>
        
        <p style={{
          fontSize: '18px',
          color: '#4a5568',
          marginBottom: '30px'
        }}>🎨 Welcome! Your customizer is loading...</p>
        
        <div style={{
          padding: '40px',
          background: '#f7fafc',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '16px',
            color: '#2d3748',
            fontWeight: '600'
          }}>✅ Login Successful!</p>
          <p style={{
            fontSize: '14px',
            color: '#718096',
            marginTop: '8px'
          }}>The customizer page is now working. We'll add features next!</p>
        </div>
      </div>
    </div>
  );
}