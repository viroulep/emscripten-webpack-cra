#include <iostream>

#include <emscripten/bind.h>

using namespace emscripten;

int func(int a, int b) {
    std::cout << "Hi there\n";
    return a + b;
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("func", &func);
}
