<script lang="ts">
  const maleAppUrl = import.meta.env.PUBLIC_MALE_APP_URL || 'https://theapeshape.com';
  const femaleAppUrl = import.meta.env.PUBLIC_FEMALE_APP_URL || 'https://donna.theapeshape.com';

  let isWaitlistOpen = false;
  let waitlistSubmitted = false;
  let waitlistName = '';
  let waitlistEmail = '';
  let gdprConsent = false;

  function openWaitlistModal() {
    isWaitlistOpen = true;
    waitlistSubmitted = false;
  }

  function closeWaitlistModal() {
    isWaitlistOpen = false;
  }

  function submitWaitlist(event: SubmitEvent) {
    event.preventDefault();

    if (!waitlistName.trim() || !waitlistEmail.trim() || !gdprConsent) {
      return;
    }

    waitlistSubmitted = true;
    waitlistName = '';
    waitlistEmail = '';
    gdprConsent = false;
  }

  function handleModalKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && isWaitlistOpen) {
      closeWaitlistModal();
    }
  }

  function handleModalBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      closeWaitlistModal();
    }
  }

  const features = [
    {
      title: 'Allenamenti personalizzati',
      text: 'Scegli gli esercizi che preferisci, noi costruiamo il percorso ideale.',
      icon: ['M5 9v6', 'M8 7v10', 'M16 7v10', 'M19 9v6', 'M8 12h8']
    },
    {
      title: 'Nutrizione su misura',
      text: 'Gestisci i tuoi macro o affidati ad uno dei nostri nutrizionisti.',
      icon: ['M6 3v18', 'M3 3v6a3 3 0 0 0 6 0V3', 'M14 3v18', 'M14 3c3 2 4.5 4.7 4.5 8v1H14']
    },
    {
      title: 'AI Coach 24/7',
      text: 'Un chatbot dedicato, risponde sulla base di quello che ha imparato stando vicino a noi.',
      icon: ['M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z', 'M8 11h.01', 'M12 11h.01', 'M16 11h.01']
    },
    {
      title: 'Risultati misurabili',
      text: 'Monitora ogni progresso attraverso dati, statistiche e grafici intuitivi.',
      icon: ['M4 19h16', 'M7 16v-4', 'M12 16V9', 'M17 16V7', 'M6 10l4-4 4 3 4-6']
    }
  ];

  const trust = [
    {
      title: 'Metodo The Ape Shape',
      text: 'Allenamento e alimentazione integrati in un unico percorso.',
      icon: 'ape'
    },
    {
      title: 'Assistenza intelligente',
      text: 'Risposte rapide alle tue domande quotidiane.',
      icon: [
        'M4.5 13v-1a7.5 7.5 0 0 1 15 0v1',
        'M6.5 12H5a2 2 0 0 0-2 2v2.25a2 2 0 0 0 2 2h1.5V12Z',
        'M17.5 12H19a2 2 0 0 1 2 2v2.25a2 2 0 0 1-2 2h-1.5V12Z',
        'M17.5 18.25a4 4 0 0 1-4 4h-2',
        'M9 14.5h.01',
        'M12 14.5h.01',
        'M15 14.5h.01'
      ]
    },
    {
      title: 'Fitup community',
      text: 'Condividi il tuo percorso con chi ha il tuo stesso obiettivo.',
      icon: [
        'M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
        'M5.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
        'M18.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
        'M6.5 21a5.5 5.5 0 0 1 11 0',
        'M2 18.5a4.5 4.5 0 0 1 6-4.25',
        'M16 14.25a4.5 4.5 0 0 1 6 4.25'
      ]
    },
    {
      title: 'Privacy garantita',
      text: 'I tuoi dati e i tuoi progressi restano sempre protetti.',
      icon: [
        'M7 10.5V7a5 5 0 0 1 10 0v3.5',
        'M5.5 10.5h13A2.5 2.5 0 0 1 21 13v6a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19v-6a2.5 2.5 0 0 1 2.5-2.5Z',
        'M12 15.25h.01',
        'M12 16.5V18'
      ]
    }
  ];
</script>

<svelte:head>
  <meta property="og:title" content="FITUP Coaching System | The Ape Shape" />
  <meta
    property="og:description"
    content="Allenati con un sistema che si adatta a te. Scegli percorso uomo o donna."
  />
</svelte:head>

<svelte:window onkeydown={handleModalKeydown} />

<main class="relative isolate min-h-screen overflow-hidden bg-ape-dark text-white">
  <div class="noise pointer-events-none absolute inset-0 -z-20"></div>
  <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60rem] bg-[radial-gradient(circle_at_center,rgba(139,209,10,0.15),transparent_40rem)]"></div>

  <!-- ─── HERO ─────────────────────────────────────────── -->
  <section class="relative mx-auto flex w-full flex-col px-4 pb-8 pt-8 sm:px-6 sm:pt-12 lg:min-h-screen lg:px-10 2xl:px-14">

    <!-- Header -->
    <header class="relative z-20 flex flex-col items-center text-center">
      <img class="motion-reveal h-10 w-auto sm:h-12" src="/fitup-logo.png" alt="FITUP" />
      <p class="motion-reveal mt-2 text-xs font-black uppercase tracking-[0.52em] text-white/70 sm:text-sm" style="--delay: 80ms">Coaching System</p>
      <div class="motion-reveal mt-4 flex flex-col items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-ape-green sm:flex-row sm:text-xs" style="--delay: 140ms">
        <span>Powered by</span>
        <img class="h-7 w-auto opacity-95" src="/theApeShape_LONG_white.svg" alt="The Ape Shape" />
      </div>

      <h1 class="mt-7 max-w-[22rem] font-display text-[3.15rem] uppercase leading-[0.88] tracking-wide sm:mt-8 sm:max-w-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
        <span class="motion-title-line block" style="--delay: 210ms">Allenati con</span>
        <span class="motion-title-line block" style="--delay: 290ms">un sistema</span>
        <span class="motion-title-line block text-ape-green sm:hidden" style="--delay: 370ms">che si adatta</span>
        <span class="motion-title-line block text-ape-green sm:hidden" style="--delay: 450ms">a te.</span>
        <span class="motion-title-line hidden text-ape-green sm:block" style="--delay: 370ms">che si adatta a te.</span>
      </h1>
      <p class="motion-reveal mt-5 max-w-[20rem] text-sm font-medium leading-6 text-white/75 sm:mt-6 sm:max-w-xl sm:text-base" style="--delay: 520ms">
        Un unico sistema che ti accompagna nel percorso di trasformazione fisica attraverso allenamento, nutrizione, supporto dedicato e analisi costante dei tuoi progressi, al costo di integrati nella tua esperienza
        <span class="font-semibold text-ape-green">1 euro al giorno</span>.
      </p>

      <div class="mobile-athlete-stage motion-scale-in relative mt-7 h-72 w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 shadow-[0_0_42px_rgba(139,209,10,0.12)] lg:hidden" style="--delay: 620ms">
        <div class="absolute inset-x-6 bottom-0 h-28 rounded-full bg-ape-green/20 blur-3xl"></div>
        <img
          class="absolute top-0 left-[-4%] h-[118%] w-auto max-w-none object-contain object-bottom opacity-95"
          src="/athlete-male.png"
          alt="Atleta maschile"
        />
        <img
          class="absolute top-0 right-[-4%] h-[118%] w-auto max-w-none object-contain object-bottom opacity-95"
          src="/athlete-female.png"
          alt="Atleta femminile"
        />
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ape-dark via-ape-dark/72 to-transparent"></div>
        <div class="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ape-dark to-transparent"></div>
        <div class="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ape-dark to-transparent"></div>
      </div>
    </header>

    <!-- Athletes + Features -->
    <div class="relative mt-7 flex flex-1 items-center pb-4 lg:mt-20">

      <!-- Male athlete -->
      <div
        class="pointer-events-none absolute -left-16 bottom-0 z-0 hidden h-[460px] w-[340px] sm:-left-10 sm:h-[540px] sm:w-[400px] lg:block lg:-left-24 lg:h-[620px] lg:w-[460px] xl:-left-36 xl:h-[700px] xl:w-[520px]"
        style="-webkit-mask-image:linear-gradient(to top,transparent 0%,black 18%);mask-image:linear-gradient(to top,transparent 0%,black 18%);"
      >
        <div
          class="h-full w-full"
          style="-webkit-mask-image:linear-gradient(to right,black 50%,transparent 100%);mask-image:linear-gradient(to right,black 50%,transparent 100%);"
        >
          <img
            class="h-full w-full object-contain object-bottom mix-blend-lighten opacity-60 sm:opacity-75 md:opacity-90"
            src="/athlete-male.png"
            alt="Atleta maschile"
          />
        </div>
      </div>

      <!-- Female athlete -->
      <div
        class="pointer-events-none absolute -right-16 bottom-0 z-0 hidden h-[460px] w-[340px] sm:-right-10 sm:h-[540px] sm:w-[400px] lg:block lg:-right-24 lg:h-[620px] lg:w-[460px] xl:-right-36 xl:h-[700px] xl:w-[520px]"
        style="-webkit-mask-image:linear-gradient(to top,transparent 0%,black 18%);mask-image:linear-gradient(to top,transparent 0%,black 18%);"
      >
        <div
          class="h-full w-full"
          style="-webkit-mask-image:linear-gradient(to left,black 50%,transparent 100%);mask-image:linear-gradient(to left,black 50%,transparent 100%);"
        >
          <img
            class="h-full w-full object-contain object-bottom mix-blend-lighten opacity-60 sm:opacity-75 md:opacity-90"
            src="/athlete-female.png"
            alt="Atleta femminile"
          />
        </div>
      </div>

      <!-- Features centered between athletes -->
      <div class="relative z-10 mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
        {#each features as feature, index}
          <article class="feature-card motion-card flex items-center gap-4 rounded-[1.7rem] border border-white/10 bg-black/58 p-4 text-left shadow-[0_0_38px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:border-ape-green/50 hover:bg-black/60 sm:rounded-3xl sm:p-5" style={`--delay: ${720 + index * 140}ms; --feature-delay: ${index * 620}ms`}>
            <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ape-green/10 shadow-[0_0_32px_rgba(139,209,10,0.16)] ring-1 ring-ape-green/30 sm:h-16 sm:w-16">
              <svg
                class="h-7 w-7 text-ape-green sm:h-8 sm:w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                {#each feature.icon as path}
                  <path d={path} />
                {/each}
              </svg>
            </div>
            <div>
              <h3 class="text-sm font-black uppercase leading-tight tracking-wider text-white sm:text-base">{feature.title}</h3>
              <p class="mt-1.5 text-xs leading-relaxed text-white/58 sm:text-sm">{feature.text}</p>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <!-- ─── GENDER SELECTION ──────────────────────────────── -->
  <section id="percorsi" class="relative z-20 mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid gap-6 md:grid-cols-2">

      <!-- UOMO ─ active -->
      <a
        href={maleAppUrl}
        class="choice-card motion-card group relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-[2rem] bg-[#060806] transition duration-300 hover:-translate-y-1"
        style="--delay: 120ms"
      >
        <!-- Border + glow -->
        <div class="pointer-events-none absolute inset-0 z-20 rounded-[2rem] border-2 border-ape-green/65 shadow-[0_0_50px_rgba(139,209,10,0.20),inset_0_0_60px_rgba(139,209,10,0.05)] transition duration-300 group-hover:border-ape-green group-hover:shadow-[0_0_90px_rgba(139,209,10,0.38),inset_0_0_70px_rgba(139,209,10,0.08)]"></div>

        <!-- Athlete image (transparent PNG, floats on dark bg) -->
        <div class="absolute inset-0 flex items-end justify-center overflow-hidden">
          <img
            src="/athlete-male-V2.png"
            alt="Atleta maschile"
            class="relative z-10 h-[86%] w-auto max-w-none object-contain object-bottom transition duration-500 group-hover:scale-[1.04]"
          />
        </div>

        <!-- Bottom gradient fade -->
        <div class="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-56 bg-gradient-to-t from-[#060806] via-[#060806]/90 to-transparent"></div>
        <!-- Side vignette -->
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#060806]/50 via-transparent to-[#060806]/50"></div>

        <!-- Content -->
        <div class="relative z-30 p-8 pt-0">
          <div class="">
            <p class="font-display text-6xl uppercase tracking-wide sm:text-7xl">Uomo</p>
            <p class="mt-2 text-sm font-medium leading-relaxed text-white/65">
              Inizia ora il tuo percorso.<br />Trasforma il tuo impegno in risultati reali.
            </p>
            <div class="cta-shine mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-ape-green py-5 text-sm font-black uppercase tracking-[0.15em] text-black transition duration-300 group-hover:bg-ape-lime">
              Accedi ora <span aria-hidden="true">→</span>
            </div>
          </div>
        </div>
      </a>

      <!-- DONNA ─ coming soon -->
      <button
        type="button"
        onclick={openWaitlistModal}
        aria-haspopup="dialog"
        aria-controls="waitlist-modal"
        class="choice-card motion-card group relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-[2rem] bg-[#060806] transition duration-300 hover:-translate-y-1"
        style="--delay: 220ms"
      >
        <!-- Dim border -->
        <div class="pointer-events-none absolute inset-0 z-20 rounded-[2rem] border-2 border-white/10 transition duration-300 group-hover:border-white/20"></div>

        <!-- Coming soon badge -->
        <div class="absolute left-1/2 top-6 z-30 -translate-x-1/2">
          <span class="inline-flex items-center whitespace-nowrap rounded-full border border-ape-green/40 bg-black/70 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-ape-green backdrop-blur-sm">
            In arrivo a Settembre
          </span>
        </div>

        <!-- Athlete image: grayscale + dimmed -->
        <div class="absolute inset-0 overflow-hidden">
          <img
            src="/athlete-female-V2.png"
            alt=""
            aria-hidden="true"
            class="h-full w-full object-cover object-top grayscale opacity-35 transition duration-500 group-hover:opacity-45"
          />
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060806] via-[#060806]/65 to-[#060806]/25"></div>
        </div>

        <!-- Content -->
        <div class="relative z-30 p-8 pt-0">
          <div class="pt-6">
            <p class="font-display text-6xl uppercase tracking-wide text-white/35 sm:text-7xl">Donna</p>
            <p class="mt-2 text-sm font-medium leading-relaxed text-white/45">
              Lascia la tua email per avere<br />accesso prioritario.
            </p>
            <div class="cta-shine cta-shine-muted mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-white/10 py-5 text-sm font-black uppercase tracking-[0.15em] text-white/55 transition duration-300 group-hover:bg-white/15 group-hover:text-white/75">
              Iscriviti alla waitlist <span aria-hidden="true">→</span>
            </div>
          </div>
        </div>
      </button>

    </div>
  </section>

  <!-- ─── TRUST BADGES ─────────────────────────────────── -->
  <section class="mx-auto max-w-7xl border-b border-white/10 px-4 pb-12 pt-4 sm:px-6 lg:px-8">
    <div class="flex flex-col justify-center gap-10 sm:flex-row sm:flex-wrap lg:flex-nowrap lg:gap-8">
      {#each trust as item, index}
        <div class="motion-card flex items-center gap-4 lg:w-1/4" style={`--delay: ${index * 80}ms`}>
          {#if item.icon === 'ape'}
            <span class="h-11 w-11 shrink-0 bg-ape-green [mask:url('/theApeShape_white.svg')_center_top/7.75rem_auto_no-repeat] [-webkit-mask:url('/theApeShape_white.svg')_center_top/7.75rem_auto_no-repeat]" aria-hidden="true"></span>
          {:else}
            <svg
              class="h-11 w-11 shrink-0 text-ape-green"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.05"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              {#each item.icon as path}
                <path d={path} />
              {/each}
            </svg>
          {/if}
          <div>
            <span class="block text-xs font-black uppercase tracking-wider text-white">{item.title}</span>
            <span class="mt-1 block text-[11px] font-medium text-white/55">{item.text}</span>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- ─── FOOTER ───────────────────────────────────────── -->
  <footer class="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 py-10 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
    <div class="flex flex-col items-center lg:w-1/3 lg:items-start">
      <div class="flex items-center gap-3">
        <img class="h-16 w-auto" src="/theApeShape_white.svg" alt="The Ape Shape" />
      </div>
    </div>

    <div class="text-[11px] font-medium leading-relaxed text-white/45 lg:w-1/3 lg:text-center">
      FITUP Coaching System è disponibile nelle palestre FITUP.<br />
      Ci prendiamo cura del tuo percorso di allenamento e nutrizione. <br />
      <span class="text-ape-green">A partire da 1€ al giorno.</span>
    </div>

    <div class="flex flex-col items-center gap-5 lg:w-1/3 lg:items-end">
      <div class="flex items-center gap-6">
        <img class="h-7 w-auto" src="/fitup-logo.png" alt="FITUP" />
        <div class="flex gap-4 text-white/45">
          <span aria-label="Instagram" class="transition hover:text-white">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
            </svg>
          </span>
          <span aria-label="Facebook" class="transition hover:text-white">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </footer>

  {#if isWaitlistOpen}
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/78 px-4 py-6 backdrop-blur-md"
      role="presentation"
      onclick={handleModalBackdropClick}
    >
      <div
        id="waitlist-modal"
        class="motion-scale-in relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-ape-green/30 bg-[#070907] p-6 text-left shadow-[0_0_80px_rgba(139,209,10,0.24)] sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
      >
        <button
          type="button"
          class="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-xl leading-none text-white/70 transition hover:border-ape-green hover:text-white"
          aria-label="Chiudi modale"
          onclick={closeWaitlistModal}
        >
          ×
        </button>

        {#if waitlistSubmitted}
          <div class="py-8 text-center">
            <div class="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ape-green text-3xl font-black text-black">✓</div>
            <h2 id="waitlist-title" class="mt-6 font-display text-5xl uppercase leading-none text-white">Richiesta ricevuta</h2>
            <p class="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/65">
              Grazie. Ti avviseremo appena il percorso donna sarà disponibile.
            </p>
            <button
              type="button"
              class="mt-8 w-full rounded-2xl bg-ape-green px-6 py-4 text-sm font-black uppercase tracking-[0.15em] text-black transition hover:bg-ape-lime"
              onclick={closeWaitlistModal}
            >
              Chiudi
            </button>
          </div>
        {:else}
          <p class="text-xs font-black uppercase tracking-[0.28em] text-ape-green">Percorso donna</p>
          <h2 id="waitlist-title" class="mt-3 font-display text-5xl uppercase leading-none text-white sm:text-6xl">Entra in waitlist</h2>
          <p class="mt-4 text-sm leading-6 text-white/62">
            Lascia i tuoi dati per ricevere accesso prioritario appena la versione donna sarà pronta.
          </p>

          <form class="mt-7 space-y-4" onsubmit={submitWaitlist}>
            <label class="block">
              <span class="text-xs font-black uppercase tracking-[0.18em] text-white/72">Nome</span>
              <input
                class="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-ape-green focus:ring-2 focus:ring-ape-green/20"
                name="name"
                autocomplete="name"
                placeholder="Il tuo nome"
                required
                bind:value={waitlistName}
              />
            </label>

            <label class="block">
              <span class="text-xs font-black uppercase tracking-[0.18em] text-white/72">Email</span>
              <input
                class="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-ape-green focus:ring-2 focus:ring-ape-green/20"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="nome@email.com"
                required
                bind:value={waitlistEmail}
              />
            </label>

            <label class="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-5 text-white/65">
              <input
                class="mt-1 h-5 w-5 rounded border-white/20 bg-black text-ape-green accent-ape-green"
                name="gdprConsent"
                type="checkbox"
                required
                bind:checked={gdprConsent}
              />
              <span>
                Acconsento al trattamento dei miei dati personali ai sensi del GDPR per essere ricontattata sul percorso donna FITUP Coaching System.
              </span>
            </label>

            <button
              type="submit"
              class="cta-shine w-full rounded-2xl bg-ape-green px-6 py-5 text-sm font-black uppercase tracking-[0.15em] text-black transition hover:bg-ape-lime disabled:cursor-not-allowed disabled:opacity-45"
              disabled={!waitlistName.trim() || !waitlistEmail.trim() || !gdprConsent}
            >
              Invia richiesta <span aria-hidden="true">→</span>
            </button>
          </form>
        {/if}
      </div>
    </div>
  {/if}
</main>
