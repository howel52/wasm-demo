(() => {

  async function getCost (action) {
    console.log('Start benchmark')
    console.time('cost')
    const begin = Date.now()
    await action()
    console.timeEnd('cost')
    return Date.now() - begin
  }

  function fib (n) {
    if (n === 1 || n === 2) return 1; return fib(n-2) + fib(n -1)
  }

  function accumulate (n) {
    let r = 0;
    for (let i = 0; i <=n; i++) {
      r += i
    }
    return r
  }


  const fibArgs = [40]

  const accumulateArgs = [10000]
  new Vue({
    el: '#app',
    data: {
      cost: {
        go: undefined,
        js: undefined,
        rust: undefined,
        assemblyscript: undefined
      },
    },
    methods: {
      go: async function () {
        this.cost.go = await getCost(() => {
          console.log(
            'go result: ',
            go_wasm_fib(...fibArgs)
            // go_wasm_accumulate(...accumulateArgs)
          )
        })
      },
      js: async function () {
        this.cost.js = await getCost(() => {
          console.log(
            'js result: ',
            fib(...fibArgs)
            // accumulate(...accumulateArgs)
          )
        })
      },
      rust: async function () {
        this.cost.rust = await getCost(() => {
          console.log(
            'rust result: ',
            wasm_bindgen.get_fibonacci(...fibArgs)
            // wasm_bindgen.get_accumulate(...accumulateArgs)
          )
        })
      },
      assemblyscript: async function () {
        this.cost.assemblyscript = await getCost(() => {
          console.log(
            'assemblyscript result: ',
            window.assemblyScript.fibonacci(...fibArgs)
            // wasm_bindgen.get_accumulate(...accumulateArgs)
          )
        })
      },
    }
  })
})()