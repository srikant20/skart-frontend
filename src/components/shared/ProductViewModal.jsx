import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { Divider } from "@mui/material";
import { MdDone, MdClose } from "react-icons/md";
import Status from './Status';

function ProductViewModal({ open, setOpen, product, isAvailable }) {
    // Guard clause to prevent "null" property errors during initial render
    if (!product) return null;

    const { productName, image, description, price, specialPrice } = product;

    return (
        <Dialog 
            open={open} 
            as="div" 
            className="relative z-50 focus:outline-none" 
            onClose={() => setOpen(false)}
        >
            {/* Background Overlay */}
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-lg rounded-2xl bg-white shadow-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 overflow-hidden"
                    >
                        {/* 1. Product Image Section */}
                        {image && (
                            <div className="w-full aspect-video overflow-hidden bg-gray-100">
                                <img 
                                    src={image} 
                                    alt={productName} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* 2. Content Body */}
                        <div className="px-8 pt-8 pb-4">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <DialogTitle as="h1" className="lg:text-3xl sm:text-2xl text-xl font-bold leading-tight text-gray-800">
                                        {productName}
                                    </DialogTitle>
                                    
                                    {/* Price Logic */}
                                    <div className="mt-2">
                                        {specialPrice ? (
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-2xl font-bold text-slate-800">₹{Number(specialPrice).toFixed(2)}</span>
                                                <span className="text-sm text-gray-400 line-through">₹{Number(price).toFixed(2)}</span>
                                            </div>
                                        ) : (
                                            <span className="text-2xl font-bold text-slate-800">₹{Number(price).toFixed(2)}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Availability Status */}
                                <div className="shrink-0">
                                    <Status 
                                        text={isAvailable ? "In Stock" : "Out of Stock"}
                                        icon={isAvailable ? MdDone : MdClose}
                                        bg={isAvailable ? "bg-teal-100" : "bg-rose-100"}
                                        color={isAvailable ? "text-teal-700" : "text-rose-700"}
                                    />
                                </div>
                            </div>

                            <Divider />

                            {/* Description */}
                            <div className="py-4">
                                <h4 className="text-xs font-uppercase tracking-widest text-gray-400 mb-1">DESCRIPTION</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        </div>

                        {/* 3. Footer Actions */}
                        <div className="px-8 pb-8 flex justify-end">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-6 py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all active:scale-95"
                            >
                                Close View
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}

export default ProductViewModal;