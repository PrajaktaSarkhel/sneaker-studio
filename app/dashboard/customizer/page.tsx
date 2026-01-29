'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/lib/stores/auth-store';
import { useCustomizerStore } from '@/lib/stores/customizer-store';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { LogOut, Save, Palette, Type, Package, Sparkles } from 'lucide-react';

export default function CustomizerPage() {
  const router = useRouter();
  const { user, token, logout, isAuthenticated } = useAuthStore();
  const {
    selectedProduct,
    customizations,
    setSelectedProduct,
    updateCustomization,
    setText,
    resetCustomizations,
  } = useCustomizerStore();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState<'colors' | 'materials' | 'text'>('colors');
  const [activePart, setActivePart] = useState<string>('upper');
  const [textInput, setTextInput] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/customizer');
    }
  }, [isAuthenticated, router]);

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('/api/products');
      return res.json();
    },
  });

  const saveDesignMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch('/api/designs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: selectedProduct?.id,
          productName: selectedProduct?.name,
          customizations,
          tags: ['custom'],
        }),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['designs'] });
      alert('Design saved successfully!');
    },
  });

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const handleSaveDesign = () => {
    if (!selectedProduct) {
      alert('Please select a product first');
      return;
    }
    saveDesignMutation.mutate();
  };

  const handleAiSuggestion = async () => {
    if (!aiPrompt || !selectedProduct) return;
    setAiLoading(true);

    try {
      // Mock AI response - In production, integrate with Gemini/OpenAI
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Parse prompt for colors
      const colors = ['red', 'blue', 'summer', 'sporty', 'ocean'];
      const materials = ['leather', 'canvas', 'suede'];

      let suggestedColor = '#FF0000';
      let suggestedMaterial = 'leather';

      if (aiPrompt.toLowerCase().includes('blue') || aiPrompt.toLowerCase().includes('ocean')) {
        suggestedColor = '#0000FF';
      } else if (aiPrompt.toLowerCase().includes('green') || aiPrompt.toLowerCase().includes('summer')) {
        suggestedColor = '#00FF00';
      } else if (aiPrompt.toLowerCase().includes('black') || aiPrompt.toLowerCase().includes('dark')) {
        suggestedColor = '#000000';
      }

      if (aiPrompt.toLowerCase().includes('canvas')) {
        suggestedMaterial = 'canvas';
      } else if (aiPrompt.toLowerCase().includes('suede')) {
        suggestedMaterial = 'suede';
      }

      updateCustomization('upper', { color: suggestedColor, material: suggestedMaterial });
      updateCustomization('sole', { color: '#FFFFFF', material: 'rubber' });
      updateCustomization('laces', { color: suggestedColor, material: 'cotton' });

      alert('AI suggestions applied!');
    } catch (error) {
      alert('Failed to get AI suggestions');
    } finally {
      setAiLoading(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Sneaker Studio</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{user?.email}</span>
            <Button variant="outline" size="sm" onClick={() => router.push('/gallery')}>
              Gallery
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Product Selection */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Package size={20} className="mr-2" />
              Select Model
            </h2>
            <div className="space-y-2">
              {products?.map((product: any) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
                    selectedProduct?.id === product.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {product.name}
                </button>
              ))}
            </div>

            {selectedProduct && (
              <>
                <h3 className="text-lg font-semibold mt-6 mb-4">Customize Part</h3>
                <div className="space-y-2">
                  {selectedProduct.customizableParts.map((part: string) => (
                    <button
                      key={part}
                      onClick={() => setActivePart(part)}
                      className={`w-full p-2 text-left rounded-lg capitalize ${
                        activePart === part
                          ? 'bg-blue-100 text-blue-700'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {part}
                    </button>
                  ))}
                </div>
              </>
            )}
          </Card>

          {/* Preview */}
          <Card className="p-6 lg:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Preview</h2>
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
              {selectedProduct ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="relative w-full h-full"
                >
                  {/* Sneaker visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-48">
                      {/* Upper */}
                      <div
                        className="absolute top-0 left-0 w-full h-32 rounded-t-3xl transition-colors"
                        style={{
                          backgroundColor: customizations.upper?.color || '#CCCCCC',
                        }}
                      />
                      {/* Sole */}
                      <div
                        className="absolute bottom-0 left-0 w-full h-16 rounded-b-3xl transition-colors"
                        style={{
                          backgroundColor: customizations.sole?.color || '#FFFFFF',
                        }}
                      />
                      {/* Laces */}
                      <div
                        className="absolute top-8 left-1/2 -translate-x-1/2 w-2 h-20 transition-colors"
                        style={{
                          backgroundColor: customizations.laces?.color || '#000000',
                        }}
                      />
                      {/* Text */}
                      {customizations.text && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm">
                          {customizations.text}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <p className="text-gray-400">Select a product to start customizing</p>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <Button onClick={handleSaveDesign} className="w-full" disabled={!selectedProduct}>
                <Save size={16} className="mr-2" />
                Save Design
              </Button>
              <Button onClick={resetCustomizations} variant="outline" className="w-full">
                Reset
              </Button>
            </div>
          </Card>

          {/* Customization Options */}
          <Card className="p-6">
            <div className="flex gap-2 mb-4">
              <Button
                variant={activeTab === 'colors' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveTab('colors')}
              >
                <Palette size={16} className="mr-2" />
                Colors
              </Button>
              <Button
                variant={activeTab === 'materials' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveTab('materials')}
              >
                Materials
              </Button>
              <Button
                variant={activeTab === 'text' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveTab('text')}
              >
                <Type size={16} className="mr-2" />
                Text
              </Button>
            </div>

            {activeTab === 'colors' && selectedProduct && (
              <div>
                <h3 className="font-medium mb-3 capitalize">Choose color for {activePart}</h3>
                <div className="grid grid-cols-4 gap-2">
                  {selectedProduct.options.colors.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => updateCustomization(activePart, { color })}
                      className="w-full aspect-square rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'materials' && selectedProduct && (
              <div>
                <h3 className="font-medium mb-3 capitalize">Choose material for {activePart}</h3>
                <div className="space-y-2">
                  {selectedProduct.options.materials.map((material: string) => (
                    <button
                      key={material}
                      onClick={() => updateCustomization(activePart, { material })}
                      className="w-full p-3 text-left rounded-lg border-2 border-gray-200 hover:border-gray-300 capitalize"
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'text' && (
              <div>
                <h3 className="font-medium mb-3">Add custom text</h3>
                <div className="space-y-3">
                  <Input
                    placeholder="Enter text..."
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    maxLength={20}
                  />
                  <Button
                    onClick={() => {
                      setText(textInput);
                      setTextInput('');
                    }}
                    className="w-full"
                  >
                    Apply Text
                  </Button>
                </div>
              </div>
            )}

            {/* AI Suggestions */}
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-medium mb-3 flex items-center">
                <Sparkles size={16} className="mr-2" />
                AI Design Ideas
              </h3>
              <div className="space-y-3">
                <Input
                  placeholder="E.g., 'Make it summer vibes' or 'Sporty blue'"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                />
                <Button
                  onClick={handleAiSuggestion}
                  className="w-full"
                  disabled={!aiPrompt || !selectedProduct || aiLoading}
                >
                  {aiLoading ? 'Getting Ideas...' : 'Get Ideas'}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}