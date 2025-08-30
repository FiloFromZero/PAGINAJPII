const Regional = new Proxy({"src":"/_astro/Regional.AvK5veip.jpg","width":2304,"height":4096,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/Regional.jpg";
							}
							
							return target[name];
						}
					});

export { Regional as default };
