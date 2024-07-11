AOS.init();

const dataDoJogo = new Date("2024-08-14T21:30:00");
const timeStampDoJogo = dataDoJogo.getTime();

const contaAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOJogo = timeStampDoJogo - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMS = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diasAteOEvento = Math.floor(distanciaAteOJogo / diaEmMs);
  const horasAteOEvento = Math.floor((distanciaAteOJogo % diaEmMs) / horaEmMS);
  const minutoAteOEvento = Math.floor((distanciaAteOJogo % horaEmMS) / minutoEmMs);
  const segundoAteOEvento = Math.floor((distanciaAteOJogo % minutoEmMs) / 1000);

  document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutoAteOEvento}m ${segundoAteOEvento}s`;

  if (distanciaAteOJogo < 0) {
    clearInterval(contaAsHoras);
    document.getElementById("contador").innerHTML = `Ingressos esgotados`;
  }
}, 1000);
