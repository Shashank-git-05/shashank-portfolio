// Reveal on scroll
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let r of reveals) {
    const windowHeight = window.innerHeight;
    const revealTop = r.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      r.classList.add("active");
    }
  }
}

// Contact form (opens email)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("message").value;

    window.location.href = `mailto:shashankr2703@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=From: ${email}%0D%0A%0D%0A${encodeURIComponent(msg)}`;
  });
}
