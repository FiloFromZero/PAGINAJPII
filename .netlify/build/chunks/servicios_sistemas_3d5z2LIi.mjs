const servicios_sistemas = new Proxy({"src":"/_astro/servicios_sistemas.DCkWHl5f.jpg","width":400,"height":284,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/servicios_sistemas.jpg";
							}
							
							return target[name];
						}
					});

export { servicios_sistemas as default };
