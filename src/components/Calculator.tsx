import { useState } from "react";

function Calculator() {
    const [elso, setElso] = useState<string>("");
    const [masodik, setMasodik] = useState<string>("");
    const [answer, setAnswer] = useState<number | null>(null);
    const [muvelet, setMuvelet] = useState<string>("+");
    const [hiba, setHiba] = useState<string>("");


    const szamol = () => {
        const a = Number(elso);
        const b = Number(masodik);

        if (elso.trim() === "" || masodik.trim() === "") {
            setHiba("Érvényes számokat adj meg!");
            setAnswer(null);
            return;
        }
        if (!Number.isFinite(a) || !Number.isFinite(b)) {
            setHiba("Kérlek, add meg mindkét számot!");
            setAnswer(null);
            return;
        }
        if (muvelet === "/" && b === 0) {
            setHiba("Nullával nem lehet osztani!");
            setAnswer(null);
            return;
        }

        setHiba("")

        switch (muvelet) {
            case "+": setAnswer(a+b);
            break;
            case "-": setAnswer(a-b);
            break;
            case "*": setAnswer(a*b);
            break;
            case "/": setAnswer(a/b);
            break;
        }
    }

return(
    <section className="container mt-4">
        <div>
            <label>Első szám</label>
            <input
            type="number" 
            placeholder="Add meg az első számot"
            value={elso}
            onChange={(e) => setElso(e.target.value)}
            />            
        </div>
        <div>
            <label>Második szám</label>
            <input 
            type="number" 
            placeholder="Add meg a második számot"
            value={masodik}
            onChange={(e) => setMasodik(e.target.value)}
            />            
        </div>
        <div>
            <label>Művelet</label>
            <select value={muvelet} onChange={(e) => setMuvelet(e.target.value)}>
                <option value="+">Összeadás (+)</option>
                <option value="-">Kivonás (-)</option>
                <option value="*">Szorzás (*)</option>
                <option value="/">Osztás (/)</option>
            </select>
        </div>

        <button onClick = {szamol}>Számol</button>
        {hiba !== "" && ( <p className="text-danger mt-3">{hiba}</p> )}
        {answer !== null && ( <h3 className="mt-3">Eredmény: {answer}</h3> )}

    </section>
    )
}
export default Calculator;