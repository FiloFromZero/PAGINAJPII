const imgVirtualidad = new Proxy({"src":"/_astro/virtualidad.Ds3UbC25.webp","width":1536,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/virtualidad.webp";
							}
							
							return target[name];
						}
					});

export { imgVirtualidad as default };
