document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element References ---
    const loaderScreen = document.getElementById('loader-screen');
    const chantingAudio = document.getElementById('chantingAudio');

    const countdownCard = document.getElementById('countdown-card'); // New ref
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    const inputSection = document.getElementById('input-section');
    const senderNameInput = document.getElementById('senderName');
    const senderImageInput = document.getElementById('senderImage');
    const imagePreview = document.getElementById('image-preview');
    const generateWishBtn = document.getElementById('generateWishBtn');

    const wishCard = document.getElementById('wish-card');
    const generatedUserPhoto = document.getElementById('generatedUserPhoto');
    const generatedSenderName = document.getElementById('generatedSenderName');
    const wishTextDisplay = document.getElementById('wishText');
    const whatsappShareBtn = document.getElementById('whatsappShareBtn');
    const copyWishBtn = document.getElementById('copyWishBtn');
    const createAnotherBtn = document.getElementById('createAnotherBtn');

    // --- Data (Hindi Wishes) ---
    const wishes = [
        "इस पावन श्रावण सोमवार पर, भगवान भोलेनाथ आपकी सभी मनोकामनाएं पूर्ण करें। उनका आशीर्वाद आपके जीवन में सुख, शांति और समृद्धि लाए। आपकी हर प्रार्थना स्वीकार हो और जीवन खुशियों से भर जाए। हर हर महादेव!",
        "श्रावण के इस पवित्र महीने में, शिव शंभू की कृपा आप पर सदा बनी रहे। उनका दिव्य प्रकाश आपके मार्ग को रोशन करे और सभी बाधाओं को दूर करे। यह सोमवार आपके लिए नई ऊर्जा और सकारात्मकता लेकर आए। ओम नमः शिवाय!",
        "भोलेनाथ आपको असीम शक्ति और धैर्य प्रदान करें ताकि आप जीवन की हर चुनौती का सामना कर सकें। उनकी कृपा से आपके घर में खुशहाली और संपन्नता का वास हो। यह श्रावण सोमवार आपके लिए एक नई शुरुआत लेकर आए। जय भोलेनाथ!",
        "भगवान शिव का आशीर्वाद आपके परिवार को सुरक्षित रखे और उनके प्रेम से आपके रिश्ते और भी मजबूत हों। यह श्रावण सोमवार आपके जीवन में आनंद और भक्ति का संचार करे। शिव जी की महिमा से आपका हर दिन मंगलमय हो। शिव कृपा!",
        "महादेव आपकी आत्मा को शांति और मन को स्थिरता प्रदान करें। इस श्रावण सोमवार पर, उनका दैवीय आशीर्वाद आपके सभी प्रयासों में सफलता दिलाए। आपके जीवन के हर क्षण में शिव का वास हो। हर हर महादेव!",
        "श्रावण का यह पवित्र सोमवार आपके लिए आध्यात्मिक जागृति लेकर आए। भगवान भोलेनाथ की भक्ति में लीन होकर आप जीवन का सच्चा अर्थ पाएं। उनकी कृपा से आपका जीवन दिव्य प्रकाश से भर जाए। ओम नमः शिवाय!",
        "भोलेनाथ की असीम कृपा से आपका घर सुख-समृद्धि से परिपूर्ण हो। इस शुभ अवसर पर, वे आपके सभी दुखों को हर लें और जीवन में खुशियों की वर्षा करें। यह श्रावण सोमवार आपके लिए सौभाग्य लाए। जय भोलेनाथ!",
        "शिव शंकर आपकी हर इच्छा पूरी करें और आपके जीवन को सकारात्मकता से भर दें। इस पावन अवसर पर, उनका आशीर्वाद आपके साथ रहे और आपको हमेशा सही मार्ग दिखाए। आपकी आस्था और विश्वास सदा अडिग रहे। आपकी हर प्रार्थना स्वीकार हो और जीवन खुशियों से भर जाए। हर हर महादेव!"
    ];

    // --- Helper Functions ---

    // Function to show/hide sections with transitions
    function showSection(sectionElementToShow) {
        const interactiveSections = [inputSection, wishCard]; // Sections that will be dynamically shown/hidden

        interactiveSections.forEach(section => {
            if (section === sectionElementToShow) {
                // Show the target section
                section.classList.remove('hidden'); // Remove display: none immediately for transition
                setTimeout(() => {
                    section.classList.add('visible'); // Add visible for opacity/transform transition
                }, 10); // Small delay to allow 'hidden' removal to apply
            } else {
                // Hide other sections
                section.classList.remove('visible'); // Start fade-out
                setTimeout(() => {
                    section.classList.add('hidden'); // Apply display: none after transition
                }, 500); // Match CSS transition duration
            }
        });
    }


    // Initialize Countdown
    function initializeCountdown() {
        const now = new Date();
        const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

        let nextMonday = new Date(now);

        // Calculate days until next Monday (1 represents Monday)
        let daysUntilNextMonday = (1 + 7 - currentDay) % 7;

        // If today is Monday
        if (currentDay === 1) {
            const endOfToday = new Date(now);
            endOfToday.setHours(23, 59, 59, 999); // Set to end of current day (11:59:59 PM)

            if (now < endOfToday) {
                // Still within current Monday, count down to end of today
                nextMonday = endOfToday;
            } else {
                // Past current Monday (or exactly midnight), set for next week's Monday
                nextMonday.setDate(now.getDate() + 7);
                nextMonday.setHours(0, 0, 0, 0); // Midnight of next Monday
            }
        } else {
            // Not Monday, set to midnight of next upcoming Monday
            nextMonday.setDate(now.getDate() + daysUntilNextMonday);
            nextMonday.setHours(0, 0, 0, 0);
        }

        const updateCountdown = () => {
            const now = new Date();
            const diff = nextMonday.getTime() - now.getTime();

            if (diff <= 0) {
                clearInterval(countdownInterval);
                daysSpan.textContent = '00';
                hoursSpan.textContent = '00';
                minutesSpan.textContent = '00';
                secondsSpan.textContent = '00';
                createBlessingMessage("आज सोमवार है! हर हर महादेव! आपकी सभी मनोकामनाएं पूर्ण हों!");
            } else {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                daysSpan.textContent = String(days).padStart(2, '0');
                hoursSpan.textContent = String(hours).padStart(2, '0');
                minutesSpan.textContent = String(minutes).padStart(2, '0');
                secondsSpan.textContent = String(seconds).padStart(2, '0');
            }
        };

        const countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call
    }


    // Function to create falling Belpatra emojis
    function createBelpatra() {
        const belpatra = document.createElement('span');
        belpatra.classList.add('belpatra');
        belpatra.textContent = '🌿'; // Belpatra emoji
        belpatra.style.left = Math.random() * 100 + 'vw';
        belpatra.style.animationDuration = Math.random() * 4 + 4 + 's'; // Between 4 and 8 seconds
        belpatra.style.animationDelay = Math.random() * 2 + 's'; // Stagger animations
        belpatra.style.fontSize = Math.random() * 15 + 25 + 'px'; // Randomize size
        belpatra.style.setProperty('--fall-x-offset', `${(Math.random() - 0.5) * 100}px`); // Random horizontal drift
        document.querySelector('.belpatra-container').appendChild(belpatra);

        belpatra.addEventListener('animationend', () => {
            belpatra.remove();
        });
    }

    // Function to create floating Diya
    function createDiya() {
        const diya = document.createElement('div');
        diya.classList.add('diya');
        diya.style.left = Math.random() * 90 + 5 + 'vw';
        diya.style.top = Math.random() * 20 + 70 + 'vh'; // Start from lower part of screen
        diya.style.animationDuration = Math.random() * 5 + 10 + 's'; // Between 10 and 15 seconds
        diya.style.animationDelay = Math.random() * 5 + 's';
        document.querySelector('.diya-container').appendChild(diya);

        diya.addEventListener('animationend', () => {
            diya.remove();
        });
    }

    // Function to display a temporary blessing message (if needed)
    function createBlessingMessage(message) {
        console.log("Blessing:", message);
        alert(message);
    }

    // --- Event Listeners ---

    // Initial loader hide and show input section
    setTimeout(() => {
        loaderScreen.classList.add('hidden'); // Hide loader
        // inputSection should be visible by default via CSS. No need to call showSection here.
        // It should implicitly be the first visible interactive card.
    }, 1500);

    // Play background audio on first user interaction
    let audioPlayed = false;
    document.body.addEventListener('click', () => {
        if (!audioPlayed) {
            chantingAudio.play().catch(e => console.log("Audio play prevented:", e));
            audioPlayed = true;
        }
    }, { once: true });

    // Image preview for sender image input
    senderImageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                imagePreview.style.backgroundImage = `url(${e.target.result})`;
                imagePreview.textContent = ''; // Clear any default text
            };
            reader.readAsDataURL(file);
        } else {
            imagePreview.style.backgroundImage = 'none';
            imagePreview.textContent = 'फोटो यहाँ दिखेगी'; // Hindi for 'Photo will appear here'
        }
    });

    // Generate Wish Button
    generateWishBtn.addEventListener('click', () => {
        const senderName = senderNameInput.value.trim();
        if (!senderName) {
            alert('कृपया अपना नाम दर्ज करें।'); // Hindi for "Please enter your name."
            return;
        }
        const randomWish = wishes[Math.floor(Math.random() * wishes.length)];

        generatedSenderName.textContent = senderName ? `${senderName} की तरफ से` : ''; // Hindi for "From [Name]"
        wishTextDisplay.textContent = randomWish;

        // Handle user photo display
        if (senderImageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = e => {
                generatedUserPhoto.src = e.target.result;
                generatedUserPhoto.classList.remove('hidden');
            };
            reader.readAsDataURL(senderImageInput.files[0]);
        } else {
            generatedUserPhoto.classList.add('hidden');
            generatedUserPhoto.src = ''; // Clear source
        }

        showSection(wishCard); // Show the generated wish card
    });

    // Share on WhatsApp Button
    whatsappShareBtn.addEventListener('click', () => {
        const sender = generatedSenderName.textContent;
        const wish = wishTextDisplay.textContent;
        const shareUrl = "https://yourwebsite.com/sawan.html"; // Make sure to update this to your actual URL

        let message = `🌿 श्रावण सोमवार की शुभकामनाएँ! 🌿\n\n`;
        if (sender) {
            message += `${sender}\n`;
        }
        message += `\n${wish}\n\n`;
        message += `अपनी शुभकामनाएँ यहाँ बनाएँ: ${shareUrl}`;

        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    });

    // Copy Wish Button
    copyWishBtn.addEventListener('click', () => {
        const sender = generatedSenderName.textContent;
        const wish = wishTextDisplay.textContent;
        const shareUrl = "https://yourwebsite.com/sawan.html"; // Make sure to update this to your actual URL

        let textToCopy = `🌿 श्रावण सोमवार की शुभकामनाएँ! 🌿\n\n`;
        if (sender) {
            textToCopy += `${sender}\n`;
        }
        textToCopy += `\n${wish}\n\n`;
        textToCopy += `अपनी शुभकामनाएँ यहाँ बनाएँ: ${shareUrl}`;

        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('शुभकामना कॉपी कर ली गई है!'); // Hindi for "Wish copied!"
        }).catch(err => {
            console.error('शुभकामना कॉपी करने में विफल रहा: ', err); // Hindi
            alert('शुभकामना कॉपी नहीं हो सकी। कृपया मैन्युअल रूप से कॉपी करें।'); // Hindi
        });
    });

    // Create Another Wish Button
    createAnotherBtn.addEventListener('click', () => {
        // Reset inputs
        senderNameInput.value = '';
        senderImageInput.value = '';
        imagePreview.style.backgroundImage = 'none';
        imagePreview.textContent = 'फोटो यहाँ दिखेगी'; // Reset preview text

        // Hide generated photo
        generatedUserPhoto.classList.add('hidden');
        generatedUserPhoto.src = '';

        // Show input section again
        showSection(inputSection);
    });


    // --- Initial Setup ---
    initializeCountdown(); // Start countdown on page load
    setInterval(createBelpatra, 400); // Start belpatra animation
    setInterval(createDiya, 5000); // Start diya animation
});