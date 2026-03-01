const pdfUrl: string = '/files/REGLAMENTO_INTERNO_JUAN_PABLO_II.pdf';

function loadScript(src: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.referrerPolicy = 'no-referrer';
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(s);
  });
}

type PDFViewport = { width: number; height: number };
type PDFPage = {
  getViewport: (opts: { scale: number }) => PDFViewport;
  render: (params: { canvasContext: CanvasRenderingContext2D; viewport: PDFViewport }) => { promise: Promise<void> };
};
type PDFDocument = {
  numPages: number;
  getPage: (n: number) => Promise<PDFPage>;
};
type PDFJSLike = {
  GlobalWorkerOptions: { workerSrc: string };
  getDocument: (params: { url: string }) => { promise: Promise<PDFDocument> };
};

async function renderPdf(viewer: HTMLDivElement): Promise<void> {
  try {
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js');
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js');
    const pdfjsLib = (window as unknown as { pdfjsLib?: PDFJSLike }).pdfjsLib;
    if (!pdfjsLib) return;
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    const loadingTask = pdfjsLib.getDocument({ url: pdfUrl });
    const pdf = await loadingTask.promise;
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.15 });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d', { alpha: false });
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      canvas.style.width = '100%';
      canvas.style.height = 'auto';
      viewer.appendChild(canvas);
      if (!context) continue;
      await page.render({ canvasContext: context, viewport }).promise;
    }
  } catch (e) {
    console.error('Error al renderizar PDF:', e);
    viewer.innerHTML = '<p class="text-center text-sm text-gray-600 dark:text-gray-300 py-6">No se pudo cargar el documento en este dispositivo.</p>';
  }
}

function init(): void {
  const viewer = document.getElementById('pdf-viewer') as HTMLDivElement | null;
  if (!viewer || viewer.childElementCount > 0) return;

  // Bloquear gestos de descarga/contextual en móviles
  viewer.addEventListener('contextmenu', (e) => e.preventDefault());
  viewer.addEventListener('dragstart', (e) => e.preventDefault());
  viewer.addEventListener('touchstart', (e) => {
    const te = e as TouchEvent;
    if (te.touches && te.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  void renderPdf(viewer);
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('astro:page-load', init as EventListener);
  document.addEventListener('astro:after-swap', init as EventListener);
}