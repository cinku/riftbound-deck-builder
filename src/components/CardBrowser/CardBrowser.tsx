"use client";

import Image from "next/image";
import { useState, useMemo } from "react";

// You can replace this with a proper type later
type Card = {
    id: string;
    name: string;
    type: string;
    color?: string[];
};

export default function CardBrowser({ cards }: { cards: Card[] }) {
    console.log(cards);
    const [query, setQuery] = useState("");
    const [type, setType] = useState("All");
    const [selectedColors, setSelectedColors] = useState<string[]>([]);

    const types = useMemo(
        () => Array.from(new Set(cards.map((card) => card.type))).sort(),
        [cards]
    );

    const colors = ["calm", "chaos", "fury", "mental", "order", "physical"];

    const toggleColor = (color: string) => {
        setSelectedColors((prev) =>
            prev.includes(color)
                ? prev.filter((c) => c !== color)
                : [...prev, color]
        );
    };

    const filtered = useMemo(() => {
        let list = cards.filter((card) =>
            card.name.toLowerCase().includes(query.toLowerCase())
        );

        if (type !== "All") {
            list = list.filter((card) => card.type === type);
        }

        if (selectedColors.length > 0) {
            list = list
                .filter((card) => card.color)
                .filter((card) =>
                    card.color!.some((c) => selectedColors.includes(c))
                );
        }

        return list;
    }, [query, type, selectedColors, cards]);

    return (
        <div>
            <div className="sticky top-0 z-10 p-2.5 backdrop-blur">
                <div className="mb-4 flex justify-between">
                    <input
                        type="text"
                        placeholder="Search cards..."
                        className="text-white-900 block w-3xs rounded-lg border border-gray-300 bg-white p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                        value={query}
                        onChange={(e) => setQuery(e.currentTarget.value)}
                    />
                    <div className="flex">
                        <select
                            value={type}
                            onChange={(e) => setType(e.currentTarget.value)}
                            className="text-white-900 block w-3xs cursor-pointer rounded-lg border border-gray-300 bg-white p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                        >
                            <option value="All">All</option>
                            {types.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>
                        <div className="ml-3 flex gap-1 rounded p-2">
                            {colors.map((color) => {
                                const isActive = selectedColors.includes(color);
                                return (
                                    <button
                                        key={color}
                                        className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border ${
                                            isActive
                                                ? "border-blue-500 bg-blue-100"
                                                : "border-gray-300 bg-white"
                                        }`}
                                        onClick={() => toggleColor(color)}
                                    >
                                        <Image
                                            src={`/icons/${color}.png`}
                                            alt={color}
                                            width="24"
                                            height="24"
                                            className="h-6 w-6"
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {filtered.map((card) => (
                    <div
                        key={card.id}
                        className="relative h-[420px] w-auto overflow-hidden"
                    >
                        <Image
                            src={`/cards/${card.id}.webp`}
                            alt={card.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
