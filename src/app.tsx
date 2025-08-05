import { component$, useSignal } from '@builder.io/qwik'

import qwikLogo from './assets/qwik.svg'
import './app.css'
import { QwikSlickDemo } from './examples/QwikSlickDemo'

export const App = component$(() => {
  const count = useSignal(0)

  return (
    <>
      <div>
        <a href="https://qwik.dev" target="_blank">
          <img src={qwikLogo} class="logo qwik" alt="Qwik logo" />
        </a>
      </div>
      
      <QwikSlickDemo />

      <div class="card" style="margin-top: 40px;">
        <button onClick$={() => count.value++}>count is {count.value}</button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Qwik logo to learn more
      </p>
    </>
  )
})
