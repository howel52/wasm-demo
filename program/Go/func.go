package main

import (
	"syscall/js"
)

func fib(n int) int {
	if n == 1 || n == 2 {
		return 1
	}
	return fib(n-2) + fib(n-1)
}

func fibFunc(this js.Value, args []js.Value) interface{} {
	return js.ValueOf(fib(args[0].Int()))
}

func accumulate(n int) int {
	sum := 0
	for i := 0; i <= n; i++ {
		sum += i
	}
	return sum
}

func accumulateFunc(this js.Value, args []js.Value) interface{} {
	return js.ValueOf(accumulate(args[0].Int()))
}

func main() {
	done := make(chan struct{}, 0)
	js.Global().Set("go_wasm_fib", js.FuncOf(fibFunc))
	js.Global().Set("go_wasm_accumulate", js.FuncOf(accumulateFunc))
	<-done
}
