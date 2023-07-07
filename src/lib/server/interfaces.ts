// Place to declare custom interfaces

interface Event {
    title: String,
    date: Date,
    time: Date,
    description: String,
    image: File,
    location: String,
    presenters: String,
    registrationLink: String,
}

export type { Event }