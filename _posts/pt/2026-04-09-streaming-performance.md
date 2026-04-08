---
layout: post
title: Definir o desempenho do controle remoto
lang: pt
tags: 
  - "Streaming"
  - "Controle remoto"
  - "Desempenho"
  - "FPS"
  - "Teamviewer"
summary: A palavra «desempenho» muda de sentido conforme o campo. No controle remoto, qualidade de imagem, latência e taxa de atualização se entrelaçam. A diferença entre expectativa e realidade — vivida na Indonésia e ao usar soluções famosas por desempenho — deu início ao projeto NovaLINK. Nenhum software serve perfeitamente a todos os ambientes, mas continuamos testes e desenvolvimento para atingir o desempenho que buscamos.

---

**« Bom desempenho »** significa coisas completamente diferentes conforme o contexto. Em jogos: FPS e resposta; em bancos de dados: vazão e estabilidade; em equipamentos de rede: capacidade de processamento e latência de pacotes. Sem definição específica ao domínio, expectativa e resultado se desalinham. Se ao adotar uma solução você só escrever «desempenho» em uma linha, depois fica difícil definir responsabilidades. O mesmo vale para controle remoto e streaming de tela: há sobreposição com OTT ou videoconferência pela transmissão em tempo real, mas exigir resposta imediata do mouse e do teclado impõe carga que o streaming «só visual» não tem. Só fluidez não basta; é preciso avaliar também a resposta dos controles. Aqui o desempenho não é um único número, mas vários fatores ao mesmo tempo.

Fatores comuns: qualidade da tela (compressão, bitrate, cor); latência entre entrada e retorno da imagem; taxa de atualização; estratégia adaptativa quando a banda cai; resiliência a perda de pacotes; comportamento em baixa banda; carga de CPU/GPU em cliente e servidor — juntos formam o «desempenho global». Um único benchmark não basta.

Outro ponto: **«produto famoso e caro»** e **«desempenho percebido no meu trabalho»** nem sempre coincidem. Participação de mercado e listas de recursos ajudam, mas cada empresa deve validar na sua rede e fluxos. Por isso preferimos transparência sobre condições e medições a debates abstratos de superioridade. «Bom desempenho» não é só uma linha no ranking, mas o quanto enfrentamos honestamente as restrições.

Implantamos ERP para uma empresa em Purbalingga (Indonésia). A Indonésia cresce rápido no mobile, mas o gap capital/interior é grande. O internet do cliente variava muito no dia, quedas frequentes — difícil copiar processos que assumem linha estável. Às vezes logs não bastavam; precisávamos reproduzir vendo a tela. Sem visitas sempre possíveis, verificávamos configurações, reproduzíamos erros e treinávamos remotamente. Sessão lenta dificulta separar rede de aplicação. Escolhemos solução de reputação em controle remoto: Teamviewer, forte em suporte remoto.

[![](
https://haninpost.com/wp-content/uploads/2024/12/%E2%96%B2%EC%95%84%EC%84%B8%EC%95%88ASEAN-%EC%97%AD%EB%82%B4-%EC%A3%BC%EB%B3%80%EA%B5%AD-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9D%B8%ED%84%B0%EB%84%B7-%EC%86%8D%EB%8F%841.jpg)Velocidade de internet móvel na Indonésia ainda atrás de outros países – Haninpost](https://haninpost.com/archives/103545)

A solução da Teamviewer é forte em escopo, ecossistema e suporte empresarial, mas a licença é cara. Esperávamos pelo menos resposta e nitidez na tela remota. Na prática, a experiência muitas vezes ficou aquém: latência acumulada em linha ruim, tela travando ou embaçada; até abrir menus e preencher formulários podia parecer lento. Isso não nega o valor técnico global — funções validadas, experiência operacional, plataformas e gestão por equipes continuam valiosos. Mas no nosso ambiente houve distância entre «caro = rápido e suave» e o que sentimos — gatilho para novo projeto. Partimos de: «Por que tão lento nas nossas condições?» **Reforça: bom produto + ambiente adverso = percepção diferente; quanto pior a rede, mais o software deve agir com inteligência dentro dos limites da linha e do terminal.**

![]({{site.baseurl}}/public/post_imgs/260409/teamviewer_plan.jpg)

Daí o NovaLINK. Não é «mais um programa»: definimos e medimos desempenho pelo que importa em campo — qualidade, latência, taxa de atualização, comportamento em rede difícil, uso de recursos. Pipeline de streaming e estratégias conforme mudança de tela ligam-se a isso. Antes de novas funções, verificamos se o caminho principal atende nossos critérios. Testes em vários cenários, padrões próximos do uso real para achar gargalos. Cruzamos números e sensação: mesmo com menos tráfego na mesma resolução, frequência de quebras em links com perda. Ambiente de teste fixo e medições repetidas para separar melhoria real de acaso. Objetivo: padrão que nos convença, não slogan. Prioridades dependem do uso — definir juntos primeiro.

<video autoplay loop muted playsinline width="100%" poster="{{site.baseurl}}/public/post_imgs/260409/teamviewer_plan.jpg" style="outline:none;pointer-events:none;" tabindex="-1">
  <source src="https://novalinkstorage.blob.core.windows.net/common/video_demo/compare_teamviewer_frame_drop.mp4" type="video/mp4">
  É necessário um navegador com suporte a mp4 para ver o vídeo.
</video>

- **Teste comparativo de queda de quadros no mesmo ambiente**
  - SO: Windows 10, 32 bits
  - CPU: Intel(R) Celeron(R) CPU J1900 @ 1.99GHz
  - RAM: 4GB
  - Fonte de vídeo: https://youtu.be/KxMqSz8qVSg
  - Caso: reprodução no Host, captura no Client

Com franqueza, não há software de controle remoto «ótimo» para toda rede, hardware e setor — variáveis demais: linha, firewall, posição do relay, especificações, outros apps. A mesma solução pode rápida na intranet e frustrante para filial no exterior. Não dá para resumir em «produto ruim», mas para o usuário o resultado é o mesmo: lentidão e estresse. Ainda assim desenvolvemos o NovaLINK com metas claras: menos latência desnecessária, qualidade legível, utilidade prática em condições de campo. Não «número um em todo lugar», mas ampliar o alcance que assumimos e melhorar de forma consistente. Sem definir esse alcance, não julgamos progresso. Definir e validar o desempenho ancora a direção do produto.

![NovaLINK TestSuite]({{site.baseurl}}/public/post_imgs/260409/testsuite.png)

Continuaremos refinando critérios com feedback e medições reais. Quanto mais transparente a definição, mais honesta a base para quem avalia adoção. Neste blog: métodos, interpretação e tentativa e erro em detalhe.
