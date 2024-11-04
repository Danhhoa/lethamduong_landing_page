const envConfig = {
    app: {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL || "",
        apiURL: process.env.NEXT_PUBLIC_API_URL,
        mediaPrefix: process.env.NEXT_PUBLIC_MEDIA_PREFIX,
    },
    seo: {
        keywords: process.env.NEXT_PUBLIC_SEO_KEYWORDS?.split(",") || [],
        desc: process.env.NEXT_PUBLIC_SEO_DESC || "",
    },
};

export default envConfig;
