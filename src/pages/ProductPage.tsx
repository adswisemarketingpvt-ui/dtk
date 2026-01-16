// src/pages/ProductPage.tsx
import React, { useState, useMemo, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Star,
  ArrowRight,
  Heart,
  Truck,
  Shield,
  ChevronLeft,
  ChevronRight,
  Ruler,
  CheckCircle,
} from "lucide-react";
import { products } from "../products/shoes"; // adjust path as needed

// === DEMO IMAGES MAP (kept from your original file) ===
const DEMO_IMAGES_MAP: Record<number | string, string[]> = {
  1: [
    "https://yourdomain.com/murti/1/ganesh-front-white.jpg",
    "https://yourdomain.com/murti/1/ganesh-side-white.jpg",
    "https://yourdomain.com/murti/1/ganesh-back-white.jpg",
    "https://yourdomain.com/murti/1/ganesh-closeup-white.jpg",
  ],
  2: [
    "https://yourdomain.com/murti/2/krishna-front-white.jpg",
    "https://yourdomain.com/murti/2/krishna-side-white.jpg",
    "https://yourdomain.com/murti/2/krishna-back-white.jpg",
    "https://yourdomain.com/murti/2/krishna-closeup-white.jpg",
  ],
  3: [
    "https://yourdomain.com/murti/3/shiv-front-white.jpg",
    "https://yourdomain.com/murti/3/shiv-side-white.jpg",
    "https://yourdomain.com/murti/3/shiv-back-white.jpg",
    "https://yourdomain.com/murti/3/shiv-closeup-white.jpg",
  ],
  4: [
    "https://yourdomain.com/murti/4/durga-front-white.jpg",
    "https://yourdomain.com/murti/4/durga-side-white.jpg",
    "https://yourdomain.com/murti/4/durga-back-white.jpg",
    "https://yourdomain.com/murti/4/durga-closeup-white.jpg",
  ],
  5: [
    "https://yourdomain.com/murti/5/hanuman-front-white.jpg",
    "https://yourdomain.com/murti/5/hanuman-side-white.jpg",
    "https://yourdomain.com/murti/5/hanuman-back-white.jpg",
    "https://yourdomain.com/murti/5/hanuman-closeup-white.jpg",
  ],
  6: [
    "https://yourdomain.com/murti/6/lakshmi-front-white.jpg",
    "https://yourdomain.com/murti/6/lakshmi-side-white.jpg",
    "https://yourdomain.com/murti/6/lakshmi-back-white.jpg",
    "https://yourdomain.com/murti/6/lakshmi-closeup-white.jpg",
  ],
  7: [
    "https://yourdomain.com/murti/7/saraswati-front-white.jpg",
    "https://yourdomain.com/murti/7/saraswati-side-white.jpg",
    "https://yourdomain.com/murti/7/saraswati-back-white.jpg",
    "https://yourdomain.com/murti/7/saraswati-closeup-white.jpg",
  ],
  8: [
    "https://yourdomain.com/murti/8/ram-front-white.jpg",
    "https://yourdomain.com/murti/8/ram-side-white.jpg",
    "https://yourdomain.com/murti/8/ram-back-white.jpg",
    "https://yourdomain.com/murti/8/ram-closeup-white.jpg",
  ],
  9: [
    "https://yourdomain.com/murti/9/krishna-flute-front-white.jpg",
    "https://yourdomain.com/murti/9/krishna-flute-side-white.jpg",
    "https://yourdomain.com/murti/9/krishna-flute-back-white.jpg",
    "https://yourdomain.com/murti/9/krishna-flute-closeup-white.jpg",
  ],
  10: [
    "https://yourdomain.com/murti/10/shiv-parvati-front-white.jpg",
    "https://yourdomain.com/murti/10/shiv-parvati-side-white.jpg",
    "https://yourdomain.com/murti/10/shiv-parvati-back-white.jpg",
    "https://yourdomain.com/murti/10/shiv-parvati-closeup-white.jpg",
  ],
  11: [
    "https://yourdomain.com/murti/11/ganesh-premium-front-white.jpg",
    "https://yourdomain.com/murti/11/ganesh-premium-side-white.jpg",
    "https://yourdomain.com/murti/11/ganesh-premium-back-white.jpg",
    "https://yourdomain.com/murti/11/ganesh-premium-closeup-white.jpg",
  ],
  12: [
    "https://yourdomain.com/murti/12/buddha-front-white.jpg",
    "https://yourdomain.com/murti/12/buddha-side-white.jpg",
    "https://yourdomain.com/murti/12/buddha-back-white.jpg",
    "https://yourdomain.com/murti/12/buddha-closeup-white.jpg",
  ],
  13: [
    "https://yourdomain.com/murti/13/vithoba-front-white.jpg",
    "https://yourdomain.com/murti/13/vithoba-side-white.jpg",
    "https://yourdomain.com/murti/13/vithoba-back-white.jpg",
    "https://yourdomain.com/murti/13/vithoba-closeup-white.jpg",
  ],
  14: [
    "https://yourdomain.com/murti/14/sai-baba-front-white.jpg",
    "https://yourdomain.com/murti/14/sai-baba-side-white.jpg",
    "https://yourdomain.com/murti/14/sai-baba-back-white.jpg",
    "https://yourdomain.com/murti/14/sai-baba-closeup-white.jpg",
  ],
  15: [
    "https://yourdomain.com/murti/15/ganesh-eco-front-white.jpg",
    "https://yourdomain.com/murti/15/ganesh-eco-side-white.jpg",
    "https://yourdomain.com/murti/15/ganesh-eco-back-white.jpg",
    "https://yourdomain.com/murti/15/ganesh-eco-closeup-white.jpg",
  ],
  16: [
    "https://yourdomain.com/murti/16/shiv-dhyan-front-white.jpg",
    "https://yourdomain.com/murti/16/shiv-dhyan-side-white.jpg",
    "https://yourdomain.com/murti/16/shiv-dhyan-back-white.jpg",
    "https://yourdomain.com/murti/16/shiv-dhyan-closeup-white.jpg",
  ],
  17: [
    "https://yourdomain.com/murti/17/dattatreya-front-white.jpg",
    "https://yourdomain.com/murti/17/dattatreya-side-white.jpg",
    "https://yourdomain.com/murti/17/dattatreya-back-white.jpg",
    "https://yourdomain.com/murti/17/dattatreya-closeup-white.jpg",
  ],
  18: [
    "https://yourdomain.com/murti/18/navdurga-front-white.jpg",
    "https://yourdomain.com/murti/18/navdurga-side-white.jpg",
    "https://yourdomain.com/murti/18/navdurga-back-white.jpg",
    "https://yourdomain.com/murti/18/navdurga-closeup-white.jpg",
  ],
};

const DEFAULT_DEMO_IMAGES = [
  "https://via.placeholder.com/800x600?text=Product+Image+1",
  "https://via.placeholder.com/800x600?text=Product+Image+2",
  "https://via.placeholder.com/800x600?text=Product+Image+3",
];

const ProductPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();

  const product = useMemo(() => {
    if (!id) return products[0] ?? null;
    const pid = Number(id);
    const found = products.find((p) => p.id === pid);
    return found ?? products[0] ?? null;
  }, [id]);

  // sizing calculator state used for the sizing UI
  const [footLength, setFootLength] = useState<number | "">("");
  const [computedSize, setComputedSize] = useState<number | null>(null);
  const [note, setNote] = useState<string>("");

  // compute suggested size using formula: (C + 1.5) * 1.5
  useEffect(() => {
    if (footLength === "" || Number(footLength) <= 0) {
      setComputedSize(null);
      setNote("");
      return;
    }
    const C = Number(footLength);
    const withAllowance = C + 1.5;
    const sizeValue = withAllowance * 1.5;
    setComputedSize(Math.round(sizeValue));
    if (C >= 25) {
      setNote(
        "Note: If your foot width is larger (wider feet), consider taking one size larger than suggested."
      );
    } else {
      setNote("Note: If your foot feels wide or you are between sizes, consider sizing up for comfort.");
    }
  }, [footLength]);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);

  // Zoom state
  const [isLensVisible, setIsLensVisible] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const lensSize = 180; // px
  const zoomScale = 2.6; // magnification

  // Fullscreen modal for click/tap zoom
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPan, setModalPan] = useState({ x: 0, y: 0 }); // values 0..1 fraction of image

  // refs
  const mainImageContainerRef = useRef<HTMLDivElement | null>(null);
  const mobileThumbsRef = useRef<HTMLDivElement | null>(null);

  // reset on product change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setMainImageIndex(0);
    setSelectedSize("");
    setSelectedColor("");
    setQuantity(1);
    setIsLensVisible(false);
    setIsModalOpen(false);
    setModalPan({ x: 0.5, y: 0.5 });
  }, [product?.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-background">
        <div className="bg-card-background p-8 rounded shadow-md text-center border border-border-divider">
          <p className="text-lg text-primary-body">Product not found.</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 rounded bg-primary-button text-primary-heading border border-button-hover"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const sizes =
    Array.isArray(product.sizes) && product.sizes.length
      ? product.sizes
      : ["6", "7", "8", "9", "10"];
  const colors =
    Array.isArray(product.colors) && product.colors.length
      ? product.colors
      : ["Black"];
  const description = product.description ?? "No description available for this product.";
  const productImages =
    Array.isArray(product.images) && product.images.length ? product.images : product.image ? [product.image] : [];

  const demoForThisProduct = DEMO_IMAGES_MAP[product.id] ?? DEMO_IMAGES_MAP[String(product.id)] ?? DEFAULT_DEMO_IMAGES;

  const combinedImages = useMemo(() => {
    const MAX_TOTAL_IMAGES = 12;
    const base = [...productImages];
    for (const d of demoForThisProduct) {
      if (base.length >= MAX_TOTAL_IMAGES) break;
      if (!base.includes(d)) base.push(d);
    }
    if (base.length === 0) base.push("https://via.placeholder.com/800x600?text=No+Image");
    return base;
  }, [productImages, demoForThisProduct]);

  const canOrder = selectedSize && selectedColor && quantity > 0;

  // ----------------------------
  // WhatsApp / ordering utilities
  // ----------------------------
  const BUSINESS_NUMBER = "+919921517752";

  const normalizePhone = (raw: string) => {
    return raw.replace(/\D/g, "");
  };

  const isMobileDevice = () =>
    /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(navigator.userAgent);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleOrder = async () => {
    if (!product) return;

    const productPageUrl = window.location.href;
    const mainImage = combinedImages[mainImageIndex] ?? "";

    const message = [
      "New Order Inquiry",
      `Product ID: ${product.id ?? "—"}`,
      `Product: ${product.name}`,
      `Price (each): ₹${product.price}`,
      selectedSize ? `Size: ${selectedSize}` : "Size: —",
      selectedColor ? `Color: ${selectedColor}` : "Color: —",
      `Quantity: ${quantity}`,
      "",
      `Product page: ${productPageUrl}`,
      `Image: ${mainImage}`,
      "",
      "Please confirm availability and next steps.",
    ]
      .filter(Boolean)
      .join("\n");

    const phone = normalizePhone(BUSINESS_NUMBER);
    const encoded = encodeURIComponent(message);

    try {
      if (isMobileDevice()) {
        const waUrl = `https://wa.me/${phone}?text=${encoded}`;
        openInNewTab(waUrl);
        return;
      }

      const webUrl = `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;
      const webWindow = window.open(webUrl, "_blank", "noopener,noreferrer");

      const protoWithPhone = `whatsapp://send?phone=${phone}&text=${encoded}`;
      const protoTextOnly = `whatsapp://send?text=${encoded}`;

      const tryOpenProtocol = (url: string) => {
        return new Promise<void>((resolve) => {
          try {
            const iframe = document.createElement("iframe");
            iframe.style.display = "none";
            document.body.appendChild(iframe);
            iframe.src = url;
            setTimeout(() => {
              if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
              resolve();
            }, 700);
          } catch (e) {
            resolve();
          }
        });
      };

      await tryOpenProtocol(protoWithPhone);
      await new Promise((r) => setTimeout(r, 200));
      await tryOpenProtocol(protoTextOnly);

      if (!webWindow) {
        openInNewTab(webUrl);
      }

      return;
    } catch (err) {
      try {
        await navigator.clipboard.writeText(message);
        alert(
          "Could not open WhatsApp automatically. The order message has been copied to your clipboard. Please paste it into WhatsApp Web or your app."
        );
      } catch (copyErr) {
        alert(
          "Could not open WhatsApp automatically and could not copy to clipboard. Please copy the following message manually:\n\n" +
            message
        );
      }
    }
  };

  // Rating
  const rating = Math.max(0, Math.min(5, Number(product.rating ?? 0)));

  // inline thumbs for overlay (desktop)
  const maxInlineThumbs = 6;
  
  const scrollMobileThumbs = (dir = "next") => {
    const el = mobileThumbsRef.current as any;
    if (!el) return;
    const amount = el.clientWidth || window.innerWidth * 0.8;
    const offset = dir === "next" ? amount : -amount;
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  // ----------------------------
  // ZOOM / LENS handlers
  // ----------------------------
  const showLens = () => setIsLensVisible(true);
  const hideLens = () => setIsLensVisible(false);

  const onMoveLens = (clientX: number, clientY: number) => {
    const container = mainImageContainerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();

    let x = clientX - rect.left;
    let y = clientY - rect.top;
    x = Math.max(0, Math.min(rect.width, x));
    y = Math.max(0, Math.min(rect.height, y));

    setLensPos({ x, y });
  };

  const onMouseMove = (e: React.MouseEvent) => {
    showLens();
    onMoveLens(e.clientX, e.clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches && e.touches.length > 0) {
      const t = e.touches[0];
      onMoveLens(t.clientX, t.clientY);
    }
  };

  const openModalAtPoint = (clientX?: number, clientY?: number) => {
    const container = mainImageContainerRef.current;
    if (container && clientX != null && clientY != null) {
      const rect = container.getBoundingClientRect();
      let px = (clientX - rect.left) / rect.width;
      let py = (clientY - rect.top) / rect.height;
      px = Math.max(0, Math.min(1, px));
      py = Math.max(0, Math.min(1, py));
      setModalPan({ x: px, y: py });
    } else {
      setModalPan({ x: 0.5, y: 0.5 });
    }
    setIsModalOpen(true);
  };

  const onModalMove = (clientX: number, clientY: number) => {
    const modal = document.getElementById("product-zoom-modal");
    if (!modal) return;
    const rect = modal.getBoundingClientRect();
    let px = (clientX - rect.left) / rect.width;
    let py = (clientY - rect.top) / rect.height;
    px = Math.max(0, Math.min(1, px));
    py = Math.max(0, Math.min(1, py));
    setModalPan({ x: px, y: py });
  };

  const onImgError = (e: any, sizeFallback?: string) => {
    e.target.onerror = null;
    e.target.src = sizeFallback ?? "https://via.placeholder.com/800x600?text=No+Image";
  };

  const lensStyle = (() => {
    const container = mainImageContainerRef.current;
    if (!container) return {};
    const rect = container.getBoundingClientRect();
    const imgSrc = combinedImages[mainImageIndex];
    const bgWidth = rect.width * zoomScale;
    const bgHeight = rect.height * zoomScale;
    const xPercent = (lensPos.x / rect.width) * 100;
    const yPercent = (lensPos.y / rect.height) * 100;

    return {
      width: `${lensSize}px`,
      height: `${lensSize}px`,
      left: `${lensPos.x - lensSize / 2}px`,
      top: `${lensPos.y - lensSize / 2}px`,
      backgroundImage: `url("${imgSrc}")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: `${bgWidth}px ${bgHeight}px`,
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      borderRadius: "50%",
      boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
      border: "2px solid rgba(255,255,255,0.9)",
      transform: "translateZ(0)",
      position: "absolute" as const,
      pointerEvents: "none" as const,
      zIndex: 40,
    } as React.CSSProperties;
  })();

  const sidebarImage = "/mnt/data/e928c3b8-7ac7-4a43-b762-26ca44e073c8.jpg"; 

  return (
    <div className="bg-background min-h-screen py-6 md:py-12">
      <div className="max-w-[1500px] mx-auto px-4 md:px-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center text-xs md:text-sm text-secondary-text mb-4 space-x-1">
          <button onClick={() => navigate(-1)} className="hover:text-accent flex items-center">
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          <span>/</span>
          <span className="hover:text-accent hover:underline cursor-pointer" onClick={() => navigate("/")}>
            Home
          </span>
          <span>/</span>
          <span className="text-accent font-medium truncate max-w-[200px]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* === LEFT COLUMN: IMAGES & DESCRIPTION === */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Image Gallery Container */}
            <div className="bg-card-background rounded-sm p-4 border border-border-divider">
              <div className="flex flex-col-reverse md:flex-row gap-4">
                {/* Vertical thumbnails (Desktop) */}
                <div className="hidden md:flex flex-col gap-3">
                  {combinedImages.map((src, idx) => (
                    <button
                      key={`side-${idx}`}
                      onClick={() => setMainImageIndex(idx)}
                      className={`w-14 h-14 rounded-md overflow-hidden border transition ${
                        idx === mainImageIndex 
                          ? "border-primary-button ring-2 ring-primary-button ring-opacity-50" 
                          : "border-border-divider hover:border-primary-button"
                      }`}
                    >
                      <img
                        src={src}
                        alt={`img-${idx}`}
                        className="w-full h-full object-contain bg-card-background"
                        onError={(e: any) => onImgError(e)}
                      />
                    </button>
                  ))}
                </div>

                {/* Main Image */}
                <div className="flex-1 flex flex-col items-center justify-center relative">
                  <div
                    className="relative w-full z-10"
                    ref={mainImageContainerRef}
                    onMouseMove={onMouseMove}
                    onMouseLeave={() => hideLens()}
                    onMouseEnter={() => { if (window.innerWidth >= 768) showLens(); }}
                    onTouchStart={(e) => { if (e.touches.length === 1) onMoveLens(e.touches[0].clientX, e.touches[0].clientY); }}
                    onTouchMove={onTouchMove}
                  >
                    <div className="bg-card-background overflow-hidden relative flex justify-center">
                      <img
                        src={combinedImages[mainImageIndex]}
                        alt={product.name}
                        className="max-h-[500px] object-contain cursor-zoom-in"
                        onError={(e: any) => onImgError(e)}
                        onClick={(e) => openModalAtPoint(e.clientX, e.clientY)}
                      />
                    </div>

                    {isLensVisible && <div aria-hidden style={lensStyle} className="hidden md:block" />}
                  </div>

                  {/* Mobile Thumbnails */}
                  <div className="flex md:hidden gap-3 overflow-x-auto py-4 w-full no-scrollbar">
                    {combinedImages.map((src, idx) => (
                      <button
                        key={`mob-${idx}`}
                        onClick={() => setMainImageIndex(idx)}
                        className={`flex-shrink-0 w-16 h-16 rounded border ${
                          idx === mainImageIndex ? "border-primary-button" : "border-border-divider"
                        }`}
                      >
                        <img src={src} className="w-full h-full object-contain" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Description Block */}
            <div className="bg-card-background rounded-sm p-6 border border-border-divider">
              <h3 className="text-lg font-bold text-primary-heading mb-4 uppercase">Product Description</h3>
              <div 
                className="prose max-w-none text-primary-body text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>

            
          </div>

          {/* === RIGHT COLUMN: PRODUCT DETAILS & BUY BOX === */}
          <aside className="lg:col-span-5 space-y-4">
            
            {/* Product Header & Options */}
            <div className="bg-card-background p-6 rounded-sm border border-border-divider">
              <div className="flex justify-between items-start">
                 <div>
                    <h1 className="text-2xl md:text-3xl font-medium text-primary-heading leading-tight mb-1">{product.name}</h1>
                    <span className="text-secondary-text text-sm hover:underline cursor-pointer">{product.category ?? "Men's Footwear"}</span>
                 </div>
                 <button
                  onClick={() => setWishlisted(!wishlisted)}
                  className="p-2 hover:bg-background rounded-full"
                >
                  <Heart className={`w-6 h-6 ${wishlisted ? "fill-secondary-accent text-secondary-accent" : "text-muted-text"}`} />
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-primary-button text-primary-button" : "text-muted-text"}`} />
                ))}
                <span className="text-secondary-text text-sm ml-2 hover:underline cursor-pointer">142 ratings</span>
              </div>

              <div className="border-t border-border-divider my-4"></div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-secondary-accent text-sm">Deal Price:</span>
                <span className="text-3xl font-medium text-secondary-accent">
                  <sup className="text-sm">₹</sup>{product.price}
                </span>
              </div>
              <p className="text-secondary-text text-sm mt-1">Inclusive of all taxes</p>

              {/* Size Selection */}
              <div className="mt-6">
                <div className="flex justify-between mb-2">
                   <span className="font-bold text-secondary-text text-sm">Select Size: <span className="text-primary-heading">{selectedSize}</span></span>
                   <span className="text-secondary-text text-sm hover:underline cursor-pointer flex items-center gap-1">
                     <Ruler className="w-3 h-3" /> Size Chart
                   </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm border rounded-sm transition-all ${
                        selectedSize === size
                          ? "border-primary-button bg-primary-button/10 text-primary-heading font-bold ring-1 ring-primary-button"
                          : "border-border-divider bg-card-background text-primary-body hover:bg-background"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mt-4">
                <span className="font-bold text-secondary-text text-sm mb-2 block">Color: <span className="text-primary-heading">{selectedColor}</span></span>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1.5 text-sm border rounded-sm flex items-center gap-2 ${
                        selectedColor === color
                          ? "border-primary-button bg-primary-button/10 ring-1 ring-primary-button font-bold"
                          : "border-border-divider hover:bg-background"
                      }`}
                    >
                      <span 
                        className="w-3 h-3 rounded-full border border-border-divider" 
                        style={{ backgroundColor: color.toLowerCase() }} 
                      />
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 mt-6 text-xs text-secondary-text">
                <div className="flex flex-col items-center text-center gap-1">
                   <div className="bg-background p-2 rounded-full shadow-sm border border-border-divider">
                     <Truck className="w-5 h-5 text-primary-button" />
                   </div>
                   <span>Free Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                   <div className="bg-background p-2 rounded-full shadow-sm border border-border-divider">
                     <Shield className="w-5 h-5 text-primary-button" />
                   </div>
                   <span>30 Days Return</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                   <div className="bg-background p-2 rounded-full shadow-sm border border-border-divider">
                     <CheckCircle className="w-5 h-5 text-primary-button" />
                   </div>
                   <span>Top Brand</span>
                </div>
              </div>

              {/* Stock Status */}
              <div className="mt-6 text-green-600 text-lg font-medium">
                In stock
              </div>

              {/* Quantity */}
              <div className="mt-2 flex items-center gap-2">
                 <label className="text-sm text-primary-body">Qty:</label>
                 <select 
                    value={quantity} 
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="bg-background border border-border-divider rounded-md shadow-sm px-2 py-1 text-sm focus:ring-accent focus:border-accent"
                 >
                    {[1,2,3,4,5].map(num => <option key={num} value={num}>{num}</option>)}
                 </select>
              </div>

              {/* Buy Button */}
              <div className="mt-6">
                <button
                onClick={handleOrder}
                disabled={!canOrder}
                className={`w-full mt-6 py-3 font-medium border ${
                  canOrder
                    ? "bg-primary-button text-primary-heading hover:bg-button-hover"
                    : "bg-border-divider cursor-not-allowed"
                }`}
              >
                Order via WhatsApp
              </button>
              </div>
              
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-secondary-text">
                 <Shield className="w-3 h-3" />
                 Secure transaction
              </div>
            </div>

            {/* Promotional Image / Banner */}
            <div className="bg-card-background p-4 rounded-sm border border-border-divider">
              <img
                src={sidebarImage}
                alt="Promotion"
                className="w-full h-auto object-contain rounded-sm"
                onError={(e: any) => onImgError(e)}
              />
            </div>

          </aside>
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      {isModalOpen && (
        <div
          id="product-zoom-modal"
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
          onMouseMove={(e) => onModalMove(e.clientX, e.clientY)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-50 bg-white rounded-full p-2 hover:bg-gray-200"
            >
              ✕
            </button>
            <div className="w-full h-full flex items-center justify-center overflow-hidden bg-card-background rounded-lg">
              <img
                src={combinedImages[mainImageIndex]}
                alt="Zoom"
                style={{
                  transform: `scale(${zoomScale}) translate(${(0.5 - modalPan.x) * 100}%, ${(0.5 - modalPan.y) * 100}%)`,
                  transformOrigin: "center center",
                  transition: "transform 0.1s linear",
                  maxWidth: "none",
                  width: "100%",
                }}
                className="pointer-events-none select-none"
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default ProductPage;