// ============================================================
//  cv-dark.typ — Joys Di Giorgio | Software Developer CV
// ============================================================

// ---------- CONFIG ----------
#let accent   = rgb("#00d4aa")
#let dark     = rgb("#0d1117")
#let surface  = rgb("#161b22")
#let border   = rgb("#30363d")
#let muted    = rgb("#8b949e")
#let light    = rgb("#e6edf3")

#let fullname = "Joys Di Giorgio"
#let jobtitle = "Software Developer"
#let loc      = "Uster, Zürich, Schweiz"
#let mail     = "joys96@gmail.com"
#let phone    = "+41 79 870 28 65"
#let gh       = "github.com/JODI96"
#let li       = "linkedin.com/in/joys-di-giorgio-14698b186"
#let web      = "joysdigiorgio.ch"

// ---------- PAGE ----------
#set page(
  paper: "a4",
  margin: (top: 1.2cm, bottom: 1.2cm, left: 1.4cm, right: 1.4cm),
  fill: dark,
)
#set text(font: "Consolas", size: 9pt, fill: light)
#set par(leading: 0.55em)

// ---------- HELPERS ----------
#let tag(t) = box(
  fill: surface,
  stroke: 0.5pt + border,
  radius: 3pt,
  inset: (x: 5pt, y: 2pt),
  text(size: 7.5pt, fill: accent, t)
)

#let skill-bar(level, max: 5) = {
  for i in range(max) {
    if i < level {
      box(width: 8pt, height: 5pt, fill: accent, radius: 1pt)
    } else {
      box(width: 8pt, height: 5pt, fill: border, radius: 1pt)
    }
    h(2pt)
  }
}

#let section-title(t) = {
  v(0.6em)
  stack(
    dir: ltr,
    text(size: 8pt, fill: accent, weight: "bold", "// "),
    text(size: 8pt, fill: accent, weight: "bold", upper(t)),
  )
  line(length: 100%, stroke: 0.5pt + border)
  v(0.3em)
}

#let entry(role: "", company: "", period: "", loc: "", body) = {
  grid(
    columns: (1fr, auto),
    gutter: 0pt,
    [#text(weight: "bold", fill: light, role)],
    align(right)[
      #text(fill: muted, size: 8pt, period)
      #if loc != "" [#text(fill: border, "  |  ")#text(fill: muted, size: 8pt, loc)]
    ],
  )
  text(fill: muted, "@  ")
  text(fill: accent, company)
  v(0.2em)
  body
  v(0.5em)
}

#let edu-entry(degree: "", school: "", period: "", body) = {
  grid(
    columns: (1fr, auto),
    [
      #text(weight: "bold", fill: light, degree)
      #linebreak()
      #text(fill: accent, school)
    ],
    align(right)[#text(fill: muted, size: 8pt, period)],
  )
  v(0.2em)
  body
  v(0.5em)
}

#let skill-row(name, level) = {
  grid(
    columns: (0.5fr, 1fr),
    column-gutter: 6pt,
    align(horizon, text(fill: light, size: 8.5pt, name)),
    align(horizon, skill-bar(level)),
  )
  v(0.35em)
}

#let staerke-item(t) = {
  stack(dir: ltr, text(fill: accent, "▸ "), text(fill: light, size: 8.5pt, t))
  v(0.25em)
}
#let schwaeche-item(t) = {
  stack(dir: ltr, text(fill: muted, "▸ "), text(fill: muted, size: 8.5pt, t))
  v(0.25em)
}

// ============================================================
//  HEADER
// ============================================================
#block(
  width: 100%,
  fill: surface,
  stroke: (left: 3pt + accent),
  radius: 4pt,
  inset: (x: 16pt, y: 14pt),
)[
  #grid(
    columns: (1fr, auto, auto),
    column-gutter: 16pt,
    align(horizon)[
      #text(size: 22pt, weight: "bold", fill: light, fullname)
      #linebreak()
      #text(size: 11pt, fill: accent, jobtitle)
    ],
    align(right + horizon)[
      #text(fill: muted, size: 8.5pt)[
        #loc #linebreak()
        #link("mailto:" + mail)[#mail] #linebreak()
        #phone #linebreak()
        #link("https://" + gh)[#gh] #linebreak()
        #link("https://" + li)[#li] #linebreak()
        #link("https://" + web)[#web]
      ]
    ],
    align(center + horizon)[
      #box(
        width: 58pt, height: 58pt,
        radius: 4pt,
        stroke: 1pt + accent,
        clip: true,
      )[#image("Profilbild.jpeg", width: 58pt, height: 58pt, fit: "cover")]
    ],
  )
]

// ============================================================
//  PROFIL
// ============================================================
#section-title("Profil")
#block(
  fill: surface,
  stroke: (left: 2pt + accent),
  radius: 3pt,
  inset: (x: 12pt, y: 9pt),
  width: 100%,
)[
  #text(fill: muted, size: 8.5pt)[
    Lernwilliger #strong[Software Developer] mit Hintergrund als Elektroniker EFZ und laufendem Informatik-Studium an der OST. Ich arbeite gerne selbständig und tauche mit Begeisterung in komplexe Themen ein — privat entwickle ich eigenständig ML-Systeme für algorithmischen Handel mit Python, XGBoost und Deep Reinforcement Learning. KI nutze ich gezielt als zweiten Mitarbeiter: nicht blind, sondern um schneller zu verstehen und produktiver zu arbeiten. Mein bevorzugtes Arbeitsumfeld ist #strong[Linux mit i3 Tiling Window Manager].
  ]
]

// ============================================================
//  TWO-COLUMN LAYOUT
// ============================================================
#grid(
  columns: (1fr, 0.38fr),
  column-gutter: 14pt,
)[

  // ── LINKE SPALTE ─────────────────────────────────────────
  #section-title("Berufserfahrung")

  #entry(
    role: "Software Developer",
    company: "duagon",
    period: "Sep 2024 – heute",
    loc: "Dietikon ZH",
  )[
    - Entwicklung mehrerer #strong[.NET-Tools] zur Automatisierung von Geschäfts- und Produktionsprozessen
    - Aufbau einer #strong[ETL-Pipeline] zur Synchronisation externer Produktdaten mit internen Systemen
    - Erweiterung eines internen Projektmanagementsystems um externe Projekte, Drag-and-Drop-Planung und mehrstufige Projekthierarchien
    #v(0.2em)
    #tag("C\#") #tag(".NET") #tag("ASP.NET") #tag("MariaDB") #tag("ETL") #tag("SQL")
  ]

  #entry(
    role: "Techniker",
    company: "duagon",
    period: "Aug 2023 – Sep 2024",
    loc: "Dietikon ZH",
  )[
    - Entwicklung eines Produktionsautomatisierungstools für Gerätescan und #strong[One-Click-Konfiguration]
    - Tool produktiv im Einsatz in der #strong[Schweiz und den USA]
    - Einarbeitung in Python für interne Automatisierungsskripte
    #v(0.2em)
    #tag("C\#") #tag(".NET") #tag("MariaDB") #tag("Python")
  ]

  #entry(
    role: "Service und Entwicklung",
    company: "Dr. Marino Müller AG",
    period: "Aug 2019 – Jul 2023",
    loc: "Egg ZH",
  )[
    - 4 Jahre technischer Service und Entwicklung im medizintechnischen Umfeld
  ]

  #entry(
    role: "Lehrling – Elektroniker EFZ",
    company: "record Türautomation GmbH",
    period: "Aug 2014 – Aug 2018",
    loc: "Fehraltorf ZH",
  )[
    - 4-jährige Berufsausbildung als Elektroniker EFZ — Fundament für tiefes technisches Systemverständnis
  ]

  #section-title("Eigenprojekte")

  #entry(
    role: "TraderXGBoost",
    company: "github.com/JODI96/TraderXGBoost",
    period: "2024–2025",
  )[
    BTC-Breakout-Erkennungssystem mit XGBoost (5-Klassen-Softmax) und 98 technischen Features. Walk-Forward-Validierung, Live Paper-Trading-Dashboard mit Echtzeit-Simulation.
    #v(0.2em)
    #tag("Python") #tag("XGBoost") #tag("Binance API") #tag("ML") #tag("pandas")
  ]

  #colbreak()
  #entry(
    role: "Trader — DQN Scalping Bot",
    company: "github.com/JODI96/Trader",
    period: "2024",
  )[
    Vollautomatischer Orderflow-Scalping-Bot für Binance Futures. Double DQN + LSTM Neural Network kombiniert mit klassischen Indikatoren (VWAP, CVD, Order-Book).
    #v(0.2em)
    #tag("Python") #tag("PyTorch") #tag("DQN") #tag("LSTM") #tag("WebSocket")
  ]

  #entry(
    role: "ravecheller — Discord Server Bot",
    company: "github.com/JODI96/ravecheller",
    period: "2023",
  )[
    Discord-Bot zur Verwaltung mehrerer Game-Server (Minecraft, GMod, Terraria, Factorio) via Chat-Befehle — kein SSH nötig.
    #v(0.2em)
    #tag("Python") #tag("discord.py") #tag("Linux") #tag("Automation")
  ]

  #entry(
    role: "Portfolio Website",
    company: "joysdigiorgio.ch",
    period: "2024–2025",
  )[
    Persönliche Portfolio-Website mit Live-Trading-Simulation. React + ASP.NET Core, dark theme, WebSocket-basiertes Replay des XGBoost-Modells bar-by-bar.
    #v(0.2em)
    #tag("React") #tag("TypeScript") #tag("ASP.NET Core") #tag("Vite") #tag("WebSocket")
  ]

  #entry(
    role: "TKI — Lernspiel für Programmiereinsteiger",
    company: "github.com/JODI96/TKI",
    period: "2023",
  )[
    Pygame-basiertes Lernspiel für Programmiereinsteiger. Schüler lösen story-getriebene Levels durch praktisches Debuggen — TODO-Markierungen leiten durch den Code.
    #v(0.2em)
    #tag("Python") #tag("Pygame") #tag("Education") #tag("Game Dev")
  ]

  #section-title("Ausbildung")

  #edu-entry(
    degree: "B.Sc. Computer Science (laufend)",
    school: "OST – Ostschweizer Fachhochschule",
    period: "Sep 2022 – Sep 2027",
  )[
    Berufsbegleitendes Studium neben Vollzeitanstellung
  ]

  #edu-entry(
    degree: "Weiterbildung",
    school: "Bildungszentrum Uster",
    period: "2018 – 2019",
  )[]

  #edu-entry(
    degree: "Elektroniker EFZ",
    school: "Berufsbildungszentrum Uster",
    period: "2014 – 2018",
  )[]

  #section-title("Was ich suche")

  #block(
    fill: surface,
    stroke: (left: 2pt + accent),
    radius: 3pt,
    inset: (x: 10pt, y: 8pt),
    width: 100%,
  )[
    #text(fill: muted, size: 8.5pt)[
      Ich suche eine #strong[60%-Stelle als Software Developer], da ich berufsbegleitend mein Informatik-Studium an der OST abschliesse. Ich möchte selbständig an komplexen Systemen arbeiten, mich in neue Technologien einarbeiten und eigene Ideen einbringen. Bevorzuge Backend-lastige Arbeit. Offen für #strong[Hybrid / Remote].
    ]
  ]

  #v(1fr)
  #line(length: 100%, stroke: 0.3pt + border)
  #v(0.3em)
  #align(right)[#text(fill: muted, size: 7.5pt, "Erstellt mit Typst")]

][

  // ── RECHTE SPALTE ────────────────────────────────────────
  #section-title("Skills")

  #skill-row("C# / .NET", 5)
  #skill-row("ASP.NET MVC", 4)
  #skill-row("SQL / MariaDB", 4)
  #skill-row("Python", 4)
  #skill-row("Git", 4)
  #skill-row("Linux / i3wm", 4)
  #skill-row("Vue.js / React", 3)
  #skill-row("Machine Learning", 3)


  #v(0.4em)
  *Tools* \
  #v(0.2em)
  #tag("Git") #tag("Linux") #tag("i3wm")
  #v(0.3em)
  #tag("VS Code") #tag("Azure")
  #v(0.3em)
  #tag("JetBrains")

  #v(0.8em)
  #section-title("Sprachen")

  #grid(
    columns: (auto, 1fr),
    column-gutter: 8pt,
    row-gutter: 0.5em,
    text(fill: light, "Deutsch"),    text(fill: muted, "Muttersprache"),
    text(fill: light, "Englisch"),   text(fill: muted, "Beruflich"),
    text(fill: light, "Italiano"),   text(fill: muted, "Grundkenntnisse"),
  )

  #v(0.6em)
  #section-title("Stärken")

  #staerke-item("Ruhig in stressigen Situationen")
  #staerke-item("Hohe Eigeninitiative")
  #staerke-item("Schnelle Einarbeitung in neue Themen")
  #staerke-item("KI gezielt als Produktivitätstool")
  #staerke-item("Freude an komplexen Problemen")

  #v(0.2em)
  #section-title("Schwächen")

  #schwaeche-item("Neigt zu Perfektionismus")
  #schwaeche-item("Eher introvertiert / ruhig")

  #v(0.4em)
  #section-title("Hobbys")

  #tag("Fitness") #tag("Tennis")
  #v(0.3em)
  #tag("Programmieren") #tag("Gaming")
  #v(0.3em)
  #tag("Open Source")

  #v(0.8em)
  #section-title("Referenzen")

  #text(fill: muted, size: 8.5pt)[
    Auf Anfrage erhältlich.
  ]

]
