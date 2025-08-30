const Memoria = new Proxy({"src":"/_astro/Memoria.xm1Ta-qz.jpeg","width":1156,"height":520,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/Memoria.jpeg";
							}
							
							return target[name];
						}
					});

export { Memoria as default };
