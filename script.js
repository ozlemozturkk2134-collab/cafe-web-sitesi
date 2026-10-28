const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Menü kategori filtreleri
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;

    menuCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Yayına almadan önce numarayı 90 + telefon numarası (başındaki 0 olmadan) şeklinde değiştirin.
const WHATSAPP_NUMBER = "90XXXXXXXXXX";
const whatsappLink = document.getElementById("whatsappLink");
whatsappLink.addEventListener("click", (event) => {
  event.preventDefault();
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Önce js/script.js dosyasındaki WHATSAPP_NUMBER alanına kafenizin WhatsApp numarasını yazın.");
    return;
  }
  const message = encodeURIComponent("Merhaba Mokka Café, menünüz ve çalışma saatleriniz hakkında bilgi almak istiyorum.");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener");
});
