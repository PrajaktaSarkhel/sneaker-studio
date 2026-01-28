'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email === 'test@example.com' && password === 'Test123!') {
      alert('Login successful!');
      router.push('/customizer');
    } else {
      alert('Invalid credentials. Try: test@example.com / Test123!');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '440px',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        padding: '48px 40px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '8px',
            color: '#1a202c',
            letterSpacing: '-0.5px'
          }}>Welcome Back</h1>
          
          <p style={{
            color: '#718096',
            fontSize: '15px'
          }}>Sign in to access your sneaker designs</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px',
              color: '#2d3748'
            }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              style={{
                width: '100%',
                padding: '14px 16px',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                fontSize: '15px',
                outline: 'none',
                transition: 'all 0.2s',
                backgroundColor: '#f7fafc'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#667eea';
                e.target.style.backgroundColor = 'white';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.backgroundColor = '#f7fafc';
              }}
            />
          </div>
          
          <div style={{ marginBottom: '28px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px',
              color: '#2d3748'
            }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  paddingRight: '50px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.2s',
                  backgroundColor: '#f7fafc'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.backgroundColor = 'white';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.backgroundColor = '#f7fafc';
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#667eea',
                  padding: '4px 8px'
                }}
              >
                {showPassword ? '👁️ Hide' : '👁️ Show'}
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '16px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
              marginBottom: '20px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
            }}
          >
            Sign In
          </button>
        </form>
        
        <div style={{
          marginTop: '28px',
          padding: '20px',
          background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
          borderRadius: '10px',
          border: '1px solid #e2e8f0'
        }}>
          <p style={{
            fontSize: '13px',
            color: '#4a5568',
            marginBottom: '8px',
            fontWeight: '600',
            textAlign: 'center'
          }}>🔑 Test Credentials</p>
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: '14px',
              fontFamily: 'monospace',
              fontWeight: '600',
              color: '#2d3748',
              marginBottom: '4px'
            }}>test@example.com</p>
            <p style={{
              fontSize: '14px',
              fontFamily: 'monospace',
              fontWeight: '600',
              color: '#2d3748'
            }}>Test123!</p>
          </div>
        </div>

        <p style={{
          textAlign: 'center',
          fontSize: '14px',
          color: '#718096',
          marginTop: '24px'
        }}>
          Don't have an account?{' '}
          <Link href="/signup" style={{
            color: '#667eea',
            fontWeight: '600',
            textDecoration: 'none'
          }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}