import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../products/shoes';

// Assuming Reveal is a custom component you have, 
// if not, you can replace it with a simple <div> or motion.div
const Reveal = ({ children, className, delayMs = 0 }: any) => (
  <div className={className} style={{ transitionDelay: `${delayMs}ms` }}>
    {children}
  </div>
);

const ProductsPageMain = () => {
  return (
    <div className="min-h-screen bg-background text-primary-body font-sans">
      {/* Header Section */}
      <header className="pt-20 pb-12 px-6 text-center">
        <Reveal as="h2" className="text-4xl md:text-5xl font-serif text-primary-heading mb-6 tracking-tight">
          Our Collection
        </Reveal>
        <div className="w-12 h-1 bg-accent mx-auto mb-6"></div>
        <Reveal delayMs={120} className="text-secondary-text max-w-2xl mx-auto px-2 opacity-90 font-light leading-loose italic">
          idolize authentic experiences rather than products.
        </Reveal>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <Reveal key={product.id} delayMs={i * 80}>
              <Link
                to={`/product/${product.id}`}
                className="group cursor-pointer block h-full"
              >
                <div className="bg-card-background shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden h-full flex flex-col border border-border-divider/30">
                  <div className="relative overflow-hidden bg-background flex-grow-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <button className="bg-primary-button p-3 rounded-full shadow-lg">
                        <ArrowRight className="w-5 h-5 text-primary-heading" />
                      </button>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow text-center items-center">
                   
                    
                    <h3 className="font-medium text-primary-heading text-xl mb-4 group-hover:text-accent transition-colors duration-300">
                      {product.name}
                    </h3>

                    <div className="mt-auto flex flex-col items-center">
                      <div className="flex items-center gap-3">
                         <span className="text-2xl font-light text-primary-heading">
                           ₹{product.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 w-0 group-hover:w-full h-px bg-accent transition-all duration-700"></div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductsPageMain;