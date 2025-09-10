<script>
// TinyTools i18n — alternância PT/EN simples (por pathname)
// guarda preferência em localStorage ("tt_lang" = "pt" | "en")

(function(){
  const PAGES = {
    "/": {
      pt: {
        title: "TinyTools — QR • Texto • Datas • Conversores • Calculadoras",
        desc: "Coleção de ferramentas online gratuitas: QR Code, contadores, conversores, calculadoras e utilitários rápidos. Tudo no navegador.",
        h1:   "TinyTools"
      },
      en: {
        title: "TinyTools — QR • Text • Dates • Converters • Calculators",
        desc: "Free online tools: QR Code, counters, converters, calculators and quick utilities. All in your browser.",
        h1:   "TinyTools"
      }
    },
    "/uuid.html": {
      pt: { title: "Gerador de UUID Online — UUID v4 Único e Grátis",
            desc:  "Gere UUID v4 online de forma instantânea e gratuita. Identificadores únicos para programação, bases de dados e projetos. Sem registo.",
            h1:    "Gerador de UUID Online" },
      en: { title: "UUID Generator — Free Online UUID v4",
            desc:  "Generate UUID v4 instantly for free. Unique identifiers for programming, databases and projects. No sign-up.",
            h1:    "UUID Generator" }
    },
    "/base64.html": {
      pt: { title:"Conversor Base64 Online — Texto ↔ Base64 Grátis",
            desc:"Converta texto para Base64 e Base64 para texto. Rápido, gratuito e direto no navegador.",
            h1:"Conversor Base64 Online" },
      en: { title:"Base64 Converter — Text ↔ Base64",
            desc:"Convert text to/from Base64 in your browser. Fast and free.",
            h1:"Base64 Converter" }
    },
    "/idade.html": {
      pt: { title:"Calculadora de Idade Online — Quantos anos tenho?",
            desc:"Calcule a sua idade exata em anos, meses e dias. Rápido, gratuito e sem registo.",
            h1:"Calculadora de Idade Online" },
      en: { title:"Age Calculator — How old am I?",
            desc:"Calculate your exact age in years, months and days. Fast and free.",
            h1:"Age Calculator" }
    },
    "/unidades.html": {
      pt:{title:"Conversor de Unidades Online — Metro, KM, Milha, Pé",
          desc:"Converta unidades de comprimento: metros, quilómetros, milhas e pés. Rápido e gratuito.",
          h1:"Conversor de Unidades (Comprimento)"},
      en:{title:"Unit Converter — Meter, KM, Mile, Foot",
          desc:"Convert length units: meters, kilometers, miles and feet. Fast and free.",
          h1:"Unit Converter (Length)"}
    },
    "/senha.html": {
      pt:{title:"Gerador de Senhas Seguras — Online e Grátis",
          desc:"Crie palavras-passe fortes com letras, números e símbolos. Define o tamanho e copia com um clique.",
          h1:"Gerador de Senhas Seguras"},
      en:{title:"Strong Password Generator — Free Online",
          desc:"Create strong passwords with letters, numbers and symbols. Choose length and copy in one click.",
          h1:"Strong Password Generator"}
    },
    "/porcentagem.html": {
      pt:{title:"Calculadora de Porcentagem Online — % Rápido",
          desc:"Calcule percentagens: quanto é X% de Y, aumento/desconto e variação entre dois valores.",
          h1:"Calculadora de Porcentagem"},
      en:{title:"Percentage Calculator — Online",
          desc:"Calculate percentages: X% of Y, increase/discount and change between two values.",
          h1:"Percentage Calculator"}
    },
    "/imc.html": {
      pt:{title:"Calculadora de IMC — Índice de Massa Corporal",
          desc:"Calcule o seu IMC com peso e altura. Veja a classificação automática.",
          h1:"Calculadora de IMC"},
      en:{title:"BMI Calculator — Body Mass Index",
          desc:"Calculate your BMI from weight and height. See automatic classification.",
          h1:"BMI Calculator"}
    },
    "/fuso-horario.html": {
      pt:{title:"Conversor de Fuso Horário — UTC, Lisboa, Nova Iorque, Tóquio",
          desc:"Converta datas/horas para UTC, Europa/Lisbon, America/New_York e Asia/Tokyo diretamente no navegador.",
          h1:"Conversor de Fuso Horário"},
      en:{title:"Time Zone Converter — UTC, Lisbon, New York, Tokyo",
          desc:"Convert dates/times to UTC, Europe/Lisbon, America/New_York and Asia/Tokyo in your browser.",
          h1:"Time Zone Converter"}
    },
    "/texto-case.html": {
      pt:{title:"Transformar Texto — Maiúsculas, Minúsculas, Título, Slug",
          desc:"Converta texto para MAIÚSCULAS, minúsculas, Título, remova acentos e gere slug.",
          h1:"Transformar Texto"},
      en:{title:"Text Transformer — Uppercase, Lowercase, Title, Slug",
          desc:"Convert text to UPPERCASE, lowercase, Title Case, remove accents and create a slug.",
          h1:"Text Transformer"}
    },
    "/lorem.html": {
      pt:{title:"Gerador Lorem Ipsum — Texto Fictício",
          desc:"Gere parágrafos ou frases de Lorem Ipsum para maquetes e design.",
          h1:"Gerador Lorem Ipsum"},
      en:{title:"Lorem Ipsum Generator — Placeholder Text",
          desc:"Generate Lorem Ipsum paragraphs or sentences for mockups and design.",
          h1:"Lorem Ipsum Generator"}
    },
    "/url.html": {
      pt:{title:"URL Encoder/Decoder — Codificar e Descodificar URL",
          desc:"Transforme texto para URL encoded e volte ao normal. Útil para parâmetros e APIs.",
          h1:"URL Encoder/Decoder"},
      en:{title:"URL Encoder/Decoder — Encode & Decode",
          desc:"Convert text to/from URL encoding. Useful for parameters and APIs.",
          h1:"URL Encoder/Decoder"}
    },
    "/json.html": {
      pt:{title:"Formatar e Validar JSON — Online",
          desc:"Cole JSON, valide e formate com indentação. Também pode minificar. Tudo no navegador.",
          h1:"Validador e Formatador JSON"},
      en:{title:"JSON Formatter & Validator — Online",
          desc:"Paste JSON, validate and pretty-print. You can also minify. All in the browser.",
          h1:"JSON Formatter & Validator"}
    },
    "/epoch.html": {
      pt:{title:"Epoch/Unix ↔ Data/Hora — Conversor Online",
          desc:"Converta timestamps Unix (segundos) para data/hora legível e vice-versa.",
          h1:"Conversor Epoch/Unix ↔ Data"},
      en:{title:"Epoch/Unix ↔ Date/Time — Converter",
          desc:"Convert Unix timestamps (seconds) to human-readable date/time and back.",
          h1:"Epoch/Unix ↔ Date Converter"}
    },
    "/temperatura.html": {
      pt:{title:"Conversor de Temperatura — Celsius, Fahrenheit e Kelvin",
          desc:"Converta temperaturas entre °C, °F e K. Simples, rápido e gratuito.",
          h1:"Conversor de Temperatura"},
      en:{title:"Temperature Converter — Celsius, Fahrenheit, Kelvin",
          desc:"Convert temperatures between °C, °F and K. Simple and fast.",
          h1:"Temperature Converter"}
    },
    "/regra3.html": {
      pt:{title:"Regra de 3 — Calculadora Online",
          desc:"Calcule rapidamente proporções com a regra de 3 simples.",
          h1:"Regra de 3"},
      en:{title:"Rule of Three — Proportion Calculator",
          desc:"Quickly compute proportions using the simple rule of three.",
          h1:"Rule of Three"}
    },
    "/juros.html": {
      pt:{title:"Calculadora de Juros Simples — Online",
          desc:"Calcule montante, capital, taxa ou tempo com juros simples.",
          h1:"Juros Simples"},
      en:{title:"Simple Interest Calculator — Online",
          desc:"Calculate amount, principal, rate or time with simple interest.",
          h1:"Simple Interest"}
    },
    "/media.html": {
      pt:{title:"Calculadora de Média Aritmética — Online",
          desc:"Calcule a média aritmética de números separados por vírgula.",
          h1:"Média Aritmética"},
      en:{title:"Mean/Average Calculator — Online",
          desc:"Compute the arithmetic mean of comma-separated numbers.",
          h1:"Average (Mean) Calculator"}
    },
    "/diferenca-datas.html": {
      pt:{title:"Diferença entre Datas — Dias, Horas, Minutos",
          desc:"Calcule a diferença entre duas datas em dias, horas e minutos.",
          h1:"Diferença entre Datas"},
      en:{title:"Date Difference — Days, Hours, Minutes",
          desc:"Calculate the difference between two dates in days, hours and minutes.",
          h1:"Date Difference"}
    },
    "/horas.html": {
      pt:{title:"Somar/Subtrair Horas — Calculadora Online",
          desc:"Some ou subtraia horas e minutos (HH:MM).",
          h1:"Somar/Subtrair Horas"},
      en:{title:"Add/Subtract Time — Online",
          desc:"Add or subtract hours and minutes (HH:MM).",
          h1:"Add/Subtract Time"}
    },
    "/binario.html": {
      pt:{title:"Conversor Binário, Decimal e Hexadecimal",
          desc:"Converta números entre bases 2, 10 e 16.",
          h1:"Conversor Binário/Decimal/Hex"},
      en:{title:"Binary / Decimal / Hex Converter",
          desc:"Convert numbers between bases 2, 10 and 16.",
          h1:"Binary/Decimal/Hex Converter"}
    },
    "/hash.html": {
      pt:{title:"Gerar Hash — MD5 e SHA-256",
          desc:"Calcule hashes MD5 ou SHA-256 de qualquer texto diretamente no navegador.",
          h1:"Gerar Hash (MD5 / SHA-256)"},
      en:{title:"Generate Hash — MD5 & SHA-256",
          desc:"Compute MD5 or SHA-256 hashes of any text in your browser.",
          h1:"Generate Hash (MD5 / SHA-256)"}
    },
    "/csv-json.html": {
      pt:{title:"CSV ↔ JSON — Conversor Online",
          desc:"Converta entre CSV e JSON no navegador. Simples e gratuito.",
          h1:"CSV ↔ JSON"},
      en:{title:"CSV ↔ JSON — Online Converter",
          desc:"Convert between CSV and JSON in your browser. Simple and free.",
          h1:"CSV ↔ JSON"}
    },
    "/cores.html": {
      pt:{title:"Conversor de Cores — HEX, RGB e HSL",
          desc:"Converta cores entre HEX, RGB e HSL e visualize em tempo real.",
          h1:"Conversor de Cores"},
      en:{title:"Color Converter — HEX, RGB & HSL",
          desc:"Convert colors between HEX, RGB and HSL and preview in real time.",
          h1:"Color Converter"}
    },
    "/random.html": {
      pt:{title:"Gerador de Números Aleatórios — Online",
          desc:"Gere números aleatórios dentro de um intervalo, com opção de lista sem repetição.",
          h1:"Gerador de Números Aleatórios"},
      en:{title:"Random Number Generator — Online",
          desc:"Generate random numbers within a range; optional unique list.",
          h1:"Random Number Generator"}
    },
    "/remover-duplicados.html": {
      pt:{title:"Remover Linhas Duplicadas — Ferramenta Online",
          desc:"Cole uma lista e remova entradas repetidas em segundos.",
          h1:"Remover Linhas Duplicadas"},
      en:{title:"Remove Duplicate Lines — Online Tool",
          desc:"Paste a list and remove duplicates in seconds.",
          h1:"Remove Duplicate Lines"}
    },
    "/ordenar-lista.html": {
      pt:{title:"Ordenar Lista — A→Z, Z→A e Numérico",
          desc:"Ordene listas de texto por ordem alfabética ou numérica.",
          h1:"Ordenar Lista"},
      en:{title:"Sort List — A→Z, Z→A & Numeric",
          desc:"Sort text lists in alphabetical or numeric order.",
          h1:"Sort List"}
    },
    "/extrair-emails.html": {
      pt:{title:"Extrair Emails — Ferramenta Online",
          desc:"Cole um texto e extraia todos os endereços de email encontrados.",
          h1:"Extrair Emails"},
      en:{title:"Extract Emails — Online Tool",
          desc:"Paste any text and extract all email addresses found.",
          h1:"Extract Emails"}
    },
    "/jwt-decode.html": {
      pt:{title:"Decodificar JWT — Cabeçalho e Payload",
          desc:"Veja o header e payload de um token JWT. (Não verifica assinatura).",
          h1:"Decodificar JWT"},
      en:{title:"Decode JWT — Header & Payload",
          desc:"View the header and payload of a JWT token. (Signature not verified).",
          h1:"Decode JWT"}
    }
  };

  // mapeamento simples de rótulos comuns (botões/labels) -> troca direta
  const COMMON = {
    pt2en: {
      "Gerar":"Generate","Copiar":"Copy","Converter":"Convert","Calcular":"Calculate","Limpar":"Clear",
      "Usar agora":"Use now","Copiar ISO":"Copy ISO","Descarregar PNG":"Download PNG",
      "Aumentar":"Increase","Diminuir":"Decrease","Extrair":"Extract","Remover":"Remove","Ordenar":"Sort"
    },
    en2pt: {
      "Generate":"Gerar","Copy":"Copiar","Convert":"Converter","Calculate":"Calcular","Clear":"Limpar",
      "Use now":"Usar agora","Copy ISO":"Copiar ISO","Download PNG":"Descarregar PNG",
      "Increase":"Aumentar","Decrease":"Diminuir","Extract":"Extrair","Remove":"Remover","Sort":"Ordenar"
    }
  };

  function applyLang(lang){
    const path = (location.pathname.replace(/\/+$/,'')||'/');
    const dict = PAGES[path] && PAGES[path][lang];

    // title + meta description
    if (dict){
      if (dict.title) document.title = dict.title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta && dict.desc) meta.setAttribute('content', dict.desc);
      // H1 (o primeiro da página)
      const h1 = document.querySelector('h1');
      if (h1 && dict.h1) h1.textContent = dict.h1;
    }

    // troca de rótulos comuns (botões/labels) pelo texto exato
    const map = (lang==="en") ? COMMON.pt2en : COMMON.en2pt;
    const swap = (el)=>{
      const txt = el.textContent && el.textContent.trim();
      if (txt && map[txt]) el.textContent = map[txt];
      // placeholders típicos
      if (el.placeholder && map[el.placeholder]) el.placeholder = map[el.placeholder];
    };
    document.querySelectorAll('button,label,a,span,div,strong,em,input,textarea').forEach(swap);

    // guarda preferência
    try{ localStorage.setItem("tt_lang", lang); }catch(e){}
    // estado visual do botão
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = (lang==="en" ? "EN" : "PT");
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'pt');
  }

  // expõe no window
  window.TT_LANG = {
    current: (localStorage.getItem("tt_lang") || "pt"),
    set: function(lang){ applyLang(lang); this.current = lang; },
    toggle: function(){ this.set(this.current==="pt"?"en":"pt"); }
  };

  // auto-aplicar após DOM pronto
  document.addEventListener('DOMContentLoaded', function(){
    applyLang(window.TT_LANG.current);
    // ligar botão se existir
    const btn = document.getElementById('langToggle');
    if (btn && !btn.dataset.bound){
      btn.dataset.bound = "1";
      btn.addEventListener('click', ()=>window.TT_LANG.toggle());
    }
  });
})();
</script>
