const imgValores = new Proxy({"src":"/_astro/valores.BqEreQMQ.webp","width":4176,"height":2784,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/valores.webp";
							}
							
							return target[name];
						}
					});

export { imgValores as default };
