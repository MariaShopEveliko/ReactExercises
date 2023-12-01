import "./Result.css";
import { calculateInvestmentResults, formatter } from "../../util/investment.js";

export default function Result({ initialInvestment, input }) {
    const results = calculateInvestmentResults(input);

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Valye</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invsested Capital</th>
            </tr>
        </thead>
        <tbody>{results.map((yearData) => {
            const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

            return <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
        })}</tbody>
    </table>
}