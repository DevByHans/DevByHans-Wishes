document.addEventListener('DOMContentLoaded', () => {
    const recipientNameInput = document.getElementById('recipientName');
    const customMessageInput = document.getElementById('customMessage');
    const userNameInput = document.getElementById('userName');
    const anniversaryDateInput = document.getElementById('anniversaryDate'); // Get the anniversary date input
    const generateWishBtn = document.getElementById('generateWishBtn');
    const generatedWishCard = document.getElementById('generatedWishCard');
    const wishTextElement = generatedWishCard.querySelector('.wish-text');
    const signatureElement = generatedWishCard.querySelector('.signature');
    const shareWhatsappBtn = document.getElementById('shareWhatsappBtn');
    const copyLinkBtn = document.getElementById('copyLinkBtn');

    const defaultWishes = [
        "शादी की सालगिरह मुबारक हो! आपका प्यार यूँ ही गहरा होता रहे और हर दिन खुशियों से भरा रहे।",
        "इस खूबसूरत सफर के एक और साल को पूरा करने पर हार्दिक बधाई! आपका बंधन सदा मजबूत रहे।",
        "आप दोनों को शादी की सालगिरह की बहुत-बहुत शुभकामनाएँ! भगवान आपकी जोड़ी को सलामत रखे।",
        "प्यार, विश्वास और समझ का यह रिश्ता सदा महकता रहे। सालगिरह मुबारक!",
        "आपके वैवाहिक जीवन के एक और शानदार वर्ष के लिए बधाई! आने वाले साल भी खुशियों और साथ से भरे हों।"
    ];

    generateWishBtn.addEventListener('click', () => {
        const recipientName = recipientNameInput.value.trim();
        const customMessage = customMessageInput.value.trim();
        const userName = userNameInput.value.trim();
        const anniversaryDate = anniversaryDateInput.value; // Get the date value (optional use)

        let selectedWish = defaultWishes[Math.floor(Math.random() * defaultWishes.length)];

        let finalWish = selectedWish;

        // Prepend recipient's name if provided
        if (recipientName) {
            finalWish = `${recipientName} को सालगिरह की हार्दिक शुभकामनाएँ! ` + finalWish;
        }

        // Append custom message if provided
        if (customMessage) {
            finalWish += `\n\n${customMessage}`;
        }
        
        let signatureText = '';
        if (userName) {
            signatureText = `\n- ${userName} की ओर से`;
        } else {
            signatureText = `\n- DevByHans Wishes की ओर से`;
        }

        wishTextElement.textContent = finalWish;
        signatureElement.textContent = signatureText;
        
        // Ensure card is ready for animation (reset if already visible)
        generatedWishCard.classList.remove('visible'); // Remove 'visible' class first to reset animation
        generatedWishCard.style.display = 'block'; // Ensure it's displayed

        // A small delay is crucial for the CSS transition to work when changing display from 'none' to 'block'
        setTimeout(() => {
            generatedWishCard.classList.add('visible'); // Add 'visible' to trigger fade/slide animation
        }, 50); // 50ms delay is usually sufficient

        generatedWishCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    shareWhatsappBtn.addEventListener('click', () => {
        const fullWishText = `${wishTextElement.textContent}\n${signatureElement.textContent}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(fullWishText)}`;
        window.open(whatsappUrl, '_blank');
    });

    copyLinkBtn.addEventListener('click', () => {
        const pageLink = window.location.href;
        navigator.clipboard.writeText(pageLink)
            .then(() => {
                alert('Link copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy link. Please copy it manually from your browser\'s address bar.');
            });
    });
});