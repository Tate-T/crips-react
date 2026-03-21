import { useSelector } from "react-redux";

export const useStyle = (baseStyle, dark, light) => {
	const theme = useSelector((state) => state.theme.theme);

	const style = { ...baseStyle };

	if (theme === "light") {
		Object.keys(light).forEach((el) => {
			if (Object.keys(style).includes(el)) {
				style[el] = style[el] + " " + light[el];
			} else {
				style[el] = light[el];
			}
		});
	} else {
		Object.keys(dark).forEach((el) => {
			if (Object.keys(style).includes(el)) {
				style[el] = style[el] + " " + dark[el];
			} else {
				style[el] = dark[el];
			}
		});
	}

	return style;
};
