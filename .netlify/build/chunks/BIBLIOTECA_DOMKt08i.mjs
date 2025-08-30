const BIBLIOTECA = new Proxy({"src":"/_astro/BIBLIOTECA.BZV5UuI4.webp","width":4096,"height":2304,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/BIBLIOTECA.webp";
							}
							
							return target[name];
						}
					});

export { BIBLIOTECA as default };
