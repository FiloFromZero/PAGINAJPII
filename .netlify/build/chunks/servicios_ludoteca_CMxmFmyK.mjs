const servicios_ludoteca = new Proxy({"src":"/_astro/servicios_ludoteca.CeCn8GfF.jpg","width":400,"height":284,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/servicios_ludoteca.jpg";
							}
							
							return target[name];
						}
					});

export { servicios_ludoteca as default };
