document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const recipientNameInput = document.getElementById('recipientName');
    const customMessageInput = document.getElementById('customMessage');
    const userNameInput = document.getElementById('userName');
    const recipientDobInput = document.getElementById('recipientDob'); // DOB input
    const generateWishBtn = document.getElementById('generateWishBtn');
    const generatedWishCard = document.getElementById('generatedWishCard');
    const wishTextElement = generatedWishCard.querySelector('.wish-text');
    const signatureElement = generatedWishCard.querySelector('.signature');
    const shareWhatsappBtn = document.getElementById('shareWhatsappBtn');
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    const inputForm = document.querySelector('.input-form'); // Select the input form container

    // Expanded and more engaging default wishes
    const defaultWishes = [
        "जन्मदिन की हार्दिक शुभकामनाएँ! आपका जीवन खुशियों, प्यार और सफलता से भरा रहे। हर दिन आपके लिए एक नई शुरुआत हो।",
        "इस खास दिन पर, मेरी यही दुआ है कि आप हमेशा मुस्कुराते रहें और आपके सभी सपने पूरे हों। जन्मदिन मुबारक हो!",
        "आपको जन्मदिन की बहुत-बहुत बधाई! आपका आने वाला साल नई उम्मीदों, ढेर सारी खुशियों और सकारात्मक ऊर्जा से भरा हो।",
        "हर लम्हा खुशियों भरा हो, हर दिन उत्सव सा हो! आपको जन्मदिन की असीम शुभकामनाएँ!",
        "ईश्वर आपको लंबी उम्र, अच्छा स्वास्थ्य और अपार समृद्धि प्रदान करें। जन्मदिन की ढेर सारी बधाई!",
        "आपके जन्मदिन पर, मैं आपके लिए अनंत खुशियों, अपार सफलता और बेहतरीन स्वास्थ्य की कामना करता हूँ। यह दिन आपके जीवन में नई रोशनी लाए।",
        "यह विशेष दिन आपके लिए ढेर सारी खुशियाँ, अविस्मरणीय पल और आने वाले वर्ष के लिए असीमित अवसर लेकर आए। जन्मदिन की बहुत-बहुत शुभकामनाएँ!",
        "आपके जन्मदिन पर, मैं आपके जीवन में प्यार, खुशी और संतुष्टि की कामना करता हूँ। आप हर दिन मुस्कुराते रहें!",
        "जन्मदिन की शुभकामनाएँ! यह नया साल आपके लिए और भी अद्भुत रोमांच, सपनों की पूर्ति और असीम खुशियाँ लाए।",
        "आपके जन्मदिन की खुशी में, मैं कामना करता हूँ कि आपका हर दिन एक उपहार हो और हर पल एक यादगार पल बने। जन्मदिन मुबारक हो!"
    ];

    // --- Deep Linking Logic: Check for wish in URL on page load ---
    const urlParams = new URLSearchParams(window.location.search);
    const sharedWishEncoded = urlParams.get('wish');

    if (sharedWishEncoded) {
        // If a shared wish exists in the URL, display it directly
        inputForm.style.display = 'none'; // Hide the input form
        
        const decodedWish = decodeURIComponent(sharedWishEncoded);
        
        // Attempt to separate wish text and signature.
        // It's more robust to look for the signature specifically
        const signatureRegex = /\n-\s*(.+?)\s*की ओर से$/;
        const signatureMatch = decodedWish.match(signatureRegex);

        let wishContent = decodedWish;
        let signatureText = '';

        if (signatureMatch) {
            // If signature is found, separate it
            signatureText = signatureMatch[0].trim(); // Includes the "- ... की ओर से" part
            wishContent = decodedWish.replace(signatureRegex, '').trim(); // Remove signature from wish content
        } else {
            // Fallback if no specific signature pattern found, use default
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
        if (!recipientNameInput.value.trim() || !recipientDobInput.value.trim() || !userNameInput.value.trim()) {
            alert('कृपया सभी आवश्यक फ़ील्ड भरें। (Recipient\'s Name, Date of Birth, and Your Name are required)');
            return; // Stop function execution if validation fails
        }

        const recipientName = recipientNameInput.value.trim();
        const customMessage = customMessageInput.value.trim();
        const userName = userNameInput.value.trim();
        const recipientDob = recipientDobInput.value; // Date value not directly used in wish text by default

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

        finalWish += `\n\n🎂 जन्मदिन की ढेर सारी शुभकामनाएँ!`; // Always add a final line

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
        
        // Get the base URL (e.g., http://127.0.0.1:3000/birthday.html)
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