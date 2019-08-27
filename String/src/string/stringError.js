class StringError  extends Error {
    constructor(message){
        super(message);
        this.name = `StringError`;
    }
}
