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
} from "lucide-react";
import { products } from "../products/shoes"; // adjust path as needed

// === DEMO IMAGES MAP (full list kept from your original file) ===
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
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <p className="text-lg">Product not found.</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 rounded-full bg-amber-900 text-white"
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

      // Attempt to open native app (best-effort).
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

      // Attempt both
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
  const inlineThumbIndices = (() => {
    const indices: number[] = [];
    for (let i = 0; i < combinedImages.length && indices.length < maxInlineThumbs; i++) {
      if (i === mainImageIndex) continue;
      indices.push(i);
    }
    return indices;
  })();

  // Mobile thumbnails scroll controls
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

    // clamp position so lens stays inside the image container
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
    // set modal pan so the clicked point is centered in modal
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

  // Modal pan handlers - move the zoom focus inside the modal
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

  // Helper: safe image onError
  const onImgError = (e: any, sizeFallback?: string) => {
    e.target.onerror = null;
    e.target.src = sizeFallback ?? "https://via.placeholder.com/800x600?text=No+Image";
  };

  // Compute lens background styling
  const lensStyle = (() => {
    const container = mainImageContainerRef.current;
    if (!container) return {};
    const rect = container.getBoundingClientRect();
    const imgSrc = combinedImages[mainImageIndex];
    // compute background-size: image scaled by zoomScale relative to container
    const bgWidth = rect.width * zoomScale;
    const bgHeight = rect.height * zoomScale;

    // background position: move so that the point under cursor maps to center of lens
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
      // backgroundPosition using percentages keeps it centered on the cursor position
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
          <span className="hover:underline cursor-pointer" onClick={() => navigate("/")}>
            Home
          </span>
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
                    className={`w-20 h-20 rounded-xl overflow-hidden border transition transform ${
                      idx === mainImageIndex ? "scale-105 border-amber-300 shadow" : "border-gray-100 hover:scale-105"
                    }`}
                    aria-label={`Show image ${idx + 1}`}
                    title={`Image ${idx + 1}`}
                  >
                    <img
                      src={src}
                      alt={`img-${idx}`}
                      className="w-full h-full object-contain bg-white"
                      onError={(e: any) => onImgError(e, "https://via.placeholder.com/200x200?text=No+Image")}
                    />
                  </button>
                ))}
              </div>

              {/* main image */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <div
                  className="relative w-full"
                  ref={mainImageContainerRef}
                  // mouse events for desktop lens
                  onMouseMove={onMouseMove}
                  onMouseLeave={() => hideLens()}
                  onMouseEnter={(e) => {
                    // only show lens on larger screens
                    if (window.innerWidth >= 768) showLens();
                  }}
                  // touch events for mobile
                  onTouchStart={(e) => {
                    // open modal on first tap on mobile; but also track touch move for quick preview
                    if (e.touches && e.touches.length === 1) {
                      const t = e.touches[0];
                      onMoveLens(t.clientX, t.clientY);
                    }
                  }}
                  onTouchMove={(e) => onTouchMove(e)}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg relative bg-white">
                    <img
                      src={combinedImages[mainImageIndex]}
                      alt={product.name}
                      className="w-full h-[60vh] md:h-[520px] object-contain transition duration-500 cursor-zoom-in"
                      onError={(e: any) => onImgError(e)}
                      // open modal (click) and center modal on clicked point
                      onClick={(e) => {
                        // support both mouse and touch
                        const ev = e as React.MouseEvent;
                        openModalAtPoint(ev.clientX, ev.clientY);
                      }}
                    />
                  </div>

                  {/* Lens (desktop) */}
                  {isLensVisible && (
                    <div
                      aria-hidden
                      style={lensStyle}
                      // hide on small screens
                      className="hidden md:block"
                    />
                  )}

                  {/* Enhanced mobile thumbnails under image */}
                  <div className="relative mt-4 md:hidden">
                    {/* left/right scroll buttons (mobile) */}
                    <button
                      onClick={() => scrollMobileThumbs("prev")}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 shadow-sm"
                      aria-label="Scroll thumbnails left"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div
                      ref={mobileThumbsRef as any}
                      className="flex gap-2 overflow-x-auto no-scrollbar px-8 py-1"
                      role="list"
                      aria-label="Product thumbnails"
                      style={{ scrollBehavior: "smooth" }}
                    >
                      {combinedImages.map((src, idx) => (
                        <button
                          key={`thumb-m-${idx}`}
                          onClick={() => setMainImageIndex(idx)}
                          className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border ${idx === mainImageIndex ? "border-amber-300 scale-105" : "border-gray-100"}`}
                          aria-label={`Select image ${idx + 1}`}
                          title={`Image ${idx + 1}`}
                        >
                          <img
                            src={src}
                            alt={`mobile-${idx}`}
                            className="w-full h-full object-contain bg-white"
                            onError={(e: any) => onImgError(e, "https://via.placeholder.com/200x200?text=No+Image")}
                          />
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => scrollMobileThumbs("next")}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 shadow-sm"
                      aria-label="Scroll thumbnails right"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Highlights / short specs */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-amber-900" />
                    <div>
                      <div className="text-sm font-medium text-amber-900">Free Shipping</div>
                      {/* <div className="text-xs text-gray-500">Over 5 orders / 3-5 days</div> */}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-amber-900" />
                    <div>
                      <div className="text-sm font-medium text-amber-900">Made In India</div>
                      {/* <div className="text-xs text-gray-500">Trusted </div> */}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-900" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22c-5.421 0-10-4.579-10-10S6.579 2 12 2s10 4.579 10 10-4.579 10-10 10Z" />
                    </svg>
                    <div>
                      <div className="text-sm font-medium text-amber-900">Quality Leather</div>
                      <div className="text-xs text-gray-500">Handcrafted finish</div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6 w-full">
                  <p
                    className="product-description text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </div>
                {/* NOTE: Removed the inline small thumbnails shown after description as requested */}
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
                    <p className="text-sm text-gray-500 mt-1">{product.category ?? "Uncategorized"}</p>
                  </div>
                  <button
                    onClick={() => setWishlisted(!wishlisted)}
                    aria-pressed={wishlisted}
                    className={`p-3 rounded-full border transition ${wishlisted ? "bg-amber-100 border-amber-200" : "bg-white border-gray-100 hover:bg-amber-50"}`}
                    title="Add to wishlist"
                  >
                    <Heart className={`w-5 h-5 ${wishlisted ? "text-amber-600" : "text-gray-400"}`} />
                  </button>
                </div>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="text-3xl font-bold text-amber-900">₹ {product.price}</span>
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
                          selectedSize === size ? "bg-amber-900 text-white border-amber-900" : "bg-white text-amber-900 border-amber-300 hover:bg-amber-100"
                        } transition-colors`}
                        aria-pressed={selectedSize === size}
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
                    {colors.map((color) => {
                      const bg = (color || "").toLowerCase();
                      const swatch = bg === "black" ? "#111" : bg === "white" ? "#f8f8f8" : bg;
                      return (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-4 py-2 rounded-full border font-medium mb-2 ${selectedColor === color ? "bg-amber-900 text-white border-amber-900" : "bg-white text-amber-900 border-amber-300 hover:bg-amber-100"} transition-colors flex items-center gap-2`}
                          aria-pressed={selectedColor === color}
                        >
                          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: swatch }} />
                          {color}
                        </button>
                      );
                    })}
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
                    aria-label="Quantity"
                  />
                </div>

                {/* Order Button */}
                <div className="mt-6">
                  <button
                    disabled={!canOrder}
                    onClick={handleOrder}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-full font-bold text-lg transition-colors ${canOrder ? "bg-amber-900 text-white hover:bg-amber-800" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                    aria-disabled={!canOrder}
                  >
                    <span className="mr-2">Confirm Order via WhatsApp</span>
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

              {/* More details / reviews card (optional) */}
            </div>
          </aside>
        </div>
      </div>

      {/* Modal: fullscreen zoom */}
      {isModalOpen && (
        <div
          id="product-zoom-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
          onMouseMove={(e) => onModalMove(e.clientX, e.clientY)}
          onTouchMove={(e) => {
            if (e.touches && e.touches.length > 0) {
              const t = e.touches[0];
              onModalMove(t.clientX, t.clientY);
            }
          }}
        >
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh] overflow-hidden rounded-xl"
            onClick={(ev) => {
              // prevent modal close when clicking inside the image container
              ev.stopPropagation();
            }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-30 bg-white/90 rounded-full p-2 shadow"
              aria-label="Close zoom"
            >
              ✕
            </button>

            {/* zoomed image container */}
            <div className="w-full h-full bg-black flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {/* The image is scaled up and shifted so the focused point (modalPan) is centered */}
                <img
                  src={combinedImages[mainImageIndex]}
                  alt={`${product.name} - zoom`}
                  draggable={false}
                  onError={(e: any) => onImgError(e)}
                  style={{
                    transform: `scale(${zoomScale}) translate(${(0.5 - modalPan.x) * 100}%, ${(0.5 - modalPan.y) * 100}%)`,
                    transformOrigin: "center center",
                    transition: "transform 120ms linear",
                    maxWidth: "none",
                    width: "100%",
                    height: "auto",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProductPage;
