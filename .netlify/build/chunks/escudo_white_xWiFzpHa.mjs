const escudo_white = new Proxy({"src":"/_astro/escudo_white.Cknjp_y_.webp","width":820,"height":820,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/escudo_white.webp";
							}
							
							return target[name];
						}
					});

export { escudo_white as default };
