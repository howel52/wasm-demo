(async () => {

  // const importObject = {
  //   env: {
  //       abort(_msg, _file, line, column) {
  //           console.error("abort called at index.ts:" + line + ":" + column);
  //       }
  //   }
  // };
  const exports = await loader.instantiate(
    fetch("/AssemblyScript/utils.wasm").then(r => r.arrayBuffer()),
    {
      console: {
        log(value) {
          console.log('logf:', value)
        }
      },
      core: {
        setTimeout(cb,ms) {
          console.log('11', cb, ms)
          return setTimeout(cb, ms)
        }
      }
    }
  )
  window.assemblyScript = exports;
})()
