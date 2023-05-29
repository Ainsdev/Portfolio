'use client';

import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
    { id: "contact/contacting", label: "Contactame" },
    { id: "contact/creating", label: "Crear Web" },
];

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    let [activeTab, setActiveTab] = useState(tabs[0].id);
    const router = useRouter();
    
    const tabChange = (tab: string) => {
        setActiveTab(tab);
        //Change the url
        router.push(tab);
    }
    return (
        <main className='flex h-screen w-screen flex-col items-center justify-start gap-5 scroll-smooth  pt-72'>
            <h1 className='text-4xl font-bold'>Contactame</h1>
            <div className="flex space-x-1 rounded-full border-2 bg-black p-2 text-white">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => tabChange(tab.id)}
                        className={`${activeTab === tab.id ? "" : "hover:text-white/60"
                            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                style={{ borderRadius: 9999 }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className='flex h-max w-full flex-col items-center justify-center px-2 sm:w-1/2'>
            {children}
            </div>
        </main>
    )
}