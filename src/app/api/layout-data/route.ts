import { NextResponse } from "next/server";

const headerData = [
    { label: 'About us', href: '/#aboutus' },
    { label: 'Services', href: '/#services' },
    { label: 'Work', href: '/#work' },
    { label: 'Team', href: '/#team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Awards', href: '/#awards' },
    { label: 'Career', href: '/career' },
    { label: 'Contact', href: '/contact' },
];

const footerData = {
    brand: {
        name: "HABB",
        tagline: "Your Success, Engineered by HABB — Dream Beyond Borders. Build Beyond Limits.",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/facebook.svg",
                dark_icon: "/images/home/footerSocialIcon/facebook_dark.svg",
                link: "https://www.facebook.com/habbinc"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://www.instagram.com/habb_inc/#"
            },
            {
                icon: "/images/home/footerSocialIcon/tiktok.svg",
                dark_icon: "/images/home/footerSocialIcon/tiktok_dark.svg",
                link: "https://www.tiktok.com/@habb_inc"
            },
            {
                icon: "/images/home/footerSocialIcon/github.svg",
                dark_icon: "/images/home/footerSocialIcon/github_dark.svg",
                link: "https://github.com/habbinc"
            },
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://www.linkedin.com/company/habbinc/"
            },
            {
                icon: "/images/home/footerSocialIcon/youtube.svg",
                dark_icon: "/images/home/footerSocialIcon/youtube_dark.svg",
                link: "https://www.youtube.com/@habb_inc?utm_source=facebook&utm_medium=confirmed_link_feature"
            },
            {
                icon: "/images/home/footerSocialIcon/x.svg",
                dark_icon: "/images/home/footerSocialIcon/x_dark.svg",
                link: "https://x.com/habb_inc"
            }
        ]
    },
    sitemap: {
        name: "Quick Links",
        links: [
            { name: "Home", url: "/" },
            { name: "About us", url: "/#aboutus" },
            { name: "Services", url: "/#services" },
            { name: "Our Work", url: "/#work" },
            { name: "Team", url: "/#team" },
            { name: "Blog", url: "/blog" },
            { name: "Career", url: "/career" },
            { name: "Contact us", url: "/contact" }
        ]
    },
    otherPages: {
        name: "Legal",
        links: [
            { name: "Terms & Conditions", url: "/terms-and-conditions" },
            { name: "Privacy Policy", url: "/privacy-policy" }
        ]
    },
    websites: {
        name: "Websites",
        links: [
            { name: "habb.uk", url: "https://habb.uk" },
            { name: "habb.lk", url: "https://habb.lk" },
            { name: "habblanka.com", url: "https://habblanka.com" },
            { name: "habbgate.com", url: "https://habbgate.com" }
        ]
    },
    contactDetails: {
        name:"Get In Touch",
        address1: "2225 Markham Rd, Scarborough, Toronto ON M1B 2W3, Canada",
        email: "info@habb.ca",
        phone: "+1 (647) 409-8264",
        phones: [
            "+1 (647) 409-8264"
        ]
    },
    copyright: "© 2026 HABB Inc. All Rights Reserved"
};

export const GET = async () => {
  return NextResponse.json({
    headerData,
    footerData
  });
};
