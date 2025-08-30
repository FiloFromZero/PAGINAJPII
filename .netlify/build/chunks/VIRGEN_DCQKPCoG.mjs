const VIRGEN = new Proxy({"src":"/_astro/VIRGEN.DtuzgiBH.jpeg","width":1600,"height":1200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/VIRGEN.jpeg";
							}
							
							return target[name];
						}
					});

export { VIRGEN as default };
