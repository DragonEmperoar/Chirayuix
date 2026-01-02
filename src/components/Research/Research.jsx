/* ===============================
   PDF POPUP (CRITICAL)
================================ */
.research-pdf-popup {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.research-pdf-content {
  width: 85%;
  max-width: 900px;
  height: 90vh;
  background: #ffffff;
  border-radius: 12px;
  padding: 10px;
  position: relative;
}

.research-pdf-viewer {
  width: 100%;
  height: 100%;
  border: none;
}

/* Close button */
.research-close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  z-index: 10;
}

/* Mobile tweak */
@media (max-width: 768px) {
  .research-pdf-content {
    width: 95%;
    height: 85vh;
  }
}
