import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

/* eslint-disable react/prop-types */
const Tabs = ({ defaultValue, children, className }) => {
    const [activeTab, setActiveTab] = useState(defaultValue);

    return (
        <div className={twMerge("w-full", className)}>
            {children.map((child) =>
                child.type === TabsList
                    ? React.cloneElement(child, { activeTab, setActiveTab })
                    : React.cloneElement(child, { activeTab })
            )}
        </div>
    );
};

const TabsList = ({ children, activeTab, setActiveTab, className }) => (
    <div className={twMerge("mb-6 flex border-b", className)}>
        {children.map((child) =>
            React.cloneElement(child, { activeTab, setActiveTab })
        )}
    </div>
);

const TabsTrigger = ({ value, children, activeTab, setActiveTab, className }) => (
    <button
        className={twMerge(`px-4 py-2 border-b-2 ${activeTab === value ? "border-blue-500 font-bold" : "border-transparent"
            }`,className)}
        onClick={() => setActiveTab(value)}
    >
        {children}
    </button>
);

const TabsContent = ({ value, activeTab, children, className }) =>
    activeTab === value ? <div className={twMerge("mt-4",className)}>{children}</div> : null;

export { Tabs, TabsList, TabsTrigger, TabsContent };