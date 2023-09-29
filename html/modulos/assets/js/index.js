import { botao1 } from "./botao1.js";
import { botao2 } from "./botao2.js";
import { botao3 } from "./botao3.js";
import { botao4 } from "./botao4.js";

const bnt1 = document.querySelector("#bnt-1")
const bnt2 = document.querySelector("#bnt-2")
const bnt3 = document.querySelector("#bnt-3")
const btn4 = document.querySelector("#btn-4")

bnt1.addEventListener("click", botao1)
bnt2.addEventListener("click", botao2)
bnt3.addEventListener("click", botao3)
btn4.addEventListener("click", botao4)


