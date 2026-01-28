'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface SavedDesign {
  id: string;
  product: string;
  customizations: {
    upper: { color: string; material: string };
    sole: { color: string; material: string };
    laces: { color: string; material: string };
    text: string;
  };
  date: string;
}

export default function GalleryPage() {
  const router = useRouter();
  const [designs, setDesigns] = useState<SavedDesign[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  useEffect(() => {
    // Load designs from localStorage
    const saved = localStorage.getItem('sneaker-designs');
    if (saved) {
      setDesigns(JSON.parse(saved));
    }
  }, []);

  const deleteDesign = (id: string) => {
    if (confirm('Are you sure you want to delete this design?')) {
      const updated = designs.filter(d => d.id !== id);
      setDesigns(updated);
      localStorage.setItem('sneaker-designs', JSON.stringify(updated));
    }
  };

  const filteredDesigns = designs.filter(design => {
    const matchesSearch = design.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         design.customizations.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || design.product === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const products = ['all', ...Array.from(new Set(designs.map(d => d.product)))];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 20px',
        background: 'white',
        padding: '20px 30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        <div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1a202c',
            margin: '0 0 5px 0'
          }}>📁 My Design Gallery</h1>
          <p style={{
            fontSize: '14px',
            color: '#718096',
            margin: 0
          }}>{designs.length} saved design{designs.length !== 1 ? 's' : ''}</p>
        </div>
        
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={() => router.push('/customizer')}
            style={{
              padding: '10px 20px',
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#5568d3'}
            onMouseOut={(e) => e.currentTarget.style.background = '#667eea'}
          >
            ← Back to Customizer
          </button>
          <button
            onClick={() => router.push('/login')}
            style={{
              padding: '10px 20px',
              background: '#e53e3e',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#c53030'}
            onMouseOut={(e) => e.currentTarget.style.background = '#e53e3e'}
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 20px',
        background: 'white',
        padding: '20px 30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          {/* Search */}
          <div style={{ flex: '1', minWidth: '250px' }}>
            <input
              type="text"
              placeholder="🔍 Search designs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                fontSize: '15px',
                outline: 'none',
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

          {/* Filters */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {products.map(product => (
              <button
                key={product}
                onClick={() => setSelectedFilter(product)}
                style={{
                  padding: '10px 16px',
                  background: selectedFilter === product ? '#667eea' : '#f7fafc',
                  color: selectedFilter === product ? 'white' : '#2d3748',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  textTransform: 'capitalize'
                }}
              >
                {product}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Designs Grid */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {filteredDesigns.length === 0 ? (
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '60px 40px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎨</div>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#1a202c',
              marginBottom: '10px'
            }}>No designs yet</h2>
            <p style={{
              fontSize: '16px',
              color: '#718096',
              marginBottom: '30px'
            }}>
              {searchQuery ? 'No designs match your search' : 'Start creating your first custom sneaker!'}
            </p>
            <button
              onClick={() => router.push('/customizer')}
              style={{
                padding: '14px 30px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Create Your First Design
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {filteredDesigns.map((design, index) => (
              <div
                key={design.id}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  animation: `fadeInUp 0.5s ease ${index * 0.1}s both`
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
              >
                {/* Preview */}
                <div style={{
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                  padding: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '220px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'relative',
                    width: '200px',
                    height: '140px'
                  }}>
                    {/* Upper */}
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '60%',
                      background: design.customizations.upper.color,
                      borderTopLeftRadius: '60px',
                      borderTopRightRadius: '40px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    }} />
                    
                    {/* Sole */}
                    <div style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      width: '100%',
                      height: '40%',
                      background: design.customizations.sole.color,
                      borderBottomLeftRadius: '40px',
                      borderBottomRightRadius: '60px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }} />
                    
                    {/* Laces */}
                    <div style={{
                      position: 'absolute',
                      top: '25%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '3px',
                      height: '35px',
                      background: design.customizations.laces.color,
                      borderRadius: '2px'
                    }} />
                    
                    {/* Text */}
                    {design.customizations.text && (
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: '700',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                        whiteSpace: 'nowrap'
                      }}>
                        {design.customizations.text}
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#1a202c',
                    marginBottom: '8px'
                  }}>
                    {design.product}
                  </h3>
                  
                  <p style={{
                    fontSize: '13px',
                    color: '#718096',
                    marginBottom: '12px'
                  }}>
                    📅 {design.date}
                  </p>

                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '16px',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      fontSize: '11px',
                      padding: '4px 8px',
                      background: '#f7fafc',
                      color: '#2d3748',
                      borderRadius: '6px',
                      fontWeight: '600',
                      textTransform: 'capitalize'
                    }}>
                      {design.customizations.upper.material}
                    </span>
                    <span style={{
                      fontSize: '11px',
                      padding: '4px 8px',
                      background: '#f7fafc',
                      color: '#2d3748',
                      borderRadius: '6px',
                      fontWeight: '600',
                      textTransform: 'capitalize'
                    }}>
                      {design.customizations.sole.material}
                    </span>
                    {design.customizations.text && (
                      <span style={{
                        fontSize: '11px',
                        padding: '4px 8px',
                        background: '#667eea',
                        color: 'white',
                        borderRadius: '6px',
                        fontWeight: '600'
                      }}>
                        Custom Text
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push('/customizer');
                      }}
                      style={{
                        flex: 1,
                        padding: '10px',
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.background = '#5568d3'}
                      onMouseOut={(e) => e.currentTarget.style.background = '#667eea'}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteDesign(design.id);
                      }}
                      style={{
                        flex: 1,
                        padding: '10px',
                        background: '#e53e3e',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.background = '#c53030'}
                      onMouseOut={(e) => e.currentTarget.style.background = '#e53e3e'}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}