import { a as getImage } from './_astro_assets_BSi17H4w.mjs';

const load = async function() {
  let images = void 0;
  try {
    images = /* #__PURE__ */ Object.assign({"/src/assets/images/BIBLIOTECA.webp": () => import('./BIBLIOTECA_DOMKt08i.mjs'),"/src/assets/images/Calidad.webp": () => import('./Calidad_CKYt6aLO.mjs'),"/src/assets/images/DIADELNINO.jpeg": () => import('./DIADELNINO_DMJ68wqD.mjs'),"/src/assets/images/FeriaUniversitaria.jpeg": () => import('./FeriaUniversitaria_Nup-XzM6.mjs'),"/src/assets/images/FeriaUniversitaria2.jpeg": () => import('./FeriaUniversitaria2_C35WgHrO.mjs'),"/src/assets/images/LABORATORIO.webp": () => import('./LABORATORIO_CbeERxLU.mjs'),"/src/assets/images/LUDOTECA.webp": () => import('./LUDOTECA_Bre0IG_o.mjs'),"/src/assets/images/Memoria.jpeg": () => import('./Memoria_CYkJRgPz.mjs'),"/src/assets/images/Profesores.png": () => import('./Profesores_BWsUGCt_.mjs'),"/src/assets/images/Regional.jpg": () => import('./Regional_C1I8QpXd.mjs'),"/src/assets/images/SERVICIOS.png": () => import('./SERVICIOS_BakGmDnk.mjs'),"/src/assets/images/SERVICIOS1.webp": () => import('./SERVICIOS1_CRql7cqe.mjs'),"/src/assets/images/SERVICIOS2.webp": () => import('./SERVICIOS2_QThL0qPA.mjs'),"/src/assets/images/SISTEMAS.webp": () => import('./SISTEMAS_0Ny20okN.mjs'),"/src/assets/images/Tools_BancoRepublica.png": () => import('./Tools_BancoRepublica_BjZKtvJH.mjs'),"/src/assets/images/Tools_BibliotecaNacional.png": () => import('./Tools_BibliotecaNacional_aStPdTu1.mjs'),"/src/assets/images/Tools_Biblored.png": () => import('./Tools_Biblored_JrSTxoxJ.mjs'),"/src/assets/images/Tools_ColombiaAprende.png": () => import('./Tools_ColombiaAprende_C-OCPeMK.mjs'),"/src/assets/images/Tools_ZigmaDatos.png": () => import('./Tools_ZigmaDatos_CoNxqm2k.mjs'),"/src/assets/images/VIRGEN.jpeg": () => import('./VIRGEN_DCQKPCoG.mjs'),"/src/assets/images/escudo.png": () => import('./escudo_BRRuuknd.mjs'),"/src/assets/images/escudo_white.webp": () => import('./escudo_white_xWiFzpHa.mjs'),"/src/assets/images/inicio_calidad_educativa.jpeg": () => import('./inicio_calidad_educativa_Bq4mdhLM.mjs'),"/src/assets/images/inicio_virtualidad.png": () => import('./inicio_virtualidad_Cq9IAuF1.mjs'),"/src/assets/images/logo.png": () => import('./logo_CA7NSkMP.mjs'),"/src/assets/images/pagoEnLinea.png": () => import('./pagoEnLinea_Mp2x6rIL.mjs'),"/src/assets/images/valores.webp": () => import('./valores_BQw-47Hk.mjs'),"/src/assets/images/virtualidad.webp": () => import('./virtualidad_Bx65YHDc.mjs')});
  } catch (e) {
  }
  return images;
};
let _images = void 0;
const fetchLocalImages = async () => {
  _images = _images || await load();
  return _images;
};
const findImage = async (imagePath) => {
  if (typeof imagePath !== "string") {
    return imagePath;
  }
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://") || imagePath.startsWith("/")) {
    return imagePath;
  }
  if (!imagePath.startsWith("~/assets/images")) {
    return imagePath;
  }
  const images = await fetchLocalImages();
  const key = imagePath.replace("~/", "/src/");
  return images && typeof images[key] === "function" ? (await images[key]())["default"] : null;
};
const adaptOpenGraphImages = async (openGraph = {}, astroSite = new URL("")) => {
  if (!openGraph?.images?.length) {
    return openGraph;
  }
  const images = openGraph.images;
  const defaultWidth = 1200;
  const defaultHeight = 626;
  const adaptedImages = await Promise.all(
    images.map(async (image) => {
      if (image?.url) {
        const resolvedImage = await findImage(image.url);
        if (!resolvedImage) {
          return {
            url: ""
          };
        }
        const _image = await getImage({
          src: resolvedImage,
          alt: "Placeholder alt",
          width: image?.width || defaultWidth,
          height: image?.height || defaultHeight
        });
        if (typeof _image === "object") {
          return {
            url: "src" in _image && typeof _image.src === "string" ? String(new URL(_image.src, astroSite)) : "pepe",
            width: "width" in _image && typeof _image.width === "number" ? _image.width : void 0,
            height: "height" in _image && typeof _image.height === "number" ? _image.height : void 0
          };
        }
        return {
          url: ""
        };
      }
      return {
        url: ""
      };
    })
  );
  return { ...openGraph, ...adaptedImages ? { images: adaptedImages } : {} };
};

export { adaptOpenGraphImages as a, findImage as f };
