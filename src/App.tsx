import './App.css'

function App() {
  return (
      <main className="page">
        <header className="siteHeader">
          <a href="#" className="logo">
            Sammen for Tromsøs barn
          </a>

          <nav className="navLinks">
            <a href="#om">Om initiativet</a>
            <a href="#hvorfor">Hvorfor</a>
            <a href="#bidra">Bidra</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </header>

        <section className="hero">
          <h1>Sammen for Tromsøs barn</h1>

          <p className="lead">
            Et lokalt initiativ i Tromsø for mer lek, ro, fellesskap og
            tilstedeværelse i barns hverdag.
          </p>

          <div className="heroActions">
            <a href="#kontakt" className="primaryButton">
              Ta kontakt
            </a>
            <a href="#om" className="secondaryButton">
              Les mer
            </a>
          </div>
        </section>

        <section id="om" className="contentSection">
          <h2>Hva handler initiativet om?</h2>
          <p>
            Sammen for Tromsøs barn er et lokalt initiativ for foreldre, skoler
            og nærmiljø som ønsker å skape gode rammer rundt barns digitale hverdag.
          </p>
          <p>
            Målet er ikke å være moraliserende, men å gjøre det enklere å stå
            sammen om gode valg, særlig rundt tidspunktet for når barn får egen
            smarttelefon.
          </p>
        </section>

        <section id="hvorfor" className="contentSection">
          <h2>Hvorfor er dette viktig?</h2>
          <p>
            Mange foreldre opplever at det er vanskelig å ta valget alene. Når flere
            står sammen, blir det lettere å utsette smarttelefon, redusere press og
            gi barna mer tid til lek, søvn, vennskap og fritidsaktiviteter.
          </p>
        </section>

        <section className="contentSection">
          <h2>Hvem er siden for?</h2>
          <p>
            Siden er laget for foreldre, foresatte, FAU, skoler og andre i
            Tromsø som ønsker en felles og trygg samtale om barn, smarttelefoner
            og digitalt press.
          </p>
          <p>
            Her skal det være enkelt å finne informasjon, dele initiativet videre og ta
            kontakt dersom man ønsker å bidra.
          </p>
        </section>

        <section id="bidra" className="contentSection">
          <h2>Slik kan du bidra</h2>
          <ul>
            <li>Snakk med andre foreldre i klassen eller nærmiljøet.</li>
            <li>Del informasjon om Sammen for Tromsøs barn.</li>
            <li>Ta kontakt hvis du vil bidra eller vite mer.</li>
          </ul>
        </section>

        <section id="kontakt" className="contactBox">
          <h2>Kontakt</h2>
          <p>
            Vil du vite mer, bidra eller komme i kontakt med Alexandra og Kirsti?
          </p>
          <p className="contactNote">
            Kontaktinformasjon legges inn når initiativet har valgt e-postadresse
            eller kontaktskjema.
          </p>
        </section>
      </main>
  )
}

export default App
