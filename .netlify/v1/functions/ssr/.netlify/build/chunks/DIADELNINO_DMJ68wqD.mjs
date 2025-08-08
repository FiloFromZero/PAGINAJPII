const DIADELNINO = new Proxy({"src":"/_astro/DIADELNINO.CPznMqxJ.jpeg","width":1600,"height":1200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/DIADELNINO.jpeg";
							}
							
							return target[name];
						}
					});

export { DIADELNINO as default };
