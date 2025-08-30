const imgDocentes = new Proxy({"src":"/_astro/Profesores._gV1SpQB.png","width":4683,"height":2947,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/Profesores.png";
							}
							
							return target[name];
						}
					});

export { imgDocentes as default };
