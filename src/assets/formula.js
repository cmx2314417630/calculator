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
  let R = Number(data.txhxnsdnd/data.txqxnsdnd);
  let T = Number(data.txsj);
  let W = Number(data.txhtz);
  let UF = Number(data.txcll);
  let num = 0;
  // -ln(R-0.03)+((4-3.5*R)*UF/透析后体重）
  num = -Math.log(R - 0.03) + ((4 - 3.5 * R) * UF) / W;
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
  let num = [(nn * xjg) / (xn * njg)] * 100;
  num = num.toFixed(2);
  if (isNaN(num)) return 0;
  return num + "%";
};
// 蛋白质摄入量（DPI）
// 尿尿素氮量（UUN） 体重(kg)
// DPI(g/24h) = 6.25*(UUN+0.031*体重)
export const DPIFormula = (data) => {
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
  let num = BUN / 7.1 / (SCR / 88.4);
  num = num.toFixed(2);
  if (isNaN(num)) return 0;
  return num;
};
// 肾小球滤过率（MDRD）
// 年龄(age) 体重（kg） 血肌酐(scr)
export const MDRDFormula = (data) => {
  let age = Number(data.age);
  let Scr = Number(data.xjg);
  let num = 186 * Scr - 1.154 * age - 0.203 * 0.742;
  num = num.toFixed(2);
  if (isNaN(num)) return 0;
  return num;
};
// CKD-EPI（肌酐）
export const CKDEPIFormula = (data) => {
  let k;
  let a;
  if (data.sex == 1) {
    k = 0.9;
    a = -0.302;
  } else {
    k = 0.7;
    a = -0.241;
  }
  let age = Number(data.age);
  let Scr = Number(data.xqjg);
  let min = Math.min(Scr / k, 1);
  let max = Math.max(Scr / k, 1);
  let num =
    142 *
    Math.pow(min, a) *
    Math.pow(max, -1.2) *
    Math.pow(0.9938, age) *
    1.012;
  num = num.toFixed(2);
  if (isNaN(num)) return 0;
  return num;
};
// 残肾尿素清除率（RRUC）
export const RRUCFormula = (data) => {
  let nns = Number(data.nns); //尿尿素
  let nl = Number(data.nl); //尿量
  let nysjqssxns = Number(data.nysjqssxns); //尿液收集起始时血尿素
  let nysjjssxns = Number(data.nysjjssxns); //尿液收集结束时血尿素
  let sj = Number(data.sj); //时间
  let num = (nns * nl) / (nysjqssxns * 0.25 + nysjjssxns * 0.75 * sj);
  num = num.toFixed(2);
  if (isNaN(num)) return 0;
  return num;
};
// 腹透Ccr（PDCcr）
export const PDCcrFormula = (data) => {
  let xjg = Number(data.xjg); //血肌酐浓度
  let txyxzjg = Number(data.txyxzjg); //腹透液肌浓度
  let ftyylzl = Number(data.ftyylzl); //24h腹透液出量
  let a = (txyxzjg / xjg) * ftyylzl;
  let njg = Number(data.njg); //尿肌酐浓度
  let nl24h = Number(data.nl24h); //24h尿量
  let b = (njg / xjg) * nl24h;
  console.log(xjg, txyxzjg, ftyylzl, a, njg, nl24h, b);
  let num = (a + b) * 7;
  num = num.toFixed(2);
  if (isNaN(num)) return 0;
  return num;
};
// 腹透-Kt/V（PD-Kt/V）
export const ftKTVFormula = (data) => {
  let k;
  if (data.sex == 1) {
    k = 0.6;
  } else {
    k = 0.55;
  }
  let ftyzl24h = Number(data.ftyzl24h); //24h透析液排出量
  let ftyzns = Number(data.ftyzns); //腹透液BUN
  let xqns = Number(data.xqns); //血BUN
  let mzftts = Number(data.mzftts); //每周透析天数
  let weight = Number(data.nl24h); //体重
  let num = (((ftyzl24h * ftyzns) / xqns) * mzftts) / (weight * k);
  num = num.toFixed(2);
  if (isNaN(num)) return 0;
  return num;
};
// nPNA-透析前
export const nPNAFormula = (data) => {
  let uun = Number(data.nnsd); //尿尿素氮
  let weight = Number(data.weight); //体重
  let num = uun / 6.25 / (weight * 0.00718);
  num = num.toFixed(2);
  if (isNaN(num)) return 0;
  return num;
};
