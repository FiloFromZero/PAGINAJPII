const logo = new Proxy({"src":"/_astro/logo.Dvb4PEAG.png","width":427,"height":202,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/logo.png";
							}
							
							return target[name];
						}
					});

export { logo as default };
