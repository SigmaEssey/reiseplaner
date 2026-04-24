//welche Werte erlaubt sind
export type Weather = "warm" | "kalt" | "gemischt"
export type TravelType = "Strandurlaub" | "Business" | "Backpacking" 
export type Transport = "Auto" | "Flugzeug" | "Zug" | "Bus" | "Motorrad"

export type TravelData = {
    destination: string
    duration: number
    weather: Weather
    travelType: TravelType
    transport: Transport
}

