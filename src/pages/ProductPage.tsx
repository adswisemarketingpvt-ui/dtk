// src/pages/ProductPage.jsx
import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ArrowRight, Heart, Truck, Shield, ChevronLeft } from 'lucide-react';
import { products } from '../products/shoes'; // adjust path as needed

// Per-product demo images mapping (key: product id)
// Place real files in public/images/ or use external URLs.
// Example: product with id: 1 will use the array under key 1.
const DEMO_IMAGES_MAP = {
  1: [
    'https://www.dtkfootwear.com/public/Black%20Shoes/1%20(2).png', // your uploaded image for product 1
    'https://www.dtkfootwear.com/public/Black%20Shoes/1%20(3).png',
    'https://www.dtkfootwear.com/public/Black%20Shoes/1%20(4).png',
    'https://www.dtkfootwear.com/public/Black%20Shoes/1%20(5).png'
  ],
  2: [
    'https://www.dtkfootwear.com/public/BROWN%20SHOES%201/Artboard%201%20(1).png',
    'https://www.dtkfootwear.com/public/BROWN%20SHOES%201/Artboard%202%20(1).png',
    'https://www.dtkfootwear.com/public/BROWN%20SHOES%201/Artboard%205.png',
    'https://www.dtkfootwear.com/public/BROWN%20SHOES%201/Artboard%206.png'
  ],
  3: [
    'https://www.dtkfootwear.com/public/Brown%20Shoess/Artboard%202%20(1).png',
    'https://www.dtkfootwear.com/public/Brown%20Shoess/Artboard%201%20(1).png',
    'https://www.dtkfootwear.com/public/Brown%20Shoess/Artboard%205.png',
    'https://www.dtkfootwear.com/public/Brown%20Shoess/Artboard%206.png'
  ],
  // add mappings for more ids as needed
};

// default demo images (used when no mapping found for a product id)
// const DEFAULT_DEMO_IMAGES = [
//   '/images/demo_default_1.png',
//   '/images/demo_default_2.png',
//   '/images/demo_default_3.png',
// ];

const ProductPage = () => {
  const { id } = useParams(); // expects route like /product/1
  const navigate = useNavigate();

  // find product by id; fallback to first product if not found
  const product = useMemo(() => {
    if (!id) return products[0] ?? null;
    const pid = Number(id);
    const found = products.find((p) => p.id === pid);
    return found ?? products[0] ?? null;
  }, [id]);

  // Local UI state
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <p className="text-lg">Product not found.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 rounded-full bg-amber-900 text-white"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  // safe defaults for sizes/colors/description/images
  const sizes = Array.isArray(product.sizes) && product.sizes.length ? product.sizes : ['6', '7', '8', '9', '10'];
  const colors = Array.isArray(product.colors) && product.colors.length ? product.colors : ['Black'];
  const description = product.description ?? 'No description available for this product.';
  const productImages = Array.isArray(product.images) && product.images.length ? product.images : (product.image ? [product.image] : []);

  // select demo images based on product id
  const demoForThisProduct = DEMO_IMAGES_MAP[product.id] ?? DEMO_IMAGES_MAP[String(product.id)] ?? DEFAULT_DEMO_IMAGES;

  // combine product images with demo images (product images first)
  const combinedImages = useMemo(() => {
    const MAX_TOTAL_IMAGES = 10; // cap total images
    const base = [...productImages];

    for (const d of demoForThisProduct) {
      if (base.length >= MAX_TOTAL_IMAGES) break;
      if (!base.includes(d)) base.push(d);
    }

    // ensure at least one image exists
    if (base.length === 0) base.push('https://via.placeholder.com/800x600?text=No+Image');

    return base;
  }, [productImages, demoForThisProduct]);

  const canOrder = selectedSize && selectedColor && quantity > 0;

  const handleOrder = () => {
    const message = `👞 *Order Inquiry: ${product.name}*

*Selected Options:*
• Size: ${selectedSize}
• Color: ${selectedColor}
• Quantity: ${quantity}

💵 *Price:* $${product.price} each

Please confirm availability and next steps. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+9765758830?text=${encodedMessage}`; // adjust number if needed
    window.open(whatsappUrl, '_blank');
  };

  // rating clamp
  const rating = Math.max(0, Math.min(5, Number(product.rating ?? 0)));

  // Inline thumbnails logic: exclude current main image index
  const maxInlineThumbs = 6;
  const inlineThumbIndices = (() => {
    const indices = [];
    for (let i = 0; i < combinedImages.length && indices.length < maxInlineThumbs; i++) {
      if (i === mainImageIndex) continue;
      indices.push(i);
    }
    return indices;
  })();

  return (
    <div className="bg-gradient-to-b from-amber-50 via-amber-50 to-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumbs / Back */}
        <div className="flex items-center text-sm text-gray-600 mb-6 space-x-3">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full hover:bg-amber-100 transition"
            aria-label="Go back"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
          <span className="text-gray-400">/</span>
          <span className="hover:underline cursor-pointer" onClick={() => navigate('/')}>Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-amber-900 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Gallery */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              {/* vertical thumbnails (desktop) */}
              <div className="hidden md:flex flex-col gap-3">
                {combinedImages.map((src, idx) => (
                  <button
                    key={`side-${idx}`}
                    onClick={() => setMainImageIndex(idx)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border transition transform ${idx === mainImageIndex ? 'scale-105 border-amber-300 shadow' : 'border-gray-100 hover:scale-105'}`}
                    aria-label={`Show image ${idx + 1}`}
                  >
                    <img src={src} alt={`img-${idx}`} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/200x200?text=No+Image'; }} />
                  </button>
                ))}
              </div>

              {/* main image */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative w-full">
                  <div className="rounded-2xl overflow-hidden shadow-lg relative">
                    <img
                      src={combinedImages[mainImageIndex]}
                      alt={product.name}
                      className="w-full h-[520px] md:h-[520px] object-cover transform transition duration-500 hover:scale-105"
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/800x600?text=No+Image'; }}
                    />

                    {/* INLINE THUMBNAILS: bottom-left overlay (uses combinedImages) */}
                    <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6">
                      {/* <div className="flex flex-wrap gap-3 items-end bg-white/0">
                        {inlineThumbIndices.map((thumbIdx, i) => (
                          <button
                            key={`inline-${thumbIdx}-${i}`}
                            onClick={() => setMainImageIndex(thumbIdx)}
                            className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 shadow transition transform hover:scale-110 ${thumbIdx === mainImageIndex ? 'ring-2 ring-amber-200' : 'border-white/80'}`}
                            aria-label={`Preview image ${thumbIdx + 1}`}
                            title={`Open image ${thumbIdx + 1}`}
                          >
                            <img
                              src={combinedImages[thumbIdx]}
                              alt={`thumb-${thumbIdx}`}
                              className="w-full h-full object-cover"
                              onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/80x80?text=No'; }}
                            />
                          </button>
                        ))}

                       
                        {combinedImages.length > inlineThumbIndices.length + 1 && (
                          <button
                            onClick={() => {
                              const next = (inlineThumbIndices.length ? (inlineThumbIndices[inlineThumbIndices.length - 1] + 1) % combinedImages.length : 0);
                              setMainImageIndex(next === mainImageIndex ? (next + 1) % combinedImages.length : next);
                            }}
                            className="h-16 md:h-20 px-3 rounded-full bg-white/90 text-sm font-medium shadow border border-amber-100 transition hover:scale-105"
                          >
                            +{combinedImages.length - inlineThumbIndices.length - 1}
                          </button>
                        )}
                      </div> */}
                    </div>

                    {/* floating badge */}
                    {/* <div className="absolute top-4 right-4">
                      <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur shadow-md animate-float">
                        <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L14.09 8.26L20.9 8.27L15.45 11.74L17.54 18L12 13.77L6.46 18L8.55 11.74L3.1 8.27L9.91 8.26L12 2Z" />
                        </svg>
                        <span className="text-sm font-medium text-amber-900">Premium Pick</span>
                      </div>
                    </div> */}
                  </div>

                  {/* small mobile thumbnails under image */}
                  <div className="flex md:hidden gap-3 mt-4 overflow-x-auto w-full px-2">
                    {combinedImages.map((src, idx) => (
                      <button key={`thumb-m-${idx}`} onClick={() => setMainImageIndex(idx)} className={`w-20 h-20 rounded-xl overflow-hidden border ${idx === mainImageIndex ? 'border-amber-300' : 'border-gray-100'}`}>
                        <img src={src} alt={`mobile-${idx}`} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/200x200?text=No+Image'; }} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Highlights / short specs */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-amber-900" />
                    <div>
                      <div className="text-sm font-medium text-amber-900">Free Shipping</div>
                      <div className="text-xs text-gray-500">Over $50 / 3-5 days</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-amber-900" />
                    <div>
                      <div className="text-sm font-medium text-amber-900">Secure Payment</div>
                      <div className="text-xs text-gray-500">Trusted checkout</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-900" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c-5.421 0-10-4.579-10-10S6.579 2 12 2s10 4.579 10 10-4.579 10-10 10Z" /></svg>
                    <div>
                      <div className="text-sm font-medium text-amber-900">Quality Leather</div>
                      <div className="text-xs text-gray-500">Handcrafted finish</div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6 w-full">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">Product Details</h3>
                  <p className="text-gray-700 leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Sticky purchase card */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-amber-900">{product.name}</h2>
                    <p className="text-sm text-gray-500 mt-1">{product.category ?? 'Uncategorized'}</p>
                  </div>
                  <button
                    onClick={() => setWishlisted(!wishlisted)}
                    aria-pressed={wishlisted}
                    className={`p-3 rounded-full border transition ${wishlisted ? 'bg-amber-100 border-amber-200' : 'bg-white border-gray-100 hover:bg-amber-50'}`}
                    title="Add to wishlist"
                  >
                    <Heart className={`w-5 h-5 ${wishlisted ? 'text-amber-600' : 'text-gray-400'}`} />
                  </button>
                </div>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="text-3xl font-bold text-amber-900">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-gray-400 line-through text-lg">${product.originalPrice}</span>
                  )}
                  {product.discount && (
                    <span className="ml-auto text-sm font-semibold text-amber-700 bg-amber-100 px-2 py-1 rounded-full">{product.discount}% OFF</span>
                  )}
                </div>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">{product.reviewsCount ?? '—'} reviews</div>
                </div>

                {/* Options: Size */}
                <div className="mt-6">
                  <label className="block font-medium mb-2 text-amber-900">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-full border font-medium mb-2 ${
                          selectedSize === size
                            ? 'bg-amber-900 text-white border-amber-900'
                            : 'bg-white text-amber-900 border-amber-300 hover:bg-amber-100'
                        } transition-colors`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Options: Color */}
                <div className="mt-4">
                  <label className="block font-medium mb-2 text-amber-900">Color</label>
                  <div className="flex flex-wrap gap-2 items-center">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-full border font-medium mb-2 ${
                          selectedColor === color
                            ? 'bg-amber-900 text-white border-amber-900'
                            : 'bg-white text-amber-900 border-amber-300 hover:bg-amber-100'
                        } transition-colors flex items-center gap-2`}
                      >
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color.toLowerCase() === 'black' ? '#111' : color }} />
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mt-4">
                  <label className="block font-medium mb-2 text-amber-900">Quantity</label>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                    className="w-28 px-4 py-2 rounded-full border border-amber-300 focus:border-amber-900 outline-none"
                  />
                </div>

                {/* Order Button */}
                <div className="mt-6">
                  <button
                    disabled={!canOrder}
                    onClick={handleOrder}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-full font-bold text-lg transition-colors ${
                      canOrder ? 'bg-amber-900 text-white hover:bg-amber-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <span className="mr-2">💬</span>
                    Confirm Order via WhatsApp
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>

                {/* Micro trust & return policy */}
                <div className="mt-5 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-amber-900" />
                    <span>30 days easy returns</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Truck className="w-4 h-4 text-amber-900" />
                    <span>Ships within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* More details / reviews card */}
              <div className="mt-5 bg-white rounded-2xl shadow p-5">
                <h4 className="text-lg font-medium text-amber-900">Specifications</h4>
                <ul className="mt-3 text-gray-700 text-sm space-y-2">
                  <li><strong>Material:</strong> {product.material ?? 'Leather'}</li>
                  <li><strong>Sole:</strong> {product.sole ?? 'Rubber'}</li>
                  <li><strong>Origin:</strong> {product.origin ?? 'India'}</li>
                  <li><strong>Warranty:</strong> {product.warranty ?? '6 months'}</li>
                </ul>
              </div>

              <div className="mt-5 bg-white rounded-2xl shadow p-5">
                <h4 className="text-lg font-medium text-amber-900">Customer Reviews</h4>
                <div className="mt-3 text-sm text-gray-600">
                  {/* Placeholder: you can wire this to actual reviews */}
                  <p className="italic">No reviews yet — be the first to review this product!</p>
                  <button className="mt-3 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-amber-50 text-amber-900 border border-amber-100">
                    <Star className="w-4 h-4" /> Write a Review
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Floating CSS for small animation + optional tweaks */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ProductPage;
