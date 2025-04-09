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

const TabsTrigger = ({
    value,
    children,
    activeTab,
    setActiveTab,
    className,
    activeClassName = "border-blue-500 font-bold stroke-3 text-blue-500",
    inactiveClassName = "border-transparent"
}) => {
    const isActive = activeTab === value;

    return (
        <button
            className={twMerge(
                "px-4 py-2 border-b-2",
                isActive ? activeClassName : inactiveClassName,
                className
            )}
            onClick={() => setActiveTab?.(value)}
        >
            {children}
        </button>
    );
};

const TabsContent = ({ value, activeTab, children, className }) =>
    activeTab === value ? <div className={twMerge("mt-4", className)}>{children}</div> : null;

export { Tabs, TabsList, TabsTrigger, TabsContent };