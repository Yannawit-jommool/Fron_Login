// โหลดเสร็จ
console.log("EquipEase loaded!");

// เวลา คลิกเมนู
document.querySelectorAll(".menu li").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".menu li").forEach(li => li.classList.remove("active"));
    item.classList.add("active");

    // ซ่อนทุก page
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");

    // แสดง page ที่เลือก
    const page = item.getAttribute("data-page");
    document.getElementById(page + "Page").style.display = "block";

    // ถ้าเป็นฟุตบอลหรือวอลเลย์บอล → เปิดป็อปอัพ
    if (page === "football" || page === "volleyball") {
      modal.style.display = "flex";
    }
  });
});

// ป็อปอัพ
const modal = document.getElementById("bookingModal");
const openBtn = document.getElementById("openBooking");
const closeBtn = document.getElementById("closeBooking");

if (openBtn) {
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ถ้ากดปุ่ม Available → เปิดป็อปอัพ
document.querySelectorAll(".status.available").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});
