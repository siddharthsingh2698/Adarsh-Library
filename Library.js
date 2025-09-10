function setPlanMessage(option) {
  const planMessage = document.getElementById("planMessage");
  const messageBox = document.getElementById("message");

  planMessage.value = option.value;
  messageBox.value = `I am interested in ${option.value}`;
}

function sendToWhatsApp(event) {
  event.preventDefault(); // Stop form refresh

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const plan = document.getElementById("planMessage").value;

  const phone = "919559493884"; // 📌 Replace with your WhatsApp number

  // ✅ Validate that a plan is selected
  if (!plan) {
    alert("Please select a plan before sending your message.");
    return;
  }

  // ✅ Build message text
  const text =
    `📌 New Library Inquiry\n\n` +
    `👤 Name: ${name}\n` +
    `📧 Email: ${email}\n` +
    `📅 Plan: ${plan}\n` +
    `💬 Message: ${message}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  // ✅ Open WhatsApp in new tab
  window.open(url, "_blank").focus();
}


