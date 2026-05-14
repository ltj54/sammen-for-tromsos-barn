import './App.css'

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`

const navItems = [
  { href: '#om', label: 'Om initiativet' },
  { href: '#hvorfor', label: 'Hvorfor' },
  { href: '#bidra', label: 'Bidra' },
  { href: '#kontakt', label: 'Kontakt' },
]

const principles = [
  'Smarttelefon kan vente',
  'Klasse og trinn først',
  'FAU i ryggen',
]

const contributionSteps = [
  'Start med en samtale i klassen eller på trinnet.',
  'Bruk foreldremøte, FAU eller en enkel spørreundersøkelse for å finne ut hvor mange som vil stå sammen.',
  'Finn andre foreldre i Tromsø som vil dele erfaringer og gjøre det lettere å holde linjen over tid.',
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function App() {
  return (
    <main className="page">
      <header className="siteHeader">
        <a href="#" className="logo" aria-label="Sammen for Tromsøs barn">
          <span className="logoMark">STB</span>
          <span>Sammen for Tromsøs barn</span>
        </a>

        <nav className="navLinks" aria-label="Hovedmeny">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <h1>Sammen for Tromsøs barn</h1>

          <p className="lead">
            Et lokalt initiativ i Tromsø for foreldre som vil utsette
            smarttelefon til etter barneskolen, og gi barna mer lek, ro,
            fellesskap og tilstedeværelse i hverdagen.
          </p>

          <div className="heroActions">
            <button
              className="primaryButton"
              type="button"
              onClick={() => scrollToSection('kontakt')}
            >
              Ta kontakt
            </button>
            <button
              className="secondaryButton"
              type="button"
              onClick={() => scrollToSection('om')}
            >
              Les mer
            </button>
          </div>

          <img
            className="harborSketch"
            src={assetPath('tromso-harbor.svg')}
            alt="Linjeillustrasjon av Tromsø med fjell, bro og havnefront"
          />
        </div>

        <aside className="noticeBoard" aria-label="Kjernepunkter">
          <div className="noticePin" />
          <p>Felles valg blir lettere når ingen må ta dem alene.</p>
          <ul>
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section id="om" className="splitSection">
        <div>
          <h2>Hva handler initiativet om?</h2>
        </div>
        <div className="sectionText">
          <p>
            Sammen for Tromsøs barn er et lokalt initiativ for foreldre, skoler
            og nærmiljø som ønsker å gjøre det vanligere å vente med smarttelefon
            gjennom barneskolen.
          </p>
          <p>
            Målet er ikke å være moraliserende, men å gjøre det enklere å stå
            sammen om gode valg. Når flere foreldre på samme trinn snakker sammen,
            blir det mindre press på hver enkelt familie og mindre utenforskap for
            barna som venter.
          </p>
        </div>
      </section>

      <section id="hvorfor" className="darkBand">
        <div className="fjordLines" aria-hidden="true" />
        <div className="darkBandContent">
          <h2>Hvorfor er dette viktig?</h2>
          <p>
            Mange foreldre opplever at det er vanskelig å ta valget alene.
            Dette handler først og fremst om smarttelefon og sosiale medier,
            ikke om å lage en debatt om all skjermbruk. Når flere står sammen,
            blir det lettere å redusere press og gi barna mer tid til lek, søvn,
            vennskap og fritidsaktiviteter.
          </p>
        </div>
      </section>

      <section className="audienceSection">
        <div className="audienceIntro">
          <h2>Hvem er siden for?</h2>
          <p>
            Siden er laget for foreldre, foresatte, FAU, skoler og andre i
            Tromsø som ønsker en felles og trygg samtale om barn, smarttelefoner
            og digitalt press.
          </p>
        </div>
        <p className="largeQuote">
          Det viktigste er ikke å ha perfekte svar, men å gjøre det enkelt å finne
          hverandre og starte samtalen før smarttelefonen blir en selvfølge.
        </p>
      </section>

      <section id="bidra" className="stepsSection">
        <div>
          <h2>Slik kan du bidra</h2>
          <p>
            Start lite og konkret. Erfaringen fra foreldreinitiativ andre steder
            er at det ofte fungerer best å begynne med ett klassetrinn, samle
            støtte og deretter løfte saken videre.
          </p>
        </div>
        <ul>
          {contributionSteps.map((step) => (
            <li key={step}>
              {step}
            </li>
          ))}
        </ul>
      </section>

      <section id="kontakt" className="contactBox">
        <div>
          <h2>Kontakt</h2>
          <p>
            Vil du vite mer, bidra eller komme i kontakt med Alexandra og Kirsti?
          </p>
        </div>
        <p className="contactNote">
          Kontaktinformasjon legges inn når initiativet har valgt e-postadresse
          eller kontaktskjema.
        </p>
      </section>

      <footer className="siteFooter">
        <img src={assetPath('tromso-harbor.svg')} alt="" aria-hidden="true" />
        <div className="footerInfo">
          <a
            className="sponsorLink"
            href="https://www.sparebank1.no/nb/nord-norge/privat.html"
            target="_blank"
            rel="noreferrer"
            aria-label="Sponset av SpareBank 1 Nord-Norge"
          >
            <img className="sponsorLogo" src={assetPath('logo-snn.svg')} alt="" aria-hidden="true" />
            <span>
              <span className="sponsorLabel">Sponset av</span>
              <span className="sponsorName">SpareBank 1 Nord-Norge</span>
            </span>
          </a>
          <p>Sammen for Tromsøs barn</p>
        </div>
      </footer>
    </main>
  )
}

export default App
