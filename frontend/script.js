const form = document.getElementById("mentorForm");
const topicInput = document.getElementById("topic");
const modeInput = document.getElementById("mode");
const levelInput = document.getElementById("level");
const lengthInput = document.getElementById("length");
const output = document.getElementById("output");
const statusText = document.getElementById("status");
const generateBtn = document.getElementById("generateBtn");
const stopBtn = document.getElementById("stopBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");

let controller = null;

function setStatus(message, type = "") {
  statusText.textContent = message;
  statusText.className = "";

  if (type) {
    statusText.classList.add(`status-${type}`);
  }
}

function setLoading(isLoading) {
  generateBtn.disabled = isLoading;
  stopBtn.disabled = !isLoading;
  generateBtn.textContent = isLoading ? "Generating..." : "Generate Answer";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const topic = topicInput.value.trim();

  if (!topic) {
    setStatus("Please enter a topic first.", "error");
    return;
  }

  controller = new AbortController();

  output.textContent = "";
  setStatus("Generating live AI response...", "working");
  setLoading(true);

  try {
    const response = await fetch("/api/stream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic,
        mode: modeInput.value,
        level: levelInput.value,
        length: lengthInput.value,
      }),
      signal: controller.signal,
    });

    if (!response.ok || !response.body) {
      const errorText = await response.text();
      throw new Error(errorText || "Request failed.");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();

      if (done) {
        break;
      }

      const chunk = decoder.decode(value, { stream: true });
      output.textContent += chunk;
      output.scrollTop = output.scrollHeight;
    }

    setStatus("Response completed.", "done");
  } catch (error) {
    if (error.name === "AbortError") {
      setStatus("Generation stopped by user.", "error");
    } else {
      output.textContent += `\n\nError: ${error.message}`;
      setStatus("Something went wrong.", "error");
    }
  } finally {
    setLoading(false);
    controller = null;
  }
});

stopBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
  }
});

clearBtn.addEventListener("click", () => {
  output.textContent = "Your generated learning content will appear here...";
  setStatus("Ready when you are.");
  topicInput.focus();
});

copyBtn.addEventListener("click", async () => {
  const text = output.textContent.trim();

  if (!text || text === "Your generated learning content will appear here...") {
    setStatus("Nothing to copy yet.", "error");
    return;
  }

  await navigator.clipboard.writeText(text);
  setStatus("Copied to clipboard.", "done");
});
