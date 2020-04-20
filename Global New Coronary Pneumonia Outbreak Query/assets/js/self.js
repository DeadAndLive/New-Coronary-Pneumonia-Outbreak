(function() {
	$.ajax({
		url: "https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoGlobalStatis,FAutoContinentStatis,FAutoGlobalDailyList,FAutoCountryConfirmAdd",
		type: "get",
		success(data) {
			var yq = data.data.FAutoGlobalStatis;
			var yq_map = data.data.FAutoCountryConfirmAdd;
			var xzqz = yq.confirmAdd;
			var xzsw = yq.deadAdd;
			var ljqz = yq.confirm;
			var ljsw = yq.dead;
			$(".xzqz").text(xzqz == 0 ? "未更新" : xzqz);
			$("#xzsw").text(xzsw == 0 ? "未更新" : xzsw);
			$("#ljqz").text(ljqz);
			$("#ljsw").text(ljsw);
			$(".xz_zy").text(yq.healAdd);
			$(".lj_zy").text(yq.heal);
			var map = $(".mapcontainer");
			$(map).mapael({
				map: {
					name: "world_countries",
					zoom: {
						enabled: true,
						maxLevel: 10
					},
					defaultPlot: {
						attrs: {
							fill: "#004a9b",
							opacity: 0.6
						}
					},
					defaultArea: {
						attrs: {
							fill: "#e4e4e4",
							stroke: "#fafafa"
						},
						attrsHover: {
							fill: "#59d05d"
						},
						text: {
							attrs: {
								fill: "#505444"
							},
							attrsHover: {
								fill: "#000"
							}
						}
					}
				},
				areas: {
					"US": {
						tooltip: {
							content: "美国今日新增<strong class='text-danger'>" + yq_map.美国 + "</strong>"
						},
						attrs: {
							fill: "#bc0404"
						},
						attrsHover: {
							fill: "#7c0505"
						}
					},
					"ES": {
						tooltip: {
							content: "西班牙今日新增<strong class='text-danger'>" + yq_map.西班牙 + "</strong>"
						},
						attrs: {
							fill: "#bc0404"
						},
						attrsHover: {
							fill: "#7c0505"
						}
					},
					"IT": {
						tooltip: {
							content: "意大利今日新增<strong class='text-danger'>" + yq_map.意大利 + "</strong>"
						},
						attrs: {
							fill: "#bc0404"
						},
						attrsHover: {
							fill: "#7c0505"
						}
					},
					"FR": {
						tooltip: {
							content: "法国今日新增<strong class='text-danger'>" + yq_map.法国 + "</strong>"
						},
						attrs: {
							fill: "#bc0404"
						},
						attrsHover: {
							fill: "#7c0505"
						}
					},
					"DE": {
						tooltip: {
							content: "德国今日新增<strong class='text-danger'>" + yq_map.德国 + "</strong>"
						},
						attrs: {
							fill: "#bc0404"
						},
						attrsHover: {
							fill: "#7c0505"
						}
					},
					"GB": {
						tooltip: {
							content: "英国今日新增<strong class='text-danger'>" + yq_map.英国 + "</strong>"
						},
						attrs: {
							fill: "#bc0404"
						},
						attrsHover: {
							fill: "#7c0505"
						}
					},
					"TR": {
						tooltip: {
							content: "土耳其今日新增<strong class='text-danger'>" + yq_map.土耳其 + "</strong>"
						},
						attrs: {
							fill: "#7c0505"
						},
						attrsHover: {
							fill: "#9e5f5f"
						}
					},
					"RO": {
						tooltip: {
							content: "罗马尼亚今日新增<strong class='text-danger'>" + yq_map.罗马尼亚 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"IR": {
						tooltip: {
							content: "伊朗今日新增<strong class='text-danger'>" + yq_map.伊朗 + "</strong>"
						},
						attrs: {
							fill: "#7c0505"
						},
						attrsHover: {
							fill: "#9e5f5f"
						}
					},
					"BE": {
						tooltip: {
							content: "比利时今日新增<strong class='text-danger'>" + yq_map.比利时 + "</strong>"
						},
						attrs: {
							fill: "#9e5f5f"
						},
						attrsHover: {
							fill: "#ff9c00"
						}
					},
					"BR": {
						tooltip: {
							content: "巴西今日新增<strong class='text-danger'>" + yq_map.巴西 + "</strong>"
						},
						attrs: {
							fill: "#9e5f5f"
						},
						attrsHover: {
							fill: "#ff9c00"
						}
					},
					"RU": {
						tooltip: {
							content: "俄罗斯今日新增<strong class='text-danger'>" + yq_map.俄罗斯 + "</strong>"
						},
						attrs: {
							fill: "#9e5f5f"
						},
						attrsHover: {
							fill: "#ff9c00"
						}
					},
					"CA": {
						tooltip: {
							content: "加拿大斯今日新增<strong class='text-danger'>" + yq_map.加拿大 + "</strong>"
						},
						attrs: {
							fill: "#9e5f5f"
						},
						attrsHover: {
							fill: "#ff9c00"
						}
					},
					"NL": {
						tooltip: {
							content: "荷兰今日新增<strong class='text-danger'>" + yq_map.荷兰 + "</strong>"
						},
						attrs: {
							fill: "#9e5f5f"
						},
						attrsHover: {
							fill: "#ff9c00"
						}
					},
					"CH": {
						tooltip: {
							content: "瑞士今日新增<strong class='text-danger'>" + yq_map.瑞士 + "</strong>"
						},
						attrs: {
							fill: "#9e5f5f"
						},
						attrsHover: {
							fill: "#ff9c00"
						}
					},
					"PT": {
						tooltip: {
							content: "葡萄牙今日新增<strong class='text-danger'>" + yq_map.葡萄牙 + "</strong>"
						},
						attrs: {
							fill: "#ff9c00"
						},
						attrsHover: {
							fill: "#fcab2a"
						}
					},
					"IN": {
						tooltip: {
							content: "印度今日新增<strong class='text-danger'>" + yq_map.印度 + "</strong>"
						},
						attrs: {
							fill: "#ff9c00"
						},
						attrsHover: {
							fill: "#fcab2a"
						}
					},
					"IE": {
						tooltip: {
							content: "爱尔兰今日新增<strong class='text-danger'>" + yq_map.爱尔兰 + "</strong>"
						},
						attrs: {
							fill: "#ff9c00"
						},
						attrsHover: {
							fill: "#fcab2a"
						}
					},
					"AT": {
						tooltip: {
							content: "奥地利今日新增<strong class='text-danger'>" + yq_map.奥地利 + "</strong>"
						},
						attrs: {
							fill: "#ff9c00"
						},
						attrsHover: {
							fill: "#fcab2a"
						}
					},
					"PE": {
						tooltip: {
							content: "秘鲁今日新增<strong class='text-danger'>" + yq_map.秘鲁 + "</strong>"
						},
						attrs: {
							fill: "#ff9c00"
						},
						attrsHover: {
							fill: "#fcab2a"
						}
					},
					"SE": {
						tooltip: {
							content: "瑞典今日新增<strong class='text-danger'>" + yq_map.瑞典 + "</strong>"
						},
						attrs: {
							fill: "#ff9c00"
						},
						attrsHover: {
							fill: "#fcab2a"
						}
					},
					"IL": {
						tooltip: {
							content: "以色列今日新增<strong class='text-danger'>" + yq_map.以色列 + "</strong>"
						},
						attrs: {
							fill: "#ff9c00"
						},
						attrsHover: {
							fill: "#fcab2a"
						}
					},
					"KP": {
						tooltip: {
							content: "韩国今日新增<strong class='text-danger'>" + yq_map.韩国 + "</strong>"
						},
						attrs: {
							fill: "#ff9c00"
						},
						attrsHover: {
							fill: "#fcab2a"
						}
					},
					"JP": {
						tooltip: {
							content: "日本本土今日新增<strong class='text-danger'>" + yq_map.日本本土 + "</strong>"
						},
						attrs: {
							fill: "#ff9c00"
						},
						attrsHover: {
							fill: "#fcab2a"
						}
					},
					"CL": {
						tooltip: {
							content: "智利今日新增<strong class='text-danger'>" + yq_map.智利 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"EC": {
						tooltip: {
							content: "厄瓜多尔今日新增<strong class='text-danger'>" + yq_map.厄瓜多尔 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"PL": {
						tooltip: {
							content: "波兰今日新增<strong class='text-danger'>" + yq_map.波兰 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"SA": {
						tooltip: {
							content: "沙特阿拉伯今日新增<strong class='text-danger'>" + yq_map.沙特阿拉伯 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"PK": {
						tooltip: {
							content: "巴基斯坦今日新增<strong class='text-danger'>" + yq_map.巴基斯坦 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"MX": {
						tooltip: {
							content: "墨西哥今日新增<strong class='text-danger'>" + yq_map.墨西哥 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"DK": {
						tooltip: {
							content: "丹麦今日新增<strong class='text-danger'>" + yq_map.丹麦 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"NO": {
						tooltip: {
							content: "挪威今日新增<strong class='text-danger'>" + yq_map.挪威 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"CZ": {
						tooltip: {
							content: "捷克今日新增<strong class='text-danger'>" + yq_map.捷克 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"AU": {
						tooltip: {
							content: "澳大利亚今日新增<strong class='text-danger'>" + yq_map.澳大利亚 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"AE": {
						tooltip: {
							content: "阿联酋今日新增<strong class='text-danger'>" + yq_map.阿联酋 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"ID": {
						tooltip: {
							content: "印度尼西亚今日新增<strong class='text-danger'>" + yq_map.印度尼西亚 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"PH": {
						tooltip: {
							content: "菲律宾今日新增<strong class='text-danger'>" + yq_map.菲律宾 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"RS": {
						tooltip: {
							content: "塞尔维亚今日新增<strong class='text-danger'>" + yq_map.塞尔维亚 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"SG": {
						tooltip: {
							content: "新加坡今日新增<strong class='text-danger'>" + yq_map.新加坡 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"UA": {
						tooltip: {
							content: "乌克兰今日新增<strong class='text-danger'>" + yq_map.乌克兰 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"MY": {
						tooltip: {
							content: "马来西亚今日新增<strong class='text-danger'>" + yq_map.马来西亚 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"QA": {
						tooltip: {
							content: "卡塔尔今日新增<strong class='text-danger'>" + yq_map.卡塔尔 + "</strong>"
						},
						attrs: {
							fill: "#fcab2a"
						},
						attrsHover: {
							fill: "#febd56"
						}
					},
					"BY": {
						tooltip: {
							content: "白俄罗斯今日新增<strong class='text-danger'>" + yq_map.白俄罗斯 + "</strong>"
						},
						attrs: {
							fill: "#febd56"
						},
						attrsHover: {
							fill: "#ffefb0"
						}
					},
					"DO": {
						tooltip: {
							content: "多米尼加今日新增<strong class='text-danger'>" + yq_map.多米尼加 + "</strong>"
						},
						attrs: {
							fill: "#febd56"
						},
						attrsHover: {
							fill: "#ffefb0"
						}
					},
					"PA": {
						tooltip: {
							content: "巴拿马今日新增<strong class='text-danger'>" + yq_map.巴拿马 + "</strong>"
						},
						attrs: {
							fill: "#febd56"
						},
						attrsHover: {
							fill: "#ffefb0"
						}
					},
					"FI": {
						tooltip: {
							content: "芬兰今日新增<strong class='text-danger'>" + yq_map.芬兰 + "</strong>"
						},
						attrs: {
							fill: "#febd56"
						},
						attrsHover: {
							fill: "#ffefb0"
						}
					},
					"CO": {
						tooltip: {
							content: "哥伦比亚今日新增<strong class='text-danger'>" + yq_map.哥伦比亚 + "</strong>"
						},
						attrs: {
							fill: "#febd56"
						},
						attrsHover: {
							fill: "#ffefb0"
						}
					},
					"LU": {
						tooltip: {
							content: "卢森堡今日新增<strong class='text-danger'>" + yq_map.卢森堡 + "</strong>"
						},
						attrs: {
							fill: "#febd56"
						},
						attrsHover: {
							fill: "#ffefb0"
						}
					},
					"ZA": {
						tooltip: {
							content: "南非今日新增<strong class='text-danger'>" + yq_map.南非 + "</strong>"
						},
						attrs: {
							fill: "#febd56"
						},
						attrsHover: {
							fill: "#ffefb0"
						}
					},
					"EG": {
						tooltip: {
							content: "埃及今日新增<strong class='text-danger'>" + yq_map.埃及 + "</strong>"
						},
						attrs: {
							fill: "#febd56"
						},
						attrsHover: {
							fill: "#ffefb0"
						}
					},
					"AR": {
						tooltip: {
							content: "阿根廷今日新增<strong class='text-danger'>" + yq_map.阿根廷 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"TH": {
						tooltip: {
							content: "泰国今日新增<strong class='text-danger'>" + yq_map.泰国 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"MA": {
						tooltip: {
							content: "摩洛哥今日新增<strong class='text-danger'>" + yq_map.摩洛哥 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"DZ": {
						tooltip: {
							content: "阿尔及利亚今日新增<strong class='text-danger'>" + yq_map.阿尔及利亚 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"MD": {
						tooltip: {
							content: "摩尔多瓦今日新增<strong class='text-danger'>" + yq_map.摩尔多瓦 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"GR": {
						tooltip: {
							content: "希腊今日新增<strong class='text-danger'>" + yq_map.希腊 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"BD": {
						tooltip: {
							content: "孟加拉今日新增<strong class='text-danger'>" + yq_map.孟加拉 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"HU": {
						tooltip: {
							content: "匈牙利今日新增<strong class='text-danger'>" + yq_map.匈牙利 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"HR": {
						tooltip: {
							content: "克罗地亚今日新增<strong class='text-danger'>" + yq_map.克罗地亚 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"BH": {
						tooltip: {
							content: "巴林今日新增<strong class='text-danger'>" + yq_map.巴林 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"IS": {
						tooltip: {
							content: "冰岛今日新增<strong class='text-danger'>" + yq_map.冰岛 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"KW": {
						tooltip: {
							content: "科威特今日新增<strong class='text-danger'>" + yq_map.科威特 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"KZ": {
						tooltip: {
							content: "哈萨克斯坦今日新增<strong class='text-danger'>" + yq_map.哈萨克斯坦 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"IQ": {
						tooltip: {
							content: "伊拉克今日新增<strong class='text-danger'>" + yq_map.伊拉克 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"EE": {
						tooltip: {
							content: "爱沙尼亚今日新增<strong class='text-danger'>" + yq_map.爱沙尼亚 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"UZ": {
						tooltip: {
							content: "乌兹别克斯坦今日新增<strong class='text-danger'>" + yq_map.乌兹别克斯坦 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"NZ": {
						tooltip: {
							content: "新西兰今日新增<strong class='text-danger'>" + yq_map.新西兰 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"AZ": {
						tooltip: {
							content: "阿塞拜疆今日新增<strong class='text-danger'>" + yq_map.阿塞拜疆 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"SI": {
						tooltip: {
							content: "斯洛文尼亚今日新增<strong class='text-danger'>" + yq_map.斯洛文尼亚 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"LT": {
						tooltip: {
							content: "立陶宛今日新增<strong class='text-danger'>" + yq_map.立陶宛 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"AM": {
						tooltip: {
							content: "亚美尼亚今日新增<strong class='text-danger'>" + yq_map.亚美尼亚 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"BA": {
						tooltip: {
							content: "波黑今日新增<strong class='text-danger'>" + yq_map.波黑 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"OM": {
						tooltip: {
							content: "阿曼今日新增<strong class='text-danger'>" + yq_map.阿曼 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"MK": {
						tooltip: {
							content: "北马其顿今日新增<strong class='text-danger'>" + yq_map.北马其顿 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"CS": {
						tooltip: {
							content: "斯洛伐克今日新增<strong class='text-danger'>" + yq_map.斯洛伐克 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"CM": {
						tooltip: {
							content: "喀麦隆今日新增<strong class='text-danger'>" + yq_map.喀麦隆 + "</strong>"
						},
						attrs: {
							fill: "#ffefb0"
						},
						attrsHover: {
							fill: "#fff5cb"
						}
					},
					"AF": {
						tooltip: {
							content: "阿富汗今日新增<strong class='text-danger'>" + yq_map.阿富汗 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"CU": {
						tooltip: {
							content: "古巴今日新增<strong class='text-danger'>" + yq_map.古巴 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"BG": {
						tooltip: {
							content: "保加利亚今日新增<strong class='text-danger'>" + yq_map.保加利亚 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"TN": {
						tooltip: {
							content: "突尼斯今日新增<strong class='text-danger'>" + yq_map.突尼斯 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"GH": {
						tooltip: {
							content: "加纳今日新增<strong class='text-danger'>" + yq_map.加纳 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"CI": {
						tooltip: {
							content: "科特迪瓦今日新增<strong class='text-danger'>" + yq_map.科特迪瓦 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"NCY": {
						tooltip: {
							content: "塞浦路斯今日新增<strong class='text-danger'>" + yq_map.塞浦路斯 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"DJ": {
						tooltip: {
							content: "吉布提今日新增<strong class='text-danger'>" + yq_map.吉布提 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"LV": {
						tooltip: {
							content: "拉脱维亚今日新增<strong class='text-danger'>" + yq_map.拉脱维亚 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"AD": {
						tooltip: {
							content: "安道尔今日新增<strong class='text-danger'>" + yq_map.安道尔 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"LB": {
						tooltip: {
							content: "黎巴嫩今日新增<strong class='text-danger'>" + yq_map.黎巴嫩 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"CR": {
						tooltip: {
							content: "哥斯达黎加今日新增<strong class='text-danger'>" + yq_map.哥斯达黎加 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"NE": {
						tooltip: {
							content: "尼日尔今日新增<strong class='text-danger'>" + yq_map.尼日尔 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"BF": {
						tooltip: {
							content: "布基纳法索今日新增<strong class='text-danger'>" + yq_map.布基纳法索 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"KG": {
						tooltip: {
							content: "吉尔吉斯斯坦今日新增<strong class='text-danger'>" + yq_map.吉尔吉斯斯坦 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"AL": {
						tooltip: {
							content: "阿尔巴尼亚今日新增<strong class='text-danger'>" + yq_map.阿尔巴尼亚 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"NG": {
						tooltip: {
							content: "尼日利亚今日新增<strong class='text-danger'>" + yq_map.尼日利亚 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"BO": {
						tooltip: {
							content: "玻利维亚今日新增<strong class='text-danger'>" + yq_map.玻利维亚 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"GN": {
						tooltip: {
							content: "几内亚今日新增<strong class='text-danger'>" + yq_map.几内亚 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"UY": {
						tooltip: {
							content: "乌拉圭今日新增<strong class='text-danger'>" + yq_map.乌拉圭 + "</strong>"
						},
						attrs: {
							fill: "#fff5cb"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"HN": {
						tooltip: {
							content: "洪都拉斯今日新增<strong class='text-danger'>" + yq_map.洪都拉斯 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"SM": {
						tooltip: {
							content: "圣马力诺今日新增<strong class='text-danger'>" + yq_map.圣马力诺 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"MT": {
						tooltip: {
							content: "马耳他今日新增<strong class='text-danger'>" + yq_map.马耳他 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"SY": {
						tooltip: {
							content: "巴勒斯坦今日新增<strong class='text-danger'>" + yq_map.巴勒斯坦 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"JO": {
						tooltip: {
							content: "约旦今日新增<strong class='text-danger'>" + yq_map.约旦 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"GE": {
						tooltip: {
							content: "格鲁吉亚今日新增<strong class='text-danger'>" + yq_map.格鲁吉亚 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"SN": {
						tooltip: {
							content: "塞内加尔今日新增<strong class='text-danger'>" + yq_map.塞内加尔 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"MU": {
						tooltip: {
							content: "毛里求斯今日新增<strong class='text-danger'>" + yq_map.毛里求斯 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"ME": {
						tooltip: {
							content: "黑山今日新增<strong class='text-danger'>" + yq_map.黑山 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"CG": {
						tooltip: {
							content: "刚果（金）今日新增<strong class='text-danger'>" + yq_map["刚果（金）"] + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"VN": {
						tooltip: {
							content: "越南今日新增<strong class='text-danger'>" + yq_map.越南 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"KE": {
						tooltip: {
							content: "肯尼亚今日新增<strong class='text-danger'>" + yq_map.肯尼亚 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"GT": {
						tooltip: {
							content: "危地马拉今日新增<strong class='text-danger'>" + yq_map.危地马拉 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"LK": {
						tooltip: {
							content: "斯里兰卡今日新增<strong class='text-danger'>" + yq_map.斯里兰卡 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"VE": {
						tooltip: {
							content: "委内瑞拉今日新增<strong class='text-danger'>" + yq_map.委内瑞拉 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"ML": {
						tooltip: {
							content: "马里今日新增<strong class='text-danger'>" + yq_map.马里 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"PY": {
						tooltip: {
							content: "巴拉圭今日新增<strong class='text-danger'>" + yq_map.巴拉圭 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"SV": {
						tooltip: {
							content: "萨尔瓦多今日新增<strong class='text-danger'>" + yq_map.萨尔瓦多 + "</strong>"
						},
						attrs: {
							fill: "#fcf7e2"
						},
						attrsHover: {
							fill: "#fcf7e2"
						}
					},
					"JM": {
						tooltip: {
							content: "牙买加今日新增<strong class='text-danger'>" + yq_map.牙买加 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"TZ": {
						tooltip: {
							content: "坦桑尼亚今日新增<strong class='text-danger'>" + yq_map.坦桑尼亚 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"RW": {
						tooltip: {
							content: "卢旺达今日新增<strong class='text-danger'>" + yq_map.卢旺达 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"CD": {
						tooltip: {
							content: "刚果（布）今日新增<strong class='text-danger'>" + yq_map["刚果（布）"] + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"BN": {
						tooltip: {
							content: "文莱今日新增<strong class='text-danger'>" + yq_map.文莱 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"SO": {
						tooltip: {
							content: "索马里今日新增<strong class='text-danger'>" + yq_map.索马里 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"KH": {
						tooltip: {
							content: "柬埔寨今日新增<strong class='text-danger'>" + yq_map.柬埔寨 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"MG": {
						tooltip: {
							content: "马达加斯加今日新增<strong class='text-danger'>" + yq_map.马达加斯加 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"TT": {
						tooltip: {
							content: "特立尼达和多巴哥今日新增<strong class='text-danger'>" + yq_map.特立尼达和多巴哥 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"GA": {
						tooltip: {
							content: "加蓬今日新增<strong class='text-danger'>" + yq_map.加蓬 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"MM": {
						tooltip: {
							content: "缅甸今日新增<strong class='text-danger'>" + yq_map.缅甸 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"ET": {
						tooltip: {
							content: "埃塞俄比亚今日新增<strong class='text-danger'>" + yq_map.埃塞俄比亚 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"MC": {
						tooltip: {
							content: "摩纳哥今日新增<strong class='text-danger'>" + yq_map.摩纳哥 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"TG": {
						tooltip: {
							content: "多哥今日新增<strong class='text-danger'>" + yq_map.多哥 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"GQ": {
						tooltip: {
							content: "赤道几内亚今日新增<strong class='text-danger'>" + yq_map.赤道几内亚 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"LR": {
						tooltip: {
							content: "利比里亚今日新增<strong class='text-danger'>" + yq_map.利比里亚 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"BB": {
						tooltip: {
							content: "巴巴多斯今日新增<strong class='text-danger'>" + yq_map.巴巴多斯 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"SD": {
						tooltip: {
							content: "苏丹今日新增<strong class='text-danger'>" + yq_map.苏丹 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"SS": {
						tooltip: {
							content: "南苏丹"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"GY": {
						tooltip: {
							content: "圭亚那今日新增<strong class='text-danger'>" + yq_map.圭亚那 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"CV": {
						tooltip: {
							content: "佛得角今日新增<strong class='text-danger'>" + yq_map.佛得角 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"ZM": {
						tooltip: {
							content: "赞比亚今日新增<strong class='text-danger'>" + yq_map.赞比亚 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"UG": {
						tooltip: {
							content: "乌干达今日新增<strong class='text-danger'>" + yq_map.乌干达 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"BF": {
						tooltip: {
							content: "巴哈马今日新增<strong class='text-danger'>" + yq_map.巴哈马 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"LY": {
						tooltip: {
							content: "利比亚今日新增<strong class='text-danger'>" + yq_map.利比亚 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"GW": {
						tooltip: {
							content: "几内亚比绍今日新增<strong class='text-danger'>" + yq_map.几内亚比绍 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"HT": {
						tooltip: {
							content: "海地今日新增<strong class='text-danger'>" + yq_map.海地 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"ER": {
						tooltip: {
							content: "厄立特里亚今日新增<strong class='text-danger'>" + yq_map.厄立特里亚 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"SY": {
						tooltip: {
							content: "叙利亚今日新增<strong class='text-danger'>" + yq_map.叙利亚 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"PR": {
						tooltip: {
							content: "马提尼克岛今日新增<strong class='text-danger'>" + yq_map.马提尼克岛 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"BJ": {
						tooltip: {
							content: "贝宁今日新增<strong class='text-danger'>" + yq_map.贝宁 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"MZ": {
						tooltip: {
							content: "莫桑比克今日新增<strong class='text-danger'>" + yq_map.莫桑比克 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"MV": {
						tooltip: {
							content: "马尔代夫今日新增<strong class='text-danger'>" + yq_map.马尔代夫 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"TD": {
						tooltip: {
							content: "乍得今日新增<strong class='text-danger'>" + yq_map.乍得 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"MN": {
						tooltip: {
							content: "蒙古今日新增<strong class='text-danger'>" + yq_map.蒙古 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"NP": {
						tooltip: {
							content: "尼泊尔今日新增<strong class='text-danger'>" + yq_map.尼泊尔 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"SL": {
						tooltip: {
							content: "塞拉利昂今日新增<strong class='text-danger'>" + yq_map.塞拉利昂 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"ZW": {
						tooltip: {
							content: "津巴布韦今日新增<strong class='text-danger'>" + yq_map.津巴布韦 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"AO": {
						tooltip: {
							content: "安哥拉今日新增<strong class='text-danger'>" + yq_map.安哥拉 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"AG": {
						tooltip: {
							content: "安提瓜和巴布达今日新增<strong class='text-danger'>" + yq_map.安提瓜和巴布达 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"SZ": {
						tooltip: {
							content: "斯威士兰今日新增<strong class='text-danger'>" + yq_map.斯威士兰 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"LA": {
						tooltip: {
							content: "老挝今日新增<strong class='text-danger'>" + yq_map.老挝 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"TP": {
						tooltip: {
							content: "东帝汶今日新增<strong class='text-danger'>" + yq_map.东帝汶 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"BZ": {
						tooltip: {
							content: "伯利兹今日新增<strong class='text-danger'>" + yq_map.伯利兹 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"FJ": {
						tooltip: {
							content: "斐济今日新增<strong class='text-danger'>" + yq_map.斐济 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"MW": {
						tooltip: {
							content: "马拉维今日新增<strong class='text-danger'>" + yq_map.马拉维 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"NA": {
						tooltip: {
							content: "纳米比亚今日新增<strong class='text-danger'>" + yq_map.纳米比亚 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"BW": {
						tooltip: {
							content: "博茨瓦纳今日新增<strong class='text-danger'>" + yq_map.博茨瓦纳 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"LC": {
						tooltip: {
							content: "圣卢西亚今日新增<strong class='text-danger'>" + yq_map.圣卢西亚 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"GD": {
						tooltip: {
							content: "格林纳达今日新增<strong class='text-danger'>" + yq_map.格林纳达 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"KN": {
						tooltip: {
							content: "圣基茨和尼维斯今日新增<strong class='text-danger'>" + yq_map.圣基茨和尼维斯 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"CF": {
						tooltip: {
							content: "中非共和国今日新增<strong class='text-danger'>" + yq_map.中非共和国 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"SC": {
						tooltip: {
							content: "塞舌尔今日新增<strong class='text-danger'>" + yq_map.塞舌尔 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"SR": {
						tooltip: {
							content: "苏里南今日新增<strong class='text-danger'>" + yq_map.苏里南 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"NI": {
						tooltip: {
							content: "尼加拉瓜今日新增<strong class='text-danger'>" + yq_map.尼加拉瓜 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"GM": {
						tooltip: {
							content: "冈比亚今日新增<strong class='text-danger'>" + yq_map.冈比亚 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"MR": {
						tooltip: {
							content: "毛里塔尼亚今日新增<strong class='text-danger'>" + yq_map.毛里塔尼亚 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"PG": {
						tooltip: {
							content: "巴布亚新几内亚今日新增<strong class='text-danger'>" + yq_map.巴布亚新几内亚 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"BT": {
						tooltip: {
							content: "不丹今日新增<strong class='text-danger'>" + yq_map.不丹 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"BI": {
						tooltip: {
							content: "布隆迪今日新增<strong class='text-danger'>" + yq_map.布隆迪 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
					"YE": {
						tooltip: {
							content: "也门今日新增<strong class='text-danger'>" + yq_map.也门 + "</strong>"
						},
						attrs: {
							fill: "#7ed321"
						},
						attrsHover: {
							fill: "#7ed321"
						}
					},
				}
			});
		}
	});
	$.ajax({
		url: "https://api.inews.qq.com/newsqa/v1/automation/foreign/country/ranklist",
		type: "get",
		success(data) {
			var xzgj = "";
			var newMax = 0;
			var datas = data.data;
			for (i = 0; i < datas.length; i++) {
				if (datas[i].confirmAdd > newMax) {
					newMax = datas[i].confirmAdd;
					xzgj = datas[i].name;
				}
			}
			var temp_1 =  xzgj.length > 0 ? xzgj : "未更新";
			var temp_2 = newMax == 0 ? "未更新" : newMax;
			console.log(newMax)
			$("#xzgj").html(temp_1 + "<strong class='text-muted'> " + temp_2 +"</strong>");
			$(".qz_max").text(datas[0].name);
			$(".qz_max_num").text(datas[0].confirm);
			$(".dead_max").attr("title", "死亡" + datas[0].dead);
			for (i = 1; i < 5; i++) {
				$(".qz_" + (i + 1)).text(datas[i].name);
				$(".qz_" + (i + 1) + "_num").text(datas[i].confirm);
				$(".dead_" + (i + 1)).attr("title", "死亡" + datas[i].dead);
			};

			var arr = new Array(datas.length);
			var dead_top_name = new Array();
			var dead_top_num = new Array();
			for (i = 0; i < 100; i++) {
				arr[i] = parseInt((datas[i].dead / datas[i].confirm) * 100000);
			};
			arr.sort((a, b) => b - a);
			for (i = 0; i < 100; i++) {
				for (j = 0; j < 100; j++) {
					if (parseInt((datas[j].dead / datas[j].confirm) * 100000) == arr[i]) {
						dead_top_name[i] = datas[j].name;
						dead_top_num[i] = arr[i] / 100000;
					};
				};
			};
			var salesArr = [];
			for (i = 0; i < 5; i++) {
				salesArr.push(dead_top_name[i]);
			}
			$(".ct-slice-pie").attr("ct:value", "hello");
			// monthlyChart
			Chartist.Pie('#monthlyChart', {
				labels: salesArr,
				series: [40, 30, 20, 10]
			});
			var page = 0;
			var table = $("#yq_table");
			var page_data = function(page) {
				for (i = page; i < page + 10; i++) {
					$(table).append("<tr><td>" + datas[i].name + "</td><td>" + (datas[i].confirmAdd == 0 ? "未更新" : datas[i].confirmAdd) +
						"</td><td>" + datas[i].confirm + "</td><td>" + datas[i].nowConfirm + "</td><td>" + datas[i].dead +
						"</td><td>" + datas[i].heal + "</td></tr>")
				};
			};
			page_data(page);
			$("#yq_n").click(function() {
				page += 10;
				if (page > datas.length) {
					$("#yq_n").popover();
					return;
				}
				page_data(page);
			});
		}
	});
}());
