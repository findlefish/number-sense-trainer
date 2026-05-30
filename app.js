const chapterOutline = [
  ["1.1", "Introduction: FOILing When Multiplying", "Numerical Tricks", "Use FOIL/moving down the line: units, cross-products, leading product, and carries."],
  ["1.2.1", "Multiplying by 11 Trick", "Multiplying: The Basics", "Add adjacent digits from right to left, carrying when a sum passes 9."],
  ["1.2.2", "Multiplying by 101 Trick", "Multiplying: The Basics", "Add gap-connected digits; the last two digits often copy through first."],
  ["1.2.3", "Multiplying by 25 Trick", "Multiplying: The Basics", "Think 25 = 100 / 4. Divide first, then scale by 100."],
  ["1.2.4", "Multiplying by 75 Trick", "Multiplying: The Basics", "Think 75 = 3/4 of 100. Divide by 4, multiply by 3, then scale."],
  ["1.2.5", "Multiplying by Any Fraction of 100, 1000, etc.", "Multiplying: The Basics", "Convert the multiplier into a clean fraction of a power of ten."],
  ["1.2.6", "Double and Half Trick", "Multiplying: The Basics", "Double one factor while halving the other until the product is easier."],
  ["1.2.7", "Multiplying Two Numbers Near 100", "Multiplying: The Basics", "Use 100 as a base: cross-add offsets and multiply the offsets."],
  ["1.2.8", "Squares Ending in 5 Trick", "Multiplying: The Basics", "Multiply the prefix by the next integer and append 25."],
  ["1.2.9", "Squares from 41-59", "Multiplying: The Basics", "Use distance from 50, then adjust around 2500."],
  ["1.2.10", "Multiplying Two Numbers Equidistant from a Third Number", "Multiplying: The Basics", "Use (a - b)(a + b) = a^2 - b^2."],
  ["1.2.11", "Multiplying Reverses", "Multiplying: The Basics", "Look for reverse-digit structure and reuse cross-products."],
  ["1.3.1", "Extending FOILing", "Standard Multiplication Tricks", "Move down the line with digit products and carries for longer multiplication."],
  ["1.3.2", "Factoring of Numerical Problems", "Standard Multiplication Tricks", "Factor numbers into friendlier pieces before multiplying."],
  ["1.3.3", "Sum of Consecutive Squares", "Standard Multiplication Tricks", "Use the memorized or formula-based square-sum shortcut."],
  ["1.3.4", "Sum of Squares: Factoring Method", "Standard Multiplication Tricks", "Rewrite sums of squares by factoring useful common pieces."],
  ["1.3.5", "Sum of Squares: Special Case", "Standard Multiplication Tricks", "Spot the special square-sum form instead of expanding directly."],
  ["1.3.6", "Difference of Squares", "Standard Multiplication Tricks", "Use a^2 - b^2 = (a - b)(a + b)."],
  ["1.3.7", "Multiplying Two Numbers Ending in 5", "Standard Multiplication Tricks", "Separate the 5-ending structure and combine prefix products with 25/75 endings."],
  ["1.3.8", "Multiplying Mixed Numbers", "Standard Multiplication Tricks", "Split into whole and fractional parts, then combine cleanly."],
  ["1.3.9", "a x a/b Trick", "Standard Multiplication Tricks", "Use the special mixed-number structure before multiplying."],
  ["1.3.10", "Combination of Tricks", "Standard Multiplication Tricks", "Choose the fastest mix of factoring, FOIL, and special products."],
  ["1.4.1", "Finding a Remainder when Dividing by 4, 8, etc.", "Dividing Tricks", "Only the last two or three digits control powers of 2."],
  ["1.4.2", "Finding a Remainder when Dividing by 3, 9, etc.", "Dividing Tricks", "Use digit sums, then reduce the smaller number."],
  ["1.4.3", "Finding a Remainder when Dividing by 11", "Dividing Tricks", "Use alternating digit sums for divisibility by 11."],
  ["1.4.4", "Finding Remainders of Other Integers", "Dividing Tricks", "Reduce the number in convenient chunks using modular arithmetic."],
  ["1.4.5", "Remainders of Expressions", "Dividing Tricks", "Reduce each term modulo the divisor before combining."],
  ["1.4.6", "Dividing by 9 Trick", "Dividing Tricks", "Use digit sums and carry-style quotient building."],
  ["1.4.7", "Converting a/40 and b/80 to Decimals", "Dividing Tricks", "Scale the denominator to 100, 1000, or another decimal base."],
  ["1.5.1", "Subtracting Reverses", "Adding and Subtracting", "Subtract reversed numbers by using digit differences and 9-patterns."],
  ["1.5.2", "Switching Numbers and Negating on Subtraction", "Adding and Subtracting", "Reverse the subtraction order when it makes the arithmetic cleaner, then negate."],
  ["1.5.3", "Telescoping Fraction Sum", "Adding and Subtracting", "Look for cancellation across consecutive denominator factors."],
  ["1.5.4", "a/b + b/a Trick", "Adding and Subtracting", "Combine into (a^2 + b^2) / ab and simplify mentally."],
  ["1.5.5", "Fraction Subtraction Trick", "Adding and Subtracting", "Use the displayed structured fraction subtraction form to avoid full common-denominator work."],
  ["2.1.1", "Squares", "Important Numbers", "Recall square values quickly; do not recompute under time pressure."],
  ["2.1.2", "Cubes", "Important Numbers", "Recall common cubes and signs."],
  ["2.1.3", "Powers of 2, 3, 5", "Important Numbers", "Know the small powers cold, especially powers of 2 and 3."],
  ["2.1.4", "Important Fractions", "Important Numbers", "Convert common fractions, decimals, and percents instantly."],
  ["2.1.5", "Special Integers", "Important Numbers", "Recognize special multiples and recurring number patterns."],
  ["2.1.6", "Roman Numerals", "Important Numbers", "Convert by grouping thousands, hundreds, tens, and ones."],
  ["2.1.7", "Platonic Solids", "Important Numbers", "Recall faces, edges, and vertices for common solids."],
  ["2.1.8", "pi and e Approximations", "Important Numbers", "Use accepted approximations for estimation questions."],
  ["2.1.9", "Distance Conversions", "Important Numbers", "Use memorized mile, yard, foot, and inch conversions."],
  ["2.1.10", "Distance to Area/Volume Conversions", "Important Numbers", "Square or cube the linear conversion factor."],
  ["2.1.11", "Fluid and Weight Conversions", "Important Numbers", "Recall common US fluid and weight conversion chains."],
  ["2.1.12", "Celsius to Fahrenheit Conversions", "Important Numbers", "Use F = 9C/5 + 32 and reverse when needed."],
  ["2.2.1", "Sum of Series", "Formulas", "Use arithmetic/geometric series formulas instead of adding term by term."],
  ["2.2.2", "Fibonacci Numbers", "Formulas", "Recall the sequence and basic Fibonacci identities."],
  ["2.2.3", "Integral Divisors", "Formulas", "Use prime factorization: number of divisors is product of exponent-plus-one terms."],
  ["2.2.4", "Number of Diagonals of a Polygon", "Formulas", "Use n(n - 3) / 2."],
  ["2.2.5", "Exterior/Interior Angles", "Formulas", "Exterior sum is 360; interior sum is 180(n - 2)."],
  ["2.2.6", "Triangular, Pentagonal, etc. Numbers", "Formulas", "Use figurate-number formulas and simplify early."],
  ["2.2.7", "Finding Sides of a Triangle", "Formulas", "Use triangle inequality and known right-triangle patterns."],
  ["2.2.8", "Equilateral Triangle Formulas", "Formulas", "Remember height, area, inradius, and circumradius relationships."],
  ["2.2.9", "Formulas of Solids", "Formulas", "Choose the correct surface area or volume formula before substituting."],
  ["2.2.10", "Combinations and Permutations", "Formulas", "Use nPr and nCr; cancel factorials before multiplying."],
  ["2.2.11", "Trigonometric Values", "Formulas", "Recall unit-circle values for common angles."],
  ["2.2.12", "Trigonometric Formulas", "Formulas", "Use identities to simplify before evaluating."],
  ["2.2.13", "Graphs of Sines/Cosines", "Formulas", "Track amplitude, period, shifts, and key points."],
  ["2.2.14", "Vertex of a Parabola", "Formulas", "Use x = -b/(2a), then substitute for y."],
  ["2.2.15", "Discriminant and Roots", "Formulas", "Use b^2 - 4ac and root relationships."],
  ["3.1.1", "GCD/GCF and LCM", "Random Assortment", "Prime-factor both numbers; GCD takes minimum exponents, LCM takes maximum exponents."],
  ["3.1.2", "Perfect, Abundant, and Deficient Numbers", "Random Assortment", "Compare the sum of proper divisors with the number."],
  ["3.1.3", "Sum/Product of Coefficients in Binomial Expansion", "Random Assortment", "Evaluate the polynomial at 1 for coefficient sum and at useful values for variants."],
  ["3.1.4", "Sum/Product of the Roots", "Random Assortment", "Use Vieta's formulas."],
  ["3.1.5", "Finding Units Digit of x^n", "Random Assortment", "Find the units-digit cycle and reduce the exponent."],
  ["3.1.6", "Exponent Rules", "Random Assortment", "Combine powers with the same base and apply exponent laws."],
  ["3.1.7", "Log Rules", "Random Assortment", "Use product, quotient, power, and base-change rules."],
  ["3.1.8", "Square Root Problems", "Random Assortment", "Simplify perfect-square factors first."],
  ["3.1.9", "Finding Approximations of Square Roots", "Random Assortment", "Anchor between nearby perfect squares and interpolate."],
  ["3.1.10", "Complex Numbers", "Random Assortment", "Use i^2 = -1 and cycle powers of i."],
  ["3.1.11", "Function Inverses", "Random Assortment", "Swap x and y, then solve for y."],
  ["3.1.12", "Patterns", "Random Assortment", "Identify the operation or recurrence before computing."],
  ["3.1.13", "Probability and Odds", "Random Assortment", "Use favorable outcomes over total outcomes; convert odds carefully."],
  ["3.1.14", "Sets", "Random Assortment", "Use inclusion-exclusion and Venn-region reasoning."],
  ["3.2.1", "Converting Integers", "Changing Bases", "Use repeated division or place-value expansion."],
  ["3.2.2", "Converting Decimals", "Changing Bases", "Use repeated multiplication for fractional parts."],
  ["3.2.3", "Performing Operations", "Changing Bases", "Convert, operate, then convert back when fastest."],
  ["3.2.4", "Changing Between Bases: Special Case", "Changing Bases", "Use direct grouping when bases are powers of one another."],
  ["3.2.5", "Changing Bases: Sum of Powers", "Changing Bases", "Represent the number as a sum of powers of the base."],
  ["3.2.6", "Changing Bases: Miscellaneous Topics", "Changing Bases", "Pick the base strategy that minimizes conversion work."],
  ["3.3.1", "In the form: .aaaaa...", "Repeating Decimals", "A one-digit repeat a equals a/9."],
  ["3.3.2", "In the form: .ababa...", "Repeating Decimals", "A two-digit repeat ab equals ab/99."],
  ["3.3.3", "In the form: .abbbb...", "Repeating Decimals", "Separate the nonrepeating digit from the repeating tail."],
  ["3.3.4", "In the form: .abcbcbc...", "Repeating Decimals", "Use the nonrepeating prefix and repeating block formula."],
  ["3.4", "Modular Arithmetic", "Miscellaneous Topics", "Reduce early and often; replace large numbers with their residues."],
  ["3.5.1", "1*1! + 2*2! + ... + n*n!", "Fun with Factorials", "Use the telescoping identity k*k! = (k+1-1)k! = (k+1)! - k!."],
  ["3.5.2", "(a! +/- b!) / c!", "Fun with Factorials", "Factor out the smallest factorial before simplifying."],
  ["3.5.3", "Wilson's Theorem", "Fun with Factorials", "For prime p, (p-1)! is congruent to -1 mod p."],
  ["3.6.1", "Limits", "Basic Calculus", "Substitute first; if indeterminate, simplify algebraically."],
  ["3.6.2", "Derivatives", "Basic Calculus", "Use power, product, quotient, and chain rules."],
  ["3.6.3", "Integration", "Basic Calculus", "Reverse derivative rules and simplify constants early."],
];

const importedProblemSets = {
  "1.1": [
    "95 * 30", "90 * 78", "51 * 11", "83 * 51",
    "64 * 53", "65 * 81", "92 * 76", "25 * 46",
    "94 * 92", "27 * 64", "34 * 27", "11 * 77",
    "44 * 87", "86 * 63", "54 * 92", "83 * 68",
    "72 * 65", "81 * 96", "57 * 89", "25 * 98",
    "34 * 32", "88 * 76", "22 * 11", "36 * 69",
    "35 * 52", "15 * 88", "62 * 48", "56 * 40",
    "62 * 78", "57 * 67", "28 * 44", "80 * 71",
    "51 * 61", "81 * 15", "64 * 14", "47 * 37",
    "79 * 97", "99 * 87", "49 * 54", "29 * 67",
    "38 * 98", "75 * 47", "77 * 34", "49 * 94",
    "71 * 29", "85 * 66", "13 * 65", "64 * 11",
    "62 * 15", "43 * 65", "74 * 72", "49 * 41",
    "23 * 70", "72 * 75", "53 * 59", "82 * 91",
    "14 * 17", "67 * 27", "85 * 25", "25 * 99",
    "137 * 32", "428 * 74", "996 * 47", "654 * 45",
    "443 * 39", "739 * 50", "247 * 87", "732 * 66",
    "554 * 77", "324 * 11", "111 * 54", "885 * 78",
    "34 * 655", "52 * 532", "33 * 334", "45 * 301",
    "543 * 543", "606 * 212", "657 * 322", "543 * 230",
    "111 * 121", "422 * 943", "342 * 542", "789 * 359",
    "239 * 795", "123 * 543", "683 * 429", "222 * 796",
  ],
  "1.2.1": [
    {
      "prompt": "11 × 54",
      "answer": "594"
    },
    {
      "prompt": "11 × 72",
      "answer": "792"
    },
    {
      "prompt": "11 × 38",
      "answer": "418"
    },
    {
      "prompt": "462 × 11",
      "answer": "5082"
    },
    {
      "prompt": "11 × 74",
      "answer": "814"
    },
    {
      "prompt": "66 × 11",
      "answer": "726"
    },
    {
      "prompt": "1.1 × 2.3",
      "answer": "2.53"
    },
    {
      "prompt": "52 × 11",
      "answer": "572"
    },
    {
      "prompt": "246 × 11",
      "answer": "2706"
    },
    {
      "prompt": "111 × 456",
      "answer": "50616"
    },
    {
      "prompt": "198 ÷ 11",
      "answer": "18"
    },
    {
      "prompt": "357 × 11",
      "answer": "3927"
    },
    {
      "prompt": "275 ÷ 11",
      "answer": "25"
    },
    {
      "prompt": "321 × 111",
      "answer": "35631"
    },
    {
      "prompt": "1.1 ×.25",
      "answer": ".275"
    },
    {
      "prompt": "111 × 44",
      "answer": "4884"
    },
    {
      "prompt": "374 ÷ 11",
      "answer": "34"
    },
    {
      "prompt": "87 × 111",
      "answer": "9657"
    },
    {
      "prompt": "286 ÷ 11",
      "answer": "26"
    },
    {
      "prompt": "111 × 53",
      "answer": "5883"
    },
    {
      "prompt": "297 ÷ 11",
      "answer": "27"
    },
    {
      "prompt": "2233 ÷ 11",
      "answer": "203"
    },
    {
      "prompt": "198 × 11",
      "answer": "2178"
    },
    {
      "prompt": "297 ÷ 11",
      "answer": "27"
    },
    {
      "prompt": "111 × 41",
      "answer": "4551"
    },
    {
      "prompt": "111 × 35",
      "answer": "3885"
    },
    {
      "prompt": "111 × 345",
      "answer": "38295"
    },
    {
      "prompt": "2003 × 111",
      "answer": "222333"
    },
    {
      "prompt": "3 × 5 × 7 × 11",
      "answer": "1155"
    },
    {
      "prompt": "121 × 121",
      "answer": "14641"
    },
    {
      "prompt": "33 × 1111",
      "answer": "36663"
    },
    {
      "prompt": "22 × 32",
      "answer": "704"
    },
    {
      "prompt": "36963 ÷ 111",
      "answer": "333"
    },
    {
      "prompt": "20.07 × 1.1",
      "answer": "22.077"
    },
    {
      "prompt": "11% of 22% is: % (dec.)",
      "answer": "2.42%"
    },
    {
      "prompt": "13 × 121",
      "answer": "1573"
    },
    {
      "prompt": "27972 ÷ 111",
      "answer": "252"
    },
    {
      "prompt": "2006 × 11",
      "answer": "22066"
    },
    {
      "prompt": "114",
      "answer": "14641"
    },
    {
      "prompt": "33 × 44",
      "answer": "1452"
    },
    {
      "prompt": "2 × 3 × 11 × 13",
      "answer": "858"
    },
    {
      "prompt": "121 × 22",
      "answer": "2662"
    },
    {
      "prompt": "44 × 55",
      "answer": "2420"
    },
    {
      "prompt": "2 × 3 × 5 × 7 × 11",
      "answer": "2310"
    },
    {
      "prompt": "2553 ÷ 111",
      "answer": "23"
    },
    {
      "prompt": "114 × 121",
      "answer": "13794"
    },
    {
      "prompt": "44 × 25 × 11",
      "answer": "12100"
    },
    {
      "prompt": "55 × 33",
      "answer": "1815"
    },
    {
      "prompt": "(*) 32 × 64 × 16 ÷ 48",
      "answer": "(*) 648 − 717"
    },
    {
      "prompt": "2002 ÷ 11",
      "answer": "182"
    },
    {
      "prompt": "77 × 88",
      "answer": "6776"
    },
    {
      "prompt": "(*) 44.4 × 33.3 × 22.2",
      "answer": "(*) 31181 − 34465"
    },
    {
      "prompt": "11 × 11 × 11 × 11",
      "answer": "14641"
    },
    {
      "prompt": "25553 ÷ 1111",
      "answer": "23"
    },
    {
      "prompt": "11 × 13 × 42",
      "answer": "6006"
    },
    {
      "prompt": "1111 × 123",
      "answer": "136653"
    },
    {
      "prompt": "2 × 5 × 3 × 7 × 11",
      "answer": "2310"
    },
    {
      "prompt": "121 × 124",
      "answer": "15004"
    },
    {
      "prompt": "(*) 33 × 44 × 55",
      "answer": "(*) 75897 − 83853"
    }
  ],
  "1.2.2": [
    {
      "prompt": "1234 × 101",
      "answer": "124634"
    },
    {
      "prompt": "10.1 × 234",
      "answer": "2363.4"
    },
    {
      "prompt": "369 × 101",
      "answer": "37269"
    },
    {
      "prompt": "34845 ÷ 101",
      "answer": "345"
    },
    {
      "prompt": "22422 ÷ 101",
      "answer": "222"
    },
    {
      "prompt": "202 × 123",
      "answer": "24846"
    },
    {
      "prompt": "If 6 balls cost $6.06, then 15 balls cost: $",
      "answer": "$15.15"
    },
    {
      "prompt": "404 × 1111",
      "answer": "448844"
    },
    {
      "prompt": "(*) (48 + 53) × 151",
      "answer": "(*) 14488 − 16014"
    },
    {
      "prompt": "(*) 8888 × 62.5% × 5 11",
      "answer": "(*) 2398 − 2652"
    }
  ],
  "1.2.3": [
    {
      "prompt": "240 × 25",
      "answer": "6000"
    },
    {
      "prompt": "25 × 432",
      "answer": "10800"
    },
    {
      "prompt": "2.6 × 2.5",
      "answer": "6.5"
    },
    {
      "prompt": "148 × 25",
      "answer": "3700"
    },
    {
      "prompt": "25 × 33",
      "answer": "825"
    },
    {
      "prompt": "64 ÷ 25",
      "answer": "2.56"
    },
    {
      "prompt": "25 × 147",
      "answer": "3675"
    },
    {
      "prompt": "418 × 25",
      "answer": "10450"
    },
    {
      "prompt": "616 ÷ 25",
      "answer": "24.64"
    },
    {
      "prompt": "2.5 × 40.4",
      "answer": "101"
    },
    {
      "prompt": "1.1 ÷ 2.5",
      "answer": ".44"
    },
    {
      "prompt": "3232 × 25",
      "answer": "80800"
    },
    {
      "prompt": "(*) 97531 ÷ 246",
      "answer": "(*) 376 − 417"
    },
    {
      "prompt": "Which is smaller: 6 25 or.25 :",
      "answer": "6"
    },
    {
      "prompt": "209 × 25",
      "answer": "5225"
    },
    {
      "prompt": "(18 + 16)(9 + 16)",
      "answer": "850"
    },
    {
      "prompt": "(*) 334455 ÷ 251",
      "answer": "(*) 1265 − 1400"
    },
    {
      "prompt": "21.4 is % of 25.",
      "answer": "85.6%"
    },
    {
      "prompt": "404 ÷ 25",
      "answer": "16.16"
    },
    {
      "prompt": "303 × 25",
      "answer": "7575"
    },
    {
      "prompt": "(*) 97531 ÷ 246",
      "answer": "(*) 376 − 417"
    },
    {
      "prompt": "Which is larger: 7 25 or.25 :",
      "answer": "7"
    },
    {
      "prompt": "2006 ÷ 25",
      "answer": "80.24"
    },
    {
      "prompt": "25 × 307",
      "answer": "7675"
    },
    {
      "prompt": "32 is 2 1 2 % of:",
      "answer": "1280"
    },
    {
      "prompt": "(*) 47985 ÷ 246",
      "answer": "(*) 185 − 205"
    },
    {
      "prompt": "25 × 2003",
      "answer": "50075"
    },
    {
      "prompt": "15 × 25 × 11",
      "answer": "4125"
    },
    {
      "prompt": "11 × 24 × 25",
      "answer": "6600"
    },
    {
      "prompt": "11 × 18 × 25",
      "answer": "4950"
    },
    {
      "prompt": "(*) 248 × 250 × 252",
      "answer": "(*) 14842800 − 16405200"
    }
  ],
  "1.2.4": [
    {
      "prompt": "48 × 75",
      "answer": "3600"
    },
    {
      "prompt": "64 × 75",
      "answer": "4800"
    },
    {
      "prompt": "66 ÷ 75",
      "answer": ".88"
    },
    {
      "prompt": "84 × 75",
      "answer": "6300"
    },
    {
      "prompt": "(*) 443322 ÷ 751",
      "answer": "(*) 560 − 620"
    },
    {
      "prompt": "28 × 75",
      "answer": "2100"
    },
    {
      "prompt": "75 × 24",
      "answer": "1800"
    },
    {
      "prompt": "(*) 7532 × 1468",
      "answer": "(*) 10504127 − 11609825"
    },
    {
      "prompt": "48 ÷ 75",
      "answer": ".64"
    },
    {
      "prompt": "(*) 566472 ÷ 748",
      "answer": "(*) 719 − 796"
    },
    {
      "prompt": "96 ÷ 75",
      "answer": "1.28"
    },
    {
      "prompt": "75 × 11 × 24",
      "answer": "19800"
    },
    {
      "prompt": "4800 ÷ 75",
      "answer": "64"
    },
    {
      "prompt": "75 × 48 × 15",
      "answer": "54000"
    },
    {
      "prompt": "8.8 × 7.5 × 1.1",
      "answer": "72.6"
    }
  ],
  "1.2.5": [
    {
      "prompt": "125 × 320",
      "answer": "40000"
    },
    {
      "prompt": "(*) 8333 × 24",
      "answer": "(*) 189992 − 209992"
    },
    {
      "prompt": "138 ÷ 125",
      "answer": "1.104"
    },
    {
      "prompt": "(*) 57381 ÷ 128",
      "answer": "(*) 425 − 471"
    },
    {
      "prompt": "(*) 245632 ÷ 111",
      "answer": "(*) 2212 − 2446"
    },
    {
      "prompt": "(*) 16667 ÷ 8333 × 555",
      "answer": "(*) 1054 − 1166"
    },
    {
      "prompt": "625 × 320",
      "answer": "200000"
    },
    {
      "prompt": "(*) 774447 ÷ 111",
      "answer": "(*) 6628 − 7326"
    },
    {
      "prompt": "(*) 62.5 × 3248",
      "answer": "(*) 192850 − 213150"
    },
    {
      "prompt": "12.5 × 480",
      "answer": "6000"
    },
    {
      "prompt": "(*) 17304 ÷ 118",
      "answer": "(*) 139 − 154"
    },
    {
      "prompt": "(*) 87% of 5590",
      "answer": "(*) 4620 − 5107"
    },
    {
      "prompt": "(*) 457689 ÷ 111",
      "answer": "(*) 3917 − 4330"
    },
    {
      "prompt": "(*) 625 × 648",
      "answer": "(*) 384750 − 425250"
    },
    {
      "prompt": "375 × 408",
      "answer": "153000"
    },
    {
      "prompt": "(*) 359954 ÷ 1111",
      "answer": "(*) 307 − 341"
    },
    {
      "prompt": "88 × 12.5 ×.11",
      "answer": "121"
    },
    {
      "prompt": "(*) 719 × 875",
      "answer": "(*) 597668 − 660582"
    },
    {
      "prompt": "(*) 428571 × 22",
      "answer": "(*) 8957133 − 9899991"
    },
    {
      "prompt": "(*) 85714.2 ÷ 714.285",
      "answer": "(*) 114 − 126"
    },
    {
      "prompt": "488 × 375",
      "answer": "183000"
    },
    {
      "prompt": "(*) 6311 × 1241",
      "answer": "(*) 7440353 − 8223549"
    },
    {
      "prompt": "(*) 884422 ÷ 666",
      "answer": "(*) 1261 − 1395"
    },
    {
      "prompt": "(*) 106.25% of 640",
      "answer": "(*) 646 − 714"
    },
    {
      "prompt": "(*) 6388 × 3.75",
      "answer": "(*) 22757 − 25153"
    },
    {
      "prompt": "240 × 875",
      "answer": "210000"
    },
    {
      "prompt": "(*) 12.75 × 28300 ÷ 102",
      "answer": "(*) 3360 − 3715"
    },
    {
      "prompt": "375 × 24.8",
      "answer": "9300"
    },
    {
      "prompt": "(*) 857142 × 427",
      "answer": "(*) 347699652 − 384299616"
    },
    {
      "prompt": ".0625 ×.32",
      "answer": ".02"
    },
    {
      "prompt": "(*) 16667 × 369",
      "answer": "(*) 5842616 − 6457630"
    },
    {
      "prompt": "(*) 918576 ÷ 432",
      "answer": "(*) 2020 − 2233"
    },
    {
      "prompt": "(*) 456789 ÷ 123",
      "answer": "(*) 3528 − 3900"
    },
    {
      "prompt": "(*) 106% of 319",
      "answer": "(*) 321 − 356"
    },
    {
      "prompt": "(*) 571428 ×.875",
      "answer": "(*) 474999 − 525000"
    },
    {
      "prompt": "(*) 123% of 882",
      "answer": "(*) 1030 − 1140"
    },
    {
      "prompt": "(*) 95634 ÷ 278",
      "answer": "(*) 326 − 362"
    },
    {
      "prompt": "(*) 273849 ÷ 165",
      "answer": "(*) 1576 − 1743"
    },
    {
      "prompt": "(*) 5714.28 × 85",
      "answer": "(*) 461428 − 510000"
    },
    {
      "prompt": "(*) 9.08% of 443322",
      "answer": "(*) 38240 − 42267"
    },
    {
      "prompt": "(*) 8333 × 23",
      "answer": "(*) 182076 − 201242"
    },
    {
      "prompt": ".125 × 482",
      "answer": "60.25"
    },
    {
      "prompt": "(*) 714285 ×.875",
      "answer": "(*) 593749 − 656250"
    },
    {
      "prompt": "(*) 87% of 789",
      "answer": "(*) 652 − 721"
    },
    {
      "prompt": "(*) 16667 × 49",
      "answer": "(*) 775848 − 857518"
    },
    {
      "prompt": "(*) 123456 ÷ 111",
      "answer": "(*) 1056 − 1168"
    },
    {
      "prompt": "(*) 875421 ÷ 369",
      "answer": "(*) 2253 − 2492"
    },
    {
      "prompt": "(*) 71984 × 1.371",
      "answer": "(*) 93755 − 103625"
    },
    {
      "prompt": "(*) 63% of 7191",
      "answer": "(*) 4303 − 4757"
    },
    {
      "prompt": "(*) 5714.28 × 83",
      "answer": "(*) 450570 − 498000"
    },
    {
      "prompt": "(*) 1428.57 × 62",
      "answer": "(*) 84142 − 93000"
    },
    {
      "prompt": "(*) 80520 ÷ 131",
      "answer": "(*) 583 − 646"
    },
    {
      "prompt": "(*) 142.857 × 428.571",
      "answer": "(*) 58163 − 64286"
    },
    {
      "prompt": "(*) 12509 × 635",
      "answer": "(*) 7546054 − 8340376"
    },
    {
      "prompt": "(*) 1234 × 567",
      "answer": "(*) 664694 − 734662"
    },
    {
      "prompt": "(*) 789123 ÷ 456",
      "answer": "(*) 1644 − 1818"
    },
    {
      "prompt": "625 × 65",
      "answer": "40625"
    },
    {
      "prompt": "(*) 1428.57 × 73",
      "answer": "(*) 99071 − 109500"
    },
    {
      "prompt": "(*) 7142.85 × 34.2",
      "answer": "(*) 232071 − 256500"
    },
    {
      "prompt": "(*) 333 × 808 × 444",
      "answer": "(*) 113491195 − 125437637"
    },
    {
      "prompt": "(*) 571428 × 34",
      "answer": "(*) 18457124 − 20399980"
    },
    {
      "prompt": "(*) 833 × 612",
      "answer": "(*) 484306 − 535286"
    },
    {
      "prompt": "(*) 8333 × (481 + 358)",
      "answer": "(*) 6641817 − 7340957"
    },
    {
      "prompt": "(*) 234678 ÷ 9111",
      "answer": "(*) 24 − 28"
    },
    {
      "prompt": "(*) 428.571 × 87.5",
      "answer": "(*) 35624 − 39375"
    },
    {
      "prompt": "(*) 375.1 × 83.33 × 1.595",
      "answer": "(*) 47362 − 52348"
    },
    {
      "prompt": "(*) 8333 ÷ 6666 × 4444",
      "answer": "(*) 5277 − 5834"
    },
    {
      "prompt": "(*) 8333 × 12 1 2 % ×.12",
      "answer": "(*) 118 − 132"
    },
    {
      "prompt": "(*) 639 × 375 ÷ 28",
      "answer": "(*) 8130 − 8986"
    },
    {
      "prompt": "(*) 6250 ÷ 8333 × 8888",
      "answer": "(*) 6332 − 7000"
    },
    {
      "prompt": "(*) 416666 ÷ 555 × 76",
      "answer": "(*) 54204 − 59910"
    },
    {
      "prompt": "(*) 375 ÷ 833 × 555",
      "answer": "(*) 237 − 263"
    },
    {
      "prompt": "(*) 438 ÷ 9 1 11 % × 11.1",
      "answer": "(*) 50805 − 56154"
    },
    {
      "prompt": "(*) 857142 ÷ 428571 × 7777",
      "answer": "(*) 14776 − 16332"
    },
    {
      "prompt": "(*) 546 ÷ 45 5 11 % × 10.8",
      "answer": "(*) 12324 − 13622"
    },
    {
      "prompt": "(*) 54.5454 × 66.6 × 58",
      "answer": "(*) 200163 − 221233"
    },
    {
      "prompt": "(*) 456 ÷ 18.75% × 1 4",
      "answer": "(*) 577 − 639"
    },
    {
      "prompt": "(*) 818 ÷ 44 4 9 % × 12.5",
      "answer": "(*) 21855 − 24157"
    },
    {
      "prompt": "(*) 62.5 ÷ 83.3 × 888",
      "answer": "(*) 632 − 700"
    },
    {
      "prompt": "(*) 797 ÷ 87.5% × 7 10",
      "answer": "(*) 605 − 670"
    },
    {
      "prompt": "(*) 888 × 87.5% ÷ 7 11",
      "answer": "(*) 1159 − 1283"
    },
    {
      "prompt": "(*) 1250 ÷ 1666 × 4444",
      "answer": "(*) 3167 − 3502"
    },
    {
      "prompt": "(*) 85858 ÷ 585",
      "answer": "(*) 139 − 155"
    },
    {
      "prompt": "(*) (51597 ÷ 147)2",
      "answer": "(*) 117040 − 129362"
    }
  ],
  "1.2.6": [
    {
      "prompt": "1.5 × 5.2",
      "answer": "7.8"
    },
    {
      "prompt": "4.8 × 15",
      "answer": "72"
    },
    {
      "prompt": "64 × 1.5",
      "answer": "96"
    },
    {
      "prompt": "15 × 48",
      "answer": "720"
    },
    {
      "prompt": "14 × 203",
      "answer": "2842"
    },
    {
      "prompt": "14 × 312",
      "answer": "4368"
    },
    {
      "prompt": "24 × 35",
      "answer": "840"
    },
    {
      "prompt": "312 × 14",
      "answer": "4368"
    },
    {
      "prompt": "A rectangle has a length of 2.4 and a width of 1.5. It’s area is:",
      "answer": "3.6"
    },
    {
      "prompt": "18 × 112",
      "answer": "2016"
    },
    {
      "prompt": "27 × 14",
      "answer": "378"
    },
    {
      "prompt": "21 × 15 × 14",
      "answer": "4410"
    },
    {
      "prompt": "33.75 = 1.5 ×",
      "answer": "22.5"
    },
    {
      "prompt": "345 × 12",
      "answer": "4140"
    },
    {
      "prompt": "1.2 × 1.25",
      "answer": "1.5"
    },
    {
      "prompt": "24% of 44 is",
      "answer": "10.56"
    },
    {
      "prompt": "14 × 25 + 12.5 × 28",
      "answer": "700"
    }
  ],
  "1.2.7": [
    {
      "prompt": "89 × 97",
      "answer": "8633"
    },
    {
      "prompt": "96 × 97",
      "answer": "9312"
    },
    {
      "prompt": "103 × 109",
      "answer": "11227"
    },
    {
      "prompt": "93 × 97",
      "answer": "9021"
    },
    {
      "prompt": "103 × 107",
      "answer": "11021"
    },
    {
      "prompt": "93 × 89",
      "answer": "8277"
    },
    {
      "prompt": "102 × 108",
      "answer": "11016"
    },
    {
      "prompt": "109 × 107",
      "answer": "11663"
    },
    {
      "prompt": "96 × 89",
      "answer": "8544"
    },
    {
      "prompt": "92 × 97",
      "answer": "8924"
    },
    {
      "prompt": "103 × 104",
      "answer": "10712"
    },
    {
      "prompt": "102 × 103",
      "answer": "10506"
    },
    {
      "prompt": "92 × 93",
      "answer": "8556"
    },
    {
      "prompt": "106 × 107",
      "answer": "11342"
    },
    {
      "prompt": "97 × 89",
      "answer": "8633"
    },
    {
      "prompt": "94 × 98",
      "answer": "8212"
    },
    {
      "prompt": "94 × 91",
      "answer": "8554"
    },
    {
      "prompt": "91 × 98",
      "answer": "8918"
    },
    {
      "prompt": "993 × 994",
      "answer": "987042"
    },
    {
      "prompt": "103 × 96",
      "answer": "9888"
    },
    {
      "prompt": "93 × 103",
      "answer": "9579"
    },
    {
      "prompt": "991 × 989",
      "answer": "980099"
    },
    {
      "prompt": "1009 × 1004",
      "answer": "1013036"
    },
    {
      "prompt": "97 × 107",
      "answer": "10379"
    },
    {
      "prompt": "93 × 104",
      "answer": "9672"
    },
    {
      "prompt": "96 × 103",
      "answer": "9888"
    },
    {
      "prompt": "991 × 991",
      "answer": "982081"
    },
    {
      "prompt": "104 × 97",
      "answer": "10088"
    },
    {
      "prompt": "1003 × 1008",
      "answer": "1011024"
    },
    {
      "prompt": "(*) 98 2 + 972",
      "answer": "(*) 18062 − 19964"
    },
    {
      "prompt": "192 × 32 × 22",
      "answer": "12996"
    }
  ],
  "1.2.8": [
    {
      "prompt": "25% of 25",
      "answer": "6.25"
    },
    {
      "prompt": ".35 × 3.5",
      "answer": "1.225"
    },
    {
      "prompt": "122 + 2 × 12 × 13 + 132",
      "answer": "625"
    },
    {
      "prompt": "(115)2",
      "answer": "13225"
    },
    {
      "prompt": "f (x) = 9x2 − 12x + 4, f (19)",
      "answer": "3025"
    },
    {
      "prompt": "45% of 45 − 45",
      "answer": "−24.75"
    },
    {
      "prompt": "(*) 12 4",
      "answer": "(*) 19699 − 21773"
    },
    {
      "prompt": "505 × 505",
      "answer": "255025"
    },
    {
      "prompt": "A square has an area of 12.25 sq. cm. It’s perimeter is:",
      "answer": "14"
    }
  ],
  "1.2.9": [
    {
      "prompt": "582",
      "answer": "3364"
    },
    {
      "prompt": "(510)2",
      "answer": "260100"
    },
    {
      "prompt": "47 × 47",
      "answer": "2209"
    },
    {
      "prompt": "532",
      "answer": "2809"
    },
    {
      "prompt": "(*) 48 × 49 × 50",
      "answer": "(*) 111720 − 123480"
    },
    {
      "prompt": "562",
      "answer": "3136"
    },
    {
      "prompt": "59 × 59",
      "answer": "3481"
    },
    {
      "prompt": "412",
      "answer": "1681"
    }
  ],
  "1.2.10": [
    {
      "prompt": "84 × 86",
      "answer": "7224"
    },
    {
      "prompt": "53 × 57",
      "answer": "3021"
    },
    {
      "prompt": "48 × 52",
      "answer": "2496"
    },
    {
      "prompt": "62 × 58",
      "answer": "3596"
    },
    {
      "prompt": "6.8 × 7.2",
      "answer": "48.96"
    },
    {
      "prompt": "88 × 82",
      "answer": "7216"
    },
    {
      "prompt": "36 × 24",
      "answer": "864"
    },
    {
      "prompt": "7.6 × 8.4",
      "answer": "63.84"
    },
    {
      "prompt": "5.3 × 4.7",
      "answer": "24.91"
    },
    {
      "prompt": "51 × 59 + 16",
      "answer": "3025"
    },
    {
      "prompt": "96 × 104",
      "answer": "9984"
    },
    {
      "prompt": "81 × 89 + 16",
      "answer": "7225"
    },
    {
      "prompt": "34 × 36 + 1",
      "answer": "1225"
    },
    {
      "prompt": "73 × 77 + 4",
      "answer": "5625"
    },
    {
      "prompt": "62 × 68 + 9",
      "answer": "4225"
    },
    {
      "prompt": "32 × 38 + 9",
      "answer": "1225"
    },
    {
      "prompt": "18 × 24 + 9",
      "answer": "441"
    },
    {
      "prompt": "61 × 69 + 16",
      "answer": "4225"
    },
    {
      "prompt": "43 × 47 + 4",
      "answer": "2025"
    },
    {
      "prompt": "88 × 82 + 9",
      "answer": "7225"
    },
    {
      "prompt": "57 × 53 + 4",
      "answer": "3025"
    },
    {
      "prompt": "38 × 28",
      "answer": "1064"
    },
    {
      "prompt": "41 × 49 − 9",
      "answer": "2000"
    },
    {
      "prompt": "77 × 73 + 4",
      "answer": "5625"
    },
    {
      "prompt": "65 × 75 − 33",
      "answer": "4842"
    },
    {
      "prompt": "33 × 27 + 9",
      "answer": "900"
    },
    {
      "prompt": "71 × 79 + 16",
      "answer": "5625"
    },
    {
      "prompt": "72 × 78 + 9",
      "answer": "5625"
    },
    {
      "prompt": "53 × 57 + 4",
      "answer": "3025"
    },
    {
      "prompt": "105 × 95",
      "answer": "9975"
    },
    {
      "prompt": "62 × 68 − 16",
      "answer": "4200"
    },
    {
      "prompt": "36 × 26",
      "answer": "936"
    },
    {
      "prompt": "83 × 87 − 21",
      "answer": "7200"
    },
    {
      "prompt": "23 × 27 + 4",
      "answer": "625"
    },
    {
      "prompt": "29 × 37",
      "answer": "1073"
    },
    {
      "prompt": "21 − 83 × 87",
      "answer": "−7200"
    },
    {
      "prompt": "112 × 88",
      "answer": "9856"
    },
    {
      "prompt": "(*) 52 × 48 + 49 × 51",
      "answer": "(*) 4745 − 5245"
    },
    {
      "prompt": "(*) 4.93 × 3.33",
      "answer": "(*) 4016 − 4440"
    },
    {
      "prompt": "(*) 72 × 68 + 71 × 69",
      "answer": "(*) 9305 − 10285"
    },
    {
      "prompt": "(*) 42 × 38 + 41 × 39",
      "answer": "(*) 3035 − 3355"
    },
    {
      "prompt": "(*) 4.83 × 6.33",
      "answer": "(*) 26270 − 29036"
    },
    {
      "prompt": "(*) 4000 + 322 × 318",
      "answer": "(*) 101076 111716"
    },
    {
      "prompt": "118 × 122 + 4",
      "answer": "14400"
    },
    {
      "prompt": "(*) 5.13 × 7.93",
      "answer": "(*) 62132 − 68673"
    },
    {
      "prompt": "(*) 34 × 36 × 34 × 36",
      "answer": "(*) 1423267 − 1573085"
    }
  ],
  "1.2.11": [
    {
      "prompt": "43 × 34",
      "answer": "1462"
    },
    {
      "prompt": "23 × 32",
      "answer": "736"
    },
    {
      "prompt": "31 × 13",
      "answer": "403"
    },
    {
      "prompt": "21 × 12",
      "answer": "252"
    },
    {
      "prompt": "27 × 72",
      "answer": "1944"
    },
    {
      "prompt": "61 × 16",
      "answer": "976"
    },
    {
      "prompt": "15 × 51",
      "answer": "765"
    },
    {
      "prompt": "14 × 41",
      "answer": "574"
    },
    {
      "prompt": "18 × 81",
      "answer": "1458"
    },
    {
      "prompt": "36 × 63",
      "answer": "2268"
    },
    {
      "prompt": "42 × 24",
      "answer": "1008"
    },
    {
      "prompt": "26 × 62",
      "answer": "1612"
    }
  ],
  "1.3.1": [
    {
      "prompt": "2022",
      "answer": "40804"
    },
    {
      "prompt": "406 × 406",
      "answer": "164836"
    },
    {
      "prompt": "503 × 503",
      "answer": "253009"
    },
    {
      "prompt": "6072",
      "answer": "368449"
    },
    {
      "prompt": "2082",
      "answer": "43264"
    },
    {
      "prompt": "3062",
      "answer": "93636"
    },
    {
      "prompt": "509 × 509",
      "answer": "259081"
    },
    {
      "prompt": "8042",
      "answer": "646416"
    },
    {
      "prompt": "704 × 704",
      "answer": "495616"
    },
    {
      "prompt": "4082",
      "answer": "166464"
    },
    {
      "prompt": "602 × 602",
      "answer": "362404"
    },
    {
      "prompt": "3032",
      "answer": "91809"
    },
    {
      "prompt": "9092",
      "answer": "826281"
    },
    {
      "prompt": "4022",
      "answer": "161604"
    },
    {
      "prompt": "7072",
      "answer": "499849"
    },
    {
      "prompt": "301 × 113",
      "answer": "34013"
    },
    {
      "prompt": "803 × 803",
      "answer": "644809"
    },
    {
      "prompt": "4042",
      "answer": "163216"
    },
    {
      "prompt": "5122",
      "answer": "262144"
    },
    {
      "prompt": "122 × 311",
      "answer": "37942"
    },
    {
      "prompt": "6122",
      "answer": "374544"
    },
    {
      "prompt": "321 × 302",
      "answer": "96942"
    },
    {
      "prompt": "7142",
      "answer": "509796"
    },
    {
      "prompt": "234 × 211",
      "answer": "49374"
    },
    {
      "prompt": "112 × 211",
      "answer": "23632"
    },
    {
      "prompt": "214 × 314",
      "answer": "67196"
    },
    {
      "prompt": "203 × 123",
      "answer": "24969"
    },
    {
      "prompt": "121 × 411",
      "answer": "49731"
    },
    {
      "prompt": "412 × 112",
      "answer": "46144"
    },
    {
      "prompt": "505 × 404",
      "answer": "204020"
    },
    {
      "prompt": "311 × 113",
      "answer": "35143"
    },
    {
      "prompt": "124 × 121",
      "answer": "15004"
    },
    {
      "prompt": "9182",
      "answer": "842724"
    },
    {
      "prompt": "124 × 312",
      "answer": "38688"
    },
    {
      "prompt": "311 × 122",
      "answer": "37942"
    },
    {
      "prompt": "5242",
      "answer": "274576"
    },
    {
      "prompt": "133 × 311",
      "answer": "41363"
    },
    {
      "prompt": "141 × 141",
      "answer": "19881"
    },
    {
      "prompt": "511 × 212",
      "answer": "108332"
    },
    {
      "prompt": "122 × 212",
      "answer": "25864"
    },
    {
      "prompt": "(12012)(12012)",
      "answer": "144288144"
    },
    {
      "prompt": "6672",
      "answer": "444889"
    }
  ],
  "1.3.2": [
    {
      "prompt": "82 + 242",
      "answer": "640"
    },
    {
      "prompt": "272 + 92",
      "answer": "810"
    },
    {
      "prompt": "15 × 12 + 9 × 30",
      "answer": "450"
    },
    {
      "prompt": "28 × 6 − 12 × 14",
      "answer": "0"
    },
    {
      "prompt": "332 + 112",
      "answer": "1210"
    },
    {
      "prompt": "48 × 22 − 22 × 78",
      "answer": "−660"
    },
    {
      "prompt": "3.92 + 1.32",
      "answer": "16.9"
    },
    {
      "prompt": "2004 + 2004 × 4",
      "answer": "10020"
    },
    {
      "prompt": "32 × 16 + 16 × 48",
      "answer": "1280"
    },
    {
      "prompt": "192 + 19",
      "answer": "380"
    },
    {
      "prompt": "2005 × 5 + 2005",
      "answer": "12030"
    },
    {
      "prompt": "27 × 33 − 11 × 81",
      "answer": "0"
    },
    {
      "prompt": "21 × 38 − 17 × 21",
      "answer": "441"
    },
    {
      "prompt": "40 × 12 + 20 × 24",
      "answer": "960"
    },
    {
      "prompt": "512 + 51 × 49",
      "answer": "5100"
    },
    {
      "prompt": "30 × 11 + 22 × 15",
      "answer": "660"
    },
    {
      "prompt": "212 + 72",
      "answer": "490"
    },
    {
      "prompt": "2006 − 2006 × 6",
      "answer": "−10030"
    },
    {
      "prompt": "12 × 16 + 8 × 24",
      "answer": "384"
    },
    {
      "prompt": "1.22 + 3.62",
      "answer": "14.4"
    },
    {
      "prompt": "14 × 44 − 14 × 30",
      "answer": "196"
    },
    {
      "prompt": "60 × 32 − 32 × 28",
      "answer": "1024"
    },
    {
      "prompt": "45 × 22 − 44 × 15",
      "answer": "330"
    },
    {
      "prompt": "(20 × 44) − (18 × 22)",
      "answer": "484"
    },
    {
      "prompt": "492 + 49",
      "answer": "2450"
    },
    {
      "prompt": "292 + 29",
      "answer": "870"
    },
    {
      "prompt": "16 × 66 − 16 × 50",
      "answer": "256"
    },
    {
      "prompt": "592 + 59",
      "answer": "3540"
    },
    {
      "prompt": "14 × 38 − 14 × 52",
      "answer": "−196"
    },
    {
      "prompt": "41 × 17 − 17 × 24",
      "answer": "289"
    },
    {
      "prompt": "17 × 34 − 51 × 17",
      "answer": "−289"
    },
    {
      "prompt": "15 × 36 + 12 × 45",
      "answer": "1080"
    },
    {
      "prompt": "692 + 69",
      "answer": "4830"
    },
    {
      "prompt": "13 × 77 + 91 × 11",
      "answer": "2002"
    },
    {
      "prompt": "113 − 112",
      "answer": "1210"
    },
    {
      "prompt": "12 × 90 + 72 × 15",
      "answer": "2160"
    },
    {
      "prompt": "792 + 79",
      "answer": "6320"
    },
    {
      "prompt": "54 × 11 + 99 × 6",
      "answer": "1188"
    },
    {
      "prompt": "10 · 11 + 11 · 11 + 12 · 11",
      "answer": "363"
    },
    {
      "prompt": "1192 + 119",
      "answer": "14280"
    },
    {
      "prompt": "392 + 39",
      "answer": "1560"
    },
    {
      "prompt": "18 × 36 − 18 × 54",
      "answer": "−324"
    },
    {
      "prompt": "22 × 75 + 110 × 15",
      "answer": "3300"
    },
    {
      "prompt": "99 × 99 + 99",
      "answer": "9900"
    },
    {
      "prompt": "45 × 16 − 24 × 30",
      "answer": "0"
    },
    {
      "prompt": "112 − 113",
      "answer": "−1210"
    },
    {
      "prompt": "25 × 77 + 25 × 34",
      "answer": "2775"
    },
    {
      "prompt": "15 × 18 + 9 × 30",
      "answer": "540"
    },
    {
      "prompt": "24 × 13 + 24 × 11",
      "answer": "576"
    },
    {
      "prompt": "129 × 129 + 129",
      "answer": "16770"
    },
    {
      "prompt": "13 × 15 + 11 × 65",
      "answer": "910"
    },
    {
      "prompt": "(*) 33 × 31 + 31 × 29",
      "answer": "(*) 1825 − 2019"
    },
    {
      "prompt": "31 × 44 + 44 × 44",
      "answer": "3300"
    },
    {
      "prompt": "122 + 242",
      "answer": "720"
    },
    {
      "prompt": "(*) 73 × 86 + 77 × 84",
      "answer": "(*) 12108 13384"
    },
    {
      "prompt": "(*) 63 × 119 + 121 × 17",
      "answer": "(*) 9076 − 10032"
    },
    {
      "prompt": "48 × 11 + 44 × 12",
      "answer": "1056"
    },
    {
      "prompt": "1092 + 109",
      "answer": "11990"
    },
    {
      "prompt": "(*) 38 × 107 + 47 × 93",
      "answer": "(*) 8015 − 8859"
    },
    {
      "prompt": "64 × 21 − 42 × 16",
      "answer": "672"
    },
    {
      "prompt": "(*) 23 × 34 + 43 × 32",
      "answer": "(*) 2050 − 2266"
    },
    {
      "prompt": "72 × 11 + 99 × 8",
      "answer": "1584"
    },
    {
      "prompt": "(*) 43 × 56 + 47 × 54",
      "answer": "(*) 4698 − 5194"
    },
    {
      "prompt": "15 × 75 + 45 × 25",
      "answer": "2250"
    },
    {
      "prompt": "42 × 48 + 63 × 42",
      "answer": "4662"
    },
    {
      "prompt": "142 − 282",
      "answer": "−588"
    },
    {
      "prompt": "(*) 31 × 117 + 30 × 213",
      "answer": "(*) 9516 − 10518"
    },
    {
      "prompt": "48 × 28 + 27 × 28",
      "answer": "2100"
    },
    {
      "prompt": "34 × 56 + 55 × 34",
      "answer": "3774"
    },
    {
      "prompt": "(*) 34 × 45 + 54 × 43",
      "answer": "(*) 3659 − 4045"
    }
  ],
  "1.3.3": [
    {
      "prompt": "352 + 362",
      "answer": "2521"
    },
    {
      "prompt": "122 + 132",
      "answer": "313"
    },
    {
      "prompt": "152 + 162",
      "answer": "481"
    },
    {
      "prompt": "252 + 262",
      "answer": "1301"
    },
    {
      "prompt": "402 + 412",
      "answer": "3281"
    },
    {
      "prompt": "802 + 812",
      "answer": "12961"
    }
  ],
  "1.3.4": [
    {
      "prompt": "(11 + 10)2 + (112 − 102)",
      "answer": "462"
    },
    {
      "prompt": "(30 + 2)2 + (302 − 22)",
      "answer": "1920"
    },
    {
      "prompt": "(10 + 9)2 + (102 − 92)",
      "answer": "380"
    },
    {
      "prompt": "(30 + 2)2 − (302 − 22)",
      "answer": "128"
    },
    {
      "prompt": "242 − (202 + 42)",
      "answer": "160"
    },
    {
      "prompt": "312 − (292 − 22)",
      "answer": "124"
    },
    {
      "prompt": "(302 − 22) + (30 + 2) 2",
      "answer": "1920"
    },
    {
      "prompt": "812 + (80 + 1)(80 − 1)",
      "answer": "12960"
    },
    {
      "prompt": "552 − (502 − 52)",
      "answer": "550"
    },
    {
      "prompt": "472 + 402 − 72",
      "answer": "3760"
    },
    {
      "prompt": "(55 + 3)2 + 552 − 32",
      "answer": "6380"
    },
    {
      "prompt": "302 − (282 − 22)",
      "answer": "120"
    },
    {
      "prompt": "382 + (30 + 8)(30 − 8)",
      "answer": "2280"
    },
    {
      "prompt": "422 + (402 − 22)",
      "answer": "3360"
    },
    {
      "prompt": "322 − (302 − 22)",
      "answer": "128"
    },
    {
      "prompt": "(28 + 2)2 + (282 − 22)",
      "answer": "1680"
    },
    {
      "prompt": "222 + 202 − 22",
      "answer": "880"
    },
    {
      "prompt": "452 − (402 − 52)",
      "answer": "450"
    },
    {
      "prompt": "552 − 502 + 52",
      "answer": "550"
    },
    {
      "prompt": "(30 + 2)2 − (302 − 22)",
      "answer": "128"
    },
    {
      "prompt": "53 × 53 + 50 × 50 − 3 × 3",
      "answer": "5300"
    },
    {
      "prompt": "462 − (212 − 252)",
      "answer": "2300"
    }
  ],
  "1.3.5": [
    {
      "prompt": "932 + 212",
      "answer": "9090"
    },
    {
      "prompt": "122 + 192",
      "answer": "505"
    },
    {
      "prompt": "722 + 132",
      "answer": "5353"
    },
    {
      "prompt": "822 + 122",
      "answer": "6868"
    },
    {
      "prompt": "452 + 462",
      "answer": "4141"
    },
    {
      "prompt": "362 + 572",
      "answer": "4545"
    },
    {
      "prompt": "552 + 562",
      "answer": "6161"
    },
    {
      "prompt": "372 + 672",
      "answer": "5858"
    }
  ],
  "1.3.6": [
    {
      "prompt": "732 − 722",
      "answer": "145"
    },
    {
      "prompt": "362 − 342",
      "answer": "140"
    },
    {
      "prompt": "572 − 582",
      "answer": "−115"
    },
    {
      "prompt": "672 − 662",
      "answer": "133"
    },
    {
      "prompt": "692 − 672",
      "answer": "272"
    },
    {
      "prompt": "542 − 552",
      "answer": "−109"
    },
    {
      "prompt": "672 − 652",
      "answer": "264"
    },
    {
      "prompt": "882 − 872",
      "answer": "175"
    },
    {
      "prompt": "482 − 492",
      "answer": "−97"
    },
    {
      "prompt": "972 − 962",
      "answer": "193"
    },
    {
      "prompt": "772 − 762",
      "answer": "153"
    },
    {
      "prompt": "542 − 532",
      "answer": "107"
    },
    {
      "prompt": "422 − 442",
      "answer": "−172"
    },
    {
      "prompt": "4.72 − 3.32",
      "answer": "11.2"
    },
    {
      "prompt": "1.32 − 2.62",
      "answer": "−6.72"
    },
    {
      "prompt": "652 − 642 + 632 − 622",
      "answer": "254"
    },
    {
      "prompt": "242 − 62",
      "answer": "540"
    },
    {
      "prompt": "562 − 552 + 542 − 532",
      "answer": "218"
    },
    {
      "prompt": "762 − 742",
      "answer": "300"
    },
    {
      "prompt": "3.52 − 6.52",
      "answer": "−30"
    },
    {
      "prompt": "222 − 232 + 242 − 252",
      "answer": "−94"
    },
    {
      "prompt": "552 − 502",
      "answer": "525"
    },
    {
      "prompt": "832 − 822 + 812 − 802",
      "answer": "326"
    },
    {
      "prompt": "552 − 522",
      "answer": "321"
    },
    {
      "prompt": "442 − 432 + 422 − 412",
      "answer": "170"
    },
    {
      "prompt": "1112 − 1102 + 1092 − 1082",
      "answer": "438"
    },
    {
      "prompt": "112 − 222",
      "answer": "−363"
    },
    {
      "prompt": "772 − 762 + 752 − 742",
      "answer": "302"
    },
    {
      "prompt": "632 − 572",
      "answer": "720"
    },
    {
      "prompt": "562 − 552 + 542 − 532",
      "answer": "218"
    },
    {
      "prompt": "592 − 712",
      "answer": "−1560"
    },
    {
      "prompt": "162 − 172 + 182 − 192",
      "answer": "−70"
    },
    {
      "prompt": "412 − 422 + 432 − 442",
      "answer": "−170"
    },
    {
      "prompt": "182 − 62",
      "answer": "288"
    },
    {
      "prompt": "x2 + 162 = 19 2, then x2",
      "answer": "105"
    },
    {
      "prompt": "4.52 − 1.52",
      "answer": "18"
    },
    {
      "prompt": "212 − 202 + 192 − 182",
      "answer": "78"
    },
    {
      "prompt": "582 − 592 + 602 − 612",
      "answer": "−238"
    },
    {
      "prompt": "722 − 782",
      "answer": "−900"
    },
    {
      "prompt": "242 − 222 + 202 − 182",
      "answer": "168"
    },
    {
      "prompt": "892 − 862 + 832 − 802",
      "answer": "1014"
    },
    {
      "prompt": "482 − 622",
      "answer": "−1540"
    },
    {
      "prompt": "742 − 762 + 782 − 802",
      "answer": "−616"
    },
    {
      "prompt": "382 − 272",
      "answer": "715"
    },
    {
      "prompt": "312 − 332 + 352 − 372",
      "answer": "−272"
    },
    {
      "prompt": "482 − 442 + 402 − 362",
      "answer": "672"
    },
    {
      "prompt": "792 − 762 + 732 − 702",
      "answer": "894"
    }
  ],
  "1.3.7": [
    {
      "prompt": "35 × 45",
      "answer": "1575"
    },
    {
      "prompt": "95 × 45",
      "answer": "4275"
    },
    {
      "prompt": "35 × 65",
      "answer": "2275"
    },
    {
      "prompt": "85 × 55",
      "answer": "4675"
    },
    {
      "prompt": "65 × 45",
      "answer": "2925"
    },
    {
      "prompt": "35 × 85",
      "answer": "2975"
    },
    {
      "prompt": "65 × 95",
      "answer": "6175"
    },
    {
      "prompt": "55 × 95",
      "answer": "5225"
    }
  ],
  "1.3.8": [
    {
      "prompt": "4 1 4 × 8 1 4",
      "answer": "35 1"
    },
    {
      "prompt": "8 2 3 × 8 1 3",
      "answer": "72 2"
    },
    {
      "prompt": "3 4 5 × 3 1 5",
      "answer": "12 4"
    },
    {
      "prompt": "4 2 3 × 6 1 4",
      "answer": "29 1"
    },
    {
      "prompt": "12 1 4 × 8 1 4",
      "answer": "101 1"
    },
    {
      "prompt": "15 1 6 × 9 1 6",
      "answer": "139 1"
    },
    {
      "prompt": "6 1 6 × 12 1 6",
      "answer": "75 1"
    },
    {
      "prompt": "11 1 11 × 22 1 11",
      "answer": "245 1"
    },
    {
      "prompt": "25 2 5 × 5 2 5",
      "answer": "137 4"
    },
    {
      "prompt": "5.2 × 10.2",
      "answer": "53.04"
    },
    {
      "prompt": "8 2 3 × 4 2 3",
      "answer": "40 4"
    },
    {
      "prompt": "7 1 7 × 14 1 7",
      "answer": "101 1"
    },
    {
      "prompt": "5 1 5 × 10 1 5",
      "answer": "53 1"
    },
    {
      "prompt": "5 1 5 × 25 1 5",
      "answer": "131 1"
    },
    {
      "prompt": "( 5 2 )2",
      "answer": "29 4"
    },
    {
      "prompt": "8 1 8 × 16 1 8",
      "answer": "131 1"
    },
    {
      "prompt": "10 5 6 × 12 4 5",
      "answer": "138 2"
    },
    {
      "prompt": "3 1 2 × 5 6 7",
      "answer": "21 7"
    },
    {
      "prompt": "11 × 11 10 11",
      "answer": "131"
    },
    {
      "prompt": "6 2 3 × 9 2 3",
      "answer": "64 4"
    },
    {
      "prompt": "( 12 2 )2",
      "answer": "160 4"
    },
    {
      "prompt": "7 1 7 × 49 1 7",
      "answer": "351 1"
    },
    {
      "prompt": "3 3 4 × 2 2 5",
      "answer": "9"
    },
    {
      "prompt": "4.3 × 2.1",
      "answer": "9.03"
    },
    {
      "prompt": "6 × 6 5 6",
      "answer": "41"
    },
    {
      "prompt": "( 6 2 )2",
      "answer": "44 4"
    },
    {
      "prompt": "15.2 × 5.2",
      "answer": "79.04"
    },
    {
      "prompt": "4 3 5 × 4 2 3",
      "answer": "21 7"
    },
    {
      "prompt": "3.125 × 1.6",
      "answer": "5"
    },
    {
      "prompt": "2.375 × 2.4",
      "answer": "5.7"
    },
    {
      "prompt": "2 2 5 × 5 2 5",
      "answer": "12 24"
    }
  ],
  "1.3.9": [
    {
      "prompt": "11 × 11/14",
      "answer": "8 9/14"
    },
    {
      "prompt": "22 × 22/25",
      "answer": "19 9/25"
    },
    {
      "prompt": "19 × 19/23",
      "answer": "15 16/23"
    },
    {
      "prompt": "27 × 27/32",
      "answer": "22 25/32"
    },
    {
      "prompt": "16 × 16/19",
      "answer": "13 9/19"
    },
    {
      "prompt": "29 × 29/34",
      "answer": "24 25/34"
    },
    {
      "prompt": "31 × 31/34",
      "answer": "28 9/34"
    },
    {
      "prompt": "14 × 14/17 − 3",
      "answer": "8 9/17"
    },
    {
      "prompt": "11 × 11/14 + 3",
      "answer": "11 9/14"
    },
    {
      "prompt": "13 × 13/16 + 13",
      "answer": "23 9/16"
    },
    {
      "prompt": "13 × 13/17 + 4",
      "answer": "13 16/17"
    },
    {
      "prompt": "13 × 13/14 − 13",
      "answer": "−13/14"
    },
    {
      "prompt": "17 × 17/18 − 17",
      "answer": "−17/18"
    },
    {
      "prompt": "22 × 22/25 − 22",
      "answer": "−2 16/25"
    },
    {
      "prompt": "14 × 14/17 − 14",
      "answer": "−2 8/17"
    },
    {
      "prompt": "17 × 1 17/21",
      "answer": "30 16/21"
    },
    {
      "prompt": "13 × 13/16 − 13",
      "answer": "−2 7/16"
    },
    {
      "prompt": "11 × 11/12 − 11",
      "answer": "−11/12"
    },
    {
      "prompt": "7 × 7/15 − 7",
      "answer": "−3 11/15"
    },
    {
      "prompt": "14 × 14/17 − 14",
      "answer": "−2 8/17"
    },
    {
      "prompt": "15 × 15/17 − 15",
      "answer": "−1 13/17"
    },
    {
      "prompt": "35 × 1 35/38",
      "answer": "37 9/38"
    },
    {
      "prompt": "13 × 13/15 − 13",
      "answer": "−1 11/15"
    }
  ],
  "1.3.10": [
    {
      "prompt": "(*) 12 × 14 × 16",
      "answer": "(*) 2553 − 2823"
    },
    {
      "prompt": "(*) 21 × 31 × 41",
      "answer": "(*) 25356 − 28026"
    },
    {
      "prompt": "(*) 13 × 15 × 17",
      "answer": "(*) 3149 − 3481"
    },
    {
      "prompt": "(*) 14 × 16 × 28",
      "answer": "(*) 5958 − 6586"
    },
    {
      "prompt": "(*) 146 × 5 × 154",
      "answer": "(*) 106799 − 118041"
    },
    {
      "prompt": "(*) 24 × 34 × 44",
      "answer": "(*) 34108 − 37700"
    },
    {
      "prompt": "(*) 24 × 36 × 48",
      "answer": "(*) 39398 − 43545"
    },
    {
      "prompt": "(*) 44 × 25 × 112",
      "answer": "(*) 126445 − 139755"
    },
    {
      "prompt": "(*) 22 × 25 × 28",
      "answer": "(*) 14630 − 16170"
    },
    {
      "prompt": "(*) 83 × 87 × 91",
      "answer": "(*) 624255 − 689967"
    },
    {
      "prompt": "(*) 43 × 47 × 51",
      "answer": "(*) 97917 − 108225"
    },
    {
      "prompt": "(*) 27 × 29 × 31 × 33",
      "answer": "(*) 760958 − 841060"
    },
    {
      "prompt": "(*) 23 × 33 × 43",
      "answer": "(*) 31005 − 34269"
    },
    {
      "prompt": "(*) 29 × 127 + 31 × 213",
      "answer": "(*) 9771 − 10801"
    },
    {
      "prompt": "(*) 41 × 44 × 47",
      "answer": "(*) 80548 − 89028"
    },
    {
      "prompt": "(*) 31 × 42 × 53",
      "answer": "(*) 65555 − 72457"
    },
    {
      "prompt": "(*) 22 × 44 × 66",
      "answer": "(*) 60693 − 67083"
    },
    {
      "prompt": "(*) 39 × 40 × 41",
      "answer": "(*) 60762 − 67158"
    },
    {
      "prompt": "(*) 3√ 1329 × √ 171 × 15",
      "answer": "(*) 2048 − 2265"
    },
    {
      "prompt": "(*) 42 × 48 × 45",
      "answer": "(*) 86184 − 95256"
    },
    {
      "prompt": "(*) 52 × 55 × 58",
      "answer": "(*) 157586 − 174174"
    },
    {
      "prompt": "(*) 18 × 20 × 22",
      "answer": "(*) 7524 − 8316"
    },
    {
      "prompt": "(*) 24 × 34 × 44",
      "answer": "(*) 34108 − 37700"
    },
    {
      "prompt": "(*) 80 × 82 × 84",
      "answer": "(*) 523488 − 578592"
    },
    {
      "prompt": "(*) 28 × 30 × 32",
      "answer": "(*) 25536 − 28224"
    },
    {
      "prompt": "(*) 66 × 68 × 70",
      "answer": "(*) 298452 − 329868"
    },
    {
      "prompt": "(*) 63 × 65 × 67",
      "answer": "(*) 260646 − 288084"
    },
    {
      "prompt": "(*) 41 × 43 ÷ 51 × 53",
      "answer": "(*) 1740 − 1924"
    },
    {
      "prompt": "(*) 67 × 56 + 65 × 76",
      "answer": "(*) 8257 − 9127"
    },
    {
      "prompt": "(*) 56 × 45 + 54 × 65",
      "answer": "(*) 5728 − 6332"
    },
    {
      "prompt": "(*) 112 × 123 + 132 × 121",
      "answer": "(*) 28260 − 31236"
    },
    {
      "prompt": "(*) 29 × 11 + 31 × 109",
      "answer": "(*) 3513 − 3883"
    },
    {
      "prompt": "(*) 75 2 ÷ 252 × 504",
      "answer": "(*) 53437500 − 59062500"
    },
    {
      "prompt": "(*) 18 3 × 153 ÷ 93",
      "answer": "(*) 25650 − 28350"
    },
    {
      "prompt": "(*) 50 5 ÷ 255 × 55",
      "answer": "(*) 95000 − 105000"
    },
    {
      "prompt": "(*) 24 3 × 213 ÷ 44",
      "answer": "(*) 475089 − 525099"
    },
    {
      "prompt": "(*) 21 3 × 182 ÷ 93",
      "answer": "(*) 3910 − 4322"
    },
    {
      "prompt": "(*) 75 4 ÷ 503 × 252",
      "answer": "(*) 150292 − 166114"
    },
    {
      "prompt": "242 × 183 ÷ 64",
      "answer": "2592"
    },
    {
      "prompt": "(*) 3√ 3380 × √ 223 × 16",
      "answer": "(*) 3406 − 3766"
    }
  ],
  "1.4.1": [
    {
      "prompt": "364 ÷ 4 has what remainder:",
      "answer": "0"
    },
    {
      "prompt": "1324354 ÷ 4 has what remainder:",
      "answer": "2"
    },
    {
      "prompt": "246531 ÷ 8 has what remainder:",
      "answer": "3"
    },
    {
      "prompt": "81736259 ÷ 4 has what remainder:",
      "answer": "3"
    },
    {
      "prompt": "124680 ÷ 8 has what remainder:",
      "answer": "0"
    },
    {
      "prompt": "214365 ÷ 8 has what remainder:",
      "answer": "5"
    },
    {
      "prompt": "Find k so that the five digit number 5318k is divisible by 8:",
      "answer": "4"
    }
  ],
  "1.4.2": [
    {
      "prompt": "24680 ÷ 9 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "6253178 ÷ 9 has a remainder of:",
      "answer": "5"
    },
    {
      "prompt": "2007 ÷ 9 has a remainder of:",
      "answer": "0"
    },
    {
      "prompt": "13579 ÷ 9 has a remainder of:",
      "answer": "7"
    },
    {
      "prompt": "2468 ÷ 9 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "Find the largest integer k such that 3k7 is divisible by 3:",
      "answer": "8"
    }
  ],
  "1.4.3": [
    {
      "prompt": "7653 ÷ 11 has a remainder of:",
      "answer": "8"
    },
    {
      "prompt": "745321 ÷ 11 has a remainder of:",
      "answer": "5"
    },
    {
      "prompt": "142536 ÷ 11 has a remainder of:",
      "answer": "9"
    },
    {
      "prompt": "6253718 ÷ 11 has a remainder of:",
      "answer": "9"
    },
    {
      "prompt": "87125643 ÷ 11 has a remainder of:",
      "answer": "0"
    },
    {
      "prompt": "325476 ÷ 11 has a remainder of:",
      "answer": "8"
    },
    {
      "prompt": "Find k so that 23578k is divisible by 11:",
      "answer": "5"
    },
    {
      "prompt": "Find k so that 1482065k5 is divisible by 11:",
      "answer": "7"
    },
    {
      "prompt": "Find k so that 456k89 is divisible by 11:",
      "answer": "4 10. 4"
    },
    {
      "prompt": "Find k so that 377337k is divisible by 11:",
      "answer": ""
    }
  ],
  "1.4.4": [
    {
      "prompt": "2002 ÷ 6 has a remainder of:",
      "answer": "4"
    },
    {
      "prompt": "2006 ÷ 6 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "112358 ÷ 6 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "If 852k is divisible by 6 then the largest value for k is:",
      "answer": "6"
    },
    {
      "prompt": "13579248 ÷ 6 has a remainder of:",
      "answer": "0"
    },
    {
      "prompt": "322766211 ÷ 6 has a remainder of:",
      "answer": "3"
    },
    {
      "prompt": "563412 ÷ 6 has a remainder of:",
      "answer": "0"
    },
    {
      "prompt": "Find k so that the 4-digit number 567k is divisible by 6:",
      "answer": "6"
    },
    {
      "prompt": "If 86k6 is divisible by 6 then the largest value for k is:",
      "answer": "7"
    },
    {
      "prompt": "423156 ÷ 12 has a remainder of:",
      "answer": "0"
    },
    {
      "prompt": "If 555k is divisible by 6 then the largest value for k is:",
      "answer": "8"
    },
    {
      "prompt": "Find k > 4 so that the 6-digit number 3576k2 is divisible by 12:",
      "answer": "7"
    },
    {
      "prompt": "735246 ÷ 18 has a remainder of:",
      "answer": "0"
    },
    {
      "prompt": "6253718 ÷ 12 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "Find k so that the 5-digit number 8475k is divisible by 6:",
      "answer": "6"
    }
  ],
  "1.4.5": [
    {
      "prompt": "(31 × 6 − 17) ÷ 8 has a remainder of:",
      "answer": "1"
    },
    {
      "prompt": "(34 × 27 + 13) ÷ 4 has a remainder of:",
      "answer": "3"
    },
    {
      "prompt": "(44 × 34 − 24) ÷ 4 has a remainder of:",
      "answer": "0"
    },
    {
      "prompt": "(33 + 23 × 13) ÷ 3 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "(23 + 33 × 43) ÷ 4 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "(24 × 34 − 44) ÷ 7 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "(112 + 9 × 7) ÷ 5 has a remainder of:",
      "answer": "4"
    },
    {
      "prompt": "(15 × 3 − 62) ÷ 9 has a remainder of:",
      "answer": "0"
    },
    {
      "prompt": "(12 × 9 − 23) ÷ 8 has a remainder of:",
      "answer": "4"
    },
    {
      "prompt": "(65 × 4 − 32) ÷ 10 has a remainder of:",
      "answer": "1"
    },
    {
      "prompt": "(34 × 56 − 12) ÷ 9 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "(65 − 4 × 3) ÷ 6 has a remainder of:",
      "answer": "5"
    },
    {
      "prompt": "(2 × 34 + 56) ÷ 7 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "(23 − 4 × 5 + 6) ÷ 7 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "(34 × 5 − 6) ÷ 7 has a remainder of:",
      "answer": "3"
    },
    {
      "prompt": "(1 + 2 − 3 × 45) ÷ 6 has a remainder of:",
      "answer": "3"
    },
    {
      "prompt": "(82 + 4 × 6 − 10) ÷ 3 has a remainder of:",
      "answer": "0"
    },
    {
      "prompt": "(12 × 5 + 18 + 15) ÷ 8 has a remainder of:",
      "answer": "5"
    },
    {
      "prompt": "(73 + 82 − 91) ÷ 6 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "(20 + 4 × 62) ÷ 8 has a remainder of:",
      "answer": "4"
    },
    {
      "prompt": "(72 × 64 − 83) ÷ 7 has a remainder of:",
      "answer": "3"
    },
    {
      "prompt": "(15 × 30 − 45) ÷ 7 has a remainder of:",
      "answer": "6"
    },
    {
      "prompt": "(64 × 53 − 42) ÷ 3 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "(24 × 36 − 510) ÷ 4 has a remainder of:",
      "answer": "3"
    },
    {
      "prompt": "(92 − 7 × 5) ÷ 4 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "(82 × 6 − 4) ÷ 3 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "(12 × 34 − 56) ÷ 7 has a remainder of:",
      "answer": "2"
    }
  ],
  "1.4.6": [
    {
      "prompt": "354 ÷ 9",
      "answer": "39 1"
    },
    {
      "prompt": "503 ÷ 9",
      "answer": "55 8"
    },
    {
      "prompt": "2003 ÷ 9",
      "answer": "222 5"
    },
    {
      "prompt": "321 ÷ 9",
      "answer": "35 2"
    },
    {
      "prompt": "456 ÷ 9",
      "answer": "50 2"
    },
    {
      "prompt": "1234 ÷ 9",
      "answer": "137 1"
    },
    {
      "prompt": "12345 ÷ 9",
      "answer": "1371 2"
    },
    {
      "prompt": "2475 ÷ 45",
      "answer": "55"
    }
  ],
  "1.4.7": [
    {
      "prompt": "1 40 = %",
      "answer": "2.5%"
    },
    {
      "prompt": "3 40 = %",
      "answer": "7.5%"
    },
    {
      "prompt": "7 40 = %",
      "answer": "17.5%"
    },
    {
      "prompt": "21 40 = %",
      "answer": "52.5%"
    },
    {
      "prompt": "43 40 = (dec.)",
      "answer": "1.075"
    },
    {
      "prompt": "3 (23)(51) = (dec.)",
      "answer": ".075"
    },
    {
      "prompt": ".0125 = % (frac.)",
      "answer": "1 1 4 %"
    },
    {
      "prompt": "48 is % greater than 40.",
      "answer": "20%"
    },
    {
      "prompt": "7 40 = %",
      "answer": "17.5%"
    },
    {
      "prompt": "32 is what % of 80.",
      "answer": "40"
    },
    {
      "prompt": "11 40 = %",
      "answer": "27.5%"
    },
    {
      "prompt": "32 (23)(52) = (dec.)",
      "answer": ".045"
    },
    {
      "prompt": "72 is what % of 400.",
      "answer": "18"
    },
    {
      "prompt": "5 (23)(52) = (dec.)",
      "answer": ".025"
    },
    {
      "prompt": "4 7 20 = %",
      "answer": "435%"
    },
    {
      "prompt": "5 80 = %",
      "answer": "6.25%"
    },
    {
      "prompt": "27.5% = (frac.)",
      "answer": "11"
    },
    {
      "prompt": "43 (23)(52) = (dec.)",
      "answer": ".32"
    },
    {
      "prompt": "1.6 is % of 20.",
      "answer": "8%"
    },
    {
      "prompt": "34 (24)(54) = (dec.)",
      "answer": ".0081"
    }
  ],
  "1.5.1": [
    {
      "prompt": "654 − 456",
      "answer": "198"
    },
    {
      "prompt": "256 − 652",
      "answer": "−396"
    },
    {
      "prompt": "4002 − 2004",
      "answer": "1998"
    },
    {
      "prompt": "702 − 207",
      "answer": "495"
    },
    {
      "prompt": "453 − 354",
      "answer": "99"
    },
    {
      "prompt": "5002 − 2005",
      "answer": "2997"
    },
    {
      "prompt": "2006 − 6002",
      "answer": "−3996"
    },
    {
      "prompt": "2003 − 3002",
      "answer": "−999"
    },
    {
      "prompt": "678 − 876",
      "answer": "−198"
    },
    {
      "prompt": "2007 = 7002",
      "answer": "−4995"
    }
  ],
  "1.5.2": [
    {
      "prompt": "2 2 3 − 3 5 6",
      "answer": "−1 1"
    },
    {
      "prompt": "4 2 3 − 6 3 5",
      "answer": "−1 14"
    },
    {
      "prompt": "1 5 9 − 3 5 9",
      "answer": "−2"
    },
    {
      "prompt": "2 3 4 − 4 3 5",
      "answer": "−1 17"
    },
    {
      "prompt": "1 3 7 − 3",
      "answer": "−1 4"
    },
    {
      "prompt": "2 3 8 − 3 1 4",
      "answer": "− 7"
    },
    {
      "prompt": "2 3 4 − 6 7 8",
      "answer": "−4 1"
    },
    {
      "prompt": "3 4 5 − 8 9 10",
      "answer": "−5 1"
    },
    {
      "prompt": "3 4 9 − 5 1 3",
      "answer": "−1 8"
    },
    {
      "prompt": "5 6 7 − 12 13 14",
      "answer": "−7 1"
    },
    {
      "prompt": "3 1 6 − 6 1 3",
      "answer": "−3 1"
    },
    {
      "prompt": "2 5 6 − 4 2 3",
      "answer": "−1 5"
    },
    {
      "prompt": "4 7 8 − 12 23 24",
      "answer": "−8 1"
    },
    {
      "prompt": "4 5 6 − 10 11 12",
      "answer": "−6 1"
    },
    {
      "prompt": "2 3 5 − 7 1 10",
      "answer": "−4 1"
    },
    {
      "prompt": "1 4 5 − 3 2 5",
      "answer": "−1 3"
    }
  ],
  "1.5.3": [
    {
      "prompt": "1 12 + 1 20 + 1 30 + 1 42",
      "answer": "4 21 2. 1 24 3. 3 40 4. 1 1"
    },
    {
      "prompt": "1 72 + 1 90 + 1 110 + 1 132",
      "answer": ""
    },
    {
      "prompt": "1 30 + 1 42 + 1 56",
      "answer": ""
    },
    {
      "prompt": "7 30 + 7 20 + 7 12",
      "answer": ""
    }
  ],
  "1.5.4": [
    {
      "prompt": "12 13 + 13 12",
      "answer": "2 1"
    },
    {
      "prompt": "5 6 + 6 5",
      "answer": "2 1"
    },
    {
      "prompt": "15 19 + 19 15",
      "answer": "2 16"
    },
    {
      "prompt": "3 5 + 5 3 − 2",
      "answer": "4"
    },
    {
      "prompt": "7 5 + 5 7 − 1",
      "answer": "1 4"
    },
    {
      "prompt": "11 13 + 2 11",
      "answer": "1 4"
    },
    {
      "prompt": "7 13 + 6 7",
      "answer": "1 36"
    },
    {
      "prompt": "5 6 + 1 1 5 − 2",
      "answer": "1"
    },
    {
      "prompt": "13 15 + 2 13",
      "answer": "1 4"
    },
    {
      "prompt": "5 8 + 8 5 − 9 40",
      "answer": "2"
    },
    {
      "prompt": "3 5 + 5 3 + 11 15",
      "answer": "3"
    },
    {
      "prompt": "5 7 + 7 5 − 3",
      "answer": "− 31"
    },
    {
      "prompt": "15 17 + 2 15",
      "answer": "1 4"
    },
    {
      "prompt": "11 15 + 4 11",
      "answer": "1 16"
    },
    {
      "prompt": "11 13 + 2 11",
      "answer": "1 4"
    },
    {
      "prompt": "14 15 + 1 14",
      "answer": "1 1"
    },
    {
      "prompt": "1 12 13 + 1 1 12",
      "answer": "3 1"
    },
    {
      "prompt": "(5 7 + 7 ) ÷ 2",
      "answer": "1 2"
    },
    {
      "prompt": "11 12 + 1 11",
      "answer": "1 1"
    },
    {
      "prompt": "15 22 + 7 15 − 1",
      "answer": "49"
    },
    {
      "prompt": "11 14 + 3 11 − 2",
      "answer": "− 145"
    }
  ],
  "1.5.5": [
    {
      "prompt": "4 9 − 11 28",
      "answer": "13"
    },
    {
      "prompt": "2 7 − 7 29",
      "answer": "9"
    },
    {
      "prompt": "4 13 − 11 40",
      "answer": "17"
    },
    {
      "prompt": "7 15 − 27 61",
      "answer": "22"
    },
    {
      "prompt": "8 11 − 31 45",
      "answer": "19"
    },
    {
      "prompt": "8 11 − 87 122",
      "answer": "19 1342"
    },
    {
      "prompt": "3 8 − 26 73",
      "answer": "11"
    },
    {
      "prompt": "4 5 − 67 86",
      "answer": "9"
    },
    {
      "prompt": "8 3 − 41 14",
      "answer": "− 11"
    },
    {
      "prompt": "8 9 − 87 100",
      "answer": "17"
    },
    {
      "prompt": "67 81 − 17 20",
      "answer": "− 37 1620"
    },
    {
      "prompt": "3 8 − 14 41",
      "answer": "11"
    },
    {
      "prompt": "7 15 − 15 29",
      "answer": "− 22"
    },
    {
      "prompt": "5 8 − 24 41",
      "answer": "13"
    },
    {
      "prompt": "8 9 − 31 37",
      "answer": "17"
    },
    {
      "prompt": "10 11 − 39 45",
      "answer": "7"
    },
    {
      "prompt": "11 16 − 32 49",
      "answer": "27"
    },
    {
      "prompt": "8 11 − 87 122",
      "answer": "19 1342"
    },
    {
      "prompt": "4 7 − 35 64",
      "answer": "11"
    },
    {
      "prompt": "9 46 − 2 9",
      "answer": "− 11"
    },
    {
      "prompt": "3 8 − 14 41",
      "answer": "11"
    },
    {
      "prompt": "7 11 − 55 89",
      "answer": "18"
    }
  ],
  "2.1.1": [
    {
      "prompt": "282",
      "answer": "784"
    },
    {
      "prompt": "3.22",
      "answer": "10.24"
    },
    {
      "prompt": "29 × 29",
      "answer": "841"
    },
    {
      "prompt": "16 × 16",
      "answer": "256"
    },
    {
      "prompt": "312",
      "answer": "961"
    },
    {
      "prompt": "If 2.2 cm=1 inch, then",
      "answer": "4.84"
    }
  ],
  "2.1.2": [
    {
      "prompt": "(1728) 3",
      "answer": "12"
    },
    {
      "prompt": "113",
      "answer": "1331"
    },
    {
      "prompt": "14 × 14 × 14",
      "answer": "3744"
    },
    {
      "prompt": "(−343) 3",
      "answer": "−7"
    },
    {
      "prompt": "123",
      "answer": "1728"
    },
    {
      "prompt": "163",
      "answer": "4096"
    },
    {
      "prompt": "3√ 1728 ÷ √ 36",
      "answer": "2"
    },
    {
      "prompt": "114 ÷ 11",
      "answer": "1331"
    },
    {
      "prompt": "(−12)3",
      "answer": "−1728"
    },
    {
      "prompt": "(2197) 3",
      "answer": "13"
    },
    {
      "prompt": "(−729)",
      "answer": "−9"
    },
    {
      "prompt": "83",
      "answer": "512"
    },
    {
      "prompt": "153",
      "answer": "3375"
    },
    {
      "prompt": "12 × 12 × 12",
      "answer": "1728"
    },
    {
      "prompt": "(125 ÷ 64) 3",
      "answer": "5"
    },
    {
      "prompt": "133",
      "answer": "2197"
    },
    {
      "prompt": "7 × 7 × 7",
      "answer": "343"
    },
    {
      "prompt": "−1331 3",
      "answer": "−11"
    },
    {
      "prompt": "6 × 6 × 6",
      "answer": "216"
    },
    {
      "prompt": "15 × 15 × 15",
      "answer": "3375"
    },
    {
      "prompt": "(*) 3√ 1730 × 145",
      "answer": "(*) 1653 − 1828"
    },
    {
      "prompt": "(27 ÷ 216) 3",
      "answer": "1"
    },
    {
      "prompt": "If x = 7 then ( x + 3)(x2 − 3x + 9)",
      "answer": "370"
    },
    {
      "prompt": "√ 676 ÷ 3√−2197",
      "answer": "−2"
    },
    {
      "prompt": "(1.728) 3",
      "answer": "1.2"
    },
    {
      "prompt": "83 × 53",
      "answer": "64000"
    },
    {
      "prompt": "115 ÷ 121",
      "answer": "1331"
    },
    {
      "prompt": "3√",
      "answer": "1.1"
    }
  ],
  "2.1.3": [
    {
      "prompt": "53 + 33 + 23",
      "answer": "160"
    },
    {
      "prompt": "23 − 33 − 43",
      "answer": "−83"
    },
    {
      "prompt": "( √ 64 − √ 36)5",
      "answer": "32"
    },
    {
      "prompt": "5x = 125, x5",
      "answer": "243"
    },
    {
      "prompt": "43 − 53",
      "answer": "−61"
    },
    {
      "prompt": "2x+1 = 32, x − 1",
      "answer": "3"
    },
    {
      "prompt": "23 + 33 + 53",
      "answer": "160"
    },
    {
      "prompt": "53 − 33",
      "answer": "98"
    },
    {
      "prompt": "3√125 × 512",
      "answer": "40"
    },
    {
      "prompt": "23 + 33 + 43 − 53",
      "answer": "−26"
    },
    {
      "prompt": "x3 = 64, so 3 x",
      "answer": "81"
    },
    {
      "prompt": "45 × 55",
      "answer": "3200000"
    },
    {
      "prompt": "272",
      "answer": "729"
    },
    {
      "prompt": "If x 5 = −32, then 5 x",
      "answer": ".04"
    },
    {
      "prompt": "25 × 53",
      "answer": "4000"
    },
    {
      "prompt": "84 × 54",
      "answer": "2560000"
    },
    {
      "prompt": "(*) 5 5 + 44 + 33 + 22 + 11",
      "answer": "(*) 3242 − 3584"
    },
    {
      "prompt": "26 × 54",
      "answer": "40000"
    },
    {
      "prompt": "5x−1 = 3125, x + 1",
      "answer": "7"
    },
    {
      "prompt": "23 − 33 − 53",
      "answer": "−144"
    },
    {
      "prompt": "34 23 · 53",
      "answer": ".081"
    },
    {
      "prompt": "63 + 43 + 23",
      "answer": "288"
    },
    {
      "prompt": "34 + 43 = 5 · x. x",
      "answer": "29"
    },
    {
      "prompt": "(*) 5 1 + 42 + 33 + 24 + 15",
      "answer": "(*) 61 − 69"
    },
    {
      "prompt": "9x = 243, x",
      "answer": "2.5"
    },
    {
      "prompt": "83 × 53",
      "answer": "64000"
    },
    {
      "prompt": "23 × 83 × 53",
      "answer": "512000"
    },
    {
      "prompt": "25 × 34 × 52",
      "answer": "648000"
    },
    {
      "prompt": "24 × 72 × 53",
      "answer": "98000"
    },
    {
      "prompt": "42 × 52 × 62",
      "answer": "14400"
    },
    {
      "prompt": "25 × 33 × 52",
      "answer": "21600"
    },
    {
      "prompt": "23 × 34 × 55",
      "answer": "2025000"
    },
    {
      "prompt": "(33 − 23 + 13) × 53",
      "answer": "2500"
    },
    {
      "prompt": "25 × 34 × 52",
      "answer": "64800"
    },
    {
      "prompt": "25 × 34 × 55",
      "answer": "8100000"
    },
    {
      "prompt": "23 × 32 × 42 × 53",
      "answer": "144000"
    }
  ],
  "2.1.4": [
    {
      "prompt": "12 1 2 % = (frac.)",
      "answer": "1"
    },
    {
      "prompt": "11 5 = %",
      "answer": "220%"
    },
    {
      "prompt": "Which is larger 5 9 or.56 :",
      "answer": ".56"
    },
    {
      "prompt": "Which is larger 5 8 or.622 :",
      "answer": "5"
    },
    {
      "prompt": "17 8 = (dec.)",
      "answer": "2.125"
    },
    {
      "prompt": ".777... −.333... +.555...",
      "answer": "1"
    },
    {
      "prompt": "3 5 = %",
      "answer": "60%"
    },
    {
      "prompt": "1 8 = (dec.)",
      "answer": ".125"
    },
    {
      "prompt": "Which is smaller 9 11 or.81 :",
      "answer": ".81"
    },
    {
      "prompt": "1 16 = %",
      "answer": "6.25%"
    },
    {
      "prompt": ".125 −.375 −.625",
      "answer": "−.875"
    },
    {
      "prompt": "11 4 = %",
      "answer": "275%"
    },
    {
      "prompt": "Which is larger 5 9 or.555 or 55% :",
      "answer": "5"
    },
    {
      "prompt": ".1666... −.333... +.8333...",
      "answer": "2"
    },
    {
      "prompt": "The reciprocal of − 1.0625 is:",
      "answer": "− 16"
    },
    {
      "prompt": "Which is larger.46 or 5 11 :",
      "answer": ".46"
    },
    {
      "prompt": ".111... −.333... −.666...",
      "answer": "− 8"
    },
    {
      "prompt": "37.5% = (frac.)",
      "answer": "3"
    },
    {
      "prompt": "Which is smaller 9 11 or.8 :",
      "answer": ".8"
    },
    {
      "prompt": "3 7 = %",
      "answer": "43 6 7 %"
    },
    {
      "prompt": "7 9 = %",
      "answer": "77 7 9 %"
    },
    {
      "prompt": ".08333... +.1666... +.25",
      "answer": "1"
    },
    {
      "prompt": "Which is smaller 7 11 or.56 :",
      "answer": ".56"
    },
    {
      "prompt": "Which is larger 9 11 or 81 % :",
      "answer": "9"
    },
    {
      "prompt": ".1666... +.333... +.8333...",
      "answer": "4"
    },
    {
      "prompt": "7 16 = % (dec.)",
      "answer": "43.75%"
    },
    {
      "prompt": "32 ÷.181818...",
      "answer": "176"
    },
    {
      "prompt": "2 7 = %",
      "answer": "28 4 7 %"
    },
    {
      "prompt": "Which is larger −.375 or −5 12 :",
      "answer": "−.375"
    },
    {
      "prompt": ".333... −.666... −.999...",
      "answer": "− 4"
    },
    {
      "prompt": "1 14 = %",
      "answer": "7 1 7 %"
    },
    {
      "prompt": ".0625 +.125 +.25",
      "answer": "7"
    },
    {
      "prompt": "55 5 9 % of 27 is:",
      "answer": "15"
    },
    {
      "prompt": "12.5% of 24 is:",
      "answer": "3"
    },
    {
      "prompt": "Which is larger −.27 or −2 7 :",
      "answer": "−.27"
    },
    {
      "prompt": "55 ÷.454545...",
      "answer": "121"
    },
    {
      "prompt": ".111... −.1666... −.333...",
      "answer": "− 7"
    },
    {
      "prompt": "5 16 = % (dec.)",
      "answer": "31.25%"
    },
    {
      "prompt": "363 ÷.272727...",
      "answer": "1331"
    },
    {
      "prompt": "21 3 7 % = (frac.)",
      "answer": "3"
    },
    {
      "prompt": "88 ×.090909...",
      "answer": "8"
    },
    {
      "prompt": "4 4 5 ÷.444...",
      "answer": "10 4"
    },
    {
      "prompt": "3 14 = %",
      "answer": "21 3 7 %"
    },
    {
      "prompt": "35 5 7 % = (frac.)",
      "answer": "5"
    },
    {
      "prompt": "72 ×.083333...",
      "answer": "6"
    },
    {
      "prompt": "78 4 7 % = (frac.)",
      "answer": "11"
    },
    {
      "prompt": "911 ÷.090909...",
      "answer": "10021"
    },
    {
      "prompt": "1 12 = %",
      "answer": "8 1 3 %"
    },
    {
      "prompt": "11 14 = %",
      "answer": "78 4 7 %"
    },
    {
      "prompt": "50 is 6.25% of:",
      "answer": "800"
    },
    {
      "prompt": "242 ÷.181818...",
      "answer": "1331"
    },
    {
      "prompt": "16 2 3 % × 482",
      "answer": "80 1"
    },
    {
      "prompt": "75 ÷.5555...",
      "answer": "135"
    },
    {
      "prompt": "64 2 7 % = (frac.)",
      "answer": "9"
    },
    {
      "prompt": "1.21 ÷.09090...",
      "answer": "13.31"
    },
    {
      "prompt": "1 7 8 = % (frac.)",
      "answer": "18.75%"
    },
    {
      "prompt": "6.25% = (frac.)",
      "answer": "1"
    },
    {
      "prompt": "17 14 = %",
      "answer": "121 3 7 %"
    },
    {
      "prompt": "42 6 7 % = (frac.)",
      "answer": "3"
    },
    {
      "prompt": "3 3 4 % = (frac.)",
      "answer": "3"
    },
    {
      "prompt": "1 1 10 % = (frac.)",
      "answer": "11 1000"
    },
    {
      "prompt": "92 6 7 % = (frac.)",
      "answer": "13"
    },
    {
      "prompt": "7 1 7 % = (frac.)",
      "answer": "1"
    },
    {
      "prompt": "75 is 3.125% of:",
      "answer": "2400"
    },
    {
      "prompt": "6 7 8 % = (dec.)",
      "answer": "11"
    },
    {
      "prompt": "13 14 = %",
      "answer": "92 6 7 %"
    },
    {
      "prompt": "3 1 13 % = (frac.)",
      "answer": "2"
    },
    {
      "prompt": "15 14 = %",
      "answer": "107 1 7 %"
    },
    {
      "prompt": "21 3 7 % = (frac.)",
      "answer": "3"
    }
  ],
  "2.1.5": [
    {
      "prompt": "572 × 21",
      "answer": "12012"
    },
    {
      "prompt": "2 37 × 999",
      "answer": "54"
    },
    {
      "prompt": "33.67 × 15",
      "answer": "505.05"
    },
    {
      "prompt": "715 × 35",
      "answer": "25025"
    },
    {
      "prompt": "3367 × 21",
      "answer": "70707"
    },
    {
      "prompt": "1073 ÷ 29",
      "answer": "37"
    },
    {
      "prompt": "715 × 28",
      "answer": "20020"
    },
    {
      "prompt": "429 × 35",
      "answer": "15015"
    },
    {
      "prompt": "63 × 429",
      "answer": "27027"
    },
    {
      "prompt": "1073 ÷ 37",
      "answer": "29"
    },
    {
      "prompt": "444 × 5 37",
      "answer": "60"
    },
    {
      "prompt": "63 × 572",
      "answer": "36036"
    },
    {
      "prompt": "143 × 49 = 1001 ×",
      "answer": "7"
    },
    {
      "prompt": "29 × 37",
      "answer": "1073"
    },
    {
      "prompt": "42 × 715",
      "answer": "30030"
    },
    {
      "prompt": "715 × 98",
      "answer": "70070"
    },
    {
      "prompt": "27 × 37",
      "answer": "999"
    },
    {
      "prompt": "715 × 77",
      "answer": "55055"
    },
    {
      "prompt": "105 × 715",
      "answer": "75075"
    },
    {
      "prompt": "429 × 357",
      "answer": "153153"
    },
    {
      "prompt": "14 × 715",
      "answer": "10010"
    },
    {
      "prompt": "42 × 429",
      "answer": "18018"
    },
    {
      "prompt": "21 × 336.7",
      "answer": "7070.7"
    },
    {
      "prompt": "36 × 3.367",
      "answer": "121.121"
    },
    {
      "prompt": "715 × 49",
      "answer": "35035"
    },
    {
      "prompt": "33.67 × 27",
      "answer": "909.09"
    },
    {
      "prompt": "707 × 715",
      "answer": "505505"
    },
    {
      "prompt": "429 × 21",
      "answer": "9009"
    },
    {
      "prompt": "336.7 × 3.3",
      "answer": "1111.11"
    },
    {
      "prompt": "707 × 429",
      "answer": "303303"
    },
    {
      "prompt": "385 × 13",
      "answer": "5005"
    },
    {
      "prompt": "111 × 7 27",
      "answer": "28 7"
    },
    {
      "prompt": "539 × 13",
      "answer": "7007"
    },
    {
      "prompt": "666 × 2 37",
      "answer": "36"
    },
    {
      "prompt": "(*) 5 37 × 5548",
      "answer": "(*) 712 − 788"
    },
    {
      "prompt": "333 × 1 27 × 1 37",
      "answer": "1"
    },
    {
      "prompt": "462 × 13",
      "answer": "6006"
    },
    {
      "prompt": "999 × 7 27 × 7 37",
      "answer": "49"
    },
    {
      "prompt": "6006 ÷ 462",
      "answer": "13"
    },
    {
      "prompt": "444 × 4 37",
      "answer": "48"
    },
    {
      "prompt": "770 × 13",
      "answer": "10010"
    },
    {
      "prompt": "888 × 4 37",
      "answer": "96"
    },
    {
      "prompt": "666 × 16 27 × 24 37",
      "answer": "256"
    },
    {
      "prompt": "143 × 77",
      "answer": "11011"
    },
    {
      "prompt": "143 × 63",
      "answer": "9009"
    },
    {
      "prompt": "888 × 16 27 × 24 37",
      "answer": "384"
    },
    {
      "prompt": "84 × 429",
      "answer": "36036"
    },
    {
      "prompt": "143 × 49",
      "answer": "7007"
    },
    {
      "prompt": "444 × 5 37",
      "answer": "60"
    },
    {
      "prompt": "222 × 1 27",
      "answer": "8 2"
    },
    {
      "prompt": "63 × 143",
      "answer": "9009"
    },
    {
      "prompt": "555 × 6 37",
      "answer": "90"
    },
    {
      "prompt": "444 × 1 27",
      "answer": "16 4"
    },
    {
      "prompt": "143 × 77",
      "answer": "11011"
    },
    {
      "prompt": "888 × 4 37",
      "answer": "96"
    },
    {
      "prompt": "666 × 1 27",
      "answer": "24 2"
    },
    {
      "prompt": "777 × 7 37",
      "answer": "147"
    },
    {
      "prompt": "444 × 2 27",
      "answer": "32 8"
    },
    {
      "prompt": "999 × 3 37",
      "answer": "81"
    },
    {
      "prompt": "666 × 3 27",
      "answer": "74"
    },
    {
      "prompt": "888 × 24 27",
      "answer": "789 1"
    },
    {
      "prompt": "999 × 1 27",
      "answer": "37"
    },
    {
      "prompt": "143 × 13 × 7",
      "answer": "13013"
    },
    {
      "prompt": "666 × 18 37",
      "answer": "324"
    },
    {
      "prompt": "999 × 5 27",
      "answer": "185"
    },
    {
      "prompt": "1001 × 25 = 143 ×",
      "answer": "175"
    },
    {
      "prompt": "3 × 11 × 13 × 21",
      "answer": "9009"
    },
    {
      "prompt": "3 × 5 × 7 × 11 × 13",
      "answer": "15015"
    }
  ],
  "2.1.6": [
    {
      "prompt": "MMXLII",
      "answer": "2042"
    },
    {
      "prompt": "XLIV",
      "answer": "44"
    },
    {
      "prompt": "MMIII",
      "answer": "2003"
    },
    {
      "prompt": "CXCIX",
      "answer": "199"
    },
    {
      "prompt": "MDCLXVI",
      "answer": "1666"
    },
    {
      "prompt": "CDXLIV",
      "answer": "1544"
    },
    {
      "prompt": "CCLXXVII",
      "answer": "277"
    },
    {
      "prompt": "MCDLIX",
      "answer": "1459"
    },
    {
      "prompt": "CMXCIX",
      "answer": "999"
    },
    {
      "prompt": "MMCCXXII",
      "answer": "2222"
    },
    {
      "prompt": "CXI−CC",
      "answer": "−89"
    },
    {
      "prompt": "MD+DC",
      "answer": "2100"
    },
    {
      "prompt": "CM+XC+IX",
      "answer": "999"
    },
    {
      "prompt": "DC−LX−VI",
      "answer": "534"
    },
    {
      "prompt": "XIII+MMIV",
      "answer": "2017"
    },
    {
      "prompt": "MIII+MIV",
      "answer": "2007"
    },
    {
      "prompt": "MC+DL+XIV",
      "answer": "1664"
    },
    {
      "prompt": "MCXI+DL V",
      "answer": "1666"
    },
    {
      "prompt": "MMV−DCXLI",
      "answer": "1364"
    },
    {
      "prompt": "MMLIX−LIII",
      "answer": "2006"
    },
    {
      "prompt": "MCXI−DL V",
      "answer": "556"
    },
    {
      "prompt": "CMIX−CDIV",
      "answer": "505"
    },
    {
      "prompt": "MDXL V−XV",
      "answer": "1530"
    },
    {
      "prompt": "DCII÷IX",
      "answer": "66 8"
    },
    {
      "prompt": "CCCLXXIV÷XI",
      "answer": "34"
    },
    {
      "prompt": "CDI×V",
      "answer": "2005"
    },
    {
      "prompt": "CCLXXX÷XIV",
      "answer": "20"
    },
    {
      "prompt": "MMV÷V",
      "answer": "401"
    },
    {
      "prompt": "XXVII×CXI",
      "answer": "2997"
    },
    {
      "prompt": "MI×XI",
      "answer": "11011"
    },
    {
      "prompt": "MMVII×XXV",
      "answer": "50175"
    },
    {
      "prompt": "MCCLX÷XV",
      "answer": "84"
    },
    {
      "prompt": "MMVI×XI",
      "answer": "22066"
    },
    {
      "prompt": "CDIV÷XL",
      "answer": "10.1"
    }
  ],
  "2.1.7": [
    {
      "prompt": "A dodecahedron has vertices.",
      "answer": "20"
    },
    {
      "prompt": "An icosahedron has congruent faces.",
      "answer": "20"
    },
    {
      "prompt": "The area of the base of a tetrahedron is 4 ft 2. The total surface area is ft2.",
      "answer": "16"
    },
    {
      "prompt": "A decahedron has congruent regions.",
      "answer": "10"
    },
    {
      "prompt": "A tetrahedron has vertices.",
      "answer": "4"
    },
    {
      "prompt": "An octahedron has edges.",
      "answer": "12"
    },
    {
      "prompt": "A hexahedron has faces.",
      "answer": "6"
    },
    {
      "prompt": "A dodecahedron is a platonic solid with 30 edges and vertices.",
      "answer": "20"
    },
    {
      "prompt": "An octahedron has vertices.",
      "answer": "6"
    },
    {
      "prompt": "An icosahedron is a platonic solid with 30 edges and vertices.",
      "answer": "12"
    },
    {
      "prompt": "A dodecahedron is a platonic solid with 30 edges and vertices.",
      "answer": "20"
    }
  ],
  "2.1.8": [
    {
      "prompt": "(*) 2 π4",
      "answer": "(*) 185 − 205"
    },
    {
      "prompt": "(*) e2 × π4",
      "answer": "(*) 683 − 756"
    },
    {
      "prompt": "(*) e4",
      "answer": "(*) 51 − 58"
    },
    {
      "prompt": "(*) π5",
      "answer": "(*) 290 − 322"
    },
    {
      "prompt": "(*) ( e × π)4",
      "answer": "(*) 5052 − 5585"
    },
    {
      "prompt": "(*) π5 + e4",
      "answer": "(*) 342 − 379"
    },
    {
      "prompt": "(*) π3 × e4",
      "answer": "(*) 1608 − 1778"
    },
    {
      "prompt": "(*) (3 π)4",
      "answer": "(*) 7495 − 8285"
    },
    {
      "prompt": "(*) ( e + 1.3)5",
      "answer": "(*) 995 − 1100"
    },
    {
      "prompt": "(*) [( π −.2)(+.3)]3",
      "answer": "(*) 664 − 734"
    },
    {
      "prompt": "(*) ( π + 1.9)3(e + 2.3)3",
      "answer": "(*) 15384 − 17005"
    },
    {
      "prompt": "(*) (4 e)3",
      "answer": "(*) 1221 − 1350"
    },
    {
      "prompt": "(*) e4π4",
      "answer": "(*) 5052 − 5585"
    },
    {
      "prompt": "(*) πeeπ",
      "answer": "(*) 493 − 546"
    },
    {
      "prompt": "(*) (3 π + 2e)4",
      "answer": "(*) 46339 − 51218"
    },
    {
      "prompt": "(*) ππee",
      "answer": "(*) 524 − 581"
    }
  ],
  "2.1.9": [
    {
      "prompt": "15 miles per hour= feet per second.",
      "answer": "22"
    },
    {
      "prompt": "3.5 yards= inches.",
      "answer": "126"
    },
    {
      "prompt": ".375 of a foot= in.",
      "answer": "4.5"
    },
    {
      "prompt": "48 inches per second= ft/min.",
      "answer": "240"
    },
    {
      "prompt": "7.5 mph= inches per second.",
      "answer": "132"
    },
    {
      "prompt": "12 1 2 % of a mile= yards.",
      "answer": "220"
    },
    {
      "prompt": "25% of a mile= yards.",
      "answer": "440"
    },
    {
      "prompt": "1 3 of a mile = feet.",
      "answer": "1760"
    },
    {
      "prompt": "3 4 of 3 yards= inches.",
      "answer": "81"
    },
    {
      "prompt": "2 3 of a mile = ft.",
      "answer": "3520"
    },
    {
      "prompt": "10 feet= yards.",
      "answer": "30"
    },
    {
      "prompt": "83 1 3 % of a foot= inches.",
      "answer": "10"
    },
    {
      "prompt": "30 mph= ft/sec.",
      "answer": "44"
    },
    {
      "prompt": "30 feet per minute= feet per second.",
      "answer": ".5"
    },
    {
      "prompt": "36 in/s = inches per minute.",
      "answer": "2160"
    },
    {
      "prompt": "480 inches per minute= in/s.",
      "answer": "8"
    },
    {
      "prompt": "45 mph = ft/s.",
      "answer": "66"
    },
    {
      "prompt": "33 ft/s= mph.",
      "answer": "22.5"
    },
    {
      "prompt": "7.5 mph = ft/s.",
      "answer": "11"
    }
  ],
  "2.1.10": [
    {
      "prompt": "3 cubic yards= ft.3",
      "answer": "81"
    },
    {
      "prompt": "1 cubic foot= cubic inches.",
      "answer": "1728"
    },
    {
      "prompt": "9 square yards= square feet.",
      "answer": "81"
    },
    {
      "prompt": "432 square inches= ft.2",
      "answer": "3"
    },
    {
      "prompt": "3 square yards= square feet.",
      "answer": "27"
    },
    {
      "prompt": "243 cubic feet= cubic yards.",
      "answer": "3"
    },
    {
      "prompt": "3 cubic feet= cubic inches.",
      "answer": "5184"
    },
    {
      "prompt": "4320 cubic inches= cubic feet.",
      "answer": "2.5"
    },
    {
      "prompt": "1 square meter= square centimeters.",
      "answer": "10000"
    },
    {
      "prompt": "12 square feet= square yards.",
      "answer": "1 1"
    },
    {
      "prompt": "216 square inches= square feet.",
      "answer": "1.5"
    },
    {
      "prompt": "1728 cubic inches= cubic feet.",
      "answer": "1"
    },
    {
      "prompt": "1 1 3 cubic yards= cubic feet.",
      "answer": "36"
    },
    {
      "prompt": "2 cubic feet= cubic inches.",
      "answer": "3456"
    },
    {
      "prompt": "5 square decamenters= square meters.",
      "answer": "500"
    }
  ],
  "2.1.11": [
    {
      "prompt": "1 quart= cups.",
      "answer": "4"
    },
    {
      "prompt": "1 quart= ounces.",
      "answer": "32"
    },
    {
      "prompt": "3 pints= ounces.",
      "answer": "48"
    },
    {
      "prompt": "3 gallons= cubic inches.",
      "answer": "693"
    },
    {
      "prompt": "2 3 gallon= cubic inches.",
      "answer": "154"
    },
    {
      "prompt": "1 1 3 gallon= cubic inches.",
      "answer": "308"
    },
    {
      "prompt": "75% of 1 gallon= ounces.",
      "answer": "96"
    },
    {
      "prompt": "256 ounces= pounds.",
      "answer": "16"
    },
    {
      "prompt": "750 pounds= % of a ton.",
      "answer": "3"
    },
    {
      "prompt": "75% of a gallon= pints.",
      "answer": "6"
    },
    {
      "prompt": "12 1 2 % of a pint= ounces.",
      "answer": "2"
    },
    {
      "prompt": "4 pints is what % of a gallon:",
      "answer": "50%"
    },
    {
      "prompt": "2 quarts is what % of a pint:",
      "answer": "400%"
    },
    {
      "prompt": "6 tablespoons is % of a cup.",
      "answer": "12.5%"
    },
    {
      "prompt": "9 cups is what % of a quart:",
      "answer": "225%"
    },
    {
      "prompt": "A quart is what % of a cup:",
      "answer": "400%"
    },
    {
      "prompt": "2541 cubic inches= gallons.",
      "answer": "11"
    },
    {
      "prompt": "3 pints is what % of a cup:",
      "answer": "600%"
    },
    {
      "prompt": "3 pints is what % of a gallon:",
      "answer": "37.5%"
    },
    {
      "prompt": "5 gallons= cubic inches.",
      "answer": "1155"
    },
    {
      "prompt": "32 ounces= pints.",
      "answer": "2"
    },
    {
      "prompt": "3.5 pints= quarts.",
      "answer": "1.75"
    },
    {
      "prompt": "2.5 pints= cups.",
      "answer": "5"
    },
    {
      "prompt": "37.5% of a gallon is pints.",
      "answer": "3"
    },
    {
      "prompt": "62.5% of a gallon is quarts.",
      "answer": "2.5"
    },
    {
      "prompt": "87.5% of a gallon is ounces.",
      "answer": "112"
    },
    {
      "prompt": "16 ounces is what part of a gallon:",
      "answer": "1"
    },
    {
      "prompt": "1 gallon= cubic inches.",
      "answer": "231"
    },
    {
      "prompt": "3 11 of a gallon= cubic inches.",
      "answer": "63"
    },
    {
      "prompt": "3 8 of a quart= ounces.",
      "answer": "12"
    },
    {
      "prompt": "7 11 of a gallon= cubic inches.",
      "answer": "147"
    },
    {
      "prompt": "3 quarts and 2 pints= ounces.",
      "answer": "128"
    },
    {
      "prompt": "7 quarts and 6 pints= gallons.",
      "answer": "320"
    }
  ],
  "2.1.12": [
    {
      "prompt": "25◦ C= ◦ F",
      "answer": "77 2. −40 3. 37"
    },
    {
      "prompt": "−40◦ C= ◦ F",
      "answer": ""
    },
    {
      "prompt": "98.6◦ F= ◦ C",
      "answer": ""
    }
  ],
  "2.2.1": [
    {
      "prompt": "2 + 4 + 6 + 8 + · · · + 22",
      "answer": "132"
    },
    {
      "prompt": "1 + 2 + 3 + 4 + · · · + 21",
      "answer": "231"
    },
    {
      "prompt": "1 + 3 + 5 + 7 + · · · + 25",
      "answer": "169"
    },
    {
      "prompt": "The 25 th term of 3 , 8, 13, 18, · · · :",
      "answer": "123"
    },
    {
      "prompt": "6 + 4 + 8 3 + 16 9 + · · ·",
      "answer": "18"
    },
    {
      "prompt": "2 + 4 + 6 + 8 + · · · + 30",
      "answer": "240"
    },
    {
      "prompt": "1 + 3 + 5 + 7 + · · · + 19",
      "answer": "100"
    },
    {
      "prompt": "3 5 − 3 10 + 3 20 − · · ·",
      "answer": "2"
    },
    {
      "prompt": "The 20 th term of 1 , 6, 11, 16, · · · :",
      "answer": "96"
    },
    {
      "prompt": "22 + 20 + 18 + 16 + · · · + 2",
      "answer": "132"
    },
    {
      "prompt": "1 + 3 + 5 + · · · + 17",
      "answer": "81"
    },
    {
      "prompt": "2 + 4 + 6 + · · · + 44",
      "answer": "506"
    },
    {
      "prompt": "1 + 1 3 + 1 9 + 1 27 + · · ·",
      "answer": "1.5"
    },
    {
      "prompt": "13 + 23 + 33 + · · · + 63",
      "answer": "441"
    },
    {
      "prompt": "6 + 12 + 18 + · · · + 66",
      "answer": "396"
    },
    {
      "prompt": "3 + 5 + 7 + 9 + · · · + 31",
      "answer": "255"
    },
    {
      "prompt": "2 + 1 + 1 2 + 1 4 + · · ·",
      "answer": "4"
    },
    {
      "prompt": "− 3 2 + 1 2 − 1 6 + 1 18 − · · ·",
      "answer": "−1 1"
    },
    {
      "prompt": "3 + 5 + 7 + 9 + · · · + 23",
      "answer": "143"
    },
    {
      "prompt": "4 7 + 8 49 + 16 343 + · · ·",
      "answer": "4"
    },
    {
      "prompt": "1 + 4 + 7 + · · · + 25",
      "answer": "117"
    },
    {
      "prompt": "4 + 1 + 1 4 + 1 16 + · · ·",
      "answer": "5 1"
    },
    {
      "prompt": "2 + 2 5 + 2 25 + · · ·",
      "answer": "2.5"
    },
    {
      "prompt": "3 + 9 + 15 + 21 + · · · + 33",
      "answer": "108"
    },
    {
      "prompt": "7 + 14 + 21 + 28 + · · · + 77",
      "answer": "462"
    },
    {
      "prompt": "The 11 th term in the arithmetic sequence 12, 9.5, 7, 4.5 · · · is:",
      "answer": "−3"
    },
    {
      "prompt": "4 + 8 + 12 + · · · + 44",
      "answer": "264"
    },
    {
      "prompt": "8 + 16 + 24 + 32 + · · · + 88",
      "answer": "528"
    },
    {
      "prompt": "51 − 50 + 5−1 − 5−2 + · · ·",
      "answer": "4 1"
    },
    {
      "prompt": "(x)+( x+2)+( x+4) = 147, then ( x)+( x+4)",
      "answer": "98"
    },
    {
      "prompt": "6 + 12 + 18 + 24 + · · · + 36",
      "answer": "126"
    },
    {
      "prompt": "3 + 8 + 13 + 18 + · · · + 43",
      "answer": "207"
    },
    {
      "prompt": "12 + 22 + 32 + 42 + 52 + 62",
      "answer": "91"
    },
    {
      "prompt": "5 + 1 + 1 5 + 1 25 + · · ·",
      "answer": "6 1"
    },
    {
      "prompt": "2 3 + 1 2 + 3 8 + 9 32 + · · ·",
      "answer": "2 2"
    },
    {
      "prompt": "3 + 5 + 7 + 9 + · · · + 31",
      "answer": "255"
    },
    {
      "prompt": "7 + 14 + 21 + 28 + 35 + 42",
      "answer": "147"
    },
    {
      "prompt": "8 + 10 + 12 + · · · + 20",
      "answer": "98"
    },
    {
      "prompt": "10 + 15 + 20 + 25 + · · · 105",
      "answer": "1150"
    },
    {
      "prompt": "8 + 4 + 2 + 1 + · · ·",
      "answer": "16"
    },
    {
      "prompt": "4 + 8 + 12 + 16 + · · · + 44",
      "answer": "264"
    },
    {
      "prompt": "(*) 1 3 + 23 + 33 + · · · + 63",
      "answer": "(*) 418 − 464"
    },
    {
      "prompt": "6 + 12 + 18 + 24 + · · · + 66",
      "answer": "396"
    },
    {
      "prompt": "2 + 6 + 10 + · · · + 42",
      "answer": "242"
    },
    {
      "prompt": "13 − 23 + 33 − 43 + 53",
      "answer": "81"
    },
    {
      "prompt": "3 + 1 1 2 + 3 4 + · · ·",
      "answer": "6"
    },
    {
      "prompt": "14 + 28 + 42 + 56 + 70 + 84",
      "answer": "294"
    },
    {
      "prompt": "121 + 110 + 99 + · · · + 11",
      "answer": "726"
    },
    {
      "prompt": "2 + 9 + 16 + 23 + · · · + 44",
      "answer": "161"
    },
    {
      "prompt": "13 + 26 + 39 + 52 + 65 + 78",
      "answer": "273"
    },
    {
      "prompt": "36 + 32 + 28 + · · · + 12",
      "answer": "168"
    },
    {
      "prompt": "88 + 80 + 72 + · · · + 8",
      "answer": "528"
    },
    {
      "prompt": "The sum of 3 consecutive odd integers is 105. The largest integer:",
      "answer": "37"
    },
    {
      "prompt": "41 − 40 + 4−1 − 4−2 + · · ·",
      "answer": "3.2"
    },
    {
      "prompt": "(*) (1 + 2 + 3 + · · · + 29)2",
      "answer": "(*) 179763 − 198687"
    },
    {
      "prompt": "(*) 1 3 + 23 + 33 + · · · + 113",
      "answer": "(*) 4138 − 4574"
    },
    {
      "prompt": "1 5 + 2 5 + 3 5 + · · · + 1 4 5 + 2",
      "answer": "11"
    },
    {
      "prompt": "(63 + 43 + 23) − (53 + 33 + 13)",
      "answer": "141"
    },
    {
      "prompt": "3 − 1 − 1 3 − 1 9 − 1 27 − · · ·",
      "answer": "1.5"
    },
    {
      "prompt": "1 3 + 2 3 + 1 + 1 1 3 + · · · + 2 1 3",
      "answer": "9 1"
    },
    {
      "prompt": "33 − 43 − 23 + 53",
      "answer": "80"
    },
    {
      "prompt": "6 − 1 − 1 6 − 1 36 − · · ·",
      "answer": "4.8"
    },
    {
      "prompt": "2 + 5 + 8 + · · · + 20",
      "answer": "77"
    },
    {
      "prompt": "(*) 1 3 + 23 + 33 + · · · + 133",
      "answer": "(*) 7866 − 8696"
    },
    {
      "prompt": "3 4 + 9 16 + 27 64 + · · ·",
      "answer": "3"
    },
    {
      "prompt": "1 4 + 3 4 + 5 4 + · · · + 15 4",
      "answer": "16"
    },
    {
      "prompt": "(*) (3 + 6 + 9 + · · · + 30)2",
      "answer": "(*) 25863 − 28587"
    },
    {
      "prompt": "(*) 1 3 + 23 + 33 + · · · + 83",
      "answer": "(*) 1231 − 1361"
    }
  ],
  "2.2.2": [
    {
      "prompt": "The sum of the first 11 terms of the Fibonacci Sequence 2, 4, 6, 10, 16, 26,...:",
      "answer": "750"
    },
    {
      "prompt": "The sum of the first 9 terms of the Fibonacci Sequence 3, 5, 8, 13, 21,...:",
      "answer": "372"
    },
    {
      "prompt": "The sum of the first 9 terms of the Fibonacci Sequence 4, 7, 11, 18, 29,...:",
      "answer": "514"
    },
    {
      "prompt": "The sum of the first 10 terms of the Fibonacci Sequence 4, 5, 9, 14, 23,...:",
      "answer": "660"
    },
    {
      "prompt": "The sum of the first 11 terms of the Fibonacci Sequence 1, 5, 6, 11, 17, 28,...:",
      "answer": "804"
    },
    {
      "prompt": "The sum of the first 12 terms of the Fibonacci Sequence 1, 2, 3, 5, 8, 13, 21,...:",
      "answer": "610"
    },
    {
      "prompt": "The sum of the first 11 terms of the Fibonacci Sequence 2, 5, 7, 12, 19, 31,...:",
      "answer": "893"
    },
    {
      "prompt": "The sum of the first 9 terms of the Fi- bonacci Sequence 3, 8, 11, 19,...:",
      "answer": "534"
    },
    {
      "prompt": "The sum of the first 9 terms of the Fibonacci Sequence 2, 4, 6, 10, 16,...:",
      "answer": "284"
    },
    {
      "prompt": "The sum of the first 9 terms of the Fibonacci Sequence 1, 5, 6, 11, 17,...:",
      "answer": "304"
    },
    {
      "prompt": "The sum of the first 9 terms of the Fibonacci Sequence 3, 5, 8, 13, 21,...:",
      "answer": "372"
    },
    {
      "prompt": "The sum of the first 9 terms of the Fibonacci Sequence −3, 4, 1, 5, 6,...:",
      "answer": "114"
    },
    {
      "prompt": "The sum of the first 9 terms of the Fibonacci Sequence 1, 1, 2, 3, 5,...:",
      "answer": "88"
    },
    {
      "prompt": "The sum of the first 9 terms of the Fibonacci Sequence −3, 2, −1, 1, 0,...:",
      "answer": "6"
    },
    {
      "prompt": "The sum of the first 9 terms of the Fi- bonacci Sequence 1, 3, 4, 7, 11,...:",
      "answer": "196"
    },
    {
      "prompt": "1 + 1 + 2 + 3 + 5 + 8 + · · · + 55",
      "answer": "143"
    },
    {
      "prompt": "1 + 3 + 4 + 7 + 11 + 18 + · · · + 123",
      "answer": "319"
    },
    {
      "prompt": "3 + 6 + 9 + 15 + 24 + · · · + 267",
      "answer": "693"
    },
    {
      "prompt": "4 + 6 + 10 + 16 + 26 + · · · + 288",
      "answer": "748"
    }
  ],
  "2.2.3": [
    {
      "prompt": "30 has how many positive prime integral divisors:",
      "answer": "3"
    },
    {
      "prompt": "36 has how many positive integral divisors:",
      "answer": "9"
    },
    {
      "prompt": "The sum of the prime factors of 42 is:",
      "answer": "96"
    },
    {
      "prompt": "The number of prime factors of 210 is:",
      "answer": "4"
    },
    {
      "prompt": "The number of positive integral divisors of 80 is:",
      "answer": "10"
    },
    {
      "prompt": "The number of positive integral divisors of 2 4 × 5 is:",
      "answer": "10"
    },
    {
      "prompt": "The sum of the distinct prime factors of 75 total:",
      "answer": "8"
    },
    {
      "prompt": "The number of positive integral divisors of 96 is:",
      "answer": "12"
    },
    {
      "prompt": "The number of positive integral divisors of 100 is:",
      "answer": "9"
    },
    {
      "prompt": "The sum of the positive integral divisors 48 is:",
      "answer": "124"
    },
    {
      "prompt": "The sum of the proper positive integral divisors of 24 is:",
      "answer": "36"
    },
    {
      "prompt": "The sum of the positive integral divisors of 28 is:",
      "answer": "56"
    },
    {
      "prompt": "The number of positive integral divisors of 6 1 × 32 × 23:",
      "answer": "20"
    },
    {
      "prompt": "The sum of the proper positive integral divisors of 30 is:",
      "answer": "42"
    },
    {
      "prompt": "How many positive integral divisors does 81 have:",
      "answer": "5"
    },
    {
      "prompt": "How many positive integral divisors does 144 have:",
      "answer": "15"
    },
    {
      "prompt": "The sum of the positive integral divisors 3 × 5 × 7 is:",
      "answer": "192"
    },
    {
      "prompt": "The number of positive integral divisors of 65 × 43 × 21:",
      "answer": "78"
    },
    {
      "prompt": "The sum of the positive integral divisors of 20 is:",
      "answer": "42"
    },
    {
      "prompt": "The number of positive integral divisors of 24 is:",
      "answer": "8"
    },
    {
      "prompt": "The sum of the positive integral divisors of 28 is:",
      "answer": "56"
    },
    {
      "prompt": "The number of positive integral divisors of 23 × 34 × 45:",
      "answer": "70"
    },
    {
      "prompt": "The number of positive integral divisors of 64 is:",
      "answer": "7"
    },
    {
      "prompt": "The sum of the proper positive integral divisors of 36 is:",
      "answer": "55"
    },
    {
      "prompt": "The number of positive integral divisors of 24 × 36 × 510 is:",
      "answer": "385"
    },
    {
      "prompt": "The number of positive integral divisors of 53 × 32 × 21:",
      "answer": "24"
    },
    {
      "prompt": "How many positive integers less than 90 are relatively prime to 90:",
      "answer": "24"
    },
    {
      "prompt": "Sum of the proper positive integral divisors of 18 is:",
      "answer": "39"
    },
    {
      "prompt": "The sum of the positive integers less than 18 that are relatively prime to 18:",
      "answer": "54"
    },
    {
      "prompt": "The number of positive integral divisors of 12 × 33 × 24:",
      "answer": "35"
    },
    {
      "prompt": "How many positive integers less than 16 × 25 are relatively prime to 16 × 25:",
      "answer": "240"
    },
    {
      "prompt": "How many integers between 30 and 3 are relatively prime to 30:",
      "answer": "7"
    },
    {
      "prompt": "How many positive integers divide 48:",
      "answer": "10"
    },
    {
      "prompt": "How many positive integer less than 9 × 8 are relatively prime to 9 × 8:",
      "answer": "24"
    },
    {
      "prompt": "How many integers between 1 and 20 are relatively prime to 20:",
      "answer": "7"
    },
    {
      "prompt": "The number of positive integral divisors of 50 × 54 × 23:",
      "answer": "35"
    },
    {
      "prompt": "How many positive integers divide 64:",
      "answer": "7"
    },
    {
      "prompt": "The sum of the positive integral divisors of 48:",
      "answer": "124"
    }
  ],
  "2.2.4": [
    {
      "prompt": "The number of diagonals a 5-sided regular polygon has:",
      "answer": "5"
    },
    {
      "prompt": "If a regular polygon has 27 distinct diagonals, then it has how many sides:",
      "answer": "9"
    },
    {
      "prompt": "A pentagon has how many diagonals:",
      "answer": "5"
    },
    {
      "prompt": "A nonagon has how many diagonals:",
      "answer": "27"
    },
    {
      "prompt": "An octagon has how many diagonals:",
      "answer": "20"
    },
    {
      "prompt": "A decagon has how many diagonals:",
      "answer": "35"
    },
    {
      "prompt": "A rectangle has how many diagonals:",
      "answer": "2"
    },
    {
      "prompt": "A septagon has how many diagonals:",
      "answer": "14"
    }
  ],
  "2.2.5": [
    {
      "prompt": "A regular nonagon has an interior angle of:",
      "answer": "140"
    },
    {
      "prompt": "An interior angle of a regular pentagon has a measure of:",
      "answer": "108"
    },
    {
      "prompt": "The supplement of an interior angle of a regular octagon measures:",
      "answer": "45"
    },
    {
      "prompt": "The angles in a regular octagon total:",
      "answer": "1080"
    },
    {
      "prompt": "The measure of an interior angle of a regular hexagon measures:",
      "answer": "120"
    },
    {
      "prompt": "The sum of the angles in a regular decagon is:",
      "answer": "1440"
    },
    {
      "prompt": "The supplement of a 47 ◦ angle is:",
      "answer": "133"
    },
    {
      "prompt": "The sum of the interior angles of a regular pentagon is:",
      "answer": "540"
    }
  ],
  "2.2.6": [
    {
      "prompt": "The 7 th pentagonal number:",
      "answer": "70"
    },
    {
      "prompt": "The 4 th octagonal number:",
      "answer": "40"
    },
    {
      "prompt": "The 5 th pentagonal number:",
      "answer": "35"
    },
    {
      "prompt": "The 8 th octagonal number:",
      "answer": "176"
    },
    {
      "prompt": "The 12 th hexagonal number:",
      "answer": "276"
    },
    {
      "prompt": "The 7 th septagonal number is:",
      "answer": "112"
    },
    {
      "prompt": "The 5 th pentagonal number is:",
      "answer": "35"
    },
    {
      "prompt": "The 6 th pentagonal number is:",
      "answer": "51"
    },
    {
      "prompt": "The 5 th hexagonal number is:",
      "answer": "45"
    },
    {
      "prompt": "The 11 th triangular number is:",
      "answer": "66"
    },
    {
      "prompt": "The 12 th triangular number is:",
      "answer": "78"
    },
    {
      "prompt": "The 6 th hexagonal number is:",
      "answer": "66"
    },
    {
      "prompt": "The sum of the 5 th triangular and the 6 th triangular numbers:",
      "answer": "36"
    },
    {
      "prompt": "The sum of the 3 rd triangular and the 3 rd pentagonal numbers:",
      "answer": "18"
    }
  ],
  "2.2.7": [
    {
      "prompt": "An obtuse triangle has integral sides of 3,x, and 7. The largest value for x is:",
      "answer": "9 2. 40 3. 26 4. 15"
    },
    {
      "prompt": "The sides of a right triangle are integers. If one leg is 9 then the other leg is:",
      "answer": ""
    },
    {
      "prompt": "x, y are positive integers with x2 − y2 = 53 Then y",
      "answer": ""
    },
    {
      "prompt": "A right triangle with integer sides has a hypotenuse of 113. The smallest leg is:",
      "answer": ""
    },
    {
      "prompt": "An acute triangle has integer side lengths of 4,7,and x. The smallest value for x is:",
      "answer": "4"
    },
    {
      "prompt": "An acute triangle has integer side lengths of 4,7,and x. The largest value for x is:",
      "answer": "8"
    },
    {
      "prompt": "x,y are integers with x 2 − y2 = −67 then x is:",
      "answer": "33"
    },
    {
      "prompt": "An obtuse triangle has integer side lengths of x,7, and 11. The smallest value of x is:",
      "answer": "5"
    },
    {
      "prompt": "a2 + b2 = 113 2 where 0 < a < b and a, b are integers. Then a",
      "answer": "15"
    },
    {
      "prompt": "The sides of a right triangle are x,7,and 11. If x < 7 and x = a √ 2 then a",
      "answer": "6"
    },
    {
      "prompt": "An acute triangle has integer sides of 2,7,and x. The largest value of x is:",
      "answer": "7"
    },
    {
      "prompt": "An obtuse triangle has integer sides of 6,x,and 11. The smallest value of x is:",
      "answer": "6"
    },
    {
      "prompt": "An acute triangle has integer sides of 7, 11,and x. The smallest value of x is:",
      "answer": "9"
    },
    {
      "prompt": "An obtuse triangle has integer sides of 8,15, and x. The smallest value of x is:",
      "answer": "8"
    },
    {
      "prompt": "The sides of a right triangle are integral. If one leg is 13, find the length of the other leg:",
      "answer": "84"
    },
    {
      "prompt": "A right triangle has integer side lengths of 7,x,and 25. Its area is:",
      "answer": "84"
    }
  ],
  "2.2.8": [
    {
      "prompt": "The sides of an equilateral triangle are √ 3 cm, then its height is:",
      "answer": "3"
    },
    {
      "prompt": "The area of an equilateral triangle is √ 3cm2, then its side length is:",
      "answer": "6"
    },
    {
      "prompt": "If the area of an equilateral triangle is √ 3ft2 then its side length is:",
      "answer": "2 √"
    },
    {
      "prompt": "The height of an equilateral triangle is 12 in. Its area is 4 k √ 3, k",
      "answer": "12"
    },
    {
      "prompt": "The perimeter of an equilateral triangle is 12 cm. Its area is k √ 3cm2.k",
      "answer": "4"
    },
    {
      "prompt": "Find the perimeter of an equilateral triangle whose area is 9 √ 3cm2 :",
      "answer": "18"
    },
    {
      "prompt": "The area of an equilateral triangle is √ 3in2. Its height is:",
      "answer": "3"
    },
    {
      "prompt": "An equilateral triangle has an area of √ 3cm2. Its height is:",
      "answer": "9"
    }
  ],
  "2.2.9": [
    {
      "prompt": "Find the surface area of a square who’s side length is 11in. :",
      "answer": "726"
    },
    {
      "prompt": "Find the surface area of a sphere who’s radius is 6in. :",
      "answer": "144π"
    },
    {
      "prompt": "If the radius of a sphere is tripled, then the volume is multiplied by:",
      "answer": "27"
    },
    {
      "prompt": "The total surface area of a cub with an edge of 4 inches is:",
      "answer": "96"
    },
    {
      "prompt": "A cube has a volume of 512cm 2. The area of the base is:",
      "answer": "64"
    },
    {
      "prompt": "A cube has a surface area of 216cm 2. The volume of the cube is:",
      "answer": "216"
    },
    {
      "prompt": "If the total surface area of a cube is 384cm 2 then the volume of the cube is:",
      "answer": "512"
    },
    {
      "prompt": "Find the volume of a cube with an edge of 12 cm.:",
      "answer": "1728"
    },
    {
      "prompt": "A tin can has a diameter of 8 and a height of 14. The volume is kπ, k",
      "answer": "224"
    }
  ],
  "2.2.10": [
    {
      "prompt": "5P3",
      "answer": "60"
    },
    {
      "prompt": "5C3",
      "answer": "10"
    },
    {
      "prompt": "6C3",
      "answer": "20"
    },
    {
      "prompt": "7C4",
      "answer": "35"
    },
    {
      "prompt": "7P4",
      "answer": "840"
    },
    {
      "prompt": "6P2",
      "answer": "30"
    },
    {
      "prompt": "8C6",
      "answer": "28"
    },
    {
      "prompt": "5C2",
      "answer": "10"
    },
    {
      "prompt": "8P3",
      "answer": "336"
    },
    {
      "prompt": "8C3",
      "answer": "56"
    },
    {
      "prompt": "9C2",
      "answer": "36"
    },
    {
      "prompt": "4P2 ÷4 C2",
      "answer": "2"
    },
    {
      "prompt": "6P3 ÷6 C3",
      "answer": "6"
    },
    {
      "prompt": "7P4 ÷7 C3",
      "answer": "24"
    },
    {
      "prompt": "8C5 ÷8 P5",
      "answer": "1"
    },
    {
      "prompt": "9P3 ÷9 C3",
      "answer": "6"
    },
    {
      "prompt": "4P3 ÷3 P2",
      "answer": "4"
    },
    {
      "prompt": "4C3 ×3 C2",
      "answer": "12"
    },
    {
      "prompt": "5P3 ×4 P2",
      "answer": "720"
    },
    {
      "prompt": "6C3 ÷6 P3",
      "answer": "1"
    },
    {
      "prompt": "6C1 +4 P1",
      "answer": "10"
    },
    {
      "prompt": "(5C2)(5P2)",
      "answer": "200"
    }
  ],
  "2.2.11": [
    {
      "prompt": "sin(−30◦)",
      "answer": "− 1"
    },
    {
      "prompt": "cos θ =.375 then sec θ",
      "answer": "8"
    },
    {
      "prompt": "sin(3π)",
      "answer": "0"
    },
    {
      "prompt": "tan(225◦)",
      "answer": "1"
    },
    {
      "prompt": "sin(sin−1 1 2 )",
      "answer": "1"
    },
    {
      "prompt": "sin θ = −.1 then csc θ",
      "answer": "−10"
    },
    {
      "prompt": "sin 11π 6",
      "answer": "− 1"
    },
    {
      "prompt": "cos(−5π)",
      "answer": "−1"
    },
    {
      "prompt": "π 18 = ◦",
      "answer": "10"
    },
    {
      "prompt": "cos(sec−1 3)",
      "answer": "1"
    },
    {
      "prompt": "5π 8 = ◦",
      "answer": "112.5"
    },
    {
      "prompt": "π 5 = ◦",
      "answer": "36"
    },
    {
      "prompt": "cos(sin−1 1)",
      "answer": "0"
    },
    {
      "prompt": "tan(−45◦)",
      "answer": "−1"
    },
    {
      "prompt": "sin(−π)",
      "answer": "0"
    },
    {
      "prompt": "cos(−300◦)",
      "answer": "1"
    },
    {
      "prompt": "sin−1(sin 1)",
      "answer": "1"
    },
    {
      "prompt": "csc(−150◦)",
      "answer": "−2"
    },
    {
      "prompt": "sec(120◦)",
      "answer": "−2"
    },
    {
      "prompt": "tan(−225◦)",
      "answer": "−1"
    },
    {
      "prompt": "3π 5 = ◦",
      "answer": "108"
    },
    {
      "prompt": "tan(−45◦)",
      "answer": "−1"
    },
    {
      "prompt": "tan(315◦)",
      "answer": "−1"
    },
    {
      "prompt": "If 0 ◦ < x < 90◦ and tan x = cot x, x",
      "answer": "45"
    },
    {
      "prompt": "280◦ = kπ then k",
      "answer": "14"
    },
    {
      "prompt": "tan 5π 4",
      "answer": "1"
    },
    {
      "prompt": "cos θ =.08333... then sec θ",
      "answer": "12"
    },
    {
      "prompt": "sin(5π) + cos(5π)",
      "answer": "−1"
    },
    {
      "prompt": "sec(60◦)",
      "answer": "2"
    },
    {
      "prompt": "12◦ = π k , k",
      "answer": "15"
    },
    {
      "prompt": "cos θ = −.25 then sec θ",
      "answer": "−4"
    },
    {
      "prompt": "tan2 60◦",
      "answer": "3"
    },
    {
      "prompt": "1.25π = ◦",
      "answer": "225"
    },
    {
      "prompt": "cot2 60◦",
      "answer": "1"
    },
    {
      "prompt": "sin[cos−1 ( √ ) ]",
      "answer": "√"
    },
    {
      "prompt": "cos(−3π) − sin(−3π)",
      "answer": "−1"
    },
    {
      "prompt": "cos( −4π 3 ) + sin( −5π 6 )",
      "answer": "−1"
    },
    {
      "prompt": "2 sin 120◦ cos 30◦",
      "answer": "3"
    },
    {
      "prompt": "cos(240◦) − sin(150◦)",
      "answer": "−1"
    },
    {
      "prompt": "sin(cos−1 √ 2 )",
      "answer": "1"
    },
    {
      "prompt": "sin(cos−1 1)",
      "answer": "0"
    },
    {
      "prompt": "If csc θ = −3, where 270 ◦ < θ < 300◦, then sin θ",
      "answer": "− 1"
    },
    {
      "prompt": "sin( −7π 6 ) − cos( −2π 3 )",
      "answer": "1"
    },
    {
      "prompt": "sec θ = −3, θ is in QIII, then cos θ",
      "answer": "− 1"
    },
    {
      "prompt": "cos 5π 6 × sin 2π 3",
      "answer": "− 3"
    },
    {
      "prompt": "sin 3π 4 × cos 5π 4",
      "answer": "− 1"
    },
    {
      "prompt": "sin 30◦ + cos 60◦ = tan x 0◦ ≤ x ≤ 90◦, x",
      "answer": "45"
    },
    {
      "prompt": "cos ( sin−1 √ )",
      "answer": "1"
    },
    {
      "prompt": "sin( −π 3 ) × sin( π 3 )",
      "answer": "− 3"
    },
    {
      "prompt": "cos(120◦) × cos(120◦)",
      "answer": "1"
    },
    {
      "prompt": "216◦ = kπ, k",
      "answer": "6"
    },
    {
      "prompt": "cos( −2π 3 ) × cos( 4π 3 )",
      "answer": "1"
    },
    {
      "prompt": "tan(30◦) × cot(60◦)",
      "answer": "1"
    },
    {
      "prompt": "cos( −π 3 ) × cos( π 3 )",
      "answer": "1"
    },
    {
      "prompt": "sin π 6 + cos π 3 = tan π kthen k",
      "answer": "4"
    },
    {
      "prompt": "cos−1.8 + cos−1.6 = kπ then k",
      "answer": "1"
    },
    {
      "prompt": "sin(300◦) × cos(330◦)",
      "answer": "− 3"
    },
    {
      "prompt": "sin( −π 6 ) × cos( π 3 )",
      "answer": "− 1"
    },
    {
      "prompt": "630◦ = kπ, k",
      "answer": "3 1"
    }
  ],
  "2.2.12": [
    {
      "prompt": "cos2 30◦ + sin2 30◦",
      "answer": "1"
    },
    {
      "prompt": "cos2 30◦ − sin2 30◦",
      "answer": "1"
    },
    {
      "prompt": "2 sin 15◦ cos 15◦",
      "answer": "1"
    },
    {
      "prompt": "2 sin 30◦ sin 30◦ − 1",
      "answer": "− 1"
    },
    {
      "prompt": "1 − sin2 30◦",
      "answer": "3"
    },
    {
      "prompt": "cos 22◦ = sin θ, 0◦ < θ < 90◦, θ",
      "answer": "68"
    },
    {
      "prompt": "[2 sin π 3 cos π 3 ]2",
      "answer": "3"
    },
    {
      "prompt": "2 sin 15◦ cos 15◦ − 1",
      "answer": "− 1"
    },
    {
      "prompt": "3 csc2 45◦ − 3 cot2 45◦",
      "answer": "3"
    },
    {
      "prompt": "cos2 30◦ − sin2 30◦",
      "answer": "1"
    },
    {
      "prompt": "sin 105◦ cos 105◦",
      "answer": "− 1"
    },
    {
      "prompt": "sin 38◦ = cos θ, 270◦ < θ < 360◦, θ",
      "answer": "308"
    },
    {
      "prompt": "sin 30◦ cos 60◦ − sin 60◦ cos 30◦",
      "answer": "− 1"
    },
    {
      "prompt": "2 cos2 π 6 − 1",
      "answer": "1"
    },
    {
      "prompt": "(1 − sin 60◦)(1 + sin 60◦)",
      "answer": "1"
    },
    {
      "prompt": "2 sin 15◦ sin 75◦",
      "answer": "1"
    },
    {
      "prompt": "(sin π 3 − cos π 3 )(sin π 3 + cos π 3 )",
      "answer": "1"
    },
    {
      "prompt": "If sin( A) = 3 5 , then cos(2 A)",
      "answer": "7"
    },
    {
      "prompt": "1 − 2 sin2 π 6",
      "answer": "1"
    },
    {
      "prompt": "cos 75◦ sin 75◦",
      "answer": "1"
    },
    {
      "prompt": "sin 15◦ cos 45◦ − sin 45◦ cos 15◦",
      "answer": "− 1"
    },
    {
      "prompt": "2 − 4 sin2 30◦",
      "answer": "1"
    },
    {
      "prompt": "cos 95◦ cos 25◦ − sin 95◦ sin 25◦",
      "answer": "− 1"
    },
    {
      "prompt": "sin π 6 + cos π 3",
      "answer": "1"
    },
    {
      "prompt": "cos 15◦ sin 45◦ − cos 45◦ sin 15◦",
      "answer": "1"
    },
    {
      "prompt": "(sin π 6 − cos π 6 )(sin π 6 + cos π 6 )",
      "answer": "− 1"
    },
    {
      "prompt": "2 tan2 θ − 2 sec2 θ",
      "answer": "−2"
    }
  ],
  "2.2.13": [
    {
      "prompt": "What is the amplitude of y = 4 cos(2x) + 1:",
      "answer": "4"
    },
    {
      "prompt": "The graph of y = 2 − 3 cos[2(x − 5)] has a horizontal displacement of:",
      "answer": "5"
    },
    {
      "prompt": "The graph of y = 2 − 2 cos[3(x − 5)] has a vertical shift of:",
      "answer": "2"
    },
    {
      "prompt": "The amplitude of y = 2 − 3 cos[4(x + 5)] is:",
      "answer": "3"
    },
    {
      "prompt": "The period of y = 5 cos[ 1 4 (x + 3π)] + 2 is kπ, k",
      "answer": "8"
    },
    {
      "prompt": "The phase shift of y = 5 cos[4(x + 3)] − 2 is:",
      "answer": "−3"
    },
    {
      "prompt": "The amplitude of y = 2 − 5 cos[4(x − 3)] is:",
      "answer": "5"
    },
    {
      "prompt": "The vertical displacement of y = 5 cos[4( x + 3)] − 2 is:",
      "answer": "−2"
    },
    {
      "prompt": "The phase shift of f (x) = 2 sin(3 x − π 2 ) is kπ, k",
      "answer": "π"
    },
    {
      "prompt": "The period of y = 2 − 3 cos(4πx + 2π) is:",
      "answer": "1"
    },
    {
      "prompt": "The period of y = 2 + 3 sin( x 5 ) is:",
      "answer": "10π"
    },
    {
      "prompt": "The graph of y = 1 − 2 cos(3x + 4) has an amplitude of:",
      "answer": "2"
    }
  ],
  "2.2.14": [
    {
      "prompt": "The vertex of the parabola y = 2x2 + 8x − 1 is ( h, k), k",
      "answer": "−9 2. −5 3. 1 1"
    },
    {
      "prompt": "The vertex of y = x2 − 2x − 4 is ( h, k), k",
      "answer": ""
    },
    {
      "prompt": "If g(x) = 2 − x − x2, then the axis of symmetry is x",
      "answer": ""
    }
  ],
  "2.2.15": [
    {
      "prompt": "For 2x2 − 4x − k = 0 to have 2 equal roots, the smallest value of k is:",
      "answer": "−2"
    },
    {
      "prompt": "For 3x2 − x − 2k = 0 to have equal roots k has to be:",
      "answer": "− 1"
    },
    {
      "prompt": "F or 3x2 − 2x + 1 − k = 0 to have equal roots, k has to be:",
      "answer": "2"
    },
    {
      "prompt": "The discriminant of 2 x2 − 3x = 1 is:",
      "answer": "√"
    },
    {
      "prompt": "For what value of k does 3 x2 + 4x + k = 0 have equal roots:",
      "answer": "4"
    },
    {
      "prompt": "For x2 − 2x − 3k = 0 to have one real solution k has to be:",
      "answer": "− 1"
    }
  ],
  "3.1.1": [
    {
      "prompt": "The GCF of 35 and 63 is:",
      "answer": "7"
    },
    {
      "prompt": "The LCM of 64 and 20 is:",
      "answer": "320"
    },
    {
      "prompt": "The LCM of 27 and 36 is:",
      "answer": "108"
    },
    {
      "prompt": "The GCF of 48 and 72 is:",
      "answer": "24"
    },
    {
      "prompt": "The GCD of 27 and 36 is:",
      "answer": "9"
    },
    {
      "prompt": "The LCM of 63 and 45 is:",
      "answer": "315"
    },
    {
      "prompt": "The GCD of 132 and 156 is:",
      "answer": "12"
    },
    {
      "prompt": "The LCM of 57 and 95 is:",
      "answer": "285"
    },
    {
      "prompt": "The GCD of 52 and 91 is:",
      "answer": "13"
    },
    {
      "prompt": "The LCM of 52 and 28 is:",
      "answer": "364"
    },
    {
      "prompt": "The GCD of 48 and 54 is:",
      "answer": "6"
    },
    {
      "prompt": "The GCD of 54 and 36 is:",
      "answer": "18"
    },
    {
      "prompt": "The LCM of 27 and 36 is:",
      "answer": "108"
    },
    {
      "prompt": "The LCM of 108 and 81 is:",
      "answer": "324"
    },
    {
      "prompt": "The GCD of 28 and 52 is:",
      "answer": "4"
    },
    {
      "prompt": "The LCM of 51 and 34 is:",
      "answer": "102"
    },
    {
      "prompt": "The LCM of 2 3 × 32 and 2 2 × 33 is:",
      "answer": "216"
    },
    {
      "prompt": "The LCM of 28 and 42 is:",
      "answer": "84"
    },
    {
      "prompt": "The LCM of 54 and 48 is:",
      "answer": "432"
    },
    {
      "prompt": "The GCF of 84 and 70 is:",
      "answer": "420"
    },
    {
      "prompt": "The GCF of 132 and 187 is:",
      "answer": "11"
    },
    {
      "prompt": "The LCM of 48 and 72 is:",
      "answer": "144"
    },
    {
      "prompt": "The GCF of 51 , 68, and 85 is:",
      "answer": "17"
    },
    {
      "prompt": "The GCF(24,44)-LCM(24,44)",
      "answer": "−260"
    },
    {
      "prompt": "The LCM of 16 , 20, and 32 is:",
      "answer": "160"
    },
    {
      "prompt": "The GCD(15,28) times LCM(15,28) is:",
      "answer": "420"
    },
    {
      "prompt": "The LCM of 12 , 18, and 20 is:",
      "answer": "72"
    },
    {
      "prompt": "The LCM of 14 , 21, and 42 is:",
      "answer": "42"
    },
    {
      "prompt": "The LCM of 8 , 18, and 32 is:",
      "answer": "288"
    },
    {
      "prompt": "The GCD(15,21)+LCM(15,21)",
      "answer": "108"
    },
    {
      "prompt": "The GCF of 44 , 66, and 88 is:",
      "answer": "22"
    },
    {
      "prompt": "The product of the GCF and LCM of 21 and 33 is:",
      "answer": "693"
    },
    {
      "prompt": "The LCM of 16 , 32, and 48 is:",
      "answer": "96"
    },
    {
      "prompt": "The GCD(18,33)+LCM(18,33)",
      "answer": "201"
    },
    {
      "prompt": "The LCM of 14 , 28, and 48 is:",
      "answer": "336"
    },
    {
      "prompt": "The LCM(21,84)-GCF(21,84)",
      "answer": "63"
    },
    {
      "prompt": "The LCM of 24 , 36, and 48 is:",
      "answer": "144"
    },
    {
      "prompt": "The GCD(16,20)-LCM(16,20)",
      "answer": "−76"
    },
    {
      "prompt": "The GCF of 42 , 28, and 56 is:",
      "answer": "14"
    },
    {
      "prompt": "The product of the GCF and LCM of 24 and 30 is:",
      "answer": "720"
    },
    {
      "prompt": "The LCM of 36 , 24, and 20 is:",
      "answer": "360"
    },
    {
      "prompt": "The LCM of 28 , 42, and 56 is:",
      "answer": "168"
    }
  ],
  "3.1.3": [
    {
      "prompt": "The sum of the coeﬃcients in the expansion of (5 x − 9y)3 is:",
      "answer": "−64"
    },
    {
      "prompt": "The sum of the coeﬃcients in the expansion of (5 x + 7y)3 is:",
      "answer": "1728"
    },
    {
      "prompt": "The sum of the coeﬃcients in the expansion of ( x − y)3 is:",
      "answer": "0"
    },
    {
      "prompt": "The sum of the coeﬃcients in the expansion of ( a + b)3 is:",
      "answer": "8"
    },
    {
      "prompt": "The sum of the coeﬃcients in the expansion of ( x + y)6 is:",
      "answer": "64"
    },
    {
      "prompt": "The sum of the coeﬃcients in the expansion of ( x + y)2 is:",
      "answer": "4"
    },
    {
      "prompt": "The sum of the coeﬃcients in the expansion of (a + b)5 is:",
      "answer": "32"
    },
    {
      "prompt": "The sum of the coeﬃcients in the expansion of ( a − b)4 is:",
      "answer": "0"
    },
    {
      "prompt": "The sum of the coeﬃcients in the expansion of (3 x − y)4 is:",
      "answer": "16"
    },
    {
      "prompt": "The product of all the coeﬃcients in the expansion ( x + y)4 is:",
      "answer": "96"
    },
    {
      "prompt": "The product of the coeﬃcients in the expansion of (2 a + 2b)2 is:",
      "answer": "128"
    },
    {
      "prompt": "The product of the coeﬃcients in the expansion of ( a + b)3 is:",
      "answer": "9"
    },
    {
      "prompt": "The product of the coeﬃcients in the expansion of ( a − b)4 is:",
      "answer": "128"
    },
    {
      "prompt": "The product of the coeﬃcients in the expansion of (3 a + 3b)2 is:",
      "answer": "1458"
    },
    {
      "prompt": "The product of the coeﬃcients in the expansion of (a + b)5 is:",
      "answer": "2500"
    },
    {
      "prompt": "The product of the coeﬃcients in the expansion of ( a − b)2 is:",
      "answer": "−2"
    },
    {
      "prompt": "The product of the coeﬃcients in the expansion of (4 a − 3b)2 is:",
      "answer": "−3456"
    },
    {
      "prompt": "The sum of the coeﬃcients in the expansion of ( x2 − 6x + 9)2 is:",
      "answer": "16"
    },
    {
      "prompt": "The product of the coeﬃcients in the expansion of (4x + 5)2 is:",
      "answer": "16000"
    }
  ],
  "3.1.4": [
    {
      "prompt": "The sum of the roots of 2x2 − 3x + 1 = 0 is:",
      "answer": "3"
    },
    {
      "prompt": "The sum of the roots of (x − 4)(x − 5) = 0 is:",
      "answer": "9"
    },
    {
      "prompt": "The sum of the roots of 3x3 − 2x2 + x − 4 = 0 is:",
      "answer": "2"
    },
    {
      "prompt": "The product of the roots of x2 + 3x = 7 is:",
      "answer": "−7"
    },
    {
      "prompt": "The sum of the roots of x2 − 9 = 0 is:",
      "answer": "0"
    },
    {
      "prompt": "The sum of the roots of 4x2 + 3x = 2 is:",
      "answer": "− 3"
    },
    {
      "prompt": "The sum of the roots of (2x − 3)2 = 0 is:",
      "answer": "3"
    },
    {
      "prompt": "The product of the roots of 5x3 − 8x2 + 2x + 3 = 0 is:",
      "answer": "− 3"
    },
    {
      "prompt": "The product of the roots of 4x3 − 3x2 + 2x − 1 = 0 is:",
      "answer": "1"
    },
    {
      "prompt": "The sum of the roots of 3x3 + 2x2 = 9 is:",
      "answer": "− 2"
    },
    {
      "prompt": "The sum of the roots of x3 − 13x = 12 is:",
      "answer": "0"
    },
    {
      "prompt": "Let R,S,T be the roots of 2 x3 + 4x = 5. Then R × S × T",
      "answer": "5"
    },
    {
      "prompt": "The product of the roots of 5x3 + 4x − 3 = 0 is:",
      "answer": "3"
    },
    {
      "prompt": "The sum of the roots of (3x − 2)(2x + 1) = 0 is:",
      "answer": "1"
    },
    {
      "prompt": "The sum of the product of the roots taken two at a time of 2 x3 + 4x2 − 6x = 8 is:",
      "answer": "−3"
    },
    {
      "prompt": "The sum of the roots of 2x3 + 4x2 − 3x + 5 = 0 is:",
      "answer": "−2"
    },
    {
      "prompt": "The product of the roots of (2x − 1)(3x + 2)(4x − 3) = 0 is:",
      "answer": "− 1"
    },
    {
      "prompt": "Let R,S,T be the roots of 2 x3 + 4x = 5. Then RS + RT + ST",
      "answer": "2"
    },
    {
      "prompt": "The equation 2x 3 − bx2 + cx = d has roots r,s,t and rst=3.5, then d",
      "answer": "7"
    },
    {
      "prompt": "The sum of the roots of 3x2 − bx + c = 0 is −12 then b",
      "answer": "−36"
    },
    {
      "prompt": "If r,s,and tare the roots of the equation 2x3 − 4x2 + 6x = 8 then rs + rt + st",
      "answer": "3 22. − 3 4 23. − 1"
    },
    {
      "prompt": "The sum of the roots of 4x3 + 3x2 − 2x − 1 = 0 is:",
      "answer": ""
    },
    {
      "prompt": "The product of the roots of 4x3 − 3x2 + 2x + 1 = 0 is:",
      "answer": ""
    },
    {
      "prompt": "The sum of the roots of 5x3 + 4x − 3 = 0 is:",
      "answer": "0"
    },
    {
      "prompt": "The equation 2x 3 − bx2 + cx = d has roots r,s,t If r + s + t = −2 then b",
      "answer": "−4"
    }
  ],
  "3.1.5": [
    {
      "prompt": "Find the units digit of 19 7:",
      "answer": "9"
    },
    {
      "prompt": "Find the units digit of 17 6:",
      "answer": "9"
    },
    {
      "prompt": "Find the units digit of 8 8:",
      "answer": "6"
    },
    {
      "prompt": "Find the units digit of 7 7:",
      "answer": "3"
    },
    {
      "prompt": "Find the units digit of 13 13:",
      "answer": "3"
    },
    {
      "prompt": "Find the units digit of 17 5:",
      "answer": "7"
    },
    {
      "prompt": "i78",
      "answer": "−1"
    },
    {
      "prompt": "i66",
      "answer": "−1"
    },
    {
      "prompt": "Find the units digit of 16 5:",
      "answer": "6"
    }
  ],
  "3.1.6": [
    {
      "prompt": "6x = 34, then 6 x+2",
      "answer": ""
    },
    {
      "prompt": "3x = 70.1, then 3 x+2",
      "answer": ""
    },
    {
      "prompt": "4x+1 = 2, then 4 x−1",
      "answer": ""
    },
    {
      "prompt": "6x = 72, then 6 x−2",
      "answer": ""
    },
    {
      "prompt": "7x = 14, then 7 x−2",
      "answer": ""
    },
    {
      "prompt": "4x =.125, then 4 2x",
      "answer": ""
    },
    {
      "prompt": "8x = 17, then 8 2x",
      "answer": ""
    },
    {
      "prompt": "2x = 14.6, then 2 x+1",
      "answer": ""
    },
    {
      "prompt": "4x = 32, then x",
      "answer": ""
    },
    {
      "prompt": "9x = 108, then 3 2x+1",
      "answer": ""
    },
    {
      "prompt": "62x = 36, then 6 3x",
      "answer": ""
    },
    {
      "prompt": "8x = 256, then x",
      "answer": ""
    },
    {
      "prompt": "27x = 81, x",
      "answer": ""
    },
    {
      "prompt": "28 ÷ 43 has a remainder of:",
      "answer": ""
    },
    {
      "prompt": "9x = 27 x+2, x",
      "answer": ""
    },
    {
      "prompt": "n4 = 49, then n6",
      "answer": ""
    },
    {
      "prompt": "16x = 169, then 4 x",
      "answer": ""
    },
    {
      "prompt": "53x = 25 2+x, x",
      "answer": ""
    },
    {
      "prompt": "n6 = 1728, then n4",
      "answer": ""
    },
    {
      "prompt": "4x ÷ 16x = 4 −2, x",
      "answer": ""
    },
    {
      "prompt": "√ a5 × 5√ a2 = n√ a29, n",
      "answer": ""
    },
    {
      "prompt": "68 ÷ 8 has a remainder of:",
      "answer": ""
    },
    {
      "prompt": "3√ a4 + 4√ a3 = 12√ an, n",
      "answer": ""
    }
  ],
  "3.1.7": [
    {
      "prompt": "−2 log3 x = 4, x",
      "answer": "1"
    },
    {
      "prompt": "log12 2 + log12 8 + log12 9",
      "answer": "2"
    },
    {
      "prompt": "log3 40 − log3 8 + log3 1.8",
      "answer": "2"
    },
    {
      "prompt": "logx 216 = 3 , x",
      "answer": "6"
    },
    {
      "prompt": "f (x) = log 3 x − 4, f (3)",
      "answer": "−3"
    },
    {
      "prompt": "log8 16",
      "answer": "4"
    },
    {
      "prompt": "log3 x = 4, √x",
      "answer": "9"
    },
    {
      "prompt": "logx 343 = 3 , x",
      "answer": "7"
    },
    {
      "prompt": "If log.25 = 3, then log 4",
      "answer": "−3"
    },
    {
      "prompt": "(log5 6)(log6 5)",
      "answer": "1"
    },
    {
      "prompt": "log3 216 ÷ log3 6",
      "answer": "3"
    },
    {
      "prompt": "log3 32 − log3 16 + log3 1.5",
      "answer": "1"
    },
    {
      "prompt": "log2 64 ÷ log2 4",
      "answer": "3"
    },
    {
      "prompt": "log4 32 + log4 2 − log4 16",
      "answer": "1"
    },
    {
      "prompt": "log5 625 × log5 25 ÷ log5 125",
      "answer": "8"
    },
    {
      "prompt": "log4 8 × log8 4",
      "answer": "1"
    },
    {
      "prompt": "log4 256 ÷ log4 16 × log4 64",
      "answer": "6"
    },
    {
      "prompt": "log8 k = 1 3 , k",
      "answer": "2"
    },
    {
      "prompt": "log5 M = 2, √ M",
      "answer": "5"
    },
    {
      "prompt": "4 log9 k = 2, k",
      "answer": "3"
    },
    {
      "prompt": "log4 8 = N then 2 N",
      "answer": "3"
    },
    {
      "prompt": "log9 3 = W then 3 W",
      "answer": "1 1"
    },
    {
      "prompt": "logk 32 = 5 , k",
      "answer": "2"
    },
    {
      "prompt": "log3[log2(log2 256)]",
      "answer": "1"
    },
    {
      "prompt": "log4.5 = k, k",
      "answer": "−.5"
    },
    {
      "prompt": "log5[log4(log3 81)]",
      "answer": "0"
    },
    {
      "prompt": "log16 8 = w, w",
      "answer": "3"
    },
    {
      "prompt": "log9 k = 2.5, k",
      "answer": "243"
    },
    {
      "prompt": "log2[log3(log2 512)]",
      "answer": "1"
    },
    {
      "prompt": "logb.5 = −.5, b",
      "answer": "4"
    },
    {
      "prompt": "logb 8 = 3 , b",
      "answer": "2"
    },
    {
      "prompt": "log3[log4(log5 625)]",
      "answer": "0"
    },
    {
      "prompt": "log4 8 = k, k",
      "answer": "3"
    },
    {
      "prompt": "log4[log3(log5 125)]",
      "answer": "0"
    },
    {
      "prompt": "log4.125 = k, k",
      "answer": "−1.5"
    },
    {
      "prompt": "log8(3x − 2) = 2 , x",
      "answer": "22"
    },
    {
      "prompt": "log4[log2(log6 36)]",
      "answer": "0"
    },
    {
      "prompt": "log4 x = 3, √x",
      "answer": "8"
    },
    {
      "prompt": "log5 x2 = 4, √x",
      "answer": "5"
    },
    {
      "prompt": "(*) 300 log 600",
      "answer": "(*) 791 − 876"
    },
    {
      "prompt": "log4 x = −.5, x",
      "answer": ".5"
    },
    {
      "prompt": "3 log2 x = 6, √x",
      "answer": "2"
    },
    {
      "prompt": "log2 x = 9, 3√x",
      "answer": "8"
    },
    {
      "prompt": "logx 64 = 3 , x −2",
      "answer": "1"
    },
    {
      "prompt": "log9 x = 2, √x",
      "answer": "9"
    },
    {
      "prompt": "logk 1728 = 3 , k",
      "answer": "12"
    },
    {
      "prompt": "log4 x = 3, √x",
      "answer": "8"
    },
    {
      "prompt": "log2(log10 100)",
      "answer": "1"
    },
    {
      "prompt": "logx 64 = 1.5, x",
      "answer": "16"
    },
    {
      "prompt": "log8(log4 16)",
      "answer": "1"
    },
    {
      "prompt": "log9(log3 27)",
      "answer": "1"
    }
  ],
  "3.1.8": [
    {
      "prompt": "√ 75 × √ 27",
      "answer": "45"
    },
    {
      "prompt": "√ 75 × √ 48",
      "answer": "60"
    },
    {
      "prompt": "√ 44 × √ 99",
      "answer": "66"
    },
    {
      "prompt": "√ 39 × √ 156",
      "answer": "78"
    },
    {
      "prompt": "√ 27 × √ 48",
      "answer": "36"
    },
    {
      "prompt": "√98 × 8",
      "answer": "28"
    },
    {
      "prompt": "√44 × 11",
      "answer": "22"
    },
    {
      "prompt": "√96 × 24",
      "answer": "48"
    },
    {
      "prompt": "√72 × 18 =",
      "answer": "36"
    },
    {
      "prompt": "√ 45 ÷ √ 80",
      "answer": "3"
    },
    {
      "prompt": "√ 28 ÷ √ 63",
      "answer": "2"
    },
    {
      "prompt": "3√125 × 512",
      "answer": "40"
    }
  ],
  "3.1.9": [
    {
      "prompt": "(*) √ 15376",
      "answer": "(*) 117 − 131"
    },
    {
      "prompt": "3√ 830584",
      "answer": "94"
    },
    {
      "prompt": "(*) √ 23456",
      "answer": "(*) 145 − 161"
    },
    {
      "prompt": "(*) √ 32905",
      "answer": "(*) 172 − 191"
    },
    {
      "prompt": "(*) √ 6543210",
      "answer": "(*) 2430 − 2686"
    },
    {
      "prompt": "3√ 658503",
      "answer": "87"
    },
    {
      "prompt": "(*) √ 6213457",
      "answer": "(*) 2368 − 2618"
    },
    {
      "prompt": "(*) √ 173468",
      "answer": "(*) 395 − 438"
    },
    {
      "prompt": "(*) √ 6420135",
      "answer": "(*) 2407 − 2661"
    },
    {
      "prompt": "(*) √ 872143",
      "answer": "(*) 887 − 981"
    },
    {
      "prompt": "(*) √ 272727",
      "answer": "(*) 496 − 549"
    },
    {
      "prompt": "(*) √ 38527",
      "answer": "(*) 186 − 207"
    },
    {
      "prompt": "(*) √ 32323",
      "answer": "(*) 170 − 189"
    },
    {
      "prompt": "(*) √ 18220",
      "answer": "(*) 128 − 142"
    },
    {
      "prompt": "(*) √ 25252",
      "answer": "(*) 150 − 167"
    },
    {
      "prompt": "(*) √ 265278",
      "answer": "(*) 489 − 541"
    },
    {
      "prompt": "(*) √ 81818",
      "answer": "(*) 271 − 301"
    },
    {
      "prompt": "(*) √ 262626",
      "answer": "(*) 486 − 539"
    },
    {
      "prompt": "(*) √ 765432",
      "answer": "(*) 831 − 919"
    },
    {
      "prompt": "(*) √ 80808",
      "answer": "(*) 270 − 299"
    },
    {
      "prompt": "(*) √ 97531",
      "answer": "(*) 296 − 328"
    },
    {
      "prompt": "(*) √ 86420",
      "answer": "(*) 279 − 309"
    },
    {
      "prompt": "(*) √ 8844 × √ 6633",
      "answer": "(*) 7276 − 8043"
    },
    {
      "prompt": "(*) 3√ 217777 × √ 3777 × 57",
      "answer": "(*) 200220 − 221297"
    },
    {
      "prompt": "(*) 3√ 26789 × √ 911 × 31",
      "answer": "(*) 26596 − 29397"
    },
    {
      "prompt": "(*) 3√ 215346 × √ 3690 × 57",
      "answer": "(*) 197162 − 217917"
    },
    {
      "prompt": "(*) 3√2006 × 6002",
      "answer": "(*) 217 − 241"
    },
    {
      "prompt": "(*) 3√ 63489 × √ 1611 × 41",
      "answer": "(*) 62366 − 68932"
    },
    {
      "prompt": "(*) 4√ 14643 × 3√ 1329 × √ 120",
      "answer": "(*) 1258 − 1392"
    }
  ],
  "3.1.10": [
    {
      "prompt": "(4 − i)2 = a + bi, a",
      "answer": "15"
    },
    {
      "prompt": "(6 − 5i)(6 + 5i)",
      "answer": "61"
    },
    {
      "prompt": "The conjugate of (4 i − 6) is a + bi, a",
      "answer": "−6"
    },
    {
      "prompt": "(5 + i)2 = a + bi, a",
      "answer": "24"
    },
    {
      "prompt": "(9 − 3i)(3 + 9i) = a + bi, a",
      "answer": "54"
    },
    {
      "prompt": "(8 + 3i)(3 − 8i) = a + bi, a",
      "answer": "48"
    },
    {
      "prompt": "(2 + 3i) ÷ (2i) = a + bi, a",
      "answer": "3"
    },
    {
      "prompt": "(3 − 4i)(3 + 4i)",
      "answer": "25"
    },
    {
      "prompt": "(24 − 32i)(24 + 32i)",
      "answer": "1600"
    },
    {
      "prompt": "(5 + 12i)2 = a + bi, a + b",
      "answer": "1"
    },
    {
      "prompt": "(3 − 5i)(2 − 5i) = a + bi, a + b",
      "answer": "−44"
    },
    {
      "prompt": "(2 − 5i)(3 + 5i) = a + bi, a",
      "answer": "31"
    },
    {
      "prompt": "(2 − 5i)(3 − 4i) = a + bi, a − b",
      "answer": "9"
    },
    {
      "prompt": "(4 − 3i)(2 − i) = a + bi, a − b",
      "answer": "15"
    },
    {
      "prompt": "(2 + 7i)(2 − 7i) = a + bi, a − b",
      "answer": "53"
    },
    {
      "prompt": "(2 + 3i)(4 + 5i) = a + bi, a",
      "answer": "−7"
    },
    {
      "prompt": "(3 + 4i)2 = a + bi, a",
      "answer": "−7"
    },
    {
      "prompt": "The modulus of 14 + 48 i is:",
      "answer": "50"
    },
    {
      "prompt": "(2 − 5i)2 = a + bi, a + b",
      "answer": "−41"
    },
    {
      "prompt": "(5 + 4i)(3 + 2i) = a + bi, a",
      "answer": "7"
    },
    {
      "prompt": "(0 + 4i)2 = a + bi, b",
      "answer": "0"
    },
    {
      "prompt": "(4 + 5i)(4 − 5i)",
      "answer": "41"
    },
    {
      "prompt": "The modulus of (11 + 60 i)2 is:",
      "answer": "3721"
    },
    {
      "prompt": "(0 − 3i)5 = a + bi, b",
      "answer": "−243"
    },
    {
      "prompt": "(3 − 5i)(2 + i) = a + bi, a + b",
      "answer": "4"
    },
    {
      "prompt": "(4 − 2i)(3 − i) = a + bi, a + b",
      "answer": "0"
    },
    {
      "prompt": "(1 + i)9",
      "answer": "16 + 16i"
    },
    {
      "prompt": "(2 + 3i) ÷ (3 − 2i) = a + bi, b",
      "answer": "1"
    },
    {
      "prompt": "(2 − 3i) ÷ (3 − 2i) = a + bi, a",
      "answer": "12"
    },
    {
      "prompt": "(2i)6",
      "answer": "−64"
    },
    {
      "prompt": "(3 + 4i) ÷ (5i) = a + bi, a + b",
      "answer": "1"
    },
    {
      "prompt": "The modulus of (24 + 7 i)2 is:",
      "answer": "625"
    },
    {
      "prompt": "(3i − 2) ÷ (3i + 2) = a + bi, b",
      "answer": "12"
    },
    {
      "prompt": "The modulus of (5 + 12 i)2 is:",
      "answer": "169"
    }
  ],
  "3.1.11": [
    {
      "prompt": "f (x) = 3 x + 2, f −1(−2)",
      "answer": "− 4"
    },
    {
      "prompt": "f (x) = 4x 5 , f −1(2)",
      "answer": "2.5"
    },
    {
      "prompt": "f (x) = 2 − 3x, f −1(1)",
      "answer": "1"
    },
    {
      "prompt": "f (x) = x2 − 1 and x > 0, f −1(8)",
      "answer": "3"
    },
    {
      "prompt": "f (x) = 5 + 3 x, f −1(−2)",
      "answer": "− 7"
    },
    {
      "prompt": "f (x) = 4 − 3x, f −1(2)",
      "answer": "2"
    },
    {
      "prompt": "f (x) = 8 3 + x , f −1(2)",
      "answer": "1"
    },
    {
      "prompt": "f (x) = 3 − 2x 4 , f −1(−1)",
      "answer": "3 1"
    },
    {
      "prompt": "f (x) = x3 3 + 3, f −1(−6)",
      "answer": "−3"
    },
    {
      "prompt": "f (x) = 2 − 3x 4 , f −1(5)",
      "answer": "−4"
    },
    {
      "prompt": "f (x) = 2 x + 1, f −1(3)",
      "answer": "1"
    },
    {
      "prompt": "g(x) = 3 x + 2, g −1(−1)",
      "answer": "−1"
    },
    {
      "prompt": "h(x) = 2 x − 3, h −1(−1)",
      "answer": "1"
    },
    {
      "prompt": "f (x) = 2( x + 3), f −1(−4)",
      "answer": "−5"
    },
    {
      "prompt": "f (x) = 2 − 3x, f −1(4)",
      "answer": "− 2"
    },
    {
      "prompt": "h(x) = 5 x − 3, h −1(2)",
      "answer": "1"
    },
    {
      "prompt": "h(x) = 5 − 3x, h−1(−2)",
      "answer": "7"
    },
    {
      "prompt": "f (x) = 2 x + 2, f −1(−2)",
      "answer": "−2"
    },
    {
      "prompt": "f (x) = 3 x − 3, f −1(−3)",
      "answer": "0"
    },
    {
      "prompt": "f (x) = 4 − 4x, f −1(−4)",
      "answer": "2"
    },
    {
      "prompt": "f (x) = 3x − 1 x − 3 , f −1(1)",
      "answer": "−1"
    },
    {
      "prompt": "f (x) = 2x + 1 x − 2 , f −1(3)",
      "answer": "7"
    },
    {
      "prompt": "f (x) = 3x − 1 x − 3 , f −1(−1)",
      "answer": "1"
    },
    {
      "prompt": "f (x) = 1 − 3x x + 3 , f −1(−2)",
      "answer": "7"
    }
  ],
  "3.1.12": [
    {
      "prompt": "Find the next term of 48 , 32, 24, 20, 18,...:",
      "answer": "17"
    },
    {
      "prompt": "Find the next term of 1 , 4, 11, 26, 57,...:",
      "answer": "110"
    },
    {
      "prompt": "Find the next term of 1 , 8, 21, 40,...:",
      "answer": "65"
    },
    {
      "prompt": "Find the next term of 0 , 1, 5, 14, 30, 55,...:",
      "answer": "91"
    },
    {
      "prompt": "Find the next term of: 2, 9, 28, 65, 126,...:",
      "answer": "217"
    },
    {
      "prompt": "The next term of 1 , 2, 6, 24, 120,... is:",
      "answer": "720"
    },
    {
      "prompt": "The next term of 2 , 2, 4, 6, 10, 16,... is:",
      "answer": "26"
    },
    {
      "prompt": "Find the 9 th term of 1 , 2, 4, 8,...:",
      "answer": "256"
    },
    {
      "prompt": "Find the 10th term of: 2, 6, 12, 20, 30,...:",
      "answer": "110"
    },
    {
      "prompt": "Find the 100 th term of 2, 6, 10, 14, 18,...:",
      "answer": "398"
    },
    {
      "prompt": "The 10 th term of 2 , 5, 10, 17, 26... is:",
      "answer": "101"
    },
    {
      "prompt": "The next term of 1 , 4, 10, 19, 31,... is:",
      "answer": "46"
    },
    {
      "prompt": "The 8 th term of 2 , 9, 28, 65, 126,... is:",
      "answer": "513"
    },
    {
      "prompt": "The 8 th term of 0 , 7, 26, 63, 124,... is:",
      "answer": "511"
    },
    {
      "prompt": "The next term of 1 , 5, 6, 11, 17, 28,... is:",
      "answer": "45"
    },
    {
      "prompt": "Find the next term of.0324,.054,.09,.15,...:",
      "answer": ".25"
    }
  ],
  "3.1.13": [
    {
      "prompt": "The odds of drawing a king from a 52-card deck is:",
      "answer": "1"
    },
    {
      "prompt": "If 2 dice are tossed, what is the probability of getting a sum of 11:",
      "answer": "1"
    },
    {
      "prompt": "A bag has a 3 red, 6 white, and 9 blue marbles. What is the probability of drawing a red one:",
      "answer": "3"
    },
    {
      "prompt": "Three coins are tossed. Find the odds of getting 3 tails:",
      "answer": "1"
    },
    {
      "prompt": "The odds of losing are 4-to-9. The probability of winning is:",
      "answer": "9"
    },
    {
      "prompt": "The probability of winning is 5 9. The odds of losing is:",
      "answer": "4"
    },
    {
      "prompt": "The odds of losing is 7 13. The probability of winning is:",
      "answer": "13"
    },
    {
      "prompt": "If three dice are tossed once, what is the probability of getting three 5’s:",
      "answer": "1"
    },
    {
      "prompt": "If all of the letters in the words ”NUMBER SENSE” are put in a box, what are the odds of drawing an ’E’:",
      "answer": "3"
    },
    {
      "prompt": "The probability of success if 8 17. The odds of failure is:",
      "answer": "9"
    },
    {
      "prompt": "If all of the letters in the words ”ST A TE MEET” were put in a box, what is the probability of drawing an ’E’:",
      "answer": "1"
    },
    {
      "prompt": "A pair of dice is thrown, the odds that the sum is a multiple of 5 is:",
      "answer": "7"
    },
    {
      "prompt": "The probability of losing is 44 4 9 %. The odds of winning is:",
      "answer": "5"
    },
    {
      "prompt": "The odds of winning the game is 3 to 5. The probability of losing the game is:",
      "answer": "5"
    },
    {
      "prompt": "A number is drawn from {1, 2, 3, 6, 18}. The probability that the number drawn is not a prime number is:",
      "answer": "3"
    },
    {
      "prompt": "The odds of drawing a red 7 from a standard 52-card deck is:",
      "answer": "1"
    },
    {
      "prompt": "A number is randomly drawn from the set {1, 2, 3, 4, 5, 6, 7, 8, 9}. What are the odds that the number drawn is odd:",
      "answer": "5"
    },
    {
      "prompt": "A number is drawn from the set {1, 2, 3, 4, 5}. What is the probability that the number drawn is a factor of 6:",
      "answer": "3"
    },
    {
      "prompt": "The odds of randomly drawing a prime number from the set {1, 2, 3, 4, 5}is:",
      "answer": "3"
    },
    {
      "prompt": "When two dice are tossed, the probability that the sum of the faces will be 3 is:",
      "answer": "1"
    },
    {
      "prompt": "A pair of dice is thrown. The probability that their sum is 7 is:",
      "answer": "1"
    },
    {
      "prompt": "A pair of dice is thrown. The odds that their sum is 7 is:",
      "answer": "1"
    },
    {
      "prompt": "A pair of dice is thrown. The odds that the sum is 6 or 8 is:",
      "answer": "5"
    },
    {
      "prompt": "Two dice are tossed. What is the probability the sum is a multiple of 4:",
      "answer": "1"
    },
    {
      "prompt": "Two dice are tossed. What is the probability the sum is a multiple of 5:",
      "answer": "7"
    },
    {
      "prompt": "A die is rolled. What is the probability that a multiple of 2 is shown:",
      "answer": "1"
    },
    {
      "prompt": "A die is rolled. What is the probability that a composite number is rolled:",
      "answer": "1"
    },
    {
      "prompt": "A die is rolled. What is the probability that a factor of 12 is shown:",
      "answer": "5"
    },
    {
      "prompt": "The probability of losing is 4-to-7. What are the odds of winning:",
      "answer": "3"
    },
    {
      "prompt": "A pair of dice are rolled. What are the odds that the same number is shown:",
      "answer": "1"
    },
    {
      "prompt": "The odds of drawing an ace followed by a king from a standard 52-card deck with replacement is:",
      "answer": "1"
    }
  ],
  "3.1.14": [
    {
      "prompt": "Set B has 15 proper subsets. How many elements are in B:",
      "answer": "4"
    },
    {
      "prompt": "The number of subsets of {1, 3, 5, 7, 9}is:",
      "answer": "32"
    },
    {
      "prompt": "The number of elements in the power set of {M, A, T, H }is:",
      "answer": "16"
    },
    {
      "prompt": "If the power set for A contains 32 elements, then A contains how many elements:",
      "answer": "5"
    },
    {
      "prompt": "The number of distinct elements of [{t, w, o} ∪ {f, o, u, r}] ∩ {e, i, g, h, t}is:",
      "answer": "1"
    },
    {
      "prompt": "The number of distinct elements of {m, a, t, h} ∩ {e, m, a, t, i, c, s}is:",
      "answer": "3"
    },
    {
      "prompt": "The number of distinct elements of [{f, i, v, e} ∩ {s, i, x}] ∪ {t, e, n}is:",
      "answer": "4"
    },
    {
      "prompt": "If universal set U = {2, 3, 5, 7, 9, 11, 13, 17, 19} and A = {3, 7, 13, 17}, then A’ contains how many distinct elements:",
      "answer": "5"
    },
    {
      "prompt": "If the universal set U = {n, u, m, b, e, r, s} and set A = {s, u, m}then the complement of set A contains how many distinct elements:",
      "answer": "4"
    },
    {
      "prompt": "The universal set U = {n, u, m, b, e, r, s}, A ⊂ U and A = {e, u}, then the complement of A contains how many elements:",
      "answer": "5"
    },
    {
      "prompt": "The number of distinct elements in [{z, e, r, o} ∩ {o, n, e}] ∪ {t, w, o}is:",
      "answer": "4"
    },
    {
      "prompt": "The number of distinct elements in [{m, e, d, i, a, n} ∩ {m, e, a, n}] ∩ {m, o, d, e}is:",
      "answer": "2"
    },
    {
      "prompt": "The set {F, U, N}has how many subsets:",
      "answer": "8"
    },
    {
      "prompt": "The set {T, W, O}has how many proper subsets:",
      "answer": "7"
    },
    {
      "prompt": "Set A has 32 subsets. How many elements are in A:",
      "answer": "5"
    },
    {
      "prompt": "The set P has 63 proper subsets. How many elements are in P :",
      "answer": "6"
    },
    {
      "prompt": "Set A has 15 proper subsets. How many elements are in A:",
      "answer": "4"
    },
    {
      "prompt": "The set A has 8 distinct elements. How many proper subsets with at least one element does A have:",
      "answer": "254"
    },
    {
      "prompt": "Set A = {a, b, c, d}. How many proper subsets does set A have:",
      "answer": "15"
    },
    {
      "prompt": "The number of proper subsets of {M, A, T, H }is:",
      "answer": "15"
    },
    {
      "prompt": "Set A = {o, p, q, r, s} has how many improper subsets:",
      "answer": "1"
    }
  ],
  "3.2.1": [
    {
      "prompt": "2125 = 10",
      "answer": "57"
    },
    {
      "prompt": "108 = 4",
      "answer": "1230"
    },
    {
      "prompt": "20045 = 10",
      "answer": "254"
    },
    {
      "prompt": "34 + 3 = 9",
      "answer": "103"
    },
    {
      "prompt": "24 + 2 = 4",
      "answer": "102"
    },
    {
      "prompt": "82 = 5",
      "answer": "312"
    },
    {
      "prompt": "43 + 4 = 4",
      "answer": "1010"
    },
    {
      "prompt": "24 = 2",
      "answer": "11000"
    },
    {
      "prompt": "33 + 3 = 3",
      "answer": "1010"
    },
    {
      "prompt": "48 = 3",
      "answer": "1210"
    },
    {
      "prompt": "43 + 23 = 8",
      "answer": "110"
    },
    {
      "prompt": "24 + 1 = 8",
      "answer": "21"
    },
    {
      "prompt": "20010 = 7",
      "answer": "404"
    },
    {
      "prompt": "72 + 18 + 4 = 6",
      "answer": "234"
    },
    {
      "prompt": "23410 = 5",
      "answer": "1414"
    },
    {
      "prompt": "1234 = 10",
      "answer": "27"
    },
    {
      "prompt": "25 + 2 = 4",
      "answer": "202"
    },
    {
      "prompt": "43010 = 5",
      "answer": "3210"
    },
    {
      "prompt": "54010 = 6",
      "answer": "2300"
    },
    {
      "prompt": "243 + 27 + 3 = 9",
      "answer": "333"
    },
    {
      "prompt": "2005 = 10",
      "answer": "250"
    },
    {
      "prompt": "2006 = 10",
      "answer": "72"
    },
    {
      "prompt": "44 + 42 + 40 = 4",
      "answer": "10101"
    },
    {
      "prompt": "33 + 32 + 30 = 3",
      "answer": "1101"
    },
    {
      "prompt": "216 + 108 + 30 + 5 = 6",
      "answer": "1355"
    },
    {
      "prompt": "44b = 40, then b",
      "answer": "9"
    },
    {
      "prompt": "12310 = 5",
      "answer": "443"
    },
    {
      "prompt": "1234 = 5",
      "answer": "102"
    },
    {
      "prompt": "82 + 24 + 40 = 4",
      "answer": "1101"
    },
    {
      "prompt": "2345 = 4",
      "answer": "1011"
    },
    {
      "prompt": "686 + 98 + 14 = 7",
      "answer": "2220"
    },
    {
      "prompt": "7710 = 7",
      "answer": "140"
    },
    {
      "prompt": "43 + 4 = 8",
      "answer": "104"
    },
    {
      "prompt": "2345 = 10",
      "answer": "69"
    },
    {
      "prompt": "34 + 32 + 30 = 3",
      "answer": "10101"
    },
    {
      "prompt": "12310 = 4",
      "answer": "1323"
    },
    {
      "prompt": "125 + 75 + 15 + 1 = 5",
      "answer": "1331"
    },
    {
      "prompt": "23410 = 5",
      "answer": "1414"
    },
    {
      "prompt": "1728 + 288 + 36 + 4 = 12",
      "answer": "1234"
    },
    {
      "prompt": "128 + 48 + 12 + 2 = 4",
      "answer": "2332"
    },
    {
      "prompt": "Find b when 4 b6 = 29:",
      "answer": "5"
    },
    {
      "prompt": "456 = 9",
      "answer": "32"
    },
    {
      "prompt": "2104 = 6",
      "answer": "100"
    },
    {
      "prompt": "438 = 9",
      "answer": "38"
    },
    {
      "prompt": "345 = 7",
      "answer": "25"
    }
  ],
  "3.2.2": [
    {
      "prompt": "Change.325 to a base-10 fraction:",
      "answer": "17"
    },
    {
      "prompt": "Change.345 to a base-10 fraction:",
      "answer": "19"
    },
    {
      "prompt": "Change.1117 to a base- 10 fraction:",
      "answer": "57"
    },
    {
      "prompt": "Change.334 to a base-10 fraction:",
      "answer": "15"
    },
    {
      "prompt": "Change.2345 to a base- 10 fraction:",
      "answer": "69"
    },
    {
      "prompt": "Change.448 to a base-10 fraction:",
      "answer": "9"
    },
    {
      "prompt": "Change.336 to a base-10 fraction:",
      "answer": "7"
    },
    {
      "prompt": "Change.6612 to a base-10 fraction:",
      "answer": "13"
    },
    {
      "prompt": "Change.2025 to a base-10 fraction:",
      "answer": "52"
    },
    {
      "prompt": "Change.556 to a base-10 fraction:",
      "answer": "35"
    },
    {
      "prompt": "Change.4445 to a base- 10 fraction:",
      "answer": "124"
    },
    {
      "prompt": "Change.445 to a base-10 decimal:",
      "answer": "24"
    },
    {
      "prompt": "Change.145 to a base-10 decimal:",
      "answer": "9"
    },
    {
      "prompt": "Change 9 16 to a base-4 decimal:",
      "answer": ".21"
    },
    {
      "prompt": "Change 35 36 to a base-6 decimal:",
      "answer": ".55"
    },
    {
      "prompt": "Change 15 16 to a base-4 decimal:",
      "answer": ".33"
    },
    {
      "prompt": "Change 15 16 to a base-8 decimal:",
      "answer": ".74"
    },
    {
      "prompt": "Change 11 25 to a base-5 decimal:",
      "answer": ".21"
    },
    {
      "prompt": "Change 30 49 to a base-7 decimal:",
      "answer": ".42"
    }
  ],
  "3.2.3": [
    {
      "prompt": "1126 + 46 = 6",
      "answer": "120"
    },
    {
      "prompt": "536 × 46 = 6",
      "answer": "340"
    },
    {
      "prompt": "1012 − 112 = 2",
      "answer": "10"
    },
    {
      "prompt": "445 × 45 = 5",
      "answer": "341"
    },
    {
      "prompt": "269 ÷ 69 = 9",
      "answer": "4"
    },
    {
      "prompt": "378 + 568 = 8",
      "answer": "115"
    },
    {
      "prompt": "889 + 829 = 9",
      "answer": "181"
    },
    {
      "prompt": "1006 − 446 = 6",
      "answer": "12"
    },
    {
      "prompt": "1048 − 478 = 8",
      "answer": "35"
    },
    {
      "prompt": "1435 ÷ 45 = 5",
      "answer": "22"
    },
    {
      "prompt": "229 − 669 = 9",
      "answer": "−44"
    },
    {
      "prompt": "1357 × 47 = 7",
      "answer": "606"
    },
    {
      "prompt": "1324 − 334 = 4",
      "answer": "33"
    },
    {
      "prompt": "425 − 345 + 235 = 5",
      "answer": "31"
    },
    {
      "prompt": "1235 × 45 = 5",
      "answer": "1102"
    },
    {
      "prompt": "334 × 34 − 214 = 4",
      "answer": "210"
    },
    {
      "prompt": "227 × 47 = 7",
      "answer": "121"
    },
    {
      "prompt": "336 × 36 = 6",
      "answer": "201"
    },
    {
      "prompt": "226 + 336 + 446 = 6",
      "answer": "143"
    },
    {
      "prompt": "448 × 48 = 8",
      "answer": "220"
    },
    {
      "prompt": "326 ÷ 56 × 46 = 6",
      "answer": "24"
    },
    {
      "prompt": "247 ÷ 67 + 247 = 7",
      "answer": "30"
    },
    {
      "prompt": "236 + 456 − 506 = 6",
      "answer": "32"
    },
    {
      "prompt": "235 × 45 − 105 = 5",
      "answer": "142"
    },
    {
      "prompt": "1234 ÷ 34 = 4",
      "answer": "21"
    },
    {
      "prompt": "4315 ÷ 45 = 5",
      "answer": "34"
    },
    {
      "prompt": "2223 × 23 = 3",
      "answer": "1221"
    },
    {
      "prompt": "(215 − 125) × 115 = 5",
      "answer": "44"
    },
    {
      "prompt": "(334 + 224) × 114 = 4",
      "answer": "1331"
    },
    {
      "prompt": "2356 ÷ 56 = 6",
      "answer": "31"
    },
    {
      "prompt": "5437 ÷ 67 = 7",
      "answer": "64"
    },
    {
      "prompt": "2345 + 4325 = 5",
      "answer": "1221"
    },
    {
      "prompt": "334 × 24 − 114 = 4",
      "answer": "121"
    },
    {
      "prompt": "445 × 25 + 335 = 5",
      "answer": "231"
    },
    {
      "prompt": "(135 + 125) × 115 = 5",
      "answer": "330"
    },
    {
      "prompt": "114 × 214 − 34 = 4",
      "answer": "222"
    },
    {
      "prompt": "125 + 235 + 345 = 5",
      "answer": "124"
    },
    {
      "prompt": "(224 + 334) × 114 = 4",
      "answer": "1331"
    }
  ],
  "3.2.4": [
    {
      "prompt": "469 = 3",
      "answer": "1120"
    },
    {
      "prompt": "489 = 3",
      "answer": "1122"
    },
    {
      "prompt": "10110112 = 8",
      "answer": "133"
    },
    {
      "prompt": "1234 = 2",
      "answer": "11011"
    },
    {
      "prompt": "21223 = 9",
      "answer": "78"
    },
    {
      "prompt": "3458 2",
      "answer": "11100101"
    },
    {
      "prompt": "1234 = 2",
      "answer": "11011"
    },
    {
      "prompt": "1010112 = 4",
      "answer": "223"
    },
    {
      "prompt": "2314 = 2",
      "answer": "101101"
    },
    {
      "prompt": "4328 = 2",
      "answer": "100011010"
    },
    {
      "prompt": "3124 = 2",
      "answer": "110110"
    },
    {
      "prompt": "11112 = 4",
      "answer": "33"
    },
    {
      "prompt": "10112 = 4",
      "answer": "23"
    },
    {
      "prompt": "1234 = 2",
      "answer": "11011"
    },
    {
      "prompt": "110112 = 4",
      "answer": "123"
    }
  ],
  "3.2.6": [
    {
      "prompt": ".555...7 = 10",
      "answer": "1224"
    },
    {
      "prompt": "The remainder when 123456 7 is divided by 6 is:",
      "answer": "630.9"
    },
    {
      "prompt": ".666...8 = 10",
      "answer": "1"
    },
    {
      "prompt": ".777...9 = 10",
      "answer": "2"
    },
    {
      "prompt": ".111...5 = 10",
      "answer": "2"
    }
  ],
  "3.3.2": [
    {
      "prompt": ".272727...",
      "answer": "3"
    },
    {
      "prompt": ".414141...",
      "answer": "41"
    },
    {
      "prompt": ".212121...",
      "answer": "7"
    },
    {
      "prompt": ".818181...",
      "answer": "9"
    },
    {
      "prompt": ".363636...",
      "answer": "4"
    },
    {
      "prompt": ".020202...",
      "answer": "2"
    },
    {
      "prompt": ".727272...",
      "answer": "8"
    },
    {
      "prompt": ".151515...",
      "answer": "5"
    },
    {
      "prompt": ".308308...",
      "answer": "308"
    },
    {
      "prompt": ".231231...",
      "answer": "77"
    },
    {
      "prompt": ".303303...",
      "answer": "101"
    },
    {
      "prompt": ".099099099...",
      "answer": "11"
    }
  ],
  "3.3.3": [
    {
      "prompt": ".23333...",
      "answer": "7"
    },
    {
      "prompt": ".32222...",
      "answer": "29"
    },
    {
      "prompt": ".21111...",
      "answer": "19"
    },
    {
      "prompt": ".32222...",
      "answer": "29"
    },
    {
      "prompt": ".01222...",
      "answer": "11"
    }
  ],
  "3.3.4": [
    {
      "prompt": ".2131313...",
      "answer": "211"
    },
    {
      "prompt": ".1232323...",
      "answer": "61"
    },
    {
      "prompt": ".2313131...",
      "answer": "229"
    },
    {
      "prompt": ".3050505...",
      "answer": "151"
    },
    {
      "prompt": ".2050505...",
      "answer": "203"
    },
    {
      "prompt": ".3141414...",
      "answer": "311"
    },
    {
      "prompt": ".2717171...",
      "answer": "269"
    },
    {
      "prompt": ".2353535...",
      "answer": "233"
    },
    {
      "prompt": ".0474747...",
      "answer": "47"
    },
    {
      "prompt": ".2141414...",
      "answer": "106"
    },
    {
      "prompt": ".1232323...",
      "answer": "61"
    }
  ],
  "3.4": [
    {
      "prompt": "x + 6 ∼= 9(mod 7) , 0 ≤ x ≤ 6 x",
      "answer": "3"
    },
    {
      "prompt": "47 ÷ 7 has a remainder of:",
      "answer": "4"
    },
    {
      "prompt": "25 × 35 ÷ 5 has a remainder of:",
      "answer": "1"
    },
    {
      "prompt": "26 × 34 ÷ 5 has a remainder of:",
      "answer": "4"
    },
    {
      "prompt": "87 ÷ 6 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "If N is a positive integer and 4N ÷ 5 has a remainder of 2 then N ÷ 5 has a remainder of:",
      "answer": "3"
    },
    {
      "prompt": "x + 3 ∼= 9(mod 5) , 0 ≤ x ≤ 4 x",
      "answer": "1"
    },
    {
      "prompt": "x + 4 ∼= 1(mod 8) , 0 ≤ x ≤ 7 x",
      "answer": "5"
    },
    {
      "prompt": "38 ÷ 7 has a remainder of:",
      "answer": "2"
    },
    {
      "prompt": "3x ∼= 17(mod 5) , 0 ≤ x ≤ 5 x",
      "answer": "4"
    },
    {
      "prompt": "3x − 2 ∼= 4(mod 7) , 0 ≤ x ≤ 7 x",
      "answer": "2"
    },
    {
      "prompt": "68 ÷ 7 has a remainder of:",
      "answer": "1"
    },
    {
      "prompt": "37 ÷ 7 has a remainder of:",
      "answer": "3"
    },
    {
      "prompt": "54 ÷ 11 has a remainder of:",
      "answer": "9"
    }
  ],
  "3.5.1": [
    {
      "prompt": "1 · 1! + 2 · 2! + 3 · 3! + 4 · 4! + 5 · 5!",
      "answer": "719"
    },
    {
      "prompt": "1 · 1! + 2 · 2! + · · · + 6 · 6!",
      "answer": "5039"
    },
    {
      "prompt": "1 · 1! + 2 · 2! + · · · + 7 · 7!",
      "answer": "40319"
    },
    {
      "prompt": "1 · 1! − 2 · 2! − 3 · 3! − 4 · 4!",
      "answer": "−20"
    },
    {
      "prompt": "2 · 1! + 3 · 2! + 4 · 3! + 5 · 4!",
      "answer": "152"
    }
  ],
  "3.5.2": [
    {
      "prompt": "8! + 6! 7!",
      "answer": "8 1"
    },
    {
      "prompt": "10! + 8! 9!",
      "answer": "10 1"
    },
    {
      "prompt": "7! − 5! 6!",
      "answer": "6 5"
    },
    {
      "prompt": "11! − 9! 10!",
      "answer": "10 9"
    },
    {
      "prompt": "10! − 11! 9!",
      "answer": "−100"
    },
    {
      "prompt": "6 · 5 · 4! − 5!",
      "answer": "600"
    },
    {
      "prompt": "(2! + 3!) ÷ 5!",
      "answer": "1"
    },
    {
      "prompt": "(2! × 3!) − 4!",
      "answer": "−12"
    },
    {
      "prompt": "7! ÷ 6! − 5!",
      "answer": "−113"
    },
    {
      "prompt": "7 × 5! − 6!",
      "answer": "120"
    },
    {
      "prompt": "2! − 3! × 5!",
      "answer": "−718"
    },
    {
      "prompt": "8! ÷ 6! − 4!",
      "answer": "32"
    },
    {
      "prompt": "5! · 4! 6!",
      "answer": "4"
    },
    {
      "prompt": "4 × 5! − 5 × 4! 4!",
      "answer": "15"
    },
    {
      "prompt": "4 × 5! + 5 × 4! 4!",
      "answer": "5"
    },
    {
      "prompt": "6 × 7! − 7 × 6! 6!",
      "answer": "35"
    },
    {
      "prompt": "10 × 9! − 10! × 9 9!",
      "answer": "−80"
    },
    {
      "prompt": "8! × 7 − 8 × 7! 7!",
      "answer": "48"
    },
    {
      "prompt": "11 × 10! − 11! × 10 11!",
      "answer": "−9"
    },
    {
      "prompt": "6! ÷ (3! × 2!)",
      "answer": "60"
    }
  ],
  "3.5.3": [
    {
      "prompt": "(4!)(3!)(2!) ∼= x(mod 8) , 0 ≤ x ≤ 7. x",
      "answer": "0"
    },
    {
      "prompt": "(4 + 2)! ∼= x(mod 7) , 0 ≤ x ≤ 6. x",
      "answer": "6"
    },
    {
      "prompt": "(5 − 2)! ∼= x(mod 5) , 0 ≤ x ≤ 5. x",
      "answer": "1"
    },
    {
      "prompt": "5! · 3! 4! ∼= k(mod 8) , 0 ≤ k ≤ 7. k",
      "answer": "6"
    },
    {
      "prompt": "5! · 4! 3! ∼= k(mod 9) , 0 ≤ k ≤ 8. k = 6. 5! · 3! ∼= k(mod 8), 0 ≤ k ≤ 7. k",
      "answer": "3"
    }
  ],
  "3.6.1": [
    {
      "prompt": "lim x→∞ 3x + 8 7x − 4 = 2. lim x→4 2x − 6",
      "answer": "3"
    },
    {
      "prompt": "lim x→2 x2 − 4 x − 2",
      "answer": "4"
    },
    {
      "prompt": "lim x→2 x3 − 8 x2 − 4",
      "answer": "3"
    },
    {
      "prompt": "lim x→∞ 3x − 1 x",
      "answer": "4"
    },
    {
      "prompt": "lim x→3 x3 − 27 x − 3",
      "answer": "27"
    },
    {
      "prompt": "lim x→0 x2 − 3x x",
      "answer": "0"
    },
    {
      "prompt": "lim x→3 x3 − 27 x2 − 9",
      "answer": "9"
    }
  ],
  "3.6.2": [
    {
      "prompt": "f (x) = 3 x2 + x − 5, f ′(−2)",
      "answer": "−11"
    },
    {
      "prompt": "f (x) = x2 − 2x + 22, f ′(2)",
      "answer": "2"
    },
    {
      "prompt": "f (x) = x33 − 3x + 3, f ′′(2)",
      "answer": "12"
    },
    {
      "prompt": "g(x) = 2 x2 − 3x + 1, g ′(2)",
      "answer": "5"
    },
    {
      "prompt": "f (x) = 3 x3 − 3x + 3, f ′(−3)",
      "answer": "78"
    },
    {
      "prompt": "f (x) = 4 x3 + 2x2, f ′′(−.5)",
      "answer": "−8"
    },
    {
      "prompt": "f (x) = x3 − 3x + 3, f ′(3)",
      "answer": "24"
    },
    {
      "prompt": "f (x) = x4 − 4x + 4, f ′(4)",
      "answer": "60"
    },
    {
      "prompt": "f (x) = 3 x2 + 4x − 5, f ′(−6)",
      "answer": "−32"
    },
    {
      "prompt": "f (x) = 2 x3 − 3x4, f ′′(−1)",
      "answer": "−52"
    },
    {
      "prompt": "f (x) = 4 x3 − 3x2 + 1, f ′(−1)",
      "answer": "18"
    },
    {
      "prompt": "f (x) = x2 − 3x + 4, f ′′(−1)",
      "answer": "2"
    },
    {
      "prompt": "f (x) = 3 x + 5x2 − 7x4, f ′(1)",
      "answer": "−15"
    },
    {
      "prompt": "f (x) = 3 x3 − 2x2 + x, f ′′(1)",
      "answer": "14"
    },
    {
      "prompt": "f (x) = 2 x3 − 4x2 + 6x, f ′(1)",
      "answer": "4"
    },
    {
      "prompt": "f (x) = x5 + x3 − x, f ′′(2)",
      "answer": "172"
    },
    {
      "prompt": "f (x) = 4 x3 − 3x2 + x, f ′(−1)",
      "answer": "19"
    },
    {
      "prompt": "f (x) = x3 − 3x2 + 5x, f ′′(2)",
      "answer": "6"
    },
    {
      "prompt": "f (x) = 4x3 − 3x2 + 2x, f ′′(1)",
      "answer": "18"
    },
    {
      "prompt": "f (x) = 2 x2 − 3x + 4, f ′(−1)",
      "answer": "−7"
    },
    {
      "prompt": "f (x) = 4 − 3x − 2x2, f ′(−1)",
      "answer": "1"
    },
    {
      "prompt": "g(x) = x3 − 3x − 3, g ′(−3)",
      "answer": "24"
    },
    {
      "prompt": "g(x) = 2 x3 + 3x2 + 5, g ′′(4)",
      "answer": "54"
    },
    {
      "prompt": "h(x) = 1 + 2 x2 − 3x3, h ′′(4)",
      "answer": "−68"
    },
    {
      "prompt": "f (x) = 4 − 3x2 + 2x3, f ′′(5)",
      "answer": "54"
    },
    {
      "prompt": "f (x) = x3 − 3x + 3, f ′(−3)",
      "answer": "24"
    },
    {
      "prompt": "f (x) = x4 − 4x2 + 4, f ′(−4)",
      "answer": "−224"
    },
    {
      "prompt": "f (x) = 3 x3 + 3x − 3, f ′(−3)",
      "answer": "84"
    },
    {
      "prompt": "f (x) = 3 x2 − 4x + 2, f ′( 1 3 )",
      "answer": "−2"
    }
  ],
  "3.6.3": [
    {
      "prompt": "∫ 2 x2 + 3 dx",
      "answer": "8 2"
    },
    {
      "prompt": "∫ 4 2x − 3 dx",
      "answer": "6"
    },
    {
      "prompt": "∫ 4 2x dx",
      "answer": "15"
    },
    {
      "prompt": "∫ 3 −3 x2 dx",
      "answer": "18"
    },
    {
      "prompt": "∫ 4 x 2 dx",
      "answer": "4"
    },
    {
      "prompt": "∫ 1 x 4 dx",
      "answer": "4"
    },
    {
      "prompt": "∫ 3 (x2 − 2) dx",
      "answer": "4 2"
    },
    {
      "prompt": "∫ 4 −2 x + 1 dx",
      "answer": "12"
    },
    {
      "prompt": "∫ π sin x dx",
      "answer": "2"
    },
    {
      "prompt": "∫ π cos x dx",
      "answer": "0"
    },
    {
      "prompt": "∫ 3 x 3 dx",
      "answer": "3"
    },
    {
      "prompt": "∫ 3 x2 dx",
      "answer": "8 2"
    },
    {
      "prompt": "∫ 3 3x 2 dx",
      "answer": "6"
    },
    {
      "prompt": "∫ 3 x−2 dx",
      "answer": "2"
    },
    {
      "prompt": "∫ 3 x−2 dx",
      "answer": "1"
    },
    {
      "prompt": "∫ 1 1 − x2 dx",
      "answer": "2"
    },
    {
      "prompt": "∫ 4 √x dx",
      "answer": "5 1"
    },
    {
      "prompt": "∫ 2 −1 4x dx",
      "answer": "6"
    },
    {
      "prompt": "∫ 3 x2 dx",
      "answer": "9"
    },
    {
      "prompt": "∫ e x dx",
      "answer": "2"
    },
    {
      "prompt": "∫ 4 x − 1 dx",
      "answer": "4"
    },
    {
      "prompt": "∫ 2 x3 dx",
      "answer": "4"
    },
    {
      "prompt": "∫ e −3 x dx",
      "answer": "−3"
    },
    {
      "prompt": "∫ 3 2x + 1 dx",
      "answer": "12"
    },
    {
      "prompt": "∫ 1 x 3 dx",
      "answer": "3"
    },
    {
      "prompt": "∫ 14 13 − x dx",
      "answer": "84"
    },
    {
      "prompt": "∫ 1 −1 x + 1 dx",
      "answer": "2"
    },
    {
      "prompt": "∫ 1 √x dx",
      "answer": "2"
    },
    {
      "prompt": "∫ 1 3√x dx",
      "answer": "3"
    },
    {
      "prompt": "∫ 2 −1 3x2 dx",
      "answer": "9"
    },
    {
      "prompt": "∫ 4 5 x dx",
      "answer": "18"
    },
    {
      "prompt": "∫ 2 x3 dx",
      "answer": "3 3"
    },
    {
      "prompt": "∫ 2 x3 dx",
      "answer": "4"
    },
    {
      "prompt": "∫ 2 x3 + 1 dx",
      "answer": "6"
    },
    {
      "prompt": "∫ 2 x dx",
      "answer": "2"
    },
    {
      "prompt": "∫ 2 −1 2x dx",
      "answer": "3"
    },
    {
      "prompt": "∫ 4 3 − x dx",
      "answer": "4"
    },
    {
      "prompt": "∫ 2 3x 4 dx",
      "answer": "1 1"
    },
    {
      "prompt": "∫ 3 4x 3 dx = 4 Additional Problems The following are assortment of problems which don’t occur frequently enough to warrant a section in this book:",
      "answer": "6"
    }
  ],
};

const standaloneExerciseNotes = {
  "3.1.2": "This subsection appears in the PDF table of contents, but the PDF does not include a standalone Problem Set 3.1.2. Related practice continues in Problem Set 3.1.3.",
  "3.2.5": "This subsection appears in the PDF table of contents, but the PDF does not include a standalone Problem Set 3.2.5. Related practice continues in Problem Set 3.2.6.",
  "3.3.1": "This subsection appears in the PDF table of contents, but the PDF does not include a standalone Problem Set 3.3.1. Repeating-decimal practice starts in Problem Set 3.3.2.",
};

const relatedExerciseSets = {
  "3.1.2": "3.1.3",
  "3.2.5": "3.2.6",
  "3.3.1": "3.3.2",
};

const sectionExamples = {
  "1.1": "PDF technique example:\n74 × 23\nUnits: 3 × 4 = 12\nTens: 3 × 7 + 2 × 4 + 1 = 30\nHundreds: 2 × 7 + 3 = 17\nAnswer: 1702\n\nThe bold digits in the PDF form the answer, and the italicized digits represent carries.",
  "1.2.1": "PDF technique example: Here is an example: 523 × 11 = Ones: 1 × 3 = 3 Tens: 1 × 2 + 1 × 3 = 5 Hundreds: 1 × 5 + 1 × 2 = 7 Thousands: 1 × 5 = 5 Answer: 5753 As one can see, the result can be obtained by subsequently adding the digits along the number you’re multiplying. Be sure to keep track of the carries as well: 6798 × 11 = Ones: 8 Tens: 9 + 8 = 1 7 Hundreds: 7 + 9 + 1 = 1 7 Thousands: 6 + 7 + 1 = 1^4 Ten...",
  "1.2.2": "PDF technique example: Let’s look at an example: 438 × 101 = Ones: 1 × 8 8 Tens: 1 × 3^3 Hundreds: 1 × 4 + 1 × 8 1^2 Thousands: 1 × 3 + 1^4 Tens Thousands: 1 × 4^4 Answer: 44238 So you see, immediately you can write down the ones/tens digits (they are the same as what you are multiplying 101 with)",
  "1.2.3": "PDF technique example: Here are a couple of examples: 84 × 25 = 84/4 × 100 = 21 × 100 = 2100 166 × 25 = 166^4 × 100 = 41.5 × 100 = 4150 In a similar manner, you can use the same principle to divide numbers by 25 easily. The difference is you multiply by 4 and then move the decimal over to the left two places 415 25 = 415 100^4 = 415 × 4/100 = 1660 100 = 16.6",
  "1.2.4": "PDF technique example: 76 × 75 = 76 · 3/4 · 100 = 19 × 3 × 100 = 5700 42 × 75 = 42 · 3/4 · 100 = 10",
  "1.2.5": "PDF technique example: For example you might use 2/3 · 1000 for any value from 654 − 678. Usually you can tell for the approximation problems what fraction the test writer is really going for. Before doing the problem set, it is recommended to at least familiarize yourself with the fractions in Section 2.1.4.",
  "1.2.6": "PDF technique example: Let’s look at an example to show the technique: 15 × 78 = 2/2 × 15 × 78 = 15 · 2 × 78/2 = 30 × 39 = 1170 So the procedure is you double one of the numbers and half the other one, then multiply",
  "1.2.7": "PDF technique example: For example, when we are multiplying two numbers over 100 (say 104 × 103) the first two digits would be 4 × 3 = 12, how- ever if we were doing two numbers over 1000 (like 100^2 × 1007) the first three digits would be 2 × 7 = 014 not 14 like what you would be used to putting. Let’s look at the example presented above and the procedure: 100^2 × 1007 = Hundreds/Tens/Ones: 2 × 7 014 Rest of...",
  "1.2.8": "PDF technique example: Here are a couple of examples: 85^2 = Tens/Ones: 25 Thousand/Hundreds: 8 × (8 + 1) 72 Answer: 7225 The next example shows how to compute 15^4 by applying the square ending in 5 trick twice, one time to get what 15^2 is then the other to get that result squared. 15^2 = Tens/Ones: 25 Thousands/Hundreds: 1 × (1 + 1) = 2 Answer: 225 225^2 = Tens/Ones: 25 Rest of Answer: 22 × (23) = 11 × 46...",
  "1.2.9": "PDF technique example: Let’s illustrate with a couple of examples: 46^2 = Tens/Ones: (50 − 46)2 = 4^2 16 Rest of Answer: 25 − 4 21 Answer: 2116 57^2 = Tens/Ones: (57 − 50)2 = 7^2 49 Rest of Answer: 25 + 7 32 Answer: 3249 61^2 = Tens/Ones: (61 − 50)2 = 11^2 1 21 Rest of Answer: 25 + 11 + 1 37 Answer: 3721",
  "1.2.10": "PDF technique example: To illustrate this concept, let’s look at an example of this type of problem: 83 × 87. Notice that both 83 and/87 are 2 away from 85. So: 83 × 87 = (85 − 2) × (85 + 2) Notice this is just the difference of two squares: (85 − 2) × (85 + 2) = 85^2 − 22 = 7225 − 4 = 7221 So the procedure is: 1. Find the middle number between the two numbers being multiplied and square it. 2. Subtract from...",
  "1.2.11": "PDF technique example: ab × ba = (10a + b) × (10b + a) = 100(a · b) + 10(a2 + b2) + a · b Here is what we know from the above result: 1",
  "1.3.1": "PDF technique example: for example this problem: 431^2 = 431 × 431 Ones/Tens: 31 × 31 9 61 Hundreds/Thousands: 31 × 4 + 4 × 31 + 9 = 2 × 4 × 31 + 9^2 57 Rest of Answer: 4 × 4 + 2 18 Answer: 185761 If you didn’t have 31^2 memorized, you would have to calculate it in order to do the first step in the process (very time consuming). However, if you have it memorized you would not have to do the extra steps, thus...",
  "1.3.2": "PDF technique example: For example, the above problem would require two, two-digit multiplication and then their addition. Whereas when you factor out the 11 you are left with a simple addition and a multiplication using the 11’s trick. Another thing is that factoring usually requires the knowledge of another trick. For instance, the first problem required the knowledge of a square (21^2) while the second...",
  "1.3.3": "PDF technique example: For example: 35^2 + 36^2 = 35^2 + (35 + 1) 2 = 2 · 35^2 + 2 · 35 + 12 = 2 · 1225 + 70 + 1 = 2521 This is a brute force technique, however, it is a lot better than squaring both of the numbers then adding them together (which you can get lost very easily doing that). Here are some more practice problems to familiarize yourself with this procedure.",
  "1.3.4": "PDF technique example: For example: 19^2 + (10^2 − 92) = (10 + 9) 2 + (10^2 − 92) = 2 · 10^2 + 2 · 10 · 9 + 92 − 92 = 200 + 180 = 380 28 The following are some more problems to give you practice with this technique:",
  "1.3.5": "PDF technique example: For example, if you see a problem like: 34^2 + 64^2, it looks like a diﬃcult problem where this particular trick won’t apply. However, if you switch the order of the two numbers you get 34^2 + 64^2 = 64^2 + 34^2 = (6^2 + 42) × 101 = 525^2. Generally this trick is on the third column, and it is relatively simple to notice when to apply it because if you were having to square the two...",
  "1.3.6": "PDF technique example: For example: 54^2 − 55^2 = (54 − 55)(54 + 55) = −109 This is a pretty basic trick and is easily recognizable on the test. The following are some more practice to give you a better feel of the problems: Problems Set 1.3.6/1. 73^2 − 72^2 = 2. 36^2 − 34^2 = 3. 57^2 − 58^2 = 4. 67^2 − 66^2 = 5. 69^2 − 67^2 = 6. 54^2 − 55^2 = 7. 67^2 − 65^2 = 8. 88^2 − 87^2 = 9. 48^2 − 49^2 = 10. 97^2 − 96^2...",
  "1.3.7": "PDF technique example: Let’s look at its derivation, let n1 = a5 = 10a + 5 and n2 = b5 = 10 b + 5 then: n1 × n2 = (10a + 5) · (10b + 5) = 100(ab) + 50(a + b) + 25 = 100(ab + a + b/2 ) + 25 So what does this mean: 1",
  "1.3.8": "PDF technique example:\n8 1/8 × 24 1/8\n= (8 + 1/8) × (24 + 1/8)\n= 8 · 24 + (8 + 24) · 1/8 + 1/8 · 1/8\n= 196 1/64\n\nAnother PDF example:\n9 1/3 × 9 2/3\n= 9(9 + 1) + 2/9\n= 90 2/9",
  "1.3.9": "PDF technique example:\n11 × 11/13\n= 11 + (11 − 13) + (11 − 13)^2/13\n= 11 − 2 + 4/13\n= 9 4/13\n\nIt also works for multiplying by fractions larger than 1:\n13 × 13/12\n= 13 + (13 − 12) + (13 − 12)^2/12\n= 13 + 1 + 1/12\n= 14 1/12",
  "1.3.10": "PDF technique example: of T ricks The following is a practice set of combinations of some of the multiplication tricks already mentioned in the book. Most are approximations which occur on the third or fourth columns of the test.",
  "1.4.1": "PDF technique example: what remainder- 987654 ÷ 8 has what remainder- Look at last two digits: 56 ÷ 4 = r0 Look at last three digits: 654 ÷ 8 = r6",
  "1.4.2": "PDF technique example: For example, if we were trying to see the remainder of 366699995 when dividing by 3, rather than summing up all the digits (which would be a hassle) and then seeing the remainder when that is divided by 3, you can look at each digit and figure out what it’s remainder is when dividing by 3 then summing those. So for our example: 366699995 ∼= (0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 2) ∼= 2(mod...",
  "1.4.3": "PDF technique example: to illustrate the trick: 38 13542 ÷ 11 has what remainder- Sum of the Alternating Digits: (2 + 5 + 1) = 8 Sum of the Remaining Digits: (4 + 3) = 7 Remainder: 8 − 7 = 1 Sometimes adding then subtracting “down the digits” will be easier than finding two explicit sums then subtracting. For example, if we were finding the remainder of 3456789 ÷ 11, instead of doing (9 + 7 + 5 + 3)− (8 + 6 +...",
  "1.4.4": "PDF technique example: for example 1225 ÷ 6 = r1 from obvious division), however, when this seems tedious, you can use a combination of the two of the tricks mentioned above (depending on the factors of the number you are dividing). Let’s look at an example: 556677 ÷ 6 has what remainder- Dividing by 2: r1 Dividing by 3: (5 + 5 + 6 + 6 + 7 + 7) = 36 ÷ 3 r0 So now the task is to find an appropriate remainder...",
  "1.4.5": "PDF technique example: For example, if we were trying to see the remainder of 13 8 ÷ 14, the long way of doing it would be noticing that 13^2 = 169 ÷ 14 = r1 ⇒ 14 ÷ 14 = r1 or you could use this concept of negative remainders (or an example of congruencies if you are familiar with that term) to say that 13 8 ÷ 14 ⇒ (−1)8 ÷ 14 = r1. The following are some practice problems to solidify using the “algebra of...",
  "1.4.6": "PDF technique example: The details of the proof is omitted, only the result is shown: abcd ÷ 9 = Fractional Part: a + b + c + d/9 Ones: a + b + c Tens: a + b Hundreds: a I think the gist of the trick is self explanatory, let’s look at a simple example: 3211 ÷ 9 = Fractional Part: 3 + 2 + 1 + 1 9/7/9 Ones: 3 + 2 + 1 6 Tens: 3 + 2 5 Hundreds: 3^3 Answer: 356 7/9 Here is a litt",
  "1.4.7": "PDF technique example: So for a/40 I treat it as: a/40 = a/40 × 1^4/1/4 = a/4/10 So the technique is to divide the numerator by 4 then shift the decimal point over",
  "1.5.1": "PDF technique example: for example 700^2 − 2007 the method works but 701^2 − 2107 it doesn ’twork). 2. Then subtract from that result the difference between the digits. Let’s look at an example: 81^2 − 218 = Step 1: (8 − 2) × 100 600 Step 2: 600 − 6 594 Answer: 594 It also works for when the subtraction is a negative number, but you need to be careful: 105 − 501 = Step 1: (1 − 5) × 100 −400 Step 2: −400 − (1...",
  "1.5.2": "PDF technique example: to illustrate the same point: 2 5/6 − 4^2/3 = −(4^2/3 − 2 5/6 ) = −(4^4/6 − 2 5/6 ) = −(1 5/6 ) Problems Set 1.5.2/1. 2^2/3 − 3 5/6 = 2. 4^2/3 − 6^3/5 = 3. 1 5/9 − 3 5/9 = 4. 2^3/4 − 4^3/5 = 5. 1^3/7 − 3 = 6. 2^3/8 − 3 1/4 = 7. 2^3/4 − 6 7/8 = 8. 3^4/5 − 8 9/10 = 9. 3^4/9 − 5 1/3 = 10. 5 6/7 − 12 13/14 = 45/11. 3 1/6 − 6 1/3 = 12. 2 5/6 − 4^2/3 = 13. 4 7/8 − 12 23/24 = 14. 4 5/6 − 10...",
  "1.5.3": "PDF technique example: to illustrate this trick is by example: 1/6 + 1/12 + 1/20 + 1/30 = 1/2 · 3 + 1/3 · 4 + 1/4 · 5 + 1/5 · 6 = 1 + 1 + 1 + 1/2 · 6 = 4/12 = 1/3 So the strategy when you see a series in the form of a b·(b+1) + a (b+1)·(b+2) + · · · is to add up all the numerators and then divide it by the smallest factor in the denominators multiplied by the largest factor in the denominators. Let’s look at...",
  "1.5.4": "PDF technique example: Here is an example: 5/7 + 7/5 = 2 + (7 − 5)2/7 · 5 = 2^4/35 There are some variations to this trick. For example: 11/13 + 2/11 = 11/13 + 13/11 − 11/11 = 2 + 22/143 − 1 = 1^4/143 This is a popular variation that is used especially on the last column of the test because the trick is there but not as obvious. The following are some practice problems to help you master this trick: Problems...",
  "1.5.5": "PDF technique example: Here is an example: 6/7 − 29/36 = 6 + 7/7 · 36 = 13/25^2 Like I said it is easy to notice when to do this problem because, if you didn’t know the formula, it would be relatively diﬃcult to solve swiftly. There is one variation to the formula which is: a b − na + 1 nb − 1 = −(a + b) b · (nb − 1) When approached with these problems, it is best to take stock of which type it is. The...",
  "2.1.1": "PDF technique example: The following table should aid in memorization: 11^2 = 121 12^2 = 144 13^2 = 169 14^2 = 196 15^2 = 225 16^2 = 256 17^2 = 289 18^2 = 324 19^2 = 361 20^2 = 400 21^2 = 441 22^2 = 484 23^2 = 529 24^2 = 576 25^2 = 625 26^2 = 676 27^2 = 729 28^2 = 784 29^2 = 841 30^2 = 900 31^2 = 961 32^2 = 1024 33^2 = 1089 34^2 = 1156 35^2 = 1225 36^2 = 1296 37^2 = 1369 38^2 =",
  "2.1.2": "PDF technique example: The following cubes should be memorized: 53 = 125 6^3 = 216 7^3 = 343 8^3 = 51^2 93 = 729 10^3 = 1000 11^3 = 1331 12^3 = 1728 133 = 2197 14^3 = 2744 15^3 = 3375 16^3 = 4096 173 = 4913 18^3 = 583^2 19^3 = 6859 20^3 = 8000 Again, only FOIL when necessary on the practice problems on the next page",
  "2.1.3": "PDF technique example: For example, 7^4 = ( 72)2 = 49^2 = 2401 However, the following powers should be memorized for quick calculation: 23 = 8^3^3 = 27 5^3 = 125 24 = 16^3^4 = 81 5^4 = 625 25 = 32^3 5 = 243 5 5 = 3125 26 = 64^3 6 = 729 27 = 128^3 7 = 2187 28 = 256 29 = 51^2 210 = 1024 The following are problems concerning higher powers of certain integers. 54",
  "2.1.4": "PDF technique example: For example, if you only had 1/11 memorized as 9 1/11 %, but you need to know what 5/11 is, then you could simply multiply by 5: 5 × 1/11 = 5 × ( 9 1/11 % ) = 45 5/11 % Although memorization of all fractions is ideal, this method will result in correctly answering the ques- tion, albeit a lot slower.",
  "2.1.5": "PDF technique example: They are: 999 999 = 27 × 37 77 77 = 1001 13 3367 3367 = 10101^3 1430 1430 = 10010 7 1073 1073 = 29 × 37 154 154 = 200^2 13 1443 1443 = 10101 7",
  "2.1.6": "PDF technique example: For example, 62 to express 42 in roman numerals it would not be 42 =XXXXII, it would be 42 =XLII. To circumvent the problem of putting four of the same numerals consecutively, you use a method of “subtraction.” Anytime a numeral of lesser value is placed in front of a numeral of greater value, you subtract from the larger numeral the small numeral. So in our case 40 is represented by...",
  "2.1.7": "PDF technique example: the other two, you can always use Euler’s formula of: Faces + Vertices − Edges = 2 to get the missing value",
  "2.1.8": "PDF technique example: The following is an example where these approximations are useful: 64 (e × π)4 = e4 × π4 = e · e3 · ( π2)2 ≈ e · 20 · 100 ≈ e · 2000 ≈ 5400 The following are more practice problems concerning these approximations:",
  "2.1.9": "PDF technique example: onversions The following are important conversion factors for distances: 1 mile = 5280 ft",
  "2.1.10": "PDF technique example: for example 1ft.= 12in.), however when asked to find how many cubic inches are in cubic feet, they want to revert back to the linear conversion, which is incorrect (1ft.3 ̸= 12in. 3). When converting between linear distance to areas, and volumes you must square or cube the conversion factor appropriately. So in our example, we know that: 1ft. = 12in. ⇒ 1ft.3 = (12) 3in.3 = 1728in.3...",
  "2.1.11": "PDF technique example: for example, the amount of cups in a gallon doesn’t need to be explicitly stated, but it would be helpful to have it memorized so you don’t have to multiply how many quarts in a gallon, how many pints in a quart, and how many cups in a pint), it is recommended that everything in the table should be memorized: 1 gallon = 4 quarts 1 quart = 2 pints 1 pint = 2 cups 1 gallon = 16 cups 1...",
  "2.1.12": "PDF technique example: Here are the conversion factors: Fahrenheit → Celcius: C = 5/9 (F − 32) Celcius → Fahrenheit: F = 9/5 C + 32 A couple of important degrees which pop-up frequently is that 32 ◦F = 0 ◦C, 21^2 ◦F = 100 ◦C, and −40◦F = −40◦C",
  "2.2.1": "PDF technique example: Here is another example problem: The sum of four consecutive even numbers is 140, what is the small- est- For this one you can represent the sum by ( n − 2) + (n) + (n + 2) + (n + 4) = 140, so dividing the number by 4 will get you the integer between the second and third even number. So 140 ÷ 4 = 35, so the two middle integers are 34 and 36, making the smallest integer 32. So from this...",
  "2.2.2": "PDF technique example: aware, the fibonacci sequence follows the recursive relationship of Fn−2 + Fn−1 = Fn",
  "2.2.3": "PDF technique example: Here is an example to display both method: Example: Find the number of relatively prime integers less than 20. 20 = 2^2 · 5 # of Relatively Prim Integers = (2 − 1) · (5 − 1) · (22−1) · (51−1) = 4 · 2 = 8 or # of Relatively Prim Integers = 1/2 · 4/5 × 20 = 8 Sum of Relatively Prime Integers less than N ∑= (# of Relatively Prime Integers) × n/2 Example: Find the sum of the relatively...",
  "2.2.4": "PDF technique example: gonal would be drawn twice, so the total number of diagonals is: # of Diagonals = n · (n − 3) 2 As an example lets look at the number of diagonals in a hexagon: # of Diagonals in a Hexagon = 6 · 3/2 = 9",
  "2.2.5": "PDF technique example: of Exterior Angles: 360 ◦ Exterior Angle: 360◦ n Interior Angle: 180 ◦ − 360◦ n = 180◦(n − 2) n Sum of Interior Angles: n · 180◦(n − 2) n = 180(n − 2) If you were to only remember one of the above formulas, let it be that the sum of the exterior angles of every regular polygon be equal to 360 ◦",
  "2.2.6": "PDF technique example: For example, the idea of a triangular number is the amount of dots which can be arranged into an equilateral triangle (1, 3, 6,...). The following are formulas for these “geometric” numbers: 79 Triangular: Tn = n(n + 1) 2 Square: Sn = n(2n − 0) 2 = n2 Pentagonal: Pn = n(3n − 1) 2 Hexagonal: Hn = n(4n − 2) 2 Heptagonal: En = n(5n − 3) 2 Octagonal: On = n(6n − 4) 2 M-Gonal: Mn = n[(M −...",
  "2.2.7": "PDF technique example: For example, the sides of a right triangle are integers, one of its sides is 9, what is the hypotenuse- Where this gets it’s foundation is from the Pythagorean Theorem which states that a2 + b2 = c2. If the smallest side is given (call it a, then we can express a2 = c2 − b2 = ( c − b)(c + b)). Now is where the trick comes into play. The goal becomes to find two numbers that when...",
  "2.2.8": "PDF technique example: F ormulas Area of an Equilateral Triangle when knowing the side-length s: Area = s2 · √ 3/4 Area of an Equilateral Triangle when knowing the height h: Area = h2 · √ 3/3 Finding the height when given the side length s: Height = s · √ 3/2 Example: An equilateral triangle’s perimeter is 12",
  "2.2.9": "PDF technique example: knowing the above formulas, a couple of other ones are: Face Diagonal of a Cube = s √ 2 Body Diagonal of a Cube = s √ 3",
  "2.2.10": "PDF technique example: Here is an example: 7C4 = 7! 4!(7 − 4)! = 7 · 6 · 5/3 · 2 = 35 With combinations and permutations (and factorials in general) you want to look at ways of canceling factors from the factorial to ease in calculation. In addition, the following is a list of the factorials which should be memorized for quick access: 3! = 6^4! = 24 5! = 120 6! = 720 7! = 5040 8! = 40320 9! = 362880 10! =...",
  "2.2.11": "PDF technique example: Now to find the reference angle is is just θ − 180◦ = 210 ◦ − 180◦ = 30 ◦",
  "2.2.12": "PDF technique example: for example this example: sin(10◦) cos(20◦) + sin(20◦) cos(10◦) With out using the sum to difference formula, this would be impossible to calculate, however after using the formula you get: sin(10◦) cos(20◦) + sin(20◦) cos(10◦) = sin(10 ◦ + 20◦) = sin(30 ◦) = 1/2 The following are some practice problems using these identities:",
  "2.2.13": "PDF technique example: ollowing as a rough primer: The general equation for any sine/cosine plot is: y = A sin[B(x − C)] + D Amplitude: |A/Period: 2π B Phase Shift: C Vertical Shift: D (Up if > 0, Down if < 0) Example: Find the period of y = 3 sin(πx − 2) + 8",
  "2.2.14": "PDF technique example: When approached with a parabola in the form of f (x) = Ax2 + Bx + x, the coordinate of the vertex is: (h, k) = ( −B/2A, f (−B/2A ) )",
  "2.2.15": "PDF technique example: following question: Find the value for k such that the quadratic 3 x2 − x − 2k = 0 has equal roots",
  "3.1.1": "PDF technique example: Here is another example: GCD (108, 140) = GCD (32, 108) = GCD (12, 32) = GCD (8, 12) = GCD (4, 8) = 4 If at any point in that process you notice what the GCD of the two numbers is by observation, you can cut down on the amount of steps in computation. For computing the LCM between two numbers a and b, I use the formula: LCM (a, b) = a × b GCD (a.b) So to find what the LCM is, we must...",
  "3.1.2": "PDF technique example: Examples of an abundant number is 12 (1 + 2 + 3 + 4 + 6 = 16 > 12) and 18 (1 + 2 + 3 + 6 + 9 = 21 > 18). An interesting property of abundant numbers is that any multiple of a perfect or abundant number is abundant. Knowing this is very beneficial to the number sense test. As you can assume through the process of elimination, a deficient number has the sum of the proper divisors less...",
  "3.1.3": "PDF technique example: Here is an example to clear things up: 96 Example: Find the Sum of the Coeﬃcients of ( x + y)6. Solution: Well let x = 1 and y = 1 which lead to the Sum of the Coeﬃcients = (1 + 1) 6 = 64. An interesting side note on this is when asked to find the Sum of the Coeﬃcients of ( x − y)n it will always be 0 because by letting x = 1 and y = 1 you get the Sum of the Coeﬃcients = (1 − 1)n = 0....",
  "3.1.4": "PDF technique example: of the Roots Define a polynomial by pn = anxn + an−1xn−1 + an−2xn−2 · · · a1x1 + a0 = 0",
  "3.1.5": "PDF technique example: For example, let’s find the units digit of 3 47, knowing: 99/31^3 Units Digit: 3/32 9 Units Digit: 9/33 27 Units Digit: 7/34 81 Units Digit: 1/35 243 Units Digit: 3/36 729 Units Digit: 9/37 2187 Units Digit: 7/38 6561 Units Digit: 1 From this you can see it repeats every 4 th power. So in order to see what is the units digit you can divide the power in question by 4 then see what the...",
  "3.1.6": "PDF technique example: The rules to remember are as followed: 101 xa · xb = xa+b xa xb = xa−b (xa)b = xab The following are problems concerning each type: Product Rule: Let 3 x = 70",
  "3.1.7": "PDF technique example: example of how approximations of logs can be calculated: 200 log 200 = 200 log(2 · 100) = 200 · (log 2 + log 100) ≈ 200 · (.3 + 2) = 460 The following are some more practice problems: 103",
  "3.1.8": "PDF technique example: For example: √ 12 × √ 27 = √ 12 × √ 3 × √ 9 = √ 36 × √ 9 = 6 × 3 = 18 Usually the best approach is to figure out what you can take away from one of the square roots and multiply the other one by it. So from the above example, notice that we can take a 3 away from the 37 to multiply the 12 with, leading to just √ 36 × √ 9 which are easy square roots to calculate. With this method, there...",
  "3.1.9": "PDF technique example: For example: 3√ 830584. Now the procedure would be as followed: 1. Figure out how many digits you are going to have by noticing how many three-digit “sets” there are. Most will only be two digit numbers, however this is not guaranteed. 2. To find out the units digit, look at the units digit of the number given and think about what number cubed would give that result. 3. After that, you...",
  "3.1.10": "PDF technique example: Recall that i = √−1",
  "3.1.11": "PDF technique example: For example if you are given a function f (x) = 3/2 x − 2 and you want to calculate f −1(x) at the point x = 3, you don ’t want to do the standard procedure for finding inverses (switch the x and y variables and solve for y) which would be: x = 3/2 y − 2 ⇒ y = (x + 2) · 2/3 at x=3: ⇒ y = (3 + 2) · 2/3 = 10/3 Not only do you solve for the function, you have to remember the function while...",
  "3.1.12": "PDF technique example: For example, you might want to keep in mind: squares, cubes, factorials, and fibonacci numbers. Let’s look at some example problems: Problem: Find the next term of 1, 5, 13, 25, 41,... Solution I: So for this, notice that you are adding to each term 4, 8, 12, 16 respectively. So each time you are incrementing the addition by 4 so, the next term will simply be 16 + 4 added to 41 which is...",
  "3.1.13": "PDF technique example: involve applying the definitions of Odds and Probability which are: Probability = Desired Outcomes Total Outcomes Odds = Desired Outcomes Undesirable Outcomes So the probability of rolling snake-eyes on a dice would be 1/36 while the odds of doing this would be 1/35",
  "3.1.14": "PDF technique example: Let sets A = {M, E, N, T, A, L}and B = {M, A, T, H }then: Intersection: The intersection between A and B (notated as C = A ∩ B) is defined to be elements which are in both sets A and B",
  "3.2.1": "PDF technique example: to illustrate how to go “backwards.” Convert 51 10 to base-6: 1. Well we know 6^2 = 36 and 6^3 = 216, so the highest power which divides 51 is 6^2. 2. 36 goes into 51 one time, so our 3 rd digit is 1. 3. The remainder when dividing 51 by 36 is 15. 4. Now we see how many times 6 1 goes into 15 (which is 2 times, so our 2 nd digits is 2). 5. The remainder when dividing 15 by 6 is 3. 6. 60...",
  "3.2.2": "PDF technique example: For example, let’s look at how we see.125 in base-10.125 = 1 · (.1) + 2 · (.01) + 5 · (.001) = 1 · 10−1 + 2 · 10−2 + 5 · 10−3 You can display this in terms of fractions as well: = 1/10 + 2/100 + 5 1000 = 1/10 + 1/50 + 1/200 = 20 + 4 + 1/200 = 1/8 Similar to the previous session, we can replace the powers of ten by the power of any fraction. Let’s look at converting.3216 to a base-10...",
  "3.2.3": "PDF technique example: Let’s look at an example where I would employ this technique: 234 × 34 + 124 = 11 × 3 + 6 = 39 = 213^4 However, when numbers are larger, this might not be the case, so let’s look at the most popular operations on the number sense test which are addition (and subsequently subtraction) and multiplication (division is usually not tested, so I will exclude expl",
  "3.2.4": "PDF technique example: For example, if we are converting 1001001^2 into base-4, you would take 1001001 in groups of two (since 2^2 = 4) and converting each group into base-4. Let’s see how it would look: 120 Convert 1001001^2 to base-4 First Digit: 01^2 14 Second Digit: 10^2 24 Third Digit: 00^2 04 Fourth Digit: 1^2 14 Answer: 10214 Let’s look at an example where the converting base is that of the original...",
  "3.2.5": "PDF technique example: For example purposes let’s look at the sum 1 + 2 + 4 + 8 + 16 + 32 + 64. If we represented them as binary it would be: 1 + 2 + 4 + 8 + 16 + 32 + 64 = 1 · 20 + 1 · 21 + 1 · 22 + 1 · 23 + 1 · 24 + 1 · 25 + 1 · 26 = 1111111^2 11111112 = 10000000^2 − 12 ⇒ 27 − 1 = 128 − 1 = 127 Although this method is easiest with binary, you can apply it to other powers as well, as long as you are...",
  "3.2.6": "PDF technique example: for example: Problem: Convert the decimal.333 · · ·7 into a base-10 fraction. Solution: The above problem relies on using the formula for the sum of an infinite geometric series:.333 · · ·7 = 3/7 + 3/49 + 3/343 + · · · = 3 7/1 − 1/7 = 3/7 × 7/6 = 1/2 Another problem which relies on understanding of how the derivation of finding the remainder of a num- ber when dividing by 9, only in a...",
  "3.3.1": "PDF technique example: For example:.44444... = 4/9",
  "3.3.2": "PDF technique example: Here is an example:.242424... = 24/99 = 8/33 You can extend the concept for any sort of continuously repeating fractions. For example,.abcabcabc... = abc/999, and so on.",
  "3.3.3": "PDF technique example: = a/10 + b/100 + b/1000 + · · · = a/10 + b/100 1 − 1/10 = a/10 + b/90 However we can continue and rewrite the fraction as: a/10 + b/90 = 9 · a + b/90 = (10 · a + b) − a/90 Lets take a step back to see what this means",
  "3.3.4": "PDF technique example: Here is an example:.437373737... = 437 − 4/990 = 433 990 It is important for the number sense test to reduce all fractions. This can sometimes be the tricky part. The easiest way to check for reducibility is to see if you can divide the numerator by 2, 3,or 5. In the above example, 433 is not divisible by 2, 3, 5 so the fraction is in its lowest form. Here is an example where you can...",
  "3.4": "PDF technique example: for example all of the sections dealing with finding remainders when dividing by 3, 9, 11, etc...). Here is a basic understanding of what is going on with modular arithmetic. When dividing two numbers a and b results in a quotient q and a remainder of r we say that a ÷ b = q + r b. With modular arithmetic, we are only concerned with the remainder so the expression of a ÷ b = q + r b ⇒ a...",
  "3.5.1": "PDF technique example: 1 · 1! + 2 · 2! + · · · + n · n! = ( n + 1)! − 1 The simplest case would be to compute sums like: 1 · 1! + 2 · 2! + 3 · 3! + 4 · 4! = (4 + 1)! − 1 = 120 − 1 = 119 There are slight variations which could be asked (the easiest of which would be leaving out some terms)",
  "3.5.2": "PDF technique example: for example: 3! + 4! − 5! 3! = 3! · (1 + 4 − 5 · 4) 3! = 1 + 4 − 20 = −15",
  "3.5.3": "PDF technique example: For example: 4! ∼= x(mod 6), 0 ≤ x ≤ 5, x =- Well we know that 4! = 4 · 3 · 2 · 1 = 4 · 6 ∼= 0(mod 6) ⇒ x = 0. The following are some more problems to give you some practice:",
  "3.6.1": "PDF technique example: For example: lim x→3/3x2 − 4 = 3 · 32 − 4 = 23 However certain problems, which when passing the limit, might lead to a 0/0 violation. In this case, you want to see if there are any common factors that you can cancel so that passing the limit doesn ’t give you an indeterminate form. Let’s look at an example: lim x→2 (x − 2)(x + 3) (x + 5)(x − 2) = lim x→2 (x + 3) (x + 5) = 5/7 If we had...",
  "3.6.2": "PDF technique example: ired, so let’s see how we can take the derivative of a polynomial: Define f (x) = anxn + an−1xn−1 + · · · + a1x1 + a0x0 Then f ′(x) = an(n)xn−1 + an−1(n − 1)xn−2 + · · · + a1(1)x0 So the procedure is you multiply the coeﬃcient by the power and then lower the power (notice that a constant after differentiating disappears)",
  "3.6.3": "PDF technique example: ws a generic polynomial being integrated: ∫ b a anxn+an−1xn−1+· · ·+a1x1+a0x0dx = F (x) = ( an n + 1 xn+1 + an−1 n xn + · · · + a1/2 x2 + a0/1 x1 )b a = F (b)−F (a) Let’s look at an example: 131 Evaluate ∫ 2 0/3x2 − x dx"
};

function buildTechniqueDetail(id, title, hint) {
  return `PDF subsection ${id}: ${title}\nTechnique: ${hint}`;
}

function buildPdfExample(id) {
  return sectionExamples[id] || "PDF technique example: No technique example was found in the extracted PDF text for this subsection.";
}

function formatMultilineMathText(value) {
  return normalizeMathText(value)
    .replace(/^PDF technique example:\s*/i, "PDF technique example:\n")
    .replace(/ (Here (?:is|are) [^:]{0,80}example[s]?:)/gi, "\n$1")
    .replace(/ (Let.s illustrate[^:]{0,80}:)/gi, "\n$1")
    .replace(/ (For example[:,]?)/gi, "\n$1")
    .replace(/ (Example:)/g, "\n$1")
    .replace(/ (Problem:|Solution:)/g, "\n$1")
    .replace(/ (Units:|Ones:|Tens:|Hundreds:|Thousands:)/g, "\n$1")
    .replace(/ (Tens\/Ones:|Thousand\/Hundreds:|Thousands\/Hundreds:|Rest of Answer:)/g, "\n$1")
    .replace(/ (Fractional Part:|Whole Part:|Step \d+:|Answer:)/g, "\n$1")
    .replace(/ (?=\d+\.\s)/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}


const topics = chapterOutline.map(([id, title, group, hint]) => {
  const problems = importedProblemSets[id] || [];
  const standaloneNote = standaloneExerciseNotes[id] || "";
  const hasStandaloneExercises = problems.length > 0;
  return {
    id,
    title,
    group,
    hint,
    technique: buildTechniqueDetail(id, title, hint),
    example: buildPdfExample(id),
    problems,
    standaloneNote,
    hasStandaloneExercises,
    icon: id.split(".").slice(-1)[0],
    source: hasStandaloneExercises
      ? `Problem Set ${id} (${problems.length} imported from subsection-end exercises)`
      : standaloneNote,
    status: hasStandaloneExercises ? "PDF original" : "No standalone exercise set",
  };
});

let state = {
  topic: topics.find((topic) => topic.id === window.location.hash.slice(1)) || topics[0],
  current: null,
  total: 0,
  correct: 0,
  streak: 0,
  startTime: Date.now(),
  challenge: false,
  remaining: 600,
  problemIndex: 0,
};

const els = {
  topicList: document.querySelector("#topicList"),
  topicJump: document.querySelector("#topicJump"),
  topicSearch: document.querySelector("#topicSearch"),
  topicTitle: document.querySelector("#topicTitle"),
  modeLabel: document.querySelector("#modeLabel"),
  timer: document.querySelector("#timer"),
  accuracy: document.querySelector("#accuracy"),
  streak: document.querySelector("#streak"),
  difficulty: document.querySelector("#difficulty"),
  problemCount: document.querySelector("#problemCount"),
  expression: document.querySelector("#expression"),
  form: document.querySelector("#answerForm"),
  input: document.querySelector("#answerInput"),
  skip: document.querySelector("#skipButton"),
  feedback: document.querySelector("#feedback"),
  coachTitle: document.querySelector("#coachTitle"),
  coachDescription: document.querySelector("#coachDescription"),
  steps: document.querySelector("#steps"),
  hintButton: document.querySelector("#hintButton"),
  hintBox: document.querySelector("#hintBox"),
  challengeButton: document.querySelector("#challengeButton"),
  memoryPrompt: document.querySelector("#memoryPrompt"),
  memoryButton: document.querySelector("#memoryButton"),
  memoryAnswer: document.querySelector("#memoryAnswer"),
};

function matchesTopicSearch(topic, query) {
  if (!query) return true;
  const haystack = `${topic.id} ${topic.title} ${topic.group}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function renderTopicJump() {
  els.topicJump.innerHTML = "";
  topics.forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic.id;
    option.textContent = `${topic.id} ${topic.title}`;
    els.topicJump.append(option);
  });
  els.topicJump.value = state.topic.id;
}

function evaluateExpression(expression) {
  if (!/^[0-9+\-*/().\s]+$/.test(expression)) return NaN;
  return Function(`"use strict"; return (${expression});`)();
}

function normalizeMathText(value) {
  return String(value)
    .replaceAll("\u00d7", "x")
    .replaceAll("\u6885", "/")
    .replaceAll("\u9234\uad2d", "∫")
    .replaceAll("\u9234\u6a94\u6a9b", "'")
    .replaceAll("\u9234\u6a94\u6a9a", "'")
    .replace(/(\d|[a-zA-Z])\s*\|\s*(\d|[a-zA-Z])/g, "$1/$2")
    .replace(/\b(\d{1,3})\s+(\d{1,2})\s+(\d{1,2})(?=\s*(?:%|x|×|÷|\/|−|-|\+|=|\.{3}|$))/g, "$1 $2/$3")
    .replace(/\b(\d{1,2})\s+(\d{1,2})(?=\s*%)/g, "$1/$2");
}

function displayExpression(expression) {
  return normalizeMathText(expression)
    .replaceAll("*", "x");
}

function getProblemPrompt(problem) {
  return typeof problem === "string" ? problem : problem.prompt;
}

function getProblemAnswer(problem) {
  if (typeof problem === "string") {
    return evaluateExpression(problem);
  }
  if (problem.answer !== undefined && problem.answer !== "") {
    return problem.answer;
  }
  return evaluateExpression(problem.prompt);
}

function formatAnswer(value) {
  if (typeof value === "string") return displayExpression(value);
  if (!Number.isFinite(value)) return "";
  const rounded = Math.round(value * 1000000) / 1000000;
  return Number.isInteger(rounded) ? String(rounded) : String(rounded);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function almostEqual(input, answer) {
  const cleaned = input.trim();
  if (!cleaned) return false;
  const numeric = Number(cleaned);
  if (Number.isFinite(numeric) && Number.isFinite(answer)) {
    return Math.abs(numeric - answer) < 0.000001;
  }
  const normalizedInput = normalizeMathText(cleaned).toLowerCase().replace(/\s+/g, " ").replaceAll("×", "x").replaceAll("÷", "/");
  const normalizedAnswer = normalizeMathText(answer).toLowerCase().replace(/\s+/g, " ").replaceAll("×", "x").replaceAll("÷", "/");
  return normalizedInput === normalizedAnswer;
}

function renderTopics() {
  els.topicList.innerHTML = "";
  const query = els.topicSearch.value.trim();
  const visibleTopics = topics.filter((topic) => matchesTopicSearch(topic, query));
  if (!visibleTopics.length) {
    const empty = document.createElement("div");
    empty.className = "topic-group";
    empty.textContent = "No matching subsections";
    els.topicList.append(empty);
    return;
  }
  const groups = [...new Set(topics.map((topic) => topic.group))];
  groups.forEach((group) => {
    const groupTopics = visibleTopics.filter((topic) => topic.group === group);
    if (!groupTopics.length) return;

    const groupLabel = document.createElement("div");
    groupLabel.className = "topic-group";
    groupLabel.textContent = group;
    els.topicList.append(groupLabel);

    groupTopics.forEach((topic) => {
      const button = document.createElement("button");
      button.className = `topic-button${topic.id === state.topic.id ? " active" : ""}`;
      button.type = "button";
      button.innerHTML = `
        <span>${topic.id}</span>
        <span>
          <strong>${topic.title}</strong>
          <small>${topic.status} · ${topic.problems.length} questions</small>
        </span>`;
      button.addEventListener("click", () => selectTopic(topic));
      els.topicList.append(button);
    });
  });
}

function selectTopic(topic) {
  state.topic = topic;
  state.problemIndex = 0;
  state.streak = 0;
  els.topicJump.value = topic.id;
  if (window.location.hash.slice(1) !== topic.id) {
    window.history.replaceState(null, "", `#${topic.id}`);
  }
  els.feedback.className = "feedback";
  els.feedback.textContent = topic.problems.length ? "Loaded PDF subsection problem set." : topic.standaloneNote;
  renderTopics();
  renderCoach();
  nextProblem();
}

function renderCoach() {
  const t = state.topic;
  els.topicTitle.textContent = `${t.id} ${t.title}`;
  els.coachTitle.textContent = `${t.id} ${t.title}`;
  els.coachDescription.textContent =
    t.problems.length
      ? "These questions are organized by the PDF table of contents and come from the numbered Problem Set at the end of this subsection."
      : t.standaloneNote;
  els.steps.innerHTML = "";
  [
    `Chapter group: ${t.group}.`,
    formatMultilineMathText(t.technique),
    formatMultilineMathText(t.example),
    t.problems.length
      ? `Exercise source: Problem Set ${t.id}, ${t.problems.length} imported questions.`
      : `Exercise source: ${t.standaloneNote}`,
  ].forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    els.steps.append(li);
  });
  els.hintBox.hidden = true;
  els.hintButton.textContent = "Show hint";
  els.hintBox.textContent = t.hint;
}

function nextProblem() {
  const t = state.topic;
  if (!t.problems.length) {
    state.current = null;
    els.expression.textContent = "PDF has no standalone problem set for this subsection";
    els.difficulty.textContent = t.status;
    els.problemCount.textContent = "Technique only";
    els.input.value = "";
    els.input.disabled = true;
    els.form.querySelector("button[type='submit']").disabled = true;
    els.skip.disabled = true;
    updateStats();
    return;
  }

  const raw = t.problems[state.problemIndex % t.problems.length];
  const prompt = getProblemPrompt(raw);
  const answer = getProblemAnswer(raw);
  state.current = { expression: prompt, answer };
  els.expression.textContent = displayExpression(prompt);
  els.difficulty.textContent = t.status;
  els.problemCount.textContent = `${state.problemIndex + 1} / ${t.problems.length}`;
  els.input.value = "";
  els.input.disabled = false;
  els.form.querySelector("button[type='submit']").disabled = false;
  els.skip.disabled = false;
  if (window.matchMedia("(min-width: 701px)").matches) {
    els.input.focus();
  }
  updateStats();
}

function updateStats() {
  const accuracy = state.total === 0 ? 100 : Math.round((state.correct / state.total) * 100);
  els.accuracy.textContent = `${accuracy}%`;
  els.streak.textContent = state.streak;
}

function tick() {
  if (state.challenge) {
    state.remaining -= 1;
    if (state.remaining <= 0) {
      state.remaining = 0;
      state.challenge = false;
      els.feedback.className = "feedback";
      els.feedback.textContent = `Challenge complete: ${state.correct} correct at ${els.accuracy.textContent} accuracy.`;
      els.challengeButton.querySelector("span").textContent = ">";
    }
    els.timer.textContent = formatTime(state.remaining);
    return;
  }
  els.timer.textContent = formatTime((Date.now() - state.startTime) / 1000);
}

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.current) return;

  const ok = almostEqual(els.input.value, state.current.answer);
  state.total += 1;
  if (ok) {
    state.correct += 1;
    state.streak += 1;
    state.problemIndex += 1;
    els.feedback.className = "feedback correct";
    els.feedback.textContent = "Correct. Next PDF exercise loaded.";
    nextProblem();
  } else {
    state.streak = 0;
    els.feedback.className = "feedback wrong";
    els.feedback.textContent = `Not quite. Answer: ${formatAnswer(state.current.answer)}. Hint: ${state.topic.hint}`;
    updateStats();
  }
});

els.skip.addEventListener("click", () => {
  if (!state.current) return;
  state.total += 1;
  state.streak = 0;
  els.feedback.className = "feedback";
  els.feedback.textContent = `Skipped. Answer was ${formatAnswer(state.current.answer)}.`;
  state.problemIndex += 1;
  nextProblem();
});

els.hintButton.addEventListener("click", () => {
  els.hintBox.hidden = !els.hintBox.hidden;
  els.hintButton.textContent = els.hintBox.hidden ? "Show hint" : "Hide hint";
});

els.challengeButton.addEventListener("click", () => {
  state.challenge = !state.challenge;
  state.remaining = 600;
  state.total = 0;
  state.correct = 0;
  state.streak = 0;
  els.modeLabel.textContent = state.challenge ? "10 minute challenge" : "Practice mode";
  els.challengeButton.querySelector("span").textContent = state.challenge ? "■" : ">";
  updateStats();
  nextProblem();
});

els.topicJump.addEventListener("change", () => {
  const topic = topics.find((item) => item.id === els.topicJump.value);
  if (topic) selectTopic(topic);
});

els.topicSearch.addEventListener("input", renderTopics);

els.memoryButton.addEventListener("click", () => {
  const t = state.topic;
  els.memoryPrompt.textContent = t.id;
  els.memoryAnswer.textContent = `${t.problems.length} imported questions`;
  els.memoryAnswer.hidden = !els.memoryAnswer.hidden;
  els.memoryButton.textContent = els.memoryAnswer.hidden ? "Count" : "Hide";
});

renderTopicJump();
renderTopics();
renderCoach();
nextProblem();
setInterval(tick, 1000);
