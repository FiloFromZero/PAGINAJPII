const inicio_docentes = new Proxy({"src":"/_astro/inicio_docentes.lCVrYRPG.jpeg","width":1280,"height":957,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/inicio_docentes.jpeg";
							}
							
							return target[name];
						}
					});

export { inicio_docentes as default };
