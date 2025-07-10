// O'ng tugma blok
window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Kalitlar kombinatsiyasi bloklari
window.addEventListener("keydown", function (e) {
  // F12
  if (e.keyCode === 123) e.preventDefault();
  // Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J
  if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 67 || e.keyCode === 74)) {
    e.preventDefault();
  }
  // Ctrl+U, Ctrl+C, Ctrl+S
  if (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 67 || e.keyCode === 83)) {
    e.preventDefault();
  }
});

// Tanlash, nusxalash, kesish bloklari
["copy", "cut", "paste", "selectstart", "dragstart", "contextmenu"].forEach(evt => {
  document.addEventListener(evt, function (e) {
    e.preventDefault();
  });
});

// Console hijack (console.log, .warn, .error bloklanadi)
const disabledConsole = ["log", "warn", "error", "info", "debug"];
for (const method of disabledConsole) {
  console[method] = function () {};
}

// DevTools aniqlash
let devtoolsOpen = false;
const threshold = 160;
setInterval(function () {
  const widthThreshold = window.outerWidth - window.innerWidth > threshold;
  const heightThreshold = window.outerHeight - window.innerHeight > threshold;
  if (widthThreshold || heightThreshold) {
    if (!devtoolsOpen) {
      devtoolsOpen = true;
      document.body.innerHTML = "<h1 style='color:red;text-align:center;margin-top:30vh;'>⚠️ Xatolik: Ruxsat etilmagan harakat</h1>";
    }
  } else {
    devtoolsOpen = false;
  }
}, 500);
