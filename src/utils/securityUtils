// security.js  – production-only security utilities

export const initSecurityMeasures = () => {
  // Skip everything in dev
  if (process.env.NODE_ENV !== "production") {
    console.log("Security measures disabled in development mode");
    return;
  }

  /* ---------- Hard blocks ---------- */

  // Disable right-click
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  // Block F12, Ctrl + Shift + I / J, Ctrl + U
  const handleKeyDown = (e) => {
    if (
      e.keyCode === 123 || // F12
      (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
      (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
      (e.ctrlKey && e.keyCode === 85) // Ctrl+U
    ) {
      e.preventDefault();
    }
  };

  /* ---------- NEW: smarter select block ---------- */

  const handleSelectStart = (e) => {
    const el = e.target;

    const isWhitelisted =
      el.tagName === "INPUT" ||
      el.tagName === "TEXTAREA" ||
      el.getAttribute("contenteditable") === "true" ||
      el.closest(".allow-select"); // ✅ any ancestor with .allow-select

    if (!isWhitelisted) {
      e.preventDefault(); // block selection elsewhere
    }
  };

  /* ---------- Image drag block ---------- */

  const handleDragStart = (e) => {
    if (e.target.tagName === "IMG") {
      e.preventDefault();
    }
  };

  /* ---------- Attach listeners ---------- */

  document.addEventListener("contextmenu", handleContextMenu);
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("selectstart", handleSelectStart);
  document.addEventListener("dragstart", handleDragStart);

  console.log("Security measures enabled in production mode");

  /* ---------- Cleanup helper ---------- */
  return () => {
    document.removeEventListener("contextmenu", handleContextMenu);
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("selectstart", handleSelectStart);
    document.removeEventListener("dragstart", handleDragStart);
  };
};
