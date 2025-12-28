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
    "https://www.dtkfootwear.com/public/1/Black%20Shoes%202_pages-to-jpg-0004.png",
    "https://www.dtkfootwear.com/public/1/Black%20Shoes%202_pages-to-jpg-0002.png",
    "https://www.dtkfootwear.com/public/1/Black%20Shoes%202_pages-to-jpg-0003.png",
    "https://www.dtkfootwear.com/public/1/Black%20Shoes%202_pages-to-jpg-0006.png",
  ],
  2: [
    "https://www.dtkfootwear.com/public/2/Artboard%201%20(6).png",
    "https://www.dtkfootwear.com/public/2/Artboard%203%20(5).png",
    "https://www.dtkfootwear.com/public/2/Artboard%205%20(6).png",
    "https://www.dtkfootwear.com/public/2/Artboard%206%20(6).png",
  ],
  3: [
    "https://www.dtkfootwear.com/public/3/Brown%20Shoes%203-3.png",
    "https://www.dtkfootwear.com/public/3/Brown%20Shoes%203-4.png",
    "https://www.dtkfootwear.com/public/3/Brown%20Shoes%203-6.png",
    "https://www.dtkfootwear.com/public/3/Brown%20Shoes%203-2.png",
  ],
  4: [
    "https://www.dtkfootwear.com/public/4/Artboard%202%20(7).png",
    "https://www.dtkfootwear.com/public/4/Artboard%203%20(6).png",
    "https://www.dtkfootwear.com/public/4/Artboard%205%20(7).png",
    "https://www.dtkfootwear.com/public/4/Artboard%206%20(7).png",
  ],
  5: [
    "https://www.dtkfootwear.com/public/5/Brown%20Shoes%204-1.png",
    "https://www.dtkfootwear.com/public/5/Brown%20Shoes%204-3.png",
    "https://www.dtkfootwear.com/public/5/Brown%20Shoes%204-4.png",
    "https://www.dtkfootwear.com/public/5/Brown%20Shoes%204-5.png",
  ],
  6: [
    "https://www.dtkfootwear.com/public/6/4%20(2).png",
    "https://www.dtkfootwear.com/public/6/DTK%20(1).png",
    "https://www.dtkfootwear.com/public/6/DTK%202%20(1).png",
    "https://www.dtkfootwear.com/public/6/6%20(1).png",
    "https://www.dtkfootwear.com/public/6/DTK%203%20(1).png",
  ],
  7: [
    "https://www.dtkfootwear.com/public/7/2_%20(2).png",
    "https://www.dtkfootwear.com/public/7/3%20(1).png",
    "https://www.dtkfootwear.com/public/7/5%20(3).png",
    "https://www.dtkfootwear.com/public/7/BLC%201%20(1).png",
  ],
  8: [
    "https://www.dtkfootwear.com/public/8/Back%20Side%20%20(1).png",
    "https://www.dtkfootwear.com/public/8/Front%20Side%20%20(1).png",
    "https://www.dtkfootwear.com/public/8/Side%201%20(1).png",
    "https://www.dtkfootwear.com/public/8/Side%202.png",
  ],
  9: [
    "https://www.dtkfootwear.com/public/9/Artboard%206.png",
    "https://www.dtkfootwear.com/public/9/Artboard%205.png",
    "https://www.dtkfootwear.com/public/9/Artboard%202%20(1).png",
    "https://www.dtkfootwear.com/public/9/Artboard%201%20(1).png",
    "https://www.dtkfootwear.com/public/9/Artboard%204.png",
  ],
  10: [
    "https://www.dtkfootwear.com/public/10/Artboard%203%20(1).png",
    "https://www.dtkfootwear.com/public/10/Artboard%201%20(2).png",
    "https://www.dtkfootwear.com/public/10/Artboard%206%20(2).png",
    "https://www.dtkfootwear.com/public/10/Artboard%204%20(2).png",
    "https://www.dtkfootwear.com/public/10/Artboard%202%20(2).png",
  ],
  11: [
    "https://www.dtkfootwear.com/public/11/Artboard%205%20(3).png",
    "https://www.dtkfootwear.com/public/11/Artboard%201%20(3).png",
    "https://www.dtkfootwear.com/public/11/Artboard%203%20(2).png",
    "https://www.dtkfootwear.com/public/11/Artboard%204%20(3).png",
    "https://www.dtkfootwear.com/public/11/Artboard%205%20(3).png",
  ],
  12: [
    "https://www.dtkfootwear.com/public/12/Artboard%206%20(8).png",
    "https://www.dtkfootwear.com/public/12/Artboard%205%20(8).png",
    "https://www.dtkfootwear.com/public/12/Artboard%203%20(7).png",
    "https://www.dtkfootwear.com/public/12/Artboard%201%20(8).png",
  ],
  13: [
    "https://www.dtkfootwear.com/public/13/Artboard%206%20(9).png",
    "https://www.dtkfootwear.com/public/13/Artboard%205%20(9).png",
    "https://www.dtkfootwear.com/public/13/Artboard%203%20(8).png",
    "https://www.dtkfootwear.com/public/13/Artboard%201%20(9).png",
  ],
  14: [
    "https://www.dtkfootwear.com/public/14/Artboard%205%20(10).png",
    "https://www.dtkfootwear.com/public/14/Artboard%204%20(9).png",
    "https://www.dtkfootwear.com/public/14/Artboard%202%20(10).png",
    "https://www.dtkfootwear.com/public/14/Artboard%201%20(10).png",
  ],
  15: [
    "https://www.dtkfootwear.com/public/15/Artboard%206%20(4).png",
    "https://www.dtkfootwear.com/public/15/Artboard%204%20(4).png",
    "https://www.dtkfootwear.com/public/15/Artboard%201%20(4).png",
    "https://www.dtkfootwear.com/public/15/Artboard%202%20(4).png",
  ],
  16: [
    "https://www.dtkfootwear.com/public/16/Artboard%206%20(11).png",
    "https://www.dtkfootwear.com/public/16/Artboard%205%20(11).png",
    "https://www.dtkfootwear.com/public/16/Artboard%204%20(10).png",
    "https://www.dtkfootwear.com/public/16/Artboard%203%20(10).png",
  ],
  17: [
    "https://www.dtkfootwear.com/public/17/Artboard%205%20(12).png",
    "https://www.dtkfootwear.com/public/17/Artboard%204%20(11).png",
    "https://www.dtkfootwear.com/public/17/Artboard%201%20(12).png",
    "https://www.dtkfootwear.com/public/17/Artboard%203%20(11).png",
  ],
  18: [
    "https://www.dtkfootwear.com/public/18/Artboard%206%20(5).png",
    "https://www.dtkfootwear.com/public/18/Artboard%205%20(5).png",
    "https://www.dtkfootwear.com/public/18/Artboard%204%20(5).png",
    "https://www.dtkfootwear.com/public/18/Artboard%203%20(4).png",
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
      <div className="min-h-screen flex items-center justify-center p-8 bg-[#EAEDED]">
        <div className="bg-white p-8 rounded shadow-md text-center border border-gray-200">
          <p className="text-lg text-[#131921]">Product not found.</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 rounded bg-[#FFD814] text-black border border-[#FCD200]"
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
  const BUSINESS_NUMBER = "+9765758830";

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
    // Global Background: Amazon Gray
    <div className=" bg-[#FAF7F0] min-h-screen py-6 md:py-12">
      <div className="max-w-[1500px] mx-auto px-4 md:px-6">
        
        {/* Breadcrumbs - Amazon Style */}
        <div className="flex items-center text-xs md:text-sm text-[#565959] mb-4 space-x-1">
          <button onClick={() => navigate(-1)} className="hover:text-[#C7511F] flex items-center">
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          <span>/</span>
          <span className="hover:text-[#C7511F] hover:underline cursor-pointer" onClick={() => navigate("/")}>
            Home
          </span>
          <span>/</span>
          <span className="text-[#C7511F] font-medium truncate max-w-[200px]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* === LEFT COLUMN: IMAGES & DESCRIPTION === */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Image Gallery Container - White Bg */}
            <div className="bg-white rounded-sm p-4 border border-gray-200">
              <div className="flex flex-col-reverse md:flex-row gap-4">
                {/* Vertical thumbnails (Desktop) */}
                <div className="hidden md:flex flex-col gap-3">
                  {combinedImages.map((src, idx) => (
                    <button
                      key={`side-${idx}`}
                      onClick={() => setMainImageIndex(idx)}
                      className={`w-14 h-14 rounded-md overflow-hidden border transition ${
                        idx === mainImageIndex 
                          ? "border-[#FF9900] ring-2 ring-[#FF9900] ring-opacity-50" 
                          : "border-gray-200 hover:border-[#FF9900]"
                      }`}
                    >
                      <img
                        src={src}
                        alt={`img-${idx}`}
                        className="w-full h-full object-contain bg-white"
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
                    <div className="bg-white overflow-hidden relative flex justify-center">
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
                          idx === mainImageIndex ? "border-[#FF9900]" : "border-gray-200"
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
            <div className="bg-white rounded-sm p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#C7511F] mb-4 uppercase">Product Description</h3>
              <div 
                className="prose max-w-none text-[#131921] text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>

            {/* Sizing Guide Block - Styled like Amazon A+ Content */}
            <div className="bg-white rounded-sm p-6 border border-gray-200">
               <div className="flex items-center gap-2 mb-4">
                 <Ruler className="w-6 h-6 text-[#007185]" />
                 <h3 className="text-xl font-bold text-[#131921]">Find Your Perfect Size</h3>
               </div>
               
               <div className="bg-[#F0F2F2] p-4 rounded border border-gray-300">
                  <p className="text-[#131921] mb-2 font-medium">Measurement Formula:</p>
                  <p className="text-[#565959] text-sm mb-4">
                    (Foot Length in cm + 1.5 cm) × 1.5 = Recommended Size
                  </p>
                  
                  <div className="flex flex-wrap items-end gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#565959] uppercase mb-1">Enter Foot Length (cm)</label>
                      <input
                        type="number"
                        step="0.1"
                        value={footLength}
                        onChange={(e) => setFootLength(e.target.value === "" ? "" : Number(e.target.value))}
                        placeholder="e.g., 26.5"
                        className="w-32 px-3 py-2 border border-[#888C8C] rounded shadow-inner focus:border-[#e77600] focus:ring-1 focus:ring-[#e77600] outline-none"
                      />
                    </div>
                    
                    <div className="pb-1">
                      <span className="text-sm text-[#565959] mr-2">Your Size:</span>
                      <span className="text-2xl font-bold text-[#B12704]">{computedSize ?? "—"}</span>
                    </div>
                  </div>
                  
                  {note && <p className="mt-3 text-sm text-[#C7511F] font-medium">{note}</p>}
               </div>
            </div>
          </div>

          {/* === RIGHT COLUMN: PRODUCT DETAILS & BUY BOX === */}
          <aside className="lg:col-span-5 space-y-4">
            
            {/* Product Header & Options */}
            <div className="bg-white p-6 rounded-sm border border-gray-200">
              <div className="flex justify-between items-start">
                 <div>
                    <h1 className="text-2xl md:text-3xl font-medium text-[#131921] leading-tight mb-1">{product.name}</h1>
                    <span className="text-[#007185] text-sm hover:underline cursor-pointer">{product.category ?? "Men's Footwear"}</span>
                 </div>
                 <button
                  onClick={() => setWishlisted(!wishlisted)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <Heart className={`w-6 h-6 ${wishlisted ? "fill-[#B12704] text-[#B12704]" : "text-gray-400"}`} />
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-[#FF9900] text-[#FF9900]" : "text-gray-300"}`} />
                ))}
                <span className="text-[#007185] text-sm ml-2 hover:underline cursor-pointer">142 ratings</span>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-[#B12704] text-sm">Deal Price:</span>
                <span className="text-3xl font-medium text-[#B12704]">
                  <sup className="text-sm">₹</sup>{product.price}
                </span>
              </div>
              <p className="text-[#565959] text-sm mt-1">Inclusive of all taxes</p>

              {/* Size Selection */}
              <div className="mt-6">
                <div className="flex justify-between mb-2">
                   <span className="font-bold text-[#565959] text-sm">Select Size: <span className="text-[#131921]">{selectedSize}</span></span>
                   <span className="text-[#007185] text-sm hover:underline cursor-pointer flex items-center gap-1">
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
                          ? "border-[#FF9900] bg-[#FFF5E5] text-[#131921] font-bold ring-1 ring-[#FF9900]"
                          : "border-gray-300 bg-white text-[#131921] hover:bg-gray-50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mt-4">
                <span className="font-bold text-[#565959] text-sm mb-2 block">Color: <span className="text-[#131921]">{selectedColor}</span></span>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1.5 text-sm border rounded-sm flex items-center gap-2 ${
                        selectedColor === color
                          ? "border-[#FF9900] bg-[#FFF5E5] ring-1 ring-[#FF9900] font-bold"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <span 
                        className="w-3 h-3 rounded-full border border-gray-300" 
                        style={{ backgroundColor: color.toLowerCase() }} 
                      />
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 mt-6 text-xs text-[#007185]">
                <div className="flex flex-col items-center text-center gap-1">
                   <div className="bg-white p-2 rounded-full shadow-sm border border-gray-200">
                     <Truck className="w-5 h-5 text-[#FF9900]" />
                   </div>
                   <span>Free Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                   <div className="bg-white p-2 rounded-full shadow-sm border border-gray-200">
                     <Shield className="w-5 h-5 text-[#FF9900]" />
                   </div>
                   <span>30 Days Return</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                   <div className="bg-white p-2 rounded-full shadow-sm border border-gray-200">
                     <CheckCircle className="w-5 h-5 text-[#FF9900]" />
                   </div>
                   <span>Top Brand</span>
                </div>
              </div>

              {/* Stock Status */}
              <div className="mt-6 text-[#067D62] text-lg font-medium">
                In stock
              </div>

              {/* Quantity */}
              <div className="mt-2 flex items-center gap-2">
                 <label className="text-sm text-[#131921]">Qty:</label>
                 <select 
                    value={quantity} 
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="bg-[#F0F2F2] border border-[#D5D9D9] rounded-md shadow-sm px-2 py-1 text-sm focus:ring-[#e77600] focus:border-[#e77600]"
                 >
                    {[1,2,3,4,5].map(num => <option key={num} value={num}>{num}</option>)}
                 </select>
              </div>

              {/* Buy Button - Amazon Yellow */}
              <div className="mt-6">
                <button
                disabled={!canOrder}
                className={`w-full mt-6 py-3 font-medium text-black border ${
                  canOrder
                    ? "bg-[#B17457] text-white hover:bg-[#4A4947]"
                    : "bg-[#D8D2C2] cursor-not-allowed"
                }`}
              >
                Order via WhatsApp
              </button>
              </div>
              
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#565959]">
                 <Shield className="w-3 h-3" />
                 Secure transaction
              </div>
            </div>

            {/* Promotional Image / Banner */}
            <div className="bg-white p-4 rounded-sm border border-gray-200">
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
            <div className="w-full h-full flex items-center justify-center overflow-hidden bg-white rounded-lg">
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