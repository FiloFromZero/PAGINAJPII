const servicios_laboratorio = new Proxy({"src":"/_astro/servicios_laboratorio.DZ-ajJlt.jpg","width":400,"height":284,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/servicios_laboratorio.jpg";
							}
							
							return target[name];
						}
					});

export { servicios_laboratorio as default };
