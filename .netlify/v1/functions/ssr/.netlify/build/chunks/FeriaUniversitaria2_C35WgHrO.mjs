const FeriaU2 = new Proxy({"src":"/_astro/FeriaUniversitaria2.D3NcBsAz.jpeg","width":4096,"height":2304,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/FeriaUniversitaria2.jpeg";
							}
							
							return target[name];
						}
					});

export { FeriaU2 as default };
