import { useState } from "react";

let elso;
let masodik;

function Calculator() {
    const [elso, setElso] = useState<string>("");
    const [masodik, setMasodik] = useState<string>("");
    const [answer, setAnswer] = useState<number | null>(null);
    const [muvelet, setMuvelet] = useState<string>("+");
    const [hiba, setHiba] = useState<string>("");


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
            placeholder="Add meg aza második számot"
            value={masodik}
            onChange={(e) => setMasodik(e.target.value)}
            />            
        </div>
        <div>
            <label>Művelet</label>
            <select value={muvelet} onChange={(e) => setElso(e.target.value)}>
                <option value="+">Összeadás (+)</option>
                <option value="-">Kivonás (-)</option>
                <option value="*">Szorzás (*)</option>
                <option value="/">Osztás (/)</option>
            </select>
        </div>

        <button></button>
        
    </section>
)
}
export default Calculator;