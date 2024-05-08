document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log(data); // Anda bisa mengirim data ini melalui email atau API lainnya

    // Kirim email
    const subject = "PT JERAT MEDIA NETWORK";
    const body = `Nama: ${data.name}\nEmail: ${data.email}\nPesan: ${data.message}`;
    const mailtoLink = `mailto:jeratmedianetwork@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    this.reset(); // Reset form setelah pengiriman
  });
});
