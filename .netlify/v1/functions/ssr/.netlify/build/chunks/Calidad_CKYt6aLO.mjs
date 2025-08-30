const imgCalidad = new Proxy({"src":"/_astro/Calidad.CPvIm6cY.webp","width":1600,"height":897,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/Calidad.webp";
							}
							
							return target[name];
						}
					});

export { imgCalidad as default };
