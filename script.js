const welcome = document.getElementById("welcome");
const surprise = document.getElementById("surprise");

const openButton = document.getElementById("openButton");
const wishButton = document.getElementById("wishButton");

// Final cinematic scene
const finalScene = document.getElementById("finalScene");
const fireworksVideo = document.getElementById("fireworksVideo");

function showFinalScene() {
    finalScene.classList.remove("hidden");

    setTimeout(() => {
        finalScene.classList.add("visible");
        fireworksVideo.currentTime = 0;

        fireworksVideo.play().catch(error => {
            console.error("Video playback failed:", error);
        });
    }, 100);
}

// Open the surprise
openButton.addEventListener("click", async () => {

    welcome.classList.add("hidden");
    surprise.classList.remove("hidden");

    // Start romantic music automatically
    const backgroundMusic =
        document.getElementById("backgroundMusic");

    backgroundMusic.volume = 0.5;

    try {
        await backgroundMusic.play();
        console.log("Music started successfully!");
    } catch (error) {
        console.error("Music playback failed:", error);
    }
});

// Make a wish
wishButton.addEventListener("click", () => {

    // Extinguish all candles
    document.querySelectorAll(".flame").forEach(flame => {
        flame.classList.add("off");
    });

    // Change the message
    document.getElementById("wishText").textContent =
        "May all your wishes come true! ❤️";

    wishButton.textContent = "Happy Birthday! ❤️";
    wishButton.disabled = true;

    // Create celebration
    const symbols = ["♥", "✦", "✿", "✨"];

    for (let i = 0; i < 45; i++) {
        const item = document.createElement("div");

        item.classList.add("confetti");
        item.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        item.style.left = Math.random() * 100 + "vw";
        item.style.fontSize = (12 + Math.random() * 18) + "px";
        item.style.color =
            ["#ff8eae", "#ffd6e5", "#f8c45c", "#ffffff"][
                Math.floor(Math.random() * 4)
            ];

        item.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(item);

        setTimeout(() => item.remove(), 5000);
    }
    document.getElementById("letterButton").classList.remove("hidden");
});

// Falling rose petals
const petalsContainer = document.getElementById("petals");

function createPetal() {
    const petal = document.createElement("div");

    petal.classList.add("petal");
    petal.textContent = Math.random() > 0.5 ? "♥" : "✿";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (12 + Math.random() * 15) + "px";
    petal.style.animationDuration = (5 + Math.random() * 5) + "s";

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 500);

// Open the secret letter
const letterButton = document.getElementById("letterButton");
const loveLetter = document.getElementById("loveLetter");

const envelopeButton = document.getElementById("envelopeButton");
const letterPaper = document.getElementById("letterPaper");

letterButton.addEventListener("click", () => {
    loveLetter.classList.remove("hidden");
    letterButton.classList.add("hidden");

    loveLetter.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

envelopeButton.addEventListener("click", () => {

    const envelope = envelopeButton.querySelector(".envelope");

    envelope.classList.add("opened");

    setTimeout(() => {

        envelopeButton.classList.add("hidden");
        letterPaper.classList.remove("hidden");

        // ضع رسالتك الشخصية هنا
        const message = `حبيبتي… ❤️
كل عام وأنتِ بخير يا أجمل إنسانة دخلت حياتي، ويا أجمل هدية يمكن أن يمنحني إياها القدر.
اليوم يوم ميلادك، لكنني أشعر وكأنني أنا من حصل على الهدية، لأن هذا اليوم هو اليوم الذي وُلدت فيه الإنسانة التي أصبحت تعني لي الكثير.
أريدك أن تعرفي أن وجودك في حياتي ليس شيئًا عاديًا بالنسبة لي، فأنتِ لستِ مجرد شخص أحبه، بل أنتِ شخص أصبحت تفاصيله الصغيرة تعني لي الكثير، ابتسامته تسعدني، وحضوره يجعل أيامي أجمل.
قد لا أكون دائمًا بارعًا في التعبير عما بداخلي، وقد تعجز كلماتي أحيانًا عن وصف ما أشعر به تجاهك، لكن صدقيني، هناك أشياء في قلبي أكبر بكثير من أن تستطيع الكلمات وصفها.
في عيد ميلادك، لا أتمنى لكِ السعادة اليوم فقط، بل أتمنى أن تكون كل أيامك مليئة بالفرح، وأن تتحقق أحلامك واحدًا تلو الآخر، وأن لا تفارق الابتسامة وجهك أبدًا.
وأتمنى أن تسمحي لي بأن أكون جزءًا جميلًا من أيامك القادمة، وأن نصنع معًا ذكريات نبقى نبتسم كلما تذكرناها.
كل عام وأنتِ حبيبتي، وكل عام وأنتِ أقرب إلى قلبي، وكل عام وأنا ممتن لأنكِ أنتِ بالذات في حياتي. أحبكِ، وعيد ميلاد سعيد يا أجمل أقداري. ❤️`;

        const typedMessage =
            document.getElementById("typedMessage");

        let index = 0;

        function typeWriter() {
            if (index < message.length) {
                typedMessage.textContent += message.charAt(index);
                index++;

                setTimeout(typeWriter, 55);
            } else {
                // wait until the letter is read, then show fireworks
                document.getElementById("finalButton").classList.remove("hidden");
            }
        }

        typeWriter();

        letterPaper.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 900);
});
// Open the final fireworks scene when the button is clicked
const finalButton = document.getElementById("finalButton");

finalButton.addEventListener("click", () => {
    showFinalScene();
});