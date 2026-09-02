import { appear, disappear, decorShow, decorHide } from "@fest-lib/style-lib";

export const animateShow = (target: any) => appear(target, decorShow);
export const animateHide = (target: any) => disappear(target, decorHide);
