// ===========================
// Cricket Live Script
// ===========================

// Smooth Scroll

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e) {

        if (this.hash !== "") {

            e.preventDefault();

            document.querySelector(this.hash).scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===========================
// Navbar Shadow
// ===========================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        nav.style.boxShadow = "none";

    }

});

// ===========================
// Live Time
// ===========================

function updateTime() {

    const now = new Date();

    const clock = document.getElementById("clock");

    if (clock) {

        clock.innerHTML = now.toLocaleTimeString();

    }

}

setInterval(updateTime, 1000);

// ===========================
// Auto Refresh Live Page
// ===========================

if (window.location.pathname === "/live") {

    setInterval(() => {

        location.reload();

    }, 30000);

}

// ===========================
// Welcome Animation
// ===========================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s";

        document.body.style.opacity = "1";

    }, 100);

});

// ===========================
// Match Card Hover
// ===========================

const cards = document.querySelectorAll(".match-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ===========================
// Scroll To Top Button
// ===========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#00d4ff";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===========================
// Live Badge Effect
// ===========================

setInterval(() => {

    const badge = document.querySelector(".live-badge");

    if (badge) {

        badge.style.transform = "scale(1.08)";

        setTimeout(() => {

            badge.style.transform = "scale(1)";

        }, 300);

    }

}, 1200);

// ===========================
// Console
// ===========================

console.log("🏏 Cricket Live Loaded Successfully");
