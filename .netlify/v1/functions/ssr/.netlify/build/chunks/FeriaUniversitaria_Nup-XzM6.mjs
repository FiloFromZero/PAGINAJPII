const FeriaU1 = new Proxy({"src":"/_astro/FeriaUniversitaria.BcGpF_qM.jpeg","width":3280,"height":2464,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/FeriaUniversitaria.jpeg";
							}
							
							return target[name];
						}
					});

export { FeriaU1 as default };
