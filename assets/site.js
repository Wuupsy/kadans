// Bouton « Copier » de l'empreinte SHA-256 (pour vérifier un installateur téléchargé).
document.querySelectorAll('.copy[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const el = document.getElementById(btn.dataset.copy);
    const text = (el.dataset.value || el.textContent).replace(/\s+/g, '');
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const r = document.createRange();
      r.selectNodeContents(document.getElementById(btn.dataset.copy));
      const s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      try { document.execCommand('copy'); } catch { /* sélection laissée visible */ }
    }
    const label = btn.textContent;
    btn.textContent = 'Copié ✓';
    setTimeout(() => { btn.textContent = label; }, 1800);
  });
});
