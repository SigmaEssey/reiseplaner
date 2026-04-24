import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import type { TravelData } from "../models/travel"
import { generatePackingList, type PackingItem } from "../utils/packingList"



export default function HollidayForm() {
    //form speichert alles was Benutzer ins Formular eingibt
    const [formData, setFormData] = useState<TravelData>({
        destination: "",
        duration: 1,
        weather: "warm",
        travelType: "Strandurlaub",
        transport: "Auto"
    })

    const [packingList, setPackingList] = useState<PackingItem[]>([])

    //kies welches feld geändrt wurde und akt. den state
    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: name === "duration" ? parseInt(value) || 0 : value
        }))
    }


    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        const list = generatePackingList(formData)
        setPackingList(list)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Reiseziel
                    <input
                        type="text"
                        name="destination"
                        required
                        maxLength={100}
                        onChange={handleChange}
                        value={formData.destination}
                    />
                </label>

                <label>
                    Dauer (Tage)
                    <input
                        type="number"
                        name="duration"
                        required
                        min={1}
                        max={365}
                        onChange={handleChange}
                        value={formData.duration}
                    />
                </label>

                <label>
                    Wetter
                    <select name="weather" required onChange={handleChange} value={formData.weather}>
                        <option value="warm">warm</option>
                        <option value="kalt">kalt</option>
                        <option value="gemischt">gemischt</option>
                    </select>
                </label>

                <label>
                    Reiseart
                    <select name="travelType" required onChange={handleChange} value={formData.travelType}>
                        <option value="Strandurlaub">Strandurlaub</option>
                        <option value="Business">Business</option>
                        <option value="Backpacking">Backpacking</option>
                    </select>
                </label>

                <label>
                    Transportmittel
                    <select name="transport" required onChange={handleChange} value={formData.transport}>
                        <option value="Auto">Auto</option>
                        <option value="Flugzeug">Flugzeug</option>
                        <option value="Zug">Zug</option>
                        <option value="Bus">Bus</option>
                        <option value="Motorrad">Motorrad</option>
                    </select>
                </label>

                <button type="submit">Plan erstellen</button>
            </form>

            {packingList.length > 0 && (
                <div className="packing-list">
                    <h2>Packliste für {formData.destination}</h2>
                    <ul>
                        {packingList.map((category) => {
                            return category.items.map((item) => {
                                return (
                                    <li key={item}>
                                        <label>
                                            <input type="checkbox"/>{item}
                                        </label>
                                    </li>
                                );
                            });
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}
