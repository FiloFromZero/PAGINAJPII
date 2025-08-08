const escudo = new Proxy({"src":"/_astro/escudo.kRjxOe6c.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/escudo.png";
							}
							
							return target[name];
						}
					});

export { escudo as default };
