/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let cost = 40 * days;

  if (days < 3) {
    // nothing to do
  } else if (days >= 3 && days < 7) {
      cost -= 20;
  } else {
      cost -= 50;
  }

  return cost;
}

module.exports = calculateRentalCost;
