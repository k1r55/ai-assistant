const chatBox = document.getElementById("chat-box");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById("user-input");
  const userText = input.value.trim();
  if (!userText) return;

  addMessage(userText, "user");
  input.value = "";

  addMessage("Thinking...", "bot");

  const response = await fetch("https://YOUR-WORKER-NAME.YOUR-NAME.workers.dev", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userText })
  });

  const data = await response.json();

  // remove "Thinking..."
  chatBox.lastChild.remove();

  addMessage(data.reply, "bot");
}

  const input = document.getElementById("user-input");
  const userText = input.value.trim();

  if (userText === "") return;

  addMessage(userText, "user");
  input.value = "";

  // Simple AI reply (placeholder)
  setTimeout(() => {
    const reply = getAIResponse(userText);
    addMessage(reply, "bot");
  }, 500);
}

function getAIResponse(text) {
  text = text.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello! How can I help you today?";
  }

  if (text.includes("fashion")) {
    return "I can help you choose outfits and color combinations!";
  }

  if (text.includes("help")) {
    return "Sure! Ask me anything 😊";
  }

  return "I'm still learning. Soon I’ll be much smarter!";
}
const response = await fetch(
  "https://ai-assistant-brain.k1r55.workers.dev",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userText })
  }
);


