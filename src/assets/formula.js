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
  let num = [(nn * xjg) / (xn * njg)];
  num = num.toFixed(2);
  if (isNaN(num)) return 0;
  return num;
};
// 蛋白质摄入量（DPI）
// 尿尿素氮量（UUN） 体重(kg)
// DPI(g/24h) = 6.25*(UUN+0.031*体重)
export const MDRDFormula = (data) => {
  let kg = Number(data.kg);
  let UUN = Number(data.UUN);
  let num = 6.25 * (UUN + 0.031 * kg);
  num = num.toFixed(2);
  if (isNaN(num)) return 0;
  return num;
};
// 残余肾功能（RRF）
// 透析间期尿量（IDUV）尿液尿素浓度（UUC） 透析间期（ID Period） 平均尿素氮含量（BUN）
// RRF = (IDUV * UUC) / (ID Period * Mean BUN)
export const RRFFormula = (data) => {
  let IDUV = Number(data.IDUV);
  let UUC = Number(data.UUC);
  let Period = Number(data.Period);
  let BUN = Number(data.BUN);
  let num = (IDUV * UUC) / (Period * BUN);
  num = num.toFixed(2);
  if (isNaN(num)) return 0;
  return num;
};
// 血清尿素氮肌酐比（BUN/Cr）
// 血尿素氮（BUN） 血肌酐（SCR）
// RRF = (BUN/7.1)/(血肌酐/88.4)
export const BUNFormula = (data) => {
    let SCR = Number(data.SCR);
    let BUN = Number(data.BUN);
    let num = (BUN/7.1)/(SCR/88.4)
    num = num.toFixed(2);
    if (isNaN(num)) return 0;
    return num;
  };
  