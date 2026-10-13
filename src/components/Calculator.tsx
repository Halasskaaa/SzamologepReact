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
        <h2>Számológép</h2>
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
        
    </section>
)
}
export default Calculator;