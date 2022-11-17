function compoundInterest(startDeposit, annualRate, annualAmount, additionalInvestments, interestPeriod) {
	const periodPercent = 1 + annualRate / annualAmount / 100;
	const periodTerm = interestPeriod * annualAmount;
	for ( let i = 0; i < periodTerm; i++) {
		startDeposit *= periodPercent;
		startDeposit += additionalInvestments;
	}
	return Math.round(startDeposit * 100) / 100;
}

module.exports = compoundInterest;
