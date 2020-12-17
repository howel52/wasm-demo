extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

fn fibonacci(n: u32) -> u32 {
    if n == 0 {
        return 0;
    } else if n == 1 {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

fn accumulate(n: u32) -> u32 {
    let mut r = 0;
    for i in 0..n+1 {
        r = r + i;
    }
    return r;
}

#[wasm_bindgen]
pub fn get_fibonacci(n: u32) -> u32 {
    return fibonacci(n);
}

#[wasm_bindgen]
pub fn get_accumulate(n: u32) -> u32 {
    return accumulate(n);
}