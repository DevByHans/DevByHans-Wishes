document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const recipientNameInput = document.getElementById('recipientName');
    const customMessageInput = document.getElementById('customMessage');
    const userNameInput = document.getElementById('userName');
    const anniversaryDateInput = document.getElementById('anniversaryDate'); // Anniversary Date input
    const generateWishBtn = document.getElementById('generateWishBtn');
    const generatedWishCard = document.getElementById('generatedWishCard');
    const wishTextElement = generatedWishCard.querySelector('.wish-text');
    const signatureElement = generatedWishCard.querySelector('.signature');
    const shareWhatsappBtn = document.getElementById('shareWhatsappBtn');
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    const inputForm = document.querySelector('.input-form'); // Select the input form container

    // Expanded and more engaging default anniversary wishes
    const defaultWishes = [
        "शादी की सालगिरह मुबारक हो! आपका प्यार यूँ ही गहरा होता रहे और हर दिन खुशियों से भरा रहे।",
        "इस खूबसूरत सफर के एक और साल को पूरा करने पर हार्दिक बधाई! आपका बंधन सदा मजबूत रहे।",
        "आप दोनों को शादी की सालगिरह की बहुत-बहुत शुभकामनाएँ! भगवान आपकी जोड़ी को सलामत रखे।",
        "प्यार, विश्वास और समझ का यह रिश्ता सदा महकता रहे। सालगिरह मुबारक!",
        "आपके वैवाहिक जीवन के एक और शानदार वर्ष के लिए बधाई! आने वाले साल भी खुशियों और साथ से भरे हों।",
        "आप दोनों की प्यार भरी दास्तान हर साल और भी खूबसूरत होती रहे। सालगिरह मुबारक हो, सदा खुश रहें!",
        "शादी की सालगिरह की हार्दिक शुभकामनाएँ! आपका साथ यूँ ही बना रहे, खुशियाँ बढ़ती रहें और हर दिन एक नया उत्सव हो।",
        "आपके अटूट बंधन और खूबसूरत साथ की यह एक और सालगिरह मुबारक! आपका प्रेम सदा अमर रहे।",
        "इस विशेष दिन पर, मैं आपके अनमोल रिश्ते और अनगिनत खुशियों के लिए बधाई देता हूँ। सालगिरह की बहुत-बहुत शुभकामनाएँ!",
        "एक-दूसरे के लिए बने दो अद्भुत दिलों को सालगिरह मुबारक! आपका प्यार हर दिन बढ़ता रहे और आप हमेशा एक-दूसरे के साथ रहें।"
    ];

    // --- Deep Linking Logic: Check for wish in URL on page load ---
    const urlParams = new URLSearchParams(window.location.search);
    const sharedWishEncoded = urlParams.get('wish');

    if (sharedWishEncoded) {
        // If a shared wish exists in the URL, display it directly
        inputForm.style.display = 'none'; // Hide the input form
        
        const decodedWish = decodeURIComponent(sharedWishEncoded);
        
        // Attempt to separate wish text and signature.
        const signatureRegex = /\n-\s*(.+?)\s*की ओर से$/;
        const signatureMatch = decodedWish.match(signatureRegex);

        let wishContent = decodedWish;
        let signatureText = '';

        if (signatureMatch) {
            signatureText = signatureMatch[0].trim();
            wishContent = decodedWish.replace(signatureRegex, '').trim();
        } else {
            signatureText = '- DevByHans Wishes की ओर से';
        }

        wishTextElement.textContent = wishContent;
        signatureElement.textContent = signatureText;

        generatedWishCard.style.display = 'block';
        setTimeout(() => {
            generatedWishCard.classList.add('visible');
        }, 50);

        generatedWishCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
    } else {
        // No shared wish in URL, ensure form is visible and wish card is hidden
        inputForm.style.display = 'flex'; // Or 'block', depending on your CSS display for .input-form
        generatedWishCard.style.display = 'none';
        generatedWishCard.classList.remove('visible'); // Ensure no stray 'visible' class
    }

    // --- Generate Wish Button Logic ---
    generateWishBtn.addEventListener('click', () => {
        // Basic validation for required fields
        if (!recipientNameInput.value.trim() || !anniversaryDateInput.value.trim() || !userNameInput.value.trim()) {
            alert('कृपया सभी आवश्यक फ़ील्ड भरें। (Couple\'s Names, Anniversary Date, and Your Name are required)');
            return; // Stop function execution if validation fails
        }

        const recipientName = recipientNameInput.value.trim();
        const customMessage = customMessageInput.value.trim();
        const userName = userNameInput.value.trim();
        const anniversaryDate = anniversaryDateInput.value; // Date value not directly used in wish text by default

        let selectedWish = defaultWishes[Math.floor(Math.random() * defaultWishes.length)];

        let finalWish = '';

        // Construct the wish more robustly
        if (recipientName) {
            finalWish += `प्रिय ${recipientName},\n\n`; // Add recipient's name with newline
        }

        finalWish += `${selectedWish}`; // Add the random wish

        if (customMessage) {
            finalWish += `\n\n${customMessage}`; // Add custom message on new lines
        }

        finalWish += `\n\n💖 सालगिरह की ढेर सारी शुभकामनाएँ!`; // Always add a final line

        let signature = userName ? `\n- ${userName} की ओर से` : `\n- DevByHans Wishes की ओर से`;

        wishTextElement.textContent = finalWish.trim();
        signatureElement.textContent = signature.trim();

        // Animate wish card display
        generatedWishCard.classList.remove('visible'); // Reset animation
        generatedWishCard.style.display = 'block'; // Make it display block
        setTimeout(() => {
            generatedWishCard.classList.add('visible'); // Trigger animation
        }, 50);

        generatedWishCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // --- Share Button Logic ---
    shareWhatsappBtn.addEventListener('click', () => {
        const fullWishText = `${wishTextElement.textContent}\n${signatureElement.textContent}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(fullWishText)}`;
        window.open(whatsappUrl, '_blank');
    });

    // --- Copy Link Button Logic (Crucial for deep linking) ---
    copyLinkBtn.addEventListener('click', () => {
        const fullWishTextForLink = `${wishTextElement.textContent.trim()}\n${signatureElement.textContent.trim()}`;
        
        // Encode the full wish text to be safely passed in a URL
        const encodedWish = encodeURIComponent(fullWishTextForLink);
        
        // Get the base URL (e.g., http://127.0.0.1:3000/anniversary.html)
        // Ensure this points to the correct page for sharing
        const baseUrl = window.location.origin + window.location.pathname;

        // Construct the shareable link with the wish as a parameter
        const shareableLink = `${baseUrl}?wish=${encodedWish}`;

        navigator.clipboard.writeText(shareableLink)
            .then(() => {
                alert('Wish link copied to clipboard! Share this link to show the exact wish.');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy link. Please copy it manually from your browser\'s address bar.');
            });
    });
});