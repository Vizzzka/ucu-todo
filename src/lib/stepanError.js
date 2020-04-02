export default class StepanError extends Error {
    constructor(message) {
        super(message);
        this.name = "Stepan Error"
    }
}
