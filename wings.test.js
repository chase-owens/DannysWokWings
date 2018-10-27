module.require("./menu.js");

function calculateWingPrice(menuItem) {
  let ppw = menuItem.price / menuItem.numberOfWings;
  return ppw;
}

function bestPricePerWing(menu) {
  let bestDeals = [{ ppw: Infinity, numberOfWings: 0 }];

  let menuWithPPW = [];

  for (menuItem of menu) {
    currentPPW = calculateWingPrice(menuItem);
    menuItem.ppw = currentPPW;
    menuWithPPW.push(menuItem);

    if (currentPPW < bestDeals[0].ppw) {
      while (bestDeals.length > 0) {
        bestDeals.pop();
      }
      bestDeals.push(menuItem);
    }

    if (currentPPW == bestDeals[0].ppw && menuItem != bestDeals[0]) {
      bestDeals.push(menuItem);
    }
  }

  console.log("menuWithPPW: ", ...menuWithPPW);

  return bestDeals;
}

let bestPPW = bestPricePerWing(DANNYSWOKMENU);
console.log(...bestPPW);

describe("bestPricePerWing()", () => {
  test("returns deal with best price per wing", () => {
    expect(bestPPW[0].ppw).toBeLessThanOrEqual(
      calculateWingPrice(DANNYSWOKMENU[10])
    );
  });
});
