"use client";

import { useEffect, useRef, useState } from "react";

type BlogViewTrackerProps = {
    slug: string;
    initialViews: number;
};

export default function BlogViewTracker({ slug, initialViews }: BlogViewTrackerProps) {
    const sentRef = useRef(false);
    const [views, setViews] = useState(initialViews);

    useEffect(() => {
        if (!slug || sentRef.current) return;

        sentRef.current = true;

        const sessionKey = `viewed-${slug}`;
        const alreadyViewed = sessionStorage.getItem(sessionKey);

        if (alreadyViewed) return;

        const sendView = async () => {
            try {
                const res = await fetch(
                    `https://bravix-server.vercel.app/api/blog-view/${slug}`,
                    {
                        method: "POST",
                    }
                );

                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data?.error || "View request başarısız.");
                }

                // 👇 BURASI ÖNEMLİ
                if (data.views) {
                    setViews(data.views);
                }

                sessionStorage.setItem(sessionKey, "1");
            } catch (error) {
                console.error("View gönderilemedi:", error);
            }
        };

        sendView();
    }, [slug]);

    return <span>{views}</span>;
}