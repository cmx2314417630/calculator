// 体重指数（BMI）
// height(身高) weight(体重)
export const BMIFormula = (data) => {
  let height = Number(data.height) * 0.01;
  let weight = Number(data.weight);
  let num = 0;
  num = weight / (height * height);
  console.log(num);
  num = num.toFixed(2);
  if (isNaN(num)) return 0;
  return num;
};
// 体表面积（BSA）
// height(身高) weight(体重)
export const BSAFormula = (data) => {
  let height = Number(data.height);
  let weight = Number(data.weight);
  let num = 0;
  num = 0.0061 * height + 0.0124 * weight - 0.0099;
  num = num.toFixed(2);
  if (isNaN(num)) return 0;
  return num;
};
// 血透Kt/V（经典法）
// R(透析前尿素氮/透析后尿素氮)
// T(透析时间) UF(透析超滤量) W(透析后体重)
export const xuetouKTVFormula = (data) => {
  let R = Number(data.txqxnsdnd / data.txhxnsdnd);
  let T = Number(data.txsj);
  let W = Number(data.txhtz);
  let UF = Number(data.txcll);
  let num = 0;
  num = -Math.log(R - 0.008 * T) + ((4 - 3.5 * R) * UF) / W;
  num = num.toFixed(3);
  if (isNaN(num)) return 0;
  return num;
};
// nPNA-透析前
export const nPNAFormula = (data) => {
  console.log(data);
  //   let UNA = (0.25 x 靶体重) + (0.2 x (实际体重-靶体重)) x1.2 x 蛋白质摄入量
  let num = 0;
  return num;
};
// 肾衰指数（RFI）
// nn(尿钠) xjg(血肌酐) njg(尿肌酐)
export const RFIFormula = (data) => {
  let nn = Number(data.nn);
  let xjg = Number(data.xjg);
  let njg = Number(data.njg);
  let num = nn / (njg / xjg);
  num = num.toFixed(2);
  if (isNaN(num)) return 0;
  return num;
};
// 滤过钠排泄分数（FENa）
// nn(尿钠) xjg(血肌酐) njg(尿肌酐)
export const FENaFormula = (data) => {
  let nn = Number(data.nn);
  let xn = Number(data.xn);
  let xjg = Number(data.xjg);
  let njg = Number(data.njg);
  let num = [(nn * xjg) / (xn * njg)]
  num = num.toFixed(2);
  if (isNaN(num)) return 0;
  return num;
};
