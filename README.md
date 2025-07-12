# DevByHans Wishes

Welcome to DevByHans Wishes, your go-to online portal for generating personalized and heartfelt greetings for various occasions and festivals. This website is designed to be mobile-first, professional, and SEO-friendly, ensuring a warm and seamless experience for all users.

## Project Structure
DevByHans-Wishes/

├── index.html

├── about.html

├── privacy.html

├── terms.html

├── contact.html

├── birthday/

│   ├── birthday.html

│   ├── birthday.css

│   ├── birthday.js

│   ├── birthday-bg.jpg

│   ├── birthday-og.jpg

├── anniversary/

│   ├── anniversary.html

│   ├── anniversary.css

│   ├── anniversary.js

│   ├── anniversary-bg.jpg

│   ├── anniversary-og.jpg

├── assets/

│   ├── images/

│   │   ├── devbyhans_logo.png

│   │   ├── favicon.ico

│   │   ├── og-image.jpg          // Generic OG 
image for static pages

│   │   ├── hero-background.jpg   // Background for homepage hero section

│   │   ├── birthday_icon_placeholder.png // Placeholder icons for category cards

│   │   ├── anniversary_icon_placeholder.png

│   │   ├── diwali_icon_placeholder.png

│   │   ├── holi_icon_placeholder.png

│   │   ├── ganesh_icon_placeholder.png

│   │   └── sawan_icon_placeholder.png

│   │   ├── whatsapp_icon_placeholder.png

│   │   └── copy_icon_placeholder.png

│   ├── fonts/

│   │   ├── Poppins-Regular.ttf   // If 
self-hosting fonts

│   │   └── Merriweather-Regular.ttf // If self-hosting fonts

│   ├── robots.txt

│   ├── sitemap.xml

└── README.md

## Features

* **Home Page (`index.html`):**
    * 2-second welcome splash screen.
    * Attractive hero section with welcoming text.
    * Clear navigation for Home, About Us, Privacy Policy, Terms & Conditions, Contact.
    * Dedicated sections with animated buttons for existing wish generators (Birthday, Anniversary).
    * "Coming Soon" section for future wish categories (e.g., Diwali, Holi, Sawan Somwar).
    * Global footer with copyright and Telegram Channel link.
* **Wish Generator Pages (`birthday.html`, `anniversary.html`):**
    * Full-screen, theme-specific background images (`birthday-bg.jpg`, `anniversary-bg.jpg`).
    * User-friendly input form for recipient name, custom message, and sender's name.
    * Dynamic wish generation on button click.
    * "Share on WhatsApp" button for easy sharing.
    * "Copy Link" button to copy the current page URL.
    * Unique SEO meta tags (`title`, `description`, `og:image`).
    * Dedicated CSS (`birthday.css`, `anniversary.css`) and JS (`birthday.js`, `anniversary.js`) for custom styling and logic.
* **Static Information Pages (`about.html`, `privacy.html`, `terms.html`):**
    * Professional content, each with a minimum of 15 lines in clear English.
    * Privacy Policy mentions Google Analytics (if integrated) and FormSubmit.
* **Contact Page (`contact.html`):**
    * A functional contact form using [FormSubmit](https://formsubmit.co/) for email submissions.
    * Sends messages to a specified Gmail address.
    * Includes a thank-you message after submission via URL redirect.
* **Design & User Experience:**
    * **Mobile-First Responsive Design:** Optimized for perfect display on all screen sizes using `@media` queries and `viewport` meta tag.
    * **Indian Vibe:** Clean typography with Poppins (body) and Merriweather (headings), bright love-themed colors (pink, red, white), and subtle animations.
    * Smooth hover animations for buttons and cards.
* **SEO & Performance:**
    * Comprehensive **meta tags** (title, description, keywords) for all pages.
    * **OpenGraph tags** for enhanced social media sharing previews, with unique OG images per wish page.
    * **`robots.txt`** and **`sitemap.xml`** for improved crawlability and indexing by search engines.
    * Optimized images and minimal, clean CSS and JavaScript for fast loading.
    * Strictly **client-side JavaScript** (no backend server code required).

## Setup & Deployment

1.  **Clone or Download:** Get the project files into your local directory.
2.  **Image Placeholders:** Replace `_placeholder.png` images in `assets/images` with your actual icons and backgrounds (`hero-background.jpg`, `birthday-bg.jpg`, `anniversary-bg.jpg`). Ensure `devbyhans_logo.png`, `favicon.ico`, `og-image.jpg` are also present.
3.  **FormSubmit Configuration:**
    * Go to [FormSubmit.co](https://formsubmit.co/) and follow their instructions to get your unique form endpoint.
    * Update the `action` attribute in `contact.html`'s `<form>` tag:
        `action="https://formsubmit.co/your-email@gmail.com"` (Replace `your-email@gmail.com` with your actual Gmail address).
    * Update the `_next` hidden input value in `contact.html` to your live domain's contact page URL (e.g., `https://www.yourwebsite.com/contact.html?submitted=true`).
4.  **Update URLs:**
    * Globally search and replace `https://www.yourwebsite.com` with your actual domain name across all HTML files (for `og:url`, `canonical` tags, and FormSubmit `_next` redirect).
5.  **Google Analytics (Optional):** If you wish to use Google Analytics, uncomment the script in `privacy.html` and replace `GA_MEASUREMENT_ID` with your actual Google Analytics Measurement ID.
6.  **Fonts (Optional):** If you prefer self-hosting fonts over Google Fonts CDN, place the `.ttf` or `.woff` files in `assets/fonts/` and update your `style.css` to use `@font-face` rules. The current setup uses CDN for simplicity.
7.  **Deployment:** This project is designed to be 100% static, making it ideal for deployment on platforms like [Vercel](https://vercel.com/), Netlify, GitHub Pages, or any static web host.
    * **GitHub:** Push your entire `DevByHans-Wishes` folder to a GitHub repository.
    * **Vercel/Netlify:** Connect your GitHub repository to Vercel/Netlify. They will automatically detect it's a static site and deploy it.

## Contribution

If you find any issues or have suggestions, feel free to open an issue or submit a pull request!

---

## Live Demo (Once Deployed)

[Your Website URL Here] ---

This detailed breakdown provides you with all the code files and instructions needed to build and deploy your "DevByHans Wishes" website exactly as per your revised structure and requirements.

Let me know if you have any questions or need further clarification on any specific part!