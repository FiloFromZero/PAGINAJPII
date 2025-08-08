const nosotros_portada = new Proxy({"src":"/_astro/nosotros_portada.1XSv0Mrg.jpg","width":960,"height":640,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/nosotros_portada.jpg";
							}
							
							return target[name];
						}
					});

export { nosotros_portada as default };
