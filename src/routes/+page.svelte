<script lang="ts">
  import '../app.css';
  import Footer from '#lib/components/Footer.svelte';
  import Nav from '#lib/components/Nav.svelte';
  import Sidebar from '#lib/components/Sidebar.svelte';
  import { docPage, github } from '#lib/site';
</script>

<svelte:head>
  <title>Litz — deterministic electronics and firmware simulation</title>
  <meta
    name="description"
    content="Litz boots real firmware against a pin-level, analog-solved circuit with simulated time. ESP32, AVR, RP2040, MicroPython and custom WebAssembly chips."
  />
</svelte:head>

<Nav />

<main class="wrap layout">
  <article>
    <header class="intro" id="top">
      <div class="title-row">
        <h1>Litz</h1>
        <span class="badge mono">v0.2.1</span>
      </div>
      <p class="desc">Deterministic electronics and firmware simulation.</p>
      <p class="tags mono">esp32 · avr · rp2040 · micropython · webassembly · rust</p>
      <p class="lede">
        Litz boots a real firmware image against a circuit the diagram describes. Pins, buses and
        analog nets are resolved at each simulated tick; a run produces console output, part state,
        timing and waveforms that can be asserted against.
      </p>
      <p class="lede">
        There is no wall clock and no unseeded randomness. The same project produces the same
        transcript on every machine, which is what makes it usable as a test.
      </p>
    </header>

    <section id="start">
      <h2>Install</h2>
      <pre><code><span class="p">$</span> cargo install litz-cli
<span class="p">$</span> litz test examples/blinky
<span class="ok">  1/1 tests passed</span></code></pre>
      <p class="note">
        The JavaScript package runs the same engine in a browser or under Node:
        <a href={docPage('javascript')}>JavaScript reference</a>.
      </p>
    </section>

    <section>
      <h2>A project</h2>
      <div class="two">
        <div>
          <h3>litz.toml</h3>
          <pre><code><span class="c">[project]</span>
diagram = <span class="s">"diagram.json"</span>

<span class="c">[sim]</span>
firmware = <span class="s">"firmware/blinky.bin"</span>

<span class="c">[[test]]</span>
name = <span class="s">"the LED blinks"</span>
timeout = <span class="s">"2s"</span>
expect = <span class="s">"litz: blinky"</span>
expect_state = <span class="s">"led1:on"</span></code></pre>
        </div>
        <div>
          <h3>terminal</h3>
          <pre><code><span class="p">$</span> litz test examples/blinky

<span class="c">== the LED on GPIO8 blinks ==</span>
litz: blinky
<span class="ok">1/1 tests passed</span></code></pre>
          <p class="note">
            <code>litz run</code> runs the same project interactively; <code>litz check</code>
            validates the diagram without booting it.
          </p>
        </div>
      </div>
    </section>

    <section id="examples">
      <h2>Examples</h2>
      <table>
        <thead>
          <tr><th>Project</th><th>What it shows</th></tr>
        </thead>
        <tbody>
          <tr><td><a href={`${github}/tree/main/examples/blinky`}>blinky</a></td><td>An ESP32-C3 firmware and a test that reads the pin</td></tr>
          <tr><td><a href={`${github}/tree/main/examples/mp-i2c-sensor`}>mp-i2c-sensor</a></td><td>Stock MicroPython reading a sensor over I2C</td></tr>
          <tr><td><a href={`${github}/tree/main/examples/circuitpython`}>circuitpython</a></td><td>CircuitPython booting to its REPL on a C3</td></tr>
          <tr><td><a href={`${github}/tree/main/examples/two-boards`}>two-boards</a></td><td>Two MCUs sharing one circuit and one console</td></tr>
          <tr><td><a href={`${github}/tree/main/examples`}>All examples</a></td><td>AVR, RP2040, Wi-Fi, displays and custom chips</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>What it simulates</h2>
      <dl class="facts">
        <dt>Firmware</dt>
        <dd>
          ESP32-C3, C6, P4 and S31 boot merged images through the mask ROM; ATmega328P and RP2040
          boot their own formats. Stock MicroPython and CircuitPython builds reach their REPL and
          run a scripted file.
        </dd>
        <dt>Circuit</dt>
        <dd>
          Parts are TOML manifests with pins, buses and behavior. An MNA solver handles resistors,
          diodes, transistors, op-amps, capacitors and inductors, and reports node voltages and
          branch currents.
        </dd>
        <dt>Instruments</dt>
        <dd>
          Probes report frequency, duty, pulse width and voltage range. A run can write a scope CSV,
          a VCD or a PCAP, and decode UART, I2C and SPI from the recorded transitions.
        </dd>
        <dt>Checks</dt>
        <dd>
          <code>litz test</code> exits non-zero on a failed expectation and prints stable JSON with
          <code>--json</code>. It runs the same way locally, in a GitHub Action and through the MCP
          server.
        </dd>
        <dt>Extensions</dt>
        <dd>
          Parts and MCUs can be WebAssembly components. A component built against
          <code>litz:mcu-2</code> runs on native hosts, under Node and in the browser.
        </dd>
      </dl>
    </section>

    <section id="chips">
      <h2>Chips</h2>
      <table>
        <thead>
          <tr><th>Family</th><th>Chips</th><th>Backend</th></tr>
        </thead>
        <tbody>
          <tr><td>ESP32 · RISC-V</td><td>ESP32-C3, C6, P4, S31</td><td>native and WebAssembly</td></tr>
          <tr><td>ESP32 · Xtensa</td><td>ESP32, ESP32-S3</td><td>native</td></tr>
          <tr><td>AVR</td><td>ATmega328P (Uno, Nano, Pro Mini)</td><td>native and WebAssembly</td></tr>
          <tr><td>ARM</td><td>RP2040 (Raspberry Pi Pico)</td><td>native and WebAssembly</td></tr>
          <tr><td>Custom</td><td><code>litz:mcu-1</code>, <code>litz:mcu-2</code></td><td>WebAssembly component</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Documentation</h2>
      <ul class="docs">
        <li><a href={docPage('getting-started')}>Getting started</a> — a first project</li>
        <li><a href={docPage('cli')}>CLI reference</a> — every command and flag</li>
        <li><a href={docPage('rust')}>Rust reference</a> — crates, <code>Part</code> and <code>Chip</code></li>
        <li><a href={docPage('javascript')}>JavaScript reference</a> — browser and Node</li>
        <li><a href={docPage('build')}>Building firmware</a> — toolchains and recipes</li>
        <li><a href={docPage('parts')}>Parts and boards</a> — catalog and manifests</li>
        <li><a href={docPage('chips')}>Writing a chip</a> — wasm MCUs and both ABIs</li>
        <li><a href={docPage('mcp')}>MCP server</a> — simulate from an editor</li>
        <li><a href={docPage('formats')}>File formats</a> — <code>diagram.json</code>, <code>litz.toml</code></li>
        <li><a href={docPage('architecture')}>Architecture</a> — how the crates fit</li>
      </ul>
    </section>

    <section>
      <h2>Project</h2>
      <p>
        The source, examples and issue tracker are on <a href={github}>GitHub</a>. Releases are
        tagged <code>v0.2.x</code> for the JavaScript package and published separately to
        crates.io for the Rust crates.
      </p>
    </section>
  </article>

  <Sidebar />
</main>

<Footer />

<style>
  .layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 250px;
    gap: 48px;
    padding: 34px 0 40px;
    align-items: start;
  }

  article {
    min-width: 0;
  }

  .title-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  h1 {
    margin: 0;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .badge {
    font-size: 12px;
    color: var(--muted);
    border: 1px solid var(--border);
    padding: 1px 6px;
  }

  .desc {
    margin: 6px 0 4px;
    font-size: 18px;
    color: var(--muted);
  }

  .tags {
    margin: 0 0 20px;
    font-size: 12px;
    color: var(--muted);
  }

  .lede {
    margin: 0 0 12px;
    max-width: 720px;
  }

  section {
    margin-top: 34px;
  }

  h2 {
    margin: 0 0 14px;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--border);
    font-size: 20px;
    font-weight: 600;
  }

  h3 {
    margin: 0 0 6px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .note {
    margin: 10px 0 0;
    font-size: 13.5px;
    color: var(--muted);
  }

  .two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .c {
    color: #57606a;
  }

  .s {
    color: #0a3069;
  }

  .p {
    color: var(--green);
  }

  .ok {
    color: var(--green);
  }

  .facts {
    margin: 0;
    display: grid;
    grid-template-columns: 132px minmax(0, 1fr);
    gap: 10px 20px;
    font-size: 14px;
  }

  .facts dt {
    font-weight: 600;
  }

  .facts dd {
    margin: 0;
    color: #3d444d;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13.5px;
  }

  th,
  td {
    text-align: left;
    padding: 7px 10px;
    border: 1px solid var(--border);
    vertical-align: top;
  }

  th {
    background: var(--bg-subtle);
    font-weight: 600;
  }

  .docs {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px 32px;
    font-size: 13.5px;
  }

  .docs li {
    padding: 3px 0;
    color: var(--muted);
  }

  .docs a {
    font-weight: 500;
  }

  @media (max-width: 900px) {
    .layout {
      grid-template-columns: 1fr;
      gap: 28px;
    }

    .two,
    .docs {
      grid-template-columns: 1fr;
      columns: 1;
    }

    .facts {
      grid-template-columns: 1fr;
      gap: 2px;
    }

    .facts dd {
      margin-bottom: 10px;
    }
  }
</style>