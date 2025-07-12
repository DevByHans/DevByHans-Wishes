document.addEventListener('DOMContentLoaded', () => {
    const recipientNameInput = document.getElementById('recipientName');
    const customMessageInput = document.getElementById('customMessage');
    const userNameInput = document.getElementById('userName');
    const recipientDobInput = document.getElementById('recipientDob'); // Get the DOB input
    const generateWishBtn = document.getElementById('generateWishBtn');
    const generatedWishCard = document.getElementById('generatedWishCard');
    const wishTextElement = generatedWishCard.querySelector('.wish-text');
    const signatureElement = generatedWishCard.querySelector('.signature');
    const shareWhatsappBtn = document.getElementById('shareWhatsappBtn');
    const copyLinkBtn = document.getElementById('copyLinkBtn');

    const defaultWishes = [
        "जन्मदिन की हार्दिक शुभकामनाएं! आपका जीवन खुशियों, प्यार और सफलता से भरा रहे। हर दिन आपके लिए एक नई शुरुआत हो।",
        "इस खास दिन पर, मेरी यही दुआ है कि आप हमेशा मुस्कुराते रहें और आपके सभी सपने पूरे हों। जन्मदिन मुबारक हो!",
        "आपको जन्मदिन की बहुत-बहुत बधाई! आपका आने वाला साल नई उम्मीदों, ढेर सारी खुशियों और सकारात्मक ऊर्जा से भरा हो।",
        "हर लम्हा खुशियों भरा हो, हर दिन उत्सव सा हो! आपको जन्मदिन की असीम शुभकामनाएँ!",
        "ईश्वर आपको लंबी उम्र, अच्छा स्वास्थ्य और अपार समृद्धि प्रदान करें। जन्मदिन की ढेर सारी बधाई!"
    ];

    generateWishBtn.addEventListener('click', () => {
        const recipientName = recipientNameInput.value.trim();
        const customMessage = customMessageInput.value.trim();
        const userName = userNameInput.value.trim();
        const recipientDob = recipientDobInput.value; // Get the date value (optional use)

        let selectedWish = defaultWishes[Math.floor(Math.random() * defaultWishes.length)];

        let finalWish = selectedWish;

        // Prepend recipient's name if provided
        if (recipientName) {
            finalWish = `${recipientName} को जन्मदिन की हार्दिक शुभकामनाएँ! ` + finalWish;
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