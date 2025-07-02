const axios = require("axios");

setInterval(async () => {
  try {
    await axios.get("https://4293a4dc-0de5-44ca-b93c-1b85f53c1e72-00-3tgvlelsx57gr.riker.replit.dev/");
    console.log("Ping enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar ping:", error.message);
  }
}, 60000); // a cada 60 segundos
