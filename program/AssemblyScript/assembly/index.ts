// The entry file of your WebAssembly module.

export function fibonacci(n: i32): i32 {
  if (n < 2) {
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2)
}
