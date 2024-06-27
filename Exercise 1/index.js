// #1
function funcOne() {
    let a = 5; // Declared within the function, has block scope
    if (a > 1) {
      a = 3;
    }
    alert(`inside the funcOne function ${a}`); // Output: 3 (modified value)
  }
  
  funcOne();
  
  // #1.1 - If 'a' is declared with const, it would cause an error
  // as you cannot reassign values to constants.
  
  // #2
  let a = 0; // Declared globally, accessible by all functions
  
  function funcTwo() {
    a = 5; // Modifies the global 'a'
  }
  
  function funcThree() {
    alert(`inside the funcThree function ${a}`);
  }
  
  // #2.1 - Run the code in the console:
  funcThree(); // Output: 0 (initial value)
  funcTwo(); // Modifies global 'a' to 5
  funcThree(); // Output: 5 (modified global value)
  
  // #2.2 - If 'a' is declared with const in both functions,
  // it would cause errors as you cannot reassign values to constants.
  
  // #3
  function funcFour() {
    window.a = "hello"; // Assigns to the global window object
  }
  
  function funcFive() {
    alert(`inside the funcFive function ${a}`); // Output: undefined
  }
  
  // #3.1 - Run the code in the console:
  funcFour(); // Assigns "hello" to window.a
  funcFive(); // Doesn't access window.a directly
  
  // #4
  let a = 1; // Declared globally
  
  function funcSix() {
    let a = "test"; // Declares a new 'a' within the function (block scope)
    alert(`inside the funcSix function ${a}`); // Output: test
  }
  
  funcSix(); // Output: test (local 'a')
  
  // #4.2 - If 'a' is declared with const inside funcSix,
  // it would cause an error as you cannot reassign values to constants within the function.
  
  // #5
  let a = 2;
  
  if (true) {
    let a = 5; // Declares a new 'a' within the block (block scope)
    alert(`in the if block ${a}`); // Output: 5
  }
  
  alert(`outside of the if block ${a}`); // Output: 2 (global 'a')
  
  // #5.2 - If 'a' is declared with const inside the if block, it would cause an error as you cannot reassign values to constants within the block.
  