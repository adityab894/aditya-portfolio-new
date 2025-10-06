import React, { useEffect, useState, useRef } from "react";
import "../styles/MouseHover.css";

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursor1Position, setCursor1Position] = useState({ x: 0, y: 0 });
  const [cursor2Position, setCursor2Position] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [hasHoverCapability, setHasHoverCapability] = useState(true);
  const requestRef = useRef();

  useEffect(() => {
    // Check for hover capability
    const checkHoverCapability = () => {
      // Method 1: Check for hover media query support
      const hasHover = window.matchMedia('(hover: hover)').matches;
      
      // Method 2: Check for touch support as a fallback
      const isTouchDevice = (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
      
      // Method 3: Check for pointer type
      const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
      
      // Device has hover if it supports hover and is not primarily a touch device
      setHasHoverCapability(hasHover && !hasCoarsePointer);
    };

    checkHoverCapability();

    // Listen for changes in hover capability (e.g., when connecting/disconnecting a mouse)
    const hoverMediaQuery = window.matchMedia('(hover: hover)');
    const pointerMediaQuery = window.matchMedia('(pointer: coarse)');
    
    const handleMediaQueryChange = () => {
      checkHoverCapability();
    };

    hoverMediaQuery.addEventListener('change', handleMediaQueryChange);
    pointerMediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      hoverMediaQuery.removeEventListener('change', handleMediaQueryChange);
      pointerMediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    // Don't add event listeners if no hover capability
    if (!hasHoverCapability) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over a project card
      const isCard = e.target.closest('.notification, .card, [class*="project"]') !== null;
      
      if (isCard) {
        setIsHoveringCard(true);
        setIsHovering(false);
        setIsHoveringText(false);
        return;
      }

      // Check if the element is inside a button or link first
      const isInsideInteractive = e.target.closest("a, button") !== null;

      // Check if hovering over interactive elements including tooltips
      const interactiveElements = [
        "A",
        "BUTTON",
        "INPUT",
        "TEXTAREA",
        "SELECT",
      ];
      const isInteractive =
        interactiveElements.includes(e.target.tagName) ||
        e.target.classList.contains("hoverable") ||
        isInsideInteractive ||
        // Tooltip detection
        e.target.hasAttribute("title") ||
        e.target.hasAttribute("data-tooltip") ||
        e.target.classList.contains("tooltip") ||
        e.target.closest("[title]") ||
        e.target.closest("[data-tooltip]") ||
        e.target.closest(".tooltip") ||
        // Common tooltip library classes
        e.target.closest('[role="tooltip"]') ||
        e.target.closest(".rc-tooltip") ||
        e.target.closest(".ant-tooltip") ||
        e.target.closest(".MuiTooltip-popper");

      // Check if hovering over text elements
      const textElements = [
        "P",
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "H6",
        "SPAN",
        "LI",
        "TD",
        "TH",
      ];
      const isText =
        textElements.includes(e.target.tagName) ||
        e.target.classList.contains("text-hoverable") ||
        (e.target.childNodes.length === 1 &&
          e.target.childNodes[0].nodeType === Node.TEXT_NODE &&
          e.target.childNodes[0].textContent.trim().length > 0);

      // Apply hover states with priority to interactive elements
      if (isInteractive) {
        setIsHovering(true);
        setIsHoveringText(false);
        setIsHoveringCard(false);
      } else if (isText && !isInsideInteractive) {
        setIsHoveringText(true);
        setIsHovering(false);
        setIsHoveringCard(false);
      }
    };

    const handleMouseOut = (e) => {
      // Check if moving away from a project card
      const isCard = e.target.closest('.notification, .card, [class*="project"]') !== null;
      
      if (isCard) {
        setIsHoveringCard(false);
        return;
      }

      // Check if the element is inside a button or link first
      const isInsideInteractive = e.target.closest("a, button") !== null;

      // Check if moving away from interactive elements
      const interactiveElements = [
        "A",
        "BUTTON",
        "INPUT",
        "TEXTAREA",
        "SELECT",
      ];
      const isInteractive =
        interactiveElements.includes(e.target.tagName) ||
        e.target.classList.contains("hoverable") ||
        isInsideInteractive ||
        // Tooltip detection
        e.target.hasAttribute("title") ||
        e.target.hasAttribute("data-tooltip") ||
        e.target.classList.contains("tooltip") ||
        e.target.closest("[title]") ||
        e.target.closest("[data-tooltip]") ||
        e.target.closest(".tooltip") ||
        // Common tooltip library classes
        e.target.closest('[role="tooltip"]') ||
        e.target.closest(".rc-tooltip") ||
        e.target.closest(".ant-tooltip") ||
        e.target.closest(".MuiTooltip-popper");

      // Check if moving away from text elements
      const textElements = [
        "P",
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "H6",
        "SPAN",
        "LI",
        "TD",
        "TH",
      ];
      const isText =
        textElements.includes(e.target.tagName) ||
        e.target.classList.contains("text-hoverable") ||
        (e.target.childNodes.length === 1 &&
          e.target.childNodes[0].nodeType === Node.TEXT_NODE &&
          e.target.childNodes[0].textContent.trim().length > 0);

      if (isInteractive) {
        setIsHovering(false);
      } else if (isText && !isInsideInteractive) {
        setIsHoveringText(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [hasHoverCapability]);

  useEffect(() => {
    // Don't animate if no hover capability
    if (!hasHoverCapability) return;

    const animate = () => {
      // Update cursor 1 (outer circle) - slower/more lag
      setCursor1Position((prevPosition) => {
        const dx = mousePosition.x - prevPosition.x;
        const dy = mousePosition.y - prevPosition.y;
        const ease = 0.08; // Lower value = slower response, more lag

        return {
          x: prevPosition.x + dx * ease,
          y: prevPosition.y + dy * ease,
        };
      });

      // Update cursor 2 (inner dot) - faster/more responsive
      setCursor2Position((prevPosition) => {
        const dx = mousePosition.x - prevPosition.x;
        const dy = mousePosition.y - prevPosition.y;
        const ease = 0.2; // Higher value = faster response

        return {
          x: prevPosition.x + dx * ease,
          y: prevPosition.y + dy * ease,
        };
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mousePosition, hasHoverCapability]);

  // Don't render anything if device doesn't support hover
  if (!hasHoverCapability) {
    return null;
  }

  const cursor1Style = {
    left: `${cursor1Position.x}px`,
    top: `${cursor1Position.y}px`,
  };

  const cursor2Style = {
    left: `${cursor2Position.x}px`,
    top: `${cursor2Position.y}px`,
  };

  return (
    <div className="cursor-effect-container">
      <div
        className={`cursor ${isHovering ? "hovering" : ""} ${isHoveringText ? "hovering-text" : ""} ${isHoveringCard ? "hovering-card" : ""}`}
        style={cursor1Style}
      >
        {isHoveringCard && <span className="cursor-text"><span className="texthilit1">#</span>view</span>}
      </div>
      <div
        className={`cursor2 ${isHovering ? "hovering" : ""} ${isHoveringText ? "hovering-text" : ""} ${isHoveringCard ? "hovering" : ""}`}
        style={cursor2Style}
      ></div>
    </div>
  );
};

export default CursorEffect;