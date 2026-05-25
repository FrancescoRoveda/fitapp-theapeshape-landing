<script lang="ts">
  const maleAppUrl = import.meta.env.PUBLIC_MALE_APP_URL || 'https://app.theapeshape.com';
  const femaleAppUrl = import.meta.env.PUBLIC_FEMALE_APP_URL || 'https://donna.theapeshape.com';

  const features = [
    {
      title: 'Allenamenti personalizzati',
      text: 'Programmi su misura in base a te.',
      icon: 'M4 15h16M7 15V9m10 6V9M9 7h6',
      position: 'left'
    },
    {
      title: 'Nutrizione su misura',
      text: 'Piani alimentari personalizzati per i tuoi obiettivi.',
      icon: 'M6 3v8m4-8v8M8 11v10m8-18v18m3-18v18m-6-10h6',
      position: 'left'
    },
    {
      title: 'AI coach 24/7',
      text: 'Risposte, consigli e supporto sempre con te.',
      icon: 'M12 4a7 7 0 0 0-7 7c0 4 7 9 7 9s7-5 7-9a7 7 0 0 0-7-7Zm-3 7h6m-3-3v6',
      position: 'right'
    },
    {
      title: 'Risultati misurabili',
      text: 'Traccia i progressi e raggiungi i tuoi obiettivi.',
      icon: 'M4 19h16M7 16v-5m5 5V7m5 9v7m-9-5 4-4 3 3 5-7',
      position: 'right'
    }
  ];

  const trust = [
    { title: 'Sicuro e affidabile', text: 'I tuoi dati sono protetti.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { title: 'Supporto coach', text: 'Reale. Umano. 24/7.', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { title: 'Una community', text: 'Che ti spinge oltre.', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
    { title: 'Privacy garantita', text: '100% riservato.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' }
  ];
</script>

<svelte:head>
  <meta property="og:title" content="FITUP Coaching System | The Ape Shape" />
  <meta
    property="og:description"
    content="Allenati con un sistema che si adatta a te. Scegli percorso uomo o donna."
  />
</svelte:head>

<main class="relative isolate min-h-screen overflow-hidden bg-ape-dark text-white">
  <div class="noise pointer-events-none absolute inset-0 -z-20"></div>
  <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60rem] bg-[radial-gradient(circle_at_center,rgba(139,209,10,0.15),transparent_40rem)]"></div>

  <section class="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pt-12 pb-6 sm:px-6 lg:px-10 2xl:px-14">
    
    <!-- Top Logos & Headline -->
    <header class="relative z-20 flex flex-col items-center text-center">
      <img class="h-10 w-auto sm:h-12" src="/fitup-logo.png" alt="FITUP" />
      <p class="mt-2 text-xs font-black uppercase tracking-[0.52em] text-white/74 sm:text-sm">Coaching System</p>
      <div class="mt-4 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-ape-green sm:text-xs">
        Powered by The Ape Shape <span class="text-lg leading-none">🦍</span>
      </div>
      
      <h1 class="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.9] tracking-wide sm:text-6xl lg:text-7xl xl:text-8xl">
        Allenati con<br class="hidden sm:block" /> un sistema<br />
        <span class="text-ape-green">che si adatta a te.</span>
      </h1>
      <p class="mt-6 max-w-xl text-sm font-medium text-white/80 sm:text-base">
        Workout, nutrizione e AI coaching<br class="hidden sm:block" /> integrati nella tua esperienza <span class="text-ape-green">Fitup</span>.
      </p>
    </header>

    <!-- Main visual area -->
    <div class="relative mt-12 flex flex-1 items-center justify-center lg:mt-16">
      
      <!-- Athletes Absolute Positioned -->
      <div class="pointer-events-none absolute -left-20 bottom-0 z-0 h-[450px] w-[350px] opacity-25 sm:-left-16 sm:h-[550px] sm:w-[400px] md:opacity-75 lg:-left-32 lg:h-[650px] lg:w-[500px] xl:-left-48 xl:h-[750px] xl:w-[550px]"
           style="-webkit-mask-image: linear-gradient(to top, transparent 0%, black 25%); mask-image: linear-gradient(to top, transparent 0%, black 25%);">
        <div class="h-full w-full" style="-webkit-mask-image: linear-gradient(to right, black 60%, transparent 100%); mask-image: linear-gradient(to right, black 60%, transparent 100%);">
          <img class="h-full w-full object-contain object-bottom mix-blend-lighten" src="/athlete-male.png" alt="Male Athlete" />
        </div>
      </div>
      
      <div class="pointer-events-none absolute -right-20 bottom-0 z-0 h-[450px] w-[350px] opacity-25 sm:-right-16 sm:h-[550px] sm:w-[400px] md:opacity-75 lg:-right-32 lg:h-[650px] lg:w-[500px] xl:-right-48 xl:h-[750px] xl:w-[550px]"
           style="-webkit-mask-image: linear-gradient(to top, transparent 0%, black 25%); mask-image: linear-gradient(to top, transparent 0%, black 25%);">
        <div class="h-full w-full" style="-webkit-mask-image: linear-gradient(to left, black 60%, transparent 100%); mask-image: linear-gradient(to left, black 60%, transparent 100%);">
          <img class="h-full w-full object-contain object-bottom mix-blend-lighten" src="/athlete-female.png" alt="Female Athlete" />
        </div>
      </div>

      <!-- Center Content (Features Grid) -->
      <div class="relative z-10 mt-10 grid w-full max-w-4xl grid-cols-1 gap-12 sm:grid-cols-2 lg:mt-0 lg:gap-y-20 lg:gap-x-16">
        {#each features as feature}
          <div class="flex flex-col items-center text-center">
            <div class="relative flex h-20 w-20 items-center justify-center rounded-full bg-ape-green/10 shadow-[0_0_40px_rgba(139,209,10,0.15)] ring-1 ring-ape-green/20">
              <svg class="h-10 w-10 text-ape-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d={feature.icon} />
              </svg>
            </div>
            <h3 class="mt-6 text-lg font-black uppercase tracking-wider text-white">{feature.title}</h3>
            <p class="mt-3 max-w-[280px] text-sm leading-relaxed text-white/60">{feature.text}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Paths Section (Uomo/Donna) -->
  <section id="percorsi" class="relative z-20 mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid gap-6 md:grid-cols-2">
      <!-- Uomo Card -->
      <a class="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border-[1.5px] border-ape-green bg-[#0a0a0a]/90 p-8 text-center backdrop-blur-md transition hover:-translate-y-1 hover:shadow-glow" href={maleAppUrl}>
        <div>
          <div class="mx-auto grid h-20 w-20 place-items-center rounded-full bg-ape-green/20 text-5xl text-ape-green">
            <svg class="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/></svg>
          </div>
          <p class="mt-6 font-display text-5xl uppercase tracking-wide sm:text-6xl">Uomo</p>
          <p class="mx-auto mt-4 max-w-xs text-sm font-medium text-white/70">Inizia ora il tuo percorso.<br/>Trasforma il tuo impegno in risultati reali.</p>
        </div>
        <div class="mt-8 flex w-full items-center justify-center rounded-2xl bg-ape-green py-5 text-sm font-black uppercase tracking-[0.15em] text-black transition group-hover:bg-ape-lime">
          Accedi ora <span class="ml-2" aria-hidden="true">→</span>
        </div>
      </a>

      <!-- Donna Card -->
      <a class="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border-[1.5px] border-white/10 bg-[#0a0a0a]/90 p-8 text-center backdrop-blur-md transition hover:-translate-y-1 hover:border-white/20" href="#waitlist">
        <div>
          <div class="mx-auto grid h-20 w-20 place-items-center rounded-full bg-white/5 text-5xl text-white/40">
            <svg class="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/></svg>
          </div>
          <p class="mt-6 font-display text-5xl uppercase tracking-wide text-white/40 sm:text-6xl">Donna</p>
          <p class="mt-3 text-[11px] font-black uppercase tracking-widest text-ape-green">In arrivo a Settembre</p>
          <p class="mx-auto mt-3 max-w-xs text-sm font-medium text-white/50">Lascia la tua email per avere<br/>accesso prioritario.</p>
        </div>
        <div class="mt-8 flex w-full items-center justify-center rounded-2xl bg-white/10 py-5 text-sm font-black uppercase tracking-[0.15em] text-white/70 transition group-hover:bg-white/20 group-hover:text-white">
          Iscriviti alla waitlist <span class="ml-2" aria-hidden="true">→</span>
        </div>
      </a>
    </div>
  </section>

  <!-- Trust Badges -->
  <section class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 border-b border-white/10 mt-4">
    <div class="flex flex-col justify-center gap-10 sm:flex-row sm:flex-wrap lg:flex-nowrap lg:gap-8">
      {#each trust as item}
        <div class="flex items-center gap-4 lg:w-1/4">
          <svg class="h-9 w-9 shrink-0 text-ape-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d={item.icon} />
          </svg>
          <div>
            <span class="block text-xs font-black uppercase tracking-wider text-white">{item.title}</span>
            <span class="block text-[11px] font-medium text-white/60 mt-1">{item.text}</span>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Footer -->
  <footer class="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 py-10 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8">
    <div class="flex flex-col items-center lg:items-start lg:w-1/3">
      <div class="flex items-center gap-3">
        <!-- Logo SVG placeholder -->
        <svg class="h-10 w-10 text-ape-green" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        </svg>
        <div class="flex flex-col items-start">
          <span class="text-xl font-display uppercase tracking-widest text-white leading-none">The Ape Shape</span>
          <span class="text-[9px] font-black tracking-[0.2em] uppercase text-white/60 mt-1">Build. Evolve. Become.</span>
        </div>
      </div>
    </div>
    
    <div class="text-[11px] font-medium text-white/50 lg:w-1/3 lg:text-center leading-relaxed">
      FITUP Coaching System è disponibile<br/>nelle palestre FITUP.<br/>
      Un unico sistema. <span class="text-ape-green">Infiniti risultati.</span>
    </div>

    <div class="flex flex-col items-center gap-5 lg:w-1/3 lg:items-end">
      <div class="flex items-center gap-6">
        <img class="h-7 w-auto" src="/fitup-logo.png" alt="FITUP" />
        <div class="flex gap-4 text-white/50">
          <a href="#" aria-label="Instagram" class="transition hover:text-white">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
          </a>
          <a href="#" aria-label="Facebook" class="transition hover:text-white">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</main>

