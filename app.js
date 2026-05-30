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
  ["3.3.1", "Repeating Decimals: .aaaaa...", "Repeating Decimals", "A one-digit repeat a equals a/9."],
  ["3.3.2", "Repeating Decimals: .ababa...", "Repeating Decimals", "A two-digit repeat ab equals ab/99."],
  ["3.3.3", "Repeating Decimals: .abbbb...", "Repeating Decimals", "Separate the nonrepeating digit from the repeating tail."],
  ["3.3.4", "Repeating Decimals: .abcbcbc...", "Repeating Decimals", "Use the nonrepeating prefix and repeating block formula."],
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
    "11 * 54", "11 * 72", "11 * 38", "462 * 11", "11 * 74", "66 * 11",
    "1.1 * 2.3", "52 * 11", "246 * 11", "111 * 456", "198 / 11", "357 * 11",
    "275 / 11", "321 * 111", "1.1 * .25", "111 * 44", "374 / 11", "87 * 111",
    "286 / 11", "111 * 53", "297 / 11", "2233 / 11", "198 * 11", "297 / 11",
    "111 * 41", "111 * 35", "111 * 345", "2003 * 111", "3 * 5 * 7 * 11",
    "121 * 121", "33 * 1111", "22 * 32", "36963 / 111", "20.07 * 1.1",
    "13 * 121", "27972 / 111", "2006 * 11", "33 * 44", "2 * 3 * 11 * 13",
    "121 * 22", "44 * 55", "2 * 3 * 5 * 7 * 11", "2553 / 111", "114 * 121",
    "44 * 25 * 11", "55 * 33", "32 * 64 * 16 / 48", "2002 / 11", "77 * 88",
    "44.4 * 33.3 * 22.2", "11 * 11 * 11 * 11", "25553 / 1111", "11 * 13 * 42",
    "1111 * 123", "2 * 5 * 3 * 7 * 11", "121 * 124", "33 * 44 * 55",
  ],
};

const topics = chapterOutline.map(([id, title, group, hint]) => {
  const problems = importedProblemSets[id] || [];
  return {
    id,
    title,
    group,
    hint,
    problems,
    icon: id.split(".").slice(-1)[0],
    source: problems.length ? `Problem Set ${id} (${problems.length} imported)` : `Problem Set ${id} pending import`,
    status: problems.length ? "PDF original" : "Pending import",
  };
});

let state = {
  topic: topics[0],
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
  ruleSummary: document.querySelector("#ruleSummary"),
  sourceSummary: document.querySelector("#sourceSummary"),
  nextFocus: document.querySelector("#nextFocus"),
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

function evaluateExpression(expression) {
  if (!/^[0-9+\-*/().\s]+$/.test(expression)) return NaN;
  return Function(`"use strict"; return (${expression});`)();
}

function displayExpression(expression) {
  return expression.replaceAll("*", "x").replaceAll("/", "÷");
}

function formatAnswer(value) {
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
  return cleaned.toLowerCase() === String(answer).toLowerCase();
}

function renderTopics() {
  els.topicList.innerHTML = "";
  const groups = [...new Set(topics.map((topic) => topic.group))];
  groups.forEach((group) => {
    const groupLabel = document.createElement("div");
    groupLabel.className = "topic-group";
    groupLabel.textContent = group;
    els.topicList.append(groupLabel);

    topics.filter((topic) => topic.group === group).forEach((topic) => {
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
  els.feedback.className = "feedback";
  els.feedback.textContent = topic.problems.length ? "Loaded PDF problem set." : "This section is ready, but original questions still need importing.";
  renderTopics();
  renderCoach();
  nextProblem();
}

function renderCoach() {
  const t = state.topic;
  els.topicTitle.textContent = `${t.id} ${t.title}`;
  els.ruleSummary.textContent = t.hint;
  els.sourceSummary.textContent = t.source;
  els.nextFocus.textContent = t.problems.length ? "Practice from the section-end exercise set" : "Import exact PDF question text";
  els.coachTitle.textContent = `${t.id} ${t.title}`;
  els.coachDescription.textContent =
    t.problems.length
      ? "These questions are drawn from the exercise set at the end of this PDF subsection."
      : "This subsection is listed as a separate category. Its hint is loaded, but the extracted PDF text did not include reliable original question statements for this problem set.";
  els.steps.innerHTML = "";
  [
    `Chapter group: ${t.group}.`,
    `Hint: ${t.hint}`,
    t.problems.length ? `Imported questions: ${t.problems.length}.` : "No verified original questions imported yet.",
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
    els.expression.textContent = "Original PDF questions pending";
    els.difficulty.textContent = "Needs import";
    els.problemCount.textContent = "0 imported";
    els.input.value = "";
    els.input.disabled = true;
    els.form.querySelector("button[type='submit']").disabled = true;
    els.skip.disabled = true;
    updateStats();
    return;
  }

  const raw = t.problems[state.problemIndex % t.problems.length];
  const answer = evaluateExpression(raw);
  state.current = { expression: raw, answer };
  els.expression.textContent = displayExpression(raw);
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

els.memoryButton.addEventListener("click", () => {
  const t = state.topic;
  els.memoryPrompt.textContent = t.id;
  els.memoryAnswer.textContent = `${t.problems.length} imported questions`;
  els.memoryAnswer.hidden = !els.memoryAnswer.hidden;
  els.memoryButton.textContent = els.memoryAnswer.hidden ? "Count" : "Hide";
});

renderTopics();
renderCoach();
nextProblem();
setInterval(tick, 1000);
