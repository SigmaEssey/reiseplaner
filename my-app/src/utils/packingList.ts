import type { TravelData } from "../models/travel"

export interface PackingItem {
    category: string
    items: string[]
}

export function generatePackingList(data: TravelData): PackingItem[] {
    const list: PackingItem[] = []

    // Basis-Artikel (immer dabei)
    list.push({
        category: "Basis",
        items: [
            "Reisepass/ID",
            "Bargeld/Karten",
            "Smartphone + Ladegerät",
            "Versicherungskarte"
        ]
    })

    // Wetter-basiert
    if (data.weather === "warm") {
        list.push({
            category: "Wetter - Warm",
            items: [
                "Sonnenschutzmittel",
                "Sonnenbrille",
                "Badehose/Bikini",
                "Leichte Kleidung",
                "Flip-Flops"
            ]
        })
    } else if (data.weather === "kalt") {
        list.push({
            category: "Wetter - Kalt",
            items: [
                "Winterjacke",
                "Handschuhe",
                "Mütze/Schal",
                "Warme Stiefel",
                "Thermoskleidung"
            ]
        })
    } else if (data.weather === "gemischt") {
        list.push({
            category: "Wetter - Gemischt",
            items: [
                "Regenjacke",
                "Sonnenschutzmittel",
                "Sonnenbrille",
                "Flexible Kleidung",
                "Gute Schuhe"
            ]
        })
    }

    // Reiseart-basiert
    if (data.travelType === "Strandurlaub") {
        list.push({
            category: "Strandurlaub",
            items: [
                "Strandtuch",
                "Sonnencreme",
                "Strandtasche",
                "Badehose/Bikini",
            ]
        })
    } else if (data.travelType === "Business") {
        list.push({
            category: "Business",
            items: [
                "Laptop",
                "Business-Kleidung",
                "Visitenkarten",
                "Notizblock",
                "Powerbank"
            ]
        })
    } else if (data.travelType === "Backpacking") {
        list.push({
            category: "Backpacking",
            items: [
                "Rucksack",
                "Wasserflasche",
                "Erste-Hilfe-Set",
                "Schnelltrocknende Kleidung",
                "Kopflampe",
                "Multi-Tool"
            ]
        })
    }

    // Transport-basiert
    if (data.transport === "Flugzeug") {
        list.push({
            category: "Flugzeug",
            items: [
                "Ohrstöpsel",
                "Nackenpolster",
                "Reiseapotheke",
                "Handgepäck-Größe beachten"
            ]
        })
    } else if (data.transport === "Auto") {
        list.push({
            category: "Auto",
            items: [
                "Führerschein",
                "Autovermietung-Dokumente",
                "Navigationsgerät/App",
                "Snacks"
            ]
        })
    } else if (data.transport === "Zug") {
        list.push({
            category: "Zug",
            items: [
                "Buch/Zeitschrift",
                "Snacks",
                "Bequeme Kleidung"
            ]
        })
    }

    // Dauer-basiert
    if (data.duration > 7) {
        list.push({
            category: "Längere Reise",
            items: [
                "Waschmittel-Reisegröße",
                "Ersatzkleidung",
                "Nähset"
            ]
        })
    }

    return list
}
