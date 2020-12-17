
declare namespace console {
  @external("console", "log")
  function log(val: string): void;
}



declare namespace core {
  @external("core", "setTimeout")
  function setTimeout(cb: () => void, ms: i32): i32;
}

  export class AClass {
    private timer: i32;
    constructor(content : i32, timeout: i32) {

        this.timer =  core.setTimeout(function () {
            console.log("11")
            // this.reject(new Error(this.operation + " timeout"));
        }, timeout)
    }
    public h(a: i32, b:i32): i32 {
      return a + b
    }
  }






export function getTsserverExecutable(): string {
  return isWindows() ? 'tsserver.cmd' : 'tsserver'
}

function isWindows(): boolean {
  // FIXME
  const platform = 'windows'

  return new RegExp('win').test(platform);
  // return /^win/.test(platform);

}

export function b(content: i32): void {
  core.setTimeout(function () {
    console.log("12313")
  }, 100)
}

export function a(t: string): void {
  console.log(t)
}